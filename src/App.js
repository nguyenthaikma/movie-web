import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom';
import { createBrowserHistory } from "history";
import Home from './pages/Home/Home';
// import HomeTemplates from './templates/Home/HomeTemplates';
import History from './pages/History/History';
import Info from './pages/Info/Info';
import Login from './pages/Login/Login';
import DetailMovie from './pages/DetailMovie/DetailMovie';
import Loading from './components/Loading/Loading';
import Checkout from './pages/Checkout/Checkout'
import './App.css';
import DatVeTemplates from './templates/DatVe/DatVeTemplates';
import Result from './templates/Checkout/Result';
import SignUp from './pages/Login/SignUp';
// import CheckoutTemplates from './templates/Checkout/CheckoutTemplates';

const CheckoutTemplates = lazy(() => import('./templates/Checkout/CheckoutTemplates'))
const HomeTemplates = lazy(() => import('./templates/Home/HomeTemplates'))

let history = createBrowserHistory();


function App() {

  return (
    <Suspense fallback={<Loading />}>
      <div className="App">
        <Loading />
        <Routes history={history}>
          <Route path="/" element={<HomeTemplates data={Home} />} />
          <Route path="/movieDetail/:id" element={<HomeTemplates data={DetailMovie} />} />
          <Route path="/history" element={<HomeTemplates data={History} />} />
          <Route path="/info" element={<HomeTemplates data={Info} />} />
          <Route path="/login" element={<CheckoutTemplates data={Login} />} />
          <Route path="/signup" element={<CheckoutTemplates data={SignUp} />} />
          <Route path="/checkout/:id/*" element={<DatVeTemplates data={Checkout} />} />
          <Route path="/checkout/:id/result" element={<DatVeTemplates data={Result} />} />
        </Routes>
      </div>
    </Suspense>)
}

export default App;

