import { useEffect, useState } from "react";
import { getstoredBookdetails } from "../../Utility/localstorage";
import { IoLocationOutline, IoPeopleOutline } from "react-icons/io5";
import { GrCopy } from "react-icons/gr";

const ReadBooks = ({ readBooks }) => {
    const [booksRead, setbooksRead] = useState([]);

    useEffect(() => {
        const storedReadBookIds = getstoredBookdetails();

        if (readBooks.length > 0 && storedReadBookIds) {
            const filteredReadBooks = readBooks.filter((book) =>
                storedReadBookIds.includes(book.bookId)
            );
            setbooksRead(filteredReadBooks);
        }
    }, [readBooks]);

    return (
        <div>
            {booksRead.map((book) => (
                <div
                    className="flex flex-col md:flex-row gap-6 border-2 mb-8 rounded-2xl border-gray-200 p-4 md:p-6"
                    key={book.bookId}
                >
                    <div className="bg-slate-200 w-full md:w-auto h-fit p-4 rounded-2xl">
                        <img
                            src={book.image}
                            className="w-full h-[200px] md:w-[300px] lg:w-[350px] md:h-[200px] lg:h-[250px] rounded-2xl"
                            alt=""
                        />
                    </div>

                    <div className="w-full">
                        <p className="text-xl md:text-2xl font-semibold text-black mb-4">
                            {book.bookName}
                        </p>
                        <p className="mb-2 text-gray-600 font-semibold">
                            By: {book.author}
                        </p>

                        <div className="mb-4 flex flex-col md:flex-row md:items-center gap-4">
                            <div>
                                <span className="text-black font-semibold mr-2">
                                    Tag
                                </span>

                                {book.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="badge text-[#23BE0A]"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>

                            <div>
                                <span className="flex items-center gap-2 mt-2 text-sm md:text-base">
                                    <IoLocationOutline />
                                    Year Of Publishing: {book.yearOfPublishing}
                                </span>
                            </div>
                        </div>

                        <p className="inline-flex flex-wrap gap-4 mb-4 text-sm md:text-base">
                            <span className="inline-flex gap-2 items-center">
                                <IoPeopleOutline />
                                Publisher: {book.publisher}
                            </span>
                            <span className="inline-flex gap-2 items-center">
                                <GrCopy />
                                Page {book.totalPages}
                            </span>
                        </p>
                        <hr />

                        <div className="mt-4 flex flex-wrap gap-4">
                            <p className="bg-blue-200 text-blue-700 rounded-full px-4 py-1 text-sm md:text-base w-fit">
                                Category: {book.category}
                            </p>

                            <p className="rounded-full bg-orange-200 text-orange-600 px-4 py-1 text-sm md:text-base w-fit">
                                Rating: {book.rating}
                            </p>

                            <button className="btn bg-[#23BE0A] hover:bg-green-800 rounded-full btn-sm text-white text-sm md:text-lg">
                                View Details
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ReadBooks;
