import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';

import AdminHome from './components/adminHome';
import 'bootstrap/dist/css/bootstrap.min.css'






function App() {
  return (
    <div className="App">
     

<BrowserRouter>
<Routes>
  
<Route path='/' element={<AdminHome/>}/>
<Route path='/admin/*' element={<AdminHome/>}/>

</Routes>
</BrowserRouter>
     

          

           
   
    </div>
  );
}

export default App;
