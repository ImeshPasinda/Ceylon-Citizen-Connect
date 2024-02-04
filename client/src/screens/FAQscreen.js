import React from "react";

function FAQScreen() {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="faq">
        <div className="container">
          <div class="wrapper bg-white rounded shadow">
            <br></br>

            <div className="h2 text-center fw-bold" style={{ fontFamily: 'Signika Negative, sans-serif' }}>
              Frequently Asked Questions
            </div>


            <div class="d-flex justify-content-center"></div>
            <br></br>
            <div
              class="accordion accordion-flush border-top border-start border-end"
              id="myAccordion"
            >
              <div class="accordion-item">
                {" "}
                <h2 class="accordion-header" id="flush-headingOne">
                  <button
                    class="accordion-button collapsed border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    How can I report a specific issue or concern to the
                    government through this platform?
                  </button>{" "}
                </h2>
                <div
                  id="flush-collapseOne"
                  class="accordion-collapse collapse border-0"
                  style={{ background: "white", fontSize: "15px" }}
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#myAccordion"
                >
                  {" "}
                  <div class="accordion-body p-0">
                    <p className="p-3">
                      To report an issue, navigate to the "Citizen Feedback &
                      Concerns" section on the platform. Click on the "Submit
                      Feedback" option and fill out the form with details about
                      the issue. You can also attach relevant documents to
                      provide more information.
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button
                    class="accordion-button collapsed border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    Can I track the status of my submitted complaint or concern?
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  style={{ background: "white", fontSize: "15px" }}
                  class="accordion-collapse collapse border-0"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#myAccordion"
                >
                  <div class="accordion-body p-3">
                    <p>
                      Yes, you can track the status of your complaint. Simply
                      log in to your account, go to the "My Complaints" section,
                      and you will find a list of your submitted complaints
                      along with their current status and any updates from the
                      concerned authorities.
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                {" "}
                <h2 class="accordion-header" id="flush-headingOne">
                  <button
                    class="accordion-button collapsed border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    {" "}
                    How do I stay informed about government announcements and
                    important news?{" "}
                  </button>{" "}
                </h2>
                <div
                  id="flush-collapseThree"
                  style={{ background: "white", fontSize: "15px" }}
                  class="accordion-collapse collapse border-0"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#myAccordion"
                >
                  <div class="accordion-body p-0">
                    <p className="p-3">
                      Visit the "Government Announcements" section on the
                      platform. Here, you can find categorized updates on
                      politics, development, education, economy, and more.
                      Ensure you are logged in to access the latest and most
                      accurate information.
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                {" "}
                <h2 class="accordion-header" id="flush-headingOne">
                  <button
                    class="accordion-button collapsed border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFour"
                    aria-expanded="false"
                    aria-controls="flush-collapseFour"
                  >
                    {" "}
                    How can I apply for government jobs or check for employment
                    opportunities?
                  </button>{" "}
                </h2>
                <div
                  id="flush-collapseFour"
                  style={{ background: "white", fontSize: "15px" }}
                  class="accordion-collapse collapse border-0"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#myAccordion"
                >
                  {" "}
                  <div class="accordion-body p-0">
                    {" "}
                    <ul class="list-unstyled m-0">
                      <p className="p-3">
                        Explore the "Government Job / Employment Section" on the
                        platform. Log in to your account, visit the employment
                        section, and find the latest job opportunities posted by
                        the government. Follow the application process mentioned
                        in each job listing.
                      </p>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button
                    class="accordion-button collapsed border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFive"
                    aria-expanded="false"
                    aria-controls="flush-collapseFive"
                  >
                    Can I provide feedback on the platform or suggest
                    improvements?{" "}
                  </button>
                </h2>
                <div
                  id="flush-collapseFive"
                  style={{ background: "white", fontSize: "15px" }}
                  class="accordion-collapse collapse border-0"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#myAccordion"
                >
                  <div class="accordion-body p-0">
                    <p className="p-3">
                      We value your feedback. Navigate to the "Feedback" section
                      to share your thoughts on the platform. Your suggestions
                      and insights help us enhance the user experience and make
                      the system more effective.
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button
                    class="accordion-button collapsed border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseSix"
                    aria-expanded="false"
                    aria-controls="flush-collapseSix"
                  >
                    How do I register for eBill services?{" "}
                  </button>
                </h2>
                <div
                  id="flush-collapseSix"
                  style={{ background: "white", fontSize: "15px" }}
                  class="accordion-collapse collapse border-0"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#myAccordion"
                >
                  <div class="accordion-body p-0">
                    <p className="p-3">
                      To register for eBill services, log in to your account on
                      our platform and navigate to the "eBill Registration"
                      section. Follow the on-screen instructions to provide the
                      required information, including your billing details and
                      contact information.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQScreen;
