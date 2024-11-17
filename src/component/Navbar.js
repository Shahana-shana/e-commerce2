import { Link } from "react-router-dom";
function Navbar() {
    return ( 
        <nav className="navbar navbar-expand-lg bg-body-tertiary py-3">
  <div className="container">
    <a className="navbar-brand fw-bold fs-4" href="#">
        SR COLLECTION
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page">Home</Link>
        
        </li>
        <li className="nav-item">
        <Link to="/products" className="nav-link"> Product </Link>
         
        </li>
        
        <li className="nav-item">
        <Link to="/about" className="nav-link"> AboutUs </Link>
         
        </li>
        <li className="nav-item">
        <Link to="/contact" className="nav-link">ContactUs  </Link>
         
        </li>
         {/* <li className="nav-item">
        <Link to="/cart" className="nav-link"> Cart </Link>
         
        </li>  */}
        </ul>
      <div className="buttons">
        <a href="" className="btn btn-outline-dark">Login</a>
      </div>
    </div>
  </div>
</nav>
     );
}

export default Navbar;