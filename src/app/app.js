import React, { useState } from "react";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";
import API from "./api";

function App() {
    const [users, setUsers] = useState(API.users.fetchAll());

    const handleDelete = (userID) => {
        console.log(userID);
        setUsers((prevState) =>
            prevState.filter((user) => user._id !== userID)
        );
    };

    const handleToggleBookMark = (id) => {
        setUsers(
            users.map((user) => {
                if (user._id === id) {
                    user.bookmark = !user.bookmark;
                }
                return user;
            })
        );
    };

    // const handleMouseOver = (value) => {
    //     console.log("Over", value);
    // };

    // const handleMouseOut = (value) => {
    //     console.log("Out", value);
    // };

    return (
        <>
            <SearchStatus length={users.length} />
            <Users
                users={users}
                onDelete={handleDelete}
                onToggleBookMark={handleToggleBookMark}
            />
        </>
    );
}

export default App;
