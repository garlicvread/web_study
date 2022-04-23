let getMaxNumber = function (arr) {
    let len = arr.length;
    let max = arr[0];

    for (let i = 1; i < len; i++) if (max < arr[i]) max = arr[i];
    return max;
};