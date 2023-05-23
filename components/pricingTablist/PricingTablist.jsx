import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './PricingTablist.css'
import CoursesCard from '../cards/CoursesCards';
import LogoImg from '../cards/LogoImg';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PricingBox from '../pricingBox/PricingBox'
import PedalBikeIcon from '@mui/icons-material/PedalBike';
// import BrandingImg from '../cards/BrandingImg';
// import BrandingTablist from '../cards/BrandingTablist';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="tablisst">
    <Box sx={{ width: '100%' }} id='tabs-Block'>  
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs id='tabs-Block' value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Logo"  {...a11yProps(0)} />
          <Tab label="Website" id='tabsaa-Block' {...a11yProps(1)} />
          <Tab label="Branding" id='tabs-Block' {...a11yProps(2)} />
          {/* <Tab label="Branding"  {...a11yProps(3)} /> */}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
       {/* <BrandingImg/> */}
       <div className="main-tablist-pricing">
        <div className="row-pricing-tablsit">
        <PricingBox
        logo1= {<CheckCircleIcon id='icon-checkcircle-price'/>}
        logo2= {<CheckCircleIcon id='icon-checkcircle-price'/>}
        logo3= {<CheckCircleIcon id='icon-checkcircle-price'/>}
        logo4= {<CheckCircleIcon id='icon-checkcircle-price'/>}
        logo5= {<CheckCircleIcon id='icon-checkcircle-price'/>}
        logo6= {<CheckCircleIcon id='icon-checkcircle-price'/>}
        logo7= {<CheckCircleIcon id='icon-checkcircle-price'/>}
        logo8= {<CheckCircleIcon id='icon-checkcircle-price'/>}
        logo9= {<CheckCircleIcon id='icon-checkcircle-price'/>}
         logo= {<CheckCircleIcon id='icon-checkcircle-price'/>}
         MainLogoFirst={<PedalBikeIcon id='pedal-bike-pricing' />} 
         title='Basic Logo'
         price='$99.00'
         previousPrice='$140.0'
         category1= '-4 Logo Concepts'
         category2= '-6 Revisions'
         category3= '-Custom Logo'
         category4= '-Vector PDF File'
         category5= '-48 hours Delivery'
         category6= '-HQ PNG + JPEG'
          category7= '-100% Ownership'
           category8= '-JPG, PDF, PNG'
           category9= '-JPG, PDF, PNG'
           category10= '-JPG, PDF, PNG'

        />
        <PricingBox
         
         logo1= {<CheckCircleIcon id='icon-checkcircle-price'/>}
         logo2= {<CheckCircleIcon id='icon-checkcircle-price'/>}
         logo3= {<CheckCircleIcon id='icon-checkcircle-price'/>}
         logo4= {<CheckCircleIcon id='icon-checkcircle-price'/>}
         logo5= {<CheckCircleIcon id='icon-checkcircle-price'/>}
         logo6= {<CheckCircleIcon id='icon-checkcircle-price'/>}
         logo7= {<CheckCircleIcon id='icon-checkcircle-price'/>}
         logo8= {<CheckCircleIcon id='icon-checkcircle-price'/>}
         logo9= {<CheckCircleIcon id='icon-checkcircle-price'/>}
          logo= {<CheckCircleIcon id='icon-checkcircle-price'/>}
          MainLogoFirst={<PedalBikeIcon id='pedal-bike-pricing' />} 
          title='Basic Logo'
          price='$99.00'
          previousPrice='$140.0'
          category1= '-4 Logo Concepts'
          category2= '-6 Revisions'
          category3= '-Custom Logo'
          category4= '-Vector PDF File'
          category5= '-48 hours Delivery'
          category6= '-HQ PNG + JPEG'
           category7= '-100% Ownership'
            category8= '-JPG, PDF, PNG'
            category9= '-JPG, PDF, PNG'
            category10= '-JPG, PDF, PNG'
             />
        <PricingBox
        
        logo1= {<CheckCircleIcon id='icon-checkcircle-price'/>}
        logo2= {<CheckCircleIcon id='icon-checkcircle-price'/>}
        logo3= {<CheckCircleIcon id='icon-checkcircle-price'/>}
        logo4= {<CheckCircleIcon id='icon-checkcircle-price'/>}
        logo5= {<CheckCircleIcon id='icon-checkcircle-price'/>}
        logo6= {<CheckCircleIcon id='icon-checkcircle-price'/>}
        logo7= {<CheckCircleIcon id='icon-checkcircle-price'/>}
        logo8= {<CheckCircleIcon id='icon-checkcircle-price'/>}
        logo9= {<CheckCircleIcon id='icon-checkcircle-price'/>}
         logo= {<CheckCircleIcon id='icon-checkcircle-price'/>}
         MainLogoFirst={<PedalBikeIcon id='pedal-bike-pricing' />} 
         title='Basic Logo'
         price='$99.00'
         previousPrice='$140.0'
         category1= '-4 Logo Concepts'
         category2= '-6 Revisions'
         category3= '-Custom Logo'
         category4= '-Vector PDF File'
         category5= '-48 hours Delivery'
         category6= '-HQ PNG + JPEG'
          category7= '-100% Ownership'
           category8= '-JPG, PDF, PNG'
           category9= '-JPG, PDF, PNG'
           category10= '-JPG, PDF, PNG'
            />
        <PricingBox 
         
         logo1= {<CheckCircleIcon id='icon-checkcircle-price'/>}
         logo2= {<CheckCircleIcon id='icon-checkcircle-price'/>}
         logo3= {<CheckCircleIcon id='icon-checkcircle-price'/>}
         logo4= {<CheckCircleIcon id='icon-checkcircle-price'/>}
         logo5= {<CheckCircleIcon id='icon-checkcircle-price'/>}
         logo6= {<CheckCircleIcon id='icon-checkcircle-price'/>}
         logo7= {<CheckCircleIcon id='icon-checkcircle-price'/>}
         logo8= {<CheckCircleIcon id='icon-checkcircle-price'/>}
         logo9= {<CheckCircleIcon id='icon-checkcircle-price'/>}
          logo= {<CheckCircleIcon id='icon-checkcircle-price'/>}
          MainLogoFirst={<PedalBikeIcon id='pedal-bike-pricing' />} 
          title='Basic Logo'
          price='$99.00'
          previousPrice='$140.0'
          category1= '-4 Logo Concepts'
          category2= '-6 Revisions'
          category3= '-Custom Logo'
          category4= '-Vector PDF File'
          category5= '-48 hours Delivery'
          category6= '-HQ PNG + JPEG'
           category7= '-100% Ownership'
            category8= '-JPG, PDF, PNG'
            category9= '-JPG, PDF, PNG'
            category10= '-JPG, PDF, PNG' />
        </div>
       </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
       <LogoImg/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CoursesCard/>
      </TabPanel>
      {/* <TabPanel value={value} index={3}>
        <BrandingTablist/>
      </TabPanel> */}
    </Box>
    </div>
  );
}