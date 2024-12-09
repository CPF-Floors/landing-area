import Form from "./Form"

function FormBanner() {
  return (
    <div id="contact" className="banner-form-container">
        <div className="banner-form-text">
            <h2>A NEW WAY TO <br />THRIVE<span> STARTS NOW</span></h2>
            <p>Become a founding member and <br /> 
            help us shape the future</p>
        </div>
        <div className="banner-form"><Form /></div>
    </div>
  )
}

export default FormBanner