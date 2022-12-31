import React, { createRef, RefObject, useEffect, useState } from 'react';

interface SocialMediaSelectProps {
	isOpen: boolean
	isActiveViewMore: string
}

function SocialMediaSelect(props: SocialMediaSelectProps) {

	// tickstate
	const [isLineTickStatus, setLineTickStatus] = useState<boolean>(false);
	const [isFbTickStatus, setFbTickStatus] = useState<boolean>(false);
	const [isInstagramTickStatus, setInstagramTickStatus] = useState<boolean>(false);
	const [isTwitterTickStatus, setTwitterTickStatus] = useState<boolean>(false);
	const [isWechatTickStatus, setWechatTickStatus] = useState<boolean>(false);
	const [isShowmoreDisplay, setShowmoreDisplay] = useState<string>('block');


	const [showmoreValue, setShowmoreValue] = useState<string>('222px');

	const socialCount = createRef<HTMLUListElement>();

	function IsShowPageSection(myProp: boolean, socialTag: RefObject<HTMLUListElement>) {
		if (myProp) {
			return 'block';
		} else {
			return 'none';
		}
	}

	const handleTick = (stat: boolean, selection: string) => {

		if (selection === 'line') {
			if (stat) {
				setLineTickStatus(false);
			} else {
				setLineTickStatus(true);
			}
		}

		if (selection === 'facebook') {
			if (stat) {
				setFbTickStatus(false);
			} else {
				setFbTickStatus(true);
			}
		}

		if (selection === 'instagram') {
			if (stat) {
				setInstagramTickStatus(false);
			} else {
				setInstagramTickStatus(true);
			}
		}

		if (selection === 'twitter') {
			if (stat) {
				setTwitterTickStatus(false);
			} else {
				setTwitterTickStatus(true);
			}
		}

		if (selection === 'wechat') {
			if (stat) {
				setWechatTickStatus(false);
			} else {
				setWechatTickStatus(true);
			}
		}

	}

	const showmoreHandle = () => {
		setShowmoreValue('500px')
		setShowmoreDisplay('none')
	}

	useEffect(() => {
		if (props.isOpen === false) {
			setShowmoreDisplay('block');
			setShowmoreValue('222px');
		}
	}, [props.isOpen]);

	return (
		<div style={{ display: IsShowPageSection(props.isOpen, socialCount), maxHeight: showmoreValue }} className="social-media-select">
			<div className="social-media-select-header">
				<div className="text-social-header-text">
					เลือกเชื่อมต่อกับ
				</div>
			</div>
			<div className="social-media-select-content">
				<ul ref={socialCount}>
					<li>
						<img alt='line_logo_picon' src="/images/chatscreen/line_logo_pageicon.png" />
						<span className='social-media-select-content-text'>Line</span>
						{isLineTickStatus ?
							<img alt='tickzone_tick' src="/images/chatscreen/tickzone-tick.png" className="tickzone" onClick={() => handleTick(true, 'line')}></img>
							:
							<img alt='tickzone_untick' src="/images/chatscreen/tickzone-untick.png" className="tickzone" onClick={() => handleTick(false, 'line')}></img>
						}
					</li>
					<li>
						<img alt='fb_logo_pageicon' src="/images/chatscreen/facebook_logo_pageicon.png" />
						<span className='social-media-select-content-text'>FACEBOOK</span>
						{isFbTickStatus ?
							<img alt='tickzone_tick' src="/images/chatscreen/tickzone-tick.png" className="tickzone" onClick={() => handleTick(true, 'facebook')}></img>
							:
							<img alt='tickzone_untick' src="/images/chatscreen/tickzone-untick.png" className="tickzone" onClick={() => handleTick(false, 'facebook')}></img>
						}
					</li>
					<li>
						<img alt='instragram_logo_setting' src="/images/chatscreen/instagram_logo_setting.png" />
						<span className='social-media-select-content-text'>INSTAGRAM</span>
						{isInstagramTickStatus ?
							<img alt='tickzone_tick' src="/images/chatscreen/tickzone-tick.png" className="tickzone" onClick={() => handleTick(true, 'instagram')}></img>
							:
							<img alt='tickzone_untick' src="/images/chatscreen/tickzone-untick.png" className="tickzone" onClick={() => handleTick(false, 'instagram')}></img>
						}
					</li>
					<li style={{ display: isShowmoreDisplay }}>
						<img alt='fishdot_icn2' src='/images/chatscreen/fishdot_icon2.png'></img><span className="view-more-text" onClick={showmoreHandle} style={{ cursor: 'pointer' }}>ดูเพิ่มเติม</span>
					</li>
					<li>
						<img alt='twitter_logosetting' src="/images/chatscreen/twitterlogo_setting.png" />
						<span className='social-media-select-content-text'>Twitter</span>
						{isTwitterTickStatus ?
							<img alt='tickzone_tick' src="/images/chatscreen/tickzone-tick.png" className="tickzone" onClick={() => handleTick(true, 'twitter')}></img>
							:
							<img alt='tickzoneuntick' src="/images/chatscreen/tickzone-untick.png" className="tickzone" onClick={() => handleTick(false, 'twitter')}></img>
						}
					</li>
					<li>
						<img alt='wechatlogo_setting' src="/images/chatscreen/wechatlogo_setting.png" />
						<span className='social-media-select-content-text'>Wechat</span>
						{isWechatTickStatus ?
							<img alt='tickzone-tick' src="/images/chatscreen/tickzone-tick.png" className="tickzone" onClick={() => handleTick(true, 'wechat')}></img>
							:
							<img alt='tickzone-untick' src="/images/chatscreen/tickzone-untick.png" className="tickzone" onClick={() => handleTick(false, 'wechat')}></img>
						}
					</li>
				</ul>
			</div>
		</div >
	)

}

export default SocialMediaSelect;