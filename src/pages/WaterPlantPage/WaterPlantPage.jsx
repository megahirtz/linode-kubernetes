import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import M from 'materialize-css';


export default function WaterPlantPage(props) {
    const location = useLocation();
    const [invalidForm, setInvalidForm] = useState(true);
    const [formData, setFormData] = useState(location.state.plant);
    const formRef = useRef();

    useEffect(() => {
        formRef.current.checkValidity() ? setInvalidForm(false) : setInvalidForm(true);
    }, [formData]);
    
    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleWaterPlant(formData);
    }
    
    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        })
    }    

    return (
        <>
            <h1>Water Your Plant!</h1>
            <form autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
                <div className="form-group">
                <label>Last Watered Date</label>
                <input
                    className="form-control"
                    name="lastWatered"
                    type="datetime-local"
                    placeholder="2-1-21"
                    value={formData.lastWatered}
                    onChange={handleChange}
                    required
                />
                </div>

                <button
                type="submit"
                className="btn green darken-4"
                onClick={handleSubmit}
                disabled={invalidForm}
                >
                Confirm Watering
                </button>
                <Link to="/plants">Cancel</Link>
            </form>            
        </>
    )
}

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker');
    // eslint-disable-next-line
    var instances = M.Datepicker.init(elems);
  });