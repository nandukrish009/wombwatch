"use client";
import React, { useEffect, useState, useContext } from "react";
import SideNavigation from "../components/sideNavigation/SideNavigation";
import ApplicationHeader from "../components/applicationHeader/ApplicationHeader";

function ResponsiveLayout({
    children,
    params,
  }: {
    children: React.ReactNode;
    params: { locale: string };
  }) {
    return(
    <>
    <div>
        <ApplicationHeader/>
      </div>
    <div className="flex relative top-[65px] justify-between">
      
        <div className="">
            <SideNavigation/>
        </div>
        <div className="transparentscroll overflow-auto mx-6 h-[calc(100vh_-_65px)] flex flex-col w-full relative">
        {children}
        </div>
    </div>
    </>
    )
  }

  export default ResponsiveLayout;