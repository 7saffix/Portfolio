import ContactInfo from "../components/Contact/ContactInfo";
import AnimationWrapper from "../Helper/AnimationWrapper";

const Contact = () => {
    return (
        <AnimationWrapper className="my-5 md:my-16">       
                <h1 className="font-bold text-2xl ml-4"><span className="text-[#C778DD]">/</span>Contact</h1>

                <ContactInfo/>         
        </AnimationWrapper>
    );
};

export default Contact;