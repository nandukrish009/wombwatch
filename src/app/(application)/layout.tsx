"use client";
import React, { useEffect, useState, useContext } from "react";
import SideNavigation from "../components/sideNavigation/SideNavigation";

function ResponsiveLayout({
    children,
    params,
  }: {
    children: React.ReactNode;
    params: { locale: string };
  }) {
    return(
    <>
    <div className="flex relative justify-between">
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