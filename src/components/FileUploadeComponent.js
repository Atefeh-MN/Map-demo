import { useDispatch } from "react-redux";
import { fetchData } from "../Redux/fileActions";


const FileUploadComponent = () => {
    const dispatch = useDispatch();
    const readExcel = (file) => {
        dispatch(fetchData(file));
    }
    // const renderFile = () => {
    //     if (loading) return <p>loading ....</p>
    //     if (!loading && error) return <p>{error}</p>
    //     if (filesData && fileData.length) {
    //         return (
    //             <input type='file' onChange={(e) => {
    //                 const file = e.target.files[0];
    //                 readExcel(file)
    //             }} />
    //         )
    //     }
    // }
    // return (<div>{renderFile()}</div>);

    return (
        <input type='file' onChange={(e) => {
            const file = e.target.files[0];
            readExcel(file)
        }}/>
);}
 
export default FileUploadComponent;