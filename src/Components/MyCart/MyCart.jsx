import Vector from '../../assets/air-jordan.png'
import "../MyCart/MyCart.css";

const MyCart = () => {
  

  return (
    <main className="my-cart">
      <div className="my-cart-topics">
        <p className="topic-mycart">MEU CARRINHO</p>
        <p className="topic-quantity">QUANTIDADE</p>
        <p className="topic-price">VALOR</p>
        <p className="topic-total">TOTAL</p>
      </div>
      <div className="my-cart-infos">
        <div className="cart-product">
          <img src={Vector}  />
          <div>
            <p className="cart-product-name">A</p>
            <p className="cart-product-color">
              <span>Cor: </span>
            </p>
            <p className="cart-product-size">
              <span>Tamanho: </span>
            </p>
          </div>
        </div>
        <div className="cart-quantity">
          <input
            type="number"
            min="1"
            placeholder="Quantidade"
            
          />
        </div>
        <div className="cart-unities">
          
        </div>
        <div className="cart-total">
          
        </div>
      </div>
    </main>
  );
};

export default MyCart;
