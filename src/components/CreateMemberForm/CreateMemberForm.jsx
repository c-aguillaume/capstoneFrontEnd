import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CreateMemberForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    chapter: '',
    occupation: ''
  });

  function handleChange(evt) {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value
    });
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/v1/members', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ demographic: formData })  // send inside demographic
      });
      if (response.ok) {
        alert('Member added successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          chapter: '',
          occupation: ''
        });
      } else {
        alert('Something went wrong.');
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <form className="container mt-4" onSubmit={handleSubmit}>
      <h4>Add New Member</h4>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          className="form-control"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          className="form-control"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Phone</label>
        <input
          className="form-control"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Chapter</label>
        <input
          className="form-control"
          name="chapter"
          value={formData.chapter}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Occupation</label>
        <input
          className="form-control"
          name="occupation"
          value={formData.occupation}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}
