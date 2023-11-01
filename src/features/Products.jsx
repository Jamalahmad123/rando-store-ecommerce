import { useQuery } from "@tanstack/react-query";
import ItemsList from "./ItemsList";
import { getProducts } from "../api/apiServices";
import SectionWrapper from "../components/layout/SectionWrapper";
import AddNewProduct from "./AddNewProduct";

const Products = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>error</p>;
  }

  return (
    <SectionWrapper className="space-y-6">
      <header className="flex items-center justify-between gap-3">
        <h2 className="heading-primary text-black">Products</h2>
        <AddNewProduct />
      </header>
      <ItemsList data={data} />
    </SectionWrapper>
  );
};

export default Products;
