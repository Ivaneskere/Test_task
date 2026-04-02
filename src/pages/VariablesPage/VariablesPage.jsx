import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { getVehicleVariables } from '../../api/vinApi'
import './VariablesPage.css'

export default function VariablesPage() {
    const [variables, setVariables] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        const fetchVariables = async () => {
            try {
                setLoading(true)
                setError('')

                const data = await getVehicleVariables()

                if (!data || !Array.isArray(data.Results)) {
                    setVariables([])
                    setError('Не вдалося отримати список змінних')
                    return
                }

                setVariables(data.Results)
            } catch (error) {
                console.error(error)
                setVariables([])
                setError('Сталася помилка під час завантаження змінних')
            } finally {
                setLoading(false)
            }
        }

        fetchVariables()
    }, [])

    return (
        <section className="variablesPage">
            <h1 className="variablesPageText">Vehicle Variables</h1>

            {loading && (
                <p className="variablesPagePar variablesPageParLoad">
                    Завантаження...
                </p>
            )}

            {error && (
                <p className="variablesPagePar variablesPageError">
                    {error}
                </p>
            )}

            {!loading && !error && (
                <ul className="variablesPageList">
                    {variables.map(variable => (
                        <li key={variable.ID} className="variablesPageItem">
                            <h2 className="variablesPageTextName">
                                {variable.Name}
                            </h2>

                            <p>
                                {variable.Description?.replace(/<[^>]+>/g, '') || 'Опис відсутній'}
                            </p>

                            <Link
                                to={`/variables/${variable.ID}`}
                                className="variablesPageLink"
                            >
                                Детальніше
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    )
}