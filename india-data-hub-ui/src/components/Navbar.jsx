// import { useAuth } from "../context/AuthContext";
// import { useState } from "react";
// const Navbar = ({ showDatasetSelect = false, setDataset }) => {
//   const { isAuth, logout } = useAuth();
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="idh-navbar">
//       {/* LOGO */}
//       <div className="idh-logo">
//         <span className="idh-logo-icon">d</span>
//         <div>
//           <div className="idh-logo-text">IndiaDataHub</div>
//           <div className="idh-logo-sub">Data | Analytics | Intelligence</div>
//         </div>
//       </div>

//       {/* SEARCH */}
//       <div className="idh-search">
//         <input placeholder="Search datasets, indicators..." />
//       </div>

//       {/* MENU */}
//       <div className="idh-menu">
//         <div className="idh-item">Databases ▾</div>
//         <div className="idh-item">Offerings ▾</div>
//         <div className="idh-item">Contact Us</div>
//       </div>

//       {/* DATASET SELECT (ONLY AFTER LOGIN) */}
//       {showDatasetSelect && (
//         <select onChange={(e) => setDataset(e.target.value)}>
//           <option value="response1">Economic Monitor</option>
//           <option value="response2">IMF Dataset</option>
//         </select>
//       )}

//       {/* LOGIN / LOGOUT BUTTON */}
//       {!isAuth ? (
//         <button className="idh-login-btn">Login/Signup</button>
//       ) : (
//         <button className="idh-login-btn" onClick={logout}>
//           Logout
//         </button>
//       )}
//     </nav>
//   );
// };

// export default Navbar;



import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Navbar = ({ showDatasetSelect = false, setDataset }) => {
  const { isAuth, logout } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <nav className="idh-navbar">

      {/* LEFT: LOGO (ALWAYS VISIBLE) */}
      <div className="idh-logo">
        <span className="idh-logo-icon">d</span>
        <div className="logo-text-wrap">
          <div className="idh-logo-text">IndiaDataHub</div>
          <div className="idh-logo-sub">Data | Analytics | Intelligence</div>
        </div>
      </div>

      {/* HAMBURGER ICON (MOBILE ONLY) */}
      <div className="idh-hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      {/* DESKTOP CONTENT (HIDE BELOW 750px) */}
      <div className="idh-desktop">

        {/* SEARCH */}
        <div className="idh-search">
          <input placeholder="Search datasets, indicators..." />
        </div>

        {/* MENU */}
        <div className="idh-menu">
          <div className="idh-item">Databases ▾</div>
          <div className="idh-item">Offerings ▾</div>
          <div className="idh-item">Contact Us</div>
        </div>

        {/* DATASET SELECT */}
        {showDatasetSelect && (
          <select onChange={(e) => setDataset(e.target.value)}>
            <option value="response1">Economic Monitor</option>
            <option value="response2">IMF Dataset</option>
          </select>
        )}

        {/* LOGIN / LOGOUT */}
        {!isAuth ? (
          <button className="idh-login-btn">Login/Signup</button>
        ) : (
          <button className="idh-login-btn" onClick={logout}>
            Logout
          </button>
        )}
      </div>

      {/* MOBILE MENU (SHOW BELOW 750px) */}
      {open && (
        <div className="idh-mobile-menu">
          <input placeholder="Search datasets, indicators..." />

          <div className="idh-item">Databases</div>
          <div className="idh-item">Offerings</div>
          <div className="idh-item">Contact Us</div>

          {showDatasetSelect && (
            <select onChange={(e) => setDataset(e.target.value)}>
              <option value="response1">Economic Monitor</option>
              <option value="response2">IMF Dataset</option>
            </select>
          )}

          {!isAuth ? (
            <button className="idh-login-btn">Login/Signup</button>
          ) : (
            <button className="idh-login-btn" onClick={logout}>
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;



