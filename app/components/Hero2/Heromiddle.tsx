/* eslint-disable react/jsx-key */
import React from 'react'
import Heroleft from './Heroleftright/Heroleft'
import Heroright from './Heroleftright/Heroright'

const Heromiddle = () => {

 const  features = [
     {
         number: "01",
         h3: "Track company-wide progress",
         p: "See how your-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
      },
     {
         number: "02",
         h3: "Advanced built-in reports",
         p: "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you  build out the reports you need to keep key stake holders informed.",
     },
    {
         number: "03",
         h3: "Everything you need in one place",
         p: "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
    },

]



  return (
    <section>
       <div className='container flex flex-col px-4 mx-auto mt-10 space-y-12
                       md:space-y-0 md:flex-row'>
           <Heroleft />
           <Heroright features={features} />
       </div>
    </section>
);
};
export default Heromiddle


