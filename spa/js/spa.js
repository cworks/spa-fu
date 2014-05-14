/*
 * spa.js
 * Root namespace module
 */
/*jslint browser : true, continue : true,
    devel  : true, indent : 2,    maxerr   : 50,
    newcap : true, nomen  : true, plusplus : true,
    regexp : true, sloppy : true, vars : true,
    white  : true
 */
/*global $, spa */

/*
 * Use the module pattern to create the spa namespace.  This module
 * exports one method, initModule which initializes our single page app
 */
var spa = (function() {
	var initModule = function($container) {
		$container.html(
			'<h1 style="display:inline-block; margin:25px;">'
			+ 'hello chuck'
			+ '</h1>'
		);
	};
	return {
		initModule: initModule
	};
}());