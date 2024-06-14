import banner_cover from "../../assets/uni_cover_photo.jpg"

const Banner_header = () => {
    return (
        <div style={{backgroundImage: `url(${banner_cover})`}}>
            <h2 className="text-4xl bg-fixed bg-opacity-20 font-bold p-8 text-orange-500 bg-black md:max-w-screen-2xl mx-auto rounded-sm text-center shadow-lg uppercase">Attendance Management System</h2>
        </div>
    );
};

export default Banner_header;