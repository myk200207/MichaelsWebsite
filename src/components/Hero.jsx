import React from 'react'
import secondphoto from '../assets/secondphoto.jpg'
import {Button} from '@/components/ui/button'
import Image from 'react-bootstrap/Image'
const Hero = () => {
    return (
      <>
        <section className="h-screen">
          <div className="bg-themeFirstColor flex w-screen h-screen justify-center item-center">
            <div className="bg-themeFirstColor text-white flex flex-col justify-center items-center text-center gap-10 flex-1">
              <div className="w-60 h-60 overflow-hidden rounded-full" >
                <img
                  src={secondphoto}
                  alt=""
                  className="w-full h-full object-cover"
                  
                />
              </div>
              
              <h1 className="text-4xl ">Michael Kim</h1>
              <p>
                Software Engineer
                <br />
                Full-Stack Developer
                <br />
                AI/ML Grad Student
              </p>
              <Button>View Portfolio</Button>
            </div>
          </div>
        </section>
      </>
    );
}

export default Hero