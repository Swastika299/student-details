import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const StdDetail = () => {
    const { stdid } = useParams(); 

    const [stddata, stddatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:3001/student/" + stdid).then((res) => {
            return res.json();
        }).then((resp) => {
            stddatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [stdid]); 
    return (
        <div>
            <div className="container">
                <div className="card row" style={{ "textAlign": "left" }}>
                    <div className="card-title">
                        <h2>Student Detail</h2>
                    </div>
                    <div className="card-body">
                        {stddata && (
                            <div>
                                <h2>The Student name is: <b>{stddata.name}</b> ({stddata.id})</h2>
                                <h3>Contact Details</h3>
                                <h5>Email: {stddata.email}</h5>
                                <h5>Phone: {stddata.phone}</h5>
                                <h5>DOB: {stddata.dob}</h5>
                               
                                <h5>Address:</h5>
                                <p>City: {stddata.address.city}</p>
                                <p>District: {stddata.address.district}</p>
                                <p>Province: {stddata.address.province}</p>
                                <p>Country: {stddata.address.country}</p>

                                <Link className="btn btn-danger" to="/">Back to Listing</Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StdDetail;
