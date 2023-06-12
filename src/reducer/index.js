

const initState = {
    value:'默认值'
}
export const rootReducer = (state = initState,action)=>{
    console.log("rootReducer = ",state,action)
    switch (action.type){
        case "send_type":
            return Object.assign({},state,action)
        default:
            console.log("rootReducer default")
            return state
    }
}