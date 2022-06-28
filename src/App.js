import './scss/app.scss'
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from './components/Sort.jsx'
import HammockCard from "./components/HammockCard";

function App() {
  return (
      <div className="wrapper">
        <Header/>
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories/>
              <Sort/>
            </div>
            <h2 className="content__title">Все гамаки</h2>
            <div className="content__items">
              <HammockCard/>
              <HammockCard/>
              <HammockCard/>
              <HammockCard/>
              <HammockCard/>
              <HammockCard/>
              <HammockCard/>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
