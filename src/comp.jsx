import React, { useState } from 'react';
import axios from 'axios';

const ImageUploader = () => {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [base64Image, setBase64Image] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
    const url = URL.createObjectURL(file);
    setImageUrl(url);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('image', image);
    try {
      await axios.post('https://insure-tech-flask-production.up.railway.app/predict', formData).then((response)=>{
        console.log(response.data)

          setBase64Image(response.data);
      })
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form>
        <input type="file" onChange={handleFileChange} />
        <button type="button" onClick={(e)=>handleFormSubmit(e)} className="btn btn-primary">Upload</button>
      </form>
      <div className='image_holder'>
        
      {imageUrl && (
        <div>
          <h2>Uploaded Image:</h2>
          <img src={imageUrl} alt="Uploaded" width="250" height="250" />
        </div>
      )}
      {base64Image && (
        <div>
          <h2>Base64 Image:</h2>
          <img src={`data:image/png;base64,${base64Image}`} alt="Base64" width="250" height="250" />
        </div>
      )}
      </div>
    </div>
  );
};

export default ImageUploader;
