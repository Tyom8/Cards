import one from "../../assets/images/1.png";
import two from "../../assets/images/2.png";
import three from "../../assets/images/3.png";
import four from "../../assets/images/4.png";
import five from "../../assets/images/5.png";
import six from "../../assets/images/6.png";
import seven from "../../assets/images/7.png";
const initState = {
    img1: null,
    img2: null,
    img3: null,
    img4: null,
    img5: null,
    img6: null,
    img7: null
}

function CardReducer(state = initState, action) {
    switch (action.type) {
        case 1:
            if(action.id == 1) {
                return { ...state, img1: one }
            }else if(action.id == 2) {
                return { ...state, img1: two }
            }else if(action.id == 3) {
                return { ...state, img1: three }
            }else if(action.id == 4) {
                return { ...state, img1: four }
            }else if(action.id == 5) {
                return { ...state, img1: five }
            }else if(action.id == 6) {
                return { ...state, img1: six }
            }else if(action.id == 7) {
                return { ...state, img1: seven ,id:action.id }
            }
        case 2:
            if(action.id == 1) {
                return { ...state, img2: one }
            }else if(action.id == 2) {
                return { ...state, img2: two }
            }else if(action.id == 3) {
                return { ...state, img2: three }
            }else if(action.id == 4) {
                return { ...state, img2: four }
            }else if(action.id == 5) {
                return { ...state, img2: five }
            }else if(action.id == 6) {
                return { ...state, img2: six }
            }else if(action.id == 7) {
                return { ...state, img2: seven ,id:action.id }
            }
            case 3:
                if(action.id == 1) {
                    return { ...state, img3: one }
                }else if(action.id == 2) {
                    return { ...state, img3: two }
                }else if(action.id == 3) {
                    return { ...state, img3: three }
                }else if(action.id == 4) {
                    return { ...state, img3: four }
                }else if(action.id == 5) {
                    return { ...state, img3: five }
                }else if(action.id == 6) {
                    return { ...state, img3: six }
                }else if(action.id == 7) {
                    return { ...state, img3: seven ,id:action.id }
                }
            case 4:
                if(action.id == 1) {
                    return { ...state, img4: one }
                }else if(action.id == 2) {
                    return { ...state, img4: two }
                }else if(action.id == 3) {
                    return { ...state, img4: three }
                }else if(action.id == 4) {
                    return { ...state, img4: four }
                }else if(action.id == 5) {
                    return { ...state, img4: five }
                }else if(action.id == 6) {
                    return { ...state, img4: six }
                }else if(action.id == 7) {
                    return { ...state, img4: seven ,id:action.id }
                }
            case 5:
                if(action.id == 1) {
                    return { ...state, img5: one }
                }else if(action.id == 2) {
                    return { ...state, img5: two }
                }else if(action.id == 3) {
                    return { ...state, img5: three }
                }else if(action.id == 4) {
                    return { ...state, img5: four }
                }else if(action.id == 5) {
                    return { ...state, img5: five }
                }else if(action.id == 6) {
                    return { ...state, img5: six }
                }else if(action.id == 7) {
                    return { ...state, img5: seven ,id:action.id }
                }
            case 6:
                if(action.id == 1) {
                    return { ...state, img6: one }
                }else if(action.id == 2) {
                    return { ...state, img6: two }
                }else if(action.id == 3) {
                    return { ...state, img6: three }
                }else if(action.id == 4) {
                    return { ...state, img6: four }
                }else if(action.id == 5) {
                    return { ...state, img6: five }
                }else if(action.id == 6) {
                    return { ...state, img6: six }
                }else if(action.id == 7) {
                    return { ...state, img6: seven ,id:action.id}
                }
            case 7:
                if(action.id == 1) {
                    return { ...state, img7: one }
                }else if(action.id == 2) {
                    return { ...state, img7: two }
                }else if(action.id == 3) {
                    return { ...state, img7: three }
                }else if(action.id == 4) {
                    return { ...state, img7: four }
                }else if(action.id == 5) {
                    return { ...state, img7: five }
                }else if(action.id == 6) {
                    return { ...state, img7: six }
                }else if(action.id == 7) {
                    return { ...state, img7: seven , id:action.id}
                }
    }
    return state
};

export default CardReducer;