import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Students from './pages/Students/Students'
import AddStudent from './pages/Attendence/Attendence.jsx'
import AttendanceShow from './pages/Attendence/attendanceShow.jsx'
import Public from './pages/Public'
import Signin from './pages/Signin/Signin'
import Layout from './Layout/Layout'



function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Public />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/' element={<Layout />}>
          <Route index element={<Students />} />
          <Route path='/addstudents' element={<AddStudent />} />
          <Route path='/attendence' element={<AttendanceShow />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
