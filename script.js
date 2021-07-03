let firstdiv = document.createElement("div");
document.body.appendChild(firstdiv);
firstdiv.setAttribute("style", "width: 800px; height: 200px; margin-left: auto; margin-right: auto; background-color: #818281;");

var img = document.createElement("img");
firstdiv.appendChild(img);
img.src = "rohitphoto.jpg";
img.setAttribute("Id","image");
var src = document.getElementById("image");
src.setAttribute("style", "width: 100px; height: 100px; overflow: hidden; border-radius: 50%;  position: relative; margin-top: 100px; margin-left: 350px; border-style: dotted; border-color: #F3EC0C");

//secondelement
let seconddiv = document.createElement("div");
document.body.appendChild(seconddiv);
seconddiv.setAttribute("style", "width: 200px; height: 50px; margin-left: auto; margin-right: auto; position:relative; margin-top: -45px; background-color: #F3B027;");

var textp = document.createElement("p");
seconddiv.appendChild(textp);
var text = document.createTextNode("Rohit Thatavarthi");
textp.appendChild(text);
textp.setAttribute("style", "text-align: center; font-size: 25px; margin-top: 35px; padding-top: 10px;")

//thirdelement
let backbox = document.createElement("div");
document.body.appendChild(backbox);
backbox.setAttribute("style", "width: 800px; height: 20px; margin-left: auto; margin-right: auto; margin-top: -15px; background-color: #818281;")

//4th Element
var createtables = document.createElement("TABLE");
document.body.appendChild(createtables);
createtables.setAttribute("style", "align-items: center; margin-left: auto; margin-right: auto;")

var tablerow = document.createElement("TR")
createtables.appendChild(tablerow)
var tabledata1 = document.createElement("TD")
tablerow.appendChild(tabledata1)
tabledata1.setAttribute("style", "padding-left: 30px; border-right: 1px solid black;padding-right: 20px; ")
var tabledatacontent = document.createTextNode("Varanasi India");
tabledata1.appendChild(tabledatacontent)

var tabledata2 = document.createElement("TD")
tablerow.appendChild(tabledata2)
tabledata2.setAttribute("style", "padding-left: 30px; border-right: 1px solid black;padding-right: 20px; ")
var tabledatacontent = document.createTextNode("+918686256587");
tabledata2.appendChild(tabledatacontent)

var tabledata3 = document.createElement("TD")
tablerow.appendChild(tabledata3)
tabledata3.setAttribute("style", "padding-left: 30px; border-right: 1px solid black;padding-right: 20px; ")
var tabledatacontent = document.createTextNode("rohitthatavarthi@gmail.com");
tabledata3.appendChild(tabledatacontent)

var tabledata4 = document.createElement("TD")
tablerow.appendChild(tabledata4)
tabledata4.setAttribute("style", "padding-left: 30px; border-right: 1px solid black;padding-right: 20px; ")
var tabledatacontent = document.createTextNode("www.domain.com");
tabledata4.appendChild(tabledatacontent)

var line = document.createElement("div")
document.body.appendChild(line)
line.setAttribute("style","width: 800px; height: 5px; margin-left: auto; margin-right: auto; background-color: #818281;")


// <div style="align-items: center;  padding-Right:400 px; border-right: 2px solid black; width: 50%;">    
// <table>
// //     <tr>
// //         <td style="padding-left: 350px;">
// <h1 style="text-align: center"> <i class="fas fa-user-circle" style="size: 30px;"></i> Profile</h1>
// <p>Rohit thatavarthi is a good boy in the world he has self confident and he is the good boy in the nature</p>
// <h1 style="text-align: center">Rohit Thatavarthi</h1>
//         <h1 style="text-align: center">Rohit Thatavarthi</h1>
//         <h1 style="text-align: center">Rohit Thatavarthi</h1>
//         <h1 style="text-align: center">Rohit Thatavarthi</h1>
//         </td>
//         <td style="padding-left: 200px;">Rohit Thatavarthi
//             <h1 style="text-align: center;">Rohit Thatavarthi</h1>
//             <h1 style="text-align: center">Rohit Thatavarthi</h1>
//             <h1 style="text-align: center">Rohit Thatavarthi</h1>
//             <h1 style="text-align: center">Rohit Thatavarthi</h1>
//             <h1 style="text-align: center">Rohit Thatavarthi</h1>
//         </td>
//     </tr>
// </table>
// </div>

