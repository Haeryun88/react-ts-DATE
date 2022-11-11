import * as React from 'react';
import './style.css';
import Calender from './Calender';
import './birthday_date_picker.css';
export default function App() {
  return (
    <div className="birthday_date_picker">
      <div className="selected_date">
        <p>YYYY.MM.DD</p>
      </div>
      <Calender />
      <div>
        <p>펫 프로필 추가하기</p>
        <span className="add_profile_icon"></span>
        <div className="buttons">
          <span className="cancle">취소</span>
          <span className="confirm">확인</span>
        </div>
      </div>
    </div>
  );
}
