import Header from "./components/Header.js";
import ActionBar from "./components/ActionBar.js";
import Banner from "./components/Banner.js";
import HeadingButton from "./components/Heading_Button.js";
import PopularCat from "./components/PopularCat.js";
import BookRack from "./components/Bookrack.js";
import './App.css';
function App() {
  return (
    <div className="App">
      <Header />
      <ActionBar />
      <Banner />
      <HeadingButton
        headingText="Popular Categories"
        buttonText="View All" />
      <PopularCat />
      <HeadingButton
        headingText="New Releases"
        buttonText="View All" />
      <BookRack />

    </div >
  );
}

export default App;
