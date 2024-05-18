// Write your JS code here

import Header from '../Header'

import LogoutButton from '../LogoutButton'


const Home = () => {
  return (
    <>
      <Header />
      <div className="header-container">
        <h1 className="home">
          Home Route
        </h1>
        <LogoutButton />
      </div>
    </>
  )
}
export default Home
