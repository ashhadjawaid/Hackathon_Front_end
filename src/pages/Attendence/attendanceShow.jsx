// Attendanceshow.jsx
import React from 'react';
import './attendanceshow.css';
import { FaUser, FaClock } from 'react-icons/fa';


const AttendanceShow = ({studentsdata}) => {
  console.log(studentsdata);
  return (
    <div className="container">
      <div className="topbar" style={{ justifyContent: 'space-between', display: 'flex' }}>
        <h1>Attendance Show</h1>
      </div>
      <div>
        {students.map((studentsdata) => (
          <div key={student.id} className="student-card">
            <div className="circle_pic">
              <span>
                <FaUser />
              </span>
              <img src={student.profileImg} alt={`Profile of ${student.name}`} />
            </div>
            <div className="student-details">
              <p>ID: {student.id}</p>
              <p>Name: {student.name}</p>
              <p>Check-in Time: {student.checkInTime || 'Not checked in'}</p>
              <p>Check-out Time: {student.checkOutTime || 'Not checked out'}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttendanceShow;
