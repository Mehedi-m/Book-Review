import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Book=({book})=>{

    const{image,bookId,author,bookName,category,tags,rating}=book;

    return(

      

        <div className="mb-12 ">
          
          <Link to={`/Book/${bookId}`}>

           <div className="card bg-base-100 w-96 border-2 border-gray-300 shadow-xl">
  <figure className="px-6 pt-6">
    <img
      src={image}
      alt="Shoes"
      className="rounded-xl h-[230px]" />
  </figure>
  <div className="flex gap-2 mx-6 mt-4">

  {tags.map((tag, index) => (
    <span key={index} className="badge text-[#23BE0A]">
      {tag}
    </span>
  ))}
  
</div>
  <div className="mx-6 mt-4">
    <h2 className="card-title text-2xl">{bookName}</h2>
    <p className="text-gray-500 mt-3 font-semibold">by: {author}</p>
    <p className="border-b-2 border-dashed border-gray-200  mt-3 mb-3"></p>
  </div>

  <div className="mx-6 flex justify-between mb-6 font-semibold text-gray-500">
    <p>{category}</p>
    <p className="inline-flex justify-center items-center gap-2">{rating} <CiStar/></p>

  </div>

</div>

          </Link>
           

        </div>
    )
}

export default Book;