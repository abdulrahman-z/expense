import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import MainPage from "./contents";

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  const [selectedMenu, setSelectedMenu] = React.useState("Dashboard");
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Expenses
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#333333",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Box style={{ color: "#fff", padding: "24px 16px", fontSize: "24px" }}>
          Expense Tracker
        </Box>
        <Divider />
        <List>
          {["Dashboard", "My Expenses"].map((text, index) => (
            <ListItem button key={text} onClick={() => setSelectedMenu(text)}>
              <ListItemIcon style={{ color: "#fff" }}>
                {index % 2 === 0 ? (
                  <DashboardIcon />
                ) : (
                  <AccountBalanceWalletIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} style={{ color: "#fff" }} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <MainPage selectedMenu={selectedMenu} />
      </Box>
    </Box>
  );
}
