import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from "./AuthProvider";


const Login = () => {

    const { signInUser, handleGoogleSignIn, user } = useContext(AuthContext);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const location = useLocation()

    if (user) {
        navigate(location?.state ? location.state : '/')
    }


    const handleRegister = (e) => {
        e.preventDefault();

        setSuccess('');
        setError('');

        signInUser(email, password)
            .then((result) => {
                console.log(result.user);
                setSuccess('Signed in Successfully');


                setEmail('');
                setPassword('');
            })
            .catch((error) => {
                console.log(error.message);
                setError(error.message);

            });
    };



    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/VpHdrtn/bg.jpg)' }}>
            <div className="hero-overlay bg-opacity-70 bg-black"></div>

            <div className="card flex-shrink-0 md:w-full w-11/12 max-w-sm  shadow-2xl bg-base-100">
                <p className="text-center font-semibold limelight text-rose-500 text-4xl mt-2">Login</p>
                {/* form starts */}
                <form className="card-body" onSubmit={handleRegister}>

                    <div className="form-control">
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} name="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <p className="text-green-600 font-semibold text-sm">{success}</p>
                    <p className="text-rose-600 font-semibold text-sm">{error}</p>
                    <p className="mt-4">New to this website ? <Link className="text-rose-500 font-semibold" to={'/register'}>Register</Link> </p>
                    <div className="form-control mt-6">
                        <input className="btn btn-error text-white normal-case" type="submit" value="Login" />
                    </div>
                    <div className="flex items-center my-4">
                        <div className="border-t border-yellow-500 flex-grow"></div>
                        <div className="mx-4 text-rose-500 font-semibold limelight">or</div>
                        <div className="border-t border-yellow-500 flex-grow"></div>
                    </div>
                    <div className="form-control">
                        <button onClick={handleGoogleSignIn} className="btn text-white btn-error normal-case">Google <FcGoogle className="text-3xl"></FcGoogle></button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Login;