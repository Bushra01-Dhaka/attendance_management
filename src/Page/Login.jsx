import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { FaCircleUser, FaEye, FaEyeSlash } from "react-icons/fa6";
import { RiGoogleFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import auth from "../Firebase/firebase.config";
import { useRef, useState } from "react";

const Login = () => {

    const navigate = useNavigate();
    const emailRef = useRef();

    const [signInError, setSignInError] = useState('');
    const[showPassword, setShowPassword] = useState(false);

    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email,password);
        setSignInError('');

        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate("/");
        })
        .catch(error => {
            console.error(error);
            setSignInError("Please provide correct email and password.");

        })
        
    }

    const handleForgetPassword = () => {
        const email = emailRef.current.value;
        if(!email)
            {
                console.log('Please provide a email', emailRef.current.value);
                return;
            }
        else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email))
            {
                console.log("please write a valid email");
                return;
            }

            //send validation email
            sendPasswordResetEmail(auth,email)
            .then(() => {
                alert("Please Check Your Email!!!");
            })
            .catch(error => {
                console.log(error);
            })
        
    }
    return (
        <div className="flex-1 text-center lg:m-6 lg:p-4">
        <div className="space-y-4 lg:p-6 rounded-[50px] bg-white bg-opacity-40 md:w-[500px] lg:w-[800px] mx-auto">
        <div className="flex justify-center">
        <FaCircleUser className="text-center text-6xl text-orange-500 hover:text-orange-400"></FaCircleUser>
        </div>
         <h3 className="text-3xl font-bold">User Login</h3>
          {/* form starts */}
          <form onSubmit={handleLogin} className="card-body">
<div className="form-control">
<label className="label">
 <span className="label-text">Email</span>
</label>
<input 
type="email" 
name="email" 
placeholder="email" 
ref={emailRef}
className="input input-bordered" required />
</div>
<div className="form-control">
<label className="label">
 <span className="label-text">Password</span>
</label>
<div className="flex justify-center items-center">
<input 
type={showPassword? "text" : "password"} 
name="password" 
placeholder="password" 
className="input input-bordered w-full" required />
<p onClick={() => setShowPassword(!showPassword)}>
    {
        showPassword?     <FaEye  className="text-2xl font-bold text-orange-500 ml-[-50px]"></FaEye>
        :     <FaEyeSlash  className="text-2xl font-bold text-orange-500 ml-[-50px]"></FaEyeSlash>

    }
</p>
</div>
<label className="label">
 <a onClick={handleForgetPassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>
</label>
</div>

<div className="form-control mt-6">
<button className="btn btn-primary border-0 rounded-[50px] bg-orange-500 hover:bg-black text-black hover:text-orange-500">Sign in</button>
</div>

{/* Check error */}
{
    signInError && <p className="text-red-700 font-bold text-center p-2">{signInError}</p>
}


{/* for google */}
<div className="form-control">
 <div className="flex justify-center py-4">
     <p>Or</p>
 </div>
 <button className="btn btn-primary shadow-lg bg-black text-white border-0 hover:bg-slate-900 hover:text-orange-500 rounded-[50px]"><RiGoogleFill className="text-orange-500 text-xl"></RiGoogleFill> Sign in with Google</button>
</div>

{/* navigate to register page */}
<div className="pt-4">
 <p>{`Don't`} have any account? <Link to="/signUp" className="text-orange-600 font-bold hover:text-black">Sign Up</Link></p>
</div>


</form>
          {/* form ends */}
        </div>

       </div>
    );
};

export default Login;