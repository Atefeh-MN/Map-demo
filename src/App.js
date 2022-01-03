import './App.css';
import store from './Redux/store';
import { Provider } from 'react-redux'
import FileUploadComponent from './components/FileUploadeComponent';
import  MapContainer  from './components/MapContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="container">
      <FileUploadComponent />
      <MapContainer/>
      </div>
    </Provider>
  );
}

export default App;
