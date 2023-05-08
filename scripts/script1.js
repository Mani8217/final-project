function showPage(page){
    //Hide All of  pages
  document.querySelectorAll(".page-container").forEach(div => {
    div.style.display = "none";

  })
  
  document.querySelector(`#${page}`).style.display = "block";

}



document.addEventListener("DOMContentLoaded" , function(){
    document.querySelectorAll(".pages-btn").forEach(btn => {
        btn.onclick= function(){
            showPage(this.dataset.page);
        }
    })
})