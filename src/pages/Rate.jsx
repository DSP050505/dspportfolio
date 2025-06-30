import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const Rate = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleRate = (value) => {
    setRating(value);
    setSubmitted(true);
  };

  return (
    <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#18191b', color: '#fff' }}>
      <div style={{ background: '#232526', borderRadius: '2.2rem', padding: '3.2rem 2.7rem', boxShadow: '0 8px 48px 0 rgba(0,0,0,0.22)', minWidth: 340, maxWidth: 420, width: '100%', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{ color: '#00bfae', fontWeight: 900, fontSize: '2.5rem', marginBottom: '0.7rem', letterSpacing: '1px' }}>Rate Us</h1>
        {!submitted ? (
          <>
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
          </>
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