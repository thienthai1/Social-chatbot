import { useState } from 'react'

import { ISocialPage, ISocialPageList } from 'libs/types'

import './SocialPageSelect.scss'

interface ISocialPageSelectProps {
	social: string
	pageList: ISocialPageList
	onChange: (ISocialPage) => void
	onClick: () => void
	selectPage: string
}

function SocialPageSelect(props: ISocialPageSelectProps) {
	const [page, setPage] = useState<ISocialPage | null>(null)

	const { social, pageList, onChange, onClick, selectPage } = props

	const handleSelectChange = (event) => {
		const id = event.target.value
		const selectPage =
			pageList.find((page) => {
				return page.pageId.toString() === id
			}) || null
		onChange(selectPage)
		setPage(selectPage)
	}

	return (
		<div
			data-testid={`SocialPageSelect-${social}`}
			className="w-100 d-flex social-page-select cursor-pointer"
			onClick={onClick}
		>
			<span>{selectPage ? selectPage : 'Please Select Page'}</span>
			<img src="/images/arrowDownIcon.svg" alt="" />
			{/* <select
				className="w-100"
				onChange={handleSelectChange}
				value={page?.pageId || ''}
			>
				<option value="" data-testid="option-empty">
					Please Select Page
				</option>
				{pageList.map((page) => {
					const { pageId, name } = page
					return (
						<option
							key={pageId}
							value={pageId}
							data-testid={`SocialPageSelect-option`}
						>
							{name}
						</option>
					)
				})}
			</select> */}
		</div>
	)
}

export default SocialPageSelect
