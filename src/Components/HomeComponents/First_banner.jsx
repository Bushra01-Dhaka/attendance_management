import { Link } from "react-router-dom";
import uni_cover from "../../assets/uni_cover_photo.jpg"

const First_banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${uni_cover})` }}
    >
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg">
          <h1 className="mb-5 text-4xl text-center text-white uppercase font-bold">
            Corpus Christi College, Cambridge
          </h1>
          <Link to="/login"><button className="btn btn-primary text-black font-semibold bg-orange-500 hover:bg-black hover:text-orange-500 border-0 w-[500px] rounded-[50px]">
            Login Now
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default First_banner;
