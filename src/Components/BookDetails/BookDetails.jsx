import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveBookdetails, saveWishlistDetails, getstoredBookdetails, getStoredWishlist } from "../../Utility/localstorage";

const BookDetails = () => {
    const details = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const detail = details.find(detail => detail.bookId === idInt);

    const Readed = () => {
        const storedWishlist = getStoredWishlist();
        const storedReadBooks = getstoredBookdetails();

        if (storedReadBooks.includes(idInt)) {
            toast("Book is already marked as read.");
            return;
        }

        if (storedWishlist.includes(idInt)) {
            toast("Book moved from Wishlist to Read.");
        } else {
            toast("Book marked as read.");
        }
        saveBookdetails(idInt);
    };

    const Added = () => {
        const storedWishlist = getStoredWishlist();
        const storedReadBooks = getstoredBookdetails();

        if (storedReadBooks.includes(idInt)) {
            toast("Book is already read, cannot add to Wishlist.");
            return;
        }

        if (storedWishlist.includes(idInt)) {
            toast("Book is already in Wishlist.");
        } else {
            toast("Book added to Wishlist.");
            saveWishlistDetails(idInt);
        }
    };

    return (
        <div className="mx-4 sm:mx-6 md:mx-12 lg:mx-36 mb-14 mt-8">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                <div className="flex justify-center lg:justify-start">
                    <div className="bg-slate-200 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full max-w-sm sm:max-w-md md:max-w-lg p-6 md:p-10 lg:p-20 rounded-2xl">
                        <img
                            src={detail.image}
                            alt=""
                            className="h-full w-full rounded-2xl object-cover"
                        />
                    </div>
                </div>

                <div>
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-black mb-4">
                        {detail.bookName}
                    </p>
                    <p className="mb-6 text-gray-400 font-semibold">By: {detail.author}</p>
                    <hr />
                    <p className="mb-6 mt-6 text-slate-500">{detail.category}</p>
                    <hr />
                    <p className="text-gray-600 mt-6 mb-4">
                        <span className="text-black font-bold">Review:</span> {detail.review}
                    </p>

                    <div className="mb-4">
                        <span className="text-black font-semibold mr-2">Tag </span>
                        {detail.tags.map((tag, index) => (
                            <span key={index} className="badge text-[#23BE0A]">
                                #{tag}
                            </span>
                        ))}
                    </div>

                    <hr />

                    <p className="text-black mt-8 mb-4 font-semibold">
                        <span className="pr-4 text-slate-600">Number of pages:</span>
                        {detail.totalPages}
                    </p>
                    <p className="text-black mb-4 font-semibold">
                        <span className="pr-4 text-slate-600">Publisher:</span>
                        {detail.publisher}
                    </p>
                    <p className="text-black mb-4 font-semibold">
                        <span className="pr-4 text-slate-600">Year of publishing:</span>
                        {detail.yearOfPublishing}
                    </p>
                    <p className="text-black mb-4 font-semibold">
                        <span className="pr-4 text-slate-600">Rating:</span>
                        {detail.rating}
                    </p>

                    <div className="flex mt-8 gap-4">
                        <button
                            onClick={Readed}
                            className="btn btn-outline text-black font-semibold w-full sm:w-auto"
                        >
                            Read
                        </button>
                        <button
                            onClick={Added}
                            className="btn hover:bg-blue-900 bg-[#50B1C9] text-white font-semibold w-full sm:w-auto"
                        >
                            Wishlist
                        </button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDetails;
