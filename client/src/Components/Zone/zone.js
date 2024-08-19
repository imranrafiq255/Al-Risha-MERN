// import React, { useState } from 'react';
// import '../Company/Company.css'; // Assuming you want to use the same CSS styles
// import Header from '../Header/Header'; // Adjust the path as needed

// // Import your images
// import trashImage from '../../Assets/trash.png';
// import viewImage from '../../Assets/view.png';
// import pencilImage from '../../Assets/pencil.png';
// import SideBar from '../SideBar/SideBar'; // Import the sidebar component

// const Zone = () => {
//   const [formData, setFormData] = useState({
//     zoneId: '',
//     zoneName: '',
//     zoneState: '',
//     status: '', // Defaulting to "blank" status
//   });

//   const [zones, setZones] = useState([
//     {
//       zoneId: '1',
//       zoneName: 'Jebel Ali',
//       zoneState: 'Dubai',
//       status: 'Active',
//     },
//     {
//       zoneId: '2',
//       zoneName: 'South Zone',
//       zoneState: 'State B',
//       status: 'Inactive',
//     },
//     {
//       zoneId: '3',
//       zoneName: 'East Zone',
//       zoneState: 'State C',
//       status: 'Active',
//     },
//   ]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleStatusChange = (e) => {
//     setFormData({ ...formData, status: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (formData.zoneId) {
//       // Edit existing zone
//       const updatedZones = zones.map((zone) =>
//         zone.zoneId === formData.zoneId ? { ...formData } : zone
//       );
//       setZones(updatedZones);
//     } else {
//       // Add new zone
//       const newZone = { ...formData, zoneId: String(zones.length + 1) };
//       setZones([...zones, newZone]);
//     }
//     setFormData({
//       zoneId: '',
//       zoneName: '',
//       zoneState: '',
//       status: 'Active', // Resetting status to active
//     });
//   };

//   const handleEdit = (zoneId) => {
//     const selectedZone = zones.find((zone) => zone.zoneId === zoneId);
//     setFormData({ ...selectedZone });
//   };

//   const handleDelete = (zoneId) => {
//     const updatedZones = zones.filter((zone) => zone.zoneId !== zoneId);
//     setZones(updatedZones);
//   };

//   const handleCancel = () => {
//     setFormData({
//       zoneId: '',
//       zoneName: '',
//       zoneState: '',
//       status: 'Active', // Resetting status to active
//     });
//   };

//   const ZoneRow = ({ zone }) => {
//     const { zoneId, zoneName, zoneState, status } = zone;

//     const handleView = (zoneId) => {
//       console.log(`Viewing zone details: ${zoneId}`);
//       // Implement view functionality here
//     };

//     return (
//       <>
//         <div className="flex mt-4 items-center">
//           <div className="w-1/4">{zoneId}</div>
//           <div className="w-1/4">{zoneName}</div>
//           <div className="w-1/4">{zoneState}</div>
//           <div className="w-1/4">
//             <div
//               className={`${
//                 status === 'Active' ? 'bg-green-400' : 'bg-red-600'
//               } text-white w-16 h-7 flex justify-center items-center rounded-lg shadow-lg`}
//             >
//               {status}
//             </div>
//           </div>
//           <div className="w-1/4 flex">
//             <img
//               src={viewImage}
//               alt="View"
//               className="w-7 h-8 cursor-pointer mr-2"
//               onClick={() => handleView(zoneId)}
//             />
//             <img
//               src={pencilImage}
//               alt="Edit"
//               className="w-6 h-6 cursor-pointer mr-2"
//               onClick={() => handleEdit(zoneId)}
//             />
//             <img
//               src={trashImage}
//               alt="Delete"
//               className="w-6 h-6 cursor-pointer"
//               onClick={() => handleDelete(zoneId)}
//             />
//           </div>
//         </div>
//         <div className="line w-full mt-4">
//           <div className="company-bottom-line w-full"></div>
//         </div>
//       </>
//     );
//   };

