import { Navbar, Main, Product, Footer } from "../components";

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <div id="mainContent" style={{background:"black"}}>
        <center><img src="./assets/images/main.png" alt=""  /></center>
      </div>
      {/* <Product /> */}
      <Footer />
    </>
  )
}

export default Home