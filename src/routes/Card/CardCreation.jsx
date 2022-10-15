import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { LocationContext } from '../../contexts/LocationContext';
import { getClima } from '../../service';
import './CardCreation.css';
import "sweetalert2/dist/sweetalert2.css";
import Swal from "sweetalert2";

const CardCreation = () => {
  const { tarjeta, setTarjeta } = useContext(LocationContext) //context
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { 
     }
  });

  const onSubmit = (data) =>{
    getAux(data);
    navigate('/')
  };

  let getAux = (formData) => {
    getClima(formData.locationlatitude,formData.locationlongitude)
    .then((data) => {
      const locationNew = {
        id: tarjeta.length + 1,
        name: formData.locationName,
        latitude: data.latitude,
        longitude: data.longitude,
        current_weather: data.current_weather,
        daily: data.daily,
        imagen: formData.imagen,
        deleted : false
      };
      setTarjeta([...tarjeta, locationNew])
      Swal.fire({
        text: "Created New Card",
        icon: "success",
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/");
        }
      });
      /* navigate('/') */
    })
    .catch((err) => console.log(err));  
  };

  return (
    
    <div className='signupFrm'>
    <div class="wrapper">
     <form className='form' onSubmit={handleSubmit(onSubmit)}>
      <h1>New Location</h1>
      <div className="inputContainer">
        <input
          className='input'
          type='text'
          placeholder='a'
          {...register('locationName', {
            required: ' ',
          })}
        />
        <label for="" className="label">Location Name</label>
        <p>{errors.locationName?.message}</p>
        </div>
        
        <div className="inputContainer">
        
        <input
         className='input' 
          type='numeric' min="-90" max="90"
          placeholder='a'
          {...register('locationlatitude', {
            required: ' ',
          })}
        />
         <label for="" className="label">Latitude</label>
        <p>{errors.locationlatitude?.message}</p>
        </div>
        <div className="inputContainer">
        <input
        className='input'
          type='decimal' min="-180" max="180"
          placeholder='a'
          {...register('locationlongitude', {
            required: ' ',
          })}
        />
        <label for="" className="label">Longitude</label>
        <p>{errors.locationlongitude?.message}</p>
        </div>
        <div className="inputContainer">
        <input
        className='input'
          type="text"
          placeholder="a"
          {...register("imagen", {
            required: " ",
          })}
        />
          <label for="" className="label" defaultValues="">Image URL</label>
        <p>{errors.imagen?.message}</p>
        </div>
        <button className='submitBtn' type='submit'>
          Create Location
        </button>
        
      </form>
    </div>
    </div>
  );
};

export default CardCreation; 