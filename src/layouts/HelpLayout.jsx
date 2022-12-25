import { NavLink, Outlet } from "react-router-dom";


export default function HelpLayout() {
  return (
    <div className="help-layout">
      <h2>Website Help</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cum incidunt accusamus repellendus ratione dolorem possimus itaque, voluptas illo ea quisquam modi magni nulla corrupti blanditiis inventore eos sit totam!</p>

      {/* NAV MENU FOR HELP ROUTE / COMPONENT */}
      <nav>
         <NavLink to="faq" >View the FAQ</NavLink>
         <br />
         <NavLink to="contact" >Contact Us</NavLink>
      </nav>

      <Outlet />
    </div>
  )
}
