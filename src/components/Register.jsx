import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";


const Register = () => {
    const { createUser, user, updateProfileInfo } = useContext(AuthContext)
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [file, setFile] = useState('');
    const handleRegister = e => {
        e.preventDefault()

        setSuccess('')
        setError('')
        // using regular expressions and other validate method
        if (password.length < 6) {
            setError('Password should be at least 6 characters')
            return
        }
        else if (!/[A-Z]/.test(password)) {
            setError('Password should contain 1 uppercase letter')
            return
        }
        else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/"'`|]/.test(password)) {
            setError('Password should contain 1 special character')
            return
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                setSuccess('Registered Successfully')
                setName('')
                setEmail('')
                setPassword('')
                setFile('')
                // Update user profile here

                updateProfileInfo(name, file)
                    .then(() => {
                        console.log("User profile updated successfully");
                    })
                    .catch(error => {
                        console.error("Error updating user profile: ", error);
                    });




            })
            .catch(error => {
                user ? setError('User already exits') : setError(error)


            })



    }

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/VpHdrtn/bg.jpg)' }}>
            <div className="hero-overlay bg-opacity-70 bg-black"></div>

            <div className="card flex-shrink-0 md:w-full w-11/12 max-w-sm shadow-2xl bg-base-100">
                <p className="text-center font-semibold limelight text-rose-500 text-4xl mt-2">Register</p>
                {/* form starts */}
                <form className="card-body" onSubmit={handleRegister}>
                    <div className="form-control">
                        <input type="name" value={name} onChange={e => setName(e.target.value)} name="name" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} name="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input type="text" value={file} onChange={e => setFile(e.target.value)} name="file" placeholder="paste image link" className="input input-bordered" />
                    </div>
                    <p className="text-green-600 font-semibold text-sm">{success}</p>
                    <p className="text-rose-600 font-semibold text-sm">{error}</p>
                    <p className="mt-4">Already Have an account ? <Link className="text-rose-500 font-semibold" to={'/login'}>Login</Link> </p>
                    <div className="form-control mt-6">
                        <input className="btn btn-error text-white normal-case" type="submit" value="Register" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;