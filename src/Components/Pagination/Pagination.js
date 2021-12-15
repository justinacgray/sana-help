import { Fragment } from "react/cjs/react.development";
import ReactPaginate from "react-paginate";
import React, { useState } from "react";

const Pagination = () => {
    const [items, setItems] = useState([]);
    const handlePageClick = (data) => {
        console.log(data.selected);
    };
    return (
        <Fragment>
            <ReactPaginate
                previousLabel={"previous"}
                nextLabel={"next"}
                breakLabel={"..."}
                pageCount={10}
                marginPagesDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={"pagination justify-content-center"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                activeClassName={"active"}
            />
        </Fragment>
    );
};

export default Pagination;
