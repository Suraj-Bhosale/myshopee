import React from 'react'
import NavigationBar from './Component/Navigation/NavigationBar'
// import Header from './Component/Header/Header'
import FooterOne from './Component/Footer/FooterOne/FooterOne'
import FooterTwo from './Component/Footer/FooterTwo/FooterTwo'
import Recommendation from './Component/Recommendation/Recommendation'
import Section from './Component/Section/Section'


function App() {

  
  return (
    <div>
      <NavigationBar />
      <Section />
      <Recommendation />
      <FooterOne />
      <FooterTwo />
    

      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes> */}

    </div>
  )
}

export default App