import { useState } from "react";
import styles from "./AddUser.module.css";

type AddUserProps = {
  // id: string;
  // setId: React.Dispatch<React.SetStateAction<string>>;
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  mobile: string;
  setMobile: React.Dispatch<React.SetStateAction<string>>;
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  setUsers: React.Dispatch<React.SetStateAction<string>>;
};

export default function AddUser({
  username,
  setUsername,
  email,
  setEmail,
  mobile,
  setMobile,
  city,
  setCity,
  setUsers,
}: AddUserProps) {
  const [open, setOpen] = useState(false);

  type User = {
    username: string;
    email: string;
    mobile: string;
    city: string;
  };

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleAddUser(newUser: User) {
    setUsers((user) => [...user, newUser]);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!username) return alert("Please enter a username.");
    // Handle form submission logic here
    const newUser = {
      id: Date.now() + 1, // Generate a unique ID for demonstration
      username,
      email,
      mobile,
      city,
    };

    handleAddUser(newUser);
    console.log({ username, email, mobile, city });
    // Reset form fields
    setUsername("");
    setEmail("");
    setMobile("");
    setCity("");
    // Close the modal
    setOpen(false);

    alert("User added successfully!");

    // You can also add code to update the user list or make an API call here
  }

  return (
    <div>
      <button onClick={handleOpen} className={styles.user}>
        Add User
      </button>

      {open && (
        <div className={styles.modal}>
          <div className={styles.overlay}>
            <div>
              <div className={styles.modalContent}>
                <h5>Add New User</h5>

                <button className={styles.close} onClick={handleClose}>
                  &times;
                </button>
              </div>

              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <p>Username:</p>
                  <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                  />
                </div>

                <div className={styles.formGroup}>
                  <p>Email:</p>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                  />
                </div>

                <div className={styles.formGroup}>
                  <p>Mobile:</p>
                  <input
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    type="text"
                  />
                </div>

                <div className={styles.formGroup}>
                  <p>City:</p>
                  <input
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    type="text"
                  />
                </div>

                <div className={styles.formFotter}>
                  <button
                    className={styles.cancel}
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </button>

                  <button className={styles.addUser} type="submit">
                    Add User
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <div className={styles.controls}>
        <div>
          <p>
            Show <span className={styles.entries}>10 &darr;</span> entries
          </p>
        </div>

        <div>
          Search: <input className={styles.search} type="text" />
        </div>
      </div>
    </div>
  );
}
