import React from "react";
import PropTypes from "prop-types";
const SearchStatus = ({ length }) => {
    const renderPhrase = (number) => {
        if (number === 0) {
            return "никто не тусанет с тобой сегодня";
        } else if (number <= 1 || number >= 5) {
            return `${number} человек тусанет с тобой сегодня`;
        } else {
            return `${number} человека тусанет с тобой сегодня`;
        }
    };
    if (length === 0) {
        return <span className="badge bg-danger">{renderPhrase(length)}</span>;
    }
    return (
        <>
            <span className="badge bg-primary">{renderPhrase(length)}</span>
        </>
    );
};

SearchStatus.propTypes = {
    length: PropTypes.number.isRequired
};
export default SearchStatus;
