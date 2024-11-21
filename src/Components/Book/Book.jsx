import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const { image, bookId, author, bookName, category, tags, rating } = book;

    return (
        <div className="mb-6 sm:mb-8 lg:mb-12">
            <Link to={`/Book/${bookId}`}>
                <div className="card bg-base-100 border-2 border-gray-300 shadow-xl mx-auto sm:max-w-xs md:max-w-sm lg:w-96">
                    <figure className="px-4 pt-4 sm:px-6 sm:pt-6">
                        <img
                            src={image}
                            alt=""
                            className="rounded-xl h-[180px] sm:h-[200px] md:h-[230px] object-cover"
                        />
                    </figure>

                    <div className="flex flex-wrap gap-2 mx-4 sm:mx-6 mt-4">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className="badge text-[#23BE0A] text-sm md:text-base"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="mx-4 sm:mx-6 mt-4">
                        <h2 className="card-title text-lg sm:text-xl md:text-2xl">{bookName}</h2>
                        <p className="text-gray-500 mt-3 font-semibold text-sm md:text-base">
                            by: {author}
                        </p>
                        <p className="border-b-2 border-dashed border-gray-200 mt-3 mb-3"></p>
                    </div>

                    <div className="mx-4 sm:mx-6 flex justify-between mb-4 sm:mb-6 font-semibold text-gray-500">
                        <p className="text-sm md:text-base">{category}</p>
                        <p className="inline-flex justify-center items-center gap-2 text-sm md:text-base">
                            {rating} <CiStar />
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Book;
