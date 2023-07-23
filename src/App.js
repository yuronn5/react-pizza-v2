import logo from './logo.svg';
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";
import './scss/app.scss';

function App() {
  return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              <PizzaBlock title={"Mexico"} price={50} />
              <PizzaBlock title={"American"} price={100} />
              <PizzaBlock title={"Asian"} price={200} />
              <PizzaBlock title={"Ukrainian"} price={300} />
              <PizzaBlock title={"Brazil"} price={400} />
              <PizzaBlock title={"Argentina"} price={500} />
              <PizzaBlock title={"Poland"} price={600} />
              <PizzaBlock title={"Portugal"} price={700} />
              <PizzaBlock title={"Spain"} price={800} />
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
