import { Outlet } from 'react-router-dom';
import Footer from '../components/shared/Footer';
import Nav from '../components/shared/Nav';
const Mainlayouts = () => {
    return (
        <div>
            <Nav />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Mainlayouts;