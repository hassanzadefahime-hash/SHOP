import "./App.css";
import MainLayout from "./component/layout/MainLayout";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};
export default App;
