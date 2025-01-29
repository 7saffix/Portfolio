import { FaWhatsapp } from "react-icons/fa6";
import { LuMailQuestion } from "react-icons/lu";

const ContactInfo = () => {
    return (
        <div className="hero-content flex-col md:flex-row items-start">
            <div className="text-left">
                <div>
                    <p className="my-3">Say Hello and Let’s Build Something Great!</p>
                    <p>I’m available for remote, onsite, and freelance opportunities.  However, if you have other request or question, don’t hesitate to contact me</p>
                </div>
        
            {/* contact box */}
                <div className="border border-[#C778DD] w-64 my-8 p-2 leading-9">
                    <h1 className="font-bold">Message me here</h1>
                    <a href="" className="flex items-center"><FaWhatsapp /><p className="ml-2">+8801310756290</p></a>
                    <a className="flex items-center"><LuMailQuestion /><p className="ml-2">7saffix@gmail.com</p></a> 
                </div>
            </div>

            <div className="card w-full md:max-w-md">
          <form className="card-body p-0">
              <div className="form-control">     
              <input type="text" placeholder="Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
              <input type="email" placeholder="Email" className="input input-bordered" required />
              </div>
              <div className="form-control">
              <textarea placeholder="Message"  className="input input-bordered h-[150px]" required />
              </div>
              <div className="form-control mt-6">
              <button className="btn">Let’s work together</button>
              </div>
          </form>
        </div>


        </div>     
    );
};

export default ContactInfo;
