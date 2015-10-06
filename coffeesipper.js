"use strict";

(function () {

	var sips = 0;

	var straws = 0;
	var strawCost = 25;

	var coders = 0;
	var codersCost = 150;

	var kids = 0;
	var kidsCost = 75;

	var hcs = 0;
	var hcsCost = 300;

	var mcs = 0;
	var mcsCost = 500;

	var cows = 0;
	var cowsCost = 1000;

	var timer = setInterval(addSip, 1000);
	var time = 0;

	var timer = setInterval(updateSips, 5000);

	var achievs = {firstClick: false, firstStraw: false, firstMcs: false, equals: false};

	window.addEventListener('load', function() {

		document.getElementById('sips_taken').innerHTML = sips;

		setDisplay();

		document.getElementById('cup').addEventListener('click', singleSip);
		
		document.getElementById('straws').addEventListener('click', addStraw);
		document.getElementById('straws').disabled = true;
		document.getElementById('num_straws').innerHTML = straws;
		document.getElementById('straws_cost').innerHTML = strawCost;

		document.getElementById('coders').addEventListener('click', addCoder);
		document.getElementById('num_coders').innerHTML = coders;
		document.getElementById('coders_cost').innerHTML = codersCost;

		document.getElementById('kids').addEventListener('click', addKid);
		document.getElementById('num_kids').innerHTML = kids;
		document.getElementById('kids_cost').innerHTML = kidsCost;		

		document.getElementById('hcs').addEventListener('click', addHcs);
		document.getElementById('num_hcs').innerHTML = hcs;
		document.getElementById('hcs_cost').innerHTML = hcsCost;

		document.getElementById('mcs').addEventListener('click', addMcs);
		document.getElementById('num_mcs').innerHTML = mcs;
		document.getElementById('mcs_cost').innerHTML = mcsCost;

		document.getElementById('cows').addEventListener('click', addCow);
		document.getElementById('num_cows').innerHTML = cows;
		document.getElementById('cows_cost').innerHTML = cowsCost;
	});

	function updateSips(){
		document.getElementById('title').innerHTML = sips + " Sips";
	}

	function addSip(timer){
		time++;
		if (time % 5 == 0){
			sip(straws.quantity);
			//alert("after");
		}
		if (time % 10  == 0){
			sip(kids);
		}
		if ( time % 5 == 0){
			sip(coders);
		}
		if ( time % 30 == 0){
			sip(hcs * 5);
		}
		if(time % 30 == 0){
			sip(mcs * 30);
		}
		if(time % 200 == 0){
			sip( cows * 400);
		}

	}

	function singleSip(){
		sip(1);
	}

	function sip(n){
		for (var i = 0; i < n; i++ ){
			sips++;
			checkAchievements();
			document.getElementById('sips_taken').innerHTML = sips;
		}
		setDisplay();
	}

	function checkAchievements(){
		if (sips == 1){
			document.getElementById("firstClick").src = "icon.png";
		}
		if (straws == 1 && !achievs[firstStraw]){
			document.getElementById("firstStraw").src = "firststraw.png";
			achievs[firstStraw] = true;
		}
		if (mcs == 1 && !achievs[firstMcs]){
			document.getElementById("firstMcs").src = "mcpicon.png";
			achievs[firstMcs] = true;
		}
		if (cows == mcs && mcs == hcs && hcs == coders && coders == kids 
			&& kids == straws && straws != 0 && !achievs[equals]){
			document.getElementById("equals").src = "equalsicon.png";
			achievs[equals] = true;
		}

	}

	function addStraw() {
		if (checkClickable(strawCost)) {
			decrementSips(strawCost);
			straws++;
			strawCost = Math.round(strawCost + strawCost * .10 * straws/6);
			document.getElementById("straws_cost").innerHTML = strawCost;
			document.getElementById('num_straws').innerHTML = straws;
			checkAchievements();
		}
	}

	function decrementSips(cost) {
		sips = sips - cost;
		document.getElementById('sips_taken').innerHTML = sips;
		setDisplay();
	}

	function setDisplay(){
		if (sips < strawCost){
			document.getElementById('straws').classList.add("disabled");
		}else {
			document.getElementById('straws').classList.remove("disabled");
		}
		if (sips < codersCost){
			document.getElementById('coders').classList.add("disabled");
		}else {
			document.getElementById('coders').classList.remove("disabled");
		}
		if (sips < kidsCost){
			document.getElementById('kids').classList.add("disabled");
		}else {
			document.getElementById('kids').classList.remove("disabled");
		}
		if (sips < mcsCost){
			document.getElementById('mcs').classList.add("disabled");
		}else {
			document.getElementById('mcs').classList.remove("disabled");
		}
		if (sips < hcsCost){
			document.getElementById('hcs').classList.add("disabled");
		}else {
			document.getElementById('hcs').classList.remove("disabled");
		}
		if (sips < cowsCost){
			document.getElementById('cows').classList.add("disabled");
		}else {
			document.getElementById('cows').classList.remove("disabled");
		}
	}

	function addCoder(){
		//alert("coders");
		if (checkClickable(codersCost)) {
			decrementSips(codersCost);
			coders++;
			codersCost = Math.round(codersCost + codersCost * .10 * coders/6);
			document.getElementById('coders_cost').innerHTML = codersCost;
			document.getElementById('num_coders').innerHTML = coders;
			checkAchievements();
		}
	}

	 function addKid(){
		//alert("kids");
		if (checkClickable(kidsCost)) {
			decrementSips(kidsCost);
			kids++;
			kidsCost = Math.round(kidsCost + kidsCost * .10 * kids/6);
			document.getElementById('num_kids').innerHTML = kids;
			document.getElementById('kids_cost').innerHTML = kidsCost;
			checkAchievements();
		}
	}

	function addHcs(){
		if (checkClickable(hcsCost)) {
			decrementSips(hcsCost);
			hcs++;
			hcsCost = Math.round(hcsCost + hcsCost * .10 * hcs/6);
			document.getElementById('hcs_cost').innerHTML = hcsCost;
			document.getElementById('num_hcs').innerHTML = hcs;
			checkAchievements();
		}
	}

	function addMcs(){
		if (checkClickable(mcsCost)) {
			decrementSips(mcsCost);
			mcs++;
			mcsCost = Math.round(mcsCost + mcsCost * .10 * mcs/6);
			document.getElementById('num_mcs').innerHTML = mcs;
			document.getElementById('mcs_cost').innerHTML = mcsCost;
			checkAchievements();
		}
	}

	function addCow(){
		if (checkClickable(cowsCost)) {
			decrementSips(cowsCost);
			cows++;
			cowsCost = Math.round(cowsCost + cowsCost * .10 * cows/6);		
			document.getElementById('num_cows').innerHTML = cows;
			document.getElementById('cows_cost').innerHTML = cowsCost;
			checkAchievements();
		}
	}

	function checkClickable(cost) {
		return cost <= sips;
	}

})();