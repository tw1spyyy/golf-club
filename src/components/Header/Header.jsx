import React from 'react'
import styles from './Header.module.scss'

export const Header = () => {

	const menuList = [
		{
			id: '0',
			name: 'membership',
		},
		{
			id: '1',
			name: 'services',
		},
		{
			id: '2',
			name: 'news',
		},
		{
			id: '3',
			name: 'shop',
		},
		{
			id: '4',
			name: 'contacts',
		},
	]

	return (
		<header className={styles.header}>
			<div className={styles.logoWrapper}>
					Fairway Heaven
			</div>
			<nav className={styles.headerMenu}>
				<ul>
					{menuList.map((el) => {
						return <li key={el.id}>
							{el.name}
						</li>
					})}
				</ul>
			</nav>
		</header>
	)
}
