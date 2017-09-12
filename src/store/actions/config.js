import client from "helpers/client";

export function setConfig(payload) {
    return {
        type: "SET_CONFIG",
        payload
    }
}

export function loadConfig() {
    return async dispatch => {
        try {
            let response = await client.get("/configuration");
            dispatch(setConfig(response.data))            
        } catch (e) {
            console.log(e);
        }
    }
}