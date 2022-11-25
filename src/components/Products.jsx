import React from "react";
import {
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";

const data = [
  {
    id: 0,
    category: "Mainboard",
    product: "MSI",
    price: "1000",
    information:
      " Join the MSI Reward Program. To get started, join now and unlock access to exclusive benefits..",
  },
  {
    id: 1,
    category: "Hard Drive",
    product: "WESTERN DIGITAL",
    price: "2000",
    information:
      " A hard disk drive (HDD), hard disk, hard drive, or fixed disk is an electro-mechanical data storage device that stores and retrieves digital data using ...",
  },
  {
    id: 2,
    category: "Graphics Cards",
    product: "NVIDIA",
    price: "1500",
    information:
      " Explore NVIDIA GeForce graphics cards. RTX 40 series, RTX 30 series, RTX 20 series and GTX 16 series.",
  },
];

function Products() {
  let { path, url } = useRouteMatch();
  return (
    <div className="container">
      <div className="alert alert-primary" role="alert">
        <h3 className="text-center">Welcome to the products page</h3>
        <div className="container">
          <div className="row">
            {data.map((datum) => {
              return (
                <div className="col-md-6 mt-3 ">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">{datum.category}</h5>
                      <p class="card-text">{datum.product}</p>
                      <Link to={`${url}/${datum.id}`} class="btn btn-primary">
                        for detail
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
