import React from "react";

export default function Jobs({ jobs }) {
  function applyNow() {
    window.location.href = "/jobapply";
  }

  return (
    <div
      className="shadow-lg p-4 m-2 bg-white"
      style={{ borderRadius: "25px", textAlign: "left" }}
    >
      <div className="row gx-5">
        <div className="col">
          <span className="badge bg-danger px-2 py-1 shadow-1-strong mb-3">
            <i className="fa fa-clock" aria-hidden="true"></i>{" "}
            {jobs.createdAt.substring(0, 10)}
          </span>
          <> </>
          <span className="badge bg-success px-2 py-1 shadow-1-strong mb-3">
            <i className="fa fa-grid-2" aria-hidden="true"></i> {jobs.category}
          </span>
          <br />
          <h9 style={{ fontSize: "23px" }}>{jobs.jobtitle}</h9>
          <br />
          <br />
          <b>Job Description: </b>{" "}
          {jobs.description.split("\n").map((line, index) => (
            <p key={index} className="text-muted">
              {line}
            </p>
          ))}
          <p9>
            <br />
          
            <b>Location: </b>
            {jobs.location}
          </p9>
          <p9>
            <br />
            <b>Salary: </b>
            {jobs.salary}
          </p9>
          <p9>
            <br />
            <b>Ministry: </b>
            {jobs.ministry}
          </p9>
        </div>
      </div>

      <br />
      <button onClick={applyNow} type="button" class="btn ">
        Apply Now
      </button>
    </div>
  );
}
