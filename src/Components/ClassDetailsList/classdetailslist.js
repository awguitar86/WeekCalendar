import React from 'react';
import './classdetailslist.scss';

function ClassDetailsList(props) {
    return (
        <div className="printOnly">
            <table className="classDetailsList">
                <tr><th><h1>Class Details</h1><h2>{props.title}</h2></th></tr>
                {props.displayData.map((item)=>{
                    return (
                        <tr>
                            <td className="classDetailsListItem">
                                <div class="classDetail"><span className="bold">Title:</span> {item.courseTitle}</div>
                                <div class="classDetail"><span className="bold">Course:</span> {item.course}</div>
                                <div class="classDetail"><span className="bold">Instructor:</span> {item.instructor}</div>
                                <div class="classDetail"><span className="bold">Meeting Time:</span> {item.meetingPattern}</div>
                                <div class="classDetail"><span className="bold">Location:</span> {item.location}</div>
                                <div class="classDetail"><span className="bold">Block:</span> {item.block}</div>
                                <div class="classDetail"><span className="bold">Credit Hours:</span> {item.creditHours}</div>
                            </td>
                        </tr>
                        //courseTitle, instructor, meetingPattern, location, block, creditHours, classId, course
                    );
                })}
            </table>
        </div>
    );
}

export default ClassDetailsList;