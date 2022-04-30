import React from 'react'
import FeatureBox from './FeatureBox';
export default function Features() {
  return (
    <div className='flex flex-col'>
        <h1 class="text-3xl bg-primary-light pt-3 text-center text-white tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl ">
            Features
        </h1>
        <div className='h-80 bg-primary-light  justify-center items-center flex gap-x-3' style={{"height":"446px"}}>
        <FeatureBox></FeatureBox>
        <FeatureBox></FeatureBox>
        <FeatureBox></FeatureBox>
        <FeatureBox></FeatureBox>

        </div>
    </div>
  )
}
