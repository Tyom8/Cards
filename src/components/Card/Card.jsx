import "./Card.css"

import one from "../../assets/images/1.png";
import two from "../../assets/images/2.png";
import three from "../../assets/images/3.png";
import four from "../../assets/images/4.png";
import five from "../../assets/images/5.png";
import six from "../../assets/images/6.png";
import seven from "../../assets/images/7.png";
import { useSelector } from "react-redux";
import { useMemo } from "react";
const images = [one,two,three,four,five,six,seven]
function getImage(i){
    return images[i];
}
function Card({cardClicker,className,img,index}) {
    const cards = useSelector(state=>state.cards)
    const image = useMemo(()=>{
        const i = cards.indexOf(index);
        if(i>=0){
            return getImage(i)
        }
        return null
    },[index,cards])
    return (
        <div className={image?'Card AnimeCard ':' Card'} onClick={image?null:cardClicker}>
            {image && <img className="img" src={image} alt=""/>}
        </div>
    )
}

export default Card;