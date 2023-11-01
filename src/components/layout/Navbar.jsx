import { Link } from "react-router-dom";
import { MdOutlinePerson, MdOutlineShoppingCart } from "react-icons/md";

import { logo } from "../../assets";
import CartAside from "./CartAside";
import { useState } from "react";
import useGlobalContext from "../../utils/hooks/useGlobalContext";

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => setIsCartOpen((prev) => !prev);

  return (
    <header className="relative">
      <nav className="bg-white container px-4 py-6 flex-btw">
        {/* Logo */}
        <img src={logo} alt="store logo" className="w-32" />
        {/* Links */}
        <div className="flex-left gap-3">
          <Link className="text-dark-medium hover:text-yellow-primary transition-colors">
            Home
          </Link>
          <Link className="text-dark-medium hover:text-yellow-primary transition-colors">
            Shop
          </Link>
          <Link className="text-dark-medium hover:text-yellow-primary transition-colors">
            Categories
          </Link>
          <Link className="text-dark-medium hover:text-yellow-primary transition-colors">
            Products
          </Link>
          <Link className="text-dark-medium hover:text-yellow-primary transition-colors">
            Pages
          </Link>
        </div>
        <div className="flex-left gap-3">
          <button className="text-gray-900">
            <MdOutlinePerson size={32} />
          </button>
          <CartButton toggleCart={toggleCart} />
        </div>
      </nav>
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleCart}
        />
      )}
      <CartAside isCartOpen={isCartOpen} toggleCart={toggleCart} />
    </header>
  );
};

const CartButton = ({ toggleCart }) => {
  const { cartItems } = useGlobalContext();

  const items = cartItems.length;

  return (
    <button className="text-gray-900 relative" onClick={toggleCart}>
      <MdOutlineShoppingCart size={32} />
      {items !== 0 && (
        <div className="absolute -top-2 -right-3 text-center rounded-full bg-yellow-primary font-medium">
          <span className="w-6 h-6 block">{items}</span>
        </div>
      )}
    </button>
  );
};

export default Navbar;
