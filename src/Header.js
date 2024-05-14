import React from "react";
import { Button } from "antd";

function Header() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Axios API Integration</h1>
      <h2 style={{ marginLeft: "30px" , marginTop:"-70px"}}>Tenant</h2>
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
