import node_geocoder from "node-geocoder";

const options: node_geocoder.Options = {
    provider: "google",
  
    // Optional depending on the providers
    apiKey: 'AIzaSyC68Bwid6IboyXuwrQbuMf1nJCjlYYhNG4', // for Mapquest, OpenCage, APlace, Google Premier
    formatter: null // 'gpx', 'string', ...
  };
  
export const geocoder = node_geocoder(options);
  