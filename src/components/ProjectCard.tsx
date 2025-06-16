import { useState } from 'react';
import Image from 'next/image';
import Tag from './Tag';
import Icon from './Icons';

export default function ProjectCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className='w-full cursor-pointer rounded-xl'
    >
  <Image
    src="https://images.ctfassets.net/f1pjbpw1fgkh/1p9YYW0cEChbeSesFVsVxJ/6216258e9482f282225dbf7fc87e3cc5/Screenshot_2025-06-15_225831.png"
    alt="Project Image"
    width={400}
    height={400}
    className="aspect-square w-full rounded-xl object-cover"
  />
    </div>
  );
}

// <div
//   onMouseEnter={() => setIsHovered(true)}
//   onMouseLeave={() => setIsHovered(false)}
//   className="bg-primary-100 w-full cursor-pointer rounded-xl transition-transform duration-300 hover:scale-102 hover:shadow-lg"
// >
  // <Image
  //   src="https://images.ctfassets.net/f1pjbpw1fgkh/1p9YYW0cEChbeSesFVsVxJ/6216258e9482f282225dbf7fc87e3cc5/Screenshot_2025-06-15_225831.png"
  //   alt="Project Image"
  //   width={400}
  //   height={300}
  //   className="mb-4 aspect-video w-full rounded-t-xl object-cover"
  // />
//   <div className="p-4">
//     <div className="flex items-start justify-between gap-2">
//       <h2 className="w-full text-lg font-medium">
//         MovieFlix - Online Movies & TV Shows Application
//       </h2>
//       <div
//         className={`${isHovered ? 'md:opacity-100' : 'md:opacity-0'} bg-primary-300 rounded-full p-2 transition-opacity duration-300`}
//       >
//         <Icon name="arrowUpRight" size={20} color="#1c1c1c" weight="bold" />
//       </div>
//     </div>
//     <div className="mt-4 flex items-center gap-2">
//       {['Next.js', 'Supabase'].map((tag, index) => (
//         <Tag key={index}>{tag}</Tag>
//       ))}
//     </div>
//   </div>
// </div>
