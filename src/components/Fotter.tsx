import styles from "./Fotter.module.css";

export default function Fotter() {
  return (
    <div className={styles.fotter}>
      <div>
        <p>
          Showing <span>1</span> to <span>8</span> of <span>8</span> entries
        </p>
      </div>

      <div>
        <button>Previous</button>
        <button>1</button>
        <button>Next</button>
      </div>
    </div>
  );
}
