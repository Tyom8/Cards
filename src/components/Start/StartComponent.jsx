import { Link } from "react-router-dom";
import styles from "./Start.module.css";

function StartComponent({title}) {
    return (
            <div className={styles.Start_Div}>
                <Link to={"/cards"}  className={styles.Start_Link}>
                    <button className={styles.Start_Button}>{title}</button>
                </Link>
            </div>
    )
};

export default StartComponent;