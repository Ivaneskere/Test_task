import './RecentSearches.css'

export default function RecentSearches({ history, onSelect }) {
    if (!history.length) return null

    return (
        <section className="recentSearches">
            <h2 className="recentSearchesText">
                Останні пошуки
            </h2>

            <div className="recentSearchesBlock">
                {history.map((item) => (
                    <button
                        key={item}
                        onClick={() => onSelect(item)}
                        className="recentSearchesBtn"
                    >
                        {item}
                    </button>
                ))}
            </div>
        </section>
    )
}