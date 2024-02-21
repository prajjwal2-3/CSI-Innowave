import React from "react";
import galleryData from "./GalleryData.jsx"; // Import your gallery data

const Gallery = () => {
    return (
        <div className="grid grid-cols-3 gap-4 m-5">
            {galleryData.map((image) => (
                <div
                    key={image.title}
                    className="bg-white p-4 shadow-md rounded-sm m-2 h-96"
                >
                    <img
                        src={image.imageLink}
                        alt={image.title}
                        className="w-full h-full object-cover mb-4 rounded-md"
                    />
                </div>
            ))}
        </div>
    );
};

export default Gallery;