import React from "react";
import SignupForm from "./SignupForm"
function SignupPage() {
  return (
    <div>
      <h1>Sign Up</h1>
      <div className="form-container">
        <div className="form-group left">
          <div className="inner-form">
            <h2>Business Signup</h2>
            <SignupForm />
          </div>
        </div>
        <div className="form-group right">
          <div className="inner-form">
            <h2>Customer Signup</h2>
            <SignupForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
