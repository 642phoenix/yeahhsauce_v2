import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
        🔥 Welcome to Yeahhsauce - Where Memphis Culture Comes to Life! 🔥

Hey there, Memphis fam and trendsetters from all around! 🌆🙌 We're thrilled to officially welcome you to the electrifying world of Yeahhsauce, a clothing brand born right in the heart of Memphis! 🎉👑

Here at Yeahhsauce, we're not just about clothes – we're about capturing the essence of the city that's known for its grit, soul, and unapologetic swag. 🎶💯 From the streets to the beats, we're all about representing that authentic Memphis vibe that legends like Young Dolph and Moneybagg Yo have brought to the world stage. 💸🎤

Our threads are more than just fabric; they're a celebration of the culture that's made Memphis an iconic hub of creativity, resilience, and style. Each design, each stitch, and each piece of apparel tells a story, your story, our story – the story of a city that's all about unity, hustle, and success. 💪👕

So, whether you're strolling down Beale Street, vibin' to the sounds of Stax Records, or simply repping the 901 wherever you go, Yeahhsauce is your ultimate go-to for clothing that's dripping with Memphis flavor. From fresh tees to head-turning accessories, we've got something for everyone who's proud to rock the swagger of the Bluff City. 🌆👗

Join us on this journey as we blend the past, present, and future of Memphis culture into every stitch. Get ready to turn heads, break necks, and set trends like never before. 💥🔥

Stay tuned, stay saucy, and get ready to embrace the Yeahhsauce lifestyle! Follow, tag, and show us how you're making our threads your own. Let's put Memphis on the map, one stylish step at a time. 🗺️👟

#Yeahhsauce #MemphisBorn #SauceOn #GritAndGlam

Welcome to the family! 🙏🤝






        </p>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">


          <div className="col-md-3 col-sm-6 mb-3 px-3">
            {/* <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Jewelery</h5>
              </div>
            </div> */}
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="./assets/images/mens.jpg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Mens's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="./assets/images/womans.jpg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Women's Clothing</h5>
              </div>
            </div>
          </div>
          {/* <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Electronics</h5>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage