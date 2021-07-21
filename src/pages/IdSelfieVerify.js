import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Camera, { FACING_MODES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import ImagePreview from "../utils/ImagePreview";
import ImageUploader from "react-images-upload";
import $ from "jquery";
import Navbar from "../components/Navbar";

const Kycform = (props) => {
  const [loading, setLoading] = useState(false);
  const [ImageUploaderKey, setImageUploaderKey] = useState(0);
  const [passportUrl, setPassportUrl] = useState("");
  const [passportUrlError, setPassportUrlError] = useState(false);
  const [passportUrlMessage, setPassportUrlMessage] = useState("");
  const [picture, setPicture] = useState([]);
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [loadingUpload1, setLoadingUpload1] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(null);
  const [passportUrl1, setPassportUrl1] = useState("");
  const [openCamera, setOpenCamera] = useState(false);
  const [dataUri, setDataUri] = useState("");
  const [editButton, setEditButton] = useState(false);

  const [startVerification, setStartVerification] = useState(false);

  const { register, handleSubmit, errors, getValues } = useForm();

  const endpoint1 = "https://kyc-api.cpfs.online";

  const onDrop = async (picture) => {
    setPicture(picture);
    uploadSuccess && setUploadSuccess(false);
    passportUrlError && setPassportUrlError(false);

    const image = picture[0];
    if (image) {
      setLoadingUpload(true);
      try {
        let formData = new FormData();
        formData.append("image", image);

        const response = await fetch(`${endpoint1}/upload`, {
          method: "POST",
          body: formData,
        });

        const uri = await response.json();

        await setPassportUrl(uri.message);
        setUploadSuccess(true);
        setImageUploaderKey(ImageUploaderKey + 1);
        setLoadingUpload(false);
      } catch (error) {
        setUploadSuccess(false);
        setLoadingUpload(false);
        console.log(error);
      }
    }
  };

  const handleCameraClicked = (e) => {
    e.preventDefault();
    setDataUri("");
    setOpenCamera(true);
    setEditButton(true);
  };

  const handleTakePhoto = async (dataUri) => {
    setDataUri(dataUri);
    setOpenCamera(false);
    setPassportUrlMessage("");

    const data = {
      base64: dataUri,
    };

    setLoadingUpload1(true);

    try {
      const response = await fetch(`${endpoint1}/uploadbase64`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const uri = await response.json();

      await setPassportUrl1(uri.message);
      setLoadingUpload1(false);
      // await dispatch(uploadImagePersonalDetails(data));
      setPassportUrlMessage("Image upload successful !");
      setEditButton(false);
    } catch (error) {
      console.log(error);
      setPassportUrlMessage("Image upload failed !");
      setEditButton(false);
      setLoadingUpload1(false);
    }
  };

  const handleStartVerificationClicked = () => {
    $(".close").click();
    props.history.push("/kyc/new-customer");
  };

  const submitHandler = async (result) => {
    if (!passportUrl) {
      setPassportUrlError(true);
      console.log("no passport url");
      return;
    }
    if (!passportUrl1) {
      // setPassportUrlError(true);
      alert("Please kindly take a selfie!");
      return;
    }
    console.log(result, passportUrl);
  };

  const isFullscreen = false;

  return (
    <>
      <Navbar show />
      <div className="container">
        <form
          className="form-1"
          onSubmit={handleSubmit(submitHandler)}
          name="formy"
        >
          <h1 className="text-center mt-4">ID Verification</h1>
          <p className="text-center alert alert-primary">
            For better User Experience, the ID verification process is done
            first, before the other basic information is collected, because why
            put the users through the stress of filling forms when they don't
            know if the ID verification will pass or not?{" "}
          </p>
          <div className="row mt-4"></div>
          <div className="row mt-4">
            <div className="col-9">
              <h4 htmlFor="inputCity "> Take Selfie</h4>
              <div className="form-group mt-4">
                <button
                  style={{
                    backgroundColor: "#ccc",
                    padding: 5,
                    cursor: "pointer",
                    border: "1px solid black",
                  }}
                  onClick={handleCameraClicked}
                >
                  Launch camera
                </button>
                <br />
                <br />
                {dataUri ? (
                  <ImagePreview
                    dataUri={dataUri}
                    isFullscreen={isFullscreen}
                    // width="500"
                    // height="100"
                  />
                ) : (
                  openCamera && (
                    <Camera
                      onTakePhotoAnimationDone={handleTakePhoto}
                      //  idealFacingMode={FACING_MODES.ENVIRONMENT}
                      isFullscreen={isFullscreen}
                      idealResolution={{ width: 640, height: 480 }}
                    />
                  )
                )}
                {loadingUpload1 && (
                  <div className="d-flex justify-content-center">
                    <span
                      style={{ width: 25, height: 25 }}
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                  </div>
                )}
                <br />
                {passportUrlMessage && (
                  <div
                    className={`alert ${
                      passportUrlMessage.includes("failed")
                        ? "alert-danger"
                        : " alert-success"
                    }`}
                    role="alert"
                  >
                    {passportUrlMessage}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="form-group">
            <button
              // type="button"
              id="submit_button"
              disabled={!passportUrl1}
              data-toggle={passportUrl1 && "modal"}
              data-target="#exampleModal"
              className="btn"
            >
              {loading ? (
                <span
                  style={{ width: 25, height: 25 }}
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
              ) : (
                "Continue"
              )}
            </button>
          </div>
        </form>

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  {startVerification
                    ? "ID Verification Successfull"
                    : "Confirmation Dialog"}
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                {startVerification ? (
                  <>
                    <div className="d-flex justify-content-center mb-2">
                      <i
                        className="fa fa-user-check text-success"
                        style={{ fontSize: 100 }}
                      ></i>
                    </div>
                    <div className="">
                      <h5 className="text-center">
                        Verification Successful, proceed...
                      </h5>
                    </div>
                  </>
                ) : (
                  <>
                    <p className="text-center">
                      You are sending your
                      <b>selfie</b> below to our API to check for liveness and
                      confirm the authenticity of the selfie. <br />
                      Are you sure you want to continue?
                    </p>
                    <div className="d-flex justify-content-center align-items-center">
                      <ImagePreview
                        dataUri={dataUri}
                        isFullscreen={isFullscreen}
                        style={{
                          background: "#000",
                          height: 200,
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  </>
                )}
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-light btn-sm"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  class="btn btn-primary btn-sm"
                  onClick={() => {
                    !startVerification && setStartVerification(true);
                    startVerification && handleStartVerificationClicked();
                  }}
                >
                  {startVerification
                    ? "Continue Registration"
                    : "Start ID Verification"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Kycform;
