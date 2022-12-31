import React from 'react'

import { ISocialTypeList } from 'libs/types'

import { MainTabItem } from 'components/MainTabItem'

import './MainTab.scss'

interface IMainTabProps {
	list: ISocialTypeList
	active: string
	onChange: (tabName: string) => void
}

function MainTab(props: IMainTabProps) {
	const { list, active, onChange } = props

	const handleTabItemClick = (tabName: string) => {
		onChange(tabName)
	}

	return (
		<>
			<div data-testid="MainTab" className={'d-flex maintab-style'}>
				{list.map((item) => {
					return (
						<MainTabItem
							key={item.id}
							{...item}
							onClick={handleTabItemClick}
							isActive={item.name === active}
						></MainTabItem>
					)
				})}
			</div>
		</>
	)
}

export default MainTab
