"use client"
import Image from 'next/image'
import LandingPage from '../component/landingPage/landingPage';
import React from 'react';

// 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
// https://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@github.com/divya-1007/king_place_backend.git
// K560bPtwgqgm0kfm
export default function Home() {
 
  return (
    
    <main className="flex flex-col items-center justify-between">
      <div className='container' style={{overflow:'hidden'}}>
        <LandingPage />
      </div>
    </main>
  )
}
