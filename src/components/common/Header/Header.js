import {Link} from "react-router-dom";

import styles from "./header.module.css";



export const Header = () => {
    return(
        <header>
            <nav>
                <ul className={styles["ul-nav"]}>
                    <li>
                        <Link to="/programs">Programs</Link>
                    </li>
                    <li>
                        <Link to="/yourPrograms">Your programs</Link>
                    </li>
                    <li>
                        <Link to="/dailySchedule">Your daily schedule</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}