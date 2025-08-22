import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Landing from "./components/Landing/Landing";
function App() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Header />

        <div className="flex flex-grow">
          <Sidebar />
          <Body />
        </div>

        <Footer />
      </div>
      {/* <Landing/> */}
    </>
  );
}

export default App;
