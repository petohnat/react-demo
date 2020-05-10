export function arrayToObjectOnKey<T>(data: T[], key: string): {[key: string]: T} {
    const associativeArray = {};
    data.forEach((item) => {
        associativeArray[item[key]] = item;
    });

    return associativeArray;
}

export function objectToArray<T>(data: {[key: string]: T}): T[] {
    return Object.keys(data).map(index => data[index]);
}
