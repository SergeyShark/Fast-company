import React, { useState } from "react";
import Bookmark from "./bookmark";
import Qualitie from "./qualitie";
import PropTypes from "prop-types";
import DeleteButton from "./deleteButton";

const User = ({
    _id,
    name,
    qualities,
    profession,
    completedMeetings,
    rate,
    onDelete,
    bookmark,
    onToggleBookMark
}) => {
    const [userHovered, setUserHovered] = useState(false);

    return (
        <>
            <tr
                key={_id}
                onMouseOver={() => {
                    setUserHovered(true);
                }}
                onMouseOut={() => {
                    setUserHovered(false);
                }}
            >
                <td>{name}</td>
                <td>
                    {qualities.map((qualitiy) => (
                        <Qualitie {...qualitiy} key={qualitiy._id} />
                    ))}
                </td>
                <td>{profession.name}</td>
                <td>{completedMeetings}</td>
                <td>{rate}</td>
                <td>
                    <Bookmark
                        status={bookmark}
                        onClick={() => onToggleBookMark(_id)}
                    />
                </td>
                <td>
                    <DeleteButton
                        _id={_id}
                        onClick={() => {
                            onDelete(_id);
                        }}
                        isHovered={userHovered}
                    />
                </td>
            </tr>
        </>
    );
};

User.propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    qualities: PropTypes.array.isRequired,
    completedMeetings: PropTypes.number.isRequired,
    profession: PropTypes.object.isRequired,
    rate: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired,
    bookmark: PropTypes.bool.isRequired,
    onToggleBookMark: PropTypes.func.isRequired
};

export default User;
