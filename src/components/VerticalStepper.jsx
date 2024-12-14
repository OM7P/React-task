import React from "react";

function VerticalStepper() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 p-10 ">
      {/* Stepper Container */}
      <div className="flex flex-col items-center">
        {/* Step 1 */}
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-blue-500 text-white bg-black font-bold">
            1
          </div>
          <div className="h-[80px] w-0.5 bg-gradient-to-b from-blue-500 to-pink-500"></div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-pink-500 text-white bg-black font-bold">
            2
          </div>
          <div className="h-[80px] w-0.5 bg-gradient-to-b from-pink-500 to-orange-500"></div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-orange-500 text-white bg-black font-bold">
            3
          </div>
          <div className="h-[80px] w-0.5 bg-gradient-to-b from-orange-500 to-purple-500"></div>
        </div>

        {/* Step 4 */}
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-purple-500 text-white bg-black font-bold">
            4
          </div>
          <div className="h-[80px] w-0.5 bg-gradient-to-b from-purple-500 to-cyan-500"></div>
        </div>

        {/* Step 5 */}
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-cyan-500 text-white bg-black font-bold">
            5
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerticalStepper;
