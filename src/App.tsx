import './App.css'
import 'leaflet/dist/leaflet.css'
// import './leaflet.css'
import { BrowserRouter, Route, Routes } from 'react-router';
import { Home } from './Home';
import { Layout } from './Layout';
import { Map } from './Map';
import { ShowsList } from './ShowsList';
import { BuyTickets } from './BuyTickets';
import { SurveyForm } from './SurveyForm';

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
            {/* <Route path="/myaccount" element={<ShowsList />} /> */}
        </Routes>
      </Layout>
        
      </BrowserRouter>
  )
}

export default App
