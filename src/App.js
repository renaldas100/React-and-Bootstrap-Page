import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Product from './components/product';
import productsData from './data/productsData';
import Teachers from './components/teachers';
import teachersData from './data/teachersData';
import Skaiciuokle from './components/skaiciuokle';


function App() {

  const prekes = productsData;
  const teachersss = teachersData;


  const mas = [];
  for (let i = 0; i < prekes.length; i++) {
    mas.push(
      <Product product={prekes[i]}></Product>
    );
  }


  const mas2 = [];
  for (let i = 0; i < teachersss.length; i++) {
    mas2.push(
      <Teachers teachers={teachersss[i]}></Teachers>
    );
  }


  /*
 prekes.forEach((product)=>{
  products.push(
    <div class="col-md-4">
      <Product product={product}></Product>
    </div>
  );
 });
 */

/*
products=prekes.map((product)=>{
  return (
  <div class="col-md-4">
    <Product product={product}></Product>
  </div>)
});
*/

  return (
    <div class="container-md">
      <div class="text-center fs-3 mt-4 mb-5">Programavimo kursai</div>
      <div class="col-8 row d-flex justify-content-between flex-wrap mx-auto gap-3">

        {mas}

      </div>
      <div class="bg-light col-9 mx-auto mb-3">
        <div class="col-11 fs-3 mt-4 mb-3 px-2 mx-auto"><p class="py-2 border-bottom">Mūsų dėstytojai</p></div>
        <div class="col-11 row px-4 d-flex justify-content-between flex-wrap mx-auto gap-3">

          {mas2}

        </div>
        
      </div>

      <h3>Skaiciuokle</h3>
      <div class="row mt-3">
          <Skaiciuokle></Skaiciuokle>
          
      </div>


      
    </div>
  );
}

export default App;
