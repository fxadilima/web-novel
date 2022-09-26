import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <div className="w3-top w3-bar w3-white w3-card">
                <Link to='/' className="w3-bar-item w3-button w3-hover-red">Home</Link>
                <Link to='/blogs' className="w3-bar-item w3-button w3-hover-red">Blogs</Link>
                <Link to='/people' className="w3-bar-item w3-button w3-hover-red">People</Link>
            </div>
            <Outlet />
        </>
    )
};

export default Layout;

