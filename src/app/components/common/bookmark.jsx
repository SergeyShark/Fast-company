import React from "react";
import PropTypes from "prop-types";
const Bookmark = ({ status, id, onBookmark }) => {
    const iconClassname = status
        ? "bi bi-bookmark-fill bi-sm"
        : "bi bi-bookmark";

    return (
        <>
            <button onClick={() => onBookmark(id)}>
                <i className={iconClassname}></i>
            </button>
        </>
    );
};

Bookmark.propTypes = {
    status: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    onBookmark: PropTypes.func.isRequired
};

export default Bookmark;
