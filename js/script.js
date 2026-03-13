const toggle=document.querySelector('.menu-toggle');
const mobileNav=document.querySelector('.mobile-nav');

toggle.addEventListener('click',()=>{
mobileNav.classList.toggle('open');
});

/* close menu when mobile link clicked */

document.querySelectorAll('.mobile-nav a').forEach(link=>{
link.addEventListener('click',()=>{
mobileNav.classList.remove('open');
});
});

const workLink=document.getElementById("workLink");
const workItem=document.getElementById("workItem");

workLink.addEventListener("click",(e)=>{
e.preventDefault();
workItem.classList.toggle("open");
});








/* ================= ALBUM IMAGE GENERATOR ================= */

function createAlbum(albumId, path, total){

const album=document.getElementById(albumId);
if(!album || album.dataset.loaded==="true") return;

for(let i=1;i<=total;i++){

const num=String(i).padStart(2,"0");

const img=document.createElement("img");
img.src=`${path}${num}.jpg`;

img.loading=(i<=5)?"eager":"lazy";

album.appendChild(img);

}

album.dataset.loaded="true";

}


/* ================= ALBUM CONFIG ================= */

const albumData={
album1:{path:"stills/a1/sfaif",total:9},
album2:{path:"stills/a2/cartographer",total:16},
album3:{path:"stills/a3/noctua",total:29},
album4:{path:"stills/a4/afk",total:6}
};


/* load first album immediately */

createAlbum("album1",albumData.album1.path,albumData.album1.total);


/* ================= ALBUM SWITCHING ================= */

const albumBtns=document.querySelectorAll(".album-btn");
const albums=document.querySelectorAll(".album");

albumBtns.forEach(btn=>{

btn.addEventListener("click",()=>{

const target=btn.dataset.album;

albumBtns.forEach(b=>b.classList.remove("active"));
albums.forEach(a=>a.classList.remove("active"));

btn.classList.add("active");

const album=document.getElementById(target);
album.classList.add("active");


/* generate images only when opened */

const data=albumData[target];
createAlbum(target,data.path,data.total);

});

});






/* ================= SCROLL TO TOP ================= */

const scrollBtn=document.getElementById("scrollTopBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY > window.innerHeight*2){
scrollBtn.classList.add("visible");
}else{
scrollBtn.classList.remove("visible");
}

});

scrollBtn.addEventListener("click",()=>{

window.scrollTo({
top:0,
behavior:"smooth"
});

});