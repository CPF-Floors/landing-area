import Form from "./Form"

function FormBanner() {
  return (
    <div className="banner-form-container">
        <div className="banner-form-text">
            <h2>A NEW WAY TO THRIVE STARTS NOW</h2>
            <p>Become a founding member and <br /> 
            help us shape the future</p>
        </div>
        <div className="banner-form"><Form /></div>
    </div>
  )
}

export default FormBanner