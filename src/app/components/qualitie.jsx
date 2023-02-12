import React from "react";
import PropTypes from "prop-types";

const Qualitie = ({ color, name, _id }) => {
    const classes = "badge m-2 p-2 bg-";
    //   key={qualitiy._id}>{qualitiy.name}
    return (
        <span className={classes + color} key={_id}>
            {name + " "}
        </span>
    );
};

Qualitie.propTypes = {
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired
};

export default Qualitie;
