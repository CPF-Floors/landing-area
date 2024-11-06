import Header from "./Header"

function MainBanner() {
  return (
    <div className="main-banner">
        <Header />
        <img src="/landing-area/logo.svg" alt="" />
        <h1>WHERE AMBITION MEETS BALANCE</h1>
        <div className="stay-updated"><p>Stay Updated</p></div>
    </div>
  )
}

export default MainBanner