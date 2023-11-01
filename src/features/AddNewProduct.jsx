import { MdAdd, MdImage, MdMoney, MdPerson } from "react-icons/md";
import { Button, Modal, Input } from "../components";
import useModal from "../utils/hooks/useModal";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addNewProduct } from "../api/apiServices";

const AddNewProduct = () => {
  const { isOpen, toggleModal, closeModal } = useModal();

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: addNewProduct,
    onSuccess: (data) => {
      queryClient.invalidateQueries("products");
      closeModal();
    },
    onError: (err) => {
      // toast.error(err.message);
    },
  });

  return (
    <>
      <Button variant="primary" size="md" onClick={toggleModal}>
        <MdAdd />
        <span>Add New Product</span>
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title="Add New product"
        className="max-h-[30rem] lg:max-h-full"
        maxWidth="max-w-xl"
      >
        <ProductForm mutation={mutation} />
      </Modal>
    </>
  );
};

const ProductForm = ({ mutation }) => {
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    img: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevProductData) => ({
      ...prevProductData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(productData);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="space-y-3">
        <Input
          type="text"
          name="name"
          label="Name"
          icon={MdPerson}
          value={productData.name}
          onChange={handleOnChange}
        />
        <Input
          type="number"
          name="price"
          label="Price"
          icon={MdMoney}
          value={productData.price}
          onChange={handleOnChange}
        />
        <Input
          type="text"
          name="img"
          label="Image URL"
          icon={MdImage}
          title="Please ensure the image size is 600x600 pixels"
          value={productData.img}
          onChange={handleOnChange}
        />
      </div>
      <Button disabled={mutation.isLoading}>
        {mutation.isLoading ? "Loading..." : "Submit"}
      </Button>
    </form>
  );
};

export default AddNewProduct;
