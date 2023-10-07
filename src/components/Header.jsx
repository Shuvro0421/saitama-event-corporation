import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import noUser from "../../src/assets/images/no-user-image-icon-3.jpg"


const Header = () => {

    const location = useLocation()
    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('logged out')
                navigate('/login')

            })
            .catch(error => {
                console.log(error)
            })
    }

    const links = <>
        <li><Link className={`${location.pathname === '/' ? 'text-yellow-500' : ''}`} to="/">Home</Link></li>
        {
            user &&
            <div className="flex lg:flex-row flex-col gap-0 lg:gap-3">
                <li><Link className={`${location.pathname === '/about' ? 'text-yellow-500' : ''}`} to="/about">About Us</Link></li>
                <li><Link className={`${location.pathname === '/projects' ? 'text-yellow-500 ' : ''}`} to="/projects">Mega Projects</Link></li>
            </div>
        }
        <li><Link className={`${location.pathname === '/contacts' ? 'text-yellow-500 ' : ''}`} to="/contacts">Contact Us</Link></li>

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
                <div className="md:w-full  md:text-left text-center">
                    <Link className="limelight  text-rose-500 normal-case md:text-base text-xs " to={'/'}> <span className="text-yellow-500">Saitama</span> Event Corporation </Link>
                </div>
            </div>
            <div className="md:navbar-center hidden text-rose-500 lg:flex">
                <ul className="flex gap-5 px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div>
                            <div className="md:flex items-center hidden md:gap-2 gap-0">
                                <div>
                                    <p className="md:text-base text-xs limelight text-black text-center">{user.displayName}</p>
                                </div>
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user?.photoURL ? user.photoURL : noUser} />
                                    </div>
                                </label>
                                <div>
                                    <button onClick={handleLogOut} className="btn text-yellow-500 normal-case px-10 md:text-base text-xs w-10 md:w-32 bg-rose-500 hover:text-rose-500 hover:bg-yellow-500">Logout</button>
                                </div>
                            </div>
                            {/* small  */}
                            <div className="dropdown relative md:hidden">
                                <label tabIndex={0} className="btn btn-ghost md:hidden">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src={user?.photoURL ? user.photoURL : noUser} />
                                        </div>
                                    </label>
                                </label>
                                <ul
                                    tabIndex={0}
                                    className="flex flex-col dropdown-content mt-3 z-[1] p-2 pl-2 shadow bg-yellow-500 text-white bg-opacity-90 rounded-box w-40 absolute right-0"
                                >
                                    <div className="flex flex-col items-center justify-center gap-5">
                                        <p className="text-center limelight text-xs">{user.displayName}</p>
                                        <div>
                                            <button onClick={handleLogOut} className="btn border-none text-yellow-500 normal-case px-10 md:text-base text-xs w-10 md:w-32 bg-rose-500 hover:text-rose-500 hover:bg-yellow-500">Logout</button>
                                        </div>
                                    </div>


                                </ul>
                            </div>

                        </div>
                        :
                        <div>
                            <Link className="btn text-yellow-500 normal-case px-10 md:text-base text-xs w-10 md:w-32 bg-rose-500 hover:text-rose-500 hover:bg-yellow-500" to={'/login'}>Login</Link>
                        </div>
                }

            </div>
        </div>
    );
};

export default Header;