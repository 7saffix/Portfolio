
import Skill from "../components/About/Skill";
import ContactInfo from "../components/Contact/ContactInfo";
import Hero from "../components/Hero";
import AnimationWrapper from "../Helper/AnimationWrapper";


const Home = () => {
    return (
        <div>
            <Hero/>

            <AnimationWrapper className="my-5 md:my-16">
            
                <Skill/>   

                <h1 className="font-semibold text-3xl ml-4"><span className="text-[#C778DD]">#</span>Contacts
                    <span className="text-[#C778DD] text-xl ml-2">------------</span>
                </h1>
                <ContactInfo/>   
                
            </AnimationWrapper> 
        </div>
    );
};

export default Home;