import { FaCircleUser } from "react-icons/fa6";
import { RiGoogleFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import signUp_cover from "../assets/signup_cover.jpg"
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase/firebase.config";
import { useState } from "react";


const SignUp = () => {
    const navigate = useNavigate();
    const [registerError, setRegisterError] = useState('');

    const handleSignUp = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);

        //to reset 
        setRegisterError('');

        if(password.length < 6){
            setRegisterError("Password should be 6 characters or longer");
            return;
        }
        else if(!/[A-Z]/.test(password)){
           setRegisterError("Your password should have at least one Uppercase letter.");
           return;
        }
        else if(!/[0-9]/.test(password))
            {
                setRegisterError("Your password should have at least one number.");
                return;
            }
        // else if(!/[?=.*]/.test(password)){
        //     setRegisterError("You Password should have at least one special character.");
        //     return;
        // }

        
        //create user 
        createUserWithEmailAndPassword(auth,email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate("/");

        })
        .catch(error => {
            console.error(error);
            setRegisterError(error.message);
        })

      

        

    }

    return (
        <div className="flex-1 lg:p-8 text-center hero min-h-screen bg-fixed"  style={{backgroundImage: `url(${signUp_cover})`}}>
        <div className="space-y-4 p-6 rounded-[50px] bg-white bg-opacity-40 md:w-[500px] lg:w-[800px] mx-auto shadow-lg">
        <div className="flex justify-center">
        <FaCircleUser className="text-center text-6xl text-orange-500"></FaCircleUser>
        </div>
         <h3 className="text-3xl font-bold">SignUp Now</h3>
          {/* form starts */}
          <form onSubmit={handleSignUp} className="card-body">
<div className="form-control">
<label className="label">
 <span className="label-text">User name</span>
</label>
<input type="text" placeholder="user name" name="name" className="input input-bordered" required />
</div>

<div className="form-control">
<label className="label">
 <span className="label-text">Email</span>
</label>
<input type="email" name="email" placeholder="email" className="input input-bordered" required />
</div>
<div className="form-control">
<label className="label">
 <span className="label-text">Password</span>
</label>
<input type="password" name="password" placeholder="password" className="input input-bordered" required />
<label className="label">
 <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
</label>
</div>

<div className="form-control mt-6">
<button className="btn btn-primary border-0 rounded-[50px] bg-orange-500 hover:bg-black text-black hover:text-orange-500">Sign up</button>
</div>

{/* error check */}
{
    registerError && <p className="text-center text-red-700 font-bold">{registerError}</p>
}


{/* for google */}
<div className="form-control">
 <div className="flex justify-center py-4">
     <p>Or</p>
 </div>
 <button className="btn btn-primary shadow-lg bg-black text-white border-0 hover:bg-slate-900 hover:text-orange-500 rounded-[50px]"><RiGoogleFill className="text-orange-500 text-xl"></RiGoogleFill> Sign up with Google</button>
</div>

{/* navigate to register page */}
<div className="pt-4">
 <p>Already have an account? <Link to='/login' className="text-orange-600 font-bold hover:text-black">Login</Link></p>
</div>


</form>



          {/* form ends */}
        </div>

       </div>
    );
};

export default SignUp;