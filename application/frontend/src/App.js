import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './pages/About/About';
import Rajdeep from './pages/About/Rajdeep';
import Rinay from './pages/About/Rinay';
import Bhavani from './pages/About/Bhavani';
import Frederick from './pages/About/Frederick';
import German from './pages/About/German';
import Henzon from './pages/About/Henzon';
import VPHome from './pages/VPHome';
import Home from './pages/Home';
import MenuSideBar from './components/MenuSideBar';
import SearchResults from './pages/SearchResults';
import SFSULogin from './pages/SFSULogin';
import SFSUSignup from './pages/SFSUSignup';
import OwnerLogin from './pages/OwnerLogin';
import OwnerSignup from './pages/OwnerSignup';
import OwnerSignupExtended from './pages/OwnerSignupExtended';
import DriverLogin from './pages/DriverLogin';
import DriverSignup from './pages/DriverSignup';
import ScrollToTop from './components/ScrollToTop';
import CuisineResults from './pages/CuisineResults';
import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setAllRestaurants } from './redux/actions/searchActions';
import DisplayCart from './pages/CustomerCart'
import DriverAvailableOrders from './pages/DriverAvailableOrders'

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios
      .get('http://localhost:3001/api/searchbar/search', {
        params: { searchTerm: '', cuisine: '' },
      })
      .then((res) => {
        dispatch(setAllRestaurants(res.data));
      });
  });

  return (
    <>
      <BrowserRouter>
        <MenuSideBar />
        <ScrollToTop />
        <Switch>
          <Route path="/searchresults">
            <SearchResults />
          </Route>
          <Route path="/cuisineresults">
            <CuisineResults />
          </Route>
          <Route path="/about/rajdeep">
            <Rajdeep />
          </Route>
          <Route path="/about/rinay">
            <Rinay />
          </Route>
          <Route path="/about/bhavani">
            <Bhavani />
          </Route>
          <Route path="/about/frederick">
            <Frederick />
          </Route>
          <Route path="/about/german">
            <German />
          </Route>
          <Route path="/about/henzon">
            <Henzon />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/vphome">
            <VPHome />
          </Route>
          <Route path="/sfsulogin">
            <SFSULogin />
          </Route>
          <Route path="/sfsusignup">
            <SFSUSignup />
          </Route>
          <Route path="/ownerlogin">
            <OwnerLogin />
          </Route>
          <Route path="/ownersignup">
            <OwnerSignup />
          </Route>
          <Route path="/ownersignup2">
            <OwnerSignupExtended />
          </Route>
          <Route path="/driverlogin">
            <DriverLogin />
          </Route>
          <Route path="/driversignup">
            <DriverSignup />
          </Route>
          <Route path="/customerdisplaycart">
            <DisplayCart />
            </Route>
          <Route path="/driveravailableorders">
            <DriverAvailableOrders/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
