import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";
import { baseURL } from '../apiConfig';

function PublicServiceManagement() {
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [searchService, setSearchService] = useState("");

  const [serviceName, setServiceName] = useState("");
  const [description, setDescription] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [officeAddress, setOfficeAddress] = useState("");

  useEffect(() => {
    // Fetch all services from the server when the component mounts
    async function fetchServices() {
      try {
        const response = await axios.get(`${baseURL}/api/publicservice`);
        setServices(response.data);
        setFilteredServices(response.data);
      } catch (error) {
        console.error("Error fetching services:", error.message);
      }
    }

    fetchServices();
  }, []);

  useEffect(() => {
    // Filter services based on the search query
    const results = services.filter((service) => {
      return (
        service.serviceName
          .toLowerCase()
          .includes(searchService.toLowerCase()) ||
        service.description.toLowerCase().includes(searchService.toLowerCase())
      );
    });

    setFilteredServices(results);
  }, [searchService, services]);

  const createService = async () => {
    try {
      // Validate input fields
      if (
        !serviceName ||
        !description ||
        !contactNumber ||
        !email ||
        !officeAddress
      ) {
        Swal.fire("Error", "Please fill in all the required fields", "error");
        return;
      }

      // Create a new service object
      const newService = {
        serviceName,
        description,
        contactNumber,
        email,
        officeAddress,
      };

      // Add the new service to the database
      const response = await axios.post(`${baseURL}/api/publicservice`, newService);

      // Show success message and reset the input fields
      Swal.fire("Success", "New service added successfully", "success");
      setServiceName("");
      setDescription("");
      setContactNumber("");
      setEmail("");
      setOfficeAddress("");

      // Update the services state with the new service
      setServices((prevServices) => [...prevServices, response.data]);
    } catch (error) {
      console.error("Error creating service:", error.message);
    }
  };

  const deleteService = async (serviceId) => {
    try {
      // Delete the service from the database
      await axios.delete(`${baseURL}/api/publicservice/${serviceId}`);

      // Show success message
      Swal.fire("Success", "Service deleted successfully", "success");

      // Update the services state by filtering out the deleted service
      setServices((prevServices) =>
        prevServices.filter((service) => service._id !== serviceId)
      );
    } catch (error) {
      console.error("Error deleting service:", error.message);
    }
  };

  const columns = [
    {
      name: "Service Name",
      selector: (row) => row.serviceName,
      sortable: true,
    },
    {
      name: "Description",
      selector: (row) => row.description,
    },
    {
      name: "Contact Number",
      selector: (row) => row.contactNumber,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Office Address",
      selector: (row) => row.officeAddress,
    },
    {
      name: "Update",
      cell: (row) => (
        <button
          onClick={() => {
            // Implement the logic to update a service
          }}
          className="btn"
          role="button"
        >
          Update
        </button>
      ),
    },
    {
      name: "Delete",
      cell: (row) => (
        <button
          onClick={() => deleteService(row._id)}
          className="btn"
          role="button"
        >
          Delete
        </button>
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
      <br />
      <div className="row justify-content-center">
        <div className="col-md-9 m-3 p-0 ">
          <DataTable
            title="Public Service Management"
            columns={columns}
            data={filteredServices}
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
                value={searchService}
                onChange={(e) => setSearchService(e.target.value)}
              />
            }
          />
          <br />
          <br />
          <div className="modal-footer">
            <div className="p-1">
              <button
                className="btn"
                data-bs-toggle="modal"
                data-bs-target="#addNewService"
              >
                <i className="fa fa-plus" aria-hidden="true"></i>
                Create a New Service
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Add New Service Modal */}
      <div
        className="modal fade"
        id="addNewService"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="updateemailLabel">
                Create New Service
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="service-name" className="col-form-label">
                    Service Name:
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="service-name"
                    value={serviceName}
                    onChange={(e) => setServiceName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="desc" className="col-form-label">
                    Description:
                  </label>
                  <textarea
                    required
                    className="form-control"
                    id="desc"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="contact-number" className="col-form-label">
                    Contact Number:
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="contact-number"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="col-form-label">
                    Email:
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="office-address" className="col-form-label">
                    Office Address:
                  </label>
                  <textarea
                    required
                    className="form-control"
                    id="office-address"
                    value={officeAddress}
                    onChange={(e) => setOfficeAddress(e.target.value)}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={createService}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PublicServiceManagement;
