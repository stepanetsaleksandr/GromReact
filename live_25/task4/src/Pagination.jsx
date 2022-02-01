//input: Page num, prevHandler, nextHandler
//out: jsx
import React from "react";

const Pagination = (props) => {
  const maxPageNum = props.usersCount / props.itemsPerPage;

  if (props.pageNumber === 1) {
    return (
      <>
        <div className="pagination">
          <button onClick={props.prev} className="btn" disabled></button>

          <span className="pagination__page">{props.pageNumber}</span>
          <button onClick={props.next} className="btn">
            →
          </button>
        </div>
      </>
    );
  } else if (props.pageNumber >= maxPageNum) {
    return (
      <>
        <div className="pagination">
          <button onClick={props.prev} className="btn">
            ←
          </button>

          <span className="pagination__page">{props.pageNumber}</span>
          <button onClick={props.next} className="btn" disabled></button>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="pagination">
        <button onClick={props.prev} className="btn">
          ←
        </button>
        <span className="pagination__page">{props.pageNumber}</span>
        <button onClick={props.next} className="btn">
          →
        </button>
      </div>
    </>
  );
};

export default Pagination;
