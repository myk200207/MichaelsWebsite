import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

import timelineElements from '../assets/timelineElements';

export default function Experience({defaultColor}) {
  return (
    <>
      <section id = "ExperiencePage" className="flex flex-col justify-center items-center h-auto min-h-screen  text-white text-base sm:text-lg overflow-hidden">
       <div className="text-white flex flex-col justify-center items-center py-20 ">
          <h1 className="font-bold text-5xl">Timeline</h1>
          <br />
          <p>My journey</p>
        </div>

        {timelineElements.map((element) => {
          const color = defaultColor || `bg-${element.color}-500`;
          return (
            <>
              <div key={element.id} className="flex  sm:m-3 mx-3 relative">
                <div className="hidden items-start w-44 pt-0.5 relative sm:flex">
                  <div className="w-4/5">{element.date}</div>
                  <div
                    className={`bg-white w-px h-full translate-x-5 translate-y-10 opacity`}
                  ></div>
                  <img
                    src={element.icon}
                    className={`bg-white w-10 h-10 p-1 rounded-lg z-20`}
                  />
                  <div
                    className={`bg-white h-px w-8 translate-y-5 opacity-30`}
                  ></div>
                </div>
                <div className="border border-gray-600 rounded-lg px-8 py-4 w-full text-center z-10 sm:w-96">
                  <div className="text-xl font-medium">{element.title}</div>
                  <div className="text-white mb-5 sm:mb-8 sm:text-xs">
                    {element.location}{" "}
                    <span className="sm:hidden"> | {element.date}</span>
                  </div>
                  <div className="mb-4 text-left">{element.description}</div>
                  <div className="flex flex-wrap mb-5 justify-center">
                    {element.tech.map((tech, index) => {
                      return (
                        <span
                          key={index}
                          className="border-2 border-white rounded-xl px-2 py-1 text-sm m-1"
                        >
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                  <img
                     src={element.icon}
                    className={`bg-white w-8 p-1 rounded-lg z-20 absolute left-4 top-4 sm:hidden`}
                  />
                </div>
              </div>
              <div className="flex justify-center w-screen">
                <div
                  className={`bg-white w-0.5 h-9  opacity-60 sm:hidden `}
                ></div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
}

