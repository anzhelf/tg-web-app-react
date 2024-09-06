import { useEffect, useState } from 'react'
import { useTelegram } from '../../hooks/useTelegram'
import './Form.css'

const Form = () => {
	const [country, setCountry] = useState('')
	const [sity, setSity] = useState('')
	const [subject, setSubject] = useState('physical')
	const { tg } = useTelegram()

	useEffect(() => {
		tg.MainButton.setParams({ text: 'Отправить данные' })
	}, [])

	useEffect(() => {
		if (!country || !sity) {
			tg.MainButton.hide()
		} else {
			tg.MainButton.show()
		}
	}, [])

	const handleChangeCountry = e => {
		setCountry(e.target.value)
	}
	const handleChangeSity = e => {
		setSity(e.target.value)
	}
	const handleChangeSubject = e => {
		setSubject(e.target.value)
	}

	return (
		<form className={'form'}>
			<h3>Введите ваши данные</h3>
			<input
				onChange={handleChangeCountry}
				type='text'
				className={'input'}
				placeholder='Страна'
				value={country}
			/>
			<input
				onChange={handleChangeSity}
				type='text'
				className={'input'}
				placeholder='Улица'
				value={sity}
			/>
			<select value={subject} onChange={handleChangeSubject} className='select'>
				<option value={'physical'}>Физ. лицо</option>
				<option value={'legal'}>Юр. лицо</option>
			</select>
		</form>
	)
}

export default Form
