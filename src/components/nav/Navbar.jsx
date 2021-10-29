import "./navbar.css";

const Navbar = () => {
    return (
        <div className="container">
          <ul class="nav">
            <li><a href="/">Home</a></li>
            <li><a href="/about/">About</a></li>
            <li><a href="/work/">Work</a></li>
            <li><a href="/clients/">Clients</a></li>
            <li><a href="/contact/">Contact</a></li>
          </ul>
        </div>
    )
}

export default Navbar
