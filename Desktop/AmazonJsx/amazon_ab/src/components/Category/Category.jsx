import React from "react";
import { categoryInfos } from "./CategoryFullinfos.js";
import CategoryCard from "./CategoryCard";
import styles from "./Category.module.css";
function Category() {
  return <section className={styles.category__container}>
      {categoryInfos.map(infos =>
        <CategoryCard key={infos.imgLink} data={infos} />
      )}
    </section>;
}

export default Category;
