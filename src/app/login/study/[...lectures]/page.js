import React from "react";

const Lecture = ({ params }) => {
  return (
    <div>
      Day: {params.lectures[0]} Lectures: {params.lectures[1]}
    </div>
  );
};

export default Lecture;
