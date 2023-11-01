import { cap, shirt, shoes, watch } from "../assets";
import SectionWrapper from "../components/layout/SectionWrapper";

const ItemsShowcase = () => {
  return (
    <SectionWrapper className="space-y-6">
      <h2 className="heading-primary text-black">Feature Products</h2>
      <div className="grid grid-cols-16 gap-8">
        <Item imgSrc={watch} title="Smartwatch" />
        <Item imgSrc={shoes} title="Footwear" />
        <Item imgSrc={cap} title="Cap" />
        <Item imgSrc={shirt} title="Shirt" />
      </div>
    </SectionWrapper>
  );
};

const Item = ({ imgSrc, title }) => {
  return (
    <article className="group grid place-items-center space-y-3 cursor-pointer">
      <div className="rounded-xl overflow-hidden drop-shadow-md">
        <img
          src={imgSrc}
          alt={title}
          className="overflow-hidden rounded-xl object-cover scale-100 group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <h3 className="heading-secondary group-hover:text-yellow-primary transition-colors">
        {title}
      </h3>
    </article>
  );
};

export default ItemsShowcase;
