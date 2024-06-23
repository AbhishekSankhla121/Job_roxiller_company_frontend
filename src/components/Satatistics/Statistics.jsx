import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTransactionStatistics } from "../../redux/actions";
import { Months } from "../utils/Months";

export default function Statistics() {
  const [selectedMonth, setSelectedMonth] = useState("0");
  const dispatch = useDispatch();
  const { transactionStatistics, loading } = useSelector(
    (state) => state.information
  );
  useEffect(() => {
    dispatch(getTransactionStatistics(selectedMonth));
  }, [dispatch, selectedMonth]);

  let start, end;
  if (!loading && transactionStatistics) {
    start = new Date(transactionStatistics.startFrom).toLocaleDateString();
    end = new Date(transactionStatistics.toEnd).toLocaleDateString();
  }

  return (
    <>
      <div className="flex-center">
        <h1>Transactions Statistics</h1>
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          {Months.map((item, index) => (
            <React.Fragment key={index}>
              <option value={item.value}>{item.name}</option>
            </React.Fragment>
          ))}
        </select>

        {loading ? (
          "Loding..."
        ) : (
          <>
            {transactionStatistics && (
              <div className="statistics-box">
                <h2>Statistics </h2>

                <div>Total sale: {transactionStatistics.sale} </div>
                <div>Total sold item:{transactionStatistics.soldItem} </div>
                <div>
                  Total not sold item: {transactionStatistics.notSoldItem}
                </div>
                <div>
                  Total Number of item: {transactionStatistics.totalItems}
                </div>
                <div>
                  date: {start} - {end}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}
