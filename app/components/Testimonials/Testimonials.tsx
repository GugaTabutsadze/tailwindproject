import React from 'react'
import ImonialContent from './TestimonialContent/ImonialContent'

const Testimonials = () => {

    const testimonials = [
        {
            src: "/images/avatar-anisha.png",
            name: "Anisha Li",
            review: "Manage has supercharged our teams's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated"
        },
        {
            src: "/images/avatar-ali.png",
            name: "Ali Bravo",
            review: "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused"
        },
        {
            src: "/images/avatar-richard.png",
            name: "Richard Watts",
            review: "Manage allows us to provide structure and process. It keeps us organized and focused. I can't stop recommending them to everyone i talk to!"
        },
        {
            src: "/images/avatar-shanai.png",
            name: "Shanai Gough",
            review: "Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive"
        },
    ]

  return (
    <div className='container relative flex flex-col items-center mt-10 mx-auto space-y-20
                   md:space-y-24 md:mt-28'>
      <h1 className='font-bold text-4xl text-center'>What they've said</h1>
      <ImonialContent testimonials={testimonials}/>
      <a href='#' className='flex items-center justify-center p-3 px-6 pt-2 text-white bg-brightRed
           hover:bg-brightRedLight rounded-full baseline'>
            Get Started
        </a>
    </div>
  ) 
}

export default Testimonials
