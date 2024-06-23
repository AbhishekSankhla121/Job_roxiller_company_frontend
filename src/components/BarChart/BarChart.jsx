import React, { useEffect, useState } from "react";
import {
  Chart as chartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Months } from "../utils/Months";
import { useDispatch, useSelector } from "react-redux";
import { getBarChart } from "../../redux/actions";

chartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart() {
  const [selectedMonth, setSelectedMonth] = useState("0");

  const { BarChart, loading } = useSelector((state) => state.information);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBarChart(selectedMonth));
  }, [dispatch, selectedMonth]);

  let label = [],
    current_data = [],
    start,
    end;

  if (!loading && BarChart) {
    BarChart.responseData.forEach((item) => {
      label.push(item.range);
      current_data.push(item.count);
    });
    start = new Date(BarChart.startDate).toLocaleDateString();
    end = new Date(BarChart.endDate).toLocaleDateString();
  }

  const data = {
    labels: label,
    datasets: [
      {
        label: "no of item",
        data: current_data,
        backgroundColor: "rgb(255, 153, 38)",
        borderColor: "rgb(255, 153, 38)",
        borderWidth: 1,
      },
    ],
  };

  // Configuration options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: true,
        text: `Bar Chart from ${start} to ${end} `,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="flex-center">
      <h1>BarChart graph</h1>
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
      <div style={{ width: "60%", height: "500px", margin: "10px 0 0 0" }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
