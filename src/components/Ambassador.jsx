import React, { useState, useEffect } from "react";
import {ReactComponent as Search} from '../logos/search.svg';
import {ReactComponent as Load} from '../logos/loading.svg';
import {ReactComponent as LknIn} from '../logos/linked-small.svg';

function Ambassador() {

    const [studentInfo, setStudentInfo] = useState([]);

    useEffect(() => {
        fetch("https://xlri.edu/api/xol/sample#")
        .then(response => response.json())
        .then(items => setStudentInfo(items.data))
        .catch(error => console.error('Error fetching data:', error));
      },[]);

    return (
        <div>

            <div className="mx-auto p-2 abassador-search">
                <form className="amb-form">
                <input type="search" name="searchName" className="inp-box" />
                <button className="btn btn-sm btn-outline-secondary">
                    <Search />
                </button>
                </form>
            </div>

            <div className="grid-container card-master">
            {
                studentInfo.map(item => {
                    return (
                        <div>
                            <div className="card mb-3 card-specs">
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src="https://xlri.edu/images/xol-2022/XOH22002.jpg" className="img-fluid card-pic" />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{item.name}</h5>
                                            <p className="card-text">{item.email}</p>
                                            <p className="card-text">
                                                <LknIn />
                                                {item.linkedin_profile}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            </div>

            <div>
                <button className="btn btn-outline-secondary">
                    <Load />
                    Load More
                </button>
            </div>
        </div>
    )
}

export default Ambassador