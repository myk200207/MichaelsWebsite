import React from 'react'
import AboutMePhoto from '../assets/aboutme.jpg'
const About = () => {
  return (
    <>
      <section id="AboutPage" className="h-auto min-h-screen  flex flex-row text-center text-white">
        <div className="flex flex-col flex-1 w-10 justify-center items-center px-20" >
          <h1 className="text-5xl font-bold mb-4">About Me</h1>
          <h2 className="text-2xl">Michael Kim</h2>
          <br />
          <p className="mb-3 xl:px-40">
            I have proudly served in the United States Air Force as a Medic working with the 55th Medical Group in Omaha, Nebraska, and with the 367th Expeditionary Group in Doha, Qatar.
          </p>
          <p className="mb-3 xl:px-40">
            After my service, I was privileged to receive my undergraduate education at the University of Virginia, finishing my Bachelor of Computer Science degree in two years.
          </p>
          <p className="mb-3 xl:px-40">
            Currently, I am pursuing my Masters of Computer Science degree at Georgia Institute of Technology, focusing on AI/ML and humanoid studies.
          </p>
          <p className="mb-3 xl:px-40">
            I am also working as a software engineer/full-stack developer.
          </p>
        </div>
        <div
          className="xl:flex flex-col flex-1 justify-center items-center pt-16 hidden "
          style={{ paddingTop: '4.5rem' }}
        >
          <img
            src={AboutMePhoto}
            alt="About Me"
            className="object-cover w-full h-full"
            style={{ borderRadius: '25px' }}
          />
        </div>
      </section>
    </>
  );
};

export default About;