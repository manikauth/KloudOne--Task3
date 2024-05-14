import React from "react";
import { Button } from "antd";

function Header() {
  return (
    <div>
      <h2 style={{ marginLeft: "30px"}}>Tenant</h2>
      <Button className="tenant-btn" type="primary">
        Create Tenant
      </Button>
      <Button className="search-btn" >
        Search
      </Button>
    </div>
  );
}

export default Header;
