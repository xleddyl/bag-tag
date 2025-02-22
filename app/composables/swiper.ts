import 'swiper/css'
import 'swiper/css/effect-cards'
import 'swiper/css/pagination'
import { Autoplay, EffectCards, Mousewheel, Pagination } from 'swiper/modules'
import type { SwiperOptions } from 'swiper/types'

export const useSwiper = () => {
   const swiperModules = [Pagination, Autoplay, EffectCards, Mousewheel]

   const swiperOptions: SwiperOptions = {
      modules: swiperModules,
      slidesPerView: 1,
      loop: true,
      effect: 'cards',
      touchRatio: 1,
      touchAngle: 45,
      grabCursor: true,
      //
      mousewheel: {
         forceToAxis: true,
      },
      autoplay: {
         delay: 3000,
         disableOnInteraction: false,
      },
      pagination: {
         clickable: true,
         bulletActiveClass: 'swiper-pagination-bullet-active !bg-sunset-strip',
         el: '.swiper-custom-pagination',
      },
      cardsEffect: {
         slideShadows: true,
      },
   }

   return {
      swiperModules,
      swiperOptions,
   }
}
