export const depositeMoney=(amount)=>{
      return (dispatch)=>{
          dispatch({
              type:'deposite',
              payload:amount
          })
      }
}

export const withdrowMoney=(amount)=>{
    return (dispatch)=>{
        dispatch({
            type:'withdrow',
            payload:amount
        })
    }
}