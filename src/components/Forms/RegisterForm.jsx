// Css
import "./styles.css";
// Assets
import logo from "../../assets/logo-trans.png";

// Modules
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// import toast from "react-hot-toast";
// import { useDispatch, useSelector } from "react-redux";

const RegisterForm = () => {
  const validateFormSchema = "";
  const initialFormValues = {};
  const handleSubmit = () => {};

  return (
    <div className="form">
      <div className="form-header-area">
        <img src={logo} alt="WedSocial Logo" className="form-logo-image" />
        <h1 className="form-logo-title">
          Wedding <span>Social</span>
        </h1>
      </div>
      <p>Welcome to WedSocial! Please register to continue.</p>
      <Formik
        validationSchema={validateFormSchema}
        initialValues={initialFormValues}
        onSubmit={handleSubmit}
      >
        <Form className="form-area">
          <div className="form-row-group">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                <span>Name Surname:</span>
                <ErrorMessage
                  component={"span"}
                  className="form-error-message"
                  name="name"
                />
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                className="form-input"
                placeholder="Please enter your full name..."
              />
            </div>
            <div className="form-group">
              <label htmlFor="username" className="form-label">
                <span>Username:</span>
                <ErrorMessage
                  component={"span"}
                  className="form-error-message"
                  name="username"
                />
              </label>
              <Field
                type="text"
                id="username"
                name="username"
                className="form-input"
                placeholder="Please enter your username..."
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              <span>Email:</span>
              <ErrorMessage
                component={"span"}
                className="form-error-message"
                name="email"
              />
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              className="form-input"
              placeholder="Please enter your email address..."
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              <span>Password:</span>
              <ErrorMessage
                component={"span"}
                className="form-error-message"
                name="password"
              />
            </label>
            <Field
              type="password"
              id="password"
              name="password"
              className="form-input"
              autoComplete="on"
              placeholder="Please enter your password..."
            />
          </div>
          <div className="form-group">
            <button type="submit" className="form-submit-button">
              Sign Up
            </button>
            <a href="/login" className="form-switch-link">
              Sign In
            </a>
          </div>
        </Form>
      </Formik>
      <div className="form-footer-area">
        <p className="form-footer-detail">
          <span>&copy;</span> 2026 WedSocial. All rights reserved.
        </p>
      </div>
    </div>
  );
};
export default RegisterForm;
