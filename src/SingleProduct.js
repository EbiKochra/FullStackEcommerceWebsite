import { Container } from "./styles/Container";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useProductContext } from "./context/productcontext";
import PageNavigation from "./components/PageNavigation";
import MyImage2 from "./MyImage2";
import FormatPrice from "./Helpers/FormatPrice";
import { TbReplace, TbTruck, TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import Star from "./components/Star";
import AddToCart from "./components/AddToCart";
// import api from './data.json';



const API = "https://livehostbackend-production.up.railway.app/api/products";
//const API = api;

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } = useProductContext();
  const {id} = useParams();

    useEffect(() => {
      console.log("Fetching product with ID:", id);
      getSingleProduct(`${API}?id=${id}`);
    }, []);
  
    console.log("Single Product Data:", singleProduct);

    // Check if singleProduct is not null and if it's an array with at least one element
  if (singleProduct && Array.isArray(singleProduct.Products) && singleProduct.Products.length > 0) {
    // Access the first product in the array
    const product = singleProduct.Products[0];

    const {
      id: alias,
      name,
      company,
      price,
      description,
      category,
      stock,
      stars,
      reviews,
      image,
    } = product;

    const imagesArray = [image]; // Use the image URL directly


// Now, imagesArray contains an array of objects with id and url properties
console.log(imagesArray);

  return (
    <Wrapper>
    <PageNavigation title={name} />
    <Container className="container">
      <div className="grid grid-two-column">
        {/* product Images  */}
        <div className="product_images">
        {imagesArray.length > 0 &&
        imagesArray.map((imageUrl, index) => {
          console.log("Image URL:", imageUrl); // Add this line to log the imageURL
          return (
            <MyImage2 imagesArray={imagesArray} key={index} />
          );
        })}
        </div>


        {/* product data  */}
        <div className="product-data">
          <h2>{name}</h2>
          <Star stars={stars} reviews={reviews} />
          
          <p className="product-data-price">
            MRP:
            <del>
              <FormatPrice price={price + 250000} />
            </del>
          </p>
          <p className="product-data-price product-data-real-price">
            Deal of the Day: <FormatPrice price={price} />
          </p>
          <p>{description}</p>
          <div className="product-data-warranty">
            <div className="product-warranty-data">
              <TbTruckDelivery className="warranty-icon" />
              <p>Free Delivery</p>
            </div>

            <div className="product-warranty-data">
              <TbReplace className="warranty-icon" />
              <p>30 Day Replacement</p>
            </div>

            <div className="product-warranty-data">
              <TbTruck className="warranty-icon" />
              <p>Ebi Delivered </p>
            </div>

            <div className="product-warranty-data">
              <MdSecurity className="warranty-icon" />
              <p>2 Year Warranty </p>
            </div>
          </div>

          <div className="product-data-info">
            <p>
              Available:
              <span> {stock > 0 ? "In Stock" : "Out of Stock"}</span>
            </p>
            <p>
              ID : <span> {id} </span>
            </p>
            <p>
              Brand :<span> {company} </span>
            </p>
          </div>
          <hr />
          {stock > 0 && <AddToCart product={product} />}
        </div>
      </div>
    </Container>
  </Wrapper>
  );
}

if (isSingleLoading) {
  return <div className="page_loading">Loading....</div>;
}

return null;

};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }

  .product_images {
    display: flex;
    align-items: center;
  }

  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;
