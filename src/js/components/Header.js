import React from 'react';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Menu from 'grommet/components/Menu';
import GrommetIcon from 'grommet/components/icons/base/BrandGrommetOutline';
import SearchIcon from 'grommet/components/icons/base/Search';

export default function AppHeader (props) {
  return (
    <Header justify="center" colorIndex="neutral-4">
      <Box size={{width: {max: 'xxlarge'}}} direction="row"
        responsive={false} justify="start" align="center" 
        pad={{horizontal: 'medium'}}>
        <GrommetIcon colorIndex="brand" size="large" />
        <Box pad="small" />
        <Menu label="Label" inline={true} direction="row">
          <Anchor href="#">Solutions</Anchor>
          <Anchor href="#">Services</Anchor>
          <Anchor href="#">Products</Anchor>
          <Anchor href="#">About Us</Anchor>
          <Anchor href="#">Support</Anchor>
        </Menu>
        <Box flex="grow" align="end">
          <SearchIcon />
        </Box>
      </Box>
    </Header>
  );
};
