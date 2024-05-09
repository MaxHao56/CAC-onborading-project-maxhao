import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import PeopleIcon from '@mui/icons-material/People';
// import BarChartIcon from '@mui/icons-material/BarChart';
// import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { useNavigate } from "react-router-dom";



export const MainListItems = ()=>{

    const navigate = useNavigate();
    
    return(

  <React.Fragment>
    <ListItemButton onClick={() => navigate('/pageview')}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard"  />
    </ListItemButton>

    <ListItemButton onClick={() => navigate('/creation')}>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Create-trips" />
    </ListItemButton>

  </React.Fragment>
  )
};



  
export const SecondaryListItems = () => {

    const navigate = useNavigate();

    return(
  <React.Fragment>
    <ListSubheader component="div" inset>
      Up-coming-feature
    </ListSubheader>
    <ListItemButton onClick={()=> navigate('/update')}>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Update-trips"  />
    </ListItemButton>

  </React.Fragment>
  )
};