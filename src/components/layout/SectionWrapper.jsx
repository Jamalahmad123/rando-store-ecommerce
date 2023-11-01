import { twMerge } from "tailwind-merge";

const SectionWrapper = ({ children, className }) => {
  return (
    <section className="py-8">
      <div className={twMerge("container px-4", className)}>{children}</div>
    </section>
  );
};

export default SectionWrapper;
