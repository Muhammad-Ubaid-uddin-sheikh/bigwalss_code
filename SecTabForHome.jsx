import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './SecTabForHome.css'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Software Development " {...a11yProps(0)} />
        <Tab label="Testing & QA " {...a11yProps(1)} />
        <Tab label="Application Services" {...a11yProps(2)} />
        <Tab label="IT Consulting" {...a11yProps(3)} />
        <Tab label="UX/UI Design " {...a11yProps(4)} />
        <Tab label=" Data Analytics " {...a11yProps(5)} />
        <Tab label="Logo & Branding Services" {...a11yProps(6)} />
        <Tab label="WEB DESIGN & DEVELOPMENT" {...a11yProps(7)} />
        <Tab label=" Digital Marketing " {...a11yProps(8)} />
      </Tabs>
      <TabPanel value={value} index={0}>
      <div className="secTabist-main-div">
          <h2 className='tablsit-sec-h2'>Software Development</h2>
        <div className="p">
        <p className="paragraph-sec-tablsst">
        A software development company with 33 years of business excellence, we can develop reliable, scalable and secure software solutions for any OS, browser and device. We bring together deep industry expertise and the latest IT advancements to deliver custom solutions and products that perfectly fit the needs and behavior of their users.
        </p>
        </div>
        <div className="row-sec-tablsit">
          <div className="colm-tablist-sec"><ul>
            <li><a  href="">Software consulting</a></li>
            <li><a href="">Software development outsourcing </a></li>
            <li><a href="">Team augmentation </a></li>
            <li><a href="">Legacy software modernization </a></li>
            </ul></div>
          <div className="colm-tablist-sec">
          <ul>
            <li><a href="">Custom software development </a></li>
            <li><a href="">Software product development Team augmentation  </a></li>
            <li><a href="">Cloud application development </a></li>
          </ul>
          </div>
        </div>
      </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className="secTabist-main-div">
          <h2 className='tablsit-sec-h2'>Testing & QA </h2>
        <div className="p">
        <p className="paragraph-sec-tablsst">
        We offer full-range QA and testing outsourcing services, can help to develop your QA or enhance the existing one, assist you in TCoE setup and evolution. We perform end-to-end testing of mobile, web and desktop application at each stage of the development lifecycle.
        </p>
        </div>
        <div className="row-sec-tablsit">
          <div className="colm-tablist-sec"><ul>
            <li><a  href="">QA outsourcing </a></li>
            <li><a href="">Security testing  </a></li>
            <li><a href="">Usability testing  </a></li>
            <li><a href="">Test automation  </a></li>
            </ul></div>
          <div className="colm-tablist-sec">
          <ul>
            <li><a href=""> QA consulting </a></li>
            <li><a href=""> Functional testing   </a></li>
            <li><a href="">Performance testing  </a></li>
          </ul>
          </div>
        </div>
      </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <div className="secTabist-main-div">
          <h2 className='tablsit-sec-h2'>Application Services </h2>
        <div className="p">
        <p className="paragraph-sec-tablsst">
        Our experts help mid-sized and large firms build, test, protect, manage, migrate and optimize digital solutions ensuring they’re always up and running and achieve the optimal TCO. 
        </p>
        </div>
        <div className="row-sec-tablsit">
          <div className="colm-tablist-sec"><ul>
            <li><a  href="">Application management </a></li>
            <li><a href="">Application integration  </a></li>
            <li><a href="">Application development  </a></li>
            <li><a href="">Application maintenance and support </a></li>
            </ul></div>
          <div className="colm-tablist-sec">
          <ul>
            <li><a href="">Application modernization </a></li>
            <li><a href="">Application security services</a></li>
            <li><a href="">Application testing </a></li>
          </ul>
          </div>
        </div>
      </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <div className="secTabist-main-div">
          <h2 className='tablsit-sec-h2'>Software Development</h2>
        <div className="p">
        <p className="paragraph-sec-tablsst">
        A software development company with 33 years of business excellence, we can develop reliable, scalable and secure software solutions for any OS, browser and device. We bring together deep industry expertise and the latest IT advancements to deliver custom solutions and products that perfectly fit the needs and behavior of their users.
        </p>
        </div>
        <div className="row-sec-tablsit">
          <div className="colm-tablist-sec"><ul>
            <li><a  href="">Software consulting</a></li>
            <li><a href="">Software development outsourcing </a></li>
            <li><a href="">Team augmentation </a></li>
            <li><a href="">Legacy software modernization </a></li>
            </ul></div>
          <div className="colm-tablist-sec">
          <ul>
            <li><a href="">Custom software development </a></li>
            <li><a href="">Software product development Team augmentation  </a></li>
            <li><a href="">Cloud application development </a></li>
          </ul>
          </div>
        </div>
      </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <div className="secTabist-main-div">
          <h2 className='tablsit-sec-h2'>Software Development</h2>
        <div className="p">
        <p className="paragraph-sec-tablsst">
        A software development company with 33 years of business excellence, we can develop reliable, scalable and secure software solutions for any OS, browser and device. We bring together deep industry expertise and the latest IT advancements to deliver custom solutions and products that perfectly fit the needs and behavior of their users.
        </p>
        </div>
        <div className="row-sec-tablsit">
          <div className="colm-tablist-sec"><ul>
            <li><a  href="">Software consulting</a></li>
            <li><a href="">Software development outsourcing </a></li>
            <li><a href="">Team augmentation </a></li>
            <li><a href="">Legacy software modernization </a></li>
            </ul></div>
          <div className="colm-tablist-sec">
          <ul>
            <li><a href="">Custom software development </a></li>
            <li><a href="">Software product development Team augmentation  </a></li>
            <li><a href="">Cloud application development </a></li>
          </ul>
          </div>
        </div>
      </div>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <div className="secTabist-main-div">
          <h2 className='tablsit-sec-h2'>Software Development</h2>
        <div className="p">
        <p className="paragraph-sec-tablsst">
        A software development company with 33 years of business excellence, we can develop reliable, scalable and secure software solutions for any OS, browser and device. We bring together deep industry expertise and the latest IT advancements to deliver custom solutions and products that perfectly fit the needs and behavior of their users.
        </p>
        </div>
        <div className="row-sec-tablsit">
          <div className="colm-tablist-sec"><ul>
            <li><a  href="">Software consulting</a></li>
            <li><a href="">Software development outsourcing </a></li>
            <li><a href="">Team augmentation </a></li>
            <li><a href="">Legacy software modernization </a></li>
            </ul></div>
          <div className="colm-tablist-sec">
          <ul>
            <li><a href="">Custom software development </a></li>
            <li><a href="">Software product development Team augmentation  </a></li>
            <li><a href="">Cloud application development </a></li>
          </ul>
          </div>
        </div>
      </div>
      </TabPanel>
      <TabPanel value={value} index={6}>
      <div className="secTabist-main-div">
          <h2 className='tablsit-sec-h2'> Logo & Branding Services</h2>
        <div className="p">
        <p className="paragraph-sec-tablsst">
        LOGO & BRANDING Tailor-Made Logo & Branding Services We cultivate, create, and inspire brands to connect and communicate with their audience by crafting a custom logo and brand identity that makes them noticeable and remembered. Thanks to a team of passionate and dedicated in-house logo designers.
        </p>
        </div>
        <div className="row-sec-tablsit">
          <div className="colm-tablist-sec"><ul>
            <li><a  href="">Custom Logo Design</a></li>
            <li><a href="">
