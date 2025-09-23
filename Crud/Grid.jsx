import styles from "./Grid.module.css";

// type User = {
//   // Add appropriate user fields, e.g.:
//   id: number;
//   name: string;
//   email: string;
//   // Add more fields as needed
// };

// interface GridProps {
//   users: User[];
//   handleDelete: (id: number) => void;
// }

export default function Grid({ users, handleDelete }) {
  return (
    <>
      <ul>
        <div className={styles.gridSub}>
          <div className={styles.gridSub2}>
            <h5>SNo.</h5>
            <h5>Username</h5>
            <h5>Email</h5>
          </div>

          <div className={styles.gridSub2}>
            <h5>Mobile</h5>
            <h5>City</h5>
            <h5>Options</h5>
          </div>
        </div>

        <div>
          {users.map((user) => (
            <li>
              <div key={user.id} className={styles.list}>
                <div className={styles.listSub}>
                  <p>{user.id}</p>
                  <p>{user.username}</p>
                  <p>{user.email}</p>
                </div>

                <div className={styles.listSub}>
                  <p>{user.mobile}</p>
                  <p>{user.city}</p>
                  <button>Edit</button>
                  <button onClick={() => handleDelete(user.id)}>Delete</button>
                </div>
              </div>
            </li>
          ))}
        </div>
      </ul>
    </>
  );
}
