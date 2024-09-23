import Footer from "./Component/Footer/Footer"
import Header from "./Component/Header/Header"
import Module2 from "./Component/Module2/Module2"
import Module3Carousel from "./Component/Module3Carousel/Module3Carousel"
import RenderPhonesandWatch from "./Component/RenderPhonesandWatch/RenderPhonesandWatch"
import { sections } from "./Component/RenderPhonesandWatch/iphone16"
function App() {
  return (
    <>
      <Header/>
      <RenderPhonesandWatch/>
      <Module2/>
      <Module3Carousel/>
      <Footer sections={sections}/>
    </>
  )
}
export default App
