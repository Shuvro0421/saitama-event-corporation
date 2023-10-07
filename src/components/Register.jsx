import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";


const Register = () => {
    const { createUser, user, updateProfileInfo } = useContext(AuthContext)
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const handleRegister = e => {
        e.preventDefault()

        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        const file = e.target.file.value

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

                // Update user profile here
                updateProfileInfo(name, null) // You can add a photoURL if needed
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

            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <p className="text-center font-semibold limelight text-rose-500 text-4xl mt-2">Register</p>
                {/* form starts */}
                <form className="card-body" onSubmit={handleRegister}>
                    <div className="form-control">
                        <input type="name" name="name" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="">
                        <label htmlFor="image-input" className="file-input-label text-yellow-500 font-semibold">
                            Choose your Image
                        </label>
                        <input type="file" name="file" id="image-input" className="file-input mt-2 file-input-bordered file-input-md w-full max-w-xs" accept="image/*" />
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