Iconic Logo Design </a></li>
            
            <li><a href="">Illustrative Logo Design </a></li>
            </ul></div>
          <div className="colm-tablist-sec">
          <ul>
            <li><a href="">
Animated Logo Design</a></li>
<li><a href="">Typography Logo Design </a></li>
            {/* <li><a href="">Software product development Team augmentation  </a></li>
            <li><a href="">Cloud application development </a></li> */}
          </ul>
          </div>
        </div>
      </div>
      </TabPanel>
      <TabPanel value={value} index={7}>
      <div className="secTabist-main-div">
          <h2 className='tablsit-sec-h2'>WEB DESIGN & DEVELOPMENT</h2>
        <div className="p">
        <p className="paragraph-sec-tablsst">
        We make visions a reality by developing responsive, engaging, and user-friendly websites. Our web experts use cutting-edge techniques and best practices to create user-friendly, easy-to-use, maintainable business websites, web portals, and e-commerce sites.
        </p>
        </div>
        <div className="row-sec-tablsit">
          <div className="colm-tablist-sec"><ul>
            <li><a  href="">Responsive Website Design</a></li>
            <li><a href="">HTML & Web Development    </a></li>
            <li><a href="">
Web Development Services </a></li>
          
            </ul></div>
          <div className="colm-tablist-sec">
          <ul>
            <li><a href="">Maintenance and Hosting </a></li>
            <li><a href="">100% Customizable</a></li>
            {/* <li><a href="">Software product development Team augmentation  </a></li>
            <li><a href="">Cloud application development </a></li> */}
          </ul>
          </div>
        </div>
      </div>
      </TabPanel>
      <TabPanel value={value} index={8}>
      <div className="secTabist-main-div">
          <h2 className='tablsit-sec-h2'>Digital Marketing</h2>
        <div className="p">
        <p className="paragraph-sec-tablsst">
        ONLINE MARKETING Engage Your Online Audience & Convert Them Into Customers Are you looking for a digital marketing agency with the experience, toolkit, and agility to assist you in achieving your goals? BigWals takes pride in offering the best digital marketing services, measurable campaigns, SEO, SMM, and content services to help you grow your business online. In addition, we assist you in increasing your ROI and conversion rate.
        </p>
        </div>
        <div className="row-sec-tablsit">
          <div className="colm-tablist-sec"><ul>
            <li><a  href="">PPC/paid marketing</a></li>
            <li><a href="">SEO & SM </a></li>
            <li><a href="">Social Media Marketing</a></li>
           
            </ul></div>
          <div className="colm-tablist-sec">
          <ul>
            <li><a href="">Content marketing </a></li>
            <li><a href="">Online PR </a></li>
            {/* <li><a href="">Software product development Team augmentation  </a></li>
            <li><a href="">Cloud application development </a></li> */}
          </ul>
          </div>
        </div>
      </div>
      </TabPanel>
    </Box>
  );
}
