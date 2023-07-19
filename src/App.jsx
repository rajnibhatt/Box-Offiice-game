import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Started from './Pages/Stared';
import MainLayout from './Component/MainLayout';
import Show from './Pages/Show';
import './App.css';

function App() {
   return(
   <BrowserRouter>
   <Routes>
   <Route element={<MainLayout/>}>
    <Route path="/" element={<Home/>}/>
    <Route path='Stared' element={<Started/>}/>
    </Route>
    <Route path="/show/:showId" element={<Show/>}/>
    <Route path='*' element={<div>Error occured</div>}/>
   
   </Routes>
   </BrowserRouter>
   );
}

export default App;