var finaldiv = document.createElement("div")
document.body.appendChild(finaldiv)
finaldiv.setAttribute("style", "align-items: center;  padding-Right:400 px;")
var finaltable = document.createElement("TABLE")
finaldiv.appendChild(finaltable)
var finalrow = document.createElement("TR")
finaltable.appendChild(finalrow)
var finaldata = document.createElement("TD")
finalrow.appendChild(finaldata)
finaldata.setAttribute("style", "padding-left: 250px; padding-right:50px; width:50%; border-right:2px solid black ")
var heading = document.createElement("p")
finaldata.appendChild(heading);
heading.setAttribute("style", "text-align:center; font-size: 30px");
var icon = document.createElement("i");
heading.appendChild(icon);
icon.setAttribute("class"," fas fa-user-circle")
var contentheading = document.createTextNode("Profile");
heading.appendChild(contentheading);
var content = document.createElement("p")
finaldata.appendChild(content)
content.setAttribute("style", "text-align:center")
var contentdata = document.createTextNode("Rohit thatavarthi is a good boy in the world he has self confident and he is the good boy in the nature");
content.appendChild(contentdata)

var heading2 = document.createElement("p")
finaldata.appendChild(heading2);
heading2.setAttribute("style", "text-align:center; font-size: 30px");
var icon2 = document.createElement("i");
heading2.appendChild(icon2);
icon2.setAttribute("class","fas fa-flask")
var contentheading2 = document.createTextNode("skills");
heading2.appendChild(contentheading2);

var heading3 = document.createElement("p")
finaldata.appendChild(heading3);
heading3.setAttribute("style", "text-align:center; font-size: 30px");
var icon3 = document.createElement("i");
heading3.appendChild(icon3);
icon3.setAttribute("class","fas fa-briefcase")
var contentheading2 = document.createTextNode("Work Experience");
heading3.appendChild(contentheading2);
var content2 = document.createElement("p")
finaldata.appendChild(content2)
content2.setAttribute("style", "text-align:center")
var contentdata2 = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip");
content2.appendChild(contentdata2)

var heading4 = document.createElement("p")
finaldata.appendChild(heading4);
heading4.setAttribute("style", "text-align:center; font-size: 25px");
var contentheading3 = document.createTextNode("Company 1");
heading4.appendChild(contentheading3);
var content3 = document.createElement("p")
finaldata.appendChild(content3)
content3.setAttribute("style", "text-align:center")
var contentdata2 = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip");
content3.appendChild(contentdata2)
//end of one side




var finaldata2 = document.createElement("TD")
finalrow.appendChild(finaldata2)
finaldata2.setAttribute("style", "padding-left: 50px; padding-right:250px; width: 50%;")
var heading5 = document.createElement("p")
finaldata2.appendChild(heading5);
heading5.setAttribute("style", "text-align:center; font-size: 25px");
var contentheading4 = document.createTextNode("Company 2");
heading5.appendChild(contentheading4);
var content4 = document.createElement("p")
finaldata2.appendChild(content4)
content4.setAttribute("style", "text-align:center")
var contentdata3 = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip");
content4.appendChild(contentdata3)

var heading6 = document.createElement("p")
finaldata2.appendChild(heading6);
heading6.setAttribute("style", "text-align:center; font-size: 25px");
var contentheading5 = document.createTextNode("Company 3");
heading6.appendChild(contentheading5);
var content5 = document.createElement("p")
finaldata2.appendChild(content5)
content5.setAttribute("style", "text-align:center")
var contentdata4 = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip");
content5.appendChild(contentdata4)

var heading8 = document.createElement("p")
finaldata2.appendChild(heading8);
heading8.setAttribute("style", "text-align:center; font-size: 25px");
var contentheading6 = document.createTextNode("Education");
heading8.appendChild(contentheading6);

var heading7 = document.createElement("p")
finaldata2.appendChild(heading7);
heading7.setAttribute("style", "text-align:center; font-size: 25px");
var contentheading6 = document.createTextNode("IIT - BHU");
heading7.appendChild(contentheading6);
var content6 = document.createElement("p")
finaldata2.appendChild(content6)
content6.setAttribute("style", "text-align:center")
var contentdata4 = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip so much content is present here");
content6.appendChild(contentdata4)

