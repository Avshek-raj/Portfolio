import { useRef, useState } from "react"
import { MdSend } from "react-icons/md"
import { Form } from "react-router"
import emailjs from "@emailjs/browser"
import { Popup } from "../ui/Popup"

export const Contact = () => {
    const form = useRef();
    const [popupObj, setPopupObj] = useState(null);
    
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ckvy2hv', 'template_9nwgl8p', form.current, {publicKey: 'K6aZHar6zL-pCBKOP'}).then((res) => {
            setPopupObj({title: "Success", message: "Message sent sucessfully. Will get back to you as soon as possible."})
            form.current.reset();
        }, (error)=> {
            setPopupObj({title: "Error", message: "Something went wrong. Please try again."})
            console.log(error);
        })
    }

    return <>
    <Popup popupObj={popupObj}/>
        <h1 className="">Contact Me</h1>
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-0 min-h-screen px-4 sm:px-6 md:px-10 lg:px-20 py-8 sm:py-12">
            <div className="w-full lg:w-1/2 bg-white/10 border p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300">
                <form className="flex flex-col" ref={form} onSubmit={sendEmail}>
                    <label htmlFor="name" className="text-left mb-2 text-sm sm:text-base">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full p-2 mb-4 rounded-lg bg-white/20 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                    />

                    <label htmlFor="email" className="text-left mb-2 text-sm sm:text-base">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full p-2 mb-4 rounded-lg bg-white/20 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                    />
                    <label htmlFor="subject" className="text-left mb-2 text-sm sm:text-base">Subject:</label>
                    <input
                        type="subject"
                        id="subject"
                        name="subject"
                        className="w-full p-2 mb-4 rounded-lg bg-white/20 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                    />
                    <label htmlFor="message" className="text-left mb-2 text-sm sm:text-base">Message:</label>
                    <input
                        type="message"
                        id="message"
                        name="message"
                        maxLength={20000}
                        className="w-full h-24 p-2 mb-4 rounded-lg bg-white/20 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                    />
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="w-auto flex gap-2 items-center justify-center px-4 py-2 rounded-xl text-white bg-blue-500 text-sm sm:text-base hover:bg-blue-600 transition-colors"
                        >
                            Send <MdSend />
                        </button>
                    </div>
                </form>
            </div>
            <div className="w-full lg:w-1/2 bg-black/50 p-6 sm:p-8 lg:p-10 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 lg:scale-105">
                <h1 className="mb-4 text-base sm:text-lg">Get in Touch</h1>
                <p className="mb-4 text-xs sm:text-sm leading-relaxed">I'd love to hear from you! Whether you have a question, a project idea, or just want to say hello, feel free to reach out.</p>
                <div className="space-y-2 text-xs sm:text-sm">
                    <p className="mb-2"><strong>Email: </strong><span className="break-all">mail.ashek@gmail.com</span></p>
                    <p className="mb-2"><strong>Facebook: </strong><a className="hover:text-red-500 break-all" target="_blank" href="https://www.facebook.com/avshek.rajsingh/">facebook.com/avshek.rajsingh</a> </p>
                    <p className="mb-2"><strong>Instagram: </strong><a className="hover:text-red-500 break-all" target="_blank" href="https://www.instagram.com/avshek_raj/">instagram.com/avshek_raj/</a> </p>
                    <p className="mb-2"><strong>LinkedIn: </strong><a className="hover:text-red-500 break-all" target="_blank" href="https://www.linkedin.com/in/avshek-raj/">linkedin.com/in/avshek-raj/</a> </p>
                    <p className="mb-2"><strong>Phone: </strong>9808986899</p>
                </div>
            </div>
        </div>

    </>
}