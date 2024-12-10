import React, { useEffect, useState } from "react";
import { Doctor } from "../assets/assets";
import { useNavigate, useParams } from "react-router-dom";

const Doctors = () => {
  const { speciality } = useParams();
  const navigate = useNavigate();
  const [filterDoc, setFilterDoc] = useState();
  const [filter, setFilter] = useState(false);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(Doctor.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(Doctor);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [speciality]);

  return (
    <div className="mt-4 flex flex-col w-full ">
      <p className="text-blue-500">Browse Through Doctor Speciality</p>
      {/* Filter Button and Dropdown */}
      <div className="block md:hidden px-2 py-1 relative">
        <p
          onClick={() => setFilter(!filter)}
          className="px-4 py-1 text-2xl border border-blue-600 cursor-pointer"
        >
          Filter
        </p>

        {filter && (
          <div className="flex flex-col w-full gap-2 mt-2 border border-blue-600 bg-white shadow-lg z-50">
            <p
              onClick={() => {
                speciality === "Surgery"
                  ? navigate("/doctors")
                  : navigate("/doctors/Surgery");
                setFilter(!filter);
              }}
              className={`px-2 py-1 border cursor-pointer border-blue-600 w-full ${
                speciality === "Surgery" ? "bg-blue-100" : ""
              } `}
            >
              Surgery
            </p>
            <p
              onClick={() => {
                speciality === "Neurological"
                  ? navigate("/doctors")
                  : navigate("/doctors/Neurological");
                setFilter(!filter);
              }}
              className={`px-2 py-1 border cursor-pointer border-blue-600 w-full ${
                speciality === "Neurological" ? "bg-blue-100" : ""
              }`}
            >
              Neurological
            </p>
            <p
              onClick={() => {
                speciality === "Cardioligist"
                  ? navigate("/doctors")
                  : navigate("/doctors/Cardioligist");
                setFilter(!filter);
              }}
              className={`px-2 py-1 border cursor-pointer border-blue-600 w-full ${
                speciality === "Cardioligist" ? "bg-blue-100" : ""
              }`}
            >
              Cardioligist
            </p>
            <p
              onClick={() => {
                speciality === "Dandist"
                  ? navigate("/doctors")
                  : navigate("/doctors/Dandist");
                setFilter(!filter);
              }}
              className={`px-2 py-1 border cursor-pointer border-blue-600 w-full ${
                speciality === "Dandist" ? "bg-blue-100" : ""
              }`}
            >
              Dandist
            </p>
            <p
              onClick={() => {
                speciality === "Pediatrics"
                  ? navigate("/doctors")
                  : navigate("/doctors/Pediatrics");
                setFilter(!filter);
              }}
              className={`px-2 py-1 border cursor-pointer border-blue-600 w-full ${
                speciality === "Pediatrics" ? "bg-blue-100" : ""
              }`}
            >
              Pediatrics
            </p>
            <p
              onClick={() => {
                speciality === "General Doctor"
                  ? navigate("/doctors")
                  : navigate("/doctors/General Doctor");
                setFilter(!filter);
              }}
              className={`px-2 py-1 border cursor-pointer border-blue-600 w-full ${
                speciality === " General Doctor" ? "bg-blue-100" : ""
              }`}
            >
              General Doctor
            </p>
            <p
              onClick={() => {
                speciality === "Orthopidec"
                  ? navigate("/doctors")
                  : navigate("/doctors/Orthopidec");
                setFilter(!filter);
              }}
              className={`px-2 py-1 border cursor-pointer border-blue-600 w-full ${
                speciality === " Orthopidec" ? "bg-blue-100" : ""
              }`}
            >
              Orthopidec
            </p>
            <p
              onClick={() => {
                speciality === "Otology"
                  ? navigate("/doctors")
                  : navigate("/doctors/Otology");
                setFilter(!filter);
              }}
              className={`px-2 py-1 border cursor-pointer border-blue-600 w-full ${
                speciality === " Otology" ? "bg-blue-100" : ""
              }`}
            >
              Otology
            </p>
          </div>
        )}
      </div>
      {/* Main Content */}
      <div
        className={`flex flex-col  sm:flex-row sm:mb-80 lg:mb-0 w-full gap-2 mt-2 transition-all duration-300 ${
          filter ? "mt-4" : ""
        }`}
      >
        {/* Left Side */}
        <div className="hidden md:flex flex-col w-40  gap-1 mr-10">
          <p
            onClick={() =>
              speciality === "Surgery"
                ? navigate("/doctors")
                : navigate("/doctors/Surgery")
            }
            className={`px-1 py-0.5 border-4 rounded cursor-pointer w-full ${
              speciality === "Surgery" ? "border-blue-600" : ""
            }`}
          >
            Surgery
          </p>
          <p
            onClick={() =>
              speciality === "Neurological"
                ? navigate("/doctors")
                : navigate("/doctors/Neurological")
            }
            className={`px-1 py-0.5 border-4 rounded cursor-pointer w-full h-auto ${
              speciality === "Neurological" ? "border-blue-600" : ""
            }`}
          >
            Neurological
          </p>
          <p
            onClick={() =>
              speciality === "Cardioligist"
                ? navigate("/doctors")
                : navigate("/doctors/Cardioligist")
            }
            className={`px-1 py-0.5 border-4 rounded cursor-pointer w-full ${
              speciality === "Cardioligist" ? "border-blue-600" : ""
            }`}
          >
            Cardioligist
          </p>
          <p
            onClick={() =>
              speciality === "Dandist"
                ? navigate("/doctors")
                : navigate("/doctors/Dandist")
            }
            className={`px-1 py-0.5 border-4 rounded cursor-pointer w-full ${
              speciality === "Dandist" ? "border-blue-600" : ""
            }`}
          >
            Dandist
          </p>
          <p
            onClick={() =>
              speciality === "Pediatrics"
                ? navigate("/doctors")
                : navigate("/doctors/Pediatrics")
            }
            className={`px-1 py-0.5 border-4 rounded cursor-pointer w-full ${
              speciality === "Pediatrics" ? "border-blue-600" : ""
            }`}
          >
            Pediatrics
          </p>
          <p
            onClick={() =>
              speciality === "General Doctor"
                ? navigate("/doctors")
                : navigate("/doctors/General Doctor")
            }
            className={`px-1 py-0.5 border-4 rounded cursor-pointer w-full ${
              speciality === "General Doctor" ? "border-blue-600" : ""
            }`}
          >
            General Doctor
          </p>
          <p
            onClick={() =>
              speciality === "Orthopidec"
                ? navigate("/doctors")
                : navigate("/doctors/Orthopidec")
            }
            className={`px-1 py-0.5 border-4 rounded cursor-pointer w-full ${
              speciality === "Orthopidec" ? "border-blue-600" : ""
            }`}
          >
            Orthopidec
          </p>
          <p
            onClick={() =>
              speciality === "Otology"
                ? navigate("/doctors")
                : navigate("/doctors/Otology")
            }
            className={`px-1 py-0.5 border-4 rounded cursor-pointer w-full ${
              speciality === "Otology" ? "border-blue-600" : ""
            }`}
          >
            Otology
          </p>
        </div>

        {/* Right Side */}
        <div className="w-full flex-1 grid grid-cols-2 sm:grid-cols-3  md:grid-cols-3 lg:grid-cols-4 gap-3 px-2 sm:px-4 cursor-pointer">
          {filterDoc &&
            filterDoc.map((item, index) => (
              <div
                onClick={() => navigate(`/appointment/${item._id}`)}
                key={index}
                className=" border px-1 py-1 rounded-lg h-[240px] transition-transform transform duration-500 hover:-translate-y-2 hover:border-2 hover:border-blue-700"
              >
                <div className="max-h-40 ">
                  <img
                    className=" h-40 w-40 px-2 border object-fill bg-blue-100 rounded-lg"
                    src={item.image}
                    alt={`${item.name}`}
                  />
                </div>

                <div className="flex flex-col mt-1 gap-1 sm:gap-0 items-start px-3">
                  <div className="flex gap-1 items-center justify-center ">
                    <p className="w-[6px] h-[6px] rounded-full bg-green-500 "></p>
                    <p className="text-xs text-green-500"> Available</p>
                  </div>
                  <h3 className="text-sm font-medium">{item.name}</h3>
                  <p className="text-xs mt-1  border border-blue-500 px-2 rounded flex items-center justify-center mb-1">
                    {item.speciality}
                  </p>
                  {/* <button className="w-full rounded-xl text-sm border mt-1">
                    Book Now
                  </button> */}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
