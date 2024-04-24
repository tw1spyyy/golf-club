import React from 'react'
import styles from './Membership.module.scss'
import img1 from '../../images/membership/1.png'
import img2 from '../../images/membership/2.png'
import img3 from '../../images/membership/3.png'


export const Membership = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.leftPart}>
					<div className={styles.contentBlock}>
						<h2 className={styles.mainTitle}>
							Membership
						</h2>
						<div className={styles.mainText}>
							At Fairway Heaven, we offer a variety of membership options
							designed to suit your individual needs and preferences. Whether
							you're a passionate golfer looking to hone your skills or a discerning
							enthusiast seeking a luxurious retreat, we have the perfect
							membership tier for you. As a member, you'll enjoy priority access
							to our championship-level courses, renowned for their scenic
							beauty and challenging layouts. Tee off with confidence knowing
							that you have reserved tee times, ensuring that you can play at
							your convenience without the hassle of waiting.
						</div>
					</div>
					<div className={styles.formBlock}>
						
					</div>
				</div>
				<div className={styles.rightPart}>
					<div className={styles.topImagesWrap}>
						<img className={styles.topImagesFirst} src={img1} alt="membership-1" />
						<img className={styles.topImagesSecond} src={img2} alt="membership-2" />
					</div>
					<div className={styles.bottomImagesWrap}>
						<img src={img3} alt="membership-3" />
					</div>
				</div>
			</div>
		</div>
	)
}
