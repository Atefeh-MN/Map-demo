import { useDispatch } from "react-redux";
import { fetchData } from '../../redux/fileActions';
import './fileUpload.css';
import {MdOutlineFileUpload } from "react-icons/md";


const FileUploadComponent = () => {
    const dispatch = useDispatch();
    const readExcel = (file) => {
        dispatch(fetchData(file));
    }
    return (
        <>
        <input type='file' id="file" accept='.xlsx' className="inputControl" onChange={(e) => {
            const file = e.target.files[0];
            readExcel(file)
        }} />
            <label htmlFor="file"><MdOutlineFileUpload /> Choose a file</label>
        </>
);}
 
export default FileUploadComponent;