import React, { useState } from "react";
import { CarsData } from "../data/data";

function DisplayData() {
  const [filters, setFilters] = useState({
    price: "",
    mileage: "",
    color: "",
    year: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredCars = CarsData.filter((car) => {
    return (
      (filters.price === "" || car.price <= parseFloat(filters.price)) &&
      (filters.mileage === "" || car.mileage <= parseFloat(filters.mileage)) &&
      (filters.color === "" ||
        car.color.toLowerCase() === filters.color.toLowerCase()) &&
      (filters.year === "" || car.year <= parseFloat(filters.year))
    );
  });

  return (
    <div>
      <form className="w-40% mx-auto flex align-middle items-center justify-center py-10 px-4 gap-2">
       <div className="md:flex ">
        <label>
          Max Price:
          <input
            className="w-20 border border-black rounded"
            type="number"
            name="price"
            value={filters.price}
            onChange={handleChange}
          />
        </label>
        <label>
          Mileage:
          <input
            className="w-20 border border-black rounded"
            type="number"
            name="mileage"
            value={filters.mileage}
            onChange={handleChange}
          />
        </label>
       </div>

       <div>
        <label>
          Color:
          <input
            className="w-20 border border-black rounded"
            type="text"
            name="color"
            value={filters.color}
            onChange={handleChange}
          />
        </label>
        <label>
          Year:
          <input
            className="w-20 border border-black rounded"
            type="number"
            name="year"
            value={filters.year}
            onChange={handleChange}
          />
        </label>

       </div>
        <button className="text-white bg-black px-2 py-1 rounded-full text-sm" type="submit">Apply Filters</button>
      </form>

      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3 px-10 py-10 shadow-2xl ">
        {filteredCars.map((car, index) => (
          <div
            key={index}
            className="w-full shadow-lg rounded-lg cursor-pointer"
          >
            {/* <img
            src={process.env.PUBLIC_URL + "/" + car.picturePaths[0]}
            alt=""
            className="w-full h-44 rounded-t-lg"
          /> */}
            <div className=" p-2 ">
              <div className="flex justify-between text-sm">
                <p className="font-semibold">
                  {car.make} {car.model}
                </p>
                <p>{car.year}</p>
              </div>
              <p className="text-sm">{car.color}</p>

              <div className="flex gap-2  text-sm">
                <p>{car.sellerLocation}</p>

                <div className="flex items-center gap-1">
                  <img
                    className="w-4 h-4"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADnUlEQVR4nO2ZSWhUQRCGv0hM9GDALV5UFEU8uEUFwQUVowcR3BDc8KDE4EW8CaIg7ooeBEHxJl7Ek/uK4oKgeHDBfV9iCF70IIlrlJK/oZmZ997Mm8nMKO+HBzNd1dXVr6v/qpqBBAkSJEjwj6MHMAvYBJwD7gMfgDbgK9AMPABOSmc20I0yQTWwEDgBfAN+5/i0ae4ioLIUG6gCVgHvPae+A5eBLcAcYARQ68nt8zDJNkv3hyd/DawGuhRrE9O1qHPgLtAA9AzQd3pB4dggG07vCTCpA/2nK7AXaPcWNScqIuaFbcRhEPDT07U19unkC4rewG0vrt0bPJrF3Gw2ckQ6h4C1Igf7fjXkpHNGfx23GX4G1AH9gC8aq4+Yfx24FiIfqxNolV10v17J/gtvPK+TeCmDdiK9PNlajT/OMwTOys7OlHEjh5uSPcrnZKr1Ns3QLaAmRV6lTZh8TNxFgPPAG6B7BlmNF9I35VPO2O/RYp8AnYHKAVEXPgwVETmkF/BcvuzJ1fhkxa0luVGUHnUimV/AtGwnWUJ6qjewjvJAP48pX2V7J9d4lGl02JfSoUqk4hjSPY1REzsDb6XsElSrGCXTZexIDPTIxOWslfr8LuriL5GiVamDlahcJn9T5MJukUfv9R4x3NP4grDJp6RkBaGfsM6oNM+HnaJgtpcBl4Bx+j4mw31olI/HggzVqDT4mZL4ioHRwA0vjJZHJOkfYtSM4T7Xq2+KBcvWB0SrtrY1X0uzOPkr0p+ZSbhFQusVOhqdFEYfvV7GKuvU6iEI2zVvYybhaQmt8elITATueGFkJcrQHG3M1VzzOQ0PJRxeGH//XtKdCpcWfT7sseBrORQ30/8Wg6WhWcJCXfQdAX16q0LCGrW4qJWtpkzCtoCFrQKOgw+aP17h5O7CgBi2rgf49jWXjVzLcyMT9AS+wUJvpFlC4+lCwDGL/2wtkO1aj64DL/vIAl727TqZJm2iUD8m1HmlVBouSBiXSYqJ+fLVyqY0bAvoncsRu+WrJfE0zPN643LHrbDoccVYe0yKLGaf0i4qD8x5rkxZnzI+SqV9MfuRzloz9TeDDfLRWo7IxqpFmddo7qBXnU6JwfVhT1iynSqdX/KhVj61aHxx2EaqvVb3OPBJn6323xVxInE2EpZsK7Wm+7vis3xy3Wokla9IWczCbQilwxAv5N1jPkaiUs2V5ZUZlA9mABflW0n+FEqQIEGCBP8v/gBLQFl3FbCIUwAAAABJRU5ErkJggg=="
                  ></img>
                  <p className="text-slate-500">{car.mileage}</p>
                </div>
              </div>

              <p className="text-sm font-medium">{car.description}</p>
              <p className="text-lg font-semibold">{car.price}</p>
              <div className="flex justify-between text-sm">
                <p className="text-slate-500">{car.sellerName}</p>
                <p
                  className={`${
                    car.available
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
      </div>
    </div>
  );
}

export default DisplayData;
