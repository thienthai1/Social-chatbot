import React, { useState } from 'react'
import { useEffectOnce } from 'usehooks-ts'

import { ISocialPageList } from 'libs/types'

import { getFacebookSocialPageListApi } from 'api/social/getSocialPageListApi'

import { BaseContainer } from 'components/BaseContainer'

import './FacebookContainer.scss'

interface IFacebookContainerProps {
	isShow: boolean
}

function FacebookContainer(props: IFacebookContainerProps) {
	const [socialPageList, setSocialPageList] = useState<ISocialPageList>([])

	const { isShow } = props

	const loadPageList = async () => {
		try {
			const response = await getFacebookSocialPageListApi()
			setSocialPageList(response.data?.data || [])
		} catch (error) {
		} finally {
		}
	}

	useEffectOnce(() => {
		loadPageList()
	})

	useEffectOnce(() => {
		// console.log('facebook')
	})

	return (
		<>
			<BaseContainer
				social="facebook"
				pageList={socialPageList}
				isShow={isShow}
			></BaseContainer>
		</>
	)
}

export default FacebookContainer
