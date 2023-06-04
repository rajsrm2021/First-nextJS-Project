import {IoSearchSharp} from "react-icons/io5"
import {RxHamburgerMenu} from "react-icons/rx"
const Navbar =()=>{
    return(
        <nav>
            <div className="flex justify-between items-center p-4">
                <span className="text-orange-700 font-bold">
                    Mr.Raj
                </span>

            {/* <div className="hidden md:flex flex-row justify-between items-center"> */}
                <div className="border-2 border-black flex gap-4 px-4 py-2 rounded-2xl bg-white items-center  max-md:hidden gap-">
                    <ol>Store</ol>
                    <hr className="w-6 rotate-90 border-2 border-orange-500"/>
                    <ol>collection</ol>
                </div>

                <div className="flex gap-1 max-md:hidden">

                <ol className="border-2 border-black rounded-2xl px-2 py-1">Home</ol>
                <ol className="border-2 border-black rounded-2xl px-2 py-1">About</ol>
                <ol className="border-2 border-black rounded-2xl px-2 py-1">Contact</ol>

                </div>
                {/* </div> */}
                <div className="flex gap-2">
                <span className="border-2 border-black rounded-full px-2 py-2   ">
                    <IoSearchSharp/>
                </span>
                <span className="border-2 border-black rounded-full px-2 py-2 md:hidden">
                    <RxHamburgerMenu/>
                </span>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;