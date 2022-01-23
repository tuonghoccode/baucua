import React, { useState } from "react";
import "./devhandle.css";
import dia from "../../img/dia.png";
import diaup from "../../img/diaup.png";
import bau from "../../img/bau.png";
import cua from "../../img/cua.png";
import tom from "../../img/tom.png";
import ca from "../../img/ca.png";
import nai from "../../img/nai.png";
import ga from "../../img/ga.png";
import { useSelector, useDispatch } from "react-redux";

function DevHandle() {
  const [active, setActive] = useState("diaup");
  const [disabled, setDisabled] = useState(false);
  const userSelect = useSelector(state => state.userSelect)
  const isChoice = useSelector((state) => state.isChoice);
  const dispatch = useDispatch();

  let a = Math.floor(Math.random() * 6);
  let b = Math.floor(Math.random() * 6);
  let c = Math.floor(Math.random() * 6);

  const listImg = [nai, bau, ga, ca, cua, tom];

  const [img, setImg] = useState([listImg[a], listImg[b], listImg[c]]);
  const shakeClick = () => {

    if (!isChoice) alert("Vui lòng đặt tiền");
    else {
      setDisabled(true);
      setActive("diaup active");
      dispatch({
        type: "disabled",
        payload: true,
      });
      setTimeout(() => {
        a = Math.floor(Math.random() * 6);
        b = Math.floor(Math.random() * 6);
        c = Math.floor(Math.random() * 6);
        const listItem = [a, b, c];
        let total = listItem.reduce(
          (prev, cur) => prev + 2 * 1000 * userSelect[cur],
          0
        );

        setActive("diaup");
        setDisabled(false);
        dispatch({
          type: "recivePrice",
          payload: total,
        });
        dispatch({
          type: "amountAward",
          payload: total,
        });
        dispatch({
          type: "disabled",
          payload: false,
        });
        setImg([listImg[a], listImg[b], listImg[c]]);
        dispatch({
          type: "resume",
          payload: true,
        });
        dispatch({
          type: "isChoice",
          payload: false,
        });
        dispatch({
          type: "result",
          payload: [listImg[a], listImg[b], listImg[c]],
        });
      }, 3000);
    }
    
  };
  return (
    <div className="dev__handle">
      <div className="random-shake">
        <img src={dia}></img>
        <div className="item">
          <img src={img[0]}></img>
          <img src={img[1]}></img>
          <img src={img[2]}></img>
        </div>
        <div className={active}>
          <img src={diaup}></img>
        </div>
      </div>
      <div className="btn-shake">
        <button disabled={disabled} onClick={shakeClick}>
          Lắc
        </button>
      </div>
    </div>
  );
}

export default DevHandle;
