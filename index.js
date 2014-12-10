utils.define("index").as(function(index,_index_){
	
	var STATIC_PRIVATE_VARIABLE = "I am static and hidden";
	index.STATIC_PUBLIC_VARIABLE = "I am static but not  hidden:)";
	
	var odo = utils.module('jqtags');
	
	/**
	 * -: Example of static function:
	 * This is going to be static function 
	 * will be availble via utils.odo.observe
	 */
	index.pub_static_fun = function(){
		console.log('pub_static_fun called')
	};
	
	/**
	 * -: Example of static event function:
	 *  this is event is triggered when moduleClass is loaded 
	 *  and document is ready
	 */
	index._ready_ = function(){
		console.log('document is ready and index module is also ready')
	};
	
	/** 
	 * -: Example of constructor
	 * This is constructor of utils.odo,
	 * you can get instance of  ODO by calling 
	 * simply 'index.instance()'
	 * 
	 */
	index._instance_ = function ODO(){
		/*
		 *  Instance level properties
		 */
		this.pub_prop = "I am instance level property";
		var pri_prop = "i am private property";
	};
	
	/**
	 * instance level default properties....
	 */
	_index_.pub_def_prop = "i am private but default property";
	
	/**
	 * -: Example of instance level function 
	 * _instance_ is prototype of utils.odo
	 *  all the fucntions defined here will be 
	 *  available in instance of ODO
	 */
	_index_.pub_fun = function(){
		
	};
});