import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { filterCards, orderCards } from "../../redux/action";
import style from "./Favorite.module.css";
/* import { useState } from "react"; */


const Favorites = () => {
    const favorites = useSelector((state) => state.myFavorites);
    const dispatch = useDispatch();
    /* const [aux, setAux] = useState(false); //??????? */

    const hundleOrder = (event) => {
        dispatch(orderCards(event.target.value));
        /* setAux(true); //??????? */
    };

    const hundleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    };

    return (
        <div className={style.conteiner}>
            <div className={style.conteinerFilter}>
                <h3 className={style.title}>Ordenar</h3>
                <select className={style.btnSelect} onChange={hundleOrder}>
                    <option value="order" disabled="disabled" className={style.disabled}>Order By</option>
                    <option value="Ascendente" >Ascendente</option>
                    <option value="Descendente" >Descendente</option>
                </select>


                <h3 className={style.title}>Filtrar</h3>
                <select className={style.btnSelect} onChange={hundleFilter}>
                    <option value="filter" disabled="disabled" className={style.disabled}>Filter By</option>
                    <option value="allCharacters">All Favorites</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">Unknown</option>
                </select>
            </div>

            {favorites.map(({ id, name, status, species, gender, image }) => {
                return (
                    <Card
                        key={id}
                        id={id}
                        name={name}
                        status={status}
                        species={species}
                        gender={gender}
                        image={image}
                    />
                );
            })};
        </div>
    );
};

export default Favorites;