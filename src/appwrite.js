
import { Client, Account, ID } from "appwrite";

const client = new Client().setEndpoint("https://cloud.appwrite.io/v1/")
    .setProject('670b8c280000919250b8'); // Your project ID

export const account = new Account(client);
// const result = await account.create(
//     "1231424", // userId
//     'emai1l@example.com', // email
//     'asdasdasda', // password
//     'hegdaeadithyakq' // name (optional)
// );

export {ID,getUserData} from "appwrite";
// console.log(result);