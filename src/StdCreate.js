import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const StdCreate = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [dob, setDob] = useState("");
    const [city, setCity] = useState("");
    const [district, setDistrict] = useState("");
    const [province, setProvince] = useState("");
    const [country, setCountry] = useState("Nepal");
    const [profilePicture, setProfilePicture] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const studentData = {
            name,
            email,
            phone,
            dob,
            address: {
                city,
                district,
                province,
                country
            },
            profilePicture
        };

       

        navigate('/');
    };

    const provinceOptions = [
        "Province 1",
        "Province 2",
        "Bagmati Province",
        "Gandaki Province",
        "Lumbini Province",
        "Karnali Province",
        "Sudurpashchim Province"
    ];

    return (
        <div>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handleSubmit}>
                        <div className="card" style={{ textAlign: "left" }}>
                            <div className="card-title">
                                <h2>Student Create</h2>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input
                                                required
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>City</label>
                                            <input
                                                value={city}
                                                onChange={(e) => setCity(e.target.value)}
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                   
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>District</label>
                                            <input
                                                value={district}
                                                onChange={(e) => setDistrict(e.target.value)}
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Province</label>
                                            <select
                                                value={province}
                                                onChange={(e) => setProvince(e.target.value)}
                                                className="form-control"
                                            >
                                                <option value="">Select Province</option>
                                                {provinceOptions.map((province, index) => (
                                                    <option key={index} value={province}>{province}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Country</label>
                                            <input
                                                value={country}
                                                onChange={(e) => setCountry(e.target.value)}
                                                className="form-control"
                                                disabled
                                            />
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
                                                type="date"
                                                value={dob}
                                                onChange={(e) => setDob(e.target.value)}
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    
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
                                        <div className="form-group">
                                            <button className="btn btn-success" type="submit">Save</button>
                                            <Link to="/" className="btn btn-danger">Back</Link>
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

export default StdCreate;
