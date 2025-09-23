import { useState } from "react";
import AddUser from "./components/AddUser.jsx";
import Fotter from "./components/Fotter.jsx";
import Grid from "./components/Grid.jsx";
import Header from "./components/Header.jsx";
import styles from "./Main.module.css";

const userData = [
  {
    id: Date.now(),
    username: "Nnamdi Michael",
    email: "nnamdi@gmail.com",
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

  function handleAddUser(newUser) {
    setUsers((user) => [...user, newUser]);
  }

  function handleDelete(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (confirmed) {
      setUsers(users.filter((user) => user.id !== id));
    }
  }

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
        handleAddUser={handleAddUser}
      />

      <Grid users={users} handleDelete={handleDelete} />

      <Fotter />
    </div>
  );
}
