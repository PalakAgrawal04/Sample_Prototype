import card1 from '../assets/card1.jpeg';
import card2 from '../assets/card2.jpg';
import card3 from '../assets/card3.jpg';
import card4 from '../assets/card4.jpg';

function Dashboard() {
  return (
    <div className='p-6 md:px-16 lg:px-24'>


      <div className="heading-container">
        <h1 className="heading">
          <span> <h2 className='font-bold text-2xl md:text-3xl lg:text-4xl text-center font-serif '>Our Activities</h2></span>
        </h1>
      </div>



      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>

        <div className="w-full">
          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:scale-105 transition-all duration-300">
            <img
              src={card1}
              alt="Children's Digital Learning Program"
              className="rounded-lg mb-4 w-full object-cover"
              style={{ aspectRatio: "1/1" }}
            />
            <h3 className="text-lg font-semibold mb-2 text-black">Childrens Digital Learning Program</h3>
            <p className="text-muted-foreground text-black">
              Our Childrens Digital Learning Program aims to empower young minds by providing them with access to modern educational tools and resources. Through interactive sessions and hands-on activities, we help children develop essential digital literacy skills that are crucial for their future.
            </p>
          </div>
        </div>

        <div className="w-full">
          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:scale-105 transition-all duration-300">
            <img
              src={card2}
              alt="Adult Computer Literacy Workshops"
              className="rounded-lg mb-4 w-full object-cover"
              style={{ aspectRatio: "1/1" }}
            />
            <h3 className="text-lg font-semibold mb-2 text-black">Adult Computer Literacy Workshops</h3>
            <p className="text-muted-foreground text-black">
              We conduct comprehensive computer literacy workshops for adults, equipping them with the necessary skills to navigate the digital world confidently. These sessions are designed to enhance their knowledge of basic computer operations, internet usage, and online safety, helping them to become more self-reliant in the modern age.
            </p>
          </div>
        </div>

        <div className="w-full">
          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:scale-105 transition-all duration-300">
            <img
              src={card3}
              alt="Student Achievement and Certification"
              className="rounded-lg mb-4 w-full object-cover"
              style={{ aspectRatio: "1/1" }}
            />
            <h3 className="text-lg font-semibold mb-2 text-black">Student Achievement and Certification</h3>
            <p className="text-muted-foreground text-black">
              Celebrating the success of our students, who have completed various courses and training programs. Each certificate represents their hard work and dedication towards learning and personal growth. We are proud to be a part of their educational journey and look forward to seeing them achieve even more.
            </p>
          </div>
        </div>

        <div className="w-full">
          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:scale-105 transition-all duration-300">
            <img
              src={card4}
              alt="Community Health Awareness Campaign"
              className="rounded-lg mb-4 w-full object-cover"
              style={{ aspectRatio: "1/1" }}
            />
            <h3 className="text-lg font-semibold mb-2 text-black">Community Health Awareness Campaign</h3>
            <p className="text-muted-foreground text-black">
              Our Community Health Awareness Campaign focuses on educating and providing essential healthcare services to underprivileged communities. Through regular health camps, we aim to improve overall well-being, raise awareness about common health issues, and ensure that everyone has access to basic medical care.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
