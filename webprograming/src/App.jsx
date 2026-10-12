import { useState, Component } from 'react'
import Navbar from './Components/Navbar'
import { PrimaryButton, DangerButton } from './Button'
import Header from './Components/Header'
import Footer from './Components/Footer'
import CardClass from './Components/Card'
import Salam from './Components/Salam'
import Counter from './Components/Counter'
import TombolAksi from './Components/TombolAksi'
import TombolClass from './Components/TombolClass'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
        <p>
          ini adalah button Primary
          <PrimaryButton label="simpan" />
        </p>
        <p>
          Ini adalah button Danger
          <DangerButton label="hapus" />
        </p>

      <div className="container">
        <Header />

        <HeaderClass />

        <Salam />

        <TombolAksi />

        <TombolClass nama = "Nicholas" />

        <main>
          <p>Selamat datang di dashboard pengelolaan keuangan!</p>

          <CardClass 
            nama = "Nicholas" 
            pekerjaan = "Mahasiswa"
          />
          
          <Counter />
        </main>
        <Footer />
      </div>
    </>
  );
}
export default App



class HeaderClass extends Component {
  render() {
    return <header><h1>Selamat Datang di React (Class)</h1></header>
  }
}
