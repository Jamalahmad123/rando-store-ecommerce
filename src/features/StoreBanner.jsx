import { HomeBanner } from "../assets";
import Button from "../components/UI/Button";

const slides = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=2012&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    url: "https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGhvbmV8ZW58MHx8MHx8fDA%3D",
  },
];

const StoreBanner = () => {
  return (
    <header
      className="min-h-[80vh] bg-center bg-cover duration-500 flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${HomeBanner})`,
      }}
    >
      <div className="container px-4">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
          Limited Offer Up to 50%
        </h1>
        <p className="text-white mb-5 mt-1">
          Elevate Your Basic with a Touch of Glam.
        </p>
        <Button>Shop Now</Button>
      </div>
    </header>
  );
};

export default StoreBanner;
