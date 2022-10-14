import Location from "./location";
import "./locations.css";
import { LocationContext } from "../../contexts/LocationContext";
import { useContext } from "react";

const Locations = ({}) => {
  const locations = useContext(LocationContext);
  console.log("dashboiard Vale" + JSON.stringify(locations));
  console.log("dashboiard le Vale: " + locations.tarjeta.length);

  return (
    
    <div className="container__card">
      {locations.tarjeta.length > 0 ? (
        locations.tarjeta.map((location) => (
          <Location key={location.id} location={location} />
        ))
      ) : (
        <div>
          <h1 className="mesage">
            Enter a new location.
          </h1>
        </div>
      )}
    </div>
  );
};

export default Locations;
