import React from 'react'
import css from './PageLayout.module.scss'
import { Header } from "../../components/Header/Header"
import { Footer } from "../../components/Footer/Footer"

export const PageLayout = ({children, title}) => {
	return (
		<div className={css.wrapper}>
			<div className={css.headerWrapper}>
				<Header />
			</div>
			<div className={css.childrenWrapper}>
				<div className={css.title}>
					{title}
				</div>
				{children}
			</div>
			<div className={css.footerWrapper}>
				<Footer />
			</div>
		</div>
	)
}
