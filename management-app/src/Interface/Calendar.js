import React, { useState } from 'react';
import { format, startOfWeek, addDays, startOfMonth, endOfMonth, endOfWeek, isSameMonth, isSameDay, addMonths, subMonths } from 'date-fns';
import "./Calendat.css";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const headerFormat = 'MMMM yyyy';
  const dateFormat = 'd';

  const createWeeksArray = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = '';

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div
            className={`col cell ${
              !isSameMonth(day, monthStart) ? 'disabled' : isSameDay(day, selectedDate) ? 'selected' : ''
            }`}
            key={day}
            style={{ height: '12vh' }} 
            onClick={() => setSelectedDate(cloneDay)}
          >
            <span className="number">{formattedDate}</span>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  return (
    <div className="calendar">
      <div className="header">
        <div className="icon" onClick={prevMonth} style={{ fontSize: '2rem' }}>
         
        </div>
        <div className="current" style={{ fontSize: '2rem' }}>{format(currentMonth, headerFormat)}</div>
        <div className="icon" onClick={nextMonth} style={{ fontSize: '2rem' }}>
          
        </div>
      </div>
      <div className="week-days">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
          <div className="col col-center" key={day}>
            {day}
          </div>
        ))}
      </div>
      {createWeeksArray()}
    </div>
  );
};

export default Calendar;
