
import * as XLSX from 'xlsx'
import { FETCH_FILEDATA_FAILURE, FETCH_FILEDATA_REQUEST, FETCH_FILEDATA_SUCCESS } from './fileActionTypes';

function fetchFileDataRequets() {
    return {
        type: FETCH_FILEDATA_REQUEST,
    }
};
function fetchFileDataFailure(error) {
    return {
        type:FETCH_FILEDATA_FAILURE,
        payload: error
    }
}
function fetchFileDataSuccess(fileData) {
    return {
        type: FETCH_FILEDATA_SUCCESS,
        payload: fileData
    }
}

//async action creator
export function fetchData(file) {
    return function (dispatch) {
        dispatch(fetchFileDataRequets());
        const promise = new Promise((resolve, reject) => {
            const fileReader = new FileReader()
            fileReader.readAsArrayBuffer(file);
            fileReader.onload = (e) => {
                const bufferArray = e.target.result;
                const wb = XLSX.read(bufferArray, { type: 'buffer' });
                const wsname = wb.SheetNames[0];
                const ws = wb.Sheets[wsname];
                const data = XLSX.utils.sheet_to_json(ws);
                resolve(data);
            }
            fileReader.onerror = ((error) => {
                reject(error);
            });
        });
        promise.then(data => {
            const fileData = data;
            // localStorage.setItem('fileData', JSON.stringify(data));
            console.log(fileData)
            dispatch(fetchFileDataSuccess(fileData));
        })
            .catch(error =>
                dispatch(fetchFileDataFailure(error.message))
            )
    }
}
