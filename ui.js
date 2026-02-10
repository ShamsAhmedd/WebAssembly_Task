// Run quick Sort in JS
function runJS() {
  const size = parseInt(document.getElementById("size").value);
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
  const size = parseInt(document.getElementById("size").value);
  const arr = Array.from({length: size}, () => Math.floor(Math.random() * 1000));

  let start = performance.now();

  // Call WASM quick Sort
  Module.ccall(
    'quick_sort',         // اسم الدالة في C
    null,                  // return type
    ['array', 'number'],   // types of args
    [arr, arr.length]      // values
  );

  let end = performance.now();

  document.getElementById("time").innerText =
    `Execution Time (WASM): ${(end - start).toFixed(2)} ms`;
  document.getElementById("output").innerText =
    `First 20 Elements: ${arr.slice(0,20).join(", ")}`;
}
