function display(callback, ...args) {
    callback(args);
   }
   const displayModeA = (args) =>
    alert(`Luas : ${args[0]} cm\u00B2 | Keliling : ${args[1]} cm`);
   const displayModeB = (args) =>
    alert(
    `Luas persegi panjang : ${args[0]} cm\u00B2, Keliling : ${args[1]} cm`
    );