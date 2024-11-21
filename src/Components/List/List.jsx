import { useState, useEffect } from "react";
import ReadBooks from "../ReadBooks/ReadBooks";
import Wishlist from "../Wishlist/Wishlist";

const List = () => {
    const [Readbook, setReadBook] = useState(true);
    const [Readwishlist, setReadwishlist] = useState(false);

    const [readBooks, setReadBooks] = useState([]);
    const [readWishlist, setReadWishlist] = useState([]);
    const [originalBooks, setOriginalBooks] = useState([]);
    const [sortCriteria, setSortCriteria] = useState("");

    useEffect(() => {
        fetch("books.json")
            .then((res) => res.json())
            .then((data) => {
                setReadBooks(data);
                setReadWishlist(data);
                setOriginalBooks(data); 
            });
    }, []);

    const handleSort = (criteria) => {
        setSortCriteria(criteria);

        const sortedBooks = [...originalBooks].sort((a, b) => {
            if (criteria === "rating") {
                return b.rating - a.rating;
            } else if (criteria === "totalPages") {
                return b.totalPages - a.totalPages;
            } else if (criteria === "yearOfPublishing") {
                return b.yearOfPublishing - a.yearOfPublishing;
            }
            return 0;
        });

        setReadBooks(sortedBooks);
        setReadWishlist(sortedBooks);
    };

    return (
        <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-36">

            <div className="bg-gray-200 rounded-2xl">
                <p className="text-black text-2xl sm:text-3xl lg:text-4xl font-bold text-center py-6 sm:py-8">
                    Books
                </p>
            </div>

            <div className="dropdown dropdown-hover grid place-items-center">
                <div
                    tabIndex={0}
                    role="button"
                    className="btn bg-[#23BE0A] mt-6 text-white text-sm sm:text-base"
                >
                    Sort By
                </div>
                <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 mt-20 sm:mt-[160px] rounded-box z-[1] w-40 sm:w-52 p-2 shadow"
                >
                    <li>
                        <a onClick={() => handleSort("rating")}>Rating</a>
                    </li>
                    <li>
                        <a onClick={() => handleSort("totalPages")}>Number of Pages</a>
                    </li>
                    <li>
                        <a onClick={() => handleSort("yearOfPublishing")}>
                            Published Year
                        </a>
                    </li>
                </ul>
            </div>

            <div className="mt-12 sm:mt-16 lg:mt-24">
                <ul className="menu menu-horizontal px-1 gap-4 flex justify-center">
                    <button
                        onClick={() => {
                            setReadBook(true);
                            setReadwishlist(false);
                        }}
                        className='btn btn-outline text-sm sm:text-base'
                    >
                        Read Books
                    </button>

                    <button
                        onClick={() => {
                            setReadBook(false);
                            setReadwishlist(true);
                        }}
                        className='btn btn-outline text-sm sm:text-base'
                    >
                        Wishlist Books
                    </button>
                </ul>
                
                <div className="mt-6 sm:mt-8 mb-12 sm:mb-24">
                    {Readbook ? (
                        <ReadBooks readBooks={readBooks}></ReadBooks>
                    ) : (
                        <Wishlist readWishlist={readWishlist}></Wishlist>
                    )}
                </div>
            </div>
        </div>
    );
};

export default List;
