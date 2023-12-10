// calling these action creators to create an action
// return a another function 
export const depositMoney = (amount) => {

    return (dispatch)=> {
        dispatch({
            type: "deposit",
            payload: amount
        })
    }

}

export const withdrawMoney = (amount) => {
    return (dispatch)=> {
        dispatch({
            type: "withdraw",
            payload: amount
        })
    }
}