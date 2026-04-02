import { useEffect, useState } from 'react'
import { decodeVin } from '../../api/vinApi'
import DecodeResult from '../../components/DecodeResult/DecodeResult'
import RecentSearches from '../../components/RecentSearches/RecentSearches'
import VinForm from '../../components/VinForm/VinForm'
import './HomePage.css'

export default function HomePage() {
    const [result, setResult] = useState([])
    const [history, setHistory] = useState(() => {
        const saved = localStorage.getItem('vinHistory')
        return saved ? JSON.parse(saved) : []
    })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [apiMessage, setApiMessage] = useState('')

    useEffect(() => {
        localStorage.setItem('vinHistory', JSON.stringify(history))
    }, [history])

    const handleDecode = async (vinVal) => {
        if (typeof vinVal !== 'string') {
            setResult([])
            setError('Некоректний VIN')
            setApiMessage('')
            return
        }

        const vin = vinVal.trim().toUpperCase()

        if (!/^[A-HJ-NPR-Z0-9]{17}$/.test(vin)) {
            setResult([])
            setError('Некоректний VIN')
            setApiMessage('')
            return
        }

        try {
            setLoading(true)
            setError('')
            setApiMessage('')

            const data = await decodeVin(vin)
            console.log(data)
            if (data.Message) {
                setApiMessage(data.Message)
            }
            if (!data || !Array.isArray(data.Results)) {
                setResult([])
                setError('Не вдалося отримати дані за цим VIN')
                return
            }
            const filterArray = data.Results.filter(item => item.Value)
            if (filterArray.length > 0) {
                setResult(filterArray)

                setHistory(prev => {
                    const updateHistory = [vin, ...prev.filter(v => v !== vin)]
                    return updateHistory.slice(0, 3)
                })
            } else {
                setResult([])
                setError("Дані для цього VIN не знайдені")
            }
        }
        catch (e) {
            setResult([])
            setApiMessage('')
            console.error(e)
            setError('Сталась помилка при запиті')
        } finally {
            setLoading(false)
        }
    }

    return (
        <section className="homePage">
            <div className="homePageBlock">
                <VinForm onSubmit={handleDecode} />
                <RecentSearches history={history} onSelect={handleDecode} />

                {loading && (
                    <p className="homePageBlockMassage homePageBlockMassageLoad">
                        Завантаження...
                    </p>
                )}

                {error && (
                    <p className="homePageBlockMassage homePageBlockMassageEror">
                        {error}
                    </p>
                )}

                {apiMessage && (
                    <p className="homePageBlockMassage homePageBlockMassageMassageFromApi">
                        {apiMessage}
                    </p>
                )}

                <DecodeResult result={result} />
            </div>
        </section>
    )
}
