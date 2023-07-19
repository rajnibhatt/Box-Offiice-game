import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { QueryClient,QueryClientProvider} from '@tanstack/react-query';
import Home from './Pages/Home';
import Started from './Pages/Stared';
import MainLayout from './Component/MainLayout';
import Show from './Pages/Show';
import './App.css';

const queryClient = new QueryClient();


function App() {
   
   return(
   <QueryClientProvider client={queryClient}>
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
   </QueryClientProvider>

   );
}

export default App;
