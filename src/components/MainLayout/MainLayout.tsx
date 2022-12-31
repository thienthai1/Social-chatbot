import React, { useEffect, useState } from 'react'
import { useEffectOnce } from 'usehooks-ts'

import { ISocialTypeList } from 'libs/types'

import { getSocialListApi } from 'api/social/getSocialListApi'

import { MainTab } from 'components/MainTab'
import { FacebookContainer } from 'components/FacebookContainer'
import { LineContainer } from 'components/LineContainer'

import { ChatScreen } from 'components/ChatScreen'

import './MainLayout.scss'

function MainLayout() {

	const [isViewChatScreen, setIsViewChatScreen] = useState<boolean>(false);

	const [socialTypeList, setSocialTypeList] = useState<ISocialTypeList>([])
	const [activeSocial, setActiveSocial] = useState<string>('')

	const handleMainTabChange = (tabName: string) => {
		if (['facebook', 'line'].includes(tabName)) {
			setActiveSocial(tabName)
		}
	}

	const loadSocialList = async () => {
		try {
			const response = await getSocialListApi()
			setSocialTypeList(response.data?.data || [])
		} catch (error) {
		} finally {
		}
	}

	useEffectOnce(() => {
		loadSocialList()
	})

	useEffect(() => {
		if (socialTypeList && socialTypeList.length > 0) {
			setActiveSocial(socialTypeList[0].name)
		}
	}, [socialTypeList])

	if (isViewChatScreen) {
		return <ChatScreen data-testid="ChatScreen" />
	} else {
		return (
			<div
				data-testid="MainLayout"
				className="w-100 d-flex flex-column flex-grow"
			>
				<button id="buttontest" style={{ display: "block" }} onClick={() => setIsViewChatScreen(true)}>View New Chat Screen</button>
				<div className={'d-flex flex-column m-2'}>
					<MainTab
						list={socialTypeList}
						active={activeSocial}
						onChange={handleMainTabChange}
					></MainTab>
				</div>
				<div className={'w-100 d-flex flex-column flex-grow'}>
					{activeSocial === 'line' && (
						<LineContainer isShow={true}></LineContainer>
					)}
					{activeSocial === 'facebook' && (
						<FacebookContainer isShow={true}></FacebookContainer>
					)}
				</div>
			</div>
		)
	}

}

export default MainLayout
