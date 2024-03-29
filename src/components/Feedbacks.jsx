import { motion } from "framer-motion"

import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import SectionHeader from "./common/SectionHeader"
import { fadeIn, textVariant } from "../utils/motion"
import { testimonials } from "../constants"

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation';

const FeedbackCard = ({ index, testimonial, name, designation, company, image }) => {
  return (
    <motion.div variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl w-full"
    >
      <p className="text-white font-black text-[48px]">"</p>
      <div className="mt-1">
        <p className="text-white tracking-wider text-[18px]">{testimonial}</p>
        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span> {name}
            </p>
            <p className="mt-1 text-secondary text-[12px]">
              {designation} {company}
            </p>
          </div>
          <img src={image} alt={`feedback-by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  )
}

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <SectionHeader header="Testimonials." subText="What others say"/>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14`}>
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={50}
          navigation
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          className="px-2 md:px-10"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide>
               <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
            </SwiperSlide>   
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, "") 