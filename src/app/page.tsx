import CoffeeList from './coffeeList/page'
import Intro from './intro/page'
import Navbar from './layout/navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <Intro />
      <CoffeeList />
    </>
  )
}
