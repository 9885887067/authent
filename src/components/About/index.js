// Write your JS code here
import Header from '../Header'

import LogoutButton from '../LogoutButton'



const About = () => {
  return (
    <>
      <Header />
      <div className="about-container">
        <h1 className="about">
          About Route
        </h1>
        <LogoutButton />
      </div>
      )
    </>
  )
}
export default About
