import PropTypes from "prop-types";
import Features from "../features/Features";

const PriceOption = ({ option }) => {
  const { name, price, billingCycle, features } = option;
  return (

    <div className="bg-sky-500 p-6 rounded-md text-center flex flex-col">
      <div>
        <h2>
          <span className="text-7xl font-extrabold">{price}</span>
          <span className="text-2xl">/{billingCycle}</span>
        </h2>
        <h4 className="text-3xl">{name}</h4>
     
      </div>

    {/* Features content */}

    <div className="mt-6 p-3 flex-grow">
        {
            features.map((feature, index) => <Features
            
                key={index}
                feature={feature}
                
            
            ></Features>)
            
        }
    </div>

    <button className="bg-orange-400 hover:bg-gray-400 mt-8 font-bold py-2 w-full rounded-md">Buy Now</button>

    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
};
export default PriceOption;
