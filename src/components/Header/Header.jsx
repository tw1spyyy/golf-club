import React from 'react'
import styles from './Header.module.scss'
import { useNavigate } from 'react-router-dom';

export const Header = () => {

	const menuList = [
    {
      id: '0',
      name: 'membership',
      targetId: 'membershipSection', // Додайте ідентифікатор цільового блоку для кожного пункту меню
    },
    {
      id: '1',
      name: 'services',
      targetId: 'servicesSection',
    },
    {
      id: '2',
      name: 'news',
      targetId: 'newsSection',
    },
    {
      id: '3',
      name: 'shop',
      targetId: '/shop',
      navigate: true
    },
    {
      id: '4',
      name: 'contacts',
      targetId: 'contactsSection',
    },
  ];

	const handleClickScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth', // Додайте плавний ефект прокрутки
      });
    }
  };

  const navigate = useNavigate();

	const handleClick = () => navigate('/');


	return (
		<header className={styles.header}>
			<div onClick={handleClick} className={styles.logoWrapper}>
					Fairway Heaven
			</div>
			<nav className={styles.headerMenu}>
				<ul>
					{menuList.map((el) => {
						return <li onClick={() => el.navigate ? navigate(el.targetId) : handleClickScroll(el.targetId)} key={el.id}>
							{el.name}
						</li>
					})}
				</ul>
			</nav>
		</header>
	)
}
