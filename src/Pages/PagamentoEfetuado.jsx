import Footer from "../Components/Footer/Footer";
import Header from "../Components/HomeHeader/Header";



function PagamentoEfetuado() {
  const stripe = Stripe("pk_test_51QDCfEFq1QmTYxmaOQLSz1BMhMbBjtPhnDVN7GtWr4YaavGeIOvVQGSxUc5A8KGnUdYwpZR0TLmK4np1y2ThTzpq00o7ydppVx")
 const checkoutNow = async (amount) => {
    try {


        const response = await fetch("http://localhost:3000/payment", {
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify({
                amount:amount
            })
        })

        if(!response.ok){
            alert("Unable to create Session")
        }

        const session = await response.json();
        const result = await stripe.redirectToCheckout({
            sessionId:session.id
        })
        
        if(!result.ok) {
            alert("Erro ao fazer a chamada para a stripe")
        }
    } catch (error) {
        console.log(`O nosso erro foi ${error}`)
    }
} 

  
    return (
      <>
        <Header/>
        <h1>Paginas de Sucesso</h1>
        <Footer/>
      </>
    )
  }
  
  export default PagamentoEfetuado;  
