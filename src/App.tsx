import './App.css'
import 'leaflet/dist/leaflet.css'
import { BrowserRouter, Route, Routes } from 'react-router';
import { Layout } from './Layout';
import { lazy } from 'react';

const Home = lazy(() => import('./Home.tsx'))
const Map = lazy(() => import('./Map.tsx'))
const ShowsList = lazy(() => import('./ShowsList.tsx'))
const BuyTickets = lazy(() => import('./BuyTickets.tsx'))
const SurveyForm = lazy(() => import('./SurveyForm.tsx'))
const MyAccount = lazy(() => import('./MyAccount.tsx'))


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/map" element={<Map />} />
            <Route path="/shows" element={<ShowsList />} />
            <Route path="/tickets" element={<BuyTickets />} />
            <Route path="/feedback" element={<SurveyForm />} />
            <Route path="/myaccount" element={<MyAccount />} />
        </Routes>
      </Layout>    
    </BrowserRouter>
  )
}

export default App
