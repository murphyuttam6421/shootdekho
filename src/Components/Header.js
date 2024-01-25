import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.mainContainer}>
        <div className={styles.logo}>logo</div>
        <div className={styles.listDiv}>
          <ul className={styles.listMaincontainer}>
            <li>first</li>
            <li>Second</li>
            <li>SHOOT DEKHO</li>
            <li>Third</li>
            <li>Forth</li>
          </ul>
        </div>
        <div className={styles.bookTicket}>book ticket</div>
      </div>
      <div className={styles.secondHeading}>
        <span className={styles.textStyle}>
          GET YOUR
          <br />
          PHOTO READY
        </span>
      </div>
    </div>
  );
}
