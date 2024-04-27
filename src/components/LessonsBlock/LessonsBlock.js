import React, { useState } from 'react'
import css from './LessonaBlock.module.scss'
import { GrouplList, IndividualList, instructorsList } from "./initData"
import { DatePicker, Button, message, Select, Input, Modal } from 'antd';

const { Option } = Select;

export const LessonsBlock = () => {

	const [selectedDate, setSelectedDate] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [lessonType, setLessonType] = useState(null);
  const [levelType, setLevelType] = useState(null);
  const [phone, setPhone] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = () => {
    if (selectedDate && selectedOption && lessonType && levelType) {
      setModalVisible(true);
    } else {
      message.error('Please fill in all fields');
    }
  };

  const handleModalOk = () => {
    setModalVisible(false);
		setSelectedDate(null)
		setSelectedOption(null)
		setLessonType(null)
		setLevelType(null)
		setPhone(null)
  };
	const isDateBooked = (date) => {
    // В цьому прикладі дати зайняті від 1 по 5 число кожного місяця
    // Вам потрібно замінити цю логіку на вашу
    return date.date() >= 1 && date.date() <= 16;
  };


  const handleModalCancel = () => {
    setModalVisible(false);
  };
	return (
		<div className={css.wrapper}>
			<div className={css.containerTop}>
				<div className={css.aboutBlock}>
						<div className={css.aboutBlockSub}>
							<h4>
								Individual
							</h4>
							<div className={css.aboutBlockList}>
								{IndividualList.map((el) => {
									return <div className={css.aboutBlockListItem}>
												<h6>{el.title}</h6>
												<div>duration: {el.duration}</div>
												<div>cost: {el.cost}</div>
												<div>{el.time}</div>
												<div>{el.days}</div>
									</div>
								})}
							</div>
						</div>
						<div className={css.aboutBlockSub}>
							<h4>
								Group
							</h4>
							<div className={css.aboutBlockList}>
								{GrouplList.map((el) => {
									return <div className={css.aboutBlockListItem}>
												<h6>{el.title}</h6>
												<div>duration: {el.duration}</div>
												<div>cost: {el.cost}</div>
												<div>{el.time}</div>
												<div>{el.days}</div>
									</div>
								})}
							</div>
						</div>
				</div>
				<div className={css.rentBlock}>
          <h1>Check availability here</h1>
          <h4>
            Select a date and select a personal trainer to book your training session
          </h4>
          <div className={css.formWrapper}>
            <DatePicker
              onChange={handleDateChange}
							disabledDate={isDateBooked}
							value={selectedDate}
              style={{ width: 500, marginBottom: 10 }}
            />
            <Select
              placeholder="Choose Instructor"
              onChange={value => setSelectedOption(value)}
              style={{ width: 500, marginBottom: 10 }}
							value={selectedOption}
            >
              <Option value="John Smith">John Smith</Option>
              <Option value="Sarah Johnson">Sarah Johnson</Option>
              <Option value="Michael Lee">Michael Lee</Option>
            </Select>
            <Select
              placeholder="Choose lesson type"
              onChange={value => setLessonType(value)}
              style={{ width: 500, marginBottom: 10 }}
							value={lessonType}
            >
              <Option value="Individual">Individual</Option>
              <Option value="Group">Group</Option>
            </Select>
            <Select
							value={levelType}
              placeholder="Choose lesson level"
              onChange={value => setLevelType(value)}
              style={{ width: 500, marginBottom: 10 }}
            >
              <Option value="for beginners">For beginners</Option>
              <Option value="intermediate">Intermediate</Option>
              <Option value="advanced">Advanced</Option>
            </Select>
            <Input
              placeholder="Enter your phone number"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              style={{ width: 500, marginBottom: 10 }}
            />
            <Button  style={{ width: 500, marginBottom: 10 }} type="primary" onClick={handleSubmit}>Book Lesson</Button>
          </div>
        </div>
			</div>
			<div className={css.mt32}>
				<div className={css.subtitle}>
					our instructors
				</div>
			<div className={css.containerInstructors}>
				{instructorsList.map((el) => {
					return <div key={el.id} className={css.instrItem}>
							<img src={el.img} alt="img" />
							<div className={css.instrItemCont}>
								<div>
									{el.name}
								</div>
								<ul>
									{el.facts.map(item => {
											return <li className={css.listItem}>
											{item}
									</li>
									})}
								</ul>
							</div>
					</div>
				})}
			</div>
			</div>
			<Modal
        title="Booking Confirmation"
        visible={modalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
      >
        <p>You have booked a {lessonType} lesson, level {levelType}, with trainer {selectedOption} on {selectedDate && selectedDate.format('DD/MM/YYYY')}.</p>
        <p>Your phone number: {phone}</p>
      </Modal>

		</div>
	)
}
