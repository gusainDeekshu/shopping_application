this readme file is necessary because it contains code for app.jsx and Feedback.jsx which cant be added to git due to security reasons 

for app.jsx{
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Feedback from './components/Feedback';
import Product from './components/Product';
import Nav from './components/Nav';
import Cart from './components/Cart';
import Visitor from './components/Visitor';




function App() {
  const addvisitor=()=>{fetch('http://localhost:7000/api/users',{method:'POST',headers:{"Content-Type":"application/json"},body:""}).then(()=>{console.log("new user added")})}
  useEffect(() => {
    addvisitor();
}, [])
  const [product, setproduct] = useState([])
  //add to cart
  const [cart, setcart] = useState([])

  const addtocart = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id
    })
    if (exist) {
      alert("This Product Is Already Added To Cart")
    } else {
      setcart([...cart, { ...product, qty: 1 }])
      alert("Product Added To Cart")

    }
  }

  return (
    <>
      <Nav />

      <Routes>
        <Route path="/feedback" element={<Feedback />}></Route>
        <Route path='/Cart' element={<Cart cart={cart} setcart={setcart} />}></Route>
        <Route path='/visitor' element={<Visitor />}></Route>
        <Route index element={<Product setcart={setcart} cart={cart} addtocart={addtocart} setproduct={setproduct} />}></Route>

      </Routes>







    </>
  )
}

export default App
}


for Feedback.jsx inside components{
import React from 'react'
import { useState } from 'react'
import './feedback.css'


const API_KEY = "your api key";


function Feedback() {
  const [feedback, setfeedback] = useState("");
  const [Sentiment, setSentiment] = useState("") //"negative" or "positve"
  async function callOpenAIAPI() {
    console.log("callapi");
    // -H "Content-Type: application/json" \
    // -H "Authorization: Bearer $OPENAI_API_KEY" \
    const APIBody = {
      "model": "gpt-3.5-turbo",
      "messages": [{
        "role": "system",
        "content": "You will be provided with a tweet, and your task is to classify its sentiment as positive, neutral, or negative."
      },
      {
        "role": "user",
        "content": feedback
      }
      ],
      "temperature": 0.7,
      "max_tokens": 64,
      "top_p": 1,


    }

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + API_KEY
      },
      body: JSON.stringify(APIBody)
    }).then((data) => {
      return data.json();
    }).then((data) => {
      console.log(data);
      if (data.error.message) {
        setSentiment(data.error.message);
      } else {
        setSentiment(data.message);
      } // positive or negative
      // setSentiment(data.choices[0].text.trim()); // positive or negative
    })
  }
  return (
    <div className='feedbackcontainer'>
      <h1>SEND YOUR FEEDBACK</h1>
      <div>
        <textarea onChange={(e) => setfeedback(e.target.value)} placeholder='Paste your feedback here!' cols={50} rows={10} />
      </div>
      <div>
        <button className='btn' style={{ backgroundColor: "rgb(4,170,109)" }} onClick={callOpenAIAPI}>
          Get The Feedback Sentiment From OpenAi
        </button>
      </div>
      <br />
      {Sentiment !== "" ? <h3>This Tweet Is: {Sentiment}</h3> : null}
    </div>
  )
}

export default Feedback
}
