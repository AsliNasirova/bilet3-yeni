import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import './header.scss'

export default function Header() {
  return (
    <>
    <div >
      <Swiper
        pagination={{
            
          type: 'fraction',
        }}
        navigation={true}
        spaceBetween={30}
        slidesPerView={1}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="textImageHEader">
            <div className="textHeader">
                <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore ipsa aspernatur unde consectetur quasi ea.</h2>
            </div>
            <div className='headerImage'>
               
            <img src="https://preview.colorlib.com/theme/tasty/images/bg_2.jpg" alt="" /></div>
            </div>
        </SwiperSlide>
        <SwiperSlide><img src="https://preview.colorlib.com/theme/tasty/images/bg_3.jpg" alt="" /></SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}
