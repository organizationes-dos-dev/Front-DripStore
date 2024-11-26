
import "../CartSummary/CartSummary.css";

const CartSummary = () => {

  return (
    <main className="cart-summary">
      <div className="cart-summary-title">
        <p>Resumo</p>
      </div>
      <div className="cart-summary-body">
        <div className="cart-summary-subtotal">
          <div className="subtotal">
            <p>
              <span>Subtotal:</span>
            </p>
            <p className="value">R$ 0</p>
          </div>
        </div>
        <div className="cart-summary-total">
          <div className="total">
            <h3>
              <span>Total</span>
            </h3>
            <div className="total-value">
              <h3>R$ 0</h3>
              <p>ou 10x de R$ 0 sem juros</p>
            </div>
          </div>
        </div>
        <button >Comprar</button>
      </div>
    </main>
  );
};

export default CartSummary;