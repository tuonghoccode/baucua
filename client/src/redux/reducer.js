

const rootReducer = (state, action) => {
    switch (action.type) {
      case "totalMoney": {
        return {
          ...state,
          totalMoney: state.totalMoney - action.payload,
        };
      }
      case "recivePrice" :{
          return {
              ...state,
              totalMoney: state.totalMoney + action.payload
          }
      }
      case "amountAward": {
          return {
            ...state,
            amountAward: action.payload
          };
      }
      case "userSelect": {
        return {
          ...state,
          userSelect: action.payload,
        };
      }
      case "disabled" : {
          return {
              ...state,
              disabled: action.payload
          }
      }
      case "resume" :{
          return {
              ...state,
              resume:action.payload
          }
      }
      case "isChoice":{
          return {
              ...state,
              isChoice: action.payload
          }
      }
      case "result" : {
        return {
          ...state,
          result: action.payload
        }
      }
      default:
        return state;
    }
}
export default rootReducer