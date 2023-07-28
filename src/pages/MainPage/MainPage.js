import { useCallback, useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import styles from "./MainPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { nextClick, numAction } from "../../store/actions/Actions";

function MainPage() {
    const [finish,setFinish] = useState(false);

    const dispatch = useDispatch();

    const clickHandler = (index)=>{
        return ()=>{
            dispatch(nextClick(index))
        }
    }
    return (
        <>
        {finish ? 
        <div className={styles.mainDivFinished}>
                <div className={styles.text_div}>
                    <h1 className={styles.text}>We wish that your baby will grow up happy!</h1>
                </div>
                <div className={styles.xlapush}>
                </div>
        </div>
         : 
         <div className={styles.Main_Div}>
         <div className={styles.Card_All_Div}>
             <div className={styles.firstRow}>
                 <Card cardClicker={clickHandler(0)} index = {0}  />
                 <Card cardClicker={clickHandler(1)} index = {1} />
                 <Card cardClicker={clickHandler(2)}  index = {2} />
             </div>
             <div className={styles.centreRow}>
             <Card cardClicker={clickHandler(3)}  index = {3}  />
             </div>
             <div className={styles.firstRow}>
                 <Card cardClicker={clickHandler(4)}  index = {4}  />
                 <Card cardClicker={clickHandler(5)}  index = {5}  />
                 <Card cardClicker={clickHandler(6)}  index = {6}  />
             </div>
         </div>
     </div>
        }
        </>
    )
};

export default MainPage;