import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import CartOrder from "src/components/pages/CartOrder.jsx";
import {
  getCartProducts,
  decrement,
  deleteCart,
  addCart,
} from "../store/slices/cart";
import { addOrder } from "../store/slices/order";

//import style
import "src/assets/styles/pages/Cart.scss";

export default function Cart() {
  const [t] = useTranslation();
  const dispatch = useDispatch();

  const productsCartRequest = useSelector((state) => state.cart.cart);

  useEffect(() => {
    dispatch(getCartProducts());
  }, []);

  console.log(productsCartRequest);

  return (
    <div className="base-catalog">
      <div className="ghid">
        <span>{t("cartBox")}</span>
      </div>
      <div className="comment-title">
        <span>{t("yoursProducts")}</span>
        <NavLink to="/order">
          <span>{t("pay")}</span>
        </NavLink>
      </div>
      <div className="cart-products">
        <div className="products">
          {productsCartRequest ? (
            productsCartRequest.map((item) => (
              <div key={item.id}>
                <CartOrder
                  products={item}
                  handleIncrement={() => dispatch(addCart(item))}
                  handleDecrement={() => dispatch(decrement(item.id))}
                  deleteFromCart={() => dispatch(deleteCart(item.id))}
                  addToOrder={() => dispatch(addOrder(item))}
                />
              </div>
            ))
          ) : (
            <p>Товары не найдены.</p>
          )}
        </div>
      </div>
    </div>
  );
}
