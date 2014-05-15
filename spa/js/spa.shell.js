/*
 * spa.shell.js
 * Shell module for spa
 */
/*jslint browser : true, continue : true,
  devel  : true, indent : 2,    maxerr   : 50,
  newcap : true, nomen  : true, plusplus : true,
  regexp : true, sloppy : true, vars : true,
  white  : true
 */
/*global $, spa */

spa.shell = (function() {
	// ----- begin module scope variables -----
	// declare all variables that are available across the spa.shell namespace
	// ----------------------------------------

	// place static configuration values in configMap
	var configMap = {
		main_html = String()
		    + '<div class="spa-shell-head">'
		      + '<div class="spa-shell-head-logo"></div>'
		      + '<div class="spa-shell-head-acct"></div>'
		      + '<div class="spa-shell-head-search"></div>'
		    + '</div>'
		    + '<div class="spa-shell-main">'
		      + '<div class="spa-shell-main-nav"></div>'
		      + '<div class="spa-shell-main-content"></div>'
		    + '</div>'
		    + '<div class="spa-shell-foot"></div>'
		    + '<div class="spa-shell-chat"></div>'
		    + '<div class="spa-shell-modal"></div>';		
	},
	// place dynamic information shared across the module in stateMap
	stateMap = { $container: null },
	// cache jQuery collections in jqueryMap
	jqueryMap = { },
	// declare all module scope variables here, many are assigned later
	setJqueryMap, initModule;
	// ----- end module scope variables -----

	// ----- begin utility methods -----
	// this section reserved for functions that don't interact with page elements
	// ----- end utility methods -----

	// ----- begin DOM methods -----
	// this section reserved for functions that create and manipulate DOM elements
	// begin DOM method /setJqueryMap/
	// use setJqueryMap to cache jQuery collections.  This function should be in
	// almost every shell and feature module, the use of jqueryMap cache can
	// greatly reduce the number of jQuery document traversals and thus
	// improve performance
	setJqueryMap = function() {
		var $container = stateMap.$container;
		jqueryMap = { $container: $container };
	};
	// end DOM methods /setJqueryMap

	// ----- end DOM methods

}) 