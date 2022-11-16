import { Navbar, Transactions, Services, Footer, Welcome } from './Components';


const App = () => {
  return (
    <div>
       <div className='min-h-screen'>
        <div className='gradient-bg-welcome'>
          <Navbar />
          <Welcome />


        </div>
        <Services />
        <Transactions/>
        
        <Footer />

      </div> 
        
    </div>
  )
}

export default App
