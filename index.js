const accessKey="4OB2ekf0gb4QssejL7yhbI51D1MQJF-ghRp4mpT0abg";

const formE1 = document.querySelector("form")
const searchInputE1 = document.getElementById("search");
const imagesE1 = document.querySelector(".images")
const showmoreE1 = document.getElementById("show-more-images")

let inpudata="";
let page=1;
async function searchimages() {
    inputdata = searchInputE1.value;  
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}&client_id=${accessKey}`;
     const response =await fetch(url);
   const data = await response.json(); 
   if(page=== 1){
   imagesE1.innerHTML = "";
} 
const results = data.results;

results.map((result)=>{
 const imagewrapper = document.createElement("div");
imagewrapper.classList.add("image");
const image = document.createElement("img");
image.src=  result.urls.small;
image.alt= result.alt_description;
const imageLink = document.createElement("a")
imageLink.href = result.links.html
imageLink.target = "_blank"
imageLink.textContent=result.alt_description;
imagewrapper.appendChild(image);
imagewrapper.appendChild(imageLink);
imagesE1.appendChild(imagewrapper);
});

page++;



if(page>1){
   showmoreE1.style.display = "block";
}
}
  

formE1.addEventListener("submit", (event) => {
    event.preventDefault();
    searchimages();

 });
 showmoreE1.addEventListener("click",() => {
   searchimages();
 });