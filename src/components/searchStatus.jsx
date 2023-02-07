import React from "react";
const SearchStatus = ({ length }) => {
  console.log(length);
  const renderPharse = (number) => {
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
  //   console.log(users.length);
  let classes = "badge m-2 p-2 bg-";
  const getHeadingClasses = () => {
    let classesForHeading = "badge ";
    classesForHeading += length === 0 ? "badge bg-danger" : "badge bg-primary";
    return classesForHeading;
  };
  return (
    <h2>
      <span className={getHeadingClasses()}>{renderPharse(length)}</span>
    </h2>
  );
};
export default SearchStatus;
