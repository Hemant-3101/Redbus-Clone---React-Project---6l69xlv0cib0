import React from 'react';
import img1 from '../../Images/COLOMBIA.png';
import img2 from '../../Images/INDIA.png';
import img3 from '../../Images/INDONESIA.png';
import img4 from '../../Images/MALAYSIA.png';
import img5 from '../../Images/PERU.png';
import img6 from '../../Images/SINGAPORE.png';

const Countries = () => {
  return (
    <div>
        <div className='countries-main'>
            <section className='countries-section'>
                <div className='countries-heading'>OUR GLOBAL PRESENCE</div>
            </section>
            <div className='countries-list'>
                <div className='row'>
                    <div className='cc'>
                        <img src={img1} alt='hi' className='images'/>
                        <span className='countries-list-name'>COLOMBIA</span>
                    </div>
                    <div className='cc'>
                        <img src={img2} alt='hi' className='images'/>
                        <span className='countries-list-name'>INDIA</span>
                    </div>
                    <div className='cc'>
                        <img src={img3} alt='hi' className='images'/>
                        <span className='countries-list-name'>INDONESIA</span>
                    </div>
                </div>
                <div className='row'>         
                    <div className='cc'>
                        <img src={img4} alt='hi' className='images'/>
                        <span className='countries-list-name'>MALAYSIA</span>
                    </div>
                    <div className='cc'>
                        <img src={img5} alt='hi' className='images'/>
                        <span className='countries-list-name'>PERU</span>
                    </div>
                    <div className='cc'>
                    <img src={img6} alt='hi' className='images'/>
                    <span className='countries-list-name'>SINGAPORE</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='grow-body'>
            <section className='growing'>
                <div className='growing-heading'>THE NUMBERS ARE GROWING!</div>
            </section>
                <div className='grow-body2'>
                    <div className='growing-col'>
                        <div className='grow'>customers</div>
                        <div className='grow1'>36 M</div>
                        <div className='grow2'>redBus is trusted by over 36 million happy customers globally</div>
                    </div>
                    <div className='growing-col'>
                        <div className='grow'>operators</div>
                        <div className='grow1'>3500</div>
                        <div className='grow2'>network of over 3500 bus operators worldwide</div>
                    </div>
                    <div className='growing-col'>
                        <div className='grow'>bus tickets</div>
                        <div className='grow1'>220+ M</div>
                        <div className='grow2'>Over 220 million trips booked using redBus</div>
                    </div>
                </div>
            
        </div>
    </div>
  )
}

export default Countries;
