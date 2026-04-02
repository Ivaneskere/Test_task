import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getVehicleVariableById } from '../../api/vinApi'
import './VariablesDetailsPage.css'

export default function VariableDetailsPage() {
    const { variableId } = useParams()

    const [variable, setVariable] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        const fetchVariable = async () => {
            try {
                setLoading(true)
                setError('')

                const data = await getVehicleVariableById(variableId)

                if (!data) {
                    setVariable(null)
                    setError('Змінну не знайдено')
                    return
                }

                setVariable(data)
            } catch (error) {
                console.error(error)
                setVariable(null)
                setError("Помилка при завантаженні")
            } finally {
                setLoading(false)
            }
        }

        fetchVariable()
    }, [variableId])

    return (
        <section className="variableSection">
            {loading && <p className="variableMassageOrError variableMassageLoad">Завантаження...</p>}
            {error && <p className="variableMassageOrError variableMassageError">{error}</p>}

            {!loading && !error && variable && (
                <>
                    <h1 className="variableText">{variable.Name}</h1>
                    <p className="variablePar"><strong>ID:</strong> {variable.ID}</p>
                    <div
                        className="variableBlock"
                        dangerouslySetInnerHTML={{
                            __html: variable.Description || '<p>Опис відсутній</p>'
                        }}
                    />
                </>
            )}
        </section>
    )
}