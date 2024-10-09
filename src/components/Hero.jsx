import React from 'react'
import ProfilePic from '../assets/ProfilePic.jpg'
import {Button} from '@/components/ui/button'

const Hero = () => {
    return (
      <>
        <section className="h-screen">
          <div className="bg-themeFirstColor flex w-screen h-screen justify-center item-center">
            <div>
              <Avatar>
              <AvatarImage src={ProfilePic} alt="" />
              <AvatarFallback>Profile Pic</AvatarFallback>
              </Avatar>
              //<img src={ProfilePic} alt="" className="flex-1" />
            </div>
            <div className="bg-themeFirstColor text-white flex flex-col justify-center items-center text-center py-16 flex-1">
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