import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './blocks/header/Header.js';
import Footer from './blocks/footer/Footer';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Buy from './pages/Buy'
import Backtotop from "./components/backtotop/Backtotop";
import HomeDetails from './pages/HomeDetails'
import AdvisorDetail from './pages/AdvisorDetail';
import News from "./pages/News.js";
import RealState from './components/RealState/index';
import RealStateDetails from './components/RealStateDetails/index';
import Blog from './components/Blog/index';
import SingleBlog from './components/SingleBlog/index';
import Rules from './components/Rules/index';
import FaqPage from './components/Faq/index';
import SignIn from './components/SignIn/index';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Loading from './components/Loading/index';


function App() {
  return (
    <div className="App overflow-hidden">
     <ToastContainer/>
     <Loading/>
      <Header/>
      <Backtotop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/homeDetails" element={<HomeDetails />} />
        <Route path="/advisorDetail" element={<AdvisorDetail />} />
        <Route path="/news" element={<News />} />
        <Route path="/realState" element={<RealState/>} />
        <Route path="/realStateDetails" element={<RealStateDetails/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/singleBlog" element={<SingleBlog/>} />
        <Route path="/rules" element={<Rules/>} />
        <Route path="/faq" element={<FaqPage/>} />
        <Route path="/signin" element={<SignIn/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
