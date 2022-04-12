import classes from "./MainHeader.module.css"
import logo from "../dummy-data/life_planner_logo.png"
import { NavLink } from "react-router-dom"
import AuthContext from '../../store/auth-context';
import { useContext } from "react";


const MainHeader = () => {

    const authCtx = useContext(AuthContext);

    const logoutHandler = () => {
        authCtx.logout();
    }

    return (
        <header className={classes.header}>
            <div>
                <img alt="logo of page" className={classes.logo} src={logo} />
            </div>
            <nav>
                <ul className={classes.list}>
                    <li><NavLink className={(navData) => navData.isActive ? classes.active : classes.white} to="/goals">Goals</NavLink></li>
                    <li><NavLink className={(navData) => navData.isActive ? classes.active : classes.white} to="/spending">Spending</NavLink></li>
                    <li><NavLink className={(navData) => navData.isActive ? classes.active : classes.white} to="/inspiration">Inspiration</NavLink></li>
                    <li><button className={classes.toggle} onClick={logoutHandler}>Logout</button></li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader