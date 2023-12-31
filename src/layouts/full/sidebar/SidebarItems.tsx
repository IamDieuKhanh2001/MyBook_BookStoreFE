"use client"

import React from 'react';
import Menuitems from './MenuItems';
import { Box, List } from '@mui/material';
import NavItem from './NavItem';
import NavGroup from './NavGroup/NavGroup';
import { usePathname } from 'next/navigation'

const SidebarItems = ({ toggleMobileSidebar }: any) => {
  let currentPathname = usePathname();
  const pathDirect = currentPathname !== null ? currentPathname : ''; //edit path

  return (
    <Box sx={{ px: 3 }}>
      <List sx={{ pt: 0 }} className="sidebarNav" component="div">
        {Menuitems.map((item) => {
          // {/********SubHeader**********/}
          if (item.subheader) {
            return <NavGroup item={item} key={item.subheader} />;

            // {/********If Sub Menu**********/}
            /* eslint no-else-return: "off" */
          } else {
            return (
              <NavItem item={item} key={item.id} pathDirect={pathDirect} onClick={toggleMobileSidebar} />
            );
          }
        })}
      </List>
    </Box>
  );
};
export default SidebarItems;
