import {
  FaRegHeart,
  FaShoppingCart,
  FaRegEye,
  FaRegTrashAlt,
} from "react-icons/fa";
import { BASE_URL } from "../utils/apiRoutes";
import Modal from "../components/UI/Modal";
import useModal from "../utils/hooks/useModal";
import ViewItemDetails from "./ViewItemDetails";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct } from "../api/apiServices";
import useGlobalContext from "../utils/hooks/useGlobalContext";

const ItemsList = ({ data = [] }) => {
  const { handleRemoveItem } = useGlobalContext();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: (data) => {
      queryClient.invalidateQueries("products");
    },
    onError: (err) => {
      // toast.error(err.message);
    },
  });

  const handleDelete = (id) => {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );

    if (shouldDelete) {
      mutation.mutateAsync(id).then(() => handleRemoveItem(id));
    }
    return;
  };

  const items =
    data.length > 0 ? (
      data.map((itemDetails) => (
        <Item
          key={itemDetails.id}
          itemDetails={itemDetails}
          handleDelete={handleDelete}
        />
      ))
    ) : (
      <p className="text-dark-medium">No Products Available</p>
    );

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {items}
      </div>
    </>
  );
};

const Item = ({ itemDetails, handleDelete }) => {
  const { handleAddItem } = useGlobalContext();
  const { isOpen, toggleModal, closeModal, selectedValue } = useModal();
  const { img = "", name = "", price = "", id } = itemDetails;

  return (
    <>
      <article className="group grid place-items-center space-y-3 cursor-pointer animate-slideInTop">
        <figure className="rounded-xl w-full overflow-hidden drop-shadow-md grid place-items-center relative">
          <img
            src={img}
            alt={name}
            className="w-full h-[300px] overflow-hidden rounded-xl object-cover scale-100 group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute top-auto bottom-5 space-x-2 opacity-0 -translate-y-1/2 group-hover:bottom-0 group-hover:opacity-100 transition-all duration-300">
            <button
              className="bg-white p-3 rounded-md shadow-lg hover:text-yellow-primary transition-colors"
              onClick={() => toggleModal(itemDetails)}
            >
              <FaRegEye />
            </button>
            <button
              className="bg-white p-3 rounded-md shadow-lg hover:text-yellow-primary transition-colors"
              onClick={() => handleAddItem(itemDetails)}
            >
              <FaShoppingCart />
            </button>
            <button className="bg-white p-3 rounded-md shadow-lg hover:text-yellow-primary transition-colors">
              <FaRegHeart />
            </button>
            <button
              className="bg-white p-3 rounded-md shadow-lg hover:text-red-500 transition-colors"
              onClick={() => handleDelete(id)}
            >
              <FaRegTrashAlt />
            </button>
          </div>
        </figure>
        <h3 className="heading-secondary capitalize group-hover:text-yellow-primary transition-colors">
          {name}
        </h3>
        <p className="heading-secondary text-center group-hover:text-yellow-primary transition-colors">
          <span className="sr-only">Price: </span>${price}
        </p>
      </article>
      {/* Item Detials */}
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title="Product Details"
        className="max-h-[30rem]"
      >
        <ViewItemDetails itemDetails={selectedValue} />
      </Modal>
    </>
  );
};

export default ItemsList;
