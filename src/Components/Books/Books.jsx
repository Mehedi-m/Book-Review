import { useEffect } from "react";
import { useState } from "react";
import Book from "../Book/Book";


const Books=()=>{

    const [Books, setBooks]=useState([]);

    useEffect(()=>{

        fetch("books.json")
        .then(res=>res.json())
        .then(data=>setBooks(data))

    },[])

    return(

        <div>

            <p className="text-black font-bold text-4xl text-center mx-36 my-20">Books</p>

            <div className="grid grid-cols-3 mx-36 mb-36">
                {
                    Books.map(book=> <Book key={book.id} book={book}></Book>)
                }
            </div>

        </div>

    )
}

export default Books;