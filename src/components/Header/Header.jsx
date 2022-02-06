import "./header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";

function Header() {
  const ids = ["1"];
  return (
    <header className="header">
      <div className="header_top_bar">
        <ul className="header_left">
          <Link to="/en">EN</Link>
          <Link to="#" className="btn empty">
            date:{new Date().toLocaleString() + ""}
          </Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/">Deposits & Withdrawals</Link>

          <Link to="/">How to Register</Link>
          <Link to="/">Register Now</Link>
          <Link to="/">Lost Password</Link>
          <Link to="/">DAILY OFFERS</Link>
        </ul>
        <form action="" className="auth_form">
          <input
            type="text"
            placeholder="Username / Email / Phone Number"
            required
          />
          <input type="password" name="" id="password" required />
          <button className="header_submit">LOGIN</button>
        </form>
      </div>

      <div className="header_main">
        <Link to="/">
          <span className="header_logo">
            <img src={logo} alt="" />
          </span>
        </Link>
        <nav>
          <Link to="/">SoccerBook</Link>
          <Link to="/">Live</Link>
          {/* <span>CHAMPIONS LEAGUE</span> */}
          <Link to="/">VIP</Link>
          <Link to="/">BATTLES</Link>
          <Link to="/">CASINO</Link>
          <Link to="/">Virtual SOCCER</Link>
          <Link to="/">RESULTS</Link>
          <Link to="/">STATISTICS</Link>
          <Link to="/">DOGS</Link>
          <Link to="/">HORSES</Link>
          <Link to="/">BEST SHOTS</Link>
          <Link to="/">Jackpot</Link>
          <Link to="/">Extra</Link>
          <Link to="/">Promos</Link>
          <Link to="/">Sportbook</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
