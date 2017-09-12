export default function (state = {}, {type, payload}) {
    switch(type) {
        case "SET_CONFIG":
            return payload;
        default:
            return state
    }
}