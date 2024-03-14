import React from "react";

const boardsDetail = ({ params }: { params: { boardId: string } }) => {
  const { boardId } = params;
  return (
    <div className="bg-slate-500 w-96 text-center my-20 p-10 mx-20">
      <h1>
        BOARD NAME <b>{boardId}</b>   
      </h1>
    </div>
  );
};

export default boardsDetail;