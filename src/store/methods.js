const methods = {
    deepClone: function (obj) {
        let tmp = JSON.stringify(obj);
        let result = JSON.parse(tmp);
        return result;
    }
}

export default methods;