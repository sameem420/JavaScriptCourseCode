// let text = "Hello World, I am learning JavaScript"
// let names = ["Ali", "Zain", "usman"];

// let myList = document.querySelector("#myList")
// let AddBTN = document.querySelector(".btnAdd");
// let listItem = document.getElementById("listItem");


// let myName = prompt("Enter your name",);
// console.log(myName)

// AddBTN.addEventListener('click', function() {
//     let listItemValue = listItem.value;
//     let li = document.createElement("li");
//     let btnEdit = document.createElement("button");

//     li.innerHTML = listItemValue;
//     myList.appendChild(li);
//     console.log("Input is :", myList);
// });
// Name = "Ali";
// console.log(Name)
// let Name;

// let date = new Date();
// console.log(date)

// document.title = "My Webpage"
// let docTitle = document.title;

// alert(docTitle)

// let heading = document.getElementById("heading");
// heading.addEventListener('onmouseover', function() {
//     alert("Event listened")
// })
// let paragraph = document.getElementsByClassName(".para");
// let Name = document.querySelector("#name");
// console.log(paragraph.innerHTML)
// heading.innerText = "I am Learning JavaScript"
// heading.style.backgroundColor = "red"
// console.log(heading.innerText)

// function myFunc() {
//     console.log(Name.value)
// }

//  let num1 = 100;
//  let num2 = "100";

// //  if (num1 > num2) {
// //      document.write(num1)
// //  }
// if (num1 === num2){
//      document.write("Number 1 and Number 2 are equal")
//  }
//  else {
//      document.write("bla bla")
//  }

// for (let t = 0; t <= text.length;  t++) {
//     console.log(text[t])
//     if (t == 10)
//         continue;
// }

// let txt = text.substr(5,10)

// console.log(txt);

// let names = ['Ali', 'Bazil'];

// names[0] = 'Zain'

// console.log(names[0]);

class Parent {
    constructor(Name, age) {
        this.Name = Name
        this.age = age
    }

    showName() {
        console.log(this.Name)
    }
    
}

class Child extends Parent {
    constructor(Name) {
        super()
        this.Name = Name
    }
    
}

let childobj = new Child("Ali", 20)
console.log(childobj.showName())
