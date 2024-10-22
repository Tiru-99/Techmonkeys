import React from "react";
import Draggable from "react-draggable";

const DraggableImageSlider = () => {
  // Array of image URLs (replace with your actual images)
  const images = [
    "/webdev.jpg",
    "/webdev.jpg",
    "/webdev.jpg",
    "/webdev.jpg",
    "/webdev.jpg",
  ];

  return (
    <div className="overflow-hidden w-full">
      {/* Draggable container */}
      <Draggable axis="x" bounds="parent">
        <div className="flex w-[1000px] cursor-grab">
          {images.map((image, index) => (
            <div key={index} className="min-w-[50%] p-2">
              <img src={image} alt={`Image ${index + 1}`} className="w-full h-auto rounded-lg" />
            </div>
          ))}
        </div>
      </Draggable>
    </div>
  );
};

export default DraggableImageSlider;
