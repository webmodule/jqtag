_define_('jqtag',function(jqtag,_jqtag_){
	
	_require_(":pitana/pitana.js");
	var pitana = _module_("pitana");
	
	jqtag._extend_ = function(tag,_tag_){
		tag._jqTagConfig_ = {};
		tag._jqTagConfig_ = tag._definition_(tag,tag._jqTagConfig_) || tag._jqTagConfig_;
	};

	jqtag.register = function(config){
		this._jqTagConfig_ = config || {};
	};
	
	jqtag._extended_ = function(tag,_tag_){
		var parentConfig = tag.parent()._jqTagConfig_ || {};
		tag._jqTagConfig_ = $.extend(true,parentConfig,tag._jqTagConfig_);
		jqtag._pitana_register_(tag.module,tag._jqTagConfig_);
	};
	jqtag._pitana_register_ = function(moduleName,_jqTagConfig_){
		if(_jqTagConfig_.tagName === undefined){
			_jqTagConfig_.tagName = moduleName.replace(/jqtags\./,"jq-").replace(/\./g,"-");
		}
		return pitana.register(_jqTagConfig_)
	};
});

(function(foo) {
	
	var jqtag = _module_("jqtag");
	var pitana = _module_("pitana");
	
	foo._tag_ = function(tagName,definition){
		if(utils!==undefined && typeof utils.define === 'function'){
			return utils.define(tagName).extend('jqtag').as(definition);
		} else {
			var module = _define_(tagName,'jqtag',definition);
			return jqtag._pitana_register_(tagName,module._jqTagConfig_ || module)
		}
	};
	
})(this);