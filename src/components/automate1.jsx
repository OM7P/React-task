import React, { useState } from "react";
import VerticalStepper from "./VerticalStepper";
import Automate2 from "./automate2";
import { IoIosArrowDown } from "react-icons/io";

const Automate1 = () => {
  const steps = [1, 2, 3, 4, 5];
  const [currentStep, setCurrentStep] = useState();

  const OpenAutoMateFunction = (id) => {
    console.log("ID::", id);
    // if (id === 1) {
        setCurrentStep(id);
    // }
  };

  //   setTimeout(() => {
  //     setIsOpen();
  //   }, 2000);

  return (
    <div>
      <div className="bg-gray-900 min-h-screen text-white p-6">
        {/* Header Section */}

        <div className="max-w-4xl mx-auto mb-10 ml-[330px]">
          <div className="flex items-center space-x-5">
            <div className="">
              <svg
                width="69"
                height="69"
                viewBox="0 0 69 69"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35.9872 33.0128L24.1609 44.8391M25.4372 36.2563L19.6445 34.888C19.0072 34.7374 18.783 33.9462 19.2447 33.4829L23.8514 28.8762C24.1609 28.5667 24.5807 28.3894 25.0207 28.386L30.2145 28.3409M36.7566 22.3976C40.6223 25.0339 43.9661 28.3777 46.6024 32.2434M32.742 43.5628L34.1103 49.3555C34.2609 49.9928 35.0521 50.217 35.5154 49.7553L40.1222 45.1486C40.4316 44.8391 40.6089 44.4193 40.6123 43.9793L40.6575 38.7855M47.5943 29.5252L48.9459 23.0216C49.3139 21.2518 47.7482 19.6861 45.9784 20.0541L39.4748 21.4057C37.5595 21.8038 35.8032 22.7523 34.4215 24.1356L29.0854 29.47C27.0497 31.5057 25.7249 34.1453 25.3067 36.994L25.2883 37.1161C25.024 38.9343 25.6329 40.7693 26.9309 42.0691C28.229 43.3671 30.0657 43.976 31.8839 43.71L32.006 43.6916C34.8547 43.2751 37.4943 41.9486 39.53 39.9129L44.8644 34.5785C46.2477 33.1968 47.1962 31.4405 47.5943 29.5252Z"
                  stroke="url(#paint0_linear_1_23864)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <circle
                  cx="34.5"
                  cy="34.5"
                  r="34.5"
                  fill="url(#paint1_linear_1_23864)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_23864"
                    x1="34"
                    y1="20"
                    x2="34"
                    y2="50"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#BE0E9E" />
                    <stop offset="1" stop-color="#8451E0" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_1_23864"
                    x1="34.5"
                    y1="0"
                    x2="15.3333"
                    y2="69"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#8353E2" stop-opacity="0.2" />
                    <stop offset="1" stop-color="#B914A4" stop-opacity="0.35" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="text-start">
              <h1 className="text-xl font-bold text-start">
                Customer Registration
              </h1>
              <p className="text-gray-400">Automation Steps</p>
            </div>
          </div>
        </div>
        {/* Steps Section */}
        <div className="flex justify-center items-center">
          <div className="absloute ml-[300px]">
            <VerticalStepper />
          </div>
          <div className="max-w-4xl mx-auto relative ml-[20px] bottom-[90px] ">
            {/* Start Line */}

            {steps.map((step, index) => (
              <div
                key={index}
                className={"flex items-start mb-8 top-2 right-[20px] relative border-gray-100 border-[1px]  bg-black p-4 rounded-lg cursor-pointer mt-12"}
              >
                {/* Step Content */}
                {currentStep === step ? (
                  <div></div>
                ) : (
                  <div className="flex">
                    <div
                      className=" w-[700px] h-[40px] text-start "
                      onClick={() => OpenAutoMateFunction(step)}
                    >
                      <h2 className="text-md font-semibold mb-1">
                        Customer Information Collection
                      </h2>
                      <p className="text-gray-400 text-[13px]">
                        User enters personal details (eg. name, email, phone
                        number) and submits it
                      </p>
                    </div>

                    <div className="flex justify-center items-center gap-2">
                      <div className="border-2 rounded-2xl p-2">
                        <IoIosArrowDown onClick={()=>OpenAutoMateFunction(step)}/>
                      </div>
                      {/* Assist Button */}
                      <div className="ml-auto">
                        <button className="border border-gray-100 text-gray-200 py-1 px-4 rounded-full hover:bg-gray-700">
                          Assist
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === step ? <Automate2 step={step} currentStep={currentStep}  setCurrentStep={setCurrentStep}/> : <div></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Automate1;
