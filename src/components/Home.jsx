import { Box, Stack } from '@mui/material'
import React from 'react'
import Navbar from './Navbar'
import Feed from './Home/Feed'
import SideBar from './Sidebar'
import RightBar from './Home/Rightbar'
import Profile from '../components/StudentProfile'


const Home = () => {
  return (
    <Box>
      <Navbar/>
      <Stack direction="row" spacing={2}>
        <SideBar />
        {/* <Feed />
        <RightBar /> */}
        <Profile/>
      </Stack>
    </Box>
  )
}

export default Home