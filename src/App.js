import Header from "./components/Header.js";
import ActionBar from "./components/ActionBar.js";
import Banner from "./components/Banner.js";
import HeadingButton from "./components/Heading_Button.js";
import PopularCat from "./components/PopularCat.js";
import CategoryDropdown from "./components/CategoryDropdown.js";
import categories from "./assets/DATA.js";
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
      <CategoryDropdown categories={categories} />
    </div >
  );
}

export default App;
