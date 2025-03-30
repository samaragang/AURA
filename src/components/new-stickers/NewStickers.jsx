import React, { useState } from "react";
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CustomButton from './../ui/CustomButton';
import 'swiper/css';
import 'swiper/css/pagination';
import './new-stickers.css';
import sliderTitleImg from '/public/images/icons/fire.svg';
import slideOneImgOne from '/public/images/slider-content/Ghost-2.svg';
import slideOneImgTwo from '/public/images/slider-content/Ghost-1.svg';
import slideOneImgThree from '/public/images/slider-content/Parental Advisory 1.svg';
import slideTwoImgOne from '/public/images/slider-content/chrome is dead.svg';
import slideTwoImgTwo from '/public/images/slider-content/Infinity 8 1.svg';
import slideThreeImgOne from '/public/images/slider-content/IAMDESIGNER Circle 2 1.svg';
import slideThreeImgTwo from '/public/images/slider-content/Global 30.svg';
import slideThreeImgThree from '/public/images/slider-content/Frankenstein White 1.svg';
import slideFourImgOne from '/public/images/slider-content/New Wave Big White 1.svg';

const NewStickers = () => {
  const [checked, setChecked] = useState(false);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  return (
    <div className="stickers-slider">
      <div className="container">
        <div className="stickers-slider__inner">
          <h1 className="stickers-slider__title">
            <img src={sliderTitleImg} alt="fire" />
            Новые стикеры
          </h1>
          <Swiper
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={pagination}
          >
            <SwiperSlide>
              <img src={slideOneImgOne} alt="sticker" />
              <img src={slideOneImgTwo} alt="sticker" />
              <img src={slideOneImgThree} alt="sticker" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slideTwoImgOne} alt="sticker" />
              <img src={slideTwoImgTwo} alt="sticker" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slideThreeImgOne} alt="sticker" />
              <img src={slideThreeImgTwo} alt="sticker" />
              <img src={slideThreeImgThree} alt="sticker" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slideFourImgOne} alt="sticker" style={{ borderRadius: 50 }} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="stickers-form">
        <div className="container">
          <div className="stickers-form___inner">
            <h2 className="stickers-form__title">Будь в курсе новинок! Подпишись на рассылку!</h2>
            <input type="text" placeholder='Имя' />
            <input type="text" placeholder='E-mail' />
            <CustomButton type="submit">
              Подписаться
            </CustomButton>
            <div>
              <label className="checkbox-container">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                />
                <div className="custom-checkbox">
                  {checked && (
                    <svg viewBox="0 0 24 24" className="checkmark">
                      <polyline points="4 12 10 18 20 6" />
                    </svg>
                  )}
                </div>
                <label>Согласен на обработку персональных данных</label>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewStickers;