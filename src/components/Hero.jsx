import { Link } from "react-router-dom";


const Hero = () => {
    return (
       
        // <div className="">
        //     {/* left  */}
        //   <div className="w-full md:w-1/2">
        //       <div className="md:mt-28">
        //       <h1 className="font-semibold text-3xl">Safi is a <span className="text-[#C778DD] font-bold">Full Stack developer</span></h1>
        //       <p className="text[#ABB2BF] font-normal my-3">He crafts responsive websites where technologies meet creativity</p>
        //       <button className="py-2 px-4 border-2 border-[#C778DD]">Contact me!!</button>
        //     </div>
        //   </div>
      
        // {/* right  */}
        //   <div className="w-full md:w-1/2">
        //   <div className=" w-full md:w-3/5 mt-10 md:mt-0 rounded-2xl outline-dashed p-4 outline-[#C778DD]">
        //             <img src="Me.png" alt="" className="w-full max-w-xl md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-lg"/>
        //     </div>
        //     <button className="outline outline-3 outline-[#C778DD]">Open for new opportunities</button>
        //   </div>
        // </div>

        <div className="hero sm:my-4">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="font-semibold text-3xl">Hello world! Safi is a <span className="text-[#C778DD] font-bold">Full Stack developer</span></h1>
            <p className="pt-4 pb-6">
            &quot;Engineering the digital world — where ideas evolve into impactful web experiences&quot;
            </p>
            <Link to={'/contact'} className="py-2 px-4 outline-dashed outline-[#C778DD]">Contact me!!</Link>
          </div>
        </div>
      </div>
      
    );
};

export default Hero;