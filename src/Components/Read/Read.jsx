import { useState, useEffect } from "react";
import { getstoredBookdetails } from "../../Utility/localstorage";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const Read = () => {
    const [readBooks, setReadBooks] = useState([]);

    useEffect(() => {

        const storedReadBooks = getstoredBookdetails();

        if (storedReadBooks.length >= 3) {
            fetch("books.json")
                .then(res => res.json())
                .then(data => {
                    const filteredBooks = data.filter((book) => storedReadBooks.includes(book.bookId));
                    setReadBooks(filteredBooks);
                });
        }
    }, []);

    if (readBooks.length < 3) {
        return (
            <div className="text-center mt-12">
                <p className="text-xl text-red-500 font-semibold">Please add at least 3 books to your ReadBooks list to view the bar chart.</p>
            </div>
        );
    }

    return (
        <div className="mt-12 mx-36">
            <h2 className="text-3xl font-bold text-center mb-8">Bar Chart of Read Books</h2>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart
                    data={readBooks}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="bookName" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="totalPages" fill="#82ca9d" name="Total Pages" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Read;
