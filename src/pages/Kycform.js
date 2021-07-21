import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Kycform = () => {
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, errors } = useForm();

  const submitHandler = async (result) => {
    console.log(result);
  };

  return (
    <div className="container">
      <form
        className="form-1"
        onSubmit={handleSubmit(submitHandler)}
        name="formy"
      >
        <div className="form-row Input-Label ">
          <h2>PART 1: Personal Information</h2>
        </div>
        <br />
        <br />
        <div className="form-row Input-Label">Customers Name</div>
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
              // onChange={onSelectTitleHandler}
            >
              <option></option>
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
              Surname
            </label>
            <input
              type="text"
              className={
                !errors.surname ? "form-control" : "form-control error"
              }
              id="surname"
              name="surname"
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
              Personal Email Address
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
              Personal Phone Number
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
              className={!errors.profession ? "title" : " errorText"}
            >
              Profession{" "}
            </label>
            <input
              type="text"
              className={
                !errors.profession ? "form-control" : "form-control error"
              }
              id="profession"
              name="profession"
              ref={register({ required: true })}
            />
            {errors.profession && (
              <p className="errorText">Profession is required</p>
            )}
          </div>
          <div className="form-group col-md-6">
            <label
              htmlFor="source_of_funds"
              className={!errors.source_of_funds ? "title" : " errorText"}
            >
              Source of Funds
            </label>
            <input
              type="text"
              className={
                !errors.source_of_funds ? "form-control" : "form-control error"
              }
              id="source_of_funds"
              name="source_of_funds"
              ref={register({ required: true })}
            />
            {errors.source_of_funds && (
              <p className="errorText">Source of funds is required</p>
            )}
          </div>
        </div>
        {/* BEGIN IDENTIFICATION */}
        <br />
        <br />
        <br />
        {/* <div className="row">
              <div className="col-md-9">
                <div className="form-row Input-Label">
                  <h2>PART 2: Identification</h2>
                </div>
                <br />
                <br />
                <div className="form-row Input-Label">
                  Mode of Identification
                </div>
                <div style={{ marginTop: 16, marginLeft: 10 }}>
                  <div className="row align-items-center">
                    <Switch
                      uncheckedIcon={false}
                      onChange={handleCheck1}
                      checked={checked1}
                    />
                    <span className="title2">International Passport</span>

                    {checked1 && (
                      <IdentificationDetails
                        errorId1={errorId1}
                        errorId2={errorId2}
                        errorId3={errorId3}
                        checked1_p={checked1}
                      />
                    )}
                  </div>
                </div>
                <div style={{ marginTop: 28, marginLeft: 10 }}>
                  <div className="row align-items-center">
                    <Switch
                      uncheckedIcon={false}
                      onChange={handleCheck2}
                      checked={checked2}
                    />
                    <span className="title2">National ID Card</span>

                    {checked2 && (
                      <IdentificationDetails
                        errorId1={errorId1}
                        errorId2={errorId2}
                        errorId3={errorId3}
                        checked2_p={checked2}
                      />
                    )}
                  </div>
                </div>
                <div style={{ marginTop: 28, marginLeft: 10 }}>
                  <div className="row align-items-center">
                    <Switch
                      uncheckedIcon={false}
                      onChange={handleCheck3}
                      checked={checked3}
                    />
                    <span className="title2">Driver's License</span>

                    {checked3 && (
                      <IdentificationDetails
                        errorId1={errorId1}
                        errorId2={errorId2}
                        errorId3={errorId3}
                        checked3_p={checked3}
                      />
                    )}
                  </div>
                </div>
                <div style={{ marginTop: 28, marginLeft: 10 }}>
                  <div className="row align-items-center">
                    <Switch
                      uncheckedIcon={false}
                      onChange={handleCheck4}
                      checked={checked4}
                    />
                    <span className="title2">Voter's Card</span>

                    {checked4 && (
                      <IdentificationDetails
                        errorId1={errorId1}
                        errorId2={errorId2}
                        errorId3={errorId3}
                        checked4_p={checked4}
                      />
                    )}
                  </div>
                </div>
              </div>

              <div className="col-md-3 ">
                <br />
                <br />
                <label
                  htmlFor="inputCity"
                  style={{ color: passportUrlError && "red" }}
                >
                  Upload Selected ID
                </label>
                {uploadSuccess && (
                  <div className="alert alert-success" role="alert">
                    Upload successful!
                  </div>
                )}
                {uploadSuccess === false && (
                  <div className="alert alert-danger" role="alert">
                    Upload failed!
                  </div>
                )}
                <ImageUploader
                  key={ImageUploaderKey}
                  withIcon={true}
                  accept="*"
                  singleImage={true}
                  buttonText={
                    !loadingUpload ? (
                      "Select ID"
                    ) : (
                      <span
                        style={{ width: 20, height: 20 }}
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                    )
                  }
                  withPreview={true}
                  label="Max file size: 5MB"
                  errorStyle={{ textAlign: "center" }}
                  fileTypeError=" is not a supported file extension. Try .jpeg, .pdf and .png"
                  onChange={onDrop}
                  imgExtension={[".jpg", ".jpeg", ".png", ".gif", ".pdf"]}
                  maxFileSize={5242880}
                  fileSizeError="Maximum file size cannot exceed 5 MB!"
                  buttonStyles={{
                    backgroundColor: "transparent",
                    color: !passportUrlError ? "#359be0" : "red",
                  }}
                  fileContainerStyle={{
                    border: !passportUrlError
                      ? "2px dotted #e6e8ed"
                      : "2px dotted red",
                  }}
                  labelStyles={{ color: "#b2b2b2" }}
                />
                {passportUrlError && (
                  <p style={{ color: "red", textAlign: "center" }}>
                    Please upload an ID !
                  </p>
                )}
              </div>
            </div> */}
        <br /> <br />
        <div className="form-check">
          <input
            type="checkbox"
            required
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label title" htmlFor="exampleCheck1">
            By clicking the Submit button I hereby entirely and irrevocably
            agrees to indemnify Canary Point Group, its agents and respective
            affiliates as well as its officers, directors and employees,
            collateral managers, servicers and counsel against any loss,
            litigation or any other expense arising from the statement of untrue
            or incomplete information herein, or due to the undersigned's
            failure to disclose any illegality in relation to the source of
            funds as requested by this document. I hereby confirmed that the
            information provided by me is accurate.
          </label>
        </div>
        {/* END IDENTIFICATION */}
        <br /> <br />
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
          {/* 
              <button
                onClick={() => setYes(true)}
                className="btn btn-lg btn-primary action-block-btn-yes"
              >
                {loading1 ? (
                  <span
                    style={{ width: 25, height: 25 }}
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                ) : (
                  "Yes"
                )}
              </button> */}
        </div>
      </form>
    </div>
  );
};

export default Kycform;
