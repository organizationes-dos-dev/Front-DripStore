import MyCart from "../MyCart/MyCart"
import CartSummary from "../CartSummary/CartSummary"
import Footer from "../Footer/Footer"
import "../PaiCarrinho/PaiCarrinho.css"

function PaiCarrinho() {
    return (
      <>
        <div className="style">
            <MyCart></MyCart>
            <CartSummary></CartSummary>
        </div>
        
        <Footer></Footer>
      </>
    )
  }
  
  export default PaiCarrinho
  