//   return (
//     <div className="home-container custom-home-background w-screen h-full p-4 flex">
//       <SideBar /> {/* Include the sidebar */}
//       <div className="right-sidebar-container w-10/12">
//       <Header/>
//         <div className="projects-container h-2/4 bg-white mt-14 rounded-lg relative shadow-lg">
//           <div className="h-20 w-11/12 custom-company-bg absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
//             <h1 className="text-white text-2xl font-bold">Add Zone:</h1>
//           </div>
//           <div className="projects-list flex flex-col pt-6 px-10">
//             {/* Zone Form Fields */}
//             <form onSubmit={handleSubmit}>
//               <div className="form-field-grid mb-1 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mt-16">
//                 {/* Zone ID */}
//                 <div className="mb-4">
//                   <label htmlFor="zoneId" className="font-semibold block mb-2">
//                     Zone ID
//                   </label>
//                   <input
//                     type="text"
//                     id="zoneId"
//                     onChange={handleInputChange}
//                     name="zoneId"
//                     placeholder="Enter Zone ID"
//                     value={formData.zoneId}
//                     className="input-field px-3 py-2 w-full outline-none border-custom-class"
//                   />
//                 </div>

//                 {/* Zone Name */}
//                 <div className="mb-4">
//                   <label htmlFor="zoneName" className="font-semibold block mb-2">
//                     Zone Name
//                   </label>
//                   <input
//                     type="text"
//                     id="zoneName"
//                     onChange={handleInputChange}
//                     name="zoneName"
//                     placeholder="Enter Zone Name"
//                     value={formData.zoneName}
//                     className="input-field px-3 py-2 w-full outline-none border-custom-class"
//                   />
//                 </div>

//                 {/* Zone State */}
//                 <div className="mb-4">
//                   <label htmlFor="zoneState" className="font-semibold block mb-2">
//                     Zone State
//                   </label>
//                   <select
//                     id="zoneState"
//                     name="zoneState"
//                     value={formData.zoneState}
//                     onChange={handleInputChange}
//                     className="input-field px-3 py-2 w-full outline-none border-custom-class"
//                   >
//                     <option value="">Select State</option>
//                     <option value="State A">State A</option>
//                     <option value="State B">State B</option>
//                     <option value="State C">State C</option>
//                     {/* Add more states as needed */}
//                   </select>
//                 </div>

//                 {/* Status */}
//                 <div className="mb-4">
//                   <label className="font-semibold block mb-2">Status</label>
//                   <div>
//                     <label className="inline-flex items-center">
//                       <input
//                         type="radio"
//                         value="Active"
//                         checked={formData.status === 'Active'}
//                         onChange={handleStatusChange}
//                         className="form-radio h-4 w-4 text-custom-class"
//                       />
//                       <span className="ml-2">Active</span>
//                     </label>
//                   </div>
//                   <div>
//                     <label className="inline-flex items-center">
//                       <input
//                         type="radio"
//                         value="Inactive"
//                         checked={formData.status === 'Inactive'}
//                         onChange={handleStatusChange}
//                         className="form-radio h-4 w-4 text-custom-class"
//                       />
//                       <span className="ml-2">Inactive</span>
//                     </label>
//                   </div>
//                 </div>
//               </div>

//               {/* Button Container */}
//               <div className="flex justify-center space-x-4">
//                 {/* Submit Button */}
//                 <button
//                   type="submit"
//                   className="submit-btn w-1/3 text-white px-3 py-2 mb-10 mt-4 rounded-lg text-xl bg-blue-500 hover:bg-blue-600"
//                 >
//                   Submit
//                 </button>
//                 {/* Cancel Button */}
//                 <button
//                   type="button"
//                   onClick={handleCancel}
//                   className="cancel-btn w-1/3 text-white px-3 py-2 mb-10 mt-4 rounded-lg text-xl bg-red-500 hover:bg-red-600"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>

//         {/* Zone Display Data Form */}
//         <div className="company-container h-2/3 bg-white mt-14 rounded-lg relative shadow-lg">
//           <div className="h-20 w-11/12 custom-company-bg absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
//             <h1 className="text-white text-2xl font-bold">Zone Details:</h1>
//           </div>
//           <div className="projects-list flex flex-col pt-20 px-10">
//             {/* Zone Headings */}
//             <div className="flex mt-4 font-bold">
//               <div className="w-1/4">Zone ID</div>
//               <div className="w-1/4">Zone Name</div>
//               <div className="w-1/4">Zone State</div>
//               <div className="w-1/4">Status</div>
//               <div className="w-1/4">Action</div>
//             </div>
//             <div className="line w-full mt-4">
//               <div className="company-bottom-line w-full"></div>
//             </div>
//             {zones.map((zone) => (
//               <ZoneRow key={zone.zoneId} zone={zone} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Zone;

