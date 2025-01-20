import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { LuMailQuestion } from "react-icons/lu";
import { TiSocialFacebook, TiSocialInstagram, TiSocialTwitter } from "react-icons/ti";

const ContactHero = () => {
    return (
        <div className=" my-5 md:my-16">
             <h1 className="font-bold text-2xl ml-4"><span className="text-[#C778DD]">/</span>Contact</h1>
            <div className="hero-content flex-col md:flex-row items-start">

                <div className="text-left">
                    <p className="my-3">Say Hello and Let’s Build Something Great!</p>
                    <p>I’m available for remote, onsite, and freelance opportunities. Don’t hesitate to get in touch to discuss your project or any inquiries!</p>

                    <div className="border border-[#C778DD] w-64 my-8 p-2">
                        <h1 className="font-bold">Message me here</h1>
                        <a href="" className="flex items-center"><FaWhatsapp /><p className="ml-2">+8801310756290</p></a>
                        <a className="flex items-center">
                            <LuMailQuestion /><p className="ml-2">7saffix@gmail.com</p></a> 
                    </div>

                    <div className="mt-5 hidden md:block">
                        <h1 className="font-bold text-2xl"><span className="text-[#C778DD]">#</span>all-media</h1>
                        <nav className="flex gap-4 text-2xl my-3">
                                        
                            <a><FaLinkedin /></a>
                            <a><TiSocialInstagram /></a>
                            <a><TiSocialFacebook /></a>
                            <a><TiSocialTwitter /></a>
                            <a><FaGithub /></a>
                        </nav>
    
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
        </div>
    );
};

export default ContactHero;
