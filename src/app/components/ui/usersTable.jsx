import React from "react";
import PropTypes from "prop-types";
// // import User from "./user";
// import TableHeader from "./tableHeader";
// import TableBody from "./tableBody";
import Bookmark from "../common/bookmark";
import Qualities from "./qualities";
import Profession from "./profession";
import Table from "../common/table/table";
import { Link } from "react-router-dom";

const UsersTable = ({ users, onSort, selectedSort, onBookmark, ...rest }) => {
    const columns = {
        name: {
            path: "name",
            name: "имя",
            component: (user) => (
                <Link to={`users/${user._id}`}>{user.name}</Link>
            )
        },
        qualities: {
            name: "качества",
            component: (user) => <Qualities qualities={user.qualities} />
        },
        professions: {
            component: (user) => <Profession id={user.profession} />,
            name: "профессия"
        },
        completedMeetings: {
            path: "completedMeetings",
            name: "встретился раз"
        },
        rate: { path: "rate", name: "рейтинг" },
        bookmark: {
            path: "bookmark",
            name: "избранное",
            component: (user) => (
                <Bookmark
                    onBookmark={onBookmark}
                    id={user._id}
                    status={user.bookmark}
                />
            )
        }
    };
    return (
        <>
            <Table
                onSort={onSort}
                selectedSort={selectedSort}
                columns={columns}
                data={users}
            ></Table>
        </>
    );
};

UsersTable.propTypes = {
    users: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    onBookmark: PropTypes.func.isRequired
};
export default UsersTable;
