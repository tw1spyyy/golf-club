import React, { useState, useRef } from 'react';
import css from './News.module.scss';

export const News = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  const handleSubscribe = () => {
    if (name.trim() !== '' && email.trim() !== '') {
      if (email.includes('@')) {
        setShowModal(true);
      } else {
        alert('Please enter the correct email format.');
      }
    } else {
      alert('Please fill in all fields.');
    }
  };

  const closeModal = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setShowModal(false);
			setEmail('')
			setName('')
    }
  };

  return (
    <div className={css.wrapper} onClick={closeModal}>
      <div className={css.container}>
        <div className={css.title}>News</div>
        <div className={css.contactBlock}>
          <div className={css.contactText}>
            Subscribe to out latest news to know about upcoming events, tournaments and course maintenance schedules
          </div>
          <div className={css.formContainer}>
            <input
              type="text"
              className={css.inputField}
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              className={css.inputField}
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className={css.submitButton} onClick={handleSubscribe}>Subscribe</button>
          </div>
        </div>
      </div>
      {showModal && (
        <div className={css.modal}>
          <div className={css.modalContent} ref={modalRef}>
            <div>Dear {name}!</div>
            <div>Thank you for subscribing to our newsletter with an address {email}!</div>
          </div>
        </div>
      )}
    </div>
  );
};
