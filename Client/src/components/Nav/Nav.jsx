import SearchBar from "../SearchBar/SearchBar";
import { NavLink, Link } from "react-router-dom";
import style from "./Nav.module.css";


const Nav = ({ onSearch, setAccess }) => {
    const hundleLogOut = () => {
        setAccess(false);
    };

    return (
        <nav className={style.nav}>
            <Link className={style.link} to="/home">Ricky and Morty</Link>
            <NavLink className={style.btnFavorite} to="/favorites">Favorites</NavLink>


            <SearchBar onSearch={onSearch} />

            <ul className={style.ul}>
                <NavLink className={style.navlink} to="/home">Home</NavLink>
                <NavLink className={style.navlink} to="/about">About</NavLink>
                {/* <NavLink className={style.navlink} to="/">Log Out</NavLink> */}
                <button className={style.button} onClick={hundleLogOut}>Log Out</button>
            </ul>

        </nav>
    );
}

export default Nav;