import Banner from "../../Components/HomeComponents/Banner";
import First_banner from "../../Components/HomeComponents/First_banner";
import Banner_header from "../../Components/HomeComponents/banner_header";
import banner_cover from "../../assets/stair_orange.jpg"


const Home = () => {
  return (
    <div>
      <Banner_header></Banner_header>
       <First_banner></First_banner>
        <div  className="hero min-h-screen" style={{backgroundImage: `url(${banner_cover})`}}>
        <Banner></Banner>
        </div>
      
    </div>
  );
};

export default Home;
