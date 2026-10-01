import React, { useEffect, useState } from "react";
import {
  FaImages,
  FaTrash,
  FaUpload,
  FaSignOutAlt,
  FaHome,
  FaPlus,
  FaTimes
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function AdminDashboard() {

  const navigate = useNavigate();

  const [images, setImages] = useState([]);

  const [showUpload, setShowUpload] = useState(false);

  const [imageTitle, setImageTitle] = useState("");

  const [selectedImage, setSelectedImage] = useState(null);

  // Load images from localStorage
  useEffect(() => {

    const savedImages =
      JSON.parse(localStorage.getItem("galleryImages")) || [];

    setImages(savedImages);

  }, []);

  // Upload image
  const handleUpload = (e) => {

    e.preventDefault();

    if (!selectedImage) {
      alert("Please select an image");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {

      const newImage = {
        id: Date.now(),
        title: imageTitle || "Safari Adventure",
        image: reader.result,
        date: new Date().toLocaleDateString()
      };

      const updatedImages = [
        ...images,
        newImage
      ];

      localStorage.setItem(
        "galleryImages",
        JSON.stringify(updatedImages)
      );

      setImages(updatedImages);

      setImageTitle("");
      setSelectedImage(null);
      setShowUpload(false);

    };

    reader.readAsDataURL(selectedImage);
  };

  // Delete image
  const deleteImage = (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this image?"
    );

    if (!confirmDelete) return;

    const updatedImages = images.filter(
      (image) => image.id !== id
    );

    localStorage.setItem(
      "galleryImages",
      JSON.stringify(updatedImages)
    );

    setImages(updatedImages);
  };

  // Logout
  const logout = () => {

    localStorage.removeItem("adminLoggedIn");

    navigate("/");

  };

  return (
    <div className="min-h-screen bg-[#f7f4ed]">

      {/* Header */}

      <header className="bg-black text-white px-6 py-5">

        <div className="max-w-7xl mx-auto flex justify-between items-center">

          <div>

            <h1 className="text-2xl font-bold">
              Wild Connector
            </h1>

            <p className="text-yellow-400 text-sm">
              SAFARIS ADMIN
            </p>

          </div>

          <button onClick={logout}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-500 px-5 py-3 rounded-full duration-300"
          >
           
            <FaSignOutAlt />
          </button>

        </div>

      </header>


      {/* Main */}

      <main className="max-w-7xl mx-auto px-6 py-10">


        {/* Dashboard title */}

        <div className="flex flex-col md:flex-row justify-between md:items-center gap-5 mb-10">

          <div>

            <h2 className="text-4xl font-bold">
              Admin Dashboard
            </h2>

            <p className="text-gray-600 mt-2">
              Manage your safari gallery.
            </p>

          </div>


          <div className="flex gap-3">

            <button
              onClick={() => navigate("/Home")}
              className="flex items-center gap-2 bg-gray-800 text-white px-5 py-3 rounded-full hover:bg-gray-700"
            >
              <FaHome />
              Website
            </button>


            <button
              onClick={() => setShowUpload(true)}
              className="flex items-center gap-2 bg-green-900 text-white px-5 py-3 rounded-full hover:bg-green-800"
            >
              <FaPlus />
              Upload Image
            </button>

          </div>

        </div>


        {/* Statistics */}

        <div className="grid md:grid-cols-3 gap-6 mb-10">


          <div className="bg-white shadow-lg rounded-2xl p-6">

            <div className="flex justify-between items-center">

              <div>

                <p className="text-gray-500">
                  Total Images
                </p>

                <h3 className="text-4xl font-bold mt-2">
                  {images.length}
                </h3>

              </div>

              <div className="bg-green-100 p-4 rounded-full">

                <FaImages className="text-green-900 text-2xl" />

              </div>

            </div>

          </div>


          <div className="bg-white shadow-lg rounded-2xl p-6">

            <p className="text-gray-500">
              Gallery Status
            </p>

            <h3 className="text-2xl font-bold mt-2 text-green-700">
              Active
            </h3>

          </div>


          <div className="bg-white shadow-lg rounded-2xl p-6">

            <p className="text-gray-500">
              Storage
            </p>

            <h3 className="text-2xl font-bold mt-2">
              Browser
            </h3>

          </div>

        </div>


        {/* Gallery management */}

        <div className="bg-white rounded-3xl shadow-xl p-6">

          <div className="flex justify-between items-center mb-6">

            <h2 className="text-2xl font-bold">
              Gallery Images
            </h2>

            <span className="bg-green-100 text-green-900 px-4 py-2 rounded-full">
              {images.length} Images
            </span>

          </div>


          {images.length === 0 ? (

            <div className="text-center py-20">

              <FaImages className="mx-auto text-gray-300 text-6xl" />

              <h3 className="text-2xl font-bold mt-5">
                No Images Yet
              </h3>

              <p className="text-gray-500 mt-2">
                Upload your first safari image.
              </p>

              <button
                onClick={() => setShowUpload(true)}
                className="mt-6 bg-green-900 text-white px-6 py-3 rounded-full"
              >
                Upload Image
              </button>

            </div>

          ) : (

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

              {images.map((item) => (

                <div
                  key={item.id}
                  className="group bg-gray-50 rounded-2xl overflow-hidden shadow-md"
                >

                  <div className="relative">

                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-56 object-cover"
                    />

                    <button
                      onClick={() => deleteImage(item.id)}
                      className="absolute top-3 right-3 bg-red-600 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 duration-300 hover:bg-red-700"
                    >
                      <FaTrash />
                    </button>

                  </div>

                  <div className="p-4">

                    <h3 className="font-bold text-lg">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-500">
                      Uploaded: {item.date}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>

      </main>


      {/* Upload Modal */}

      {showUpload && (

        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-6">

          <div className="bg-white w-full max-w-lg rounded-3xl p-8 relative">

            <button
              onClick={() => setShowUpload(false)}
              className="absolute top-5 right-5 text-gray-500 hover:text-red-600"
            >
              <FaTimes className="text-xl" />
            </button>


            <div className="text-center mb-6">

              <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center">

                <FaUpload className="text-green-900 text-2xl" />

              </div>

              <h2 className="text-3xl font-bold mt-4">
                Upload Safari Image
              </h2>

              <p className="text-gray-500">
                Add an image to your gallery.
              </p>

            </div>


            <form onSubmit={handleUpload}>


              {/* Title */}

              <label className="block font-semibold mb-2">
                Image Title
              </label>

              <input
                type="text"
                value={imageTitle}
                onChange={(e) => setImageTitle(e.target.value)}
                placeholder="Example: Akagera National Park"
                className="w-full border p-4 rounded-xl mb-5 outline-none focus:ring-2 focus:ring-green-700"
              />


              {/* File */}

              <label className="block font-semibold mb-2">
                Choose Image
              </label>

              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setSelectedImage(e.target.files[0])
                }
                className="w-full border p-3 rounded-xl mb-6"
                required
              />


              {/* Preview */}

              {selectedImage && (

                <div className="mb-6">

                  <p className="font-semibold mb-2">
                    Preview
                  </p>

                  <img
                    src={URL.createObjectURL(selectedImage)}
                    alt="Preview"
                    className="w-full h-48 object-cover rounded-xl"
                  />

                </div>

              )}


              <button
                type="submit"
                className="w-full bg-green-900 hover:bg-green-800 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3"
              >

                <FaUpload />

                Upload Image

              </button>

            </form>

          </div>

        </div>

      )}

    </div>
  );
}

export default AdminDashboard;