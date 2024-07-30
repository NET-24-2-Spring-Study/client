import React, { useState } from 'react';
import './MiniCalendar.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from "moment";
import { useNavigate } from 'react-router-dom';

const MiniDot = () => <div className="mini-dot" />;

function MiniCalendar() {
  const [value, onChange] = useState(new Date());
  const navigate = useNavigate();
  const emotion_day = [
    '2024-07-20',
    '2024-07-21',
    // 여기에 추가
  ];
  const handleDateClick = (date) => {
    const formattedDate = moment(date).format('YYYY-MM-DD');
    navigate(`/date/${formattedDate}`);
  };
  
  return (
    <div className="mini-calendar-wrapper">
      <Calendar
        onChange={onChange}
        value={value}
        next2Label={null}
        prev2Label={null}
        formatDay={(locale, date) => moment(date).format('D')}
        showNeighboringMonth={false}
        calendarType="gregory"
        onClickDay={handleDateClick}

        tileContent={({ date, view }) => {
          let html = [];
          if (emotion_day.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
            html.push(<MiniDot key={moment(date).format("YYYY-MM-DD")} />);
          }
          return <>{html}</>;
        }}
      />

    </div>
  );
}
export default MiniCalendar;