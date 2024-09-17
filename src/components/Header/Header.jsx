import React from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link,NavLink } from "react-router-dom";
;
import { useSelector } from "react-redux";


function Header() {
  const authStatus = useSelector((state) => state.status);
  
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="py-3 shadow bg-gray-400">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>
          <ul className="flex ml-auto">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <NavLink
                  to={item.slug}
                    onClick={() => {
                      console.log(item.slug)
                    }}
                    className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                  >
                    {item.name}
                  </NavLink>
                </li>
              ) : null
            )}
           
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
