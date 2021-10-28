import React, { useState } from "react";
import { useDispatch } from "react-redux";
import registration from "Scenes/Registration/registration.module.scss";
import { newUserAdd } from "store/action/newUserAdd";
import { ROUTE } from "../../Routing/routing";
import { Link } from "react-router-dom";



const Registration = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [city, setСity] = useState('');
    const [birthday, setBirthday] = useState('');

    const newUser = (email, password, name, firstName, city, birthday) => {
        dispatch(newUserAdd(email, password, name, firstName, city, birthday))
    }

    return (
        
        <React.Fragment>
            <div className={registration.form}>
                <input type="email" placeholder={"email"} onChange={(event) => { 
                    setEmail(event.target.value) }} 
                    value={email}/>
                <input type="password" placeholder={"password"} onChange={(event) => { 
                    setPassword(event.target.value) }} 
                    value={password}/>
                <input type="text" placeholder={"Имя"} onChange={(event) => { 
                    setName(event.target.value) }} 
                    value={name}/>
                <input type="text" placeholder={"Фамилия"} onChange={(event) => { 
                    setFirstName(event.target.value) }} 
                    value={firstName}/>
                <input type="text" placeholder={"Город"} onChange={(event) => { 
                    setСity(event.target.value) }} 
                    value={city}/>
                <input type="date" onChange={(event) => { 
                    setBirthday(event.target.value) }} 
                    value={birthday}/>
                <Link type="button" to={ROUTE.PROFILE} onClick={() =>{
                    newUser(email, password, name, firstName, city, birthday);
                    console.log("email", email,"password", password, "name", name, "firstName", firstName,"city", city,"birthday", birthday);
                }}>Создать</Link>
            </div>
        </React.Fragment>
    )
}

export default Registration;