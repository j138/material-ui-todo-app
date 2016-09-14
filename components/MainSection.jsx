import React from 'react';
import {
  CircularProgress,
  Tabs,
  Tab,
  DatePicker,
} from 'material-ui';

const MainSection = () => (
  <div>
    <h1>Progress Component</h1>
    <CircularProgress mode="indeterminate" size={1.5} />
    <CircularProgress mode="indeterminate" color={"red"} size={2} />
    <br />

    <h1>Tab Component</h1>
    <Tabs>
      <Tab label="Tab One" value="0" />
      <Tab label="Tab Two" value="1" />
      <Tab label="Tab Three" value="2" />
    </Tabs>
    <br />

    <h1>DatePicker Component</h1>
    <DatePicker hintText="Portrait Dialog" />
    <br />
  </div>
);

export default MainSection;
