import React from 'react';
import { User } from 'lucide-react';
import Image from 'next/image';

const ApplicationHeader = () => {
  return (
    <header className="fixed w-full shadow-varient-1 z-20">
    <div className="w-full flex items-center justify-between p-4 bg-[#ffffff] shadow-md text-white px-5">
      {/* Left side: Logo */}
      <div className="flex items-center">
        <Image
          src="/logo.png" 
          alt="Logo"
          className="h-8 w-auto"
          width={32}
          height={32}
        />
      </div>

      <div className="flex items-center space-x-2">
        <User className="text-xl text-dark-blue" />
        <span className="text-[16px] font-semibold text-dark-blue opacity-85">John Doe</span> 
      </div>
      </div>
    </header>
  );
};

export default ApplicationHeader;
