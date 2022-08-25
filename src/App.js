import './App.css';
import '../src/super-admin/css/style.css'
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from './approutes/routes';
import Layout from './Components/Layout';

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <AppRoutes />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
