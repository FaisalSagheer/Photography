
import { useState } from 'react'
import axios from 'axios';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/ReactToastify.css'
export default function Contact() {

  const [reciever, setReciever] = useState({
    fullName: "",
    company: "",
    email: "",
    PhoneNumber: "",
    message: ""
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReciever((prev) => ({ ...prev, [name]: value }))
  }

  const handleFormSubmit = async(e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/send-email', reciever);
      toast.success('Email sent successfully!');
    } catch (error) {
      toast.error('Failed to send email.');
    }
  }

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <ToastContainer/>

    
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Contact Us</h2>
      </div>
      <form onSubmit={handleFormSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className='sm:col-span-2'>
            <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">
              FullName
            </label>
            <div className="mt-2.5">
              <input
                id="full-name"
                name="fullName"
                type="text"
                value={reciever.fullName}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm/6 font-semibold text-gray-900">
              Company/Organization/Marriage
            </label>
            <div className="mt-2.5">
              <input
                id="company"
                name="company"
                type="text"
                value={reciever.company}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                value={reciever.email}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-gray-900">
              Phone number
            </label>
            <div className="mt-2.5">
              <div className="flex rounded-md bg-white outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">

                <input
                  id="phone-number"
                  name="PhoneNumber"
                  type="text"
                  value={reciever.PhoneNumber}
                  className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                value={reciever.message}
                onChange={handleInputChange}
              />
            </div>
          </div>
         
        </div>
        <div className="mt-10">
          <button
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Let's talk
          </button>
        </div>
      </form>

      {/* <div className='flex justify-center pt-20'>
      <span>{reciever.fullName}</span>
      <br />
      <span>{reciever.company}</span>
      <br />
      <span>{reciever.email}</span>
      <br />
      <span>{reciever.PhoneNumber}</span>
      <br />
      <span>{reciever.message}</span>
      </div> */}
    </div>
  )
}
