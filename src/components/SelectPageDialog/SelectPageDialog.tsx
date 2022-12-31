import './SelectPageDialog.scss'

import { ISocialPageList } from 'libs/types'

interface ISelectPageDialogProps {
	social: string
	pageList: ISocialPageList
	onChange: (ISocialPage) => void
	onClose: () => void
	pageSelect: (event) => void
}

function SelectPageDialog(props: ISelectPageDialogProps) {
	const { pageList, onChange, onClose, pageSelect } = props

	const handleSelectChange = (event) => {
		const id = event.target.value
		const selectPage =
			pageList.find((page) => {
				return page.pageId.toString() === id
			}) || null
		onChange(selectPage)
		pageSelect(selectPage)
		onClose()
	}

	return (
		<div className="select-dialog">
			<div className="d-flex w-100 content-dialog flex-column">
				<div className="d-flex dialog-header align-items-center">
					<span className="dialog-title">Select Page</span>
					<span className="close-dialog cursor-pointer" onClick={onClose}>
						X
					</span>
				</div>
				<div>
					{pageList.map((page) => {
						const { pageId, name } = page
						return (
							<option
								key={pageId}
								value={pageId}
								data-testid={`SocialPageSelect-option`}
								onClick={handleSelectChange}
							>
								{name}
							</option>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default SelectPageDialog
