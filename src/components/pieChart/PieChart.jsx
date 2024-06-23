import React, { useEffect, useState } from "react";
import { Chart as chartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { getPieChart } from "../../redux/actions";
import { Months } from "../utils/Months";

chartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart() {
  const [selectedMonth, setSelectedMonth] = useState(0);
  const dispatch = useDispatch();
  const { pieChart, loading } = useSelector((state) => state.information);

  useEffect(() => {
    dispatch(getPieChart(selectedMonth));
  }, [dispatch, selectedMonth]);

  let labels = [];
  let data = [];

  if (!loading && pieChart) {
    labels = pieChart.map((item) => item.category);
    data = pieChart.map((item) => item.count);
  }

  const chartData = {
    labels: labels.length > 0 ? labels : labels,
    datasets: [
      {
        label: " Items",
        data: data.length > 0 ? data : data,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: true,
        text: "Sample Pie Chart",
      },
    },
  };

  return (
    <div className="flex-center">
      <h1>Pie Chart</h1>
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
      <div style={{ width: "30%", height: "500px", margin: "10px 0 0 0" }}>
        <Pie data={chartData} options={options} />
      </div>
    </div>
  );
}
