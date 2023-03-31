import React from "react";
import {ReactComponent as BigLogo} from '../logos/xlri-logo.svg';
import {ReactComponent as Fb} from '../logos/fb.svg';
import {ReactComponent as Lnk} from '../logos/lin.svg';
import {ReactComponent as Insta} from '../logos/insta.svg';

function FooterDetails() {

    return(
        <div className="d-flex pen-ultimate">
            <div className="p-2 flex-fill align-self-center">
                <BigLogo />
            </div>

            <div className="p-2 flex-fill align-self-center">
                <div>
                    <p>Quick Links</p>
                </div>
                <div>
                    <span>
                        <a href="">About XLRI</a>
                        <span className="px-2">|</span>
                        <a href="">All Programs</a>
                        <span className="px-2">|</span>
                        <a href="">Key Benefits</a>
                        <span className="px-2">|</span>
                        <a href="">Contact Us</a>
                    </span>
                </div>
            </div>

            <div className="p-2 flex-fill align-self-center">
                <div>
                    <p>Follow Us</p>
                </div>
                <div>
                    <span>
                    <span className="px-2"><Fb /></span>
                    <span className="px-2"><Lnk /></span>
                    <span className="px-2"><Insta /></span>     
                    </span>
                </div>
            </div>


            
        </div>
    )
}

export default FooterDetails