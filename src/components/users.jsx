import React, { useState } from "react";
import api from "../api";
const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  const handleDelete = (userID) => {
    console.log(userID);
    setUsers((prevState) => prevState.filter((user) => user._id !== userID));
  };
  const renderPharse = (number) => {
    // return number > 4 ? number + " человк тусанет с тобой сегодня" : "";
    if (number > 4) {
      return number + " человк тусанет с тобой сегодня";
    } else if (number <= 4 && number > 1) {
      return number + " человка тусанет с тобой сегодня";
    } else if (number === 1) {
      return number + " человк тусанет с тобой сегодня";
    } else {
      return "никто не тусанет с тобой сегодня";
    }
  };
  console.log(users.length);
  let classes = "badge m-2 p-2 bg-";
  const getHeadingClasses = () => {
    let classesForHeading = "badge ";
    classesForHeading +=
      users.length === 0 ? "badge bg-danger" : "badge bg-primary";
    return classesForHeading;
  };

  return (
    <>
      <h2>
        <span className={getHeadingClasses()}>
          {renderPharse(users.length)}
        </span>
      </h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился раз</th>
            <th scope="col">Оценка</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>
                {user.qualities.map((qualitiy) => (
                  <span className={classes + qualitiy.color} key={qualitiy._id}>
                    {qualitiy.name}
                  </span>
                ))}
              </td>
              <td key={user.profession._id}>{user.profession.name}</td>
              <td>{user.completedMeetings}</td>
              <td>{user.rate}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    handleDelete(user._id);
                  }}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Users;
