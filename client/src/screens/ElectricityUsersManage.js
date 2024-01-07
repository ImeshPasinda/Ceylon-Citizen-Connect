import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";
import { baseURL } from '../apiConfig';

function ElectricityUsersManage() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchUser, setSearchUser] = useState("");
  const [searchUserByelecmNo, setsearchUserByelecmNo] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    // Fetch electricity users data from the server
    axios
      .get(`${baseURL}/api/electricityUser/`)  // Adjusted endpoint
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
      name: "Units",
      selector: (row) => row.totalUnits,
    },
    {
      name: "Amount (Rs.)",
      selector: (row) => row.amountpermonth,
    },
    {
      name: "Actions",
      cell: (row) => (
        <div>
          <button onClick={() => deleteUser(row._id)} className="btn">
            Delete
          </button>
        </div>
      ),
    },
  ];

  const deleteUser = (userId) => {
    // Display a confirmation dialog before deleting the user
    axios
      .delete(`${baseURL}/api/electricityUser/${userId}`) // Adjusted endpoint
      .then((res) => {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          }
        });

        Toast.fire({
          icon: 'success',
          title: 'E-Bill has been deleted successfully!'
        });

        setTimeout(function () {
          window.location.reload('/admin/electricityManage');
        }, 1500);
      })
      .catch((err) => {
        console.log(err.message);
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })

        Toast.fire({
          icon: 'error',
          title: 'E-Bill has been deleted Unsuccessfully!'
        })
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



  const findUserByElecmNo = async () => {
    setLoading(true);

    // Simulate a delay of 1.5 seconds for the loading spinner
    setTimeout(async () => {
      try {
        const response = await axios.get(`${baseURL}/api/users/find-by-elecmNo/${searchUserByelecmNo}`);
        if (response.data) {
          setSelectedUser(response.data);
          setNotFound(false);
        } else {
          setSelectedUser(null);
          setNotFound(true);
        }
      } catch (error) {
        console.error("Error fetching user by elecmNo:", error.message);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    }, 1000); // Adjust the delay time here (in milliseconds)
  };



  const handleSearch = () => {
    setSelectedUser(null);
    setNotFound(false);
    findUserByElecmNo();
  };



  const [formData, setFormData] = useState({
    month: '',
    date: '',
    units: '',
    amount: '',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSaveChanges = async () => {
    const { month, date, units, amount } = formData;

    // Check if all required fields are filled
    if (month && date && units && amount) {
      const billData = {
        accountNo: selectedUser?.watermNo || '',
        email: selectedUser?.email || '',
        name: selectedUser?.name || '',
        month,
        date,
        totalUnits: units,
        amountpermonth: amount,
      };

      console.log(billData);

      try {
        const response = await axios.post(`${baseURL}/api/electricityUser/`, billData);
        console.log('Bill saved:', response.data);

        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })

        Toast.fire({
          icon: 'success',
          title: 'Bill Genarating Successfully!'
        })

        setTimeout(function () {
          window.location.reload('/admin/electricityManage');
        }, 1500);

        setFormData({
          month: '',
          date: '',
          units: '',
          amount: '',
        });
      } catch (error) {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })

        Toast.fire({
          icon: 'error',
          title: 'Bill Genarating Unsuccessfully!'
        })
        console.error('Error saving bill:', error.message);

      }
    } else {

      console.log('Please fill in all required fields.');
    }
  };




  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="row justify-content-center" style={{ paddingTop: "25px" }}>
        <div className="col-md-9 m-3 p-0">
          <DataTable
            title=<div style={{ paddingTop: "25px" }}>
              <h20>
                Electricity Users Management
              </h20>
            </div>
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
          <br />
          <br />
          <div className="modal-footer">
            <button
              class="btn"
              data-bs-target="#addbill"
              data-bs-toggle="modal"
              data-bs-dismiss="modal"
            >
              <i
                class="fa-solid fa-plus fa-beat"
                style={{ color: "white" }}
              ></i>{" "}
              Add New Bill Info
            </button>
            <div className="p-1">
              <button
                class="btn"
                data-bs-target="#exampleModal"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
              >
                <i
                  style={{ fontSize: "15px", color: "white" }}
                  class="fa fa-file"
                  aria-hidden="true"
                ></i> <> </>
                Generate Report
              </button>
            </div>
          </div>
        </div>
      </div>




      {/* Adding Bill - Model */}
      <div class="modal fade" id="addbill" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Add New Bill</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" style={{ padding: '40px' }}>
              <div class="row">
                <div class="col-7 pr-1">
                  <input
                    type="text"
                    placeholder="Enter Electricity Account No..."
                    class="form-control"
                    value={searchUserByelecmNo}
                    onChange={(e) => setsearchUserByelecmNo(e.target.value)}
                  />
                </div>
                <div class="col-5 pl-1" style={{ paddingTop: "10px" }}>
                  <button class="btn btn-primary w-100" onClick={handleSearch} disabled={loading}>
                    {loading ? (
                      <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    ) : (
                      'Find'
                    )}
                  </button>
                </div>
              </div>

              {selectedUser ? (
                <div>
                  <div style={{ paddingTop: "25px" }}>
                    <div class="alert alert-success" role="alert">
                      Account No : {selectedUser.elecmNo}
                    </div>
                  </div>

                  <div class="mb-3 row">
                    <label for="accNo" class="col-sm-2 col-form-label" style={{ paddingTop: "15px" }}>Acc No</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="accno" value={selectedUser.elecmNo} disabled />
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label for="name" class="col-sm-2 col-form-label" style={{ paddingTop: "15px" }}>Name</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="name" value={selectedUser.name} disabled />
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label for="email" class="col-sm-2 col-form-label" style={{ paddingTop: "15px" }}>Email</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="email" value={selectedUser.email} disabled />
                    </div>
                  </div>
                  <div class="mb-3 row" style={{ paddingTop: '15px' }}>
                    <label for="month" class="col-sm-2 col-form-label" style={{ paddingTop: "10px" }}>Month</label>
                    <div class="col-sm-10">
                      <select class="form-select" value={formData.month} onChange={handleInputChange} id="month">
                        <option value="">Select a month</option>
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                      </select>
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label for="date" class="col-sm-2 col-form-label" style={{ paddingTop: "18px" }}>Date</label>
                    <div class="col-sm-4">
                      <input type="date" class="form-control" id="date" value={formData.date} onChange={handleInputChange} />
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label for="number" class="col-sm-2 col-form-label" style={{ paddingTop: "18px" }}>Units</label>
                    <div class="col-sm-4">
                      <input type="number" class="form-control" id="units" placeholder="0" value={formData.units} onChange={handleInputChange} min="0" />
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label for="number" class="col-sm-2 col-form-label" style={{ paddingTop: "18px" }}>Amount</label>
                    <div class="col-sm-4">
                      <input type="number" class="form-control" id="amount" placeholder="0.00" value={formData.amount} onChange={handleInputChange} min="0" />
                    </div>
                  </div>


                </div>
              ) : notFound ? (
                <div style={{ paddingTop: '20px' }}>
                  <div class="alert alert-warning" role="alert">
                    Invalid Electricity Account No!
                  </div>
                </div>
              ) : null}


            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={handleSaveChanges}
                disabled={!formData.month || !formData.date || !formData.units || !formData.amount}
              >
                Genarate Bill
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ElectricityUsersManage;
