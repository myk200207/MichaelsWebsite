import React from 'react'
import ProfilePic from '../assets/ProfilePic.jpg'
import {Button} from '@/components/ui/button'

const Hero = () => {
    return (
        <>
            <div className="flex w-screen justify-center item-center">
                <div>
                    <img src={ProfilePic} alt="" className='flex-1'/>
                </div>
                <div className='bg-black text-white flex flex-col justify-center items-center text-center py-16 flex-1'>
                    <p>
                        <span>Michael Kim</span>
                    </p>
                    <p>
                        Hi! So glad you're here.
                            Welcome to my page!
                            Click Next to see the rest of my site!
                    </p>
                    <Button>Button</Button>

                </div>
            </div>

        </>
    )
}

export default Hero