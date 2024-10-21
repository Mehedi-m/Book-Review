import image from "../Images/pngwing 1.png"

const Banner=()=>{

    return(

        <div className="mx-36 h-[550px] px-32 rounded-xl my-14 bg-slate-200 flex gap-20">

            <div className="pt-36">
                <p className="text-6xl font-semibold text-black">Books to freshen up <br/></p>
                <p className=" text-6xl font-semibold mt-6 text-black">your bookshelf</p> 
                <button className="btn btn-success bg-[#23BE0A] text-white mt-12">View the list</button>
            </div>

            <div className="mt-20">
                <img src={image} alt="" />

            </div>

        </div>
    )
}

export default Banner;