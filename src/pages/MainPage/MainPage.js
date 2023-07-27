import { useCallback, useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import styles from "./MainPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { numAction } from "../../store/actions/Actions";

function MainPage() {
    const [finish,setFinish] = useState(false);

    const dispatch = useDispatch();
    const [img1,setImg1] = useState("");
    const [img2,setImg2] = useState("");
    const [img3,setImg3] = useState("");
    const [img4,setImg4] = useState("");
    const [img5,setImg5] = useState("");
    const [img6,setImg6] = useState("");
    const [img7,setImg7] = useState("");
    let num = 0;

    const [className1,setClassName1] = useState("Card");
    const [className2,setClassName2] = useState("Card");
    const [className3,setClassName3] = useState("Card");
    const [className4,setClassName4] = useState("Card");
    const [className5,setClassName5] = useState("Card");
    const [className6,setClassName6] = useState("Card");
    const [className7,setClassName7] = useState("Card2");

    const cardClicker1 = useCallback(() => {
        num++
        dispatch(numAction(1,num))
    }, [])

    const cardClicker2 = useCallback(() => {
        num++
        dispatch(numAction(2,num))
    }, [])

    const cardClicker3 = useCallback(() => {
        num++
        dispatch(numAction(3,num))
    }, [])

    const cardClicker4 = useCallback(() => {
        num++
        dispatch(numAction(4,num))
    }, [])

    const cardClicker5 = useCallback(() => {
        num++
        dispatch(numAction(5,num))
    }, [])

    const cardClicker6 = useCallback(() => {
        num++
        dispatch(numAction(6,num))
    }, [])

    const cardClicker7 = useCallback(() => {
        num++
        dispatch(numAction(7,num))
    }, [])

    const img = useSelector(state => state.cards)
    console.log(img);
    useEffect(() => {
        if(img.img1 !== null) {
            setImg1(img.img1)
            setClassName1("AnimeCard")
        }
        if(img.img2 !== null) {
            setImg2(img.img2)
            setClassName2("AnimeCard")
        }
        if(img.img3 !== null) {
            setImg3(img.img3)
            setClassName3("AnimeCard")
        }
        if(img.img4 !== null) {
            setImg4(img.img4)
            setClassName4("AnimeCard")
        }
        if(img.img5 !== null) {
            setImg5(img.img5)
            setClassName5("AnimeCard")
        }
        if(img.img6 !== null) {
            setImg6(img.img6)
            setClassName6("AnimeCard")
        }
        if(img.img7 !== null) {
            setImg7(img.img7)
            setClassName7("AnimeCard-2")
        }
        if(img.id == 7) {
            setTimeout(() => {
                setFinish(true)
            }, 3000);
        }
    },[img])
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
                 <Card cardClicker={cardClicker1} className={className1} img={img1}/>
                 <Card cardClicker={cardClicker2} className={className2} img={img2}/>
                 <Card cardClicker={cardClicker3} className={className3} img={img3}/>
             </div>
             <div className={styles.centreRow}>
             <Card cardClicker={cardClicker7} className={className7} img={img7}/>
             </div>
             <div className={styles.firstRow}>
                 <Card cardClicker={cardClicker4} className={className4} img={img4}/>
                 <Card cardClicker={cardClicker5} className={className5} img={img5}/>
                 <Card cardClicker={cardClicker6} className={className6} img={img6}/>
             </div>
         </div>
     </div>
        }
        </>
    )
};

export default MainPage;