import Materials  from "../home/Materials"
import Testimonials from "../home/Testimonials"
import contactBgImg from "../../assets/contact-background.jpg"
const Contact = () => {
  return (
<section>
      {/* banner */}
      <div className="w-full h-[400px] bg-no-repeat bg-cover flex items-center justify-center text-white" style={{backgroundImage:`url(${contactBgImg})`}}>
         <div>
          <h1 className="text-5xl font-bold underline underline-offset-4">Contact Us</h1>
         </div>
      </div>
      <Materials/>
      <Testimonials/>
    </section>
  )
}

export default Contact