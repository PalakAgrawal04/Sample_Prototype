import partner1 from '../../assets/partner1.jpg';
import partner2 from '../../assets/partner2.jpg';
import partner3 from '../../assets/partner3.png';
import partner4 from '../../assets/partner4.png';
import partner5 from '../../assets/partner5.png';
import partner6 from '../../assets/partner6.png';

function Partners() {

    const imageStyles = {
        width: '400px', // Reduced width
        height: '300px', // Reduced height
        borderRadius: '15px' // Adjust the radius to your preference
    };

    return (
        <div>
            <div className='mt-7'>
                <div className="heading-container my-3"> {/* Reduced margin-top and margin-bottom */}
                    <h1 className="heading">
                        <h2 className="text-3xl font-bold tracking-normal font-serif sm:text-4xl md:text-5xl text-center mt-0 mb-2"> {/* Adjusted margins */}
                            <span>Our Corporate Partners</span>
                        </h2>
                    </h1>
                </div>
                <h2 className='text-2xl font-muted text-muted-foreground sm:text-2xl md:text-3xl text-center mt-2'> {/* Reduced margin-top */}
                    We are proud to collaborate with these leading organizations to drive positive change
                </h2>
            </div>

            <div className="bg-[#fffefd] mt-10 flex justify-center ">
                <div className="container  mt-10  flex justify-center align-items-center ">
                    <div className="carousel slide carousel-dark w-75 border border-black shadow-md" id="topbanner" data-bs-ride="carousel" data-bs-interval="2000" data-bs-touch="true">
                        <div className="carousel-inner">

                            <div className="carousel-item active">
                                <img src={partner1} style={imageStyles} className="d-block ms-56" alt="image loading" />
                            </div>

                            <div className="carousel-item">
                                <img src={partner2} style={imageStyles} className="d-block ms-56" alt="image loading" />
                            </div>

                            <div className="carousel-item">
                                <img src={partner3} style={imageStyles} className="d-block ms-56" alt="image loading" />
                            </div>

                            <div className="carousel-item">
                                <img src={partner4} style={imageStyles} className="d-block ms-56" alt="image loading" />
                            </div>

                            <div className="carousel-item">
                                <img src={partner5} style={imageStyles} className="d-block ms-56" alt="image loading" />
                            </div>

                            <div className="carousel-item">
                                <img src={partner6} style={imageStyles} className="d-block ms-56" alt="image loading" />
                            </div>

                        </div>

                        <button className="carousel-control-prev" data-bs-target="#topbanner" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </button>

                        <button className="carousel-control-next" data-bs-target="#topbanner" data-bs-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Partners;
