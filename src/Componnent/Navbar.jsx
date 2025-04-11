// import { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa";
// import gsap from "gsap";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(null);
//   const [selectedDropdown, setSelectedDropdown] = useState({});
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     setMenuOpen(false);
//     setDropdownOpen(null);
//   }, [location.pathname]);

//   useEffect(() => {
//     if (menuOpen) {
//       gsap.fromTo(".mobile-menu", { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.5 });
//     }
//   }, [menuOpen]);

//   const toggleDropdown = (menu) => {
//     setDropdownOpen(dropdownOpen === menu ? null : menu);
//   };

//   const handleSelection = (menu, itemLabel, path) => {
//     setSelectedDropdown((prev) => ({ ...prev, [menu]: itemLabel }));
//     setDropdownOpen(null); // Hide the dropdown after selection
//     setMenuOpen(false);
//     navigate(path.replace(/^\/.+\//, "/")); // Use only the last segment of the path
//   };

//   return (
//     <nav className="bg-blue-600 p-4 text-white shadow-lg relative z-50">
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-2xl font-bold">Website</h1>
//         <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
//           {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
//         </button>
//         <ul
//           className={`lg:flex lg:gap-6 absolute lg:static bg-blue-600 lg:bg-transparent w-full lg:w-auto top-16 left-0 p-4 lg:p-0 transition-all mobile-menu ${
//             menuOpen ? "block" : "hidden"
//           } z-50 shadow-lg lg:shadow-none`}
//         >
//           {["who-we-are", "membership", "campaigns", "media-center"].map(
//             (menu) => (
//               <li key={menu} className="relative group">
//                 <button
//                   onClick={() => toggleDropdown(menu)}
//                   className="hover:bg-indigo-500 px-4 py-2 rounded-md block w-full text-left"
//                 >
//                   {selectedDropdown[menu] ||
//                     menu
//                       .replace("-", " ")
//                       .replace("center", " Center")
//                       .toUpperCase()}
//                 </button>
//                 {dropdownOpen === menu && (
//                   <ul className="absolute bg-white text-black shadow-lg rounded-md w-48 mt-2 z-50">
//                     {menu === "who-we-are" && (
//                       <>
//                         <li>
//                           <button
//                             onClick={() =>
//                               handleSelection(
//                                 menu,
//                                 "Mission, Vision & Goal",
//                                 "/mission"
//                               )
//                             }
//                             className="block px-4 py-2 hover:bg-gray-200"
//                           >
//                             Mission, Vision & Goal
//                           </button>
//                         </li>
//                         <li>
//                           <button
//                             onClick={() =>
//                               handleSelection(menu, "Team", "/team")
//                             }
//                             className="block px-4 py-2 hover:bg-gray-200"
//                           >
//                             Team
//                           </button>
//                         </li>
//                       </>
//                     )}
//                     {menu === "membership" && (
//                       <>
//                         <li>
//                           <button
//                             onClick={() =>
//                               handleSelection(
//                                 menu,
//                                 "Become Volunteer",
//                                 "/volunteer"
//                               )
//                             }
//                             className="block px-4 py-2 hover:bg-gray-200"
//                           >
//                             Become Volunteer
//                           </button>
//                         </li>
//                         <li>
//                           <button
//                             onClick={() =>
//                               handleSelection(menu, "Apply for Job", "/job")
//                             }
//                             className="block px-4 py-2 hover:bg-gray-200"
//                           >
//                             Apply for Job
//                           </button>
//                         </li>
//                       </>
//                     )}
//                     {menu === "campaigns" && (
//                       <>
//                         <li>
//                           <button
//                             onClick={() =>
//                               handleSelection(menu, "Child Education", "/child")
//                             }
//                             className="block px-4 py-2 hover:bg-gray-200"
//                           >
//                             Child Education
//                           </button>
//                         </li>
//                         <li>
//                           <button
//                             onClick={() =>
//                               handleSelection(
//                                 menu,
//                                 "Nari Shakti",
//                                 "/nari"
//                               )
//                             }
//                             className="block px-4 py-2 hover:bg-gray-200"
//                           >
//                             Nari Shakti
//                           </button>
//                         </li>
//                         <li>
//                           <button
//                             onClick={() =>
//                               handleSelection(
//                                 menu,
//                                 "Muft Bhojan",
//                                 "/bhojan"
//                               )
//                             }
//                             className="block px-4 py-2 hover:bg-gray-200"
//                           >
//                             Muft Bhojan
//                           </button>
//                         </li>
//                       </>
//                     )}
//                     {menu === "media-center" && (
//                       <>
//                         <li>
//                           <button
//                             onClick={() =>
//                               handleSelection(
//                                 menu,
//                                 "Press Release",
//                                 "/media"
//                               )
//                             }
//                             className="block px-4 py-2 hover:bg-gray-200"
//                           >
//                             Press Release
//                           </button>
//                         </li>
//                       </>
//                     )}
//                   </ul>
//                 )}
//               </li>
//             )
//           )}

