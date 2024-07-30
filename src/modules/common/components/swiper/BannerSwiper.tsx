
'use client'
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';

//slider images
import SliderImage from '../../../../assets/images/slide-img.jpg'

export default () => {
  return (
    <Swiper
    className='h-[500px]'
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><Image className='w-full' src={SliderImage} alt=''/></SwiperSlide>
      <SwiperSlide><Image className='w-full' src={SliderImage} alt=''/></SwiperSlide>
      <SwiperSlide><Image className='w-full' src={SliderImage} alt=''/></SwiperSlide>
      <SwiperSlide><Image className='w-full' src={SliderImage} alt=''/></SwiperSlide>
      <SwiperSlide><Image className='w-full' src={SliderImage} alt=''/></SwiperSlide>
    </Swiper>
  );
};