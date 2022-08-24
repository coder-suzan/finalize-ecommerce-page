// product option open accordion
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    
    // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
    
//     const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
//     if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
//        currentlyActiveAccordionItemHeader.classList.toggle("active");
//        currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
//      }

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});


const priceSliderOptions = {
    range: { min: 0, max: 1508, step: 10 },
    initialSelectedValues: { from: 112, to: 1508 },
    // grid: { minTicksStep: 1, marksStep: 5 },
    theme: "dark",
};

$('.priceSlider').alRangeSlider(priceSliderOptions);
  const options2 = {
  orientation: "vertical"
};
$('.vertical').alRangeSlider(options2);

const displaySizeSliderOptions = {
    range: { min: 0, max: 14, step: 1 },
    initialSelectedValues: { from: 2, to: 14 },
    // grid: { minTicksStep: 1, marksStep: 5 },
    theme: "dark",
};

$('.displaySizeSlider').alRangeSlider(displaySizeSliderOptions);
  const options3 = {
  orientation: "vertical"
};
$('.vertical').alRangeSlider(options3);

// custom select option
$('select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;
  
    $this.addClass('select-hidden'); 
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());
  
    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);
  
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
        //if ($this.children('option').eq(i).is(':selected')){
        //  $('li[rel="' + $this.children('option').eq(i).val() + '"]').addClass('is-selected')
        //}
    }
  
    var $listItems = $list.children('li');
  
    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });
  
    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });
  
    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});


// product grid and list show function
// function gridProduct(){

// }

const gridShow = document.getElementById("gridShow");
const productShowInner = document.getElementById("productShowInner");
const productListView = document.getElementById("productListView");
const listProduct = document.getElementById("listProduct");

gridShow.addEventListener("click", ()=> {
    productShowInner.classList.add("productGrid");
    productListView.classList.remove("productContainer");
    productShowInner.classList.remove("oneColumnGrid");
    gridShow.style.opacity = "0.5";
    listProduct.style.opacity = "1";
});


listProduct.addEventListener("click", ()=> {
    productListView.classList.add("productContainer");
    productShowInner.classList.add("oneColumnGrid");
    listProduct.style.opacity = "0.5";
    gridShow.style.opacity = "1";
});


$('.companyLogoSlider').slick({
    centerMode: true,
    centerPadding: '60px',
    prevArrow: '<button class="slick-prev"><i class="fa-solid fa-angle-left"></i></button>',
    nextArrow: '<button class="slick-next"><i class="fa-solid fa-angle-right"></i></button>',
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: false,
          textAlign: 'center',
          centerPadding: '20px',
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });


  // Mobile sidebar menu
  var filterBox = document.getElementById("filterBox");
  const productFilterMobileBtn = document.getElementById("productFilterMobileBtn");
  const closemobileProductSideBar = document.getElementById("closemobileProductSideBar");


productFilterMobileBtn.addEventListener("click", ()=> {
  filterBox.style.display = "block";
});


closemobileProductSideBar.addEventListener("click", ()=> {
  filterBox.style.display = "none";
});


window.onclick = function(event) {
  if (event.target == filterBox) {
    filterBox.style.display = "none";
  }
}
