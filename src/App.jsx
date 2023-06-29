import { Content } from "./components/Content"
import { Decoration } from "./components/Decoration"
import { Header } from "./components/Header"
import { Presentation } from "./components/Presentation"

export const App = () => {
  return (
    <>
      <Header/>
      <Decoration/>
      <Presentation/>
      <Content/>
    </>
  )
}
