import './PageSelection.scss';


interface PageSelectionProps {
    isOpen: boolean,
    openType: string,
    onClickPlatform: (name: string) => void
}

function IsShowPageSection(myProp: boolean) {
    if (myProp) {
        return '282px';
    } else {
        return '0px';
    }
}

function PageSelection(props: PageSelectionProps) {

    return (
        <div data-testid="PageSelection" className='page-selection-section' style={{ height: IsShowPageSection(props.isOpen) }}>
            {props.openType === 'facebook' ?
                // Facebook Page Selection 
                <>
                    <div className='page-selection-header'>
                        <img alt='facebook_logo_picon' src='/images/chatscreen/facebook_logo_pageicon.png' />
                        <span className='chat-header-text'>เลือกเพจของคุณ</span>
                    </div>
                    <div className='page-selection-content'>
                        <ul>
                            <li onClick={() => props.onClickPlatform('')}>ร้านทอง Gold Gateway <span className="red-noti-count">99+</span></li>
                            <li>ร้านทอง Gold Gateway สาขา 2 <span className="red-noti-count">99+</span></li>
                            <li>ร้านทอง Gold Gateway สาขา 3<span className="red-noti-count">99+</span></li>
                            <li>ร้านทอง Gold Gateway สาขา 4 <span className="red-noti-count">99+</span></li>
                        </ul>
                    </div>
                </>
                :
                <></>
            }

            {props.openType === 'line' ?
                // Line Page Selection 
                <>
                    <div className='page-selection-header'>
                        <img alt='line_logo_picon' src='/images/chatscreen/line_logo_pageicon.png' />
                        <span className='chat-header-text'>เลือกไลน์แอดของคุณ</span>
                    </div>
                    <div className='page-selection-content'>
                        <ul>
                            <li onClick={() => props.onClickPlatform('linetoken')}>ร้านทอง Gold Gateway <span className="red-noti-count">99+</span></li>
                            <li>ร้านทอง Gold Gateway สาขา 2 <span className="red-noti-count">99+</span></li>
                            <li>ร้านทอง Gold Gateway สาขา 3<span className="red-noti-count">99+</span></li>
                            <li>ร้านทอง Gold Gateway สาขา 4 <span className="red-noti-count">99+</span></li>
                        </ul>
                    </div>
                </>
                :
                <></>

            }

        </div>
    );
};

export default PageSelection;