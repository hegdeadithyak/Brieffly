
import { Client, Account, ID } from "appwrite";

const client = new Client().setEndpoint("https://cloud.appwrite.io/v1/")
    .setProject(process.env.APPWRITE_ID); // Your project ID

export const account = new Account(client);
// const result = await account.create(
//     "1231424", // userId
//     'emai1l@example.com', // email
//     'asdasdasda', // password
//     'hegdaeadithyakq' // name (optional)
// );

export {ID} from "appwrite";
// console.log(result);