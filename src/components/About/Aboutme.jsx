import AnimationWrapper from "../../Helper/AnimationWrapper";
import Skill from "./Skill";

const AboutMe = () => {
    return (
      <AnimationWrapper className=" text-gray-300 min-h-screen p-10">
        <div className="">
          {/* About Me Section */}
          <h2 className="text-3xl font-bold text-purple-400 mb-4">/about-me</h2>
          <p className="mb-6">Who am I</p>
          <div className="flex flex-col md:flex-row gap-6 justify-around">
            <img src="Me.png" alt="Profile" className="max-w-[300px] w-full  rounded-lg" />
            <p className="text-gray-400 w-full md:pl-20">
              I&apos;m a JavaScript developer passionate about building scalable and efficient web applications. My expertise lies in JavaScript, and I enjoy crafting clean, optimized code for seamless user experiences.<br/><br/>

                I have a strong problem-solving mindset, tackling challenges with logical thinking and creativity. Whether it&apos;s debugging, optimizing performance, or designing architectures, I strive for the best solutions.<br/><br/>

                Learning is a continuous journey for me. I always explore new technologies, frameworks, and best practices to stay ahead in the evolving web development landscape.
            </p>
          </div>
  
          {/* Skills Section */}
          <Skill/>
  
          {/* Fun Facts Section */}
          <h2 className="text-3xl font-bold text-purple-400 mt-12 mb-4">#fun-facts</h2>
          <div className="flex flex-wrap gap-2">
            <span className="bg-gray-800 px-4 py-2 rounded">I like winter more than summer</span>
            <span className="bg-gray-800 px-4 py-2 rounded">I often bike with my friends</span>
            <span className="bg-gray-800 px-4 py-2 rounded">I like pizza and pasta</span>
            <span className="bg-gray-800 px-4 py-2 rounded">My favorite movie is The Green Mile</span>
          </div>
        </div>
      </AnimationWrapper>
    );
  };
  
  export default AboutMe;
  