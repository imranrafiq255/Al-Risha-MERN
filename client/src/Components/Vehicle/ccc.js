// import React, { useState } from "react";
// import SideBar from "../SideBar/SideBar";
// import Header from "../Header/Header";

// const Vehicle = () => {
//   // State to manage the selected vehicle type
//   const [selectedType, setSelectedType] = useState("Bike");

//   // Dummy data for bikes and cars
//   const bikeData = [
//     { type: "Bike", capacity: "1 person", status: "Active", addedDate: "2023-04-20" },
//     { type: "Bike", capacity: "1 person", status: "Active", addedDate: "2023-04-20" }, // Add more bike data as needed
//   ];

//   const carData = [
//     { type: "Sedan", capacity: "5 seater", status: "Active", addedDate: "2023-04-20" },
//     { type: "Mini", capacity: "7 seater", status: "Active", addedDate: "2023-04-20" },
//     { type: "Civic", capacity: "4 seater", status: "Active", addedDate: "2023-04-20" },
//     // Add more car data as needed
//   ];

//   return (
//     <div className="home-container custom-home-background w-screen h-full p-4 flex">
//       <SideBar />
//       <div className="right-sidebar-container w-10/12">
//         <Header />
//         <div className="vehicles-container h-2/3 bg-white mt-14 rounded-lg relative shadow-lg">
//           <div className="h-20 w-11/12 custom-vehicle-bg absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
//             <h1 className="text-white text-2xl font-bold">Vehicles Information</h1>
//             {/* Dropdown for selecting vehicle type */}
//             <select
//               className="p-2 border rounded"
//               value={selectedType}
//               onChange={(e) => setSelectedType(e.target.value)}
//             >
//               <option value="Bike"> Bike Data</option>
//               <option value="Car">Car Data</option>
//             </select>
//           </div>
//           {/* Display vehicle data based on the selected type */}
//           <div className="vehicles-list flex flex-col pt-20 px-10">
//             <div className="flex mt-4 font-bold">
//               <div className="w-5/12">Vehicle Type</div>
//               <div className="w-7/12 flex justify-between items-center">
//                 <h1>Capacity</h1>
//                 <h1>Status Of Use</h1>
//                 <h1>Added Date</h1>
//               </div>
//             </div>
//             {/* Render bike data if selectedType is Bike */}
//             {selectedType === "Bike" &&
//               bikeData.map((bike, index) => (
//                 <div className="flex mt-4" key={index}>
//                   <div className="w-5/12 flex">
//                     <div className="image">
//                       {/* Placeholder URL for bike image */}
//                       <img
//                         src="https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW90b3JiaWtlfGVufDB8fDB8fHww"
//                         alt="Bike Image"
//                         className="w-14 h-14 rounded-full object-fill"
//                       />
//                     </div>
//                     <div className="name flex flex-col justify-center pl-4">
//                       <h1>{bike.type}</h1>
//                     </div>
//                   </div>
//                   <div className="w-7/12 flex justify-between items-center">
//                     <div>
//                       <h1 className="font-bold">{bike.capacity}</h1>
//                     </div>
//                     <div>
//                       <div className="bg-green-400 text-white w-16 h-7 flex justify-center items-center rounded-lg shadow-lg">
//                         {bike.status}
//                       </div>
//                     </div>
//                     <div className="employed">
//                       <h1>{bike.addedDate}</h1>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             {/* Render car data if selectedType is Car */}
//             {selectedType === "Car" &&
//               carData.map((car, index) => (
//                 <div className="flex mt-4" key={index}>
//                   <div className="w-5/12 flex">
//                     <div className="image">
//                       {/* Placeholder URL for car image */}
//                       {car.type === "Sedan" && <img
//                         src="https://images.unsplash.com/photo-1617531653520-4893f7bbf978?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGJtd3xlbnwwfHwwfHx8MA%3D%3D"
//                         alt="Sedan Image"
//                         className="w-14 h-14 rounded-full object-fill"
//                       />}
//                       {car.type === "Mini" && <img
//                         src="https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGNhcnN8ZW58MHx8MHx8fDA%3D"
//                         alt="Mini Image"
//                         className="w-14 h-14 rounded-full object-fill"
//                       />}
//                       {car.type === "Civic" && <img
//                         src="https://images.unsplash.com/photo-1636445497489-f4795a1c1e1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fGJtd3xlbnwwfHwwfHx8MA%3D%3D"
//                         alt="Civic Image"
//                         className="w-14 h-14 rounded-full object-fill"
//                       />}
//                     </div>
//                     <div className="name flex flex-col justify-center pl-4">
//                       <h1>{car.type}</h1>
//                     </div>
//                   </div>
//                   <div className="w-7/12 flex justify-between items-center">
//                     <div>
//                       <h1 className="font-bold">{car.capacity}</h1>
//                     </div>
//                     <div>
//                       <div className="bg-green-400 text-white w-16 h-7 flex justify-center items-center rounded-lg shadow-lg">
//                         {car.status}
//                       </div>
//                     </div>
//                     <div className="employed">
//                       <h1>{car.addedDate}</h1>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             {/* Add bottom line separator */}
//             <div className="line w-full mt-4">
//               <div className="vehicle-bottom-line w-full"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Vehicle;
