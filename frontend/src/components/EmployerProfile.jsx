import JobDetails from "./Job/JobDetails";
import axios from "axios";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../main";

const EmployerProfile = () => {
  const { user } = useContext(Context); // Get user data from Context

  if (!user) {
    return <p>Loading...</p>; // Handle case where user data is not available yet
  }

  return (
    <div className="Prof">
      <h3>Name: {user.name}</h3>
      <h3>Role: {user.role}</h3>
      <h3>Contact: {user.phone}</h3>
      <h3>Email: {user.email}</h3>
      {/* Add more JSX to render other details of the employer profile */}
    </div>
  );
}

export default EmployerProfile;
