import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import PublicLayout from "./components/Layout/Public/Public";
import PrivateLayout from "./components/Layout/Private/Private";

// Pages
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));

const App = () => {
  toast("Welcome to WedSocial!");
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route element={<PrivateLayout />}>
            {/* Private routes go here */}
          </Route>
        </Routes>
      </Suspense>
      <Toaster
        reverseOrder={true}
        position="top-right"
        toastOptions={{
          style: {
            width: "auto",
            backgroundColor: "#0e1823",
            color: "#e4ca73",
            fontSize: "1.1rem",
          },
        }}
      />
    </>
  );
};
export default App;
