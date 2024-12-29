const myslide = document.querySelectorAll('.container')
let counter = 1;
slidefun(counter);


function plusSlides(n) {
	counter += n;
	slidefun(counter);

}
function currentSlide(n) {
	counter = n;
	slidefun(counter);

}


function slidefun(n) {
	
	let i;
	for(i = 0;i<myslide.length;i++){
		myslide[i].style.display = "none";
	}

	if(n > myslide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = myslide.length;
	   }
	myslide[counter - 1].style.display = "block";

}

function displayVal(obj = 0) {
	let tirkahAwal = document.getElementById('tirkah')
	let hutang = document.getElementById('hutang')
	let tajhiz = document.getElementById('tajhiz')
	let wasiat = document.getElementById('wasiat')

	if (wasiat.value > (tirkahAwal.value / 3)) {
		alert('Wasiat Tidak Boleh Lebih dari 1/3!')
		wasiat.value = 0;
	}

	let irts = document.getElementById('irts');
	let sumAll = parseInt(tirkahAwal.value.replace(/[.]/g, '') - hutang.value.replace(/[.]/g, '') - tajhiz.value.replace(/[.]/g, '') - wasiat.value.replace(/[.]/g, ''))

  function humanReadableNum(num) {
	let result = "" + num
	return result.replace(/(.)(?=(\d{3})+$)/g, '$1.')
  }

  let result = sumAll;

  function numBee(num) {
	result = num.replace(/[.]/g, '')
	return result.toString().replace(/(.)(?=(\d{3})+$)/g, '$1.')
  }
  irts.value = "Rp." + humanReadableNum(result); 
  tirkahAwal.value = numBee(tirkahAwal.value)
  hutang.value = numBee(hutang.value)
  tajhiz.value = numBee(tajhiz.value)
  wasiat.value = numBee(wasiat.value)
}
