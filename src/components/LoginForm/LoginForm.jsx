// Css
import "./LoginForm.css";
// Assets
import logo from "../../assets/logo-trans.png";

// Modules
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

// Auth Slice Thunks
import { signIn } from "../../redux/auth/thunk.js";

// Login Form Component - Renders the login form UI
const LoginForm = () => {
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
    dispatch(signIn(values))
      .then((result) => {
        console.log("Login Result:", result);
        toast.success("Logged in successfully!");
      })
      .catch((err) => {
        console.error("Login Error:", err);
        toast.error(`Login failed: ${err}`);
      })
      .finally(() => {
        toast.loading("Logging in...");
      });

    actions.setSubmitting(false);
  };
  return (
    <div className="login-form">
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
              Log In
            </button>
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
