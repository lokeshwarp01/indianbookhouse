import Header from "./components/Header.js";
import ActionBar from "./components/ActionBar.js";
import Banner from "./components/Banner.js";
import HeadingButton from "./components/Heading_Button.js";
import PopularCat from "./components/PopularCat.js";
import BookRack from "./components/Bookrack.js";
import './App.css';
import AllCatSidebar from "./components/AllCatSidebar.js";
import UpCommingBooks from "./components/UpCommingBooks.js";
function App() {
  return (
    <div className="App">
      <Header />
       <ActionBar/>
      <Banner />
      <HeadingButton
        headingText="Popular Categories"
        buttonText="View All" />
      <PopularCat />
      <div className="container1">
        <AllCatSidebar />
        <div className="container2">
          <HeadingButton
            headingText="New Releases"
            buttonText="View All" />
          <BookRack />
          <HeadingButton
            headingText="Combo Offers"
            buttonText="View All" />
          <BookRack />
        </div>
      </div>
      <HeadingButton
        headingText="Upcoming Books"
        buttonText="View All" />
      <UpCommingBooks />
    </div >
  );
}

export default App;
