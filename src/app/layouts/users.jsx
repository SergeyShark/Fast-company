import React from "react";
import UserPage from "../components/page/userPage";
import { Redirect, useParams } from "react-router-dom";
import UsersListPage from "../components/page/usersListPage";
import EditPage from "../components/page/editPage.jsx/editPage";
import UsersLoader from "../components/ui/hoc/usersLoader";
import { getCurrentUserId } from "../store/users";
import { useSelector } from "react-redux";

const Users = () => {
    const params = useParams();
    const { userId, edit } = params;
    const currentUserId = useSelector(getCurrentUserId());

    return (
        <>
            <UsersLoader>
                {userId ? (
                    edit ? (
                        userId === currentUserId ? (
                            <EditPage />
                        ) : (
                            <Redirect to={`/users/${currentUserId}/edit`} />
                        )
                    ) : (
                        <>
                            <UserPage userId={userId} />
                        </>
                    )
                ) : (
                    <UsersListPage />
                )}
            </UsersLoader>
        </>
    );
};

export default Users;
