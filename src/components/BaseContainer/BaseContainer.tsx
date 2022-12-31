import React, { useState } from 'react'
import { useEffectOnce } from 'usehooks-ts'

import { IChat, ISocialPage, ISocialPageList } from 'libs/types'

import { SocialPageSelect } from 'components/SocialPageSelect'
import { ChatList } from 'components/ChatList'
import { MessageContainer } from 'components/MessageContainer'
import { SelectPageDialog } from 'components/SelectPageDialog'

import './BaseContainer.scss'

interface IBaseContainerProps {
	social: string
	pageList: ISocialPageList
	isShow: boolean
}

enum SCREEN {
	CHAT_LIST = 1,
	MESSAGE,
}

function BaseContainer(props: IBaseContainerProps) {
	const [page, setPage] = useState<ISocialPage | null>(null)
	const [selectedChat, setSelectedChat] = useState<IChat | null>(null)
	const [activeScreen, setActiveScreen] = useState<number>(SCREEN.CHAT_LIST)
	const [isDialogShow, setIsDialogShow] = useState<boolean>(false)
	const [selectPage, setSelectPage] = useState<string>('')
	const { social, pageList, isShow } = props

	const handleSocialPageChange = (selectedPage: ISocialPage | null) => {
		setPage(selectedPage)
		setActiveScreen(SCREEN.CHAT_LIST)
	}

	const handleChatListClick = (selectedChat: IChat) => {
		setSelectedChat(selectedChat)
		setActiveScreen(SCREEN.MESSAGE)
	}

	const handleBackButtonClick = () => {
		setActiveScreen(SCREEN.CHAT_LIST)
		setSelectedChat(null)
	}

	const handleShowDialog = () => {
		setIsDialogShow(true)
	}

	const handleCloseDialog = () => {
		setIsDialogShow(false)
	}

	const handleValueInPageSelectButton = (value) => {
		setSelectPage(value.name)
	}

	useEffectOnce(() => {
		// console.log('base', social)
	})

	return (
		<div
			data-testid="BaseContainer"
			className={`d-flex flex-column flex-grow base-container ${
				isShow ? '' : 'd-none'
			}`}
		>
			<div className="d-flex ml-2 mr-2">
				<SocialPageSelect
					social={social}
					pageList={pageList}
					onChange={handleSocialPageChange}
					onClick={handleShowDialog}
					selectPage={selectPage}
				></SocialPageSelect>
			</div>
			<div
				className={`d-flex mt-4 flex-grow ${
					activeScreen === SCREEN.CHAT_LIST ? '' : 'd-none'
				}`}
			>
				{page === null && (
					<div className="d-flex flex-grow flex-column align-items-center justify-content-center">
						<img src="/images/plsSelectPageIcon.svg" alt="" />
						<span className="mt-5 base-container-font">
							Please select page from
						</span>
						<span className="base-container-font">dropdown first.</span>
					</div>
				)}
				{page && (
					<ChatList
						page={page}
						social={social}
						onClick={handleChatListClick}
					></ChatList>
				)}
			</div>
			<div
				className={`d-flex flex-grow ${
					activeScreen === SCREEN.MESSAGE ? '' : 'd-none'
				}`}
			>
				{selectedChat && page && (
					<MessageContainer
						page={page}
						chat={selectedChat}
						onBack={handleBackButtonClick}
						social={social}
					></MessageContainer>
				)}
			</div>
			{isDialogShow && (
				<SelectPageDialog
					social={social}
					pageList={pageList}
					onChange={handleSocialPageChange}
					onClose={handleCloseDialog}
					pageSelect={handleValueInPageSelectButton}
				></SelectPageDialog>
			)}
		</div>
	)
}

export default BaseContainer
