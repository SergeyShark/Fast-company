import React, { useState, useEffect } from "react";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";
import User from "./user";
import PropTypes from "prop-types";
import GroupList from "./groupList";
import API from "../api";

const Users = ({ users: allUsers, ...rest }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfessions] = useState();

    const count = allUsers.length;
    const pageSize = 4;

    useEffect(() => {
        console.log("send request");
        API.professions.fetchAll().then((data) => setProfessions(data));
        // console.log("change current page");
    }, []);

    useEffect(() => {
        console.log(professions);
    }, [professions]);

    const handleProfessionSelect = (second) => {
        console.log(second);
    };
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const userCrop = paginate(allUsers, currentPage, pageSize);
    // console.log(userCrop);
    return (
        <>
            <GroupList
                items={professions}
                onItemSelect={handleProfessionSelect}
            />
            {count > 0 && (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Имя</th>
                            <th scope="col">Качества</th>
                            <th scope="col">Профессия</th>
                            <th scope="col">Встретился раз</th>
                            <th scope="col">Оценка</th>
                            <th scope="col">Избранное</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {userCrop.map((user) => (
                            <User {...rest} {...user} key={user._id} />
                        ))}
                    </tbody>
                </table>
            )}
            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </>
    );
};
Users.propTypes = {
    users: PropTypes.array
};
export default Users;
