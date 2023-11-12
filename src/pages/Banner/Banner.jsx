import '../../components/Header/Navbar/nav.css'

const Banner = () => {
  return (
    <div>
      <div
        className='bannerOverlay'
        style={{
          backgroundImage: "url(https://i.ibb.co/pJDsRtR/Rectangle-4281.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "400px",
        }}
      >
        <div className="pt-32">
          <h1 className="flex justify-center items-center text-4xl font-bold mb-5">
            I Grow By Helping People In Need
          </h1>

          <div className="flex justify-center items-center">
            <div className="form-control ">
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Search Here"
                  className="input input-bordered"
                />
                <span className="bg-orange-950 text-white font-semibold">
                  Search
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
