import aboutBgImg from "../../assets/about-background.jpg"
import Expriences from "../home/Expriences"
const About = () => {
  return (
    <section>
      {/* banner */}
      <div className="w-full h-[400px] bg-no-repeat bg-cover flex items-center justify-center text-white" style={{backgroundImage:`url(${aboutBgImg})`}}>
         <div>
          <h1 className="text-5xl font-bold underline underline-offset-4">About Page</h1>
         </div>
      </div>
      <Expriences/>
    </section>
  )
}

export default About