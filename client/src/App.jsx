import { useState, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import PublicLayout from "./components/Layout/Public/Public";
import PrivateLayout from "./components/Layout/Private/Private";

const Login = lazy(() => import("./pages/Login"));

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Login />} />
        </Route>
        <Route element={<PrivateLayout />}>
          {/* Private routes go here */}
        </Route>
      </Routes>
    </Suspense>
  );
};
export default App;
