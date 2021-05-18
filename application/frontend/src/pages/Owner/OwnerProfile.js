import React from 'react';
//import restaurantcartoon from "../../assets/img/restaurant_ex.jpeg";
import axios from 'axios';
import '../../assets/css/index.css';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const OwnerProfile = () => {
  const [ownerInfo, setOwnerInfo] = useState([]);

  //restaurants from backend
  const restaurantsList = useSelector(
    (state) => state.searchReducer.allRestaurants
  );
  const currentRestaurant = restaurantsList.filter(
    (restaurant) => restaurant.Name.trim() === 'Taco Shell'
  );

  const [loadData, setLoadData] = useState(false);

  //Renders owner info from DB
  useEffect(() => {
    axios
      .get('http://localhost:3001/api/restaurant/owner-info', {
        params: { ownerEmail: 'marshall.herrera@example.com' },
      })
      .then((res) => {
        setOwnerInfo(res.data);
        setLoadData(false);
      });
  }, [loadData]);

  //extract value from global redux (reads from store)
  return (
    <div className="container-fluid">
      <br />

      <div className="text-center">
        <h3 className="owner-heading"> Profile </h3>
      </div>
      {currentRestaurant.map((item, index) => (
        <div key={index}>
          {item.Approved === 0 ? (
            <div
              className="alert alert-warning fade show text-center pending-alert w-75 mx-auto mt-4"
              role="alert"
            >
              <strong> PENDING ADMIN APPROVAL WITHIN 24 HOURS </strong>
            </div>
          ) : (
            <div
              className="alert alert-warning alert-dismissible fade show text-center live-alert w-75 mx-auto mt-4"
              role="alert"
            >
              <strong> YOUR RESTAURANT IS NOW LIVE ! </strong>
              <button
                type="button"
                className="close close-live text-warning"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          )}
          <div className="editprofile">
            {/* content header */}
            <div className="border-bottom border-warning text-left">
              {' '}
              <h3>
                <strong className="text-warning">{item.Name}</strong>
              </h3>
            </div>

            {/* content body */}
            {ownerInfo.map((ownerItem, i) => (
              <div className="profile-content mt-3" key={i}>
                <div className="row">
                  <div className="col">
                    <label className="form-descrip">
                      <strong>Restaurant Owner</strong>
                    </label>
                  </div>
                  <div className="col">
                    <label htmlFor="name"> {ownerItem.Name}</label>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <label className="form-descrip">
                      <strong>Contact</strong>
                    </label>
                  </div>
                  <div className="col">
                    <label htmlFor="phone">{ownerItem.Phone}</label>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <label className="form-descrip">
                      <strong>Email</strong>
                    </label>
                  </div>
                  <div className="col">
                    <label htmlFor="email">{ownerItem.Email}</label>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <label className="form-descrip">
                      <strong>Restaurant Address</strong>
                    </label>
                  </div>
                  <div className="col">
                    <label htmlFor="address">{item.Address}</label>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <label className="form-descrip">
                      <strong>Cuisine</strong>
                    </label>
                  </div>
                  <div className="col">
                    <label htmlFor="address">{item.Cuisine}</label>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <label className="form-descrip">
                      <strong>Restaurant Tags</strong>
                    </label>
                  </div>
                  <div className="col">
                    <label htmlFor="address">{item.Tags}</label>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <label className="form-descrip">
                      <strong>Price Level</strong>
                    </label>
                  </div>
                  <div className="col">
                    <label htmlFor="address">{item.Price_Level}</label>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <label className="form-descrip">
                      <strong>Delivery Fee</strong>
                    </label>
                  </div>
                  <div className="col">
                    <label htmlFor="address">${item.Delivery_Fee}</label>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OwnerProfile;
