import { Container } from "./style";
import { Swiper, SwiperSlide } from 'swiper/react';
import CardPeople from "../CardPeople";




function SliderPeople( { people, title } ) {
  
  return (
    <Container>
      <h2>{title}</h2>
      <Swiper
        grabCursor={true}
        spaceBetween={10}
        slidesPerView={'auto'}
        className="swiper"
        style={{ overflow: 'hidden' }}
      >


        {
          people.map((item, index) => (
            <SwiperSlide key={index}>
              <CardPeople item={item}/>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </Container>
  );
}

export default SliderPeople;
