function CardReducer(state = [], action) {
    
    switch (action.type) {
        case "NEXT_CLICK":
        return [...state,action.payload]    
    }
    return state
};

export default CardReducer;