import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [Books, setBooks] = useState([]);

    useEffect(() => {
        fetch("books.json")
            .then((res) => res.json())
            .then((data) => setBooks(data));
    }, []);

    return (
        <div className="mx-4 sm:mx-6 md:mx-12 lg:mx-20">
            <p className="text-black font-bold text-2xl sm:text-3xl md:text-4xl text-center mt-12 mb-16">
                Books
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mb-12">
                {Books.map((book) => (
                    <Book key={book.bookId} book={book}></Book>
                ))}
            </div>
        </div>
    );
};

export default Books;
