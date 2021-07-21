import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Kycform = (props) => {
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, errors } = useForm();

  const submitHandler = async (result) => {
    console.log(result);
    alert("Success, thanks for signing up!");
    props.history.push("/");
  };

  return (
    <div className="container">
      <form
        className="form-1"
        onSubmit={handleSubmit(submitHandler)}
        name="formy"
      >
        <h2 className="text-center mt-4">Registration Form</h2>
        <p className="text-center">Let's get to know you better</p>
        <p className="text-center alert alert-primary">
          Please note that for security reasons, the <b>Title</b>,{" "}
          <b>Firstname</b>, and <b>Lastname</b> fields have been prefilled with
          existing data gotten from the ID Verification exercise you just
          completed, and cannot be edited.
        </p>
        <div className="form-row">
          <div className="form-group col-md-3  ">
            <label
              htmlFor="inputState"
              className={!errors.title ? "title" : " errorText"}
            >
              Title
            </label>
            <select
              id="inputState"
              className={!errors.title ? "form-control" : "form-control error"}
              name="title"
              ref={register()}
              disabled
            >
              <option selected value="Mr.">
                Mr.
              </option>
              <option value="Mr.">Mr.</option>
              <option value="Mrs.">Mrs.</option>
              <option value="Miss.">Miss.</option>
              <option value="Dr.">Dr.</option>
              <option value="Pharm.">Pharm.</option>
              <option value="Prof.">Prof.</option>
              <option value="Rev.">Rev.</option>
              <option value="Eng.">Eng.</option>
              <option value="Sir.">Sir.</option>
            </select>
            {errors.title && <p className="errorText">Title is required</p>}
          </div>
          <div className="form-group col-md-5">
            <label
              htmlFor="surname"
              className={!errors.surname ? "title" : " errorText"}
            >
              Last Name
            </label>
            <input
              type="text"
              className={
                !errors.surname ? "form-control" : "form-control error"
              }
              id="surname"
              name="surname"
              value="IMONJIRIE"
              disabled
              ref={register({ required: true })}
              // value={surname}
              // onChange={surnameHandler}
            />
            {errors.surname && (
              <p className="errorText">Last name is required</p>
            )}
          </div>
          <div className="form-group col-md-4">
            <label
              htmlFor="firstname"
              className={!errors.firstname ? "title" : " errorText"}
            >
              First Name
            </label>
            <input
              type="text"
              className={
                !errors.firstname ? "form-control" : "form-control error"
              }
              id="firstname"
              name="firstname"
              value="NEWTON"
              disabled
              ref={register({ required: true })}
            />
            {errors.firstname && (
              <p className="errorText">First name is required</p>
            )}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label
              htmlFor="email"
              className={!errors.email ? "title" : " errorText"}
            >
              Email Address
            </label>
            <input
              type="text"
              className={!errors.email ? "form-control" : "form-control error"}
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
          <div className="form-group col-md-6">
            <label
              htmlFor="phone"
              className={!errors.phone ? "title" : " errorText"}
            >
              Phone Number
            </label>
            <input
              type="text"
              className={!errors.phone ? "form-control" : "form-control error"}
              id="phone"
              name="phone"
              ref={register({ required: true, pattern: /[0-9]/ })}
            />
            {errors.phone && (
              <p className="errorText">Enter a valid Phone number</p>
            )}
          </div>
        </div>
        <div className="form-group">
          <label
            htmlFor="address"
            className={!errors.address ? "title" : " errorText"}
          >
            Home Address{" "}
          </label>
          <textarea
            type="text-area"
            className={!errors.address ? "form-control" : "form-control error"}
            id="address"
            name="address"
            ref={register({ required: true })}
            rows="4"
          ></textarea>
          {errors.address && <p className="errorText">Address is required</p>}
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label
              htmlFor="profession"
              className={!errors.uname ? "title" : " errorText"}
            >
              Username{" "}
            </label>
            <input
              type="text"
              className={!errors.uname ? "form-control" : "form-control error"}
              id="uname"
              name="uname"
              ref={register({ required: true })}
            />
            {errors.uname && <p className="errorText">Username is required</p>}
          </div>
          <div className="form-group col-md-6">
            <label
              htmlFor="profession"
              className={!errors.pass ? "title" : " errorText"}
            >
              Password{" "}
            </label>
            <input
              type="password"
              className={!errors.pass ? "form-control" : "form-control error"}
              id="pass"
              name="pass"
              ref={register({ required: true })}
            />
            {errors.pass && <p className="errorText">Password is required</p>}
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
          <label className="form-check-label title" htmlFor="exampleCheck1">
            By clicking the Submit button, I hereby agree that I have read the
            terms and conditions.
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
      </form>
    </div>
  );
};

export default Kycform;
