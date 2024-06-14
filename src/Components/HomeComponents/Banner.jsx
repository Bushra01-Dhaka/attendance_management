import banner_cover from "../../assets/stair_orange.jpg"
import Login from "../../Page/Login";
const Banner = () => {
    return (
        <div  className="hero min-h-screen bg-fixed" style={{backgroundImage: `url(${banner_cover})`}}>
               <div className="flex flex-col lg:flex-row justify-center items-center m-10">

                  {/* login box */}
                 <Login></Login>

           </div>
        </div>
    );
};

export default Banner;