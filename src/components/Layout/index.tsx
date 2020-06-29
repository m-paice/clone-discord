import React from "react";

import { Grid } from "./style";

import ServerList from "../ServerList";
import ServerName from "../ServerName";
import ChannelInfo from "../ChannelInfo";
import ChannelList from "../ChannelList";
import UserInfo from "../UserInfo";
import UserList from "../UserList";
import ChannelData from "../ChannelData";

interface Props {}

const Layout: React.FC<Props> = (props) => {
  return (
    <Grid>
      <ServerList />
      <ServerName />
      <ChannelInfo />
      <ChannelList />
      <UserInfo />
      <UserList />
      <ChannelData />
    </Grid>
  );
};

export default Layout;
