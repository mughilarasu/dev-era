import React from "react";
import Box from "@material-ui/core/Box";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { FiUser, FiSettings, FiLogOut, FiEdit, FiEdit2 } from "react-icons/fi";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from '@material-ui/core/Avatar';

import { useSelector,useDispatch } from 'react-redux';
import  {clearTabRouter} from '../../../actions/normalActions';
export default function UserMenu(props) {
  const MUItheme = useSelector((store) => store.MUItheme);
  const style = {
    icon: { color: MUItheme.text },
    userIcon: { position: "relative", top: 10 },
  };
  const { handleClickOpen } = props;

const dispatch = useDispatch();
  const menuTitles = [
    {name:"Mughil",icon:<Avatar src="https://image.flaticon.com/icons/svg/149/149071.svg"></Avatar>,method:null,button:false},
    { name: "Settings", icon: <FiSettings style={style.icon} />,method:handleClickOpen,button:true },
    { name: "Edit Content", icon: <FiEdit2 style={style.icon} />,method:()=>props.history.push('/editBlogs'),button:true },
    { name: "Create Content", icon: <FiEdit style={style.icon} />,method:null,button:true },
    { name: "Logout", icon: <FiLogOut style={style.icon} />,method:()=>{return(dispatch(clearTabRouter()),props.history.push('/logout'))},button:true }
  ];
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div style={style.userIcon}>
          <IconButton
            aria-label="show 17 new notifications"
            color="inherit"
            {...bindTrigger(popupState)}
          >
            <FiUser />
          </IconButton>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Box>
              <List component="nav" aria-label="main mailbox folders">
                {menuTitles.map((title) => {
                  return (
                    <>
                      <ListItem button={title.button} onClick={title.method}>
                        <ListItemIcon>{title.icon}</ListItemIcon>
                        <ListItemText primary={title.name} />
                      </ListItem>
                    </>
                  );
                })}
              </List>
            </Box>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
