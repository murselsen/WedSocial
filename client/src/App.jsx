import { useState, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";

const Login = lazy(() => import("./pages/Login"));

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Login />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
export default App;
