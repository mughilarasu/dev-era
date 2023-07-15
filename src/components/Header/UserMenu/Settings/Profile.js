import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Favorite from "@material-ui/icons/Favorite";
import PostAdd from "@material-ui/icons/PostAdd";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
const useStyles = makeStyles((theme) => ({
  iconBig: {
    fontSize: 150,
    color: "crimson",
  },
  iconText: {
    fontWeight: "bold",
    fontSize: "2.25rem",
  },

  userText: {
    margin: 5,
    fontSize: "1.25rem",
    textAlign: "center",
  },
  listRight: {
    float: "right",
    marginRight: "16px",
  },
  formControl: {
    margin: theme.spacing(2),
    width: "90%",
    "& .MuiInputLabel-animated , .MuiInput-root , .MuiSelect-icon": {
      color: theme.palette.text.primary,
    },
    "& .MuiInput-underline:before , .MuiInput-underline:after": {
      borderBottom: `1px solid ${theme.palette.text.primary}`,
    },
  },
  grid: {
    width: "auto",
    margin: 0,
    "& .MuiTypography-colorTextSecondary":{
        color: theme.palette.text.primary, 
    }
  },

  large: {
    width: 150,
    height: 150,
    margin: "15px auto",
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function Profile(props) {
  const [bio, setBio] = React.useState("");

  const [Name, setName] = React.useState("Mughil");
  const handleChangeBio = (event) => {
    setBio(event.target.value);
  };
  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const classes = useStyles();

  const { names, handleChange, topicName } = props;

  return (
    <div>
      <Grid container spacing={2} className={classes.grid}>
        <Grid item xs={12} md={4} sm={12}>
          <List component="nav">
            <ListItem>
              <ListItemIcon>
                <Favorite className={classes.iconBig} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography className={classes.iconText}>233</Typography>
                }
                secondary="Hearts"
              />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={4} sm={12}>
          <Avatar
            alt="user"
            src="https://image.flaticon.com/icons/svg/149/149071.svg"
            className={classes.large}
          />
          <Typography className={classes.userText}>Mughil</Typography>
        </Grid>
        <Grid item xs={12} md={4} sm={12}>
          <List component="nav" className={classes.listRight}>
            <ListItem>
              <ListItemIcon>
                <PostAdd className={classes.iconBig} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography className={classes.iconText}>10</Typography>
                }
                secondary="Blogs"
              />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={4} sm={6}>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-mutiple-checkbox-label" shrink="true">
              Select a topic
            </InputLabel>
            <Select
              labelId="demo-mutiple-checkbox-label"
              id="demo-mutiple-checkbox"
              multiple
              value={topicName}
              onChange={handleChange}
              input={<Input />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox
                    checked={
                      topicName[0] === "All"
                        ? true
                        : topicName.indexOf(name) > -1
                    }
                  />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={4} sm={6}>
          <FormControl className={classes.formControl}>
            <TextField
              id="outlined-multiline-flexible"
              label="Enter a short bio"
              multiline
              rowsMax={4}
              value={bio}
              onChange={handleChangeBio}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={4} sm={6}>
          <FormControl className={classes.formControl}>
            <TextField
              id="outlined-multiline-flexible"
              label="Name"
              value={Name}
              onChange={handleChangeName}
            />
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
}
