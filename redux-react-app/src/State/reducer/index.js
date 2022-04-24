import { combineReducers } from "redux";
import amountreducer from "./amountreducer";

const reducer=combineReducers({
    amount:amountreducer,
}
  )
  export default reducer