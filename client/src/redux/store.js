import { createStore } from "redux";
import rootReducer from "./reducer";

const initState = { 
  resume:false,
  disabled:false,
  totalMoney: 10000,
  amountAward: 0,
  isChoice: false,
  result:[],
  userSelect: [
    0,
    0,
    0,
    0,
    0,
    0, //bau, cua , tom ,ca ,nai ,ga
  ],
};

const store = createStore(rootReducer, initState);

export default store;
