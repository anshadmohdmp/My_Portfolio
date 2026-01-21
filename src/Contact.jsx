import React, { useState } from 'react'
import { FiSend } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {

const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Project Inquiry',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone,
    service_type: formData.subject,
    message: formData.message,
  };

  const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
  const enquirytemplateId = import.meta.env.VITE_EMAIL_ENQUIRY_TEMPLATE_ID;
  const replytemplateId = import.meta.env.VITE_EMAIL_REPLY_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

  // Send email to YOU
  emailjs.send(serviceId, enquirytemplateId, templateParams, publicKey)
  // Send auto-reply to USER
  emailjs.send(serviceId, replytemplateId, templateParams, publicKey)
    .then(() => {
      // Show modal
      setShowModal(true);

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'Project Inquiry',
        message: ''
      });
    })
    .catch((error) => {
      console.error(error);
      alert("Something went wrong.");
    });
};



  const inputStyle = {
    width: '100%',
    padding: '14px 16px',
    backgroundColor: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(172, 215, 71, 0.12)',
    borderRadius: '8px',
    color: 'white',
    fontSize: '14px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    transition: 'all 0.3s ease',
    outline: 'none'
  };

  return (
    <div id='contact' className='contact'>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                
        <div style={{ 
          width: '600px',
          backgroundColor: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '12px',
          padding: '40px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)'
        }}>
          <h1 style={{fontWeight:"bold",fontStyle:"italic", textAlign:"center", backgroundColor:"transparent"}}>
            <span>GET</span>
            <span style={{ color: "rgba(172, 215, 71, 1)" }}> I</span>
            <span style={{ color: "rgba(172, 215, 71, 1)", textDecoration: "underline", textDecorationColor: "rgb(172, 215, 71)", textUnderlineOffset: "15px"}}>N TO</span>
            <span style={{ color: "rgba(172, 215, 71, 1)" }}>UCH.</span>
          </h1>
          <form style={{backgroundColor:"transparent"}} onSubmit={handleSubmit}>
            {/* Name Input */}
            <div style={{display:"flex",marginTop:"60px",backgroundColor:"transparent"}}>
            <div style={{ marginBottom: '20px',width:"48%", marginRight:"4%" }}>
              
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = 'rgb(172, 215, 71)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(172, 215, 71, 0.3)'}
                required
              />
            </div>

            {/* Email Input */}
            <div style={{ marginBottom: '20px', width:"48%" }}>
              
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = 'rgb(172, 215, 71)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(172, 215, 71, 0.3)'}
                required
              />
            </div>
            </div>

            {/* Phone Input */}
            <div style={{display:"flex",marginTop:"10px",backgroundColor:"transparent"}}>
            <div style={{ marginBottom: '20px', width:"48%", marginRight:"4%" }}>
            
              <input
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone"
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = 'rgb(172, 215, 71)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(172, 215, 71, 0.3)'}
              />
            </div>

            {/* Subject Dropdown */}
            <div style={{ marginBottom: '20px', width:"48%" }}>
              
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                style={{
                  ...inputStyle,
                  cursor: 'pointer',
                  appearance: 'none',
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='rgb(172, 215, 71)' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 12px center',
                  paddingRight: '36px'
                }}
                onFocus={(e) => e.target.style.borderColor = 'rgb(172, 215, 71)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(172, 215, 71, 0.3)'}
                required
              >
                <option value="Project Inquiry">Select Service</option>
                <option value="Web App Development">Web App Development</option>
                <option value="Front End Development">Front End Development</option>
                <option value="Back End Systems">Back End Systems</option>
                <option value="Full Stack Solution">Full Stack Solution</option>
              </select>
            </div>
            </div>

            {/* Message Input */}
            <div style={{ marginBottom: '30px', marginTop:"30px" }}>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your vision..."
                style={{
                  ...inputStyle,
                  minHeight: '120px',
                  resize: 'vertical',
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                }}
                onFocus={(e) => e.target.style.borderColor = 'rgb(172, 215, 71)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(172, 215, 71, 0.3)'}
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '14px 24px',
                backgroundColor: 'rgb(172, 215, 71)',
                color: 'black',
                border: 'none',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: 'bold',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 16px rgba(172, 215, 71, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 12px 24px rgba(172, 215, 71, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 8px 16px rgba(172, 215, 71, 0.3)';
              }}
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
      {showModal && (
  <div style={{
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999
  }}>
    <div style={{
      backgroundColor: 'rgba(255,255,255,0.05)',
      border: '1px solid rgba(252, 252, 252, 0.5)',
      padding: '40px',
      borderRadius: '12px',
      textAlign: 'center',
      color: 'white',
      width: '600px',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)'
    }}>
      <h2 style={{color: "rgba(250, 250, 250, 1)",backgroundColor:"transparent"}}>Thank You!</h2>
      <p style={{backgroundColor:"transparent"}}>Your message has been sent successfully. I will get back to you soon.</p>
      <button
        onClick={() => setShowModal(false)}
        style={{
          marginTop: '20px',
          padding: '10px 40px',
          backgroundColor: 'rgba(172, 215, 71,1)',
          color: 'black',
          border: 'none',
          borderRadius: '8px',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}
      >
        Close
      </button>
    </div>
  </div>
)}

    </div>
  )
}

export default Contact