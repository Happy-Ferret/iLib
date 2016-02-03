enyo.kind({name:"i18n.localeSpec",kind:"FittableRows",classes:"enyo-fit",components:[{kind:"FittableColumns",classes:"left-layout",components:[{name:"logoImg",kind:"Image",style:"width:360px;",src:"assets/localespec_weboslogo_4.0.png"},{kind:"onyx.Button",style:"visibility:hidden;",fit:!0},{style:"float:right;",components:[{name:"headerDate",classes:"left-header-date",content:"Generated on August 15, 2015"}]}]},{kind:"FittableColumns",fit:!0,components:[{name:"left",style:"width:300px;",components:[{kind:"onyx.Toolbar",
classes:"left-toolbar",components:[{kind:"onyx.InputDecorator",style:"width: 98%;",height:"300px",layoutKind:"FittableColumnsLayout",components:[{name:"searchInput",kind:"onyx.Input",oninput:"search"},{name:"searchImg",kind:"Image",src:"assets/search-input-search.png",style:"float:right;margin-top: 5px !important;;width: 20px; height: 20px;"}]}]},{name:"list",kind:"List",style:"width:300px;height:94%",fit:!0,ontap:"itemTap",count:189,onSetupItem:"setupItem",components:[{name:"item",style:"padding: 10px;",
components:[{name:"title",classes:"list-item-font"}]}]}]},{name:"targetDocument",classes:"right-iframe",fit:!0}]}],listCount:189,renewList:[],create:function(){this.inherited(arguments);this.getLocaleArray();this.getCurrentDate()},rendered:enyo.inherit(function(a){return function(){a.apply(this,arguments);this.createINode();document.getElementById(this.$.targetDocument.getId()).appendChild(this.iFrameNode)}}),createINode:function(a){this.iFrameNode=document.createElement("iframe");this.iFrameNode.name=
"iframeName";this.iFrameNode.value=a;this.iFrameNode.frameBorder="0";this.iFrameNode.width="100%";this.iFrameNode.height="100%";this.iFrameNode.src="./localePage/localeRef.html"},getCurrentDate:function(){var a="Januarary February March April May June July August September October November December".split(" "),b=new Date,c="Generated on "+a[b.getMonth()]+" "+b.getDate()+", "+b.getFullYear(),c="Generated on "+a[1]+" 3, "+b.getFullYear();this.$.headerDate.setContent(c)},removeINode:function(){var a=
document.getElementById(this.$.targetDocument.getId());a.removeChild(a.childNodes[0])},search:function(){this.renewList=[];this.searchText=this.$.searchInput.getValue();if(""!==this.searchText){for(j=i=0;i<this.listCount;i++)null!==Object.keys(this.localeList)[i].match(eval("/"+this.searchText+"{1,}/ig"))&&(this.renewList[j]=Object.keys(this.localeList)[i],j++);this.renewList=this.renewList.sort()}else j=this.listCount,this.renewList=this.localeList;this.$.list.setCount(j);this.$.list.refresh()},
setupItem:function(a,b){var c=b.index;this.sortedList=Object.keys(this.localeList).sort();this.$.item.addRemoveClass("onyx-selected",a.isSelected(b.index));a.count!==this.listCount?this.$.title.setContent(this.renewList[c]):this.$.title.setContent(this.sortedList[c]);return!0},itemTap:function(a,b){this.removeINode();this.createINode(this.localeList[b.originator.content]);document.getElementById(this.$.targetDocument.getId()).appendChild(this.iFrameNode)},getLocaleArray:function(){this.localeList=
{"Arabic - Egypt":"ar-EG","Arabic - Iraq":"ar-IQ","Arabic - Morocco":"ar-MA","Assamese - India":"as-IN","Bulgarian - Bulgaria":"bg-BG","Bengali - India":"bn-IN","Bosnian - Bosnia and Herzegovina":"bs-BA","Bosnian - Montenegro":"bs-ME","Czech - Czech Republic":"cs-CZ","Danish - Denmark":"da-DK","German - Austria":"de-AT","German - Switzerland":"de-CH","German - Germany":"de-DE","German - Luxembourg":"de-LU","Greek - Cyprus":"el-CY","Greek - Greece":"el-GR","English - Armenia":"en-AM","English - Australia":"en-AU",
"English - Azerbaijan":"en-AZ","English - Canada":"en-CA","English - Great Britain":"en-GB","English - Ghana":"en-GH","English - Hong Kong":"en-HK","English - Ireland":"en-IE","English - India":"en-IN","English - Iceland":"en-IS","English - Japan":"en-JP","English - Republic of Korea":"en-KR","English - Kenya":"en-KE","English - Sri Lanka":"en-LK","English - Myanmar":"en-MM","English - Malawi":"en-MW","English - Malaysia":"en-MY","English - Nigeria":"en-NG","English - New Zealand":"en-NZ","English - Philippines":"en-PH",
"English - Puerto Rico":"en-PR","English - Singapore":"en-SG","English - United States":"en-US","English - Uganda":"en-UG","English - South Africa":"en-ZA","English - Zambia":"en-ZM","Spanish - Argentina":"es-AR","Spanish - Bolivia":"es-BO","Spanish - Chile":"es-CL","Spanish - Colombia":"es-CO","Spanish - Dominican Republic":"es-DO","Spanish - Ecuador":"es-EC","Spanish - Spain":"es-ES","Spanish - Guatamala":"es-GT","Spanish - Honduras":"es-HN","Spanish - Mexico":"es-MX","Spanish - Nicaragua":"es-NI",
"Spanish - Panama":"es-PA","Spanish - Peru":"es-PE","Spanish - Puerto Rico":"es-PR","Spanish - Paraguay":"es-PY","Spanish - El Salvador":"es-SV","Spanish - United States":"es-US","Spanish - Uraguay":"es-UY","Spanish - Venezuela":"es-VE","Estonian - Estonia":"et-EE","Farsi - Afghanistan":"fa-AF","Farsi - Iran":"fa-IR","Finnish - Finland":"fi-FI","French - Belgium":"fr-BE","French - Canada":"fr-CA","French - Switzerland":"fr-CH","French - France":"fr-FR","French - Luxembourg":"fr-LU","Gaelic - Ireland":"ga-IE",
"Gujarati - India":"gu-IN","Hebrew - Israel":"he-IL","Hindi - India":"hi-IN","Croatian - Croatia":"hr-HR","Croatian - Montenegro":"hr-ME","Hungarian - Hungary":"hu-HU","Indonesian - Indonesia":"id-ID","Italian - Switzerland":"it-CH","Italian - Italy":"it-IT","Japanese - Japan":"ja-JP","Kazakh - Kazahkstan":"kk-KZ","Kannada - India":"kn-IN","Korean - Republic of Korea":"ko-KR","Kurdish - Iraq":"ku-IQ","Lithuanian - Lithuania":"lt-LT","Latvian - Latvia":"lv-LV","Macedonian - Former Yugoslav Republic of Macedonia":"mk-MK",
"Malayalam - India":"ml-IN","Marathi - India":"mr-IN","Malay - Malaysia":"ms-MY","Norwegian - Norway":"nb-NO","Dutch - Belgium":"nl-BE","Dutch - Netherlands":"nl-NL","Panjabi - India":"pa-IN","Polish - Poland":"pl-PL","Portuguese - Brazil":"pt-BR","Portuguese - Portugal":"pt-PT","Romanian - Romania":"ro-RO","Serbian - Serbia":"sr-Cyrl-RS","Serbian - Latin - Serbia":"sr-Latn-RS","Russian - Belarus":"ru-BY","Russian - Kyrgyzstan":"ru-KG","Russian - Kazahkstan":"ru-KZ","Russian - Georgia":"ru-GE","Russian - Russia":"ru-RU",
"Russian - Ukraine":"ru-UA","Slovak - Slovakia":"sk-SK","Slovene - Slovenia":"sl-SI","Albanian - Albania":"sq-AL","Albanian - Montenegro":"sq-ME","Swedish - Finland":"sv-FI","Swedish - Sweden":"sv-SE","Tamil - India":"ta-IN","Telugu - India":"te-IN","Thai - Thailand":"th-TH","Turkish - Armenia":"tr-AM","Turkish - Azerbaijan":"tr-AZ","Turkish - Cyprus":"tr-CY","Turkish - Turkey":"tr-TR","Ukranian - Ukraine":"uk-UA","Urdu - India":"ur-IN","Uzbek - Latin - Uzbekistan":"uz-Latn-UZ","Vietnamese - Vietnam":"vi-VN",
"Chinese - Simplified - China":"zh-Hans-CN","Chinese - Traditional - Hong Kong":"zh-Hant-HK","Chinese - Traditional - Taiwan":"zh-Hant-TW","English - Georgia":"en-GE","English - China":"en-CN","English - Mexico":"en-MX","English - Taiwan":"en-TW","Mongolian - Mongolia":"mn-Cyrl-MN","Spanish - Canada":"es-CA","Afrikaans - South Africa":"af-ZA","Amharic - Ethiopia":"am-ET","Hausa - Nigeria":"ha-Latn-NG","Oriya - India":"or-IN","Arabic - UAE":"ar-AE","Arabic - Bahrain":"ar-BH","Arabic - Djibouti":"ar-DJ",
"Arabic - Algeria":"ar-DZ","Arabic - Jordan":"ar-JO","Arabic - Kuwait":"ar-KW","Arabic - Lebanon":"ar-LB","Arabic - Libya":"ar-LY","Arabic - Mauritania":"ar-MR","Arabic - Oman":"ar-OM","Arabic - Qatar":"ar-QA","Arabic - Saudi Arabia":"ar-SA","Arabic - Sudan":"ar-SD","Arabic - Syria":"ar-SY","Arabic - Tunisia":"ar-TN","Arabic - Yemen":"ar-YE","English - Ethiopia":"en-ET","English - Gambia":"en-GM","English - Liberia":"en-LR","English - Pakistan":"en-PK","English - Rwanda":"en-RW","English - Sudan":"en-SD",
"English - Sierra Leone":"en-SL","English - United Republic of Tanzania":"en-TZ","Spanish - Costa Rica":"es-CR","Spanish - Equitorial Guinea":"es-GQ","Spanish - Philippines":"es-PH","French - Burkina Faso":"fr-BF","French - Benin":"fr-BJ","French - Democratic Republic of the Congo":"fr-CD","French - Central African Republic":"fr-CF","French - Congo":"fr-CG","French - Ivory Coast":"fr-CI","French - Cameroon":"fr-CM","French - Equatorial Guinea":"fr-GQ","French - Djibouti":"fr-DJ","French - Algeria":"fr-DZ",
"French - Gabon":"fr-GA","French - Guinea":"fr-GN","French - Lebanon":"fr-LB","French - Mali":"fr-ML","French - Rwanda":"fr-RW","French - Senegal":"fr-SN","French - Togo":"fr-TG","Malay - Singapore":"ms-SG","Panjabi - Pakistan":"pa-Arab-PK","Portuguese - Angola":"pt-AO","Portuguese - Equitorial Guinea":"pt-GQ","Portuguese - Cape Verde":"pt-CV","Urdu - Pakistan":"ur-PK","Chinese - Simplified - Singapore":"zh-Hans-SG","Chinese - Simplified - Malaysia":"zh-Hans-MY"}}});
