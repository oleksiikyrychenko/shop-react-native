export const makeQueryString = (query, prefix) => {
    var str = [], prop;
    for (prop in query) {
        if (query[prop]) {
            var key = prefix ? prefix + '[' + prop + ']' : prop,
                value = query[prop];
            str.push(
                value !== null && typeof value === 'object'
                    ? makeQueryString(value, key)
                    : encodeURIComponent(key) +
                        '=' +
                        encodeURIComponent(value)
            );
        }
    }
    return str.join('&');
};
