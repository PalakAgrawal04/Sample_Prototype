import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import '../../index.css';
function Volunteer() {
  return (
    <div className="flex flex-col min-h-vh">
      <section id="volunteer-opportunities" className="w-full ">
        <div className="container px-4 md:px-6 space-y-12">
          <div className="text-center space-y-4"> 
           
          <div className="heading-container my-5">
            <h1 className="heading">
            <span> <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl ">Volunteer Opportunities</h2> </span>
            </h1>
          </div>


            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
              Explore the various ways you can contribute your time and skills to make a positive impact.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Tutoring</CardTitle>
                <CardDescription>
                  Help underprivileged children with their studies and academic development.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                    Flexible scheduling
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                    Training provided
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                    Make a lasting impact
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Food Bank</CardTitle>
                <CardDescription>Help sort, pack, and distribute food to those in need.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                    Flexible shifts
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                    No experience required
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                    Make a tangible impact
                  </li>
                </ul>
              </CardContent>
              <CardFooter>

              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Habitat for Humanity</CardTitle>
                <CardDescription>Help build and renovate homes for families in need.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                    Hands-on experience
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                    Team-building activities
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                    Make a lasting impact
                  </li>
                </ul>
              </CardContent>
              <CardFooter>

              </CardFooter>
            </Card>
          </div>
        </div>
      </section>


      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6 space-y-12">
          <div className="text-center space-y-4"> 
               
          <div className="heading-container my-5">
            <h1 className="heading">
            <span>  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Hear from Our Volunteers</h2> </span>
            </h1>
          </div>
           


            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
              Read inspiring stories from our dedicated volunteers and learn how they have made a difference.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium leading-none">Jane Doe</p>
                    <p className="text-sm text-muted-foreground">Tutor, Literacy Program</p>
                  </div>
                </div>
                <blockquote className="mt-6 text-muted-foreground">
                  Volunteering with this organization has been one of the most rewarding experiences of my life.
                  Seeing the  difference we make in the lives of those we serve is truly inspiring
                </blockquote>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JL</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium leading-none">John Lee</p>
                    <p className="text-sm text-muted-foreground">Food Bank Volunteer</p>
                  </div>
                </div>
                <blockquote className="mt-6 text-muted-foreground">
                  I have been volunteering at the food bank for over a year now, and it is been an incredibly rewarding
                  experience. The team is so welcoming, and I love knowing that my efforts are making a real
                  difference in the community
                </blockquote>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>SM</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium leading-none">Sarah Miller</p>
                    <p className="text-sm text-muted-foreground">Habitat for Humanity Volunteer</p>
                  </div>
                </div>
                <blockquote className="mt-6 text-muted-foreground">
                  Volunteering with Habitat for Humanity has been an incredible experience. It is so rewarding to see
                  the tangible impact we are making by building and renovating homes for families in need. I highly
                  recommend it to anyone looking to get involved
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get Involved</h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
              Fill out the form below to learn more about our volunteer opportunities and how you can make a difference.
            </p>
          </div>
          <div className="mx-auto w-full max-w-md space-y-4">
            <form>
              <div className="grid gap-4">
                <Input type="text" placeholder="Name" />
                <Input type="email" placeholder="Email" />
                <Textarea placeholder="Message" />
              </div>
              <Button type="submit" className="mt-4 w-full">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </section>


      <footer className="bg-muted p-6 md:py-12 w-full">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">About</h3>
            <Link href="#" prefetch={false}>
              Our Mission
            </Link>
            <Link href="#" prefetch={false}>
              Our Team
            </Link>
            <Link href="#" prefetch={false}>
              Careers
            </Link>
            <Link href="#" prefetch={false}>
              Contact
            </Link>
          </div>

          <div className="grid gap-1">
            <h3 className="font-semibold">Volunteer</h3>
            <Link href="#" prefetch={false}>
              Opportunities
            </Link>
            <Link href="#" prefetch={false}>
              Testimonials
            </Link>
            <Link href="#" prefetch={false}>
              FAQs
            </Link>
            <Link href="#" prefetch={false}>
              Apply Now
            </Link>
          </div>

          <div className="grid gap-1">
            <h3 className="font-semibold">Donate</h3>
            <Link href="#" prefetch={false}>
              Donate Now
            </Link>
            <Link href="#" prefetch={false}>
              Fundraising
            </Link>
            <Link href="#" prefetch={false}>
              Corporate Giving
            </Link>
          </div>

          <div className="grid gap-1">
            <h3 className="font-semibold">Resources</h3>
            <Link href="#" prefetch={false}>
              Blog
            </Link>
            <Link href="#" prefetch={false}>
              Newsletter
            </Link>
            <Link href="#" prefetch={false}>
              Media Kit
            </Link>
            <Link href="#" prefetch={false}>
              Privacy Policy
            </Link>
          </div>

          <div className="grid gap-1">
            <h3 className="font-semibold">Connect</h3>
            <Link href="#" prefetch={false}>
              Facebook
            </Link>
            <Link href="#" prefetch={false}>
              Twitter
            </Link>
            <Link href="#" prefetch={false}>
              Instagram
            </Link>
            <Link href="#" prefetch={false}>
              LinkedIn
            </Link>
          </div>

         

        </div>
      </footer>
    </div>
  )
}

export default Volunteer