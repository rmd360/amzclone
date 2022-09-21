import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Payment from "./Payment";
// import dispatch  from './Product';

function Subtotal() {
  // const navigate = useNavigate();
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <Link to="/payment">
        <button
          onClick={<Payment />}
          style={{
            backgroundColor: "#f0c14b",
            BorderRadius: "2px",
            Width: "100%",
            Height: "30px",
            Border: "1px solid",
            MarginTop: "10px",
            borderColor: "#a88734 #9c7e31 #846a29",
            Color: "#111",
          }}
        >
          Proceed to Checkout
        </button>
      </Link>
    </div>
  );
}

export default Subtotal;
