// let btn= document.getElementById('btnCount');
// btn.addEventListener('click',()=>{
// 	let headings= document.getElementsByTagName('p');
// 	alert(`The number of p tags:${headings.length}`);
// })
window.addEventListener('load', checkJSLoaded)
function checkJSLoaded() {
// create the script element
let script = document.createElement('script');
// assign an onload event handler
script.addEventListener('load', (event) => {
console.log('tagName.js file has been loaded');
});
// load the script file
script.src = 'tagName.js';
document.body.appendChild(script)}