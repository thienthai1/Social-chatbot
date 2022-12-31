import './AddNewContact.scss'

function AddNewContact() {

	return (
		<>
			<div className='d-flex header'>
				<img width='23px' height='23px' src="/images/addnew-back.png" alt="addnew_back" />
				<span>เพิ่มลูกค้าไหม่</span>
				<div></div>
			</div>
			<div className='d-flex flex-column form'>
				<form action="/action_page.php">
					<div>
						<label>ชื่อ</label><span>*</span><br />
						<input type="text" />
					</div>
					<div>
						<label>นามสกุล</label><span>*</span><br />
						<input type="text" />
					</div>
					<div>
						<label>แหล่งที่มา</label><span>*</span><br />
						<select id="cars" name="cars">
							<option value="volvo">ทดสอบ1</option>
							<option value="saab">ทดสอบ2</option>
						</select>
					</div>
					<div>
						<label>เบอร์โทร</label><span>*</span><br />
						<input type="text" />
					</div>
					<div>
						<label>เวลาสะดวกที่ติดต่อ</label><span>*</span><br />
						<input type="text" />
					</div>
					<div>
						<label>Facebook</label><span>*</span><br />
						<input type="text" />
					</div>
					<div>
						<label>Line ID</label><span>*</span><br />
						<input type="text" />
					</div>
					<div>
						<label>Email</label><span>*</span><br />
						<input type="text" />
					</div>
					<input type="submit" value="บันทึก" />
				</form>
			</div>
		</>
	)
}

export default AddNewContact
