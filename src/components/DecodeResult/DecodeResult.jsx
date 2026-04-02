import './DecodeResult.css'

export default function DecodeResult({ result }) {
    if (!result.length) return null

    return (
        <section className="decRes">
            <h2 className="decResText">
                Результати розшифровки
            </h2>

            <div className="decResBlock">
                {result.map((item, index) => (
                    <article
                        key={`${item.Variable}-${index}`}
                        className="decResCards"
                    >
                        <h3 className="decResText3">
                            {item.Variable}
                        </h3>
                        <p className="decResPar">
                            {item.Value}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    )
}