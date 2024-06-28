import React, { useState } from 'react'
import productdata from './Productdata'
import { IoIosCloseCircle } from "react-icons/io";

function Product({ addtocart, setproduct }) {


  const [detail, setdetail] = useState([]);
  const [close, setclose] = useState(false);
  const detailpage = (product) => {
    setdetail([{ ...product }])
    setclose(true)
  }
  const addproduct = (x) => {
    setproduct(x);
    addtocart(x);
  }
  return (
    <>
      {close ? <div className="detail_container">
        <div className="detail_contant">
          {
            detail.map((x) => {
              {
                return (
                  <>
                    <button className='close' onClick={() => setclose(false)}><IoIosCloseCircle /></button>

                    <div className="detail_info">

                      <div className="img-box">
                        <img src={x.img} alt={x.Title} />
                      </div>
                      <div className="product_detail">
                        <h2>{x.Title}</h2>
                        <h3>₹ {x.price}</h3>
                        <p>{x.Des}</p>
                        <button onClick={() => addproduct(x)}>Add To Cart</button>
                      </div>
                    </div>
                  </>
                )

              }
            })
          }
        </div>
      </div> : null
      }

      <div className="container">

        {
          productdata.map((element) => {
            return (
              <>
                <div className="box">
                  <div className="contant">
                    <div className="img_box">
                      <img src={element.img} alt="" />
                    </div>
                    <div className="detail">
                      <div className="info">
                        <h3>{element.Title}</h3>
                        <p>₹ {element.price}</p>
                      </div>
                      <button onClick={() => detailpage(element)}>View</button>
                    </div>
                  </div>
                </div>
              </>
            )
          })}
      </div>

    </>
  )
}

export default Product
