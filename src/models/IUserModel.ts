import {IUserAddress} from "./address/IUserAddress";

export interface IUserModel {
    id: number,
    firstName: string,
    lastName: string,
    maidenName: string,
    age: number,
    gender: string,
    email: string,
    phone: number,
    username?: string,
    password?: string,
    birthDate: number,
    image: string,
    height: number,
    weight: number,
    eyeColor: string,
    hair?: string[],
    domain: string,
    ip: number,
    address?: IUserAddress[],
    macAddress: string,
    university: string,
    bank?: string[]
    company?: string[]
    ein?: number,
    ssn?: number,
    userAgent: string
}

