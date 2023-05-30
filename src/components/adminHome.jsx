import { Routes, Route } from "react-router-dom";



import AdminDashboard from "./adminDashboard";
import AdminNavbar from "./adminNavbar";









import AddUser from "./AddUser";
import UserList from "./UserList";
import EditUser from "./EditUser";
import Editpage from "./Editpage";



const AdminHome = () => {
    return (
        <div className="adminHome">
            <AdminNavbar />
            <Routes>
                <Route path="/" element={<AdminDashboard />} />
                <Route path="/add-user" element={<AddUser/>}/>
                <Route path='/view-user' element={<UserList />} />
                <Route path='/edit' element={<EditUser/>} />
                <Route path='/edit/:id' element={<Editpage/>}/>
                <Route path='/edit-page' element={<Editpage/>} />
              
                

            
            

                

                
                




            </Routes>
        </div>
    );
}

export default AdminHome;