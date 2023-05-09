import { Card, Col } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SideBar() {
  const navItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      name: "Inventory",
      path: "/inventory",
    },
    {
      name: "Product Catalog",
      path: "/catalog",
    },
    {
      name: "Management",
      path: "/manage",
      expandable: true,
      children: [
        { name: "Sellers", path: "/manage/sellers" },
        { name: "Company Settings", path: "/manage/company" },
        { name: "Team Members", path: "/manage/users" },
      ],
    },
  ];

  return (
    <Col
      style={{
        borderRight: "1px solid #ced4da",
        maxWidth: 250,
        padding: "12px 8px 12px 8px",
        backgroundColor: "white",
        display: "flex",
        flex: "1",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <p className="h3 text-center mb-3">Alloy</p>
        <div
          style={{
            paddingTop: 6,
            paddingBottom: 6,
          }}
        >
          {navItems.map((navItem) => {
            return <NavItem key={navItem.name} item={navItem} />;
          })}
        </div>
      </div>
      <Card>
        <Card.Body>Tejinder</Card.Body>
      </Card>
    </Col>
  );
}

const NavItem = ({ item }) => {
  const history = useHistory();
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const isFocused = location.pathname.includes(item.path);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isFocused && item.expandable) {
      setExpanded(true);
    } else {
      setExpanded(false);
    }
  }, [isFocused, item.expandable, location.pathname]);

  return (
    <div
      style={{
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 6,
        paddingBottom: 6,
        marginBottom: 8,
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        backgroundColor: isFocused
          ? item.expandable
            ? "#f8f9fa"
            : "#e9ecef"
          : isHovered
          ? "#f8f9fa"
          : "white",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#e9ecef",
        borderRadius: 6,
      }}
      onPointerEnter={() => {
        setIsHovered(true);
      }}
      onPointerLeave={() => {
        setIsHovered(false);
      }}
      onClick={() => {
        if (item.path && !item.expandable) {
          history.push(`${item.path}`);
          return;
        } else setExpanded((isExpanded) => !isExpanded);
      }}
    >
      {item.name}
      {item.children && expanded && (
        <div className="mt-2 mb-2">
          {item.children.map((child) => (
            <NavItem key={child.name} item={child} />
          ))}
        </div>
      )}
    </div>
  );
};
