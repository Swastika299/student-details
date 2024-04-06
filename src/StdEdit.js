import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const StdEdit = () => {
    const { stdid } = useParams();

    useEffect(() => {
        fetch("http://localhost:3001/student/" + stdid)
            .then((res) => res.json())
            .then((resp) => {
                setName(resp.name);
                setEmail(resp.email);
                setPhone(resp.phone);
                setAddress(resp.address);
                setDob(resp.dob);
                setActive(resp.isactive);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [dob, setDob] = useState("");
    const [active, setActive] = useState(true);
    const [profilePicture, setProfilePicture] = useState(null); 
    const [validation, setValidation] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const stdData = {
            id: stdid,
            name,
            email,
            phone,
            address,
            dob,
            isactive: active,
            profilePicture 
        };

        fetch("http://localhost:3001/student/" + stdid, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(stdData)
        })
            .then((res) => {
                alert("Saved successfully.");
                navigate("/");
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    return (
        <div>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handleSubmit}>
                        <div className="card" style={{ textAlign: "left" }}>
                            <div className="card-title">
                                <h2>Student Edit</h2>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input
                                                required
                                                value={name}
                                                onMouseDown={() => setValidation(true)}
                                                onChange={(e) => setName(e.target.value)}
                                                className="form-control"
                                            />
                                            {name.length === 0 && validation && (
                                                <span className="text-danger">Enter the name</span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="form-control"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                className="form-control"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>DOB</label>
                                            <input
                                                value={dob}
                                                onChange={(e) => setDob(e.target.value)}
                                                className="form-control"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Address</label>
                                            <input
                                                value={address}
                                                onChange={(e) => setAddress(e.target.value)}
                                                className="form-control"
                                            />
                                        </div>
                                    </div>

                                    {/* Profile Picture */}
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Profile Picture</label>
                                            <input
                                                type="file"
                                                onChange={(e) => setProfilePicture(e.target.files[0])}
                                                className="form-control"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-check">
                                            <input
                                                checked={active}
                                                onChange={(e) => setActive(e.target.checked)}
                                                type="checkbox"
                                                className="form-check-input"
                                            />
                                            <label className="form-check-label">Is Active</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button className="btn btn-success" type="submit">
                                                Save
                                            </button>
                                            <Link to="/" className="btn btn-danger">
                                                Back
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default StdEdit;
