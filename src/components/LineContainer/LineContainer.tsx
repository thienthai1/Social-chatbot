import React, { useState } from 'react'
import { useEffectOnce } from 'usehooks-ts'

import { ISocialPageList } from 'libs/types'

import { getLineSocialPageListApi } from 'api/social/getSocialPageListApi'

import { BaseContainer } from 'components/BaseContainer'

import './LineContainer.scss'

interface ILineContainerProps {
	isShow: boolean
}

function LineContainer(props: ILineContainerProps) {
	const [socialPageList, setSocialPageList] = useState<ISocialPageList>([])

	const { isShow } = props

	const loadPageList = async () => {
		try {
			const response = await getLineSocialPageListApi()
			setSocialPageList(response.data?.data || [])
		} catch (error) {
		} finally {
		}
	}

	useEffectOnce(() => {
		loadPageList()
	})

	return (
		<>
			<BaseContainer
				social="line"
				pageList={socialPageList}
				isShow={isShow}
			></BaseContainer>
		</>
	)
}

export default LineContainer
