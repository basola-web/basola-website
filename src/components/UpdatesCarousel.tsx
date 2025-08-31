import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './updates-carousel.css';
import UpdateCard from './UpdateCard';

interface Update {
  slug: string;
  data: {
    title: string;
    date: string;
    summary: string;
    tags?: string[];
    heroImage?: string;
  };
}

interface Props {
  updates: Update[];
}

export default function UpdatesCarousel({ updates }: Props) {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 5000 }}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }}
      className="updates-swiper"
    >
      {updates.map(({ slug, data }) => (
        <SwiperSlide key={slug}>
          <UpdateCard
            url={`/news/${slug}`}
            title={data.title}
            date={data.date}
            summary={data.summary}
            tags={data.tags}
            heroImage={data.heroImage}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
