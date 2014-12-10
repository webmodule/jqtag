utils.define('jqtags.test').extend('jqtags').as(function(test,_test_, _attr_){
	
	//Name of tag you want to use
	test._name_ = "jq-test";
	
	var boolStringToBoolean = {
	    "true": true,
	    "false": false,
	    "null" : false,
	    "": false
	};
	test.getBoolValue = function(value){
		if(boolStringToBoolean[value]!==undefined){
			return boolStringToBoolean[value];
		} else return false;
	};
	
	//Bind Dom Events
	test._ready_ = function(){
		this.on(test._name_,'click',function(e){
			e.target.value = !e.target.value;
		});
	};
	
	//What shud happen when tag is created
	_test_.createdCallback = function(){
		this.render();
	};
	
	_test_.render = function(){
		this.innerHTML = (this.value) ? "YES" : "NO";
	};
	
	//Define attributes
	_attr_['value'] = {
		get : function(){
			return test.getBoolValue(this.getAttribute('value'));
		},
		set : function(val){
			if(val===true){
				val = 'true';
			}
			this.setAttribute('value',test.getBoolValue(val));
			this.render();
		}
	};
});