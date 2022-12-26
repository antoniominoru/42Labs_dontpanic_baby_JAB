function moveToNext(current, next) {
	if (current.value.length >= current.maxLength)
		document.getElementById(next).focus();
}