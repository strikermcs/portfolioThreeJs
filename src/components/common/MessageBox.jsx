import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const MessageBox = ({ id, message, error }) => {
    const [isOpen, setIsOpen] = useState(false)
    
    useEffect(() => {
        if(message) {
            setIsOpen(true)
              
            setTimeout(() => {
                setIsOpen(false)
            }, 6000)
        } 
    }, [id])

   
    return (
        <motion.div animate={{x: isOpen ? -320 : 0}} 
        className={`w-[320px] pl-5 pr-5 fixed top-28 right-[-320px] ${error ?  'bg-red-600' : 'bg-green-600' } z-50 border-l-4`}>
            <p className="pt-4 pb-4">{message}</p>
        </motion.div>
    )
}

export default MessageBox