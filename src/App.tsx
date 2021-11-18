import Login from 'views/login'
import Layout from 'layout'
import { getToken } from 'utils/token'
function App() {
  return (
    getToken('login') === '1' ? <Layout /> : <Login />
  );
}

export default App;