//           <li>
//             <button
//               onClick={() => {
//                 setMenuOpen(false);
//                 navigate("/contact");
//               }}
//               className="hover:bg-indigo-500 px-4 py-2 rounded-md block"
//             >
//               Contact
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => {
//                 setMenuOpen(false);
//                 navigate("/donate");
//               }}
//               className="bg-yellow-500 hover:bg-yellow-600 px-6 py-2 rounded-md block font-bold transition-all duration-300 transform hover:scale-105 text-black shadow-md"
//             >
//               Donate Now
//             </button>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import gsap from "gsap";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [selectedDropdown, setSelectedDropdown] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(null);
  }, [location.pathname]);

  useEffect(() => {
    if (menuOpen) {
      gsap.fromTo(".mobile-menu", { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.5 });
    }
  }, [menuOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".navbar")) {
        setDropdownOpen(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  const handleSelection = (menu, itemLabel, path) => {
    setSelectedDropdown((prev) => ({ ...prev, [menu]: itemLabel }));
    setDropdownOpen(null); // Hide the dropdown after selection
    setMenuOpen(false);
    navigate(path.replace(/^\/.+\//, "/")); // Use only the last segment of the path
  };

  return (
    <nav className="navbar bg-blue-600 p-4 text-white shadow-lg z-50 sticky top-0 ">
      <div className="container mx-auto flex justify-between items-center">
        <button
          className="text-2xl font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          Website
        </button>
        <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
        <ul
          className={`lg:flex lg:gap-6 absolute lg:static bg-blue-600 lg:bg-transparent w-full lg:w-auto top-16 left-0 p-4 lg:p-0 transition-all mobile-menu ${
            menuOpen ? "block" : "hidden"
          } z-50 shadow-lg lg:shadow-none`}
        >
          {["who-we-are", "membership", "campaigns", "media-center"].map(
            (menu) => (
              <li key={menu} className="relative group">
                <button
                  onClick={() => toggleDropdown(menu)}
                  className="hover:bg-indigo-500 px-4 py-2 rounded-md block w-full text-left"
                >
                  {selectedDropdown[menu] ||
                    menu
                      .replace("-", " ")
                      .replace("center", " Center")
                      .toUpperCase()}
                </button>
                {dropdownOpen === menu && (
                  <ul className="absolute bg-white text-black shadow-lg rounded-md w-48 mt-2 z-50">
                    {menu === "who-we-are" && (
                      <>
                        <li>
                          <button
                            onClick={() =>
                              handleSelection(
                                menu,
                                "Mission, Vision & Goal",
                                "/mission"
                              )
                            }
                            className="block px-4 py-2 hover:bg-gray-200 w-full"
                          >
                            Mission, Vision & Goal
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() =>
                              handleSelection(menu, "Team", "/team")
                            }
                            className="block px-4 py-2 hover:bg-gray-200 w-full"
                          >
                            Team
                          </button>
                        </li>
                      </>
                    )}
                    {menu === "membership" && (
                      <>
                        <li>
                          <button
                            onClick={() =>
                              handleSelection(
                                menu,
                                "Become Volunteer",
                                "/volunteer"
                              )
                            }
                            className="block px-4 py-2 hover:bg-gray-200 w-full"
                          >
                            Become Volunteer
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() =>
                              handleSelection(menu, "Apply for Job", "/job")
                            }
                            className="block px-4 py-2 hover:bg-gray-200 w-full"
                          >
                            Apply for Job
                          </button>
                        </li>
                      </>
                    )}
                    {menu === "campaigns" && (
                      <>
                        <li>
                          <button
                            onClick={() =>
                              handleSelection(menu, "Child Education", "/child")
                            }
                            className="block px-4 py-2 hover:bg-gray-200 w-full"
                          >
                            Child Education
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() =>
                              handleSelection(menu, "Nari Shakti", "/nari")
                            }
                            className="block px-4 py-2 hover:bg-gray-200 w-full"
                          >
                            Nari Shakti
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() =>
                              handleSelection(menu, "Muft Bhojan", "/bhojan")
                            }
                            className="block px-4 py-2 hover:bg-gray-200 w-full"
                          >
                            Muft Bhojan
                          </button>
                        </li>
                      </>
                    )}
                    {menu === "media-center" && (
                      <>
                        <li>
                          <button
                            onClick={() =>
                              handleSelection(menu, "Press Release", "/media")
                            }
                            className="block px-4 py-2 hover:bg-gray-200 w-full"
                          >
                            Press Release
                          </button>
                        </li>
                      </>
                    )}
                  </ul>
                )}
              </li>
            )
          )}

          <li>
            <button
              onClick={() => {
                setMenuOpen(false);
                navigate("/contact");
              }}
              className="hover:bg-indigo-500 px-4 py-2 rounded-md block"
            >
              CONTACT
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setMenuOpen(false);
                navigate("/donate");
              }}
              className="bg-yellow-500 hover:bg-yellow-600 px-6 py-2 rounded-md block font-bold transition-all duration-300 transform hover:scale-105 text-black shadow-md"
            >
              DONATE NOW
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;