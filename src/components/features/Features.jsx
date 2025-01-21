import PropTypes from "prop-types";
import { AiFillCheckCircle } from "react-icons/ai";

const Features = ({feature}) => {

    return (
        <div>
           <p className="flex items-center gap-3"><span><AiFillCheckCircle /></span> <span>{feature}</span></p> 
        </div>
    );
};

Features.propTypes = {
    feature: PropTypes.string
}

export default Features;