function change(x){
	$(x).css('background-color', '#fff');
	$(x).css('color', '#e1b940')};

function ret_change(x){
	$(x).css('background-color', 'rgba(225,225,225,.3)');
	$(x).css('color', '#fff')};

function layers(x){
	ret_change('#a');
	ret_change('#b');
	ret_change('#c');
	change(x);

};



