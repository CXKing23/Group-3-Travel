import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
    const location = useLocation();

    return (
        <nav className="navigation">
            
                    <Link to="/planner" className={location.pathname === "/planner" ? "active" : ""}>Planner</Link> |  
                    <Link to="/destination-picker" className={location.pathname === "/destination-picker" ? "active" : ""}>Destination Picker</Link> |  
                    <Link to="/packing-checker" className={location.pathname === "/packing-checker" ? "active" : ""}>Packing Checker</Link> |  
                    <Link to="/itinerary" className={location.pathname === "/itinerary" ? "active" : ""}>Itinerary</Link> |  
                    <Link to="/travel-advice" className={location.pathname === "/travel-advice" ? "active" : ""}>Travel Advice</Link>
               
        </nav>
    );
};

export default NavBar;