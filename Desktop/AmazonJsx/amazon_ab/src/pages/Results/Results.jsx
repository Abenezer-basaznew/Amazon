import React, { useEffect } from "react";
import styles from "./Results.module.css";
import Layout from "../../components/LayOut/LayOut.jsx";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints.js";
import ProductCard from "../../components/Products/ProductCard.jsx";

function Results() {
  const [results, setResults] = React.useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then(res => {
        setResults(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [categoryName]);

  return (
    <Layout>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>
          Category / {categoryName}
        </p>
        <hr />
        <div className={styles.products_container}>
          {results.map(product => (
            <ProductCard
              key={product.id}
              data={product}
              renderDesc={false}
              renderAdd={true}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default Results;
