import "./App.css";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homescreen from "./screens/Homescreen";
import Loginscreen from "./screens/Loginscreen";
import Registerscreen from "./screens/Registerscreen";
import FeedbackScreen from "./screens/Feedbackscreen";
import Footer from "./components/Footer";
import AdminProfilescreen from "./screens/AdminProfilescreen";
import Adminloginscreen from "./screens/Adiminloginscreen";
import { useSelector } from "react-redux";
import Errorscreen from "./screens/Errorscreen";
import AboutScreen from "./screens/Aboutscreen";
import FAQScreen from "./screens/FAQscreen";
import Customermanagementscreen from "./screens/Customermanagementscreen";
import Feedbackmanagementscreen from "./screens/Feedbackmanagementscreen";
import Newsfeedscreen from "./screens/Newsfeedsrcreen";
import Newsfeedmanagement from "./screens/NewsfeedManagement";
import JobPortalscreen from "./screens/JobPortalscreen";
import JobportalManagementScreen from "./screens/JobportalManagementScreen";
import JobApplicantsManagementScreen from "./screens/JobApplicantsManagementScreen";
import JobApplyScreen from "./screens/JobApplyScreen";
import PublicServiceManagement from "./screens/PublicServiceManagement";
import WaterUsersManage from "./screens/WaterUsersManage";
import ElectricityUsersManage from "./screens/ElectricityUsersManage";
import Regwaterebillscreen from "./screens/Regwaterebillscreen";
import RegElectricityebillscreen from "./screens/RegElectricityebillscreen";

function App() {
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const adminloginstate = useSelector((state) => state.adminloginReducer);
  const { currentAdmin } = adminloginstate;

  return (
    <div className="App">
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Homescreen />} />
          <Route path="/login" exact element={<Loginscreen />} />
          <Route path="/admin/login" exact element={<Adminloginscreen />} />
          <Route path="/register" exact element={<Registerscreen />} />
          <Route path="/jobportal" exact element={<JobPortalscreen />} />
          <Route path="/jobapply" exact element={<JobApplyScreen />} />
          <Route path="/admin" exact element={<AdminProfilescreen />} />
          <Route path="/about" exact element={<AboutScreen />} />
          <Route path="/faq" exact element={<FAQScreen />} />
          <Route path="/newsfeed" exact element={<Newsfeedscreen />} />
          <Route path="/regwaterebill" exact element={<Regwaterebillscreen />} />
          <Route path="/regelecbill" exact element={<RegElectricityebillscreen />} />


          {currentUser ? (
            <Route path="/feedback" exact element={<FeedbackScreen />} />
          ) : <Route path="/feedback" exact element={<FeedbackScreen />} /> &&
            currentAdmin ? (
            <Route path="/error" exact element={<Errorscreen />} />
          ) : (
            <Route path="/feedback" exact element={<FeedbackScreen />} />
          )}

          {currentAdmin ? (
            <Route
              path="admin/customers"
              exact
              element={<Customermanagementscreen />}
            />
          ) : (
            <Route path="/error" exact element={<Errorscreen />} />
          )}

          {currentAdmin ? (
            <Route
              path="admin/feedback"
              exact
              element={<Feedbackmanagementscreen />}
            />
          ) : (
            <Route path="/error" exact element={<Errorscreen />} />
          )}

          {currentAdmin ? (
            <Route
              path="admin/newsfeedmanagement"
              exact
              element={<Newsfeedmanagement />}
            />
          ) : (
            <Route path="/error" exact element={<Errorscreen />} />
          )}

          {currentAdmin ? (
            <Route
              path="admin/jobportalManage"
              exact
              element={<JobportalManagementScreen />}
            />
          ) : (
            <Route path="/error" exact element={<Errorscreen />} />
          )}

          {currentAdmin ? (
            <Route
              path="admin/jobApplicantManage"
              exact
              element={<JobApplicantsManagementScreen />}
            />
          ) : (
            <Route path="/error" exact element={<Errorscreen />} />
          )}

          {currentAdmin ? (
            <Route
              path="admin/pubserviceManage"
              exact
              element={<PublicServiceManagement />}
            />
          ) : (
            <Route path="/error" exact element={<Errorscreen />} />
          )}

          {currentAdmin ? (
            <Route
              path="admin/waterManage"
              exact
              element={<WaterUsersManage />}
            />
          ) : (
            <Route path="/error" exact element={<Errorscreen />} />
          )}

          {currentAdmin ? (
            <Route
              path="admin/electricityManage"
              exact
              element={<ElectricityUsersManage />}
            />
          ) : (
            <Route path="/error" exact element={<Errorscreen />} />
          )}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
