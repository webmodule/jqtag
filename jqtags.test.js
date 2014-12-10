utils.define('jqtags.test').extend('jqtags').as(function(test,_test_, _attr_){
	
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
	
	test._ready_ = function(){
		this.on(test._name_,'click',function(e){
			e.target.value = !e.target.value;
		});
	};
	
	_test_.createdCallback = function(){
		this.render();
	};
	
	_test_.render = function(){
		this.innerHTML = (this.value) ? "YES" : "NO";
	};
	
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