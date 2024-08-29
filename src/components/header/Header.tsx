"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { MoveRight, Menu, X } from 'lucide-react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Signup from '../auth/Signup';
import { height } from '@fortawesome/free-solid-svg-icons/fa0';
import Login from '../auth/Login';
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: 'calc(100vh - 40px)',
  bgcolor: 'background.paper',
  border: '0px solid #000',
  boxShadow: 24,
  
};
function Header() {
 const [scrolling, setScrolling] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState('');
  const handleChildClose = (newData: boolean) => {
    setOpen(newData);
    setOpenLoginModal(newData);
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenLogin = () => setOpenLoginModal(true);
  const handleCloseLogin = () => setOpenLoginModal(false);

  const handleModal = (data:any) =>{
    setOpen(true);
    setOpenModal(data);
  }
  const handleModalChange = (modalName:any) =>{
    setOpenModal(modalName);
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
<>
    <header className='fixed px-3 lg:px-20 py-2 top-0 left-0 right-0 z-50 transition ease-in-out duration-150'
       style={{
         backgroundColor: scrolling > 100 ? 'rgba(0, 0, 0, 0.5)' : 'transparent',
         backdropFilter: scrolling > 100 ? 'blur(5px)' : 'none'
       }}
     >
  <nav className="flex justify-between">
  <div className="w-[130px] md:w-[200px] flex items-center">
    <Link href="/">
  <Image src='/wombwatch_crop.JPG' width={60} height={60} alt='wombwatch logo'/>
  </Link>
  </div>
  <div className="flex items-center gap-3">
      <div className={`navLinks duration-500 absolute md:static md:w-auto w-full md:h-auto h-screen flex md:items-center gap-[1.5vw] top-[100%] px-5 md:py-0 py-5 z-50 ${isMenuOpen ? "right-0 bg-dark-blue" : "right-[-100%]"}`}>
      <ul className="flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-8">
        <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea]  after:absolute after:h-[2px] text-white after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"><Link href="#">Features</Link></li>
        <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea]  after:absolute after:h-[2px] text-white after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"><Link href="#">Blog</Link></li>
        <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea]  after:absolute after:h-[2px] text-white after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"><Link href="#">About Us</Link></li>
        <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea]  after:absolute after:h-[2px] text-white after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"><Link href="#">Contact us</Link></li>
      </ul>
    </div>
    <div className="flex items-center gap-6">
    <p  className='text-white hover:text-blue cursor-pointer' onClick={() => handleModal('login')}>Login</p>
    <button className='flex gap-2 items-center px-3 py-2 md:border md:border-blue rounded-md md:hover:border-blue text-white hover:bg-transparent hover:text-blue' onClick={() => handleModal('signup')}>
             Sign up<span><MoveRight className="hidden md:block" style={{strokeWidth : '1.3px'}}/></span></button>
             {isMenuOpen ? <X onClick={toggleMenu} className='md:hidden text-white'/> : <Menu onClick={toggleMenu} className='md:hidden text-white'/>}
    </div>
  </div>
  </nav>
  </header>
   {/*<div>
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openLoginModal}
      onClose={handleCloseLogin}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={openLoginModal}>
        <Box sx={style} className='w-[calc(100vw_-_20px)] md:w-[calc(100vw_-_80px)] overflow-hidden transparentscroll p-0 max-md:p-1 rounded-md md:rounded-2xl'>
            <Login close={handleChildClose}/>
        </Box>
      </Fade>
    </Modal>
    </div> */}
    <div>
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style} className='w-[calc(100vw_-_20px)] md:w-[calc(100vw_-_80px)] overflow-hidden transparentscroll p-0 max-md:p-1 rounded-md md:rounded-2xl'>
          {openModal == "login" ?  <Login close={handleChildClose} modalChange={handleModalChange}/> : <Signup close={handleChildClose} modalChange={handleModalChange}/>}
            
        </Box>
      </Fade>
    </Modal>
    </div>
</>
  );
}

export default Header;
