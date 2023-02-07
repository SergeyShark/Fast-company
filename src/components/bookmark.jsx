import React from "react";
const Bookmark = (props) => {
  console.log({ props });
  console.log(props.bookmark);
  let buttonClass = "bi bi-bookmark-check";
  if (props.bookmark) {
    buttonClass += "-fill";
  }
  return (
    <button
      onClick={() => {
        props.onToggleBookMark(props._id);
      }}
    >
      <i className={buttonClass}></i>
    </button>
  );
};
export default Bookmark;
