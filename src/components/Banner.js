import banner from "../assets/images/pizza_banner.png";
import { Link } from "react-router-dom";
import Button from "./elements/Button";

import HomeVideo from "../assets/video/home.mp4";

export const Banner = () => {
  return (
    <div className="banner w-full mt-4 md:mt-0 mx-auto h-[70vh] relative flex items-center justify-between">
      <div className="relative w-full h-full">
        <video
          src={HomeVideo}
          type="video/mp4"
          loop
          autoPlay
          controls={false}
          muted
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
        <div className="banner-description w-full md:w-1/2 p-3">
          <h2 className="mb-6 text-4xl text-white font-bold">
            Order your Favorite dishes
          </h2>
          <p className="font-bold text-sm text-white py-2">
            Get Started Today!
          </p>
          <div className="btn-container">
            <Button className="bg-gradient-to-r from-yellow-400 to-yellow-500">
              Order Now
            </Button>
            <Link
              to="/Menu"
              className="text-yellow-400 uppercase text-sm my-2 hover:text-yellow-500 font-bold text-decoration-line px-3"
            >
              see menu
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="banner-image w-full p-3 flex justify-end">
                <img src = {banner} alt = "banner" className="max-h-95"/>
                <div className='relative w-full h-full'>
                    <video src={HomeVideo} type="video/mp4" loop autoPlay controls={false} muted className='w-full h-full object-cover' />
                </div>
            </div> */}
    </div>
  );
};
