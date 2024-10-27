import { useLoaderData, useParams } from "react-router-dom";



const BookDetails=()=>{

    const details = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const detail = details.find(detail => detail.bookId === idInt);

    return (
        <div className="mx-36 flex gap-12 mb-28 mt-12">
            <div>
                <div className="bg-slate-200 h-[600px] w-[570px] p-20 rounded-2xl"> 
                   <img src={detail.image} alt="" className="h-[450px] w-[400px] rounded-2xl" /> 
                </div>
            </div>
            <div>
                <p className="text-4xl font-semibold text-black mb-4">{detail.bookName}</p>
                <p className="mb-6 text-gray-400 font-semibold">By: {detail.author}</p>
                <hr />
                <p className="mb-6 mt-6 text-slate-500">{detail.category}</p>
                <hr />
                <p className="text-gray-600 mt-6 mb-4"><span className="text-black font-bold">Review:</span> {detail.review}</p>

                <div className="mb-4"> 

                <span className="text-black font-semibold mr-2">Tag </span>

                {detail.tags.map((tag, index) => (

                <span key={index} className="badge text-[#23BE0A]">
                 #{tag}
                </span>
                 ))}

                </div>

                <hr />

                <p className="text-black mt-8 mb-4 font-semibold"><span className="pr-4 text-slate-600">Number of pages:</span>{detail.totalPages}</p>
                <p className="text-black mb-4 font-semibold"><span className="pr-4 text-slate-600">Publisher:</span>{detail.publisher}</p>
                <p className="text-black mb-4 font-semibold"><span className="pr-4 text-slate-600">Year of publishing:</span>{detail.yearOfPublishing}</p>
                <p className="text-black mb-4 font-semibold"><span className="pr-4 text-slate-600">Rating:</span>{detail.rating}</p>


                <div className="flex mt-12 gap-6">
                    <button className="btn btn-outline text-black font-semibold">Read</button>
                    <button className="btn hover:bg-blue-900 bg-[#50B1C9] text-white font-semibold">Wishlist</button>
                </div>




            </div>
        </div>
    );
};

export default BookDetails;