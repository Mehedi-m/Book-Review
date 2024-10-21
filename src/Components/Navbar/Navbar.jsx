import { NavLink } from "react-router-dom";


const Navbar=()=>{

    const links=<>

        <li><NavLink to='/' className={({isActive})=> isActive ? "btn btn-outline btn-success " : "font-semibold "}>Home</NavLink></li>
        <li><NavLink to='/Listed' className={({isActive})=> isActive ? "btn btn-outline btn-success" : " font-semibold"}>Listed Books</NavLink></li>
        <li><NavLink to='/Read' className={({isActive})=> isActive ? "btn btn-outline btn-success" : " font-semibold"}>Pages to read</NavLink></li>

    </>

        

    return(

        <div className="mx-36">

<div className="navbar bg-base-100 my-9">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

            {links}
     
      </ul>
    </div>
    <a className="text-3xl font-extrabold">Book Vibe</a>
  </div>
  <div className="navbar-center  hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-4 ">
    {links}
    </ul>
  </div>
  <div className="navbar-end gap-4 ">
    <button className="btn bg-[#23BE0A] text-white"> Sign In</button>
    <button className="btn bg-[#59C6D2] text-white">Sign Up</button>
  </div>
</div>

        </div>
    )
}

export default Navbar;