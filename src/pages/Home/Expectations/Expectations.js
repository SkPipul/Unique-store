import React from "react";

const Expectations = () => {
  return (
    <div className="px-10 mt-20">
      <h2 className="text-4xl font-bold text-center">
        RAISE YOUR EXPECTATIONS
      </h2>
      <p className="text-gray-400 font-mono text-2xl text-center mt-4 mb-8">
        REFINED VIEWING EXPERIENCE
      </p>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
        <div>
        <div className="w-full h-full overflow-hidden">
        <img className="w-full h-full hover:scale-125 transition-all duration-1000"
          src="https://cdn.shopify.com/s/files/1/0104/6917/9492/files/camera.jpg?v=1613704453&width=1500"
          alt=""
        />
        </div>
        </div>
        <div className="ml-8">
          <h4 className="text-3xl font-bold mb-6 mt-4">42 FRONT CAMERA FOR PERFECT SHOT</h4>
          <p>
            Porem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            
            culpa qui official.<br/>
            <br/> Diam vulputate ut pharetra sit. Elit ut aliquam
            purus sit amet luctus venenatis lectus. Lorem dolor sed viverra
            ipsum nunc aliquet. Ut consequat semper viverra nam libero. Velit ut
            tortor aremn.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Expectations;
