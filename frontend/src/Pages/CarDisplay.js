// ProductList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useStateContext } from '../context/ContextProvider';
import { useNavigate } from 'react-router-dom'

function ProductList() {
  const { token, setToken } = useStateContext()
  const [products, setProducts] = useState([]);
  const storedToken = localStorage.getItem('token');
  const navigate = useNavigate()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/receiveData`, {
          headers: {
            Authorization: `Bearer ${storedToken}` // Include token in the headers
          }
        });
        setProducts(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="max-w-md mx-auto mt-8">
      <div>
        <button onClick={() => navigate('/createcars')} className="bg-black text-white px-2 py-2 rounded-full hover:bg-white hover:text-black duration-300">Create Product</button>
      </div>
      <h2 className="text-xl font-bold mb-4">All Products</h2>
      <ul>
        {products.map((product) => (
          <div
            
            className="w-full shadow-lg rounded-lg cursor-pointer"
          >
            <div className=" p-2 ">
              <div className="flex justify-between text-sm">
                <p className="font-semibold">
                  {product.make} {product.model}
                </p>
                <p>{product.year}</p>
              </div>
              <p className="text-sm">{product.color}</p>

              <div className="flex gap-2  text-sm">
                <p>{product.sellerLocation}</p>

                <div className="flex items-center gap-1">
                  <img
                    className="w-4 h-4"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADnUlEQVR4nO2ZSWhUQRCGv0hM9GDALV5UFEU8uEUFwQUVowcR3BDc8KDE4EW8CaIg7ooeBEHxJl7Ek/uK4oKgeHDBfV9iCF70IIlrlJK/oZmZ997Mm8nMKO+HBzNd1dXVr6v/qpqBBAkSJEjwj6MHMAvYBJwD7gMfgDbgK9AMPABOSmc20I0yQTWwEDgBfAN+5/i0ae4ioLIUG6gCVgHvPae+A5eBLcAcYARQ68nt8zDJNkv3hyd/DawGuhRrE9O1qHPgLtAA9AzQd3pB4dggG07vCTCpA/2nK7AXaPcWNScqIuaFbcRhEPDT07U19unkC4rewG0vrt0bPJrF3Gw2ckQ6h4C1Igf7fjXkpHNGfx23GX4G1AH9gC8aq4+Yfx24FiIfqxNolV10v17J/gtvPK+TeCmDdiK9PNlajT/OMwTOys7OlHEjh5uSPcrnZKr1Ns3QLaAmRV6lTZh8TNxFgPPAG6B7BlmNF9I35VPO2O/RYp8AnYHKAVEXPgwVETmkF/BcvuzJ1fhkxa0luVGUHnUimV/AtGwnWUJ6qjewjvJAP48pX2V7J9d4lGl02JfSoUqk4hjSPY1REzsDb6XsElSrGCXTZexIDPTIxOWslfr8LuriL5GiVamDlahcJn9T5MJukUfv9R4x3NP4grDJp6RkBaGfsM6oNM+HnaJgtpcBl4Bx+j4mw31olI/HggzVqDT4mZL4ioHRwA0vjJZHJOkfYtSM4T7Xq2+KBcvWB0SrtrY1X0uzOPkr0p+ZSbhFQusVOhqdFEYfvV7GKuvU6iEI2zVvYybhaQmt8elITATueGFkJcrQHG3M1VzzOQ0PJRxeGH//XtKdCpcWfT7sseBrORQ30/8Wg6WhWcJCXfQdAX16q0LCGrW4qJWtpkzCtoCFrQKOgw+aP17h5O7CgBi2rgf49jWXjVzLcyMT9AS+wUJvpFlC4+lCwDGL/2wtkO1aj64DL/vIAl727TqZJm2iUD8m1HmlVBouSBiXSYqJ+fLVyqY0bAvoncsRu+WrJfE0zPN643LHrbDoccVYe0yKLGaf0i4qD8x5rkxZnzI+SqV9MfuRzloz9TeDDfLRWo7IxqpFmddo7qBXnU6JwfVhT1iynSqdX/KhVj61aHxx2EaqvVb3OPBJn6323xVxInE2EpZsK7Wm+7vis3xy3Wokla9IWczCbQilwxAv5N1jPkaiUs2V5ZUZlA9mABflW0n+FEqQIEGCBP8v/gBLQFl3FbCIUwAAAABJRU5ErkJggg=="
                  ></img>
                  <p className="text-slate-500">{product.mileage}</p>
                </div>
              </div>

              <p className="text-sm font-medium">{product.description}</p>
              <p className="text-lg font-semibold">{product.price}</p>
              <div className="flex justify-between text-sm">
                <p className="text-slate-500">{product.sellerName}</p>
                <p
                  className={`${product.available
                      ? "bg-green-500 w-3 h-3 rounded-full animate-ping"
                      : ""
                    }`}
                ></p>
              </div>
              {/* <p>{car.picturePaths}</p> */}
              <div className="flex justify-end">
                <button className="text-sm text-white bg-black px-2 py-1 rounded-full hover:bg-black/90">
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
