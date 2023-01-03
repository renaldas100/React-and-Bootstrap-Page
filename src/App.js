import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
// import logo from './images/learning-student.svg';
// const logo = require('./images/learning-student.svg); 

function App() {
  return (
    <div class="container-md">
      <div class="text-center fs-3 mt-4 mb-5">Programavimo kursai</div>
      <div class="col-8 row d-flex justify-content-between flex-wrap mx-auto gap-3">
        <div class="col-3 flex-shrink-0 card rounded-0 text-center p-0 border-0 text-light fw-bold lh-lg flex-grow-1">
          <div class="card-header rounded-0 bg-secondary border-0 fs-5">
            <p class="card-text">React kursai</p>
          </div>
          <div class="card-body bg-info fs-6 lh-lg">
            <p class="card-text">nuo <span class="fs-2">9.99</span> EUR / mėn</p>
          </div>
        </div>
        <div class="col-3 card rounded-0 text-center p-0 border-0 text-light fw-bold lh-lg flex-grow-1">
          <div class="card-header rounded-0 bg-secondary border-0 fs-5">
            <p class="card-text">Angular.JS kursai</p>
          </div>
          <div class="card-body bg-info fs-6 lh-lg">
            <p class="card-text">nuo <span class="fs-2">29.99</span> EUR / mėn</p>
          </div>
        </div>
        <div class="col-3 card rounded-0 text-center p-0 border-0 text-light fw-bold lh-lg flex-grow-1">
          <div class="card-header rounded-0 bg-secondary border-0 fs-5">
            <p class="card-text">PHP kursai</p>
          </div>
          <div class="card-body bg-info fs-6 lh-lg">
            <p class="card-text">nuo <span class="fs-2">49.99</span> EUR / mėn</p>
          </div>
        </div>
      </div>
      <div class="bg-light col-9 mx-auto mb-3">
        <div class="col-11 fs-3 mt-4 mb-3 px-2 mx-auto"><p class="py-2 border-bottom">Mūsų dėstytojai</p></div>
        <div class="col-11 row px-4 d-flex justify-content-between flex-wrap mx-auto gap-3">

          <div class="col-5 card mb-3 flex-grow-1 rounded-1">
            <div class="row g-0">
              <div class="col-md-4 d-flex justify-content-center align-items-center px-2 py-2">
                {/* <div class="rounded-circle bg-secondary px-4 py-4">Foto</div> */}
                {/* <img src={require('./images/learning-student.svg')} /> */}
                <img src="https://www.svgrepo.com/show/190738/learning-student.svg" class="img-fluid rounded-start" alt="test"></img>
                {/* <img src="https://reactjs.org/logo-og.png" alt="React Image" /> */}
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title"><span class="fw-bold">Michael </span>Deo</h5>
                  <p class="card-text lh-1 my-1">Ui UX Designer</p>
                  <p class="card-text lh-1">795 Folsom Ave, Suite 600 san Francisco, CADGE 94107</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-5 card mb-3 flex-grow-1 rounded-1">
            <div class="row g-0">
              <div class="col-md-4 d-flex justify-content-center align-items-center px-2 py-2">
                {/* <div class="rounded-circle bg-secondary px-4 py-4">Foto</div> */}
                {/* <img src={require('./images/learning-student.svg')} /> */}
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzy41Se0MDkOHC8ZiMqFoqbDpm9MkcW6Hlia_ClnEwhf9pJqF09gBByQllTVjKUV7YdJo&usqp=CAU" class="img-fluid rounded-start" alt="test"></img>
                {/* <img src="https://reactjs.org/logo-og.png" alt="React Image" /> */}
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title"><span class="fw-bold">Michael </span>Deo</h5>
                  <p class="card-text lh-1 my-1">Ui UX Designer</p>
                  <p class="card-text lh-1">795 Folsom Ave, Suite 600 san Francisco, CADGE 94107</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div class="col-11 row px-4 d-flex justify-content-between flex-wrap mx-auto gap-3">

          <div class="col-5 card mb-3 flex-grow-1 rounded-1">
            <div class="row g-0">
              <div class="col-md-4 d-flex justify-content-center align-items-center px-2 py-2">
                {/* <div class="rounded-circle bg-secondary px-4 py-4">Foto</div> */}
                {/* <img src={require('./images/learning-student.svg')} /> */}
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ1oLaDJlC-DvPibHvUAluSld6D4KG_Q00x6oMDubpL3K5lLeqWeKn8eUgbQ3ZiWjg6HM&usqp=CAU" class="img-fluid rounded-start" alt="test"></img>
                {/* <img src="https://reactjs.org/logo-og.png" alt="React Image" /> */}
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title"><span class="fw-bold">Michael </span>Deo</h5>
                  <p class="card-text lh-1 my-1">Ui UX Designer</p>
                  <p class="card-text lh-1">795 Folsom Ave, Suite 600 san Francisco, CADGE 94107</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-5 card mb-3 flex-grow-1 rounded-1">
            <div class="row g-0">
              <div class="col-md-4 d-flex justify-content-center align-items-center px-2 py-2">
                {/* <div class="rounded-circle bg-secondary px-4 py-4">Foto</div> */}
                {/* <img src={require('./images/learning-student.svg')} /> */}
                <img src="https://www.svgrepo.com/show/120243/man.svg" class="img-fluid rounded-start" alt="test"></img>
                {/* <img src="https://reactjs.org/logo-og.png" alt="React Image" /> */}
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title"><span class="fw-bold">Michael </span>Deo</h5>
                  <p class="card-text lh-1 my-1">Ui UX Designer</p>
                  <p class="card-text lh-1">795 Folsom Ave, Suite 600 san Francisco, CADGE 94107</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
      {/* <h1>Labas pasauli (JSX kalba)</h1>
      <div className='alert alert-danger'>Test</div> */}



    </div>
  );
}

export default App;
