import "../App.css"
import fullLogo from  "../../public/images/FullLogo.png"

export const Footer = () => {
    return <>
        <footer className="text-center py-6 sm:py-8 mt-auto mb-0 px-4">
            <div className="footer-content flex flex-col items-center gap-2 sm:gap-3">
                <p className="text-xs sm:text-sm">Build by Abhishek Raj Singh | Software engineer</p>
                <a href="https://github.com/avshek-raj" target="#" className="text-xs sm:text-sm hover:text-red-500 transition-colors">github.com/avshek-raj</a>
            </div>
        </footer>
    </>
}