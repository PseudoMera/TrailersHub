import React, {useState, useEffect} from 'react'

function Home() {
    const [animes, setAnimes] = useState(null)
    const [anime, setAnime] = useState(null)
    useEffect(() => {
        fetch("https://api.jikan.moe/v3/season").then(res => res.json()).then(x => setAnimes(x))
    }, [])
    

    return (
        <>
            <section className="hero is-medium is-bold" id="homeBg">
                <div className="hero-body">
                <div className="container">
                <h1 className="title">
                    Pseudo Trailers Hub
                </h1>
                    <h2 className="subtitle">
                    Find all movies and anime trailers in one place!
                    </h2>
                </div>
                </div>
            </section>

            <div id="trailers">
                {
                    animes ? 
                <h1 className="title">
                    Anime Trailers For {animes.season_name} Season
                </h1> :
                <h1 className="title">
                    Loading...
                </h1>
               }

               <table className="table">

               </table>

           </div>

            <table className="table">

            </table>
        </>
    )
}

export default Home