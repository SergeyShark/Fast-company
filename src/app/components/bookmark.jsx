import React from "react";
import PropTypes from "prop-types";

const Bookmark = ({ status, onClick }) => {
    // console.log(rest.onClick);
    // const Bookmark = (props) => {
    //     const { bookmark, _id, onToggleBookMark } = props;
    // console.log(props.bookmark);
    let buttonClass = "bi bi-bookmark";
    if (status) {
        buttonClass += "-fill";
    }
    return (
        <button className="btn btn-outline-dark" onClick={onClick}>
            <i className={buttonClass}></i>
        </button>
    );
};
Bookmark.propTypes = {
    status: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Bookmark;
