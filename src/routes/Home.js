import Destination from "../Components/Destination";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Trip from "../Components/Trip";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://media.istockphoto.com/id/1359349136/photo/hawaiian-sunset-with-sailboat-and-mountains.jpg?s=612x612&w=0&k=20&c=ChFf_-oFlVpYbqMeXzOdCydFt4pjkgDCGdn9ovhjHWo="
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination."
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}
export default Home;
