import "./app.css";
import DevHandle from "./components/Dev/DevHandle";
import UserHandle from "./components/User/UserHandle";
import { useSelector,useDispatch } from "react-redux";
import logo from './img/bct.png'
import logoText from "./img/logo-text.png";
function App() {
  
  const money = useSelector(state => state.totalMoney)
  const resume = useSelector((state) => state.resume);
  const amountAward = useSelector((state) => state.amountAward);
  const img = useSelector((state) => state.result);
  const dispatch = useDispatch();
  const resumeHandle = () => {
    dispatch({
      type:"resume",
      payload:false
    })
    dispatch({
      type: "userSelect",
      payload: [0,0,0,0,0,0],
    });
  }
  console.log(money)

  return (
    <div className="App">
      <div className="header">
        <div className="logo">
          <img src={logo}></img>
        </div>
        <div className="user">
          <div className="info">Lâm Tường</div>
          <div className="money">{new Intl.NumberFormat().format(money)}</div>
        </div>
      </div>
      <div className="logo-text">
        <img src={logoText}></img>
      </div>
      <div className="content">
        <UserHandle />
        <DevHandle />
      </div>
      {resume && (
        <div className="footer">
          <div className="footer_content">
            <div className="show_result">
              <img src={img[0]}></img>
              <img src={img[1]}></img>
              <img src={img[2]}></img>
            </div>
            <div className="notification">
              Chúc Mừng Bạn Nhận Được {new Intl.NumberFormat().format(amountAward)}
            </div>
            <div className="resume-btn">
              <button onClick={resumeHandle}>Tiếp tục</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
