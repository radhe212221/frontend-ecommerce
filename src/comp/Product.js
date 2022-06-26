import React, { useContext } from "react";
import {AppContext} from '../index' 
export default function Product(props) {
  const {state}=useContext(AppContext)
  const loggedin=state?.loggedin
  let x = props?.data;
  return (
    <div className="item">
      <img src={x?.image} width={50} />
      {loggedin && (
        <div>
          <button><i className="fa fa-shopping-cart"></i> (?)</button>
        </div>
      )}
    </div>
  );
}
