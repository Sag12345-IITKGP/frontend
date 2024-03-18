import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="beautiful-navbar">
      <ul>
        <li>
          <Link to="/Home" className='home'>Home</Link>
        </li>
        <li>
          <Link to="/LoginSignup" className='login' >Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;




// Navbar.jsx
// Navbar.jsx
// import React from 'react';
// import './Navbar.css';

// const Navbar = () => {
//   return (
//     <div className="header">
//       <div className="container">
//         <div className="logo"><a href="#">Logo</a></div>
//         <div className="nav">
//           <Link to="/Home">Home</Link>
//           <Link to="/LoginSignup">Login</Link>
          
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;


