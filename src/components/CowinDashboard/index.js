// Write your code here
import VaccinationCoverage from '../VaccinationCoverage'
import './index.css'

const CowinDashboard = () => (
  <div className="the-cont">
    <div className="head-cont">
      <img
        alt="website logo"
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
      />
      <h1 className="head">Co-WIN</h1>
    </div>
    <h1 className="heading">CoWIN Vaccination in India</h1>
    <VaccinationCoverage />
  </div>
)
export default CowinDashboard
