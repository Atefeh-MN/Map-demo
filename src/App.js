import './App.css';
import store from './Redux/store';
import { Provider } from 'react-redux'
import  MapContainer  from './components/mapComp/MapContainer';
import FileUploadComponent from './components/fileUpload/FileUploadeComponent';


function App() {
  return (
    <Provider store={store}>
    <div className="container">
     <FileUploadComponent/>
      <MapContainer/>
      </div>
    </Provider>
  );
}

export default App;
