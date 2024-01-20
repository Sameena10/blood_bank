import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-flex flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Mannage blood Bank app</h3>
          <hr />
          <p>Lorem Ipsum and for th you where the fir</p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
