import React from 'react';
import './Deliver.css';
import first from '../../Images/First.png'
import second from '../../Images/benefits.png';
import third from '../../Images/Brand_Trust_Report.png';
import fourth from '../../Images/lowest_Fare.png';
import fifth from '../../Images/Eye_for_Travel1.png';
import sixth from '../../Images/Business_Standard1.png';
import seventh from '../../Images/customer_care.png';





function Deliver() {
    return (
        <>
            <div className="main">
                <img src={first} alt="ghj" className="promiseimg" />
                <h1 className='heading'>WE PROMISE TO DELIVER</h1>
                <div className="container">
                    <div className="box box_1">
                        <div className="inimg">
                            <img src={second} alt="benefit_img" className="imgg" />
                        </div>
                        <div className="intext">UNMATCHED BENEFITS</div>
                        <div className="para">We take care of your travel beyond ticketing by providing you with innovative and unique <br></br>benefits.</div>
                    </div>
                    <div className="box box_2">
                        <div className="inimg">
                            <img src={seventh} alt="customer_img" className="imgg" />
                        </div>
                        <div className="intext">SUPERIOR CUSTOMER<br></br>SERVICE</div>
                        <div className="para">We put our experience and relationships to good use and are available to solve your travel<br></br> issues.</div>
                    </div>
                    <div className="box box_3">
                        <div className="inimg">
                            <img src={fourth} alt="lowest_img" className="imgg" />

                        </div>
                        <div className="intext">LOWEST PRICES</div>
                        <div className="para">We always give you the lowest price with the<br></br> best partner offers.</div>
                    </div>

                </div>
            </div>
            <div className="award_box">
                <h1 className="heading2">AWARDS & RECOGNITION</h1>
                <div className="award_container">
                    <div className="award_smallbox">
                        <img src={sixth} alt="bussiness_img" className="imgg2" />
                        <div className="para2">
                            Most Innovative<br></br> Company
                        </div>
                    </div>
                    <div className="award_smallbox">
                        <img src={third} alt="brand_img" className="imgg2" />
                        <div className="para2">
                            Most Trusted<br></br> Brand
                        </div>
                    </div>
                    <div className="award_smallbox">
                        <img src={fifth} alt="eyetravel_img" className="imgg2" />
                        <div className="para2">
                            Mobile Innovation <br></br>Award
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Deliver;