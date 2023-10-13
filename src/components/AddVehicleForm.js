import React, { useState } from "react";

const AddVehicleForm = ({ addVehicle }) => {
  const [formData, setFormData] = useState({
    make: "",
    model: "",
    year: "",
    mileage: "",
    price: "",
    images: "",
    status: "AVAILABLE", 
    isFavorite: false, 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newVehicle = {
      ...formData,
      vehicleid: Math.random(), 
    };

    addVehicle(newVehicle);

    setFormData({
      make: "",
      model: "",
      year: "",
      mileage: "",
      price: "",
      images: "",
      status: "AVAILABLE",
      isFavorite: false,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Make:</label>
        <input
          type="text"
          name="make"
          value={formData.make}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Model:</label>
        <input
          type="text"
          name="model"
          value={formData.model}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Year:</label>
        <input
          type="number"
          name="year"
          value={formData.year}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Mileage:</label>
        <input
          type="number"
          name="mileage"
          value={formData.mileage}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Images URL:</label>
        <input
          type="text"
          name="images"
          value={formData.images}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Status:</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="AVAILABLE">AVAILABLE</option>
          <option value="SOLD">SOLD</option>
          <option value="BLOCKED">BLOCKED</option>
        </select>
      </div>
      <div>
        <label>Is Favorite:</label>
        <input
          type="checkbox"
          name="isFavorite"
          checked={formData.isFavorite}
          onChange={(e) => setFormData({ ...formData, isFavorite: e.target.checked })}
        />
      </div>
      <div>
        <button type="submit">Add Car</button>
      </div>
    </form>
  );
};

export default AddVehicleForm;
