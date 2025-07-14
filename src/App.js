import logo from './assets/Layer_x0020_1.png';
import cart from './assets/Vector.png';
import banner from './assets/image.png';
import examwise from './assets/examwise.png';
import publicwise from './assets/publicwise.png';
import subjectwiseTM from './assets/subjectwisetm.png';
import subjectwiseEM from './assets/subjectwiseem.png';
import Sidebar from "./components/Sidebar";
import './App.css';
function App() {
  return (
    <div className="App">
      <div className="header">
        <div >
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="filter-search">
          <select id="catagory">
            <option className="options" value="all">All Categories</option>
            <option className="options" value="fiction">Fiction</option>
            <option className="options" value="non-fiction">Non-Fiction</option>
            <option className="options" value="science">Science</option>
            <option className="options" value="history">History</option>
            <option className="options" value="biography">Biography</option>
            <option className="options" value="fantasy">Fantasy</option>
            <option className="options" value="mystery">Mystery</option>
            <option className="options" value="romance">Romance</option>
          </select>
          <input type="text" id="search" placeholder="Search for books" />
          <button id="search-button">Search &#x1F50D;</button>
        </div>
        <div className="user-actions">
          <button id="Login">Login</button>
          <button id="Signup">Signup</button>
          <img id="cart" src={cart} alt="cart" />
        </div>
      </div>
      <div className="content">
        <button className="content-button">HOME</button>
        <button className="content-button">ABOUT US</button>
        <button className="content-button">CONTACT US</button>
        <button className="content-button">OUR BLOG</button>
        <button className="content-button">TRACK YOUR ORDER</button>
        <button className="content-button">FAQ's</button>
      </div>
      <div className="banner">
        <img id="banner-image" src={banner} alt=" banner" />
        <div className="banner-content">
          <h1>
            Indian Book House Best Choice for Competitative Exams    
          </h1>
          <h5 id="offer">Get Flat 25% Discount on Your First Order</h5>
          <button id="shop-now">Shop Now</button>
        </div>
      </div>
      <section className="popular-category">
        <div className="popular-category-buttons">
          <button className="popular-category-button1">Popular Categories</button>
          <button className="popular-category-button2">View All</button>
        </div>
        <div className="popular-category-content">
          <div className="popular-category-item">
            <img className="popular-category-image" src={examwise} alt="category" />
            <h3 className="overlay-title">EXAM WISE BOOKS</h3>
          </div>
          <div className="popular-category-item">
            <img className="popular-category-image" src={publicwise} alt="category" />
            <h3 className="overlay-title">PUBLICATION WISE BOOKS</h3>
          </div>
          <div className="popular-category-item">
            <img className="popular-category-image" src={subjectwiseTM} alt="category" />
            <h3 className="overlay-title">SUBJECT WISE BOOKS(TM)</h3>
          </div>
          <div className="popular-category-item">
            <img className="popular-category-image" src={subjectwiseEM} alt="category" />
            <h3 className="overlay-title">SUBJECT WISE BOOKS(EM)</h3>
          </div>
        </div>
      </section>
      <div style={{ display: "flex", padding: "20px", background: "#f5f5f5" }}>
      <Sidebar />
    </div>
    </div >
  );
}

export default App;
