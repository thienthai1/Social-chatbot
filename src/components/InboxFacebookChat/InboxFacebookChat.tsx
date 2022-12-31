import './InboxFacebookChat.scss';
import { useRef } from 'react'

interface InboxFacebookChatProps {
    onClickChatMessagePage: () => void,
    platformtoken: string
}

function InboxFacebookChat(props: InboxFacebookChatProps) {

    const liRef = useRef<HTMLLIElement>(null);
    const liRef2 = useRef<HTMLLIElement>(null);

    const handleNav = (el: React.RefObject<HTMLLIElement>, token: string) => {
        const myList = document.querySelectorAll("li.nav-bar")
        Array.from(myList).forEach(function (sibling) {
            sibling.classList.remove("active");
            sibling.setAttribute("style", "border-color:unset")
        });
        if (token != "linetoken") {
            el.current?.classList.add('active')
            el.current?.setAttribute("style", "border-color:#1877f2")
        } else {
            el.current?.classList.add('active')
            el.current?.setAttribute("style", "border-color:#06C755")
        }
    }

    const getBackground = (color: string) => {
        if (color == 'linetoken') {
            return '#06C755'
        } else {
            return '#1877f2'
        }
    }

    return (
        <div data-testid="InboxFacebookChat">
            <div className="search-box">
                <img src="images/chatscreen/magnifierIcon.png" alt="magnifier" ></img>
                <input placeholder='Search' />
                <img className='clear-inbox' src="images/chatscreen/clear_inbox_search.png" alt="clear_inbox" width="15px" height="15px"></img>
            </div>
            <div className={`select-navigation ${props.platformtoken}`}>
                <ul>
                    <li
                        data-testid="testclicknav"
                        ref={liRef}
                        className="nav-bar active"
                        onClick={() => handleNav(liRef, props.platformtoken)}
                        style={{ borderColor: getBackground(props.platformtoken) }}
                    >
                        <span className=" select-navigation-text">เพื่อน</span>
                        <span data-testid="MyNoti" style={{ backgroundColor: getBackground(props.platformtoken) }} className="count-noti">1</span>
                    </li>
                    <li
                        ref={liRef2}
                        className="nav-bar"
                        onClick={() => handleNav(liRef2, props.platformtoken)}
                        style={{ borderColor: getBackground(props.platformtoken) }}
                    >
                        <span className=" select-navigation-text">ข้อความ</span>
                        <span style={{ backgroundColor: getBackground(props.platformtoken) }} className="count-noti">1</span>
                    </li>
                </ul>
            </div>

            <div className={`chat-list-zone ${props.platformtoken}`}>
                <ul>
                    <li>
                        <div onClick={props.onClickChatMessagePage} className="chatlistzone-groupchat active">
                            <img alt='chatpeople_1' src="images/chatscreen/chatpeople/chatpeople-1.png" width="58px" />
                            <div className="group-text-chatlist">
                                <div className="chat-list-zone-friendname">Kate Rose</div><div className="chat-list-zone-friendmesaage">ข้อความลูกค้า...</div>
                            </div>

                            <div className="chat-list-timeandnoi-group">
                                <div className="chat-list-delivery-time">13.28</div>
                                <span className="count-noti">12</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="chatlistzone-groupchat">
                            <img alt='chat_people2' src="images/chatscreen/chatpeople/chatpeople-2.png" width="58px" />
                            <div className="group-text-chatlist">
                                <div className="chat-list-zone-friendname">John Doe</div><div className="chat-list-zone-friendmesaage">ข้อความลูกค้า...</div>
                            </div>

                            <div className="chat-list-timeandnoi-group">
                                <div className="chat-list-delivery-time">13.28</div>
                                <span className="count-noti">12</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="chatlistzone-groupchat">
                            <img alt='chatpeople_3' src="images/chatscreen/chatpeople/chatpeople-3.png" width="58px" />
                            <div className="group-text-chatlist">
                                <div className="chat-list-zone-friendname">Robert Parker</div><div className="chat-list-zone-friendmesaage">ข้อความลูกค้า...</div>
                            </div>

                            <div className="chat-list-timeandnoi-group">
                                <div className="chat-list-delivery-time">13.28</div>
                                <span className="count-noti">12</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="chatlistzone-groupchat">
                            <img alt='chatpeople_4' src="images/chatscreen/chatpeople/chatpeople-4.png" width="58px" />
                            <div className="group-text-chatlist">
                                <div className="chat-list-zone-friendname">Vivienne Westwood</div><div className="chat-list-zone-friendmesaage">ข้อความลูกค้า...</div>
                            </div>

                            <div className="chat-list-timeandnoi-group">
                                <div className="chat-list-delivery-time">13.28</div>
                                <span className="count-noti">12</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )

}

export default InboxFacebookChat;