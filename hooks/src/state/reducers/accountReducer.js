// returns a state
// input : intial state

const reducer = (state = 0 , action) => {

    // typically with reducers use switch to output logic based on action type
    switch(action.type){
        case 'deposit':
            return state+ action.payload;
        case 'withdraw':
            return state - action.payload;
        default:
            return state;    
    }
}

export default reducer; 