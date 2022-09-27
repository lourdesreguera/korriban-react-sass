import React from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <div className="b-bcg b-bcg--shop b-shop" id="shop">
      <div>
        <h2 className="b-shop__heading">Merchandising</h2>
      </div>

      <Link to="/shop" className="b-btn b-link">
        Shop Now
      </Link>
    </div>
  );
};

export default Shop;
