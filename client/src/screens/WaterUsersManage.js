import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";

function WaterUsersManage() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchUser, setSearchUser] = useState("");

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [waterMeterNumber, setWaterMeterNumber] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get("/api/waterUser/");
        setUsers(response.data);
        setFilteredUsers(response.data);
      } catch (error) {
        console.error("Error fetching water users:", error.message);
      }
    }

    fetchUsers();
  }, []);

  useEffect(() => {
    const results = users.filter((user) => {
      return (
        user.username.toLowerCase().includes(searchUser.toLowerCase()) ||
        user.email.toLowerCase().includes(searchUser.toLowerCase())
      );
    });

    setFilteredUsers(results);
  }, [searchUser, users]);


  const createUser = async () => {
    try {
      if (!username || !email || !password || !waterMeterNumber) {
        Swal.fire("Error", "Please fill in all the required fields", "error");
        return;
      }

      const newUser = {
        username,
        email,
        password,
        waterMeterNumber,
      };

      const response = await axios.post("/api/watersupplyusers", newUser);

      Swal.fire("Success", "New user added successfully", "success");
      setUsername("");
      setEmail("");
      setPassword("");
      setWaterMeterNumber("");

      setUsers((prevUsers) => [...prevUsers, response.data]);
    } catch (error) {
      console.error("Error creating user:", error.message);
    }
  };

  // Add other functions (createUser, deleteUser, updateUser) similar to the ones in your original code
  const deleteUser = async (userId) => {
    try {
      await axios.delete(`/api/waterUser/${userId}`);

      Swal.fire("Success", "User deleted successfully", "success");

      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error.message);
    }
  };

  const updateUser = async (userId, updatedUserData) => {
    try {
      const response = await axios.put(
        `/api/waterUser/${userId}`,
        updatedUserData
      );

      Swal.fire("Success", "User updated successfully", "success");

      setUsers((prevUsers) =>
        prevUsers.map((user) => (user._id === userId ? response.data : user))
      );
    } catch (error) {
      console.error("Error updating user:", error.message);
    }
  };


  const columns = [
    {
      name: "Username",
      selector: (row) => row.username,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Water Meter Number",
      selector: (row) => row.waterMeterNumber,
    },
    {
      name: "Actions",
      cell: (row) => (
        <>
          <button
            onClick={() =>
              updateUser(row._id, {
                /* updated data */
              })
            }
            className="btn"
            role="button"
          >
            Update
          </button>
          <button
            onClick={() => deleteUser(row._id)}
            className="btn"
            role="button"
          >
            Delete
          </button>
        </>
      ),
    },
  ];
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="row justify-content-center">
        <div className="col-md-9 m-3 p-0 ">
          <DataTable
            title="Water Users Management"
            columns={columns}
            data={filteredUsers}
            pagination
            fixedHeader
            fixedHeaderScrollHeight="450px"
            selectableRows
            selectableRowsHighlight
            subHeader
            subHeaderComponent={
              <input
                type="text"
                placeholder="Search here..."
                className="w-25 form-control"
                value={searchUser}
                onChange={(e) => setSearchUser(e.target.value)}
              />
            }
          />
          {/* Add other UI components similar to your original code */}
          
        </div>
      </div>
    </div>
  );
}

export default WaterUsersManage;
