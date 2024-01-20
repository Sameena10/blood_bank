import React, { useState, useEffect } from "react";
import Header from "../../components/shared/Layout/Header.js";
import API from "./../../services/api.js";
import moment from "moment";
const Analytic = () => {
  const [data, setData] = useState([]);
  const [inventoryData, setInventoryData] = useState([]);
  const colors = [
    "#219C90",
    "#FF6969",
    "#C70039",
    "#B0D9B1",
    "#088395",
    "#219C90",
    "#EFB495",
    "#EF9595",
  ];
  //get blood group data
  const getBloodGroupData = async () => {
    try {
      const { data } = await API.get(
        `${process.env.REACT_APP_API}/api/v1/analytic/bloodGroup-data`
      );
      if (data?.success) {
        setData(data?.bloodGroupData);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  //lifecycle method
  useEffect(() => {
    getBloodGroupData();
  }, []);
  const getBloodRecords = async () => {
    try {
      const { data } = await API.get(
        `${process.env.REACT_APP_API}/api/v1/inventory/get-recent-inventory`
      );
      if (data?.success) {
        setInventoryData(data?.inventory);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  //lifecycle method
  useEffect(() => {
    getBloodRecords();
  }, []);
  return (
    <>
      <Header />
      <div className="d-flex flex-row flex-wrap">
        {data?.map((record, i) => (
          <div
            className="card m-2 p-1"
            key={i}
            style={{ width: "18rem", backgroundColor: `${colors[i]}` }}
          >
            {/* <img src="..." className="card-img-top" alt="..." /> */}
            <div className="card-body">
              <h5 className="card-title bg-light text-dark text-center mb-3">
                {record.bloodGroup}
              </h5>
              <p className="card-text">
                Total In: <b>{record.totalIn}</b>(ML)
              </p>
              <p className="card-text">
                Total Out: <b>{record.totalOut}</b>(ML)
              </p>
            </div>
            <div className="card-footr text-light bg-dark text-center">
              Total Available: <b>{record.availableBlood}</b>(ML)
            </div>
          </div>
        ))}
      </div>
      <div lassName="container my-3">
        <h1 className="my-3">Recent blood Transactions</h1>
        <table className="table ">
          <thead>
            <tr>
              <th scope="col">Blood Group</th>
              <th scope="col">Inventory Type</th>
              <th scope="col">Quantity</th>
              <th scope="col">Donar Email</th>
              <th scope="col">TIme & Date</th>
            </tr>
          </thead>
          <tbody>
            {inventoryData?.map((record) => (
              <tr key={record._id}>
                <td>{record.bloodGroup}</td>
                <td>{record.inventoryType}</td>
                <td>{record.quantity} (ML)</td>
                <td>{record.email}</td>
                <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Analytic;
