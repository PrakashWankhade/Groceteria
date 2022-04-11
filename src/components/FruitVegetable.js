import { useState } from "react"
import path from "../assets/carrot.jpg"

const styles = {
  pageContainer: {
    padding: "20px",
    fontSize: "20px"
  }
}

const FruitVegetable = () => {
  const [counter, setCounter] = useState(0)

  const buttonStyle = {
    backgroundColor: "green",
    border: "solid",
    width: "40px",
    height: "40px",
    fontWeight: "bold"
  }

  const incrementCounter = () => {
    setCounter(counter + 1)
  }

  const decrementCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <div class="card" style={{ width: "18rem;", marginBottom: "20px" }}>
      {/* <img class="card-img-top" src=".../100px180/" alt="Card image cap" /> */}
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  )
}

export default FruitVegetable
