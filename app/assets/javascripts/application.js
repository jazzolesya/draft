// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require light-gallery
//= require turbolinks
//= require_tree .

 $(document).ready(function() {
  $('#lightgallery').lightGallery();
});

function choose() {
 var chbox = document.getElementById('icecream');

 if(chbox.checked) {
 	console.log("Yes, I'd like one.");
 }
 else {
 	console.log("Thank you, but I don't want icecream for now.")
 }
};

function icecreamList() {
	var rad = document.getElementsByName('radbtn');
	for (var i = 0; i < rad.length; i++) {
		if (rad[i].checked) {
			console.log("You choosed icecream with " + rad);
		}
	}
};

function beverages() { 
    var sel = document.getElementById('mySelect').selectedIndex;
    var options = document.getElementById('mySelect').options;
    console.log("You choosed " + options[sel].text + ".");
}

function ranges() {
	var rang = document.getElementById('myRange');
	var one = document.getElementById('one');
	one.value = rang.value;
	var two = document.getElementById('two');
	two.style.width = rang.value + 'px';
}

function bordrang() {
	var rtl = document.getElementById('rtl').value;
	var rtr = document.getElementById('rtr').value;
    var rbl = document.getElementById('rbl').value;
    var rbr = document.getElementById('rbr').value;
    var ttl = document.getElementById('ttl');
    var ttr = document.getElementById('ttr');
    var tbl = document.getElementById('tbl');
    var tbr = document.getElementById('tbr');

    ttl.value = rtl;
    ttr.value = rtr;
    tbl.value = rbl;
    tbr.value = rbr;

    var block = document.getElementById('block');
    block.style.borderRadius = rtl + 'px ' + rtr + 'px ' + rbl + 'px ' + rbr + 'px ';
}

function borderinp() {
    var tl = document.getElementById('tl').value;
	var tr = document.getElementById('tr').value;
    var bl = document.getElementById('bl').value;
    var br = document.getElementById('br').value;

    var block2 = document.getElementById('block2');
    block2.style.borderRadius = tl + 'px ' + tr +'px ' + bl +'px ' + br + 'px ';
} 