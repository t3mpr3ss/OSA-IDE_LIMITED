/* ============================================================
   PROJECT DATA. project.html and projects.html fill themselves from this list.
   - "images": photo paths, matching the sliders in index.html. Letter case must match the real file names.
   - Locations came from folder names: CONFIRM with your dad.
   - Leave "" for anything not confirmed; empty fields are hidden.
   ============================================================ */
const PROJECTS = [
  { id:"condominium", title:"Three-Storey Condominium", category:"Residential",
    programme:"National Housing Programme", location:"Owerri, Imo State", scope:"", completed:"",
    summary:"A three-storey residential condominium delivered under the National Housing Programme.",
    images:[
      "./IMAGES/Condominium/Image1.jpg",
      "./IMAGES/Condominium/Image2.jpg",
      "./IMAGES/Condominium/Image3.jpg",
      "./IMAGES/Condominium/Image4.jpg",
      "./IMAGES/Condominium/Image5.jpg"] },
  { id:"mosque", title:"NAF Senior Quarters Central Mosque", category:"Institutional",
    programme:"", location:"Kyami, Abuja", scope:"", completed:"",
    summary:"Central mosque for the NAF Senior Quarters.",
    images:[
      "./IMAGES/Mosque/Image1.jpg",
      "./IMAGES/Mosque/Image2.jpg",
      "./IMAGES/Mosque/image3.jpg",
      "./IMAGES/Mosque/image4.jpg",
      "./IMAGES/Mosque/image5.jpg"] },
  { id:"epe-roads", title:"Internal Roads, Epe Grammar School", category:"Road construction",
    programme:"", location:"Epe, Lagos State", scope:"", completed:"",
    summary:"Construction of internal roads at Epe Grammar School.",
    images:[
      "./IMAGES/InternalRoad/2.jpg",
      "./IMAGES/InternalRoad/5.jpg",
      "./IMAGES/InternalRoad/4.jpg",
      "./IMAGES/InternalRoad/6.jpg",
      "./IMAGES/InternalRoad/7.jpg"] },
  { id:"hayin-gada", title:"Construction of Hayin Gada", category:"Road construction",
    programme:"", location:"Abadawa, Kaduna State", scope:"", completed:"",
    summary:"Road construction works at Hayin Gada.",
    images:[
      "./IMAGES/HayinGada/Image1.jpg",
      "./IMAGES/HayinGada/Image2.jpg",
      "./IMAGES/HayinGada/Image3.jpg",
      "./IMAGES/HayinGada/Image4.jpg",
      "./IMAGES/HayinGada/Image5.jpg"] },
  { id:"borehole", title:"Borehole and FRP Water Tanks", category:"Water infrastructure",
    programme:"", location:"Various sites", scope:"Borehole, FRP water tanks and water treatment", completed:"",
    summary:"Borehole, FRP water storage tanks and water treatment at various sites.",
    images:[
      "./IMAGES/Borehole/Image1.jpg",
      "./IMAGES/Borehole/Image2.jpg",
      "./IMAGES/Borehole/Image3.jpg",
      "./IMAGES/Borehole/Image4.jpg",
      "./IMAGES/Borehole/Image5.jpg"] },
  { id:"jahi-residence", title:"Residential Building, Jahi", category:"Residential",
    programme:"", location:"Jahi, Abuja", scope:"", completed:"",
    summary:"Residential building at Jahi, Abuja.",
    images:[
      "./IMAGES/ResidentialBuilding/Image1.jpg",
      "./IMAGES/ResidentialBuilding/Image2.jpg",
      "./IMAGES/ResidentialBuilding/Image3.jpg",
      "./IMAGES/ResidentialBuilding/Image4.jpg",
      "./IMAGES/ResidentialBuilding/Image5.jpg"] }
];

// Kept so the project pages keep working: paths are listed above, nothing to fetch.
const PROJECTS_READY = Promise.resolve();