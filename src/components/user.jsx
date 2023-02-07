import React from "react";
import Bookmark from "./bookmark";
import Qualitie from "./qualitie";
const User = (props) => {
  console.log(props);
  return (
    <>
      <tr key={props._id}>
        <td>{props.name}</td>
        <td>
          {props.qualities.map((qualitiy) => (
            <Qualitie {...qualitiy} />
          ))}
        </td>
        <td key={props.profession._id}>{props.profession.name}</td>
        <td>{props.completedMeetings}</td>
        <td>{props.rate}</td>
        <td>
          <Bookmark {...props} />
        </td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => {
              props.onDelete(props._id);
            }}
          >
            delete
          </button>
        </td>
      </tr>
    </>
  );
};
export default User;
