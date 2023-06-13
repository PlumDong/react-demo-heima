

const initState = {
    count:0
}
export const rootReducer = (state = initState,action)=>{
    console.log("rootReducer = ",state,action)
    switch (action.type){
        case "send_action":
            return {count:state.count+1}
        default:
            console.log("rootReducer default")
            return state
    }
}