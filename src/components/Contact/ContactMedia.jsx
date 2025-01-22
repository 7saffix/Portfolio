import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { TiSocialFacebook, TiSocialInstagram, TiSocialTwitter } from "react-icons/ti";

const ContactMedia = () => {
    return (
        <div className="mt-5 hidden md:block">
            <h1 className="font-bold text-2xl"><span className="text-[#C778DD]">#</span>all-media</h1>
            <nav className="flex gap-4 text-2xl my-3">
                                                        
                <a><FaGithub /></a>
                <a><FaLinkedin /></a>
                <a><TiSocialFacebook /></a>
                <a><TiSocialTwitter /></a>
                <a><TiSocialInstagram /></a>
             </nav>
                    
        </div>
    );
};

export default ContactMedia;