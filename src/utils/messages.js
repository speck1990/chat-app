const generateMessage = (username, text) => {
	return {
		username,
		text,
		createdAt: new Date().getTime()
	};
};

const generateLocationMessage = (username, latitude, longitude) => {
	return {
		username,
		url: `https://google.com/maps?q=${latitude},${longitude}`,
		imgUrl: `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=15&size=600x200&maptype=roadmap&markers=color:blue%7Clabel:S%7C${latitude},${longitude}&key=AIzaSyAI2NcOY-_YqVD6R7BNTugzkXkCbKPZ0Fc`,
		createdAt: new Date().getTime()
	};
};

module.exports = {
	generateMessage,
	generateLocationMessage
};
