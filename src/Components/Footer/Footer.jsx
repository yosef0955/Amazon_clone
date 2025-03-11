import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Column 1 */}
        <div className={styles.hide}>
          <h2 className={styles.heading}>Get to Know Us</h2>
          <ul className={styles.list}>
            <li>
              <a href="#" className={styles.link}>
                About Us
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                Careers
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                Press Releases
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div  className={styles.hide}>
          <h2 className={styles.heading}>Make Money with Us</h2>
          <ul className={styles.list}>
            <li>
              <a href="#" className={styles.link}>
                Sell on Amazon
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                Affiliate Program
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                Advertise Your Products
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className={styles.hide}>
          <h2 className={styles.heading}>Amazon Payment</h2>
          <ul className={styles.list}>
            <li>
              <a href="#" className={styles.link}>
                Amazon Pay
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                Credit Card Offers
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                EMI Payment Options
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h2 className={styles.heading}>Follow Us</h2>
          <div className={styles.socialIcons}>
            <a href="#" className={styles.icon}>
              <FaFacebook size={24} />
            </a>
            <a href="#" className={styles.icon}>
              <FaTwitter size={24} />
            </a>
            <a href="#" className={styles.icon}>
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottomSection}>
        <p>
          &copy; {new Date().getFullYear()} Amazon Clone. All rights reserved.
          <br />
          Developed by <strong>Yosef Worku</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
