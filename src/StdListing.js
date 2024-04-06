import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const StdListing = () => {
    const [stddata, stddatachange] = useState(null);
    const navigate = useNavigate();

    const LoadDetail = (id) => {
        navigate("/student/detail/" + id);
    }
    const LoadEdit = (id) => {
        navigate("/student/edit/" + id);
    }
    const Removefunction = (id) => {
        if (window.confirm('Do you want to remove?')) {
            fetch("http://localhost:3001/student/" + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Removed successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }

    useEffect(() => {
        fetch("http://localhost:3001/student").then((res) => {
            return res.json();
        }).then((resp) => {
            stddatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])

    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>Student Listing</h2>
                </div>
                <div className="card-body">
                    <div className="divbtn">
                        <Link to="student/create" className="btn btn-success">Add New (+)</Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>DOB</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {stddata &&
                                stddata.map(item => (
                                    <tr key={item.id}>
                                        
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.address}</td>
                                        <td>{item.DOB}</td>
                                        <td>
                                           
                                            <div>City: {item.address.city}</div>
                                            <div>District: {item.address.district}</div>
                                            <div>Province: {item.address.province}</div>
                                            <div>Country: {item.address.country}</div>
                                        </td>
                                        <td>
                                            <a onClick={() => LoadEdit(item.id)} className="btn btn-success">Edit</a>
                                            <a onClick={() => Removefunction(item.id)} className="btn btn-danger">Remove</a>
                                            <a onClick={() => LoadDetail(item.id)} className="btn btn-primary">Details</a>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default StdListing;
