import PropTypes from "prop-types";

const MyLink = ({route}) => {
    const {name, path} = route;
    return (
        <li className="hover:bg-yellow-200 text-center p-1 rounded">
            <a href={path} >{name}</a>
        </li>
    );
};


// MyLink.proptype {
//     route: PropTypes.object;
// }

export default MyLink;