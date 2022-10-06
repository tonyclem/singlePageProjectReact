import React from "react";
import styled from "styled-components";
import { useProductsContext } from "../context/Products_context";
import Loading from "./Loading";
import Error from "./Error";

const AsideNav = () => {
  const {
    productCategory: categories,
    product_loading: loading,
    product_error: error,
  } = useProductsContext();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <Wrapper>
      <div className="container">
        <div className="category-h3">
          <h3>Categories</h3>
        </div>
        {categories.map((categoryItem) => {
          const { _id: id, name, category, images } = categoryItem;
          return (
            <div className="category-container" key={id}>
              <img src={images} alt={name} />
              <h4>{category}</h4>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 1rem;
  .container {
    border-radius: 10px;
    display: block;
    padding: 0 1rem;

    .category-h3 {
      background: #000;
      padding: 0.5rem 1rem;

      h3 {
        color: #fff;
        padding: 0.5rem 1rem;
      }
    }

    .category-container {
      display: flex;
      background: #f1f1f1;
      padding: 1rem 1rem;
      img {
        width: 2.5rem;
        height: 3.5rem;
      }

      h4 {
        padding: 0 1rem;
      }
    }

    .category-container:hover {
      background: #000;
      color: #fff;
    }
  }
`;

export default AsideNav;
