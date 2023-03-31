import React from "react";
import {ReactComponent as Wap} from '../logos/whatsapp.svg';

function IntroComponent() {

    return (
        <div className="container main-con">
            <div className="container">
                <h4>Campus Ambassadors</h4>
            </div>
            <div className="mx-auto p-2 desc">
                <p>
                XLRI Online Learning presents to you the Batch Ambassadors for the 2 year Online Postgraduate Diploma
                 (Business Management, Finance, Human Resource). PGD aspirants can get in touch with the batch ambassadors 
                for any queries related to (XLRI Online Learning - 2 year Online Flagship program)
                </p>
            </div>

            <div>
                <button className="btn btn-light btn-outline-secondary">
                    <Wap />
                    Join our WhatsApp group
                </button>
            </div>
        </div>
    )
}

export default IntroComponent