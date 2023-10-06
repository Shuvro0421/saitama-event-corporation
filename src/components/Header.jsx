import { Link, useLocation } from "react-router-dom";


const Header = () => {

    const location = useLocation()

    const links = <>
        <li><Link className={`${location.pathname === '/' ? 'text-yellow-500' : ''}`} to="/">Home</Link></li>
    </>

    return (
        <div className="navbar bg-base-100 shadow-md">
            <div className="md:navbar-start navbar-center">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="crimson"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="flex flex-col dropdown-content mt-3 z-[1] p-2 pl-2  shadow bg-rose-500 text-white bg-opacity-90 rounded-box w-40">
                        {links}
                    </ul>
                </div>
                <div className="md:w-full w-3/4 md:text-left text-center">
                    <Link className="limelight  text-rose-500 normal-case md:text-base text-xs " to={'/'}> <span className="text-yellow-500">Saitama</span> Event Corporation </Link>
                </div>
            </div>
            <div className="md:navbar-center hidden text-rose-500 lg:flex">
                <ul className="flex gap-5 px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <Link className="btn text-yellow-500 normal-case px-10 md:text-base text-xs w-10 md:w-32 bg-rose-500 hover:text-rose-500 hover:bg-yellow-500" to={'/login'}>Login</Link>
            </div>
        </div>
    );
};

export default Header;