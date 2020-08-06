import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import serviceCenterList from "./serviceCenterList";
import bikeModel from "./bikeModel";
import userBike from "./userBike";
import dashboard from "./dashboard";
import packages from "./packages";
import profile from "./profile";
import booking from "./booking";

export default combineReducers({
  alert,
  auth,
  profile,
  serviceCenterList,
  bikeModel,
  userBike,
  dashboard,
  packages,
  booking,
});
