import './App.css';
import Footer from './Pages/shared/Footer/Footer';
import Header from './Pages/shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import PackageDetails from './Pages/Home/PackageDetails/PackageDetails';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import NotFound from './Pages/shared/NotFound/NotFound';
import { createContext } from 'react';
import Packages from './Pages/Home/Packages/Packages';
import usePackages from './hooks/usePackages';
import Services from './Pages/Home/Services/Services';
export const packageDetailsContext = createContext();

function App() {

  const [packages, setPackages] = usePackages([]);
  return (
    <packageDetailsContext.Provider value={[packages, setPackages]}>
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}>Home</Route>
        <Route path='/home' element={<Home></Home>}>Home</Route>
        <Route  path='/packages' element={<Packages></Packages>}></Route>
        <Route path='services' element={<Services></Services>}></Route>
        <Route path='/packagesDetails/:packagesDetailsId' element={<PackageDetails></PackageDetails>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>


      </Routes>
      <Footer></Footer>
    </packageDetailsContext.Provider>
  );
}

export default App;
