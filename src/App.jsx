import css from "./App.module.css";
import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";

import { fetchImages } from "./images-api.js";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [total, setTotal] = useState(0);

  const handleSearch = async (query) => {
    try {
      setLoading(true);
      const currentPage = 1;
      const data = await fetchImages(query, currentPage);
      setImages((prevImages) => [...prevImages, ...data.images]);
      setTotal(data.total);
    } catch (error) {
      setError(true);
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className={css.container}>
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p>Error fetching images. Please try again.</p>}
      <ImageGallery imagesData={images} />
    </div>
  );
}
export default App;
