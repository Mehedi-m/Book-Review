

const List=()=>{

    return(
        <div className="mx-36">

            <div className="bg-gray-200 rounded-2xl">
                <p className="text-black text-3xl font-bold text-center py-8">
                    Books
                </p>
            </div>

            <div className="dropdown dropdown-hover grid place-items-center">
  <div tabIndex={0} role="button" className="btn bg-[#23BE0A] mt-6 text-white ">Sort By</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 mt-[160px] rounded-box z-[1] w-52 p-2 shadow">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>

        </div>
    )
}

export default List;