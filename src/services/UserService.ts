import { IUsers } from "../models/IUsers";

export class UserService {
    private static users: IUsers[] = [
        {
            sno: "001",
            name: "Dasun Shanaka",
            age: 32,
            designation: "Captain",
            company: "SLC"
        },
        {
            sno: "002",
            name: "Wanidu Hasaranga",
            age: 28,
            designation: "Vice Captain",
            company: "SLC"
        },
        {
            sno: "003",
            name: "Charith Asalanka",
            age: 28,
            designation: "Vice Captain",
            company: "Batsman"
        }
    ];
    public static getAllUsers() {
        return this.users;
    }
}