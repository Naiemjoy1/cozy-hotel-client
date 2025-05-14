import React, { useEffect, useState } from "react";
import ImageGridCard from "./ImageGridCard";

const ImageGrid = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("http://localhost:3000/images");
        if (!response.ok) {
          throw new Error("Failed to fetch images");
        }
        const data = await response.json();
        setImages(data);
        console.log("images data:", data);
      } catch (error) {
        console.error("Error fetching images:", error.message);
      }
    };

    fetchImages();

    return () => {};
  }, []);

  console.log(images);

  return (
    <div>
      {images.map((image) => (
        <ImageGridCard key={image._id} image={image}></ImageGridCard>
      ))}
    </div>
  );
};

export default ImageGrid;
