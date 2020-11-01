import React from 'react';
import './DetailedCard.scss';

export default function Card(props) {
    return (
        props.cardDetails.map((a) => {
            return (
                <div id="user-detailed-card">
                    <div className="card">
                        <div className="card-header">
                            <img src={a.picture.large} alt="Avatar" className="image" />
                            <div className="user-name">{a.name.title + " " + a.name.first + " " + a.name.last}</div>
                            <div className="userID-info">{a.login.username}</div>
                        </div>
                        <div className="card-info">
                            <div className="user-info">
                                <p className="details-header">Details:</p>

                                <p className="registered-on-header"> Registered On:
                        <span className="registered-on">
                                        {" " + a.registered.date.slice(0, -14)}
                                    </span >
                                </p>
                                <p className="dob-info-header">DOB:
                        <span className="dob-info"> {" " + a.dob.date.slice(0, -14)}</span>
                                </p>
                                <p className="age-info-header">Age:
                            <span className="age-info">{" " + a.dob.age}</span>
                                </p>
                                <p className="email-info-header">Email ID:
                            <span className="email-info">{" " + a.email}</span>
                                </p>
                                <p className="phone-info-header">Phone:
                            <span className="phone-info">{" " + a.phone}</span>
                                </p>
                                <p className="mobile-info-header">Mobile:
                            <span className="mobile-info">{" " + a.cell}</span>
                                </p>
                                <p className="address-info-header">Address:
                            <span className="address-info">{
                                        " " + a.location.street.name + ", " +
                                        a.location.street.number + ", " +
                                        a.location.city + ", " +
                                        a.location.state + ", " + a.location.postcode}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })

    );
}
