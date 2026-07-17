/**
 * ==========================================
 * Theme Toggle
 * Project : ClassPilot
 * ==========================================
 */

import { FaMoon, FaSun } from "react-icons/fa";

import { useTheme } from "../../context/ThemeContext";

import "./ThemeToggle.css";

function ThemeToggle(){

    const{

        theme,

        toggleTheme,

    }=useTheme();

    return(

        <button

            className="theme-toggle"

            onClick={toggleTheme}

        >

            {

                theme==="light"

                ?

                <FaMoon/>

                :

                <FaSun/>

            }

        </button>

    );

}

export default ThemeToggle;