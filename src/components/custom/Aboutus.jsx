
import '../../index.css';
function AboutUs() {
  return (
    <div className="flex flex-col justify-center items-center mt-2 bg-gray-100 ">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl w-full md:w-3/4 lg:w-2/3"> 
        
         
      <div className="heading-container ">
            <h1 className="heading">
            <span>  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center">About Our NGO</h2></span>
            </h1>
          </div>


        <p className="mt-10 text-muted-foreground">
          Our NGO was founded in 2010 with the mission of empowering underserved communities and promoting
          sustainable development. We believe in the power of grassroots initiatives to create lasting change.
          Over the years, we have implemented a wide range of programs focused on education, healthcare, and
          environmental conservation. Our team of dedicated volunteers and staff work tirelessly to make a positive
          impact in the lives of those we serve.
        </p>
        <p className="mt-4 text-muted-foreground">
          We are committed to transparency, accountability, and ethical practices in all that we do. Our core values
          of compassion, integrity, and empowerment guide our every decision and action. Our NGO was founded in 2010
          by a group of passionate individuals who saw the need for an organization that could address the pressing
          issues facing underserved communities. Over the past 13 years, we have grown to become a respected and
          trusted organization, with a track record of successful programs and initiatives.
        </p>
        <p className="mt-4 text-muted-foreground">
          Our history is one of resilience, innovation, and a steadfast commitment to making a positive difference
          in the world. We have weathered challenges, adapted to changing circumstances, and remained focused on our
          core mission of empowering those in need.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
