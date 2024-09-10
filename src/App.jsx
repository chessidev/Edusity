import { useState } from "react";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Landing from "./Components/Landing/Landing";
import NavBar from "./Components/NavBar/NavBar";
import Programs from "./Components/Programs/Programs";
import Testimonials from "./Components/Testimonials/Testimonials";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";

const App = () => {
  const [isVideo, setVideo] = useState(false);

  return (
    <div>
      <NavBar />
      <Landing />
      <Programs />
      <About setVideo={setVideo} />
      <Campus />
      <Testimonials />
      <Contact />
      <Footer />
      <VideoPlayer isVideo={isVideo} setVideo={setVideo} />
    </div>
  );
};
export default App;
