import React from 'react'
import ProfilePic from '../assets/ProfilePic.jpg'
const About = () => {
  return (
    <>
      <section className="h-screen flex flex-row text-center">
        <div className="flex flex-col flex-1 w-10 justify-center items-center">
          <h1 className="text-3xl font-bold mb-4">Michael Kim</h1>
          <p className="mb-2">
            United States Air Force - Medic
            <span className="block">
              University of Virginia - Bachelor of Computer Science
            </span>
            <span className="block">
              Georgia Institute of Technology - Master of Science in Computer
              Science
            </span>
          </p>
          <p>
            I am currently employed as a government contractor working as a
            full-stack developer, and I am attending Georgia Tech's Master's
            program focused on AI/ML and humanoid studies.
          </p>
        </div>
        <div className="flex flex-col flex-1 justify-center items-center">
          <img
            src={ProfilePic}
            alt=""
          />
        </div>
      </section>
    </>
  );
}

export default About