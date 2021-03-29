import React from "react";
import { Nav } from "shards-react";
import Logout from "./Logout";

import Notifications from "./Notifications";
import UserActions from "./UserActions";

export default () => (
  <Nav navbar className="flex-row" >
    <Logout/>
  </Nav>
);
