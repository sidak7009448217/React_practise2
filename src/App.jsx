import Food from "./components/Food"


function App() {
const foods = ["burger","pizza","fries","kulcha"]

  return (
    <>
      <h1>Food List</h1>
      <Food foods={foods}/>
    </>
  )
}

export default App
