import { useState } from "react";
import AddUser from "./components/AddUser";
import Fotter from "./components/Fotter";
import Grid from "./components/Grid";
import Header from "./components/Header";
import styles from "./Main.module.css";

const userData = [
  {
    id: Date.now() + 0,
    username: "Nnamdi Michael",
    email: "nnamdimichael@gmail.com",
    mobile: "08037748573",
    city: "Abuja",
  },

  {
    id: Date.now() + 1,
    username: "Nnamdi",
    email: "nnam",
    mobile: "099877655",
    city: "New",
  },
];

export default function App() {
  // const [user, setUser] = useState<User[]>([]);
  const [users, setUsers] = useState(userData);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");

  return (
    <div className={styles.app}>
      <div className={styles.main}>
        <Header />
      </div>

      <AddUser
        username={username}
        setUsername={setUsername}
        email={email}
        setEmail={setEmail}
        mobile={mobile}
        setMobile={setMobile}
        city={city}
        setCity={setCity}
        setUsers={setUsers}
      />

      <Grid users={users} />

      <Fotter />
    </div>
  );
}
