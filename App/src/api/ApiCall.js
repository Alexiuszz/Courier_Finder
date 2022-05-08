import axios from "axios";

const axiosInstance = axios.create(
    {
        baseURL: 'http://localhost:3002',
        headers: {
            "Content-type": "application/json"
        }
    }
);

export function callApiEndpoint(endpoint, method, data, successCallback, failedCallback, alwaysCallback) {
    axiosInstance({
        url: `/${endpoint}`,
        method: method,
        data: (data) ? data : {},
        responseType: "json",
    })
        .then(
            (resp) => {
                //console.log("Response: ");
                //console.log(resp);
                if (resp.data) {
                    if (resp.status !== 200 || resp.status !== 201 || resp.status !== 202 ) {
                        throw new Error(resp.data.data.message);
                    }
                    successCallback(resp.data);
                }
            }
        )
        .catch(
            (error) => {
                //console.log("Axios Error: ");
                //console.log(error);
                //console.log("error.response: ", error.response);
                let errMsg = "";
                if (error) {
                    // if (axios.isCancel(error))
                    // {
                    //     console.log("Request Cancelled. " + error.message);

                    // } else
                    if (error.response && error.response.data) {
                        errMsg = error.response.data;
                    } else {
                        errMsg = error.message;
                    }
                }
                
                failedCallback((error.response) ? error.response.data : errMsg);
            }
        )
        .then(
            () => {
                if (alwaysCallback) {
                    alwaysCallback();
                }
            }
        );
}

// export const asyncApiCall = (
//     endpointUri,
//     method,
//     data,
//     callbacks,
//     errMsg = "Error occurred while performing operation."
// ) => {
//     const {
//         setBusy,
//         successCallback,
//         errorCallback
//     } = callbacks;

//     (typeof setBusy == "function") && setBusy(true);

//     return callApiEndpoint(
//         endpointUri,
//         method,
//         data,
//         (resp) => {
//             (typeof setBusy == "function") && setBusy(false);
//             (typeof successCallback == "function") && successCallback(resp);
//         },
//         (error) => {
//             (typeof setBusy == "function") && setBusy(false);

//             (typeof errorCallback == "function") &&
//                 errorCallback(
//                     error.data && error.data.message ?
//                         error.data.message
//                         :
//                         errMsg
//                 );
//         }
//     );
// }