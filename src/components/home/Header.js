import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom"
import switchBtn from "../../Images/switch_btn.png"
import building from "../../Images/search-building.png"
import ValidateInputComp from "../general/ValidateInputComp";

function Header() {
  const navigate = useNavigate()
  const [fromS, setFromS] = useState("")
  const [toDest, setToDest] = useState("")
  const [getDate, setGetDate] = useState("")
  const [submit, setSubmit] = useState(false)
  const [errorMsg, setErrorMsg] = useState({
    fromS: false,
    toDest: false,
    getDate: false
  })

  const checkDate = (e) => {
    let date = new Date()
    let day = date.getDate();
    if (day <= e.target.value.slice(-2)) {
      console.log("done")
      setGetDate(e.target.value)
      setErrorMsg({...errorMsg,getDate:false})
    } else {
      console.log("sad")
      setErrorMsg({...errorMsg,getDate:true})
    }

    //setGetDate(e.target.value)

    console.log(e.target.value.slice(-2))
  }
  const swapFn = () => {
    const temp = fromS
    setFromS(toDest)
    setToDest(temp)
  }

  const submitFn = () => {
    const pattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
    let obj = {
      fromS: false,
      toDest: false,
      getDate: false
    }
    if (!ValidateInputComp(pattern, fromS)) {
      obj.fromS = true
      console.log("input 1")
    } else {
      obj.fromS = false
    }
    if (!ValidateInputComp(pattern, toDest)) {
      obj.toDest = true
      console.log("input 2")
    } else {

      obj.toDest = false
    }
    if (!getDate) {
      obj.getDate = true
      //setErrorMsg({...errorMsg,getDate:true})
    }
    setErrorMsg(obj)
    setSubmit(!submit)


  }
  useEffect(() => {
    if (!errorMsg.fromS && !errorMsg.toDest && !errorMsg.getDate && fromS) {

      navigate('/bus-tickets', { state: { fromS, toDest, getDate } })
    }
    console.log(errorMsg, "useEffect")
  }, [submit])

  return (
    <>
      <header>

        <div className="header-search-box">
          <div className="header-search-inner-box">
            <div className="header-search-input-container">
              <div className={errorMsg.fromS ? "header-input-wraper error-msg" : "header-input-wraper "}>
                <label htmlFor="source">
                  <img src={building} alt="building icon" />
                </label>
                <div className="search-input-text">
                  <label htmlFor="source">FROM</label>
                  <input type="text" id="source" value={fromS} onChange={(e) => setFromS(e.target.value)} />

                </div>
              </div>
              <div className={errorMsg.toDest ? "header-input-wraper error-msg" : "header-input-wraper "}>
                <label htmlFor="destination">
                  <img className="dest_image" src={building} alt="building icon" />
                </label>
                <div className="search-input-text">
                  <label htmlFor="destination">TO</label>
                  <input type="text" id="destination" value={toDest} onChange={(e) => setToDest(e.target.value)} />

                </div>
              </div>
              <div className="header-input-wraper-date">
                {/* <label htmlFor="date">
                  <img src={calender} alt="calender-icon" />
                </label> */}
                <input type="date" className={errorMsg.getDate ? "error-msg" : "date-pick"} value={getDate} onChange={(e) => checkDate(e)} />
              </div>
              <div className="header-input-wraper-btn" onClick={submitFn} >
                <h4>Search Bus</h4>
              </div>
            </div>
            <div className="header-search-switch-btn">
              <img src={switchBtn} alt="switch-btn" onClick={swapFn} />

            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
