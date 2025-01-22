
import ContactForm from "../components/Contact/ContactForm";
import ContactIntro from "../components/Contact/ContactIntro";
import Hero from "../components/Hero";
import AnimationWrapper from "../Helper/AnimationWrapper";


const Home = () => {
    return (
        <div>
            <Hero/>

            <AnimationWrapper className="my-5 md:my-16">
                <>
                    <h1 className="font-semibold text-3xl ml-4"><span className="text-[#C778DD]">#</span>Contacts
                    <span className="text-[#C778DD] text-xl ml-2">------------</span>
                    </h1>
                </>
                <div className="hero-content flex-col md:flex-row items-start">

                        <div className="text-left">   
                            <ContactIntro/>
                        </div>

                        <ContactForm/>
                </div>    
            </AnimationWrapper> 
        </div>
    );
};

export default Home;