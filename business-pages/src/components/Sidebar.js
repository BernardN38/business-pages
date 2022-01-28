import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ForumIcon from '@mui/icons-material/Forum';
import RateReviewIcon from '@mui/icons-material/RateReview';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ConstructionIcon from '@mui/icons-material/Construction';
import BuildIcon from '@mui/icons-material/Build';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "../css/sidebar.css"
import {Link} from "react-router-dom"
function Sidebar({main,setMain}) {

  return (
    <div>
      <List sx={{ width: "100%"}}>
        <ListItem className="sidebar-item" onClick={()=>{setMain("messages")}}>
          <ListItemAvatar>
            <Avatar className="sidebar-icon" >
              <ForumIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Messages" />
        </ListItem>
        <ListItem className="sidebar-item" onClick={()=>{setMain("reviews")}}>
          <ListItemAvatar>
            <Avatar  className="sidebar-icon" >
              <RateReviewIcon/>
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Reviews" />
        </ListItem>
        <ListItem className="sidebar-item" onClick={()=>{setMain("analytics")}}>
          <ListItemAvatar>
            <Avatar className="sidebar-icon" >
              <AnalyticsIcon/>
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Analytics" />
        </ListItem>
        <ListItem className="sidebar-item" onClick={()=>{setMain("improve")}}>
          <ListItemAvatar>
            <Avatar className="sidebar-icon" >
              <ConstructionIcon/>
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Improve" />
        </ListItem>
        <ListItem className="sidebar-item" onClick={()=>{setMain("account")}}>
          <ListItemAvatar>
            <Avatar className="sidebar-icon" >
              <AccountCircleIcon/>
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Account" />
        </ListItem>
      </List>
    </div>
  );
}

export default Sidebar;
