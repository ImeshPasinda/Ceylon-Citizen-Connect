import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserFeedBack } from "./../actions/feedbackAction";
import { feedbackReducer } from "../reducers/feedbackReducer";
import Loading from "../components/Loading";
import Success from "../components/Success";
import Error from "../components/Error";
import Swal from "sweetalert2";

export default function FeedbackScreen() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [subject, setsubject] = useState("");
  const [message, setmessage] = useState("");
  const [selectType, setSelectType] = useState("");
  const feedbackstate = useSelector((state) => state.feedbackReducer);
  const { error, loading, success } = feedbackstate;

  const dispatch = useDispatch();

  function feedback() {
    const newFeedback = {
      name,
      email,
      subject,
      message,
    };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      name.trim().length !== 0 &&
      emailRegex.test(email) &&
      subject.trim().length !== 0 &&
      message.trim().length !== 0
    ) {
      dispatch(UserFeedBack(newFeedback));
    } else {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      let errorMessage = "Please fill out required fields correctly!";

      if (!emailRegex.test(email)) {
        errorMessage = "Please enter a valid email address!";
      }

      Toast.fire({
        icon: "error",
        title: errorMessage,
      });
    }
  }

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />

      <section class="mb-4">
        <br></br>
        <h2 class="h1-responsive font-weight-bold text-center my-4">
          Citizen Feedbacks & Concerns System{" "}
        </h2>

        <p
          class="text-center w-responsive mx-auto mb-5"
          style={{ fontSize: "24px", fontWeight: "bold" }}
        >
          Citizen Feedbacks & Concerns System
        </p>

        <div class="row justify-content-center">
          <div className="box col-md-5 m-2 p-5">
            {loading && <Loading />}
            {success && <Success success="Feedback Send Successfully" />}
            {error && <Error error="Error !!!" />}
            <form id="contact-form" name="contact-form">
              <div class="row ">
                <div class="col-md-12">
                  <div class="md-form mb-0">
                    {/* <label for="name" class="">
                      Your name
                    </label> */}
                    <input
                      type="text"
                      id="name"
                      placeholder="Your name"
                      name="name"
                      class="form-control"
                      value={name}
                      onChange={(e) => {
                        setname(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <br></br>
                <div class="col-md-12">
                  <div class="md-form mb-0">
                    <br></br>
                   
                    <input
                      type="text"
                      id="email"
                      placeholder=" Your email"
                      name="email"
                      class="form-control"
                      value={email}
                      onChange={(e) => {
                        setemail(e.target.value);
                      }}
                    />
                  </div>
                </div>
                
                <div class="col-md-12">
                  <div class="md-form mb-0">
                  <br></br>
                    <select
                      id="type"
                      placeholder=" Select Type"
                      name="type"
                      class="form-control"
                      value={selectType}
                      onChange={(e) => {
                        setSelectType(e.target.value);
                      }}
                    >
                      <option value="" disabled selected>
                        Select Type
                      </option>
                      <option value="Item1">General Feedback</option>
                      <option value="Item2">Concern/Problem</option>
                    </select>
                  </div>
                </div>
              </div>

              <br></br>
              <div class="row">
                <div class="col-md-12">
                  <div class="md-form mb-0">
                    {/* <label for="subject" class="">
                      Subject
                    </label> */}
                    <input
                      type="text"
                      id="subject"
                      placeholder="Subject"
                      name="subject"
                      class="form-control"
                      value={subject}
                      onChange={(e) => {
                        setsubject(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
              <br></br>
              <div class="row">
                <div class="col-md-12">
                  <div class="md-form">
                    {/* <label for="message">Your message</label> */}
                    <textarea
                      type="text"
                      id="message"
                      placeholder="our message"
                      name="message"
                      rows="2"
                      class="form-control md-textarea"
                      value={message}
                      onChange={(e) => {
                        setmessage(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
            </form>
            <br></br>
            <div class="text-center text-md-left">
              <a class="btn " onClick={feedback}>
                Send
              </a>
            </div>
            <div class="status"></div>
          </div>

          <div class="col-md-3 text-center">
            <ul class="list-unstyled mb-0">
              <li>
                <i class="fas fa-map-marker-alt fa-2x"></i>
                <p>New Kandy Road,Malabe,Sri Lanka</p>
              </li>

              <li>
                <i class="fas fa-phone mt-4 fa-2x"></i>
                <p>0765615750</p>
              </li>

              <li>
                <i class="fas fa-envelope mt-4 fa-2x"></i>
                <p>contact@ceyloncitizenconnect.com</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
