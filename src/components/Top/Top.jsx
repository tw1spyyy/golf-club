import React from 'react'
import styles from './Top.module.scss'
import { Header } from "../Header/Header"

export const Top = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<Header />
				<div className={styles.contentBlock}>
					<h1 className={styles.mainTitle}>
						Reach the Sky.
					</h1>
					<div className={styles.aboutBlock}>
						<div className={styles.aboutTitle}>
							About Us
						</div>
						<div className={styles.aboutText}>
							Fairway Heaven Golf Club epitomizes excellence in
							golfing. Nestled amidst picturesque landscapes,
							the club offers meticulously designed courses for
							golfers of all levels. Its luxurious clubhouse
							provides top-notch amenities, while membership
							perks include priority tee times and exclusive
							events. Committed to sustainability, the club hosts
							various tournaments
							and events, solidifying its
							status as a premier golfing destination. Fairway
							Heaven Golf Club is more than just a golf course;
							it's a haven for enthusiasts seeking unforgettable
							experiences on and off the green.
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
