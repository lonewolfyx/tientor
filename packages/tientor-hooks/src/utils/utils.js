import {construct, crush} from "radash";

export const uuid = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// 封装 deepClone
export const deepClone = (data) => {
    return construct(crush(data));
}