
import React from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
// Import layout
import Header from "./shared/components/Layout/Header";
import Menu from "./shared/components/Layout/Menu";
import Slider from "./shared/components/Layout/Slider";
import Sidebar from "./shared/components/Layout/Sidebar";
import Footer from "./shared/components/Layout/Footer";
// Import pages
import Home from "./pages/Home"
import Category from "./pages/Category";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Search from "./pages/Search";
import Success from "./pages/Success";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <div>
      {/*	Header	*/}
      <Header />
      {/*	End Header	*/}
      {/*	Body	*/}
      <div id="body">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <Menu />
            </div>
          </div>
          <div className="row">
            <div id="main" className="col-lg-8 col-md-12 col-sm-12">
              {/*	Slider	*/}
              <Slider />
              <BrowserRouter>
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/product-details" component={ProductDetail} />
                  <Route path="/category" component={Category} />
                  <Route path="/search" component={Search} />
                  <Route path="/Cart" component={Cart} />
                  <Route path="/404" component={NotFound} />
                  <Route path="/success" component={Home} />
                </Switch>
              </BrowserRouter>
            </div>
            <Sidebar />
          </div>
        </div>
      </div>
      {/*	End Body	*/}
      <Footer />
      {/*	End Footer	*/}
    </div>
  );
}

export default App;
