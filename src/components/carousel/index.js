'use client'
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';




const ImageCarousel = ({images}) => {
  return (
    <div className='px-10 py-6 max-w-[520px] max-h-[620px]'>
      <Swiper pagination={{
          clickable: true,
          enabled: true,
          
        }}
         modules={[Autoplay, Pagination]} autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }} className="mySwiper">
        {
            images.map((image, index)=> (
                <SwiperSlide key={index}>
                    <Image
                    src={image}
                    alt={`Slide ${index}`}
                    sizes="100vw"
                    width={520}
                    height={520}
                    />
                </SwiperSlide>
            ))
        }
      </Swiper>
    </div>
  );
}

export default ImageCarousel;