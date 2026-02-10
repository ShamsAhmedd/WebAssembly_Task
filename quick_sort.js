function quickSortJS(arr, left=0, right=arr.length-1){
    if(left >= right) return;
    let pivot = arr[Math.floor((left+right)/2)];
    let i = left, j = right;
    while(i <= j){
        while(arr[i] < pivot) i++;
        while(arr[j] > pivot) j--;
        if(i <= j){
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++; j--;
        }
    }
    if(left < j) quickSortJS(arr, left, j);
    if(i < right) quickSortJS(arr, i, right);
}
