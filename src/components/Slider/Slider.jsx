import React from 'react'
import css from './Slider.module.scss'
import Slider from "react-slick";
import image1 from '../../images/slider/1.png'
import image2 from '../../images/slider/2.png'
import image3 from '../../images/slider/3.png'
import image4 from '../../images/slider/4.png'
import image5 from '../../images/slider/5.png'


export const SliderBlock = () => {

	const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
		arrows: false,
		autoplay: true,
    autoplaySpeed: 2000,
		responsive: [
      {
        breakpoint: 1630,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1120,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  };

	return (
		<div className={css.wrapper}>
			<div className={css.container}>
					<div className={css.title}>
						Services
					</div>
					<div className={css.sliderWrapper}>
					<div className="slider-container">
						<Slider {...settings}>
							<div className={css.imageWrapper}>
								<img className={css.sliderImage} src={image1} alt="slider-1" />
								<div>Golf Lessons</div>
							</div>
							<div className={css.imageWrapper}>
								<img className={css.sliderImage} src={image2} alt="slider-2" />
								<div>Equipment Rental</div>
							</div>
							<div className={css.imageWrapper}>
								<img className={css.sliderImage} src={image3} alt="slider-3" />
								<div>
									Dining and Hospitality
								</div>
							</div>
							<div className={css.imageWrapper}>
								<img className={css.sliderImage} src={image4} alt="slider-4" />	
								<div>Event Hosting</div>
							</div>
							<div className={css.imageWrapper}>
								<img className={css.sliderImage} src={image5} alt="slider-5" />	
								<div>Shop</div>
							</div>
						</Slider>
					</div>
					</div>
			</div>
		</div>
	)
}
