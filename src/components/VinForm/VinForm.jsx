import { useState } from 'react'
import './VinForm.css'

export default function VinForm({ onSubmit }) {
    const [vin, setVin] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(vin)
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="vinFrom"
        >
            <div className="vinFormBlock">
                <h1 className="vinFormText">VIN Decoder</h1>
                <p className="vinFormPar">
                    Введіть VIN-код автомобіля
                </p>
            </div>

            <div className="vinFormBlockForForm">
                <input
                    type="text"
                    value={vin}
                    onChange={(e) => setVin(e.target.value)}
                    placeholder="Наприклад: 1FTFW1CT5DFC10312"
                    className="vinFormInput"
                />

                <button
                    type="submit"
                    className="vinFormInputBtn"
                >
                    Розшифрувати
                </button>
            </div>
        </form>
    )
}