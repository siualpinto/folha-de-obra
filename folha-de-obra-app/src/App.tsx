import Search from "./components/features/search/Search";
import Header from "./components/features/pageOrders/header/header";
import "./App.css";
import OrdersList from "./components/features/pageOrders/ordersList/ordersList";
import Filters from "./components/features/pageOrders/filters/filters";

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <div>
          <Search />
          <Filters />
        </div>
        <OrdersList />
      </main>
    </>
  );
}

export default App;
