import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Navbar from "../components/Navbar";

const Kycform = (props) => {
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, errors } = useForm();

  const submitHandler = async (result) => {
    console.log(result);
    alert("Success, thanks for signing up!");
    props.history.push("/dashboard");
  };

  return (
    <>
      <Navbar show />
      <div className="container ">
        <div className="">
          <form
            className="row"
            onSubmit={handleSubmit(submitHandler)}
            name="form"
          >
            <div className="col-md-9">
              <h2 className="text-center mt-4">Registration Form</h2>
              <p className="text-center">Let's get to know you better</p>

              <div className="form-row">
                <div className="form-group col-md-12">
                  <label
                    htmlFor="profession"
                    className={!errors.uname ? "title" : " errorText"}
                  >
                    Username{" "}
                  </label>
                  <input
                    type="text"
                    className={
                      !errors.uname ? "form-control" : "form-control error"
                    }
                    id="uname"
                    name="uname"
                    ref={register({ required: true })}
                  />
                  {errors.uname && (
                    <p className="errorText">Username is required</p>
                  )}
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-12">
                  <label
                    htmlFor="email"
                    className={!errors.email ? "title" : " errorText"}
                  >
                    Email Address
                  </label>
                  <input
                    type="text"
                    className={
                      !errors.email ? "form-control" : "form-control error"
                    }
                    id="email"
                    name="email"
                    ref={register({
                      required: true,
                      pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/,
                    })}
                  />
                  {errors.email && (
                    <p className="errorText">Enter a valid Email address</p>
                  )}
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-12">
                  <label
                    htmlFor="profession"
                    className={!errors.pass ? "title" : " errorText"}
                  >
                    Password{" "}
                  </label>
                  <input
                    type="password"
                    className={
                      !errors.pass ? "form-control" : "form-control error"
                    }
                    id="uname"
                    name="pass"
                    ref={register({ required: true })}
                  />
                  {errors.pass && (
                    <p className="errorText">Password is required</p>
                  )}
                </div>
              </div>
              <br />
              <div className="form-check">
                <input
                  type="checkbox"
                  required
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label
                  className="form-check-label title"
                  htmlFor="exampleCheck1"
                >
                  By clicking the Submit button, I hereby agree that I have read
                  the terms and conditions.
                </label>
              </div>
              {/* END IDENTIFICATION */}
              <div className="form-group d-flex justify-content-center">
                <label className="title-business">
                  {/* Are you a Business ?{" "} */}
                </label>
              </div>
              <div className="form-group action-block d-flex justify-content-between">
                <button
                  id="submit_button"
                  // onClick={() => setNo(true)}
                  className="btn btn-lg btn-primary action-block-btn-no"
                >
                  {loading ? (
                    <span
                      style={{ width: 25, height: 25 }}
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                  ) : (
                    "SUBMIT"
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Kycform;
