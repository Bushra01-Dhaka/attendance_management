import { FaCircleUser } from "react-icons/fa6";
const Banner = () => {
    return (
        <div>
               <div className="flex flex-col lg:flex-row justify-center items-center m-10">

                  {/* login box */}
                  <div className="flex-1 text-center m-6">
                   <div className="space-y-4 p-6 rounded-[50px] bg-white bg-opacity-60 w-[500px] mx-auto">
                   <div className="flex justify-center">
                   <FaCircleUser className="text-center text-6xl text-orange-500"></FaCircleUser>
                   </div>
                    <h3 className="text-3xl">User Login</h3>
                     {/* form starts */}
                     <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary border-0 rounded-[50px] bg-orange-500 hover:btn-black text-black hover:orange-500">Login</button>
        </div>
      </form>
                     {/* form ends */}
                   </div>

                  </div>

           </div>
        </div>
    );
};

export default Banner;