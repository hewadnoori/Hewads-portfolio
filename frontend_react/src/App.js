import React from 'react';
import "./App.scss"
import { About,Footer,Header,Skills, Testimonial, Work } from "./container";
import { Navbar } from "./components"

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills /> 
      {/* <Testimonial /> */}
      <Footer />

    </div>
  )
}
// the App component is exported so that it can be used in other parts of the application.
export default App