export const words = [
	"about", "above", "across", "act", "active", "activity", "add", "afraid", "after", "again", "age", "ago", "agree", "air", "all", "alone", "along", "already", "always", "am", "amount", "an", "and", "angry", "another", "answer", "any", "anyone", "anything", "anytime", "appear", "apple", "are", "area", "arm", "army", "around", "arrive", "art", "as", "ask", "at", "attack", "aunt", "autumn", "away", "baby", "back", "bad", "bag", "ball", "bank", "base", "basket", "bath", "be", "bean", "bear", "beautiful", "bed", "bedroom", "beer", "behave", "before", "begin", "behind", "bell", "below", "besides", "best", "better", "between", "big", "bird", "birth", "birthday", "bit", "bite", "black", "bleed", "block", "blood", "blow", "blue", "board", "boat", "body", "boil", "bone", "book", "border", "born", "borrow", "both", "bottle", "bottom", "bowl", "box", "boy", "branch", "brave", "bread", "break", "breakfast", "breathe", "bridge", "bright", "bring", "brother", "brown", "brush", "build", "burn", "business", "bus", "busy", "but", "buy", "by" , "call", "can", "candle", "cap", "car", "card", "care", "careful", "careless", "carry", "case", "central", "century", "certain", "chair", "chance", "change", "chase", "cheap", "cheese", "child", "children", "chocolate", "circle", "city", "class", "clever", "clear", "comfortable", "common", "compare", "come", "complete", "computer", "condition", "continue", "control", "cook", "cool", "copper", "corn", "corner", "dance", "dangerous", "dark", "daughter", "day", "dead", "decide", "decrease", "deep", "deer", "depend", "desk", "destroy", "develop", "die", "different", "difficult", "dinner", "direction", "dirty", "discover", "dish", "do", "dog", "door", "double", "down", "draw", "dream", "dress", "drink", "drive", "drop", "dry", "duck", "dust", "duty", "each", "ear", "early", "earn", "earth", "east", "easy", "eat", "education", "effect", "egg", "eight", "either", "electric", "elephant", "else", "empty", "end", "enemy", "enjoy", "enough", "enter", "equal", "entrance", "escape", "even", "evening", "event", "ever", "every", "everyone", "exact", "everybody", "examination", "example", "except", "excited", "exercise", "expect", "expensive", "explain", "extremely", "eye" , "face", "fact", "fail", "fall", "false", "family", "famous", "far", "farm", "father", "fast", "fat", "fault", "fear", "feed", "feel", "female", "fever", "few", "fight", "fill", "flour", "flower", "fly", "fold", "food", "fool", "foot", "football", "for", "force", "foreign", "forest", "forget", "forgive", "fork", "form", "fox", "four", "free", "freedom", "freeze", "fresh", "friend", "friendly", "from", "front", "fruit", "full", "fun", "funny", "furniture", "further", "future", "game", "garden", "gate", "general", "gentleman", "get", "gift", "give", "glad", "glass", "go", "goat", "god", "gold", "good", "goodbye", "grandfather", "grandmother", "grass", "grave", "great", "green", "gray", "ground", "group", "grow", "gun", "hair", "half", "hall", "hammer", "hand", "happen", "happy", "hard", "hat", "hate", "have", "he", "head", "healthy", "hear", "heavy", "heart", "heaven", "height", "hello", "help", "hen", "her", "here", "hers", "hide", "high", "hill", "him", "his", "hit", "hobby", "hold", "hole", "holiday", "home", "hope", "horse", "hospital", "hot", "hotel", "house", "how", "hundred", "hungry", "hour", "hurry", "husband", "hurt", "ice", "idea", "if", "important", "in", "increase", "inside", "into", "introduce", "invent", "iron", "invite", "is", "island", "it", "its", "jelly", "job", "join", "juice", "jump", "just", "keep", "key", "kill", "kind", "king", "kitchen", "knee", "knife", "knock", "know", "ladder", "lady", "lamp", "land", "large", "last", "late", "lately", "laugh", "lazy", "lead", "leaf", "learn", "leave", "leg", "left", "lend", "length", "less", "lesson", "let", "letter", "library", "lie", "life", "light", "like", "lion", "lip", "list", "listen", "little", "live", "lock", "lonely", "long", "look", "lose", "lot", "love", "low", "lower", "luck", "machine", "main", "make", "male", "man",  "measure", "meat", "medicine", "meet", "member", "mention", "method", "name", "narrow", "nation", "nature", "near", "nearly", "neck", "need", "needle", "neighbour", "obey", "object", "ocean", "of", "off", "offer", "office", "often", "oil", "old", "on", "one", "only", "open", "pleased", "plenty", "pocket", "point", "poison", "police", "polite", "pool", "poor", "popular", "position", "possible", "potato", "pour", "power", "present", "press", "pretty", "prevent", "price", "prince", "prison", "private", "prize", "probably", "problem", "produce", "promise", "proper","aldosterone","agoraphobia","alphabetize","anaphylaxis","craftswomen","intransigent","irreverence","legerdemain","libertarian","multifarious","acquisition","denouements","derailleurs","endeavoured","adventurous","renaissance","adjournment","obstreperous","pertinacious","philanthropic","preponderance","redoubtable","sanctimonious","surreptitious","sarshmallow","amaranthine","consequence","colonoscopy","androgynous","quintillion","shakespeare","accessories","experienced","immediately","otorhinolaryngological" , "immunoelectrophoretically", "psychophysicotherapeutics", "thyroparathyroidectomized", "pneumoencephalographically" , "radioimmunoelectrophoresis" , "psychoneuroendocrinological" , "hepaticocholangiogastrostomy" , "spectrophotofluorometrically" , "pseudopseudohypoparathyroidism"
];

