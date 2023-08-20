import React from "react";
import PropTypes from "prop-types";
const Qualitie = ({ name, color, _id }) => {
    return (
        <span className={"badge m-1 bg-" + color} key={_id}>
            {name}
        </span>
    );
};

Qualitie.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
};
export default Qualitie;

Qualitie.propTypes = {
    _id: PropTypes.string.isRequired
};
