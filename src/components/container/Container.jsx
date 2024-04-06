import Profile from "./blocks/Profile";
import Separator from "./blocks/Separator";

import "./container.css";
function Container() {
  return (
    <div className="container">
      {/* Profile Component */}
      <Profile />

      <Separator />
    </div>
  )

}

export default Container;
