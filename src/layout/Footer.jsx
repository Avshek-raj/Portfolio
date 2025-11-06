import "../App.css"
import fullLogo from  "../../public/images/FullLogo.png"

export const Footer = () => {
    return <>
        <footer className="text-center py-4 mt-auto mb-0">
            
            <div className="footer-content flex flex-col items-center">
                {/* <img src={fullLogo} className=" rounded-full object-cover h-40 w-40 mb-2"></img> */}
                <p>Build by Abhishek Raj Singh | Software engineer</p>
                <a href="https://github.com/avshek-raj" target="#" className="">github.com/avshek-raj</a>
            </div>
            {/* <div className="footer-bottom">
                <p className="">© 2025 Abhishek Raj Singh. All rights reserved.</p>
            </div> */}
        </footer>
    </>
}