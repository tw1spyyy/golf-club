import React from 'react'
import { PageLayout } from "../layouts/PageLayout/PageLayout"
import { LessonsBlock } from "../components/LessonsBlock/LessonsBlock"

export const Lessons = () => {
	return (
		<PageLayout title={"Golf Lessons"}>
			<div>
				<LessonsBlock />
			</div>
		</PageLayout>
	)
}
