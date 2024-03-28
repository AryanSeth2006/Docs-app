import React from 'react';
import { MdContactPage } from "react-icons/md";
import { PiDownloadSimpleLight } from "react-icons/pi";
import { motion } from "framer-motion";
import { AiFillCloseCircle } from "react-icons/ai"; // Import AiFillCloseCircle icon

function Card({ data, reference }) {
  // Define a variable to hold the class name based on tagColor
  const tagColorClass = data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600";

  return (
    <motion.div drag dragConstraints={reference} dragTransition={{bounceStiffness:100, bounceDamping:19}} whileDrag={{scale:1.3} } dragElastic={2} className={`relative w-60 h-72 rounded-[40px] p-5 overflow-hidden bg-sky-200/100 ${tagColorClass}`}>
      <MdContactPage />
      <p className='text-sm leading-tight mt-5 font-semibold'>{data.description}</p>
      <div className={`footer absolute bottom-0 ${tagColorClass} px-8 h-10 w-full right-0`}>
        <div className='flex items-center justify-between py-1'>
          <h5>{data.filesize}</h5>
          <span className='w-6 h-6 bg-sky-50 rounded-full justify-center'>
            {data.close ? <AiFillCloseCircle /> :  <PiDownloadSimpleLight size="1.3rem" color='#000'/>}
          </span>      
        </div>
        {
          data.tag.isOpen &&  (
            <div className={`tag w-full h-20 ${tagColorClass}-200 py-4 flex items-center justify-center`}>
              <h3 className='text-sm'>
                {data.tag.tagTitle}
              </h3>
            </div>
          )
        }  
      </div>  
    </motion.div>
  );
}

export default Card;
