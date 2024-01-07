import "../../style/Home.css"

function Home() {
    return (
        <section className="home">
            <div className="homeDiv">
                <div className="homeHeadline">
                    <h2>explore with</h2>
                    <div className="content">
                        <h1>NASA</h1>
                        <h1>NASA</h1>
                    </div>

                    <div className="homeButtons">
                        <button className="glow-on-hover" type="button">Get Started</button>
                        <button className="glow-on-hover" type="button">Services</button>
                    </div>
                </div>

                <div className="homeServSec">
                    <div className="homeServ">
                        <h3>Explore our different sections from NASA API</h3>

                        <div className="homeOpt">
                        <div className="card">
                    <div className="background-image" style={{ backgroundImage: 'url(../src/assets/spacestation.jpg)' }}>
                        <div className="overlay"></div>
                    </div>
                    <div className="contentServ">
                        <h2>TECH TRANSFER</h2>
                        <p>Discover the wonders of the universe with NASAs latest explorations.</p>
                        <button><a href="/services/technology_transfer">Explore</a></button>
                    </div>
                </div>

                <div className="card">
                    <div className="background-image" style={{ backgroundImage: 'url(../src/assets/mars.png)' }}>
                        <div className="overlay"></div>
                    </div>
                    <div className="contentServ">
                        <h2>MARS ROVER</h2>
                        <p>Explore the high quality pictures taken by the MARS Rover.</p>
                        <button><a href="">Explore</a></button>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default Home