import React, { useRef } from 'react';
import Card from './Card';

function Foreground() {
  const ref = useRef(null); // Define ref using useRef hook

  const data = [
    {
      description: "Hey! Today you have to start with the New Project of React.",
      filesize: "1MBs",
      close: false,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      description: "Meeting tonight with Client.",
      filesize: "3KBs",
      close: false,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      description: "Another task.",
      filesize: "2MBs",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
  ];

  return (
    <div ref={ref} className='w-full h-full fixed z-[3] top-0 left-0 flex gap-5 flex-wrap '>
      {data.map((item, index) => (
        <Card key={index} reference={ref} data={item} />
      ))}
    </div>
  );
}

export default Foreground;
