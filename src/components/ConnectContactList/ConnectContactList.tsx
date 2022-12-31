import React, { useEffect, useRef, useState } from 'react'
import './ConnectContactList.scss'

interface ConnectContactListProps {
  isContactListZone: boolean
  isOpenSuccessContactList: boolean
  isAlreadyAdd: boolean
  onClickClose: () => void
  openSuccessContact: () => void
  onClickCloseAll: () => void
}

function ConnectContactList(props: ConnectContactListProps) {

  let { isContactListZone, openSuccessContact, onClickClose, isOpenSuccessContactList, onClickCloseAll, isAlreadyAdd } = props

  const [isOpenSearchZone, setOpenSearchZone] = useState<boolean>(false)

  const myfocus = useRef<HTMLInputElement>(null);

  const [contactlist, setContactList] = useState([
    { name: 'Kate Rose', tel: '064-123-4567', istick: false },
    { name: 'Kate Jones', tel: '064-123-4567', istick: false },
    { name: 'Kate Smith', tel: '064-123-4567', istick: false },
  ])

  const handleTickContactList = (con, index) => {
    let myctl = contactlist.slice()
    myctl[index].istick = !contactlist[index].istick
    setContactList(myctl)
  }

  const handleCloseSuccess = (func) => {
    func()
    myfocus.current?.focus()
    setOpenSearchZone(false)
  }

  const testfocus = () => {
    console.log("testfocus")
  }

  useEffect(() => {
    console.log("run command");
    console.log(myfocus);
    myfocus.current?.focus()
  }, [isOpenSuccessContactList])

  const handleClickSuccessFocus = () => {
    myfocus.current?.focus()
  }

  const handleContactChange = () => {
    setOpenSearchZone(!isOpenSearchZone);
  }

  const handleClickClose = (func) => {
    setOpenSearchZone(false)
    func()
  }

  return (
    <>
      {
        isAlreadyAdd ?
          <>
            <div id="myContactList" className={isContactListZone ? 'contactlist-panel is-already-connect show ' + (isOpenSearchZone ? 'opensearch' : '') : 'contactlist-panel is-already-connect'}>
              <div className="wrapper already-connect">
                <img className='crossicon_pic' src='/images/icons/cross_icon.png' alt='cross_icon' width='13px' height='13px' onClick={() => handleClickClose(onClickClose)} />
                <div className="header-title">
                  บัญชีนี้เชื่อมต่อรายชื่อแล้ว
                </div>
                <div className="d-flex subheader">
                  <div className='namesur'>ชื่อ-นามสกุล</div>
                  <div className='call'>เบอร์โทร</div>
                </div>
                <div className="d-flex info-content">
                  <div>Kate Rose</div>
                  <div>064-123-4567</div>
                </div>
                {isOpenSearchZone ?
                  <>
                    <div className="separation-line"></div>
                    <div className="d-flex space-between subtitle-section">
                      <div className="search-name">
                        ค้นหารายชื่อผู้ติดต่อ
                      </div>
                      <div className="addmore-customer">
                        เพิ่มลูกค้าไหม่
                      </div>
                    </div>
                    <div className="search-zone">
                      <img width="15px" height="15px" src="images/chatscreen/magnifierIcon.png" alt="magnifier" ></img>
                      <input placeholder='Search' />
                    </div>
                    <div className="contact-search-result">
                      <ul>
                        {contactlist.map((ctl, index) => {
                          return (
                            <li>
                              <div className="d-flex contactlist-name-display">
                                <div className="tickicon">
                                  {ctl.istick ?
                                    <img width="26px" height="26px" alt='tickzone_tick' src="/images/icons/tick_contactlist.png" className="tickzone mr-2" onClick={() => { handleTickContactList(ctl, index) }}></img>
                                    :
                                    <img width="26px" height="26px" alt='tickzone_untick' src="/images/icons/untick_contactlist.png" className="tickzone mr-2" onClick={() => { handleTickContactList(ctl, index) }}></img>
                                  }
                                </div>
                                <span className="contactname mr-4">{ctl.name}</span>
                                <span className="contactnumber">{ctl.tel}</span>
                              </div>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                    <button onClick={() => handleCloseSuccess(openSuccessContact)} className="contact-connection-button cursor-pointer"> เชื่อมต่อรายชื่อ</button>
                  </>
                  :
                  <>
                    <div className='connect-link'>
                      <span onClick={handleContactChange} >เปลี่ยนรายชื่อที่เชื่อมต่อ</span>
                    </div>
                  </>
                }
              </div>
            </div>
            <div onClick={handleClickSuccessFocus} className={isOpenSuccessContactList ? 'd-flex flex-column align-items-center justify-content-center success-popup show' : 'd-flex flex-column align-items-center justify-content-center success-popup'}>
              <div className='imagesucess-popup'>
                <img src="/images/icons/tick_successpopup.png" alt="ticksucess_popup" width="187px" />
              </div>
              <div>
                <div className='success-popup-title'>
                  บันทึกสำเร็จ
                </div>
                <div className='success-popup-description'>
                  ระบบได้บันทึกข้อมูลเรียบร้อยแล้ว
                </div>
                <input onBlur={onClickCloseAll} onFocus={testfocus} ref={myfocus} ></input>
              </div>
            </div>
          </>
          :
          <>
            <div id="myContactList" className={isContactListZone ? 'contactlist-panel show' : 'contactlist-panel'}>
              <div className="wrapper">
                <img className='crossicon_pic' src='/images/icons/cross_icon.png' alt='cross_icon' width='13px' height='13px' onClick={onClickClose} />
                <div className="header-title">
                  บัญชีนี้ยังไม่ได้เชื่อมต่อรายชื่อแล้ว
                </div>
                <div className="d-flex space-between subtitle-section">
                  <div className="search-name">
                    ค้นหารายชื่อผู้ติดต่อ
                  </div>
                  <div className="addmore-customer">
                    เพิ่มลูกค้าไหม่
                  </div>
                </div>
                <div className="search-zone">
                  <img width="15px" height="15px" src="images/chatscreen/magnifierIcon.png" alt="magnifier" ></img>
                  <input placeholder='Search' />
                </div>
                <div className="contact-search-result">
                  <ul>
                    {contactlist.map((ctl, index) => {
                      return (
                        <li>
                          <div className="d-flex contactlist-name-display">
                            <div className="tickicon">
                              {ctl.istick ?
                                <img width="26px" height="26px" alt='tickzone_tick' src="/images/icons/tick_contactlist.png" className="tickzone mr-2" onClick={() => { handleTickContactList(ctl, index) }}></img>
                                :
                                <img width="26px" height="26px" alt='tickzone_untick' src="/images/icons/untick_contactlist.png" className="tickzone mr-2" onClick={() => { handleTickContactList(ctl, index) }}></img>
                              }
                            </div>
                            <span className="contactname mr-4">{ctl.name}</span>
                            <span className="contactnumber">{ctl.tel}</span>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </div>
                <button onClick={() => handleCloseSuccess(openSuccessContact)} className="contact-connection-button cursor-pointer"> เชื่อมต่อรายชื่อ</button>
              </div>
            </div>
            <div onClick={handleClickSuccessFocus} className={isOpenSuccessContactList ? 'd-flex flex-column align-items-center justify-content-center success-popup show' : 'd-flex flex-column align-items-center justify-content-center success-popup'}>
              <div className='imagesucess-popup'>
                <img src="/images/icons/tick_successpopup.png" alt="ticksucess_popup" width="187px" />
              </div>
              <div>
                <div className='success-popup-title'>
                  บันทึกสำเร็จ
                </div>
                <div className='success-popup-description'>
                  ระบบได้บันทึกข้อมูลเรียบร้อยแล้ว
                </div>
                <input onBlur={onClickCloseAll} onFocus={testfocus} ref={myfocus} ></input>
              </div>
            </div>
          </>
      }
    </>
  )
}

export default ConnectContactList