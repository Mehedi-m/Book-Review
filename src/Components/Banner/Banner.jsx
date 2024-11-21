import { Link } from "react-router-dom";
import image from "../Images/pngwing 1.png";

const Banner = () => {
    return (
        <div className="mx-4 sm:mx-6 md:mx-12 lg:mx-36 h-auto sm:h-[550px] rounded-xl my-10 bg-slate-200 flex flex-col-reverse md:flex-row gap-6 md:gap-20 px-6 sm:px-12 md:px-32">
            <div className="pt-8 md:pt-36 text-center md:text-left">
                <p className="text-3xl sm:text-4xl md:text-6xl font-semibold text-black">Books to freshen up <br /></p>
                <p className="text-3xl sm:text-4xl md:text-6xl font-semibold mt-4 md:mt-6 text-black">your bookshelf</p>

                <Link to={"/Listed"}>
                    <button className="btn btn-success bg-[#23BE0A] text-lg sm:text-xl text-white mt-8 md:mt-12">
                        View the list
                    </button>
                </Link>
            </div>

            <div className="flex justify-center items-center mt-6 md:mt-20">
                <img src={image} alt="Bookshelf" className="w-3/4 sm:w-2/3 md:w-full" />
            </div>
        </div>
    );
};

export default Banner;
