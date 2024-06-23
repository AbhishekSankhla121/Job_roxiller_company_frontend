import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { combineAllData } from "../../redux/actions";
import { server } from "../../redux/store";

export default function CombineAllData() {
  const { combine } = useSelector((state) => state.information);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(combineAllData());
  }, [dispatch]);
  console.log(combine);
  const link = `${server}/combinealldata?month=5&year=2022&page=1&perPage=15&search=`;
  return (
    <>
      <div className="flex-center">
        <h1>to get all combined data</h1>
        <p>please check console.log it show all data</p>
        <p>
          or you can : <a href={link}>click here</a>{" "}
        </p>
        <h1>all task done Successfully</h1>
      </div>
    </>
  );
}
