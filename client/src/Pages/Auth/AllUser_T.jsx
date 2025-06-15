// only using for testing purpose of api 

import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import axios from "axios";
import Table from "react-bootstrap/Table";

const AllUser_T = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/admin/alluser"); // ✅ Correct port
      setUsers(res.data);
    } catch (error) {
      console.error("Error fetching users:", error.message);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <Header />
      <h1 className="text-center my-3">This is all User page</h1>
      <div className="container">
        <div className="row">
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((user, index) => (
                  <tr key={user._id || index}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.mobile}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center">
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllUser_T;
