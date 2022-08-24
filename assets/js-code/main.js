
// language change dropdown 
function dropDownShow() {
    document.getElementById("dropdownContent").classList.toggle("dropdownShow");
  }
  
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('dropdownShow')) {
        openDropdown.classList.remove('dropdownShow');
     }
    }
  }
}


function categoryShowFunction(){
    const  allCategoryList = document.getElementById("allCategoryList");
    allCategoryList.classList.toggle("showCategory");
}

window.onclick = function(event){
    if(event.target == allCategoryList){
        allCategoryList.style.display = "none";
    }
}


//   category show tab function
  function categoryOpen(evt, categoryList) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(categoryList).style.display = "block";
    evt.currentTarget.className += " active";
  }

  // Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