export const generateWord = (level) =>{
	let newWords = [];
	if(level === 1){
		for(var x = 0; x <= words.length - 1 ; x++){
			if(words[x].length <= 3){
				newWords.push(words[x]);
			}
		}
		let index = Math.floor(Math.random() * (newWords.length - 1));
		return newWords[index];
	}else if(level === 2){
		for(var x = 0; x <= words.length - 1 ; x++){
			if(words[x].length <= 4){
				newWords.push(words[x]);
			}
		}
		let index = Math.floor(Math.random() * (newWords.length - 1));
		return newWords[index];
	}
	else if(level === 3){
		for(var x = 0; x <= words.length - 1 ; x++){
			if(words[x].length <= 5){
				newWords.push(words[x]);
			}
		}
		let index = Math.floor(Math.random() * (newWords.length - 1));
		return newWords[index];
	}
	else if(level === 4){
		for(var x = 0; x <= words.length - 1 ; x++){
			if(words[x].length >= 6 && words[x].length <= 7){
				newWords.push(words[x]);
			}
		}
		let index = Math.floor(Math.random() * (newWords.length - 1));
		return newWords[index];
	}
	else if(level === 5){
		for(var x = 0; x <= words.length - 1 ; x++){
			if(words[x].length >= 8 && words[x].length <= 10){
				newWords.push(words[x]);
			}
		}
		let index = Math.floor(Math.random() * (newWords.length - 1));
		return newWords[index];
	}
	else if(level === 6){
		for(var x = 0; x <= words.length - 1 ; x++){
			if(words[x].length >= 11 && words[x].length <= 20){
				newWords.push(words[x]);
			}
		}
		let index = Math.floor(Math.random() * (newWords.length - 1));
		return newWords[index];
	}else{
		for(var x = 0; x <= words.length - 1 ; x++){
			if(words[x].length > 20){
				newWords.push(words[x]);
			}
		}
		let index = Math.floor(Math.random() * (newWords.length - 1));
		return newWords[index];
	}
}
