import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Cover from "../Shared/shared component/Cover";
import { useState } from "react";
import useMenu from '../../hooks/UseMenu';

import OrderTab from './OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    const categories =['salad','pizza','soup','dessert','drinks']
    const {category} = useParams()
    const initialIndex =categories.indexOf(category)
    const [tabIndex,setTabIndex] = useState(initialIndex)
    const [menu]= useMenu()
    const dessert = menu.filter((item) => item.category === "dessert");
    const soup = menu.filter((item) => item.category === "soup");
    const salad = menu.filter((item) => item.category === "salad");
    const pizza = menu.filter((item) => item.category === "pizza");
    const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
        <Helmet>
            <title>Restaurant | Order Food </title>
        </Helmet>
      <Cover
        img={"https://i.ibb.co/5hdbKGL/soup-bg.jpg"}
        title={"order Food"}
      ></Cover>
  <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList>
    <Tab>salad</Tab>
    <Tab>pizza</Tab>
    <Tab>soup </Tab>
    <Tab>dessert</Tab>
    <Tab>drinks</Tab>
  </TabList>
  <TabPanel>
 <OrderTab items={salad} ></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab items={pizza} ></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab items={soup} ></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab items={dessert} ></OrderTab>
  </TabPanel>
  <TabPanel> <OrderTab items={drinks} ></OrderTab></TabPanel>
  <TabPanel></TabPanel>
</Tabs>
    </div>
  );
};

export default Order;
