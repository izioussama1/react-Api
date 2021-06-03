import React from 'react';
import pic from '../img/phil.jpg';

const Body1 = () => {
    return (
        <>
            <div className="divsec2">
                <h6 className="h6" id="AU">About Us</h6>
                <p className="psec2">Our Philosophy</p>
            </div>

            <div className="flexx">
                <div className="flediv">
                    <img src={pic} />
                </div>

                <div className="philo">
                    <div>
                        <h5>01</h5>
                        <span>Sustainable</span><br /><p>You may have noticed that lot of people love spending time outdoors. We are very proud of our pristine nature, and we intend to keep it that way!</p>
                    </div>
                    <div>
                        <h5>02</h5>
                        <span>Fair & Share</span><br /><p>We respect nature. Therefore the countries is constantly working to improve sustainability in all business segments, including travel and tourism. </p>
                    </div>
                    <div>
                        <h5>03</h5>
                        <span>Experience</span><br /><p>We want you to have the best possible experience on your trip. We would like to ask you to treat the countries with the respect it deserves so everyone visiting can have the same experience you have.
</p>
                    </div>
                </div>

            </div>
        </>
    );
}
export default Body1;
