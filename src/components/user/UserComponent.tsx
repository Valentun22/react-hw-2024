import React, {FC} from 'react';
import {IUserModel} from "../../models/IUserModel";

interface IProps { user:IUserModel; }

type IUserPropsType = IProps & {onSelectUser:(userId:number) => void}

const UserComponent:FC<IUserPropsType> = ({user, onSelectUser}) => {
    const {
        id,
        firstName,
        lastName,
        maidenName,
        age,
        gender,
        email,
        phone,
        birthDate,
        image,
        height,
        weight,
        eyeColor,
        domain,
        ip,
        macAddress,
        university,
        userAgent,} = user
    const TakeOutSelectUser = () => { onSelectUser(user.id)}

    return (
        <div className={'userWindow'}>
            <h2>ID- {id}. {firstName} {lastName} {maidenName}</h2>

            <div className={'userImg'}>
                <img src={image} alt={firstName}></img>
            </div>

            <p>Age: {age}, Gender: {gender}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Birth date: {birthDate}</p>

            <div className={'userParameters'}>
                <p>Height: {height}</p>
                <p>Weight: {weight}</p>
                <p>EyeColor: {eyeColor}</p>
            </div>

            <p>Domain: {domain}</p>
            <p>ip: {ip}</p>
            <p>MacAddress: {macAddress}</p>
            <p>University: {university}</p>
            <p>{userAgent}</p>

            <button onClick={TakeOutSelectUser}>Posts</button>
        </div>
    );
};

export default UserComponent;