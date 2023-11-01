import { FaTimes } from "react-icons/fa";
import Button from "../UI/Button";
import useGlobalContext from "../../utils/hooks/useGlobalContext";

const CartAside = ({ isCartOpen, toggleCart }) => {
  const { cartItems, handleRemoveItem } = useGlobalContext();

  const totalPrice = cartItems.reduce(
    (acc, curr) => acc + +curr.price * curr.quantity,
    0
  );

  return (
    <aside
      className={`fixed top-0 right-0 h-screen w-96 p-6 bg-white rounded-l-xl transition-transform duration-500 transform divide-y divide-gray-200 ${
        isCartOpen ? "translate-x-0 z-[9999]" : "translate-x-full"
      }`}
    >
      <div className="flex-btw pb-4">
        <h2 className="heading-secondary">Cart</h2>
        <button onClick={toggleCart}>
          <FaTimes />
        </button>
      </div>
      <CartItems cartItems={cartItems} handleRemoveItem={handleRemoveItem} />
      {totalPrice !== 0 && (
        <div className="flex-btw py-4">
          <h3 className="text-black font-medium text-lg">Subtotal:</h3>
          <div className="text-yellow-primary text-xl font-medium">
            $ {totalPrice}
          </div>
        </div>
      )}
      <div className="py-4 w-full">
        <Button>Checkout</Button>
      </div>
    </aside>
  );
};

const CartItems = ({ cartItems, handleRemoveItem }) => {
  return (
    <div className="divide-y divide-gray-200 py-6">
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div className="flex gap-3 py-4 last:pb-0" key={item.id}>
            <div className="relative w-20 h-20 rounded-md">
              <img
                src={item.img}
                alt="name"
                className="w-full h-full rounded-md object-cover"
              />
              <button
                className="absolute -top-2 -left-2 bg-gray-100 text-gray-500 p-1 rounded-full text-xs w-5 h-5 text-center drop-shadow-md hover:text-red-500 transition-colors"
                onClick={() => handleRemoveItem(item.id)}
              >
                <FaTimes />
              </button>
            </div>
            <div>
              <h3 className="text-black font-medium text-lg">{item.name}</h3>
              <p className="">
                {item.quantity} x ${item.price}
              </p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-600 text-lg font-medium">No Item Added</p>
      )}
    </div>
  );
};

export default CartAside;
