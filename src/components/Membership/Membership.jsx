import React, { useState } from 'react'
import styles from './Membership.module.scss'
import img1 from '../../images/membership/1.png'
import img2 from '../../images/membership/2.png'
import img3 from '../../images/membership/3.png'


export const Membership = () => {
	const [selectedMembership, setSelectedMembership] = useState(false)
	const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [monthYear, setMonthYear] = useState('');
  const [cvc, setCVC] = useState('');

	const handleBecomeMember = () => {
    // Очищення даних
    setSelectedMembership('');
    setFirstName('');
    setLastName('');
    setCardNumber('');
    setMonthYear('');
    setCVC('');
    // Показати модальне вікно
    alert('Thank you for purchasing membership!');
  };


	return (
		<div id="membershipSection" className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.leftPart}>
					<div className={styles.contentBlock}>
						<h2 className={styles.mainTitle}>
							Membership
						</h2>
						<div className={styles.mainText}>
							At Fairway Heaven, we offer a variety of membership options
							designed to suit your individual needs and preferences. Whether
							you're a passionate golfer looking to hone your skills or a discerning
							enthusiast seeking a luxurious retreat, we have the perfect
							membership tier for you. As a member, you'll enjoy priority access
							to our championship-level courses, renowned for their scenic
							beauty and challenging layouts. Tee off with confidence knowing
							that you have reserved tee times, ensuring that you can play at
							your convenience without the hassle of waiting.
						</div>
					</div>
					<div className={styles.formBlock}>
      <form className={styles['brown-form']}>
        <div className={styles['form-group']}>
          <label htmlFor="membership">Membership</label>
          <input 
            value={selectedMembership ? selectedMembership : ''} 
            type="text" 
            id="membership" 
          />
        </div>
        <div className={styles['half-width']}>
          <div className={styles['form-group']}>
            <label htmlFor="first-name">First Name</label>
            <input 
              type="text" 
              id="first-name" 
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="last-name">Last Name</label>
            <input 
              type="text" 
              id="last-name" 
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="card-number">Card Number</label>
          <input 
            type="text" 
            id="card-number" 
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>
        <div className={styles['half-width']}>
          <div className={styles['form-group']}>
            <label htmlFor="month-year">Month/Year</label>
            <input 
              type="text" 
              id="month-year"  
              value={monthYear}
              onChange={(e) => setMonthYear(e.target.value)}
            />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="cvc">CVC code</label>
            <input 
              type="text" 
              id="cvc"  
              value={cvc}
              onChange={(e) => setCVC(e.target.value)}
            />
          </div>
        </div>
        <button type="button" onClick={handleBecomeMember}>Become a Member</button>
      </form>
    </div>
				</div>
				<div className={styles.rightPart}>
					<div className={styles.topImagesWrap}>
						<div onClick={() => setSelectedMembership('Standard Membership')} className={styles.imageWrrrap} style={{'position': 'relative'}}>
							<img className={styles.topImagesFirst} src={img1} alt="membership-1" />
							<div className={styles.topImageDiv}>
								<div className={styles.topImageDivItem}>
									Annual Fee: $1,500 - $2,500
								</div>
								<div className={styles.topImageDivItem}>
									Monthly Dues: $100 - $200
								</div>
								<h3>
									Standard Membership
								</h3>
							</div>
						</div>
						<div onClick={() => setSelectedMembership('Premium Membership')} className={styles.imageWrrrap} style={{'position': 'relative'}}>
							<img className={styles.topImagesSecond} src={img2} alt="membership-2" />
							<div style={{ left: 'auto', right: '10px', 'textAlign':'right'}} className={styles.topImageDiv}>
								<div className={styles.topImageDivItem}>
									Annual Fee: $3,000 - $5,000
								</div>
								<div className={styles.topImageDivItem}>
									Monthly Dues: $200 - $400
								</div>
								<h3>
									Premium Membership
								</h3>
							</div>
						</div>
					</div>
					<div onClick={() => setSelectedMembership('Family Membership')} className={styles.bottomImagesWrap}>
						<div className={styles.imageWrrrap} style={{'position': 'relative'}}>
							<img style={{width: '844px'}} src={img3} alt="membership-3" />
							<div className={styles.topImageDiv}>
								<div className={styles.topImageDivItem}>
									Annual Fee: $4,000 - $7,000
								</div>
								<div className={styles.topImageDivItem}>
									Monthly Dues: $300 - $500
								</div>
								<h3>
									Family Membership
								</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
