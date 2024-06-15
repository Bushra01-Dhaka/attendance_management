import { FaCircleUser } from "react-icons/fa6";
import { RiGoogleFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Login = () => {

    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email,password);
        
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
<button className="btn btn-primary border-0 rounded-[50px] bg-orange-500 hover:bg-black text-black hover:text-orange-500">Sign in</button>
</div>


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