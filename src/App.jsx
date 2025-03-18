import Description from "./Components/Description"
import Image from "./Components/Image"
import Name from "./Components/Name"
import Price from "./Components/Price"
import product from "./Product"


function App() {
  const {name, price, description, image} = product
  return (
    <div>
    <Name name={name}></Name>
    <Price price={price}></Price>
    <Description description = {description}></Description>
    <Image image = {image}></Image>
    
    </div>
    
  )
}

export default App