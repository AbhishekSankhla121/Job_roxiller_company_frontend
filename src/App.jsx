import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Header";
import Statistics from "./components/Satatistics/Statistics";
import BarChart from "./components/BarChart/BarChart";
import Table from "./components/transactionTable/Table";
import PieChart from "./components/pieChart/PieChart";
import CombineAllData from "./components/combineAllData/combineAllData";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Statistics />} />
          <Route path="/barchart" element={<BarChart />} />
          <Route path="/table" element={<Table />} />
          <Route path="/piechart" element={<PieChart />} />
          <Route path="/combine" element={<CombineAllData />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
