utils.define('jqtag').as(function(jqtags,_instance_){
	
	jqtags._extend_ = function(tag,_tag_){
		//console.info(this,"jqtags._extend_",tag,_tag_);
		tag._attributes_ = {};
		tag._define_(tag,_tag_,tag._attributes_);
	};
	jqtags.mix = function(obj, proto) {
		for (var prop in proto) {
			if (true || proto.hasOwnProperty(prop)) {
				obj[prop] = proto[prop];
			}
		}
	};
	jqtags.attr = function(obj, proto) {
		for (var prop in proto) {
			if (true || proto.hasOwnProperty(prop)) {
				obj[prop] = proto[prop];
			}
		}
	};
	
	jqtags.on = function(selector,event,listner){
		if(listner===undefined && typeof event==='function'){
			return $('body').on(selector,event);
		} else {
			return $('body').on(event,selector,listner);
		}
	};
	
	jqtags.setProperties = function(_accessor_){
		_accessor_.
		
	};
	
	jqtags._extended_ = function(tag,_tag_){
		console.info(this,"jqtags._extended_",tag.module,_tag_);
		var tag_name = tag._name_.replace('-','_','g');
		var TagProto = Object.create(HTMLElement.prototype);
		jqtags.mix(TagProto,_tag_);
		
		
		Object.defineProperties(TagProto,tag._attributes_);
		window[tag_name] = document.registerElement(tag._name_, {
			prototype: TagProto
		});
	};
});