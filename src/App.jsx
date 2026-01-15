import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import toast, {
  Toaster,
  ToastBar,
  CheckmarkIcon,
  LoaderIcon,
} from "react-hot-toast";

import PublicLayout from "./components/Layout/Public/Public";
import PrivateLayout from "./components/Layout/Private/Private";

const Login = lazy(() => import("./pages/Login"));
const Portfolio = lazy(() => import("./pages/Portfolio"));

const App = () => {
  toast("Welcome to WedSocial!");
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Login />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Route>
          <Route element={<PrivateLayout />}>
            {/* Private routes go here */}
          </Route>
        </Routes>
      </Suspense>
      <Toaster
        reverseOrder={false}
        position="top-right"
        toastOptions={{
          style: {
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
