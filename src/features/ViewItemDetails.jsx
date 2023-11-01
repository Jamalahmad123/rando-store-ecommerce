import { MdShoppingCart } from "react-icons/md";
import { Select, Button } from "../components";

const ViewItemDetails = ({ itemDetails }) => {
  const { name, price, img } = itemDetails;
  return (
    <div className="grid grid-cols-16 gap-5 md:gap-10">
      <img src={img} alt={name} className="w-full rounded-xl object-cover" />
      <div className="space-y-5">
        <h2 className="heading-primary text-black">{name}</h2>
        <p className="heading-secondary">
          <span className="sr-only">Price: </span>${price}
        </p>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
        <Select name="size" label="Size" firstOption="Choose Size">
          <option value="md">md</option>
          <option value="xl">xl</option>
          <option value="xxl">xxl</option>
        </Select>
        <Select name="color" label="Color" firstOption="Choose Color">
          <option value="blue">blue</option>
          <option value="green">green</option>
          <option value="white">white</option>
        </Select>
        <Button>
          <MdShoppingCart />
          <span>Add to Cart</span>
        </Button>
      </div>
    </div>
  );
};

export default ViewItemDetails;
