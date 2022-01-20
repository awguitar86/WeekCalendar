import React from 'react';
import './calendarFront.scss';
import styled from 'styled-components';
import { calDays, calTimes, colors } from '../../calendarDaysAndTimesData';

const Container = styled.div`
  width: 85%;
  background-color: ${(props) => colors[props.index]};
  color: black;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
`;

function CalendarFront(props) {
  const { displayData, initialAndChangedData } = props; // This is filtering through the displayData and filtering out all the data that say "Does Not Meet"
  let meetingPatternArr;
  if (displayData) {
    meetingPatternArr = displayData.filter(
      (course) => course.meetingPattern !== 'Does Not Meet'
    );
  } else {
    meetingPatternArr = initialAndChangedData.filter(
      (course) => course.meetingPattern !== 'Does Not Meet'
    );
  }

  const eventData = meetingPatternArr.map((event) => {
    let days = event.meetingPattern.split(' ')[0];
    days = days.replace('a', '');
    let dayArray = days.split('');
    dayArray = dayArray.map((day) => {
      if (day === 'S') return 'Sa';
      return day;
    });

    const startTime = event.meetingPattern.split(' ')[1].split('-')[0];
    let endTime = event.meetingPattern.split(' ')[1].split('-')[1];
    if (endTime.includes(';')) {
      endTime = endTime.substring(0, endTime.length - 1);
    }

    const displayEvents = dayArray.map((day) => {
      return (
        <Container
          key={`${day}-${event.classId}`}
          index={meetingPatternArr.indexOf(event)}
          style={{
            gridColumn: `${calDays[day]}`,
            gridRow: `${calTimes[startTime]} / ${calTimes[endTime]}`,
          }}
          onClick={() => {
            props.openClassModal(event.classId);
          }}
        >
          <p className="cal-front-item-course">
            {event.course}-{event.section}
          </p>
          <p className="cal-front-item-p">
            {event.courseTitle.substring(0, 15) + '...'}
          </p>
          <p className="cal-front-item-p">{event.meetingPattern}</p>
        </Container>
      );
    });

    return displayEvents;
  });

  return <div className="calendar-front">{eventData}</div>;
}

export default CalendarFront;
