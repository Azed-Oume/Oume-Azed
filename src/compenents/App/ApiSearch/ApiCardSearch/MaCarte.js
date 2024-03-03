// import React, { useEffect, useState } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';

// const MaCarte = ({ coordinates }) => {
//   console.log(coordinates, "LIGNE 6 DE MACARTES");
//   // Utilisation d'une clé unique pour forcer le re-rendering du composant MapContainer
//   const [mapKey, setMapKey] = useState(0);
  
//   useEffect(() => {
//     // Mettre à jour la clé pour forcer le re-rendering du composant MapContainer
//     setMapKey(prevKey => prevKey + 1);
//   }, [coordinates]);

//   return (
//     <MapContainer key={mapKey} center={coordinates} zoom={coordinates ? 12 : 6} style={{ height: '400px' }}>
//       <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       {coordinates && (
//         <Marker position={coordinates}>
//           <Popup>
//             <b>Position :</b> {coordinates[0]}, {coordinates[1]}
//           </Popup>
//         </Marker>
//       )}
//     </MapContainer>
//   );
// };

// export default MaCarte;















// // import React, { useEffect, useState } from 'react';
// // import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// // import 'leaflet/dist/leaflet.css';

// // const MaCarte = ({ coordinates }) => {
// //   console.log(coordinates, "LIGNE 6 DE MACARTES");
// //   // Coordonnées géographiques de la France
// //   const [defaultPosition, setDefaultPosition] = useState([48.8566, 2.3522]);

// //   useEffect(() => {
// //     // Mettre à jour la carte avec les nouvelles coordonnées géographiques de la ville recherchée
// //     // Assurez-vous que les coordonnées sont disponibles
// //     if (coordinates) {
// //         // Mettre à jour la position centrale de la carte avec les coordonnées de la ville
// //         setDefaultPosition(coordinates);
// //     }
// //   }, [coordinates]);
// //   console.log(coordinates, "LIGNE 18 DE MACARTES");
// //   console.log(defaultPosition, "LIGNE 19 DE MACARTES");


// //   return (
// //     <MapContainer center={defaultPosition} zoom={coordinates ? 12 : 6} style={{ height: '400px' }}>
// //       <TileLayer
// //         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// //         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// //       />
// //       {coordinates && (
// //         <Marker position={coordinates}>
// //           <Popup>
// //             <b>Position :</b> {coordinates[0]}, {coordinates[1]}
// //           </Popup>
// //         </Marker>
// //       )}
// //     </MapContainer>
// //   );
// // };

// // export default MaCarte;





















// // import React, { useEffect, useState } from 'react';
// // import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// // import 'leaflet/dist/leaflet.css';

// // const MaCarte = ({ coordinates }) => {
// //   console.log(coordinates, "LIGNE 6 DE MACARTE")
// //   // Coordonnées géographiques de la France
// //   const [defaultPosition, setDefaultPosition] =useState(coordinates || [48.8566, 2.3522])
// //   // const defaultPosition = [46.603354, 1.888334];

// //   useEffect(() => {
// //     // Mettre à jour la carte avec les nouvelles coordonnées géographiques de la ville recherchée
// //     // Assurez-vous que les coordonnées sont disponibles
// //     if (coordinates) {
// //         // Mettre à jour la position centrale de la carte avec les coordonnées de la ville
// //         setDefaultPosition(coordinates);
// //     }
// // }, [coordinates]);

// //   return (
// //     <MapContainer center={defaultPosition} zoom={coordinates ? 12 : 6} style={{ height: '400px' }}>
// //       <TileLayer
// //         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// //         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// //       />
// //       {coordinates && (
// //         <Marker position={coordinates}>
// //           <Popup>
// //             <b>Position :</b> {coordinates[0]}, {coordinates[1]}
// //           </Popup>
// //         </Marker>
// //       )}
// //     </MapContainer>
// //   );
// // };

// // export default MaCarte;
