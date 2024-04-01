const arr = [1, 2, 3, 4, 5]

for (let i = 0; ; i++) {
    var choice = prompt("Enter 1<- or 2->");
  
    if (choice == 1)
        console.log(arr[(i - 1 + arr.length) % arr.length]);
    if (choice == 2)
        console.log(arr[(i + arr.length) % arr.length]);
}