
import ContactMedia from "./Contact/ContactMedia";

const Footer = () => {
    return (
        <div className="border-t-[1px]">
         <footer className="footer  text-neutral-content items-center p-4">
            <aside className="grid-flow-col items-center text-lg">
                
                <p>
                <span className="font-bold">Shah Aziz Chowdhury Safi</span><br />
                    
                Full stack developer based in Bangladesh</p>
                  
            </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end text-2xl">
                    
                    <ContactMedia/>
                </nav>
            </footer>

            <aside className="footer footer-center text-base-content p-4 text-lg">
                    <p>Copyright © {new Date().getFullYear()} - Made by Safi.</p>
            </aside>
        </div>
    );
};

export default Footer;
