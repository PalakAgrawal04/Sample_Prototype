import Header from '@/components/custom/Header';
import Image1 from '../assets/Image1.jpg';
import Image2 from '../assets/Image2.jpg';
import Image3 from '../assets/Image3.jpg';
import Image4 from '../assets/Image4.jpg';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardFooter, CardContent } from '@/components/ui/card';

function Home() {

  const imageStyles = {
    width: '100%',
    height: '450px',
    borderRadius: '15px' // Adjust the radius to your preference
  };

  return (
    <div>
      {/* Updated Header with fixed positioning */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>

      <div className="pt-20"> {/* Add padding to avoid content being hidden behind the header */}
        <div>
          <h1 className='text-center text-5xl my-3 font-serif text-black tracking-tighter mt-3'>Welcome to InspireGrowth Foundation</h1>
          <h1 className='text-center text-2xl font-serif'>Empowering Lives, One Step at a Time</h1>
        </div>

        <div className="bg-[#fffefd]">
          <div className="container mx-auto py-8"> {/* Added `mx-auto` and `py-8` to adjust spacing */}
            <div className="carousel slide carousel-dark" id="topbanner" data-bs-ride="carousel" data-bs-interval="5000" data-bs-touch="true">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={Image1} style={imageStyles} className="d-block" alt="image loading" />
                </div>
                <div className="carousel-item">
                  <img src={Image2} style={imageStyles} className="d-block" alt="image loading" />
                </div>
                <div className="carousel-item">
                  <img src={Image3} style={imageStyles} className="d-block" alt="image loading" />
                </div>
                <div className="carousel-item">
                  <img src={Image4} style={imageStyles} className="d-block" alt="image loading" />
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

        <section className="w-full shadow-lg">
          <div className="container px-4 md:px-6 space-y-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 ">

                <div className="heading-container mt-5">
                  <h1 className="heading">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl ">  <span> Our Work </span></h2> 
                  </h1>
                </div>


                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover the impact we are making in our local and global communities.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-4 hover:scale-105 cursor-pointer hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                <Card>
                  <CardHeader>
                    <CardTitle>Education</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-muted-foreground">
                      Providing access to quality education and learning opportunities for underserved communities.
                    </p>
                  </CardContent>
                  <CardFooter></CardFooter>
                </Card>
              </div>
              <div className="grid gap-4 hover:scale-105 cursor-pointer hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                <Card>
                  <CardHeader>
                    <CardTitle>Health</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-muted-foreground">
                      Improving healthcare access and promoting well-being in marginalized populations.
                    </p>
                  </CardContent>
                  <CardFooter></CardFooter>
                </Card>
              </div>
              <div className="grid gap-4 hover:scale-105 cursor-pointer hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                <Card>
                  <CardHeader>
                    <CardTitle>Sustainability</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-muted-foreground">
                      Driving sustainable development and environmental conservation initiatives.
                    </p>
                  </CardContent>
                  <CardFooter></CardFooter>
                </Card>
              </div>
              <div className="grid gap-4 hover:scale-105 cursor-pointer hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                <Card>
                  <CardHeader>
                    <CardTitle>Advocacy</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-muted-foreground">
                      Amplifying the voices of the underrepresented and advocating for social justice.
                    </p>
                  </CardContent>
                  <CardFooter></CardFooter>
                </Card>
              </div>
              <div className="grid gap-4 hover:scale-105 cursor-pointer hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                <Card>
                  <CardHeader>
                    <CardTitle>Community</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-muted-foreground">
                      Fostering strong, resilient communities and empowering local leaders.
                    </p>
                  </CardContent>
                  <CardFooter></CardFooter>
                </Card>
              </div>
              <div className="grid gap-4 hover:scale-105 cursor-pointer hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                <Card>
                  <CardHeader>
                    <CardTitle>Empowerment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-muted-foreground">
                      Providing resources and opportunities to help individuals and communities thrive.
                    </p>
                  </CardContent>
                  <CardFooter></CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-8 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6 space-y-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2"> 
              <div className="heading-container ">
                  <h1 className="heading">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"> <span> Get Involved </span></h2> 
                  </h1>
                </div>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  There are many ways you can support our mission and make a difference in the lives of those we serve.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Donate</h3>
                <p className="text-lg text-muted-foreground">
                  Your financial contributions help us continue our important work.
                </p>
                <Link to="/donate">
                  <Button>Donate Now</Button>
                </Link>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Volunteer</h3>
                <p className="text-lg text-muted-foreground">
                  Join our team of dedicated volunteers and make a hands-on impact.
                </p>
                <Link to="/volunteer">
                  <Button>Volunteer</Button>
                </Link>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Partner</h3>
                <p className="text-lg text-muted-foreground">
                  Collaborate with us to amplify our impact and create lasting change.
                </p>
                <Link to="/partners">
                  <Button>Our Partners</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-muted-foreground">&copy; 2024 NGO</p>
        </footer>

      </div>
    </div>
  );
}

export default Home;
