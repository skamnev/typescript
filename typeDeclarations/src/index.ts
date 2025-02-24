import axios from "axios";
import _ from "lodash";

const requestUser = "https://jsonplaceholder.typicode.com/users/1";
const requestAllUsers = "https://jsonplaceholder.typicode.com/users/1";

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  }

  axios.get<User>(requestUser).then((res) => {
    console.log("Woo!!!!");
    printUser(res.data);
}).catch((e) => {
    console.log("Error!!!!", e);
});

axios.get<User[]>(requestAllUsers).then((res) => {
    console.log("Woo!!!!");
    res.data.forEach(printUser);
}).catch((e) => {
    console.log("Error!!!!", e);
});

function printUser(user: User) {
    console.log(user.name);
    console.log(user.email);
    console.log(user.phone);
}