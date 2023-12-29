import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";

function WaterUsersManage() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchUser, setSearchUser] = useState("");

  useEffect(() => {
    // Fetch water users data from the server
    axios
      .get("/api/waterUser/")  // Adjusted endpoint
      .then((res) => {
        setUsers(res.data);
        setFilteredUsers(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const columns = [
    {
      name: "Account Number",
      selector: (row) => row.accountNo,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Month",
      selector: (row) => row.month,
    },
    {
      name: "Actions",
      cell: (row) => (
        <div>
          <button onClick={() => viewUserDetails(row)} className="btn">
            View
          </button>{" "}
          <button onClick={() => deleteUser(row._id)} className="btn">
            Delete
          </button>
        </div>
      ),
    },
  ];

  const viewUserDetails = (user) => {
    // Display user details using a modal or a new page
    Swal.fire({
      title: "User Details",
      html: `
        <p><strong>Account Number:</strong> ${user.accountNo}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Month:</strong> ${user.month}</p>
        <p><strong>Total Units:</strong> ${user.totalUnits}</p>
        <p><strong>Amount Per Month:</strong> ${user.amountpermonth}</p>
        <p><strong>Reading Date:</strong> ${user.date}</p>

      `,
      showCloseButton: true,
    });
  };

  const deleteUser = (userId) => {
    // Display a confirmation dialog before deleting the user
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Perform the delete action using axios
        axios
          .delete(`/api/waterUser/${userId}`)  // Adjusted endpoint
          .then((res) => {
            Swal.fire("Deleted!", "User has been deleted.", "success");
            // Update the user list after deletion
            setUsers(users.filter((user) => user._id !== userId));
          })
          .catch((err) => {
            console.log(err.message);
            Swal.fire("Error", "Failed to delete user", "error");
          });
      }
    });
  };

  // Filter users based on search input
  useEffect(() => {
    const results = users.filter((user) => {
      return (
        user.accountNo.toLowerCase().includes(searchUser.toLowerCase()) ||
        user.email.toLowerCase().includes(searchUser.toLowerCase()) ||
        user.month.toLowerCase().includes(searchUser.toLowerCase())
      );
    });

    setFilteredUsers(results);
  }, [searchUser, users]);

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="row justify-content-center">
        <div className="col-md-9 m-3 p-0">
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
        </div>
      </div>
    </div>
  );
}

export default WaterUsersManage;
