import Profile from "./blocks/Profile";
import Separator from "./blocks/Separator";
import LinksRow from "./blocks/LinksRow";

import "./container.css";
function Container() {
  return (
    <div className="container">
      {/* Profile Component */}
      <Profile />
      {/* Separator */}
      <Separator />
      {/* Media Links Row */}
      <LinksRow />
    </div>
  )

}

export default Container;
