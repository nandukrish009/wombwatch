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
    <div className="flex relative justify-between top-[64px]">
      
        <div className="">
            <SideNavigation/>
        </div>
        <div className="w-full pt-9 px-6">
            {children}
        </div>
    </div>
    </>
    )
  }

  export default ResponsiveLayout;