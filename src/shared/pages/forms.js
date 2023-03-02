import { HeaderSecondary } from '../components/navBar/index';
import { Outlet } from "react-router-dom"


function FormsHeaders() {
    return (
        <div>
            <HeaderSecondary />
            <Outlet></Outlet>
        </div >
    )
}

export default FormsHeaders;
