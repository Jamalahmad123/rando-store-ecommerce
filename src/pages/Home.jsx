import {
  Features,
  ItemsList,
  ItemsShowcase,
  Products,
  StoreBanner,
} from "../features";

const Home = () => {
  return (
    <>
      <StoreBanner />
      <Features />
      <ItemsShowcase />
      <Products />
    </>
  );
};

export default Home;
