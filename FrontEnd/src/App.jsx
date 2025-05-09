import { useState } from 'react'
import './App.css'
import nodejs from './assets/nodejs.png'
import amazon from './assets/amazon.png'
import swiggy from './assets/swiggy.png'
import { FaUserPlus } from "react-icons/fa";
import { PiBuildingOfficeThin } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { PiUserSound } from "react-icons/pi";
import { LuLayers } from "react-icons/lu";
import logo from './assets/images.jpg'


function App() {
  

  const[jobBar,setJobBar]=useState("false");

  const handleClick=()=>{
    
    jobBar?setJobBar(false):setJobBar(true);
    console.log("Clicked",jobBar);
  }

  // const hiddenlayer=document.querySelector('.hidden-layer');

  const handleEvent=()=>{
    console.log("clicked")
    jobBar?setJobBar(false):setJobBar(true);
  }
  


  return (
    <main>
      <header>
        <nav>
          <div className='outer-container'>
              <div>
                <img src={logo} alt="" />
              </div>
              <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Find Jobs</a></li>
                <li><a href="">Find Talents</a></li>
                <li><a href="">About us</a></li>
                <li><a href="">Testimonials</a></li>
              </ul>
              <div className='btn-container-nav'>
                <button onClick={()=>handleClick()}>Create Jobs</button>
              </div>
          </div>
        </nav>
        <aside>
          <div className='search-icon'>
            <div><IoSearch /></div>
            <input type="text" placeholder='Search by Job Title, Role'/>
          </div>
          <div className='preferred-loc'>
            <CiLocationOn />
            <select name="" id="">
              <option value="Preferred Location">Preferred Location</option>
            </select>
          </div>
          <div className='preferred-loc'>
            <PiUserSound />
            <select name="" id="">
              <option value="Job Type">Job Type</option>
            </select>
          </div>
          <div className='range-currency'>
            <p><span>Salary Per Month</span>&#8377;50k - &#8377;80k</p>
            <div className='line-container'>
              <div className='line'>
                <span className='first-round'></span>
                <span className='second-round'></span>
              </div>
              <div className='line2'></div>
            </div>           
          </div>
        </aside>
      </header>
      <div className='main-container'>
          <div className='inner-box'>
            <img src={amazon} alt="" />
            <div className='timer'>24h ago</div>
            <h4>Full Stack Developer</h4>
            <div className='container-exp'>
                <div>
                  <FaUserPlus />
                  <p>1-3 yr Exp</p>
                </div>
                <div>
                  <PiBuildingOfficeThin />
                  <p>Onsite</p>
                </div>
                <div>
                  <LuLayers />
                  <p>12LPA</p>
                </div>
            </div>
            <div className='list-items'>
              <p>&#x2022; A user-friendly interface lets you browse stunning photos and videos</p>
              <p>&#x2022; Filter destinations based on interests and travel style, and create personalized </p>
            </div>
            <button>Apply now</button>
          </div>
          <div className='inner-box'>
            <img src={nodejs} alt="" />
            <div className='timer'>24h ago</div>
            <h4>Full Stack Developer</h4>
            <div className='container-exp'>
                <div>
                  <FaUserPlus />
                  <p>1-3 yr Exp</p>
                </div>
                <div>
                  <PiBuildingOfficeThin />
                  <p>Onsite</p>
                </div>
                <div>
                  <LuLayers />
                  <p>12LPA</p>
                </div>
            </div>
            <div className='list-items'>
              <p>&#x2022; A user-friendly interface lets you browse stunning photos and videos</p>
              <p>&#x2022; Filter destinations based on interests and travel style, and create personalized </p>
            </div>
            <button>Apply now</button>
          </div>
          <div className='inner-box'>
            <img src={swiggy} alt="" />
            <div className='timer'>24h ago</div>
            <h4>Full Stack Developer</h4>
            <div className='container-exp'>
                <div>
                  <FaUserPlus />
                  <p>1-3 yr Exp</p>
                </div>
                <div>
                  <PiBuildingOfficeThin />
                  <p>Onsite</p>
                </div>
                <div>
                  <LuLayers />
                  <p>12LPA</p>
                </div>
            </div>
            <div className='list-items'>
              <p>&#x2022; A user-friendly interface lets you browse stunning photos and videos</p>
              <p>&#x2022; Filter destinations based on interests and travel style, and create personalized </p>
            </div>
            <button>Apply now</button>
          </div>
          <div className='inner-box'>
            <img src={amazon} alt="" />
            <div className='timer'>24h ago</div>
            <h4>Full Stack Developer</h4>
            <div className='container-exp'>
                <div>
                  <FaUserPlus />
                  <p>1-3 yr Exp</p>
                </div>
                <div>
                  <PiBuildingOfficeThin />
                  <p>Onsite</p>
                </div>
                <div>
                  <LuLayers />
                  <p>12LPA</p>
                </div>
            </div>
            <div className='list-items'>
              <p>&#x2022; A user-friendly interface lets you browse stunning photos and videos</p>
              <p>&#x2022; Filter destinations based on interests and travel style, and create personalized </p>
            </div>
            <button>Apply now</button>
          </div>
          <div className='inner-box'>
            <img src={nodejs} alt="" />
            <div className='timer'>24h ago</div>
            <h4>Full Stack Developer</h4>
            <div className='container-exp'>
                <div>
                  <FaUserPlus />
                  <p>1-3 yr Exp</p>
                </div>
                <div>
                  <PiBuildingOfficeThin />
                  <p>Onsite</p>
                </div>
                <div>
                  <LuLayers />
                  <p>12LPA</p>
                </div>
            </div>
            <div className='list-items'>
              <p>&#x2022; A user-friendly interface lets you browse stunning photos and videos</p>
              <p>&#x2022; Filter destinations based on interests and travel style, and create personalized </p>
            </div>
            <button>Apply now</button>
          </div>
          <div className='inner-box'>
            <img src={swiggy} alt="" />
            <div className='timer'>24h ago</div>
            <h4>Full Stack Developer</h4>
            <div className='container-exp'>
                <div>
                  <FaUserPlus />
                  <p>1-3 yr Exp</p>
                </div>
                <div>
                  <PiBuildingOfficeThin />
                  <p>Onsite</p>
                </div>
                <div>
                  <LuLayers />
                  <p>12LPA</p>
                </div>
            </div>
            <div className='list-items'>
              <p>&#x2022; A user-friendly interface lets you browse stunning photos and videos</p>
              <p>&#x2022; Filter destinations based on interests and travel style, and create personalized </p>
            </div>
            <button>Apply now</button>
          </div>
          <div className='inner-box'>
            <img src={amazon} alt="" />
            <div className='timer'>24h ago</div>
            <h4>Full Stack Developer</h4>
            <div className='container-exp'>
                <div>
                  <FaUserPlus />
                  <p>1-3 yr Exp</p>
                </div>
                <div>
                  <PiBuildingOfficeThin />
                  <p>Onsite</p>
                </div>
                <div>
                  <LuLayers />
                  <p>12LPA</p>
                </div>
            </div>
            <div className='list-items'>
              <p>&#x2022; A user-friendly interface lets you browse stunning photos and videos</p>
              <p>&#x2022; Filter destinations based on interests and travel style, and create personalized </p>
            </div>
            <button>Apply now</button>
          </div>
          <div className='inner-box'>
            <img src={nodejs} alt="" />
            <div className='timer'>24h ago</div>
            <h4>Full Stack Developer</h4>
            <div className='container-exp'>
                <div>
                  <FaUserPlus />
                  <p>1-3 yr Exp</p>
                </div>
                <div>
                  <PiBuildingOfficeThin />
                  <p>Onsite</p>
                </div>
                <div>
                  <LuLayers />
                  <p>12LPA</p>
                </div>
            </div>
            <div className='list-items'>
              <p>&#x2022; A user-friendly interface lets you browse stunning photos and videos</p>
              <p>&#x2022; Filter destinations based on interests and travel style, and create personalized </p>
            </div>
            <button>Apply now</button>
          </div>
      </div>

      <div className={`hidden-layer ${jobBar?"hidden":""}`}> 
         <div className='inner-jobposting-box'>
            <h3>Create job Opening</h3>
            <p className='x-mark' onClick={()=>handleEvent()}>X</p>
            <div className='container-inputs'>
                    <div className='x-axis'>
                      <p>Job Title</p>
                      <input type="text" placeholder='Fullstack developer'/>
                    </div>
                    <div className='x-axis'>
                      <p>Company Name</p>
                      <input type="text" placeholder='Amazon, Microsoft, Swiggy'/>
                    </div>
                    <div className='x-axis'>
                      <p>Location</p>
                      <select name="" id="">
                        <option value="Choose Preferred Loccation" hidden selected>Choose Preferred Location</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Bangalore">Bangalore</option>
                      </select>
                    </div>
                    <div className='x-axis'>
                      <p>Job Type</p>
                      <select name="" id="">
                        <option value="FullTime"selected>FullTime</option>
                        <option value="Internship">Internship</option>
                        <option value="Partime">Partime</option>
                        <option value="Contract">Contract</option>
                      </select>
                    </div>
                    <div className='x-axis'>
                      <p>Salary Range</p>
                      <div className='salary-range'>
                        <input type="number" placeholder='&#8377;0'/>
                        <input type="number" placeholder='&#8377;12,00,000'/>
                      </div>
                    </div>
                    <div className='x-axis'>
                      <p>Application Deadline</p>
                      <input type="date" placeholder='Fullstack developer'/>
                    </div>
            </div>
            <div className='text-area'>
              <p>Job Description</p>
              <textarea name="" id="" placeholder='Please share a description to let the candidate know more about the job role'></textarea>
            </div>
            <div className='btn-section'>
                <button>Save Draft</button>
                <button>Publish {">>"}</button>
            </div>
         </div>
      </div>
    </main>
  )
}

export default App
