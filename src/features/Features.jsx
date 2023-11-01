import { creditCard, deliveryRide, money, support } from "../assets";
import SectionWrapper from "../components/layout/SectionWrapper";

const Features = () => {
  return (
    <SectionWrapper>
      <div className="flex items-center flex-wrap justify-between p-5 border border-gray-100 gap-8 md:gap-4 rounded-lg">
        <article className="flex-left gap-3">
          <img src={deliveryRide} alt="delivery rider" className="w-14" />
          <div className="space-y-1">
            <h3 className="heading-secondary">Free Shipping</h3>
            <p>
              On orders over <span className="font-medium">$99</span>.
            </p>
          </div>
        </article>
        <article className="flex-left gap-3">
          <img src={money} alt="money" className="w-14" />
          <div className="space-y-1">
            <h3 className="heading-secondary">Money Back</h3>
            <p>Money back in 15 days.</p>
          </div>
        </article>
        <article className="flex-left gap-3">
          <img src={creditCard} alt="credit card" className="w-14" />
          <div className="space-y-1">
            <h3 className="heading-secondary">Free Shipping</h3>
            <p>100% Payment Secure.</p>
          </div>
        </article>
        <article className="flex-left gap-3">
          <img src={support} alt="online support" className="w-14" />
          <div className="space-y-1">
            <h3 className="heading-secondary">Online Support</h3>
            <p>Ensure the product quality</p>
          </div>
        </article>
      </div>
    </SectionWrapper>
  );
};

export default Features;
