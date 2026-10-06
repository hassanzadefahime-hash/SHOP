import { Outlet } from "react-router-dom";

import MainLayout from "./component/layout/MainLayout";

import "./App.css";

const App = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

export default App;

