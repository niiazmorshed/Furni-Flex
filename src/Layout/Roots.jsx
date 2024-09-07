
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Pages/Navbar/Navbar';

const Roots = () => {
    return (
        <div>

          <Navbar></Navbar>
        <div className="font-nunito">
          <Outlet></Outlet>
        </div>
        <div className="mt-20 font-sans">
          <Footer></Footer>
        </div>
      </div>
        
    );
};

export default Roots;