import React, { useState } from 'react';
import '../Company/Company.css'; // Assuming you want to use the same CSS styles
import Header from '../Header/Header'; // Adjust the path as needed

// Import your images
import trashImage from '../../Assets/trash.png';
import viewImage from '../../Assets/view.png';
import pencilImage from '../../Assets/pencil.png';
import SideBar from '../SideBar/SideBar'; // Import the sidebar component

const Zone = () => {
  const [formData, setFormData] = useState({
    zoneId: '',
    zoneName: '',
    zoneState: '',
    zoneAddress: '', // Added address field
    status: '', // Defaulting to "blank" status
  });

  const [zones, setZones] = useState([
    {
      zoneId: '1',
      zoneName: 'Jebel Ali',
      zoneState: 'Dubai',
      zoneAddress: 'Dubai Industrial City, Dubai',
      status: 'Active',
    },
    {
      zoneId: '2',
      zoneName: 'South Zone',
      zoneState: 'State B',
      zoneAddress: 'South Street, State B',
      status: 'Inactive',
    },
    {
      zoneId: '3',
      zoneName: 'East Zone',
      zoneState: 'State C',
      zoneAddress: 'East Avenue, State C',
      status: 'Active',
    },
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleStatusChange = (e) => {
    setFormData({ ...formData, status: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.zoneId) {
      // Edit existing zone
      const updatedZones = zones.map((zone) =>
        zone.zoneId === formData.zoneId ? { ...formData } : zone
      );
      setZones(updatedZones);
    } else {
      // Add new zone
      const newZone = { ...formData, zoneId: String(zones.length + 1) };
      setZones([...zones, newZone]);
    }
    setFormData({
      zoneId: '',
      zoneName: '',
      zoneState: '',
      zoneAddress: '', // Reset address
      status: 'Active', // Resetting status to active
    });
  };

  const handleEdit = (zoneId) => {
    const selectedZone = zones.find((zone) => zone.zoneId === zoneId);
    setFormData({ ...selectedZone });
  };

  const handleDelete = (zoneId) => {
    const updatedZones = zones.filter((zone) => zone.zoneId !== zoneId);
    setZones(updatedZones);
  };

  const handleCancel = () => {
    setFormData({
      zoneId: '',
      zoneName: '',
      zoneState: '',
      zoneAddress: '', // Reset address
      status: 'Active', // Resetting status to active
    });
  };

  const ZoneRow = ({ zone }) => {
    const { zoneId, zoneName, zoneState, zoneAddress, status } = zone;

    const handleView = (zoneId) => {
      console.log(`Viewing zone details: ${zoneId}`);
      // Implement view functionality here
    };

    return (
      <>
        <div className="flex mt-4 items-center">
          <div className="w-1/5">{zoneId}</div>
          <div className="w-1/5">{zoneName}</div>
          <div className="w-1/5">{zoneState}</div>
          <div className="w-1/5">{zoneAddress}</div>
          <div className="w-1/5">
            <div
              className={`${
                status === 'Active' ? 'bg-green-400' : 'bg-red-600'
              } text-white w-16 h-7 flex justify-center items-center rounded-lg shadow-lg`}
            >
              {status}
            </div>
          </div>
          <div className="w-1/5 flex">
            <img
              src={viewImage}
              alt="View"
              className="w-7 h-8 cursor-pointer mr-2"
              onClick={() => handleView(zoneId)}
            />
            <img
              src={pencilImage}
              alt="Edit"
              className="w-6 h-6 cursor-pointer mr-2"
              onClick={() => handleEdit(zoneId)}
            />
            <img
              src={trashImage}
              alt="Delete"
              className="w-6 h-6 cursor-pointer"
              onClick={() => handleDelete(zoneId)}
            />
          </div>
        </div>
        <div className="line w-full mt-4">
          <div className="company-bottom-line w-full"></div>
        </div>
      </>
    );
  };

  return (
    <div className="home-container custom-home-background w-screen h-full p-4 flex">
      <SideBar /> {/* Include the sidebar */}
      <div className="right-sidebar-container w-10/12">
        <Header /> {/* Include the header */}
        <div className="projects-container h-2/4 bg-white mt-14 rounded-lg relative shadow-lg">
          <div className="h-20 w-11/12 custom-company-bg absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
            <h1 className="text-white text-2xl font-bold">Add Zone:</h1>
          </div>
          <div className="projects-list flex flex-col pt-6 px-10">
            {/* Zone Form Fields */}
            <form onSubmit={handleSubmit}>
              <div className="form-field-grid mb-1 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mt-16">
                {/* Zone ID */}
                <div className="mb-4">
                  <label htmlFor="zoneId" className="font-semibold block mb-2">
                    Zone ID
                  </label>
                  <input
                    type="text"
                    id="zoneId"
                    onChange={handleInputChange}
                    name="zoneId"
                    placeholder="Enter Zone ID"
                    value={formData.zoneId}
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                </div>

                {/* Zone Name */}
                <div className="mb-4">
                  <label htmlFor="zoneName" className="font-semibold block mb-2">
                    Zone Name
                  </label>
                  <input
                    type="text"
                    id="zoneName"
                    onChange={handleInputChange}
                    name="zoneName"
                    placeholder="Enter Zone Name"
                    value={formData.zoneName}
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                </div>

                {/* Zone State */}
                <div className="mb-4">
                  <label htmlFor="zoneState" className="font-semibold block mb-2">
                    Zone State
                  </label>
                  <select
                    id="zoneState"
                    name="zoneState"
                    value={formData.zoneState}
                    onChange={handleInputChange}
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  >
                    <option value="">Select State</option>
                    <option value="State A">State A</option>
                    <option value="State B">State B</option>
                    <option value="State C">State C</option>
                    {/* Add more states as needed */}
                  </select>
                </div>

                {/* Zone Address */}
                <div className="mb-4">
                  <label htmlFor="zoneAddress" className="font-semibold block mb-2">
                    Zone Address
                  </label>
                  <input
                    type="text"
                    id="zoneAddress"
                    onChange={handleInputChange}
                    name="zoneAddress"
                    placeholder="Enter Zone Address"
                    value={formData.zoneAddress}
                    className="input-field px-3 py-2 w-full outline-none border-custom-class"
                  />
                </div>

                {/* Status */}
                <div className="mb-4">
                  <label className="font-semibold block mb-2">Status</label>
                  <div>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        value="Active"
                        checked={formData.status === 'Active'}
                        onChange={handleStatusChange}
                        className="form-radio h-4 w-4 text-custom-class"
                      />
                      <span className="ml-2">Active</span>
                    </label>
                  </div>
                  <div>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        value="Inactive"
                        checked={formData.status === 'Inactive'}
                        onChange={handleStatusChange}
                        className="form-radio h-4 w-4 text-custom-class"
                      />
                      <span className="ml-2">Inactive</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Button Container */}
              <div className="flex justify-center space-x-4">
                {/* Submit Button */}
                <button
                  type="submit"
                  className="submit-btn w-1/3 text-white px-3 py-2 mb-10 mt-4 rounded-lg text-xl bg-blue-500 hover:bg-blue-600"
                >
                  Submit
                </button>
                {/* Cancel Button */}
                <button
                  type="button"
                  onClick={handleCancel}
                  className="cancel-btn w-1/3 text-white px-3 py-2 mb-10 mt-4 rounded-lg text-xl bg-red-500 hover:bg-red-600"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Zone Display Data Form */}
        <div className="company-container h-2/3 bg-white mt-14 rounded-lg relative shadow-lg">
          <div className="h-20 w-11/12 custom-company-bg absolute -top-6 left-14 rounded-lg flex justify-between items-center px-10">
            <h1 className="text-white text-2xl font-bold">Zone Details:</h1>
          </div>
          <div className="projects-list flex flex-col pt-20 px-10">
            {/* Zone Headings */}
            <div className="flex mt-4 font-bold">
              <div className="w-1/5">Zone ID</div>
              <div className="w-1/5">Zone Name</div>
              <div className="w-1/5">Zone State</div>
              <div className="w-1/5">Zone Address</div>
              <div className="w-1/5">Status</div>
              <div className="w-1/5">Action</div>
            </div>
            <div className="line w-full mt-4">
              <div className="company-bottom-line w-full"></div>
            </div>
            {zones.map((zone) => (
              <ZoneRow key={zone.zoneId} zone={zone} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Zone;
