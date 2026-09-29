import { useState } from 'react'
import Navbar from './Components/Navbar'
import { PrimaryButton, DangerButton } from './Button'
import Header from './Components/Header'
import Footer from './Components/Footer'
import CardClass from './Components/Card'

/* 
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
*/
import './App.css'
import { Component } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
        <p>
          ini adalah button Primary
          <PrimaryButton />
        </p>
        <p>
          Ini adalah button Danger
          <DangerButton />
        </p>
      <div className="container">
        <Header />
        <main>
          <p>Selamat datang di dashboard pengelolaan keuangan!</p>
        </main>
        <Footer />
      </div>
    </>
  );
}
export default App


/*
class HeaderClass extends React.Component {
  render() {
    return <header><h1>Selamat Datang di React (Class)</h1></header>
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <HeaderClass />
        <p>Ini Dibuat menggunakan Class Component dalam 1 file.</p>
        <div>
        <CardClass />
        </div>
      </div>
    );
  }
}

