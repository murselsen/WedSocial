// Css
import "./styles.css";
// Assets
import logo from "../../assets/logo-trans.png";

// Modules
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

// Auth Slice
import { signIn } from "../../redux/auth/thunk.js";

// Login Form Component - Renders the login form UI
const LoginForm = () => {
  const authState = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const initialFormValues = {
    email: "",
    password: "",
  };
  const validateFormSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });
  const handleSubmit = (values, actions) => {
    dispatch(signIn(values));

    actions.setSubmitting(false);
  };
  if (authState.isLoading) {
    toast.loading("Logging in...", { id: "loginToast" });
  }
  if (authState.error) {
    toast.error(authState.error, { id: "loginToast" });
  }
  return (
    <div className="form">
      <div className="form-header-area">
        <img src={logo} alt="WedSocial Logo" className="form-logo-image" />
        <h1 className="form-logo-title">
          Wedding <span>Social</span>
        </h1>
      </div>
      <p>Welcome to WedSocial! Please log in to continue.</p>
      <Formik
        validationSchema={validateFormSchema}
        initialValues={initialFormValues}
        onSubmit={handleSubmit}
      >
        <Form className="form-area">
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              <span>Email:</span>{" "}
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
              <span>Password:</span>{" "}
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
              Sign In
            </button>
            <a href="/register" className="form-switch-link">
              Sign Up
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

export default LoginForm;
