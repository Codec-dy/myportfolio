import React, { useState } from "react";
import axios from "axios";

const AddProject = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [uploadedUrl, setUploadedUrl] = useState("");

  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file)); // Preview image
    }
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  // Handle upload using Axios
  const handleUpload = async () => {
    if (!image) {
      alert("Please select an image first!");
      return;
    }

    setUploading(true);
    setProgress(0);

    // var formData = new FormData();
    // formData.append("image", image); // Match backend field name
    // for(var pair of formData.entries()) {
    //   console.log(pair[0]+',.... '+pair[1]);
    // }
    const base64 = await convertBase64(image)
    const img = {"image":base64}
    try {
      const response = await axios.post("http://localhost:3000/api/upload", img, {
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setProgress(percentCompleted);
        },
      });

      setUploadedUrl(response.data.imageUrl);
      console.log(response.data)
      alert("Image uploaded successfully!");
    } catch (error) {
      console.error("Upload error:", error);
      alert("Error uploading image.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-100 min-h-screen">
      <h2 className="text-xl font-bold mb-4">Upload an Image</h2>

      <input type="file" accept="image/*" onChange={handleFileChange} className="mb-4" />

      {preview && (
        <div className="mb-4">
          <img src={preview} alt="Preview" className="w-40 h-40 object-cover rounded" />
        </div>
      )}

      <button
        onClick={handleUpload}
        disabled={uploading}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
      >
        {uploading ? `Uploading... ${progress}%` : "Upload"}
      </button>

      {uploadedUrl && (
        <div className="mt-4">
          <p className="text-green-500">Upload Successful!</p>
          <a href={uploadedUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            View Image
          </a>
        </div>
      )}
    </div>
  );
};

export default AddProject;
