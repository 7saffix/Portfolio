
const ContactForm = () => {
    return (
        
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
        
    );
};

export default ContactForm;
