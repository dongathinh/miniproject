import {Pagination } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Slide= ()=>{
    return(
        <Swiper
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            >
            <SwiperSlide><img src="https://victorthemes.com/themes/windfall/wp-content/uploads/2019/04/slide1.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://victorthemes.com/themes/windfall/wp-content/uploads/2019/04/slide2.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://victorthemes.com/themes/windfall/wp-content/uploads/2019/04/slide3.png" alt="" /></SwiperSlide>
        </Swiper>
    )

}
export default Slide