import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./userhandle.css";
import bau from "../../img/bau.png";
import cua from "../../img/cua.png";
import tom from "../../img/tom.png";
import ca from "../../img/ca.png";
import nai from "../../img/nai.png";
import ga from "../../img/ga.png";
function UserHandle() {
  const userSelect = useSelector((state) => state.userSelect);
  const money = useSelector((state) => state.totalMoney);
  const disabled = useSelector(state => state.disabled)
  const dispatch = useDispatch();
  const userChoiceHandle = (data) => {
    console.log(data);
   if (money>0){
      dispatch({
        type: "userSelect",
        payload: data,
      });
      dispatch({
        type: "totalMoney",
        payload: 1000,
      });
      dispatch({
        type: "isChoice",
        payload: true,
      });
   }
   else{ 
     alert('Not Enough Money')
   }
  };

  return (
    <div className="user__handle">
      <div

        className="bau"
        onClick={() =>
           !disabled&&userChoiceHandle(
            userSelect.map((item, id) => (id == 0 ? (item = item + 1) : item))
          )
        }
      >
        {/* <img src={bau}></img> */}
        <div className="counter">{userSelect[0]}</div>
      </div>
      <div
        className="cua"
        onClick={() =>
          !disabled&&userChoiceHandle(
            userSelect.map((item, id) => (id == 1 ? (item = item + 1) : item))
          )
        }
      >
        {/* <img src={cua}></img> */}
        <div className="counter">{userSelect[1]}</div>
      </div>
      <div
        className="tom"
        onClick={() =>
          !disabled&&userChoiceHandle(
            userSelect.map((item, id) => (id == 2 ? (item = item + 1) : item))
          )
        }
      >
        {/* <img src={tom}></img> */}
        <div className="counter">{userSelect[2]}</div>
      </div>
      <div
        className="ca"
        onClick={() =>
          !disabled&&userChoiceHandle(
            userSelect.map((item, id) => (id == 3 ? (item = item + 1) : item))
          )
        }
      >
        {/* <img src={ca}></img> */}
        <div className="counter">{userSelect[3]}</div>
      </div>
      <div
        className="nai"
        onClick={() =>
          !disabled&&userChoiceHandle(
            userSelect.map((item, id) => (id == 4 ? (item = item + 1) : item))
          )
        }
      >
        {/* <img src={nai}></img> */}
        <div className="counter">{userSelect[4]}</div>
      </div>
      <div
        className="ga"
        onClick={() =>
          !disabled&&userChoiceHandle(
            userSelect.map((item, id) => (id == 5 ? (item = item + 1) : item))
          )
        }
      >
        {/* <img src={ga}></img> */}
        <div className="counter">{userSelect[5]}</div>
      </div>
    </div>
  );
}

export default UserHandle;
