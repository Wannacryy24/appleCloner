import { BrowserRouter as Router ,Route, Routes } from "react-router-dom"
import Footer from "./Component/Footer/Footer"
import Header from "./Component/Header/Header"
import Module2 from "./Component/Module2/Module2"
import Module3Carousel from "./Component/Module3Carousel/Module3Carousel"
import RenderPhonesandWatch from "./Component/RenderPhonesandWatch/RenderPhonesandWatch"
import { sections } from "./Component/RenderPhonesandWatch/iphone16"
import { HoverContextProvider } from "./Component/SharedComponent/HoverProvider"
import StoreComponent from "./Component/StoreComponent/StoreComponent"
import Mac from "./Component/Header/Mac"
import Ipad from "./Component/Header/Ipad"
import Iphone from "./Component/Header/Iphone"
import Watch from "./Component/Header/Watch"
import Support from "./Component/Header/Support"
import TvHome from "./Component/Header/TvHome"
import Entertainment from "./Component/Header/Entertainment"
import Vision from "./Component/Header/Vision"


function App() {
  return (
    <Router>
      <HoverContextProvider>
          <Header/>
      <Routes>
        <Route path={'/'} element={<>
          <RenderPhonesandWatch/>
          <Module2/>
          <Module3Carousel/>
        </>}/>
      <Route path={'/Store'} element={<StoreComponent/>}/>
      <Route path={'/Mac'} element={<Mac/>}/>
      <Route path={'/iPad'} element={<Ipad/>}/>
      <Route path={'/iPhone'} element={<Iphone/>}/>
      <Route path={'/Watch'} element={<Watch/>}/>
      <Route path={'/Vision'} element={<Vision/>}/>
      <Route path={'/Support'} element={<Support/>}/>
      <Route path={'/Tv & Home'} element={<TvHome/>}/>
      <Route path={'/Entertainment'} element={<Entertainment/>}/>
      </Routes>
        <Footer sections={sections}/>
    </HoverContextProvider>
    </Router>
  )
}
export default App