import { FaCircleUser } from "react-icons/fa6";
import banner_cover from "../../assets/uni_cover_photo.jpg"

const Banner = () => {
    return (
        <div>
               <div className="flex flex-col lg:flex-row justify-center items-center mt-10 ">
                 {/* left side box */}
                  <div className="flex-1">
                     <img src={banner_cover} alt="" />
                  </div>

                  {/* right side box */}
                  <div className="flex-1 text-center m-6">
                   <div className="space-y-4 p-4 rounded-[50px] border-2 border-orange-500 w-[500px] mx-auto">
                   <div className="flex justify-center">
                   <FaCircleUser className="text-center text-6xl text-orange-500"></FaCircleUser>
                   </div>
                    <h3 className="text-3xl">User Login</h3>
                     <p>User Name</p>
                     <p>User Password</p>
                   </div>

                  </div>

           </div>
        </div>
    );
};

export default Banner;