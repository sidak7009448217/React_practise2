import Food from "./components/Food"


function App() {
const foods = ["burger","pizza","fries","kulcha"]

  return (
    <>
      <Food foods={foods}/>
    </>
  )
}

export default App
