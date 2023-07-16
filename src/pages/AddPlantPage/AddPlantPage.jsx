import React, { useState, useRef, useEffect } from 'react';
import M from 'materialize-css';

export default function AddPlantPage({handleAddPlant}) {
  const [invalidForm, setInvalidForm] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    datePlanted: '',
    lastWatered: '',
    frequency: ''
  })

  const formRef = useRef();

  useEffect(() => {
    formRef.current.checkValidity() ? setInvalidForm(false) : setInvalidForm(true);
  }, [formData]);
    
  function handleSubmit(e) {
    e.preventDefault();
    handleAddPlant(formData);
  }
  
    const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
    <h1>Add New Plant</h1>

    <form  ref={formRef} onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Plant Name*</label>
          <input
            className="form-control"
            name="name"
            placeholder="Severus Snape"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Plant Type</label>
          <input
            className="form-control"
            name="type"
            placeholder="Snake Plant"
            value={formData.type}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Date Planted</label>
          <input
            className="form-control"
            name="datePlanted"
            type='text'
            placeholder="2021"
            value={formData.datePlanted}
            onChange={handleChange} 
          />
        </div>

        <div className="form-group">
          <label>Date Last Watered*</label>
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

        <div className="form-group">
          <label>Watering Frequency*</label>
          <select className="form-control" value={formData.frequency} onChange={handleChange} name="frequency" required >
            <option value="">Select Watering Schedule</option>
            <option value="604800000">Once a Week</option>
            <option value="864000000">Every 10 Days</option>
            <option value="1209600000">Every Two Weeks</option>
            <option value="2592000000">Once a Month</option>
          </select>
        </div>

        <button
          type="submit"
          className="btn green darken-4"
          onClick={handleSubmit}
          disabled={invalidForm}
        >
          Add Plant
        </button>
      <div>
        <p>*Required</p>
      </div>
      </form>    
    </>
  )
}

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.datepicker');
  // eslint-disable-next-line
  var instances = M.Datepicker.init(elems);
});