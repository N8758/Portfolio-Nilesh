import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, address } = formData;

    if (!name || !email || !phone || !address) {
      setMessage('Please fill all the fields.');
    } else if (!email.includes('@') || !email.includes('.')) {
      setMessage('Enter a valid email address.');
    } else {
      setMessage('Form submitted successfully!');
      setFormData({ name: '', email: '', phone: '', address: '' });
    }
  };

  return (
    <section className="contact-section">
      <h2>Get In Touch</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name..."
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Full Email Id..."
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Full Mobile No..."
          value={formData.phone}
          onChange={handleChange}
        />
        <textarea
          name="address"
          rows="4"
          placeholder="Enter Address..."
          value={formData.address}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Submit</button>
        {message && <p className="form-message">{message}</p>}
      </form>

      <div className="contact-info">
        <div className="info-item">
          <i className="fas fa-map-marker-alt"></i>
          <h3>Address</h3>
          <p>
            Pulate Vasti, Durgapur, Tal-Rahata, Dist-Loni Bk<br />
            Pincode 413736
          </p>
        </div>
        <div className="info-item">
          <i className="fas fa-phone"></i>
          <h3>Phone</h3>
          <p>+91-8767542209</p>
        </div>
        <div className="info-item">
          <i className="fas fa-envelope"></i>
          <h3>Email</h3>
          <p><a href="mailto:nileshpulate87@gmail.com">nileshpulate87@gmail.com</a></p>
        </div>
      </div>
    </section>
  );
}
