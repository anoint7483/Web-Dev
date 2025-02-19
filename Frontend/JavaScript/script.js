let btnl = document.querySelector("#btnl");
console.log(btnl);

// btnl.addEventListener("click", (evt) => {
//     console.log("button was clicked");
//     console.log(evt);
//     console.log(evt.type);
// });

let currMode = "light";

btnl.addEventListener("click", () => {
    // console.log("button was clicked - 2");

    if(currMode === "light") {
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    } else {
        currMode = "light";
        document.querySelector("body").style.backgroundColor = "white";

    }

    console.log(currMode);
});

// const handler = () => {
//     console.log("button was clicked - 10")
// }

// btnl.addEventListener("click", handler);