import React from 'react'

import { ISocialType } from 'libs/types'

import './MainTabItem.scss'

interface IMainTabItemProps extends ISocialType {
	onClick: (tabName: string) => void
	isActive: boolean
}

function MainTabItem(props: IMainTabItemProps) {
	const { id, name, imgSrc, onClick, isActive } = props

	const handleClick = (tabName: string) => () => {
		onClick(tabName)
	}


	return (
		<div
			data-testid={`MainTabItem-${name}`}
			key={id}
			onClick={handleClick(name)}
			className={`MainTabItem d-flex flex-grow justify-content-center align-items-center cursor-pointer 
			${isActive ? 'active' : ''} 
			${name === 'facebook' ? 'facebook' : 'line'} py-2 px-1`}
		>
			<img src={imgSrc} alt={name} width="18" height="18" className="mr-2" />
			<span>{name}gg</span>
		</div>
	)
}

export default MainTabItem
