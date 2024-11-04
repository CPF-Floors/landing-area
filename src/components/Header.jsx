import "../App.css"
function Header() {
  return (
    <header>
        <div className="link-container"> 
            <a href="/">Home</a>
            <a href="#facilities">Facilities</a>
            <a href="#services">Services</a>
        </div>
        <img src="/header-logo.svg" alt="" />
        <div className="link-container">
            <a href="/">About</a>
            <a href="#facilities">Gallery</a>
            <a href="#services">Contact</a>
        </div>
    </header>
  )
}

export default Header