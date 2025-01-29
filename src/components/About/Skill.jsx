
const Skill = () => {
    return (
        <div className="my-20">
            <h1 className="font-semibold text-3xl ml-4 my-10"><span className="text-[#C778DD]">#</span>Skills
              <span className="text-[#C778DD] text-xl ml-2">------------</span>
            </h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mx-4">
            <div className="border border-gray-700  rounded">
              <h3 className="text-white font-semibold border-b border-gray-700 p-2">Languages</h3>
              <p className="p-2">JavaScript</p>
            </div>
            
            <div className="border border-gray-700  rounded">
              <h3 className="text-white font-semibold border-b border-gray-700 p-2">Frameworks</h3>
              <p className="p-2">Express ,React , Next, Tailwind ,Bootstrap</p>
            </div>

            <div className="border border-gray-700  rounded">
              <h3 className="text-white font-semibold border-b border-gray-700 p-2">Databases</h3>
              <p className="p-2">MongoDB</p>
            </div>

            <div className="border border-gray-700  rounded">
              <h3 className="text-white font-semibold border-b border-gray-700 p-2">Others</h3>
              <p className="p-2">Html, Css</p>
            </div>
            <div className="border border-gray-700  rounded">
              <h3 className="text-white font-semibold border-b border-gray-700 p-2">Tools</h3>
              <p className="p-2">VSCode, GitHub, Figma</p>
            </div>
          </div>
        </div>
    );
};

export default Skill;