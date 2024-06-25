import { Link, styled, useMediaQuery, useTheme } from "@mui/material";

const NavBar = styled("div")<{ height?: string }>`
  display: flex;
  height: ${(props) => props.height || "40px"};
  padding: 0px 16px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 32px;
  background: ${({ theme }) => theme.palette.background.paper};
  box-shadow: 0px 4px 10px 0px rgba(136, 102, 221, 0.03);
`;

const NavBarMobile = styled("div")<{ height?: string }>`
  display: flex;
  height: ${(props) => props.height || "40px"};
  width: 100%;
  padding: 0px 16px;
  align-items: center;
  gap: 8px;
  border-radius: 32px;
  background: ${({ theme }) => theme.palette.background.paper};
  box-shadow: 0px 4px 10px 0px rgba(136, 102, 221, 0.03);
`;

const NavBarContainer = styled("div")`
  position: fixed;
  bottom: 1rem;
  display: flex;
  left: 50%;
  transform: translateX(-50%);
`;

const NavItem = styled(Link, {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active?: boolean }>`
  display: flex;
  padding: 4px 20px;
  align-items: center;
  gap: 10px;
  border-radius: 32px;
  background: ${({ active }) => (active ? "#8866DD" : "")};
  text-align: center;
  color: ${({ theme, active }) =>
    active ? "#FFFFFF" : theme.palette.custom.textTertiary};
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: 140%;
`;

const NavItemMobile = styled(Link, {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active?: boolean }>`
  display: flex;
  padding: 8px 18px;
  align-items: center;
  gap: 10px;
  border-radius: 18px;
  background: ${({ active }) => (active ? "#8866DD" : "")};
  text-align: center;
  color: ${({ theme, active }) =>
    active ? "#FFFFFF" : theme.palette.custom.textTertiary};
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: 100%;
`;

interface NavItem {
  href: string;
  label: string;
  target?: string;
  active?: boolean;
}

export interface NavbarProps {
  navItems: NavItem[];
  height?: number;
}

export const Navbar = ({ navItems, height = 40 }: NavbarProps) => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down(1220));

  if (isMobile) {
    return (
      <NavBarContainer>
        <NavBarMobile height={height + "px"}>
          {navItems.map((item) => (
            <NavItemMobile
              key={item.href}
              href={item.href}
              active={item.active}
            >
              {item.label}
            </NavItemMobile>
          ))}
        </NavBarMobile>
      </NavBarContainer>
    );
  }

  return (
    <NavBar height={height + "px"}>
      {navItems.map((item) => (
        <NavItem
          key={item.href}
          href={item.href}
          active={item.active}
          target={item.target}
          underline="none"
        >
          {item.label}
        </NavItem>
      ))}
    </NavBar>
  );
};
