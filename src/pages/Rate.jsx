import React, { useState, useRef } from 'react';
import { FaStar } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Rate = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const form = useRef();

  const handleRate = (value) => {
    setRating(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    if (!rating) {
      setError('Please select a rating.');
      return;
    }
    if (!message.trim()) {
      setError('Please enter a message.');
      return;
    }
    setSending(true);
    // Send via EmailJS
    emailjs.send(
      'service_d09wa9c',
      'template_um9wgzm',
      {
        from_name: `Rating: ${rating} star${rating > 1 ? 's' : ''}`,
        from_email: 'noreply@portfolio.com',
        message: message,
      },
      'KbWBGoyFUOS7C0htE'
    )
    .then(() => {
      setSuccess(true);
      setSubmitted(true);
      setSending(false);
      setMessage('');
    }, () => {
      setError('Failed to send rating. Please try again.');
      setSending(false);
    });
  };

  return (
    <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#18191b', color: '#fff' }}>
      <div style={{ background: '#232526', borderRadius: '2.2rem', padding: '3.2rem 2.7rem', boxShadow: '0 8px 48px 0 rgba(0,0,0,0.22)', minWidth: 340, maxWidth: 420, width: '100%', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{ color: '#00bfae', fontWeight: 900, fontSize: '2.5rem', marginBottom: '0.7rem', letterSpacing: '1px' }}>Rate Us</h1>
        {!submitted ? (
          <form onSubmit={handleSubmit} ref={form} style={{ width: '100%' }}>
            <div style={{ color: '#bdbdbd', fontSize: '1.18rem', marginBottom: '2.2rem', fontWeight: 500, letterSpacing: '0.2px' }}>
              How would you rate your experience?
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.3rem', marginBottom: '2.2rem' }}>
              {[1,2,3,4,5].map((val) => (
                <FaStar
                  key={val}
                  size={44}
                  style={{
                    cursor: 'pointer',
                    transition: 'color 0.18s, transform 0.18s',
                    color: (hover || rating) >= val ? '#FFD700' : '#444',
                    filter: (hover || rating) >= val ? 'drop-shadow(0 0 8px #FFD70088)' : 'none',
                    transform: hover === val ? 'scale(1.18)' : 'scale(1)'
                  }}
                  onClick={() => handleRate(val)}
                  onMouseEnter={() => setHover(val)}
                  onMouseLeave={() => setHover(0)}
                  tabIndex={0}
                  aria-label={`Rate ${val} star${val > 1 ? 's' : ''}`}
                />
              ))}
            </div>
            <textarea
              style={{
                width: '100%',
                padding: '0.8rem 1rem',
                borderRadius: '0.8rem',
                border: 'none',
                background: '#18191b',
                color: '#fff',
                fontSize: '1rem',
                marginBottom: '0.7rem',
                outline: 'none',
                border: '1.5px solid #232526',
                transition: 'border 0.18s',
                resize: 'none',
                minHeight: 80
              }}
              placeholder="Write your feedback..."
              value={message}
              onChange={e => setMessage(e.target.value)}
              required
            />
            <button
              type="submit"
              style={{
                marginTop: '0.7rem',
                background: '#00ffe0',
                color: '#18191b',
                fontWeight: 700,
                fontSize: '1.1rem',
                border: 'none',
                borderRadius: '1.2rem',
                padding: '0.8rem 2.2rem',
                cursor: 'pointer',
                transition: 'background 0.18s, color 0.18s, boxShadow 0.18s',
                boxShadow: '0 2px 8px rgba(0,255,224,0.10)'
              }}
              disabled={sending}
            >
              {sending ? 'Sending...' : 'Submit'}
            </button>
            {error && <div style={{ color: '#ff4d4f', marginTop: '1rem', fontWeight: 600 }}>{error}</div>}
            {success && <div style={{ color: '#00bfae', marginTop: '1rem', fontWeight: 600 }}>Thank you for your review!</div>}
          </form>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', animation: 'fadeIn 0.7s' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.3rem', marginBottom: '1.2rem' }}>
              {[1,2,3,4,5].map((val) => (
                <FaStar
                  key={val}
                  size={44}
                  style={{
                    color: rating >= val ? '#FFD700' : '#444',
                    filter: rating >= val ? 'drop-shadow(0 0 8px #FFD70088)' : 'none',
                  }}
                />
              ))}
            </div>
            <h2 style={{ color: '#FFD700', fontWeight: 800, marginTop: '0', fontSize: '1.5rem', letterSpacing: '0.5px' }}>Thank you for your review!</h2>
          </div>
        )}
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Rate; 