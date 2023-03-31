import React from "react";
import {ReactComponent as XLRILogo} from '../logos/xlri-logo.svg';
import {ReactComponent as Aacse} from '../logos/aacse.svg';
import {ReactComponent as Logo1} from '../logos/amba.svg';

function HeaderComponent() {

    return (
        <div className="navbar navbar-expand-lg bg-body-tertiary header-box">
            <div className="d-inline-flex p-2">
                <XLRILogo />
            </div>
            <div className="p-2 flex-grow-1">
                <h3 className="header-title">Xavier Online Learning (XOL)</h3>
            </div>
            <div>
                <Aacse />
                <Logo1 />
            </div>
        </div>
    )
}

export default HeaderComponent