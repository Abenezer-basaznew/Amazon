import React from "react";
import classes from "./Category.module.css"; // Importing CSS module for custom styles specific to the CategoryCard component
 // Importing Link component to navigate between routes

// Functional component that renders an individual category card
function CategoryCard({data}) {
  return <div className={classes.category}>
      <span>
       
        <h2>
          {data.title}
        </h2>
      </span>
      {/* Rendering the category image */}
      <img src={data.image} alt={data.name} />
      {/* 'Shop now' prompt below the image */}
    </div>;
}

export default CategoryCard; // Exporting the component for use in other parts of the application