import { useEffect, useState } from "react";
import { getStoredWishlist } from "../../Utility/localstorage";
import { IoLocationOutline, IoPeopleOutline } from "react-icons/io5";
import { GrCopy } from "react-icons/gr";

const Wishlist = ({ readWishlist }) => {
  const [booksWishlist, setBooksWishlist] = useState([]);

  useEffect(() => {
    const storedWishlistIds = getStoredWishlist();
    console.log(storedWishlistIds);

    if (readWishlist.length > 0 && storedWishlistIds) {
      const filteredWishlistBooks = readWishlist.filter((book) =>
        storedWishlistIds.includes(book.bookId)
      );
      setBooksWishlist(filteredWishlistBooks);
    }
  }, [readWishlist]);

  return (
    <div className="p-4 sm:p-6 md:p-8">
      {booksWishlist.map((book) => (
        <div
          className="flex flex-col md:flex-row gap-6 border-2 mb-8 rounded-2xl border-gray-200 p-4 sm:p-6"
          key={book.bookId}
        >
          <div className="bg-slate-200 flex-shrink-0 p-4 rounded-2xl sm:w-full md:w-[350px]">
            <img
              src={book.image}
              className="w-full h-auto md:w-[350px] md:h-[250px] rounded-2xl"
              alt={book.bookName}
            />
          </div>

          <div className="w-full">
            <p className="text-xl md:text-2xl font-semibold text-black mb-4">
              {book.bookName}
            </p>
            <p className="mb-2 text-gray-600 font-semibold">By: {book.author}</p>

            <div className="mb-4 flex flex-wrap gap-4 items-center">
              <div>
                <span className="text-black font-semibold mr-2">Tag </span>
                {book.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="badge text-[#23BE0A] bg-[#ECFDF5] px-2 py-1 mr-2 rounded-lg"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2 mt-2">
                <IoLocationOutline />
                <span>Year Of Publishing: {book.yearOfPublishing}</span>
              </div>
            </div>

            <p className="inline-flex flex-wrap gap-4 mb-4">
              <span className="inline-flex gap-2 items-center">
                <IoPeopleOutline /> Publisher: {book.publisher}
              </span>
              <span className="inline-flex gap-2 items-center">
                <GrCopy /> Page {book.totalPages}
              </span>
            </p>
            <hr />

            <div className="mt-4 flex flex-wrap gap-4">
              <p className="bg-blue-200 text-blue-700 rounded-full px-4 py-2 w-fit text-sm md:text-base">
                Category: {book.category}
              </p>
              <p className="rounded-full bg-orange-200 text-orange-600 px-4 py-2 w-fit text-sm md:text-base">
                Rating: {book.rating}
              </p>

              <button className="btn bg-[#23BE0A] hover:bg-green-800 rounded-full btn-sm text-white text-sm md:text-base">
                View Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
