/* <div id="parent">
<div id="child 1">c1</div>
<div id="child 2">c2</div>
</div> 
<div id="parent">
<div id="child 1">c1</div>
<div id="child 2">c2</div>
</div> 
*/


const heading= [React.createElement("div",{id:"parent"},[React.createElement("div",{id:"child 1"},"c1"),React.createElement("div",{id:"child 2"},"c2")]),
               React.createElement("div",{id:"parent2"},[React.createElement("div",{id:"child 3"},"c1"),React.createElement("div",{id:"child 4"},"c2")])]

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)