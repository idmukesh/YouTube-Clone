import Login from "../component/Login";
import MobileBottomNavBar from "../component/MobileBottomNavBar";
import SideBar from "../component/SideBar";

function LoginPage(){
    return(
        <>
        <SideBar/>
        <Login/>
        <MobileBottomNavBar/>
        </>
    )
}
export default LoginPage;