import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import logo_transparent from '../Images/logo_transparent 1.png'

function NavBar() {
    const [trailerType, setTrailerType] = useState('')
    const [location, setLocation] = useState('')
    
 

    const handleChangeLocation = (event) => {
        setLocation(event.target.value)
    }

    return (
        <nav className="navbar is-fixed-top is-info" role="navigation" aria-label="main navigation">

            <div className="navbar-brand">
            <Link to="/" className="navbar-item">Home</Link>

                <div role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" 
                onClick={() => {
                    let menu = document.querySelector(".navbar-menu")
                    menu.classList.toggle("is-active")
                }}>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    
                </div>      
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <div className="navbar-item">
                        <div className="field">
                            <div className="select">
                                <select onChange={(e) => setTrailerType(e.target.value)}>
                                 <option>Movies</option>
                                 <option>Animes</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="navbar-item">
                        <div className="field">
                            <div className="control">
                              {
                                  trailerType === '' ? 
                                  <input className="input" id="trailerInput" type="text" placeholder="Joker" onChange={handleChangeLocation}/>
                                  : (
                                  trailerType === 'Movies' ? 
                                  <input className="input" id="trailerInput" type="text" placeholder="Joker" onChange={handleChangeLocation}/>
                                  :  <input className="input" id="trailerInput" type="text" placeholder="Kimi no nawa " onChange={handleChangeLocation}/>
                                  )
                              }
                            </div>
                        </div>
                    </div>

                    <div className="navbar-item">
                        <div className="control">
                          <Link to={{
                              pathname: '/jobs',
                              state: {
                                  trailerType,
                                  
                              }
                          }}>
                            <button className="button is-link" onClick={() => {
                                document.getElementById("trailerInput").value = ''
                            }}>Search</button>
                            </Link>
                        </div>
                    </div>
                </div>


                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <Link to="/" className="button is-primary">
                                <strong>Sign up</strong>
                            </Link>
                            <Link to="/" className="button is-link">
                                Log In
                            </Link>
                        </div>

                    </div>

                </div>

            </div>

         </nav>
        );
}

export default NavBar;