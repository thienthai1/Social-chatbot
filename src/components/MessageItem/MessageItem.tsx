import { useState } from 'react'
import { useEffectOnce } from 'usehooks-ts'
import dayjs from 'dayjs'

import { IMessage, IGetLineContentResponse } from 'libs/types'

import { getLineContentApi } from 'api/attachment/getLineContentApi'

import './MessageItem.scss'

interface IMessageItemProps {
	message: IMessage
	social: string
	pageId: string
}

function MessageItem(props: IMessageItemProps) {
	const [content, setContent] = useState<IGetLineContentResponse | null>(null)

	const { message, social, pageId } = props
	const { message: text, attachments, direction, createdAt } = message

	const loadLineContent = async (id) => {
		try {
			const response = await getLineContentApi({ social, pageId, id })
			setContent(response.data)
		} catch (error) {
		} finally {
		}
	}

	const handleLinkClick = (social, attachment) => () => {
		console.log(content)
		switch (social) {
			case 'line':
				const image = new Image()
				image.src = `data:application/pdf;base64,${content?.data}`
				const w = window.open()
				if (w) {
					w.document.body.innerHTML = image.outerHTML
					w.document.close()
				}
				break
			case 'facebook':
				window.open(attachment[0].payload.url)
				break
		}
	}

	const handleOpenFileClick = (social, attachment) => () => {
		console.log(content)
		switch (social) {
			case 'line':
				if (content?.data !== undefined) {
					const pdfResult = content?.data
					const pdfWindow = window.open('')
					pdfWindow?.document.write(
						`<iframe width='100%' height='100%' src='data:application/pdf;base64,${encodeURI(
							pdfResult
						)} 
							'></iframe>`
					)
				}
				break
			case 'facebook':
				window.open(attachment[0].payload.url)
				break
		}
	}

	const getAttachement = () => {
		switch (social) {
			case 'line':
				return (
					<>
						{attachments.type === 'image' ? (
							<img
								src={`data:image/png;base64,${content?.data}`}
								alt=""
								className={'cursor-pointer'}
								onClick={handleLinkClick(social, attachments)}
							/>
						) : (
							<div
								className={`speech-bubble py-1 px-2 ${direction} d-flex flex-row align-items-center cursor-pointer`}
								onClick={handleOpenFileClick(social, attachments)}
							>
								<div className="file-attachments-box mr-2">
									<img
										className="file-attachments"
										src="/images/fileIcon.svg"
										alt=""
									></img>
								</div>
								<div className="d-flex flex-column">
									<span>{attachments.fileName}</span>
									<span className="fileSize">
										{formatBytes(attachments.fileSize)}
									</span>
								</div>
							</div>
						)}
					</>
				)
			case 'facebook':
			default:
				return attachments.map((attachment) => {
					return (
						<>
							{attachment.type === 'image' ? (
								<img
									src={attachment.payload.url}
									alt=""
									className={'cursor-pointer'}
									onClick={handleLinkClick(social, attachments)}
								/>
							) : (
								<div
									className={`speech-bubble py-1 px-2 ${direction} d-flex flex-row align-items-center cursor-pointer`}
									onClick={handleOpenFileClick(social, attachments)}
								>
									<div className="file-attachments-box mr-2">
										<img
											className="file-attachments"
											src="/images/fileIcon.svg"
											alt=""
										></img>
									</div>
									<div className="d-flex flex-column">
										<span>Attachment</span>
									</div>
								</div>
							)}
						</>
					)
				})
		}
	}

	const formatBytes = (bytes, decimals = 0) => {
		if (!+bytes) return '0 Bytes'

		const k = 1024
		const dm = decimals < 0 ? 0 : decimals
		const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

		const i = Math.floor(Math.log(bytes) / Math.log(k))

		return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
	}

	const getTimestamp = () => {
		const now = dayjs()
		const date = dayjs(createdAt)
		const diff = now.diff(date, 'day')
		if (diff <= 0) {
			return <>{date.format('HH:mm A')}</>
		} else {
			return <>{date.format('DD-MM-YYYY')}</>
		}
	}

	useEffectOnce(() => {
		if (attachments && social === 'line') {
			loadLineContent(attachments.id)
		}
	})

	return (
		<div
			data-testid="MessageItem"
			className={`message-item d-flex align-items-end ${
				direction === 's' ? 'flex-row-reverse' : ''
			} my-1`}
		>
			{!attachments && (
				<span className={`speech-bubble py-1 px-2 ${direction}`}>
					<div>{text}</div>
				</span>
			)}
			{attachments && getAttachement()}
			<div className="timestamp-text px-1">{getTimestamp()}</div>
		</div>
	)
}

export default MessageItem
