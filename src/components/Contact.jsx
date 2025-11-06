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
        <div className="flex items-center justify-between col-span-2 min-h-screen ">
            <div className="mx-20 w-full bg-white/10 border p-8 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300">
                <form className="flex flex-col" ref={form} onSubmit={sendEmail}>
                    <label htmlFor="name" className="text-left mb-2">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full p-2 mb-4 rounded-lg bg-white/20 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />

                    <label htmlFor="email" className="text-left mb-2">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full p-2 mb-4 rounded-lg bg-white/20 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <label htmlFor="subject" className="text-left mb-2">Subject:</label>
                    <input
                        type="subject"
                        id="subject"
                        name="subject"
                        className="w-full p-2 mb-4 rounded-lg bg-white/20 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <label htmlFor="message" className="text-left mb-2">Message:</label>
                    <input
                        type="message"
                        id="message"
                        name="message"
                        maxLength={20000}
                        className="w-full h-24 p-2 mb-4 rounded-lg bg-white/20 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    {/* <button type="submit" className="w-[110px] flex gap-2 items-center justify-center  h-auto px-4 py-2 rounded-xl text-white ">
                        Send <MdSend className="" />

                    </button> */}
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="w-[110px] flex gap-2 items-center justify-center h-auto px-4 py-2 rounded-xl text-white bg-blue-500"
                        >
                            Send <MdSend />
                        </button>
                    </div>
                </form>
            </div>
            <div className="flex w-full">
                <div className="mx-20 bg-black/50 p-10 scale-105 rounded-lg shadow-lg hover:shadow-xl hover:scale-110 transition-transform duration-300">
                    <h1 className="mb-4">Get in Touch</h1>
                    <p className="mb-4">I'd love to hear from you! Whether you have a question, a project idea, or just want to say hello, feel free to reach out.</p>
                    <p className="mb-2"><strong>Email: </strong>mail.ashek@gmail.com</p>
                    <p className="mb-2"><strong>Facebook: </strong><a className="hover:text-red-500" target="_blank" href="https://www.facebook.com/avshek.rajsingh/">facebook.com/avshek.rajsingh</a> </p>
                    <p className="mb-2"><strong>Instagram: </strong><a className="hover:text-red-500" target="_blank" href="https://www.instagram.com/avshek_raj/">instagram.com/avshek_raj/</a> </p>
                    <p className="mb-2"><strong>LinkedIn: </strong><a className="hover:text-red-500" target="_blank" href="https://www.linkedin.com/in/avshek-raj/">linkedin.com/in/avshek-raj/</a> </p>
                    <p className="mb-2"><strong>Phone: </strong>9808986899</p>
                    </div>
                        
            </div>
        </div>

    </>
}