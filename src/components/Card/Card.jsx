import "./Card.css"

function Card({cardClicker,className,img}) {
    console.log(className);
    return (
        <div className={className} onClick={cardClicker}>
            {img!=="" && <img className="img" src={img} alt=""/>}
        </div>
    )
}

export default Card;