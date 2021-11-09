import "../styles/nav.css";

const Nav = () => {
 // js
 let name = "Ayush";

 //  ui stuff
 return (
  <>
   <nav>
    <h1>{name}</h1>
    <div className="nav-links">
     <a href="#as">Home</a>
     <a href="#as">About</a>
     <a href="#as">Contact</a>
    </div>
   </nav>
  </>
 );
};

export default Nav;
