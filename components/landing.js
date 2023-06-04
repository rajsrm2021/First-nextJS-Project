import Navbar from "../components/navbar";
import Image from "next/image";
import raj from "../public/vercel.svg"
const Landing = () => {
  return (
    <div>
      <div className="w-full md:h-screen px-[4%] py-[4%] bg-orange-100">
        <div className="border-4 border-black h-full w-full rounded-2xl bg-white">
          <Navbar />
          <div className="flex flex-col-reverse md:flex-row max-md:h-screen">
            <div className=" md:border-r-4  md:border-black md:min-h-[380px] md:w-1/2 flex gap-3 flex-col pt-4 max-md:h-11/12">
              <div className="flex justify-start items-end max-md:flex flex-wrap">
                <p className="text-6xl px-4 max-md:text-3xlxl font-bold">WELCOME</p>
                <p className="font-bold max-md:px-20">New collection 2023</p>
              </div>
              <div className="flex justify-start items-end">
                <p className="w-16 text-right font-bold">elegant slite</p>
                <p className="text-5xl px-4">
                  <span className="text-red-400">TO THE WORLD</span> OF
                </p>
              </div>
              <div className="justify-start items-end">
                <p className="text-5xl px-4 max-md:text-2xl max-md:font-bold">MAGIC OF LIGHT!</p>
              </div>

              <div className="pt-9 px-4 font-bold">
                <p>We cooperate only with reliable manaufactures</p>
                <p>using high quality materials and advanced </p>
                <p>technology</p>
              </div>

              <div className=" flex justify-center items-center w-80 pt-1 gap-8">
                <span className="h-20 w-20 rounded-full bg-black">
                  <p className="text-slate-50 font-bold pt-7 px-6">10%</p>
                </span>
                <div className="border border-orange-600 rounded-2xl w-32 px-2">
                  <p className="font-bold">Discounts </p>
                  <p>
                    {" "}
                    when ordering <spin></spin>{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col px-8 pt-0 md:w-1/2 max-md:h-1/12">
              <div>
                  <Image src={raj}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
