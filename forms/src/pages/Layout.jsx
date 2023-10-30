
import "./test.css"
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <div class="navigating">
                    <Link to="/">Home</Link>
                </div>
                <div class="navigating">
                    <Link to="/Search">Search</Link>
                </div>
                <div class="navigating">
                <Link to="/Forms">Forms</Link>
                </div>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;