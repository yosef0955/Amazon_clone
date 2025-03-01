import React,{useContext} from "react";
import style from "./Header.module.css";
import { FaSearch } from "react-icons/fa";
import { BiCart } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import LowerHeader from "./LowerHeader";
import {Link} from "react-router-dom"
import {DataContext} from "../DataProvider/DataProvider"

const Header = () => {

const [{basket},dispatch] = useContext(DataContext)
const totalItem = basket?.reduce((amount,item) => {
  return item.amount + amount
},0)

  return (
    <section className={style.fixed}>
      <section className={style.header_container}>
        <div className={style.logo_container}>
          <Link to="/">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon logo"
            />
          </Link>
          <div className={style.delivery}>
            <span>
              <SlLocationPin />
            </span>
            <div>
              <p>Deliver to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>

        <div className={style.search}>
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" placeholder="search product" />
          <FaSearch />
        </div>

        <div className={style.order_container}>
          <Link to="#" clas   sName={style.language}>
            <div className={style.lang_container}>
              <img className={style.flag} src="../../../public/Flag-United.png" alt="" />
              <select name="" id="" className={style.select}>
                <option value="">EN</option>
              </select>
            </div>
          </Link>

          <Link to="#">
            <div>
              <p>Hello, Sign In</p>
              <span>Account & Lists</span>
            </div>
          </Link>

          <Link to="/orders" className={style.return_order}>
            <p>Returns</p> <br />
            <span> & Orders</span>
          </Link>

          <Link to="/cart" className={style.cart}>
            <BiCart size={35} />
            <span>{totalItem}</span>
          </Link>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
};

export default Header;
