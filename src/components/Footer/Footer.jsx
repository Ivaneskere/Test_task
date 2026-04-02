import './Footer.css'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footerBlock">

                <p>
                    {new Date().getFullYear()} VIN Decoder
                </p>

                <div className="footerBlockForLink">
                    <a
                        href="https://vpic.nhtsa.dot.gov/api/"
                        target="_blank"
                        className="footerLink"
                    >
                        API
                    </a>
                </div>

            </div>
        </footer>
    )
}