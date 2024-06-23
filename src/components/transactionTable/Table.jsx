import React, { useEffect, useState } from "react";
import { pageValue } from "../utils/perPage";
import { useDispatch, useSelector } from "react-redux";
import { getTable } from "../../redux/actions";

export default function Table() {
  const [search, setSearch] = useState("");
  const { Table } = useSelector((state) => state.information);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTable(page, perPage, search));
  }, [dispatch, page, perPage, search]);
  return (
    <>
      <div className="transactions-dashboard">
        <h1>Transaction Dashboard</h1>
        <div className="controls">
          <input
            type="text"
            placeholder="Search transaction"
            className="search-box"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />

          <select
            className="month-select"
            value={perPage}
            onChange={(e) => setPerPage(e.target.value)}
          >
            {pageValue.map((item, index) => (
              <React.Fragment key={index}>
                <option value={item.value}>{item.value}</option>
              </React.Fragment>
            ))}
          </select>
        </div>
        <table className="transactions-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Category</th>
              <th>Sold</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {Table &&
              Table.transactions &&
              Table.transactions.map((item, index) => (
                <>
                  <tr key={item._id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>{item.price}</td>
                    <td>{item.category}</td>
                    <td>{item.sold ? "Yes" : "No"}</td>
                    <td>
                      <img src={item.image} alt={item.title} width="50" />
                    </td>
                  </tr>
                </>
              ))}
          </tbody>
        </table>
        {Table && (
          <div className="pagination">
            <button
              className="prev-button"
              onClick={(e) => {
                e.preventDefault();
                if (page > 0) {
                  const a = page - 1;
                  setPage(a);
                }
              }}
            >
              Previous
            </button>
            <span className="page-info">
              Page {Table.currentPage} of {Table.totalPages}
            </span>
            <button
              className="next-button"
              onClick={(e) => {
                e.preventDefault();
                const a = page + 1;
                setPage(a);
              }}
              disabled={Table.currentPage >= Table.totalPages}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </>
  );
}
