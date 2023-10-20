import { Header } from "@mantine/core";
import { Link } from "react-router-dom";
import UserMenu from "./UserMenu";

const CommonHeader = () => {
  return (
    <Header height={45} className="flex items-center justify-between px-10">
      <div className="flex items-center gap-2">
        <Link className="no-underline" to={"/"}>
          Graph ERP
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <UserMenu />
      </div>
    </Header>
  );
};

export default CommonHeader;
