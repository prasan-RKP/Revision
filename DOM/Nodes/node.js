
//---------- Creating New HTML Elements (Nodes) ----------

// Ex - 1
// const para = document.createElement("p");
// const node = document.createTextNode("This is newPara");
// para.appendChild(node);

// const element = document.getElementById("div1");
// element.appendChild(para);




// ------ Creating new HTML Elements - insertBefore()  -------

// Ex - 2

// let newPara = document.createElement("p");
// let nodeText = document.createTextNode("This is newOne");

// newPara.appendChild(nodeText);

// let parentDiv = document.getElementById("div1");
// let oldPara = document.getElementById("p1");

// parentDiv.insertBefore(newPara, oldPara);




// ------ Remove Existing HTML Elements --------

// Ex-3
// const element = document.getElementById("p1");
// element.remove();




//------ Removing a Child Node -----------
// Ex-4
// const parent = document.getElementById("div1");
// const child = document.getElementById("p1");
// parent.removeChild(child);





// ----- Replacing HTML elements ------
// Ex-5

// const para = document.createElement("p");
// const node = document.createTextNode("New Replacing HTML");
// para.appendChild(node);


// const parent = document.getElementById("div1");
// const child = document.getElementById("p1");
// parent.replaceChild(para, child);


