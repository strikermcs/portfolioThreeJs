import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { useForm } from 'react-hook-form'
import { v4 as uuid} from 'uuid'

import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import SectionHeader from '../components/common/SectionHeader'
import { socialLinks } from '../constants'

import MessageBox from '../components/common/MessageBox'
 
const Contact = () => {
  const { register, formState: { errors }, handleSubmit, resetField } = useForm()
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({
    id: '',
    message: '',
    error: false
  }) 

  const onSubmit = (data) => {
    
    setLoading(true)
   
    emailjs.send(
      'service_owwboma',
      'template_qttqef7',
      {
        from_name: data.name,
        to_name: 'Pavel Semeniuk',
        from_email: data.email,
        to_email: 'tellermcs@gmail.com',
        message: data.message
      },
      'aVmG8NFFdQl8I1UaV'
    ).then(() => {
      setLoading(false)
      resetField("name")
      resetField("email")
      resetField("message")
      setMessage({id: uuid(), message: 'Thank you. I will get back to you as soon as possible.', error: false})  
    }, (error) => {
      setMessage({id: uuid(), message: 'Something went wrong.', error: true})
    })

  }

  return (
    <>
    <MessageBox id={message.id} message={message.message} error={message.error}/>
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)}
      className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <SectionHeader header="Contact." subText="Get in touch"/>

        <form 
          onSubmit={handleSubmit(onSubmit)}
          className="mt-12 flex flex-col gap-8"
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium'>Your Name:</span>
            <input 
              type="text" 
              {...register("name", {required: true, minLength: 4})}
              
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6
              placeholder:text-secondary text-white 
              rounded-lg outline-none border-none font-medium"
            />
            {errors.name?.type === 'required' && <span className='pt-1 text-red-600'>Name is required!</span>}
            {errors.name?.type === 'minLength' && <span className='pt-1 text-red-600'>Name must be at least 4 characters!</span>}
         
          </label>
          
          <label className='flex flex-col'>
            <span className='text-white font-medium'>Your Email:</span>
            <input 
              type="email" 
              {...register("email", {
                required: true,
                pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              })}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6
              placeholder:text-secondary text-white 
              rounded-lg outline-none border-none font-medium"
            />
            {errors.email?.type === 'required' && <span className='pt-1 text-red-600'>Email is required!</span>}
            {errors.email?.type === 'pattern' && <span className='pt-1 text-red-600'>Invalid email format!</span>}
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium'>Your Message:</span>
            <textarea 
              rows="7" 
              {...register("message", {required: true, minLength: 10})}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6
              placeholder:text-secondary text-white 
              rounded-lg outline-none border-none font-medium"
            />
            {errors.message?.type === 'required' && <span className='pt-1 text-red-600'>Message is required!</span>}
            {errors.message?.type === 'minLength' && <span className='pt-1 text-red-600'>Message must be at least 10 characters!</span>}
          </label>

          <button type='submit'
            className='bg-tertiary py-3 px-8 outline-none text-white
            font-bold shadow-md shadow-primary rounded-xl hover:shadow-secondary'
          >{loading ? 'Sending...' : 'Send' }</button>
        </form>
        <ul className='flex justify-center border-t-2 mt-5 border-tertiary pt-4 gap-3'>
            {socialLinks.map((link) => (
              <li key={link.link}>
                <a href={link.link}>
                  <img src={link.icon} alt={link.link}/>
                </a>
              </li>
            ))}  
        </ul>
      </motion.div>

      <motion.div variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
    </>
  )
}

export default SectionWrapper(Contact, "contact")