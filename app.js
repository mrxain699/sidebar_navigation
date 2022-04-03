// Navbar Animation
const links  = document.querySelectorAll('.list_item');
const border = document.getElementById('border');
function animate_navs(index = 0){
    index = index;
    for(var i = 0; i< links.length; i++){
        links[i].classList.remove('active');
    }
    links[index].classList.add('active');
    border.style.top = `${(320/6) * index}px`;
}

// Min and Max Sidebar
const sidebar = document.getElementById('sidebar');
const btn = document.getElementById('min_and_max_btn');
const btn_icon  = document.getElementById('btn_icon');
btn.addEventListener('click', () =>{
    if(btn_icon.classList.contains('fa-angle-left')){
        btn_icon.classList.remove('fa-angle-left');
        btn_icon.classList.add('fa-angle-right');
    }
    else{
        btn_icon.classList.remove('fa-angle-right');
        btn_icon.classList.add('fa-angle-left');
    }
    sidebar.classList.toggle('active');
});