import { useState } from "react";
import validation from "../Function/validation.js";
import style from "./Form.module.css"

const Form = ({ login }) => {

    //? Estado local
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    //? Funciones
    const handleChange = (event) => {
        const campoActual = event.target.name;
        const valorActual = event.target.value;

        setUserData({
            ...userData,
            [campoActual]: valorActual,
        });

        setErrors(validation({
            ...userData,
            [campoActual]: valorActual
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        login(userData);


        const errorsArray = Object.keys(errors);

        if (errorsArray.length === 0 && userData.email !== "") {
            setUserData({ email: "", password: "" });
            alert("Datos completos");
            setErrors(validation({ ...userData }));
        } else {
            alert("Debe llenar todos los campos");
        }
    };


    return (
        <div className={style.conteiner}>
            <form onSubmit={handleSubmit} className={style.form}>
                <label className={style.label}>Email</label>
                <input className={style.inputs} type="text" name="email" placeholder="Ingrese su email..." value={userData.email} onChange={handleChange} />
                <p className={style.errors}>{errors.email}</p>



                <label className={style.label}>Password</label>
                <input className={style.inputs} type="password" name="password" placeholder="Ingrese su contraseña..." value={userData.password} onChange={handleChange} />
                <p className={style.errors}>{errors.password}</p>


                <button className={style.button} type="submit" >Login</button>
            </form>
        </div>
    );
};

export default Form;