import { useEffect, useRef, useState } from 'react'

import { IChat, ISocialPage } from 'libs/types'

import { postMessageSendApi } from 'api/message/postMessageSendApi'

import './MessageFooter.scss'
import { useEffectOnce } from 'usehooks-ts'

interface IMessageFooterProps {
	chat: IChat
	social: string
	page: ISocialPage
	onSent: () => void
}

function MessageFooter(props: IMessageFooterProps) {
	const {
		chat: { userId },
		social,
		page: { pageId },
		onSent,
	} = props
	const [isLoading, setLoading] = useState<boolean>(false)
	const [text, setText] = useState<string>('')
	const textareaRef = useRef<HTMLTextAreaElement>(null)
	const inputFileRef = useRef<HTMLInputElement>(null)

	const handleTextChange = (event) => {
		setText(event.target.value)
	}

	const handleTextKeyDown = (event) => {
		if (event.which === 13 && !event.shiftKey) {
			event.preventDefault()
			handleSendClick()
		}
	}

	const handleExternalSendMessage = (text: string) => {
		setText(text)
		handleSendClick()
		console.log('a')
	}

	const handleSendClick = async () => {
		await sendMessage()
	}

	// const handleAttachedClick = () => {
	// 	inputFileRef.current?.click()
	// }

	// const handleImageChange = (value) => {
	// 	const file = value[0]
	// 	const formData = new FormData()
	// 	formData.append(file.name, file)
	// 	console.log(file)
	// }

	const sendMessage = async () => {
		try {
			setLoading(true)
			await postMessageSendApi(social)({
				social,
				userId,
				pageId: pageId.toString(),
				text,
			})
			setText('')
			onSent()
		} catch (error) {
		} finally {
			setLoading(false)
		}
	}

	useEffectOnce(() => {
		window.awSocialChat = {
			sendMessage: handleExternalSendMessage,
		}

		return () => {
			window.awSocialChat = undefined
		}
	})

	useEffect(() => {
		if (textareaRef && textareaRef.current) {
			textareaRef.current.style.height = '32px'
			const scrollHeight = textareaRef.current.scrollHeight
			textareaRef.current.style.height = scrollHeight + 'px'
		}
	}, [text])

	return (
		<div data-testid="MessageFooter" className="message-footer d-flex">
			<div className="d-flex w-100 mx-2 align-items-center">
				<div className="d-flex flex-grow my-2 align-items-center">
					{/* <div>
						<input
							className="d-none"
							ref={inputFileRef}
							type="file"
							onChange={(e) => {
								handleImageChange(e.target.files)
							}}
						/>
						<button className="button-attached" onClick={handleAttachedClick}>
							<img
								className="img-attached"
								src="/images/attachedBTN.svg"
								alt=""
								width="16"
								height="16"
							/>
						</button>
					</div> */}
					<textarea
						className="mx-2"
						placeholder="Type a message"
						onChange={handleTextChange}
						onKeyDown={handleTextKeyDown}
						value={text}
						disabled={isLoading}
						rows={1}
						ref={textareaRef}
					></textarea>
					<div>
						<button
							className="button-send"
							onClick={handleSendClick}
							disabled={isLoading || text === ''}
						>
							<img
								className="img-send"
								src="/images/sendBTN.svg"
								alt=""
								width="16"
								height="16"
							/>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MessageFooter
