function getArraySize() {
  const sizeInput = document.getElementById("size");
  const errorEl = document.getElementById("error");
  let size = parseInt(sizeInput.value) || 0;

  if (size > 50000) {
    errorEl.innerText = "Maximum allowed value is 50000!";
    return null;
  } else {
    errorEl.innerText = "";
    return size;
  }
}
// Run quick Sort in JS
function runJS() {
  const size = getArraySize();
  if (!size) return;

  const arr = Array.from({length: size}, () => Math.floor(Math.random() * 1000));
  let start = performance.now();
  quickSortJS(arr);
  let end = performance.now();

  document.getElementById("time").innerText =
    `Execution Time (JS): ${(end - start).toFixed(2)} ms`;
  document.getElementById("output").innerText =
    `First 20 Elements: ${arr.slice(0,20).join(", ")}`;
}

// Run quick Sort in WebAssembly
function runWASM() {
  const size = getArraySize();
  if (!size) return;

  const arr = Array.from({length: size}, () => Math.floor(Math.random() * 1000));
  
  let start = performance.now();
  Module.ccall(
    'quick_sort',       // function name in c
    null,               // return type
    ['array', 'number'],// types of args
    [arr, arr.length]   // values
  );
  let end = performance.now();

  document.getElementById("time").innerText =
    `Execution Time (WASM): ${(end - start).toFixed(2)} ms`;
  document.getElementById("output").innerText =
    `First 20 Elements: ${arr.slice(0,20).join(", ")}`;
}
