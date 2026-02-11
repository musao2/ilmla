import Online from "./components/Online"
import Features from "./zabihulloh/Features"
import Header from './components/Header'
import Hero from './components/Hero'
import Tadbir from "./zabihulloh/Tadbir"
import Biz from "../src/components/BizHaqimizda"
function App(){
  return(
    <>
    <Header/>
    <Hero/>
    <Biz/>
    <Features />
    <Tadbir/>
    <Online/>
    </>
  )
}
export default App