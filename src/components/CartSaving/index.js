import React from "react";

export default ({quatityOfProducts, history}) => {
  return quatityOfProducts ? <span className="number-itens" onClick={() => {history.push('/cart'); window.location.reload();}}>{quatityOfProducts}</span> : null
} 
