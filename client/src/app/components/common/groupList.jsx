import React from "react";
import PropTypes from "prop-types";
const GroupList = ({
    items,
    valueProp,
    contentProp,
    onItemSelect,
    selectedItem
}) => {
    if (Array.isArray(items)) {
        return (
            <ul className="list-group">
                {Object.values(items).map((item) => (
                    <li
                        role="button"
                        className={
                            "list-group-item" +
                            (item === selectedItem ? " active" : "")
                        }
                        key={item[valueProp]}
                        onClick={() => onItemSelect(item)}
                    >
                        {item[contentProp]}
                    </li>
                ))}
            </ul>
        );
    }

    return (
        <ul className="list-group">
            {Object.keys(items).map((item) => (
                <li
                    role="button"
                    className={
                        "list-group-item" +
                        (items[item] === selectedItem ? " active" : "")
                    }
                    key={items[item][valueProp]}
                    onClick={() => onItemSelect(items[item])}
                >
                    {items[item][contentProp]}
                </li>
            ))}
        </ul>
    );
};

GroupList.defaultProps = {
    valueProp: "_id",
    contentProp: "name"
};

GroupList.propTypes = {
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    valueProp: PropTypes.string.isRequired,
    contentProp: PropTypes.string.isRequired,
    onItemSelect: PropTypes.func,
    selectedItem: PropTypes.object
};

export default GroupList;
