import React from 'react'
import css from './Footer.module.scss'
import img1 from '../../images/icons/1.svg'
import img2 from '../../images/icons/2.svg'
import img3 from '../../images/icons/3.svg'

export const Footer = () => {

	const footerArr = [
		{
			img: img1,
			text: '123 Fairway Drive'
		},
		{
			img: img2,
			text: '+1 (555) 123-4567'
		},
		{
			img: img3,
			text: 'info@golfclub'
		},
	]

	return (
		<div id="contactsSection" className={css.wrapper}>
			<div className={css.title}>Contact us</div>
			<div className={css.container}>
				{footerArr.map((el, i) => {
					return <div key={i} className={css.item}>
						<img src={el.img} alt={`img-${i}`} />
						<div>
							{el.text}
						</div>
					</div>
				})}
				
			</div>
		</div>
	)
}
