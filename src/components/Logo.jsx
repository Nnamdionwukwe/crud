import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link to="/" alt="WorldWise logo" className={styles.logo}>
      <img alt="WorldWise logo" className={styles.logo} src="/logo.png"></img>
    </Link>
  );
}

export default Logo;
