import { Box, Stack } from '@mui/material'
import React from 'react'
import Navbar from './Navbar'
import Feed from './Home/Feed'
import SideBar from './Sidebar'
import RightBar from './Home/Rightbar'
import StudentDashBoard from '../components/StudentDashBoard'


const Home = () => {
  return (
    <Box>
      <Navbar/>
      <Stack direction="row" spacing={2}>
        <SideBar />
        {/* <Feed />
        <RightBar /> */}
        <StudentDashBoard/>
      </Stack>
    </Box>
  )
}

export default Home