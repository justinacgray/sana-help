import { Fragment } from "react/cjs/react.development";
import ReactPaginate from "react-paginate";

const Pagination = () => {
    return (
        <Fragment className="container">
            <ReactPaginate
                previousLabel={"previous"}
                nextLabel={"next"}
                breakLabel={"..."}
                pageCount={40}
                marginPagesDisplayed={3}
            />
        </Fragment>
    );
};

export default Pagination;
