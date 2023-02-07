import React from "react";
const Qualitie = ({ color, name, _id }) => {
  let classes = "badge m-2 p-2 bg-";
  //   key={qualitiy._id}>{qualitiy.name}
  return (
    <span className={classes + color} key={_id}>
      {name + " "}
    </span>
  );
};
export default Qualitie;
