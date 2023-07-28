const numAction = (type,id) => {
    return {
        type,
        id
    }
};
const nextClick = (index)=>{
    return {
        type:"NEXT_CLICK",
        payload:index
    }
}
export {
    numAction,
    nextClick
};