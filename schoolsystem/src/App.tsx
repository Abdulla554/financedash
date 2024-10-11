import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
// ----------------------------------------------------------------
// import Students from './pages/home/main/Students/Students';
// ----------------------------------------------------------------
import Home from './pages/home/Home';
import Chat from './pages/Chat/Chat';
import StudentDetails from './pages/StudentDetails/StudentDetails';
import User from './pages/User/User';
import AddStudent from './pages/AddStudent/AddStudent';
import AddTeacher from './pages/AddTeacher/AddTeacher';
import FoodDetails from './pages/FoodDetails/FoodDetails';
import Food from './pages/Food/Food';
import TeacherDetails from './pages/TeacherDetails/TeacherDetails';
import Notification from './pages/Notification/Notification';
import Teachers from './pages/Teachers/Teachers';
import Finance from './pages/Finance/Finance';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StudentDetails1 from './pages/StudentDetails/StudentDetails1';
import Main from './pages/home/main/Main';
import Students from './pages/Students/Students';
import Teacher from './pages/Teachers/Teacher';

// npx yarn run dev
// تشغيل
function App() {

  return (
    <>
    
   
  <BrowserRouter>
   <Routes>

<Route path='/' element={<Finance/> } />
<Route path='/studentDetails' element={<StudentDetails/> } />
<Route path='/students' element={<Students/> } />
<Route path='/teacher' element={<Teacher/> } />
{/* <Route path='Finance' element={<Finance/> } />
<Route path='Chat' element={<Chat/> } />
<Route path='User' element={<User/> } />
<Route path='FoodDetails' element={<FoodDetails/> } />
<Route path='Food' element={<Food/> } />
<Route path='AddTeacher' element={<AddTeacher/> } />
<Route path='AddStudent' element={<AddStudent/> } />
<Route path='StudentDetails' element={<StudentDetails/> } />
<Route path='Notification' element={<Notification/> } />
<Route path='TeacherDetails' element={<TeacherDetails/> } />
<Route path='Teachers' element={<Teachers/> } /> */}
   </Routes>

  




  </BrowserRouter>


  {/* <Finance/> */}
     {/* <Home/>  */}
  {/* <Chat/> */}
    {/* <User/> */}
    {/* <FoodDetails/>  */}
    {/* <Food/> */}
    {/* <AddTeacher/> */}
    {/* <AddStudent/> */}
 {/* <StudentDetails/> */}
   {/* <Notification/> */}
{/* <TeacherDetails/> */}
 {/* <Teachers/> */}
 </>)
}

export default App