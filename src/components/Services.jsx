import "../../style/Services.css"

function Services() {
    return (
        <section className="services">

            <div className="servSection">

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

                <div className="cardNO">
                    <h4>COMMING SOON</h4>
                </div>

            </div>
        </section>
    )
}

export default Services