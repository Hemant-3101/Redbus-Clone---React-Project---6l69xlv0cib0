import React, { useEffect, useState } from "react";

import { useNavigate, useLocation } from "react-router-dom";
import loader from "../../Images/loading-splash.gif"
import steering from "../../Images/bus_steering.png"
import empty from "../../Images/empty_seat.png"
import bookedS from "../../Images/booked_seat.png"



const ViewSeat = (props) => {
    const {booked, setBooked} = props
    let obj = []
    const[seats,setSeats] = useState([])
    

    const bookSeat = (index)=>{
        if(booked.includes(index)){
            let seatList = [...booked]
            let seatStatus = [...seats]
            seatList.splice(index,1)
            seatStatus[index].clicked = false
            setBooked(seatList)
            setSeats(seatStatus)
        }else{
            let seatList = [...booked]
            let seatStatus = [...seats]
            seatList.push(index)
            seatStatus[index].clicked = true
            setBooked(seatList)
            setSeats(seatStatus)
        }
    }
    

    useEffect(() => {
        if(obj.length===0){
            console.log(obj.length,"length")
            for(let i =0;i<30;i++){
                let data = {
                    id:i,
                    clicked:false
                }
                obj.push(data)
            }
        console.log(obj,"after adding")
            setSeats(obj)
        }
        
    }, [])
    return (
        <div className="bus-body">
            <div className="driver">
                <img src={steering} className="steering" alt="steering" />
            </div>
            <div className="seat-container">
                <div>
                    {seats.map((item,index)=>(
                        <>
                        <div className="seat-check" onClick={()=>bookSeat(index)}>
                            <img src={item.clicked? bookedS : empty} alt="seat_pic" className="seat-image" />
                        </div>
                        </>
                    ))}
                </div>
                
            </div>
        </div>
    )
}

const RenderBuses = (props) => {
    const navigate = useNavigate()
    const { sortFn, setBuses } = props
    const [booked, setBooked] = useState([])
    const clickFn = (index) => {
        let list = [...props.data]
        list[index].clicked = !list[index].clicked
        setBuses(list)

    }
    const confirmBooked = (busObj)=>{
        if(booked.length>0){

            navigate('/booked-ticket',{state:{busObj, booked,date:props.date}})
        }
    }

    return (
        <>

            {
                props.data.length === 0 ? <h1>No Bus Found</h1> :
                    <div className="bus-search-list-container">
                        <div className="sortng-tab">
                            <div className="title-sort-tab">
                                <div className="bus-title">
                                    <h4>{props.data.length} Buses</h4><h3>Found</h3>
                                </div>
                                <div>
                                    <h4>SORT BY:</h4>
                                </div>
                            </div>
                            <div onClick={() => sortFn("departureTime", props.data)}>
                                <h3>Departure</h3>
                            </div>
                            <div onClick={() => sortFn("arrivalTime", props.data)}>
                                <h3>Arrival</h3>
                            </div>
                            <div onClick={() => sortFn("rating", props.data)}>
                                <h3>Rating</h3>
                            </div>
                            <div onClick={() => sortFn("ticketPrice", props.data)}>
                                <h3>Fare</h3>
                            </div>
                        </div>
                        {
                            props.data.map((bus, index) => (
                                <>
                                    <div className="bus-list">
                                        <div className="title-sort-list">
                                            <div >
                                                <h4>{bus.busName}</h4><h3>{bus.type}</h3>
                                            </div>
                                            <div>
                                                <button className="view-seat" onClick={() => clickFn(index)} >View Seat</button>
                                            </div>
                                        </div>
                                        <div>
                                            <h4>{bus.departureTime}</h4>
                                            <h3>{bus.source}</h3>
                                        </div>
                                        <div>
                                            <h3>{bus.arrivalTime}</h3>
                                            <h3>{bus.destination}</h3>
                                        </div>
                                        <div>
                                            <h3>{bus.rating}/10</h3>
                                        </div>
                                        <div className="price">
                                            <h3>INR</h3> <h4>{bus.ticketPrice}</h4>
                                        </div>
                                    </div>
                                    {bus.clicked && <ViewSeat booked={booked} setBooked={setBooked}/>}
                                    {bus.clicked && 
                                    <div className="book-ticket-container">
                                        <button onClick={()=>confirmBooked(bus)}>Book Ticket</button>
                                    </div>
                                    }

                                    {/* <div>
                                    <h1>{bus.busName}</h1>
                                    <h1>{bus.ticketPrice}</h1>
                                    <h1>{bus.arrivalTime}</h1>
                                    <h1>{bus.departureTime}</h1>
                                    <h1>{bus.source}</h1>
                                    <h1>{bus.destination}</h1>
                                </div> */}
                                </>
                            ))
                        }
                    </div>
            }

        </>
    )
}

const BusList = () => {

    const locationP = useLocation()
    const [buses, setBuses] = useState(null)
    let initalData

    const getBus = async () => {
        try {

            const data = await fetch(`https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses?source=${locationP.state.fromS}&destination=${locationP.state.toDest}`)
            initalData = await data.json()
            initalData.map((obj) => {
                obj.type = "Volvo Sleeper (2+1)"
                obj.rating = Math.floor((Math.random() * 8) + 1)
                obj.clicked = false
            })
            console.log(initalData, "test")

            setBuses(initalData)


        } catch (error) {
            console.log(error)
        }


    }
    const sortFn = (keyName, initalData) => {

        let list = [...initalData]
        console.log(list, "sorting fn")
        if (keyName === "rating") {
            console.log("rating sort")
            list.sort((a, b) => {
                if (a[keyName] > b[keyName]) {
                    return -1
                }
                if (a[keyName] < b[keyName]) {
                    return 1
                }
            })

            setBuses(list)

        } else if (keyName === "departureTime" || keyName === "arrivalTime") {
            console.log(keyName)
            console.log(list[0][keyName].slice(-2))

            list.sort((a, b) => {
                let c = a[keyName].slice(0, 1)
                let d = b[keyName].slice(0, 1)
                let timeA = a[keyName].slice(-2)
                let timeB = b[keyName].slice(-2)
                if (timeA === "PM") {
                    c = +"12" + c
                }
                if (timeB === "PM") {
                    d = +"12" + d
                }
                return c - d
            })
            setBuses(list)
        } else {
            console.log(keyName)

            list.sort((a, b) => a[keyName] - b[keyName])
            setBuses(list)
        }
    }
    useEffect(() => {
        getBus()
    }, [])
    return (
        <>
            <div className="bus-search-container">
                {buses ? <RenderBuses date={locationP.state.getDate} setBuses={setBuses} initalData={initalData} sortFn={sortFn} data={buses} /> : <img src={loader} alt="loader" />}
                
            </div>

        </>
    )
}
export default BusList