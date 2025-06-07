'use client'
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer); // Cleanup
  }, []);

  const timeOptions = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  };

  const dateOptions = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  };

  const formattedTime = dateTime.toLocaleTimeString('en-US', timeOptions);
  const formattedDate = dateTime.toLocaleDateString('en-US', dateOptions);

  return (
    <section className='flex size-full flex-col gap-10'>
      <div className="h-[300px] w-full rounded-[20px] bg-[url('/images/hero-background.png')]" >
      <div className='flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11'>
        <h2 className='bg-gray-400 max-w-[270px] rounded py-2 text-center text-base'>Upcoming Meeting at: 12:30</h2>
        <div className='flex flex-col gap-2'>
          <h1 className='text-4xl text-white font extrabold lg:text-7xl'>
            {formattedTime}
          </h1>
          <p className='text-lg text-gray-400 font-medium text-blue-[#C9DDFF] lg:text-2xl'>{formattedDate}</p>
        </div>
      </div>
      </div>
      
    </section>
  )
}

export default Home
