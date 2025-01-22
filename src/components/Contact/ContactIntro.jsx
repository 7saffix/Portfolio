import { FaWhatsapp } from "react-icons/fa6";
import { LuMailQuestion } from "react-icons/lu";

const ContactIntro = () => {
    return (
         <div>
                                        
            {/* contact intro  */}
            <div>
                <p className="my-3">Say Hello and Let’s Build Something Great!</p>
                <p>I’m available for remote, onsite, and freelance opportunities.  However, if you have other request or question, don’t hesitate to contact me</p>
            </div>
        
            {/* contact box */}
            <div className="border border-[#C778DD] w-64 my-8 p-2">
                <h1 className="font-bold">Message me here</h1>
                <a href="" className="flex items-center"><FaWhatsapp /><p className="ml-2">+8801310756290</p></a>
                <a className="flex items-center"><LuMailQuestion /><p className="ml-2">7saffix@gmail.com</p></a> 
            </div>
                                    
         </div>
    );
};

export default ContactIntro;
