import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const PrintTicket = () => {
    const navigate = useNavigate()
    const locationP = useLocation()
    const Tno = Math.floor(Math.random()*1000)
    const {busObj, booked, date} = locationP.state
    console.log(locationP)
    return (
        <>
            <div className="ticket-body">
                <div className="success-status">
                    <h1>Ticket Booked Seccessfully</h1>
                </div>
                <div className="ticket-details-body">
                    <div className="bus-list">
                        <div className="title-sort-list">
                            <div >
                                <h4>{busObj.busName}</h4><h3>{busObj.type}</h3>
                            </div>
                            <div>
                                <h4>Ticket No : {Tno}</h4>
                            <h3>{date}</h3>
                            </div>
                        </div>
                        <div>
                            <h4>{busObj.departureTime}</h4>
                            <h3>{busObj.source}</h3>
                        </div>
                        <div>
                            <h3>{busObj.arrivalTime}</h3>
                            <h3>{busObj.destination}</h3>
                        </div>
                        <div>
                            
                            <h4>Seat no</h4><h3>{booked.join(" ")}</h3>
                        </div>
                        <div className="price">
                            <h3>INR</h3> <h4>{busObj.ticketPrice*booked.length}</h4>
                        </div>
                    </div>
                </div>
                <div className="book-ticket-container">
                <button onClick={()=>window.print()}>Print</button>
                    <button onClick={()=> navigate('/')}>Go Back</button>
                </div>
            </div>
        </>
    )
}
export default PrintTicket