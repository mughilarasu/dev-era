import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useSelector,useDispatch } from 'react-redux';
import Feeds from '../Feeds/Feeds';
import  {updateTabsRouter} from '../../actions/normalActions';
function TabPanel(props) {
  const { children, value, index,feeds, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    color:theme.palette.text.primary
  },
  divFeeds:{
    padding:'0.75px'
  }
}));

export default function HeaderTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [TabNames, setTabNames] = React.useState([]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
const MUItheme = useSelector(store => store.MUItheme);
const dispatch = useDispatch();

  React.useEffect(()=>{
    const { topicName, names } = props;
    const filterNames = names.filter((x) => topicName.includes(x));
    let tabNames =
      filterNames.toString() === "All"
        ? names.filter((x) => x !== "All")
        : topicName.filter((x) => x !== "All");
        setTabNames(tabNames)
        if(tabNames.length===1){
          tabNames.map((t,i)=>
          value.toString()!==i.toString()?setValue(i):setValue(value))
        }else{
          setValue(value)
        }
  },[value,props])
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          style={{background:MUItheme.tabbar}}
        >
          {TabNames.map((names, i) => {
            return <Tab label={names} {...a11yProps(i)} onClick={()=>dispatch(updateTabsRouter(names,props))} />;
          })}
        </Tabs>
      </AppBar>
      {TabNames.map((names, i) => {
        return (
          <>
          {i===value&&<div className={classes.divFeeds}><Feeds tabValue={value} index={i}/></div>}
          <TabPanel value={value} index={i}>
            {names}
          </TabPanel>
          </>
        );
      })}

    </div>
  );
}
