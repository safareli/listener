(function(){
	var audio = document.createElement('audio');
	audio.id = "player";
	(document.head||document.documentElement).appendChild(audio);
	audio.addEventListener('play',function(){
		audio._playing = true;
	});
	audio.addEventListener('pause',function(){
		audio._playing = false;
	});
	audio.addEventListener('ended',function(){
		if(++audio._index < audio._playlist.length) {
			audio._play();
		}else{
			audio._playing = false;
		}
	});
	audio._play = function(){
		audio.src = audio._playlist[audio._index];
		audio.load();
		audio.play();
	};
	audio._setPlaylist = function(playlist){
		audio._playlist = playlist;
		audio._playing = false;
		audio._index = 0;
	};
	audio._playString = function(str){
		str = str.replace(/[^a-z0-9\ \.\!\"\'\?\,\:\;]+/gi," ");
		str = str.split(". ");
		str.forEach(function(element, index, array){
			array[index] = "http://english-attack.com/sites/default/tts/sounds/"+ encodeURI(element)+".mp3";
		});
		audio._setPlaylist(str);
		audio._play();
	};
	audio._playSelectedText = function(){
		audio._playString(window.getSelection().toString());
	};

	audio._playSelectedText();

})();