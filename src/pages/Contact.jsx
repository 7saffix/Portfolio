import ContactForm from "../components/Contact/ContactForm";
import ContactIntro from "../components/Contact/ContactIntro";
import ContactMedia from "../components/Contact/ContactMedia";
import AnimationWrapper from "../Helper/AnimationWrapper";

const Contact = () => {
    return (
        <AnimationWrapper>
            <div className="my-5 md:my-16">
                <h1 className="font-bold text-2xl ml-4"><span className="text-[#C778DD]">/</span>Contact</h1>

                <div className="hero-content flex-col md:flex-row items-start">

                        <div className="text-left">   
                            <ContactIntro/>
                            <ContactMedia/> 
                        </div>

                        <ContactForm/>
                </div>    
            </div>  
            
        </AnimationWrapper>
    );
};

export default Contact;