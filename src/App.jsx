import { useState } from 'react'
import Campaign from './Componnent/Campaign'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ChildEducation from './Componnent/ChildEducation'
import NariShakti from './Componnent/NariShakti'
import MuftBhojan from './Componnent/MuftBhojan'
import PressRelease from './Componnent/Media/PressRelease'
import DonateNow from './Componnent/DonateNow'
import Contact from './Componnent/Contact'
import MissionVisionGoal from './Componnent/MissionVisionGoal'
import Team from './Componnent/Team'
import ApplyForJob from './Componnent/ApplyForJob'
import BecomeVolunteer from './Componnent/BecomeVolunteer'
import Navbar from './Componnent/Navbar'
import  Footer from './Componnent/Footer'
function App() {


  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Campaign />} />
          <Route path="/child" element={<ChildEducation />} />
          <Route path="/nari" element={<NariShakti />} />
          <Route path="/bhojan" element={<MuftBhojan />} />
          <Route path="/media" element={<PressRelease />} />
          <Route path="/donate" element={<DonateNow />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mission" element={<MissionVisionGoal />} />
          <Route path="/team" element={<Team />} />
          <Route path="/job" element={<ApplyForJob />} />
          <Route path="/volunteer" element={<BecomeVolunteer />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App
