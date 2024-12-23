
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Nav from "./component/Nav";
import { Outlet } from "react-router-dom";
export default function App() {
  return (
    <>
      <Provider store={appStore}>
        <Nav/>
        <Outlet/>
      </Provider>
    </>
  );
}
