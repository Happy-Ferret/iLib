$(function(){var g=parent.document.all.iframeName.value||"en-GB";console.log("transferredLocale: ",g);ilib.setLocale(g);var g=ilib.getLocale(),e=new LocaleInfo(g),b=new ScriptInfo(e.getScript()),a="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ");$("#systemLocale").text(g);$("#localedescription").text(e.getLanguageName()+" , "+e.getRegionName()+" ("+e.getScript()+")");$("#scriptDirection").text(b.getScriptDirection());$("#defaultCalendar").text(e.getCalendar());$("#clock").text(e.getClock());
$("#defaultCurrency").text(e.getCurrency());$("#weekStart").text(a[e.getFirstDayOfWeek()]);$("#weekendStart").text(a[e.getWeekEndStart()]);$("#weekendEnd").text(a[e.getWeekEndEnd()]);var f=[],b=[],c=[],h=[],l=[],m=[],n=[],d=[],a=["full","long","medium","short"],k=["f","l","m","s"],t="jan feb mar apr may jun jul aug sep oct nov dec etc".split(" "),p="sun mon tue wed thu fri sat".split(" "),q=0,r=0;for(i=0;7>i;i++)for(f[i]="am-ET"===g?new DateFactory({year:2015,month:8,day:i+7,type:e.getCalendar()}):
new DateFactory({year:2015,month:8,day:i+2,type:e.getCalendar()}),j=0;4>j;j++)b[j]=new DateFmt({locale:g,date:"w",length:a[j],useNative:!1,timezone:"local"}),c[i]=b[j].format(f[i]),h[q]=c[i],n[q]=p[i]+a[j],q++;p="am-ET"===g||"en-ET"===g?13:12;for(i=0;i<p;i++)for(f[i]=new DateFactory({month:i+1,type:e.getCalendar()}),j=0;4>j;j++)b[j]=new DateFmt({locale:g,date:"m",length:a[j],useNative:!1,timezone:"local"}),c[i]=b[j].format(f[i]),l[r]=c[i],m[r]=t[i]+a[j],r++;for(i=0;i<n.length+1;i++)$("#"+n[i]).text(h[i]);
for(i=0;i<m.length+1;i++)$("#"+m[i]).text(l[i]);"am-ET"!==g&&"en-ET"!==g||$("#extraLength").text("13");f=[];c=0;b=DateFmt.getMeridiemsRange({locale:g});for(i=0;i<b.length;i++)f[i]="<tr><td id='rangea"+c.toString()+"' /><td id='stringa"+c.toString()+"' />",$("#meridiemTable").append(f[c]),$("#rangea"+c).text(b[i].start+" ~ "+b[i].end),$("#stringa"+c).text(b[i].name),c++;f=new GregorianDate({locale:g,year:2015,month:8,day:5,hour:13,minute:45,second:0});for(c=i=0;4>i;i++,c++)b[i]=new DateFmt({locale:g,
type:"datetime",length:a[i],useNative:!1,timezone:"local"}),d[c]=b[i],$("#dt"+a[i]).text(a[i]),$("#dt"+a[i]+"Fmt").text(d[i].template),$("#dt"+a[i]+"Sample").text(d[i].format(f));h=[];for(c=i=0;4>i;i++,c++){b[i]=new DateFmt({locale:g,type:"date",date:"dmwy",length:a[i],useNative:!1,timezone:"local"});d[c]=b[i];$("#date"+a[i]).text(a[i]);h[i]=d[i].template;$("#date"+a[i]+"Fmt").text(h[i]);for(j=l=0;j<h[i].length;j++)"M"===h[i][j]&&l++;switch(l){case 4:$("#date"+a[i]+"Fmt").css("color","red");break;
case 3:$("#date"+a[i]+"Fmt").css("color","#DAA520");break;case 2:$("#date"+a[i]+"Fmt").css("color","green");break;case 1:$("#date"+a[i]+"Fmt").css("color","blue");break;default:$("#date"+a[i]+"Fmt").css("color","#4B0082")}$("#date"+a[i]+"Sample").text(d[i].format(f))}for(c=i=0;4>i;i++,c++)b[i]=new DateFmt({locale:g,type:"time",time:"ahmsz",length:a[i],useNative:!1,timezone:"local"}),d[c]=b[i],$("#time"+a[i]).text(a[i]),$("#time"+a[i]+"Fmt").text(d[i].template),"full"===a[i]&&(-1!==d[i].template.indexOf("H")?
$("#time"+a[i]+"Fmt").css("color","#FF1493"):$("#time"+a[i]+"Fmt").css("color","#00BFFF")),$("#time"+a[i]+"Sample").text(d[i].format(f));f=new DateFactory({year:2011,month:6,day:20,hour:13,minute:45,second:0,type:e.getCalendar()});h=new DateFactory({year:2011,month:6,day:20,hour:15,minute:30,second:0,type:e.getCalendar()});for(c=i=0;4>i;i++,c++)b[i]=new DateRngFmt({locale:g,length:a[i]}),d[c]=b[i],$("#cfmt0"+a[i]).text(a[i]),$("#cfmt0"+a[i]+"Fmt").text(d[i].dateFmt.formats.range.c00[k[i]]),$("#cfmt0"+
a[i]+"Sample").text(d[i].format(f,h)),"full"===a[i]?($("#cfmt0"+a[i]+"Fmt").css("color","#CC3333"),$("#cfmt0"+a[i]+"Sample").css("color","#CC3333")):"short"===a[i]?($("#cfmt0"+a[i]+"Fmt").css("border-color","black"),$("#cfmt0"+a[i]+"Fmt").css("border-width","2px"),$("#cfmt0"+a[i]+"Sample").css("border-color","black"),$("#cfmt0"+a[i]+"Sample").css("border-width","2px")):"medium"===a[i]&&($("#cfmt0"+a[i]+"Fmt").css("color","green"),$("#cfmt0"+a[i]+"Sample").css("color","green"));f=new DateFactory({year:2011,
month:6,day:20,hour:13,minute:45,second:0,type:e.getCalendar()});h=new DateFactory({year:2011,month:6,day:22,hour:15,minute:30,second:0,type:e.getCalendar()});for(c=i=0;4>i;i++,c++)b[i]=new DateRngFmt({locale:g,length:a[i]}),d[c]=b[i],$("#cfmt1"+a[i]).text(a[i]),$("#cfmt1"+a[i]+"Fmt").text(d[i].dateFmt.formats.range.c01[k[i]]),$("#cfmt1"+a[i]+"Sample").text(d[i].format(f,h)),"full"===a[i]?($("#cfmt1"+a[i]+"Fmt").css("color","#CC3333"),$("#cfmt1"+a[i]+"Sample").css("color","#CC3333")):"short"===a[i]?
($("#cfmt1"+a[i]+"Fmt").css("border-color","black"),$("#cfmt1"+a[i]+"Fmt").css("border-width","2px"),$("#cfmt1"+a[i]+"Sample").css("border-color","black"),$("#cfmt1"+a[i]+"Sample").css("border-width","2px")):"medium"===a[i]&&($("#cfmt1"+a[i]+"Fmt").css("color","green"),$("#cfmt1"+a[i]+"Sample").css("color","green"));f=new DateFactory({year:2011,month:6,day:30,hour:13,minute:45,second:0,type:e.getCalendar()});h=new DateFactory({year:2011,month:7,day:1,hour:9,minute:30,second:0,type:e.getCalendar()});
for(c=i=0;4>i;i++,c++)b[i]=new DateRngFmt({locale:g,length:a[i]}),d[c]=b[i],$("#cfmt2"+a[i]).text(a[i]),$("#cfmt2"+a[i]+"Fmt").text(d[i].dateFmt.formats.range.c02[k[i]]),$("#cfmt2"+a[i]+"Sample").text(d[i].format(f,h)),"full"===a[i]?($("#cfmt2"+a[i]+"Fmt").css("color","#CC3333"),$("#cfmt2"+a[i]+"Sample").css("color","#CC3333")):"short"===a[i]?($("#cfmt2"+a[i]+"Fmt").css("border-color","black"),$("#cfmt2"+a[i]+"Fmt").css("border-width","2px"),$("#cfmt2"+a[i]+"Sample").css("border-color","black"),$("#cfmt2"+
a[i]+"Sample").css("border-width","2px")):"medium"===a[i]&&($("#cfmt2"+a[i]+"Fmt").css("color","green"),$("#cfmt2"+a[i]+"Sample").css("color","green"));f=new DateFactory({year:2011,month:12,day:30,hour:13,minute:45,second:0,type:e.getCalendar()});h=new DateFactory({year:2012,month:1,day:1,hour:5,minute:30,second:0,type:e.getCalendar()});for(c=i=0;4>i;i++,c++)b[i]=new DateRngFmt({locale:g,length:a[i]}),d[c]=b[i],$("#cfmt3"+a[i]).text(a[i]),$("#cfmt3"+a[i]+"Fmt").text(d[i].dateFmt.formats.range.c03[k[i]]),
$("#cfmt3"+a[i]+"Sample").text(d[i].format(f,h)),"full"===a[i]?($("#cfmt3"+a[i]+"Fmt").css("color","#CC3333"),$("#cfmt3"+a[i]+"Sample").css("color","#CC3333")):"short"===a[i]?($("#cfmt3"+a[i]+"Fmt").css("border-color","black"),$("#cfmt3"+a[i]+"Fmt").css("border-width","2px"),$("#cfmt3"+a[i]+"Sample").css("border-color","black"),$("#cfmt3"+a[i]+"Sample").css("border-width","2px")):"medium"===a[i]&&($("#cfmt3"+a[i]+"Fmt").css("color","green"),$("#cfmt3"+a[i]+"Sample").css("color","green"));f=new DateFactory({year:2011,
month:6,day:20,hour:13,minute:45,second:0,type:e.getCalendar()});h=new DateFactory({year:2011,month:6,day:28,hour:5,minute:30,second:0,type:e.getCalendar()});for(c=i=0;4>i;i++,c++)b[i]=new DateRngFmt({locale:g,length:a[i]}),d[c]=b[i],$("#cfmt10"+a[i]).text(a[i]),$("#cfmt10"+a[i]+"Fmt").text(d[i].dateFmt.formats.range.c10[k[i]]),$("#cfmt10"+a[i]+"Sample").text(d[i].format(f,h)),"full"===a[i]?($("#cfmt10"+a[i]+"Fmt").css("color","#CC3333"),$("#cfmt10"+a[i]+"Sample").css("color","#CC3333")):"short"===
a[i]?($("#cfmt10"+a[i]+"Fmt").css("border-color","black"),$("#cfmt10"+a[i]+"Fmt").css("border-width","2px"),$("#cfmt10"+a[i]+"Sample").css("border-color","black"),$("#cfmt10"+a[i]+"Sample").css("border-width","2px")):"medium"===a[i]&&($("#cfmt10"+a[i]+"Fmt").css("color","green"),$("#cfmt10"+a[i]+"Sample").css("color","green"));f=new DateFactory({year:2011,month:6,day:20,hour:13,minute:45,second:0,type:e.getCalendar()});h=new DateFactory({year:2011,month:11,day:28,hour:5,minute:30,second:0,type:e.getCalendar()});
for(c=i=0;4>i;i++,c++)b[i]=new DateRngFmt({locale:g,length:a[i]}),d[c]=b[i],$("#cfmt11"+a[i]).text(a[i]),$("#cfmt11"+a[i]+"Fmt").text(d[i].dateFmt.formats.range.c11[k[i]]),$("#cfmt11"+a[i]+"Sample").text(d[i].format(f,h)),"full"===a[i]?($("#cfmt11"+a[i]+"Fmt").css("color","#CC3333"),$("#cfmt11"+a[i]+"Sample").css("color","#CC3333")):"short"===a[i]?($("#cfmt11"+a[i]+"Fmt").css("border-color","black"),$("#cfmt11"+a[i]+"Fmt").css("border-width","2px"),$("#cfmt11"+a[i]+"Sample").css("border-color","black"),
$("#cfmt11"+a[i]+"Sample").css("border-width","2px")):"medium"===a[i]&&($("#cfmt11"+a[i]+"Fmt").css("color","green"),$("#cfmt11"+a[i]+"Sample").css("color","green"));f=new DateFactory({year:2011,month:6,day:20,hour:13,minute:45,second:0,type:e.getCalendar()});h=new DateFactory({year:2012,month:4,day:28,hour:5,minute:30,second:0,type:e.getCalendar()});for(c=i=0;4>i;i++,c++)b[i]=new DateRngFmt({locale:g,length:a[i]}),d[c]=b[i],$("#cfmt12"+a[i]).text(a[i]),$("#cfmt12"+a[i]+"Fmt").text(d[i].dateFmt.formats.range.c12[k[i]]),
$("#cfmt12"+a[i]+"Sample").text(d[i].format(f,h)),"full"===a[i]?($("#cfmt12"+a[i]+"Fmt").css("color","#CC3333"),$("#cfmt12"+a[i]+"Sample").css("color","#CC3333")):"short"===a[i]?($("#cfmt12"+a[i]+"Fmt").css("border-color","black"),$("#cfmt12"+a[i]+"Fmt").css("border-width","2px"),$("#cfmt12"+a[i]+"Sample").css("border-color","black"),$("#cfmt12"+a[i]+"Sample").css("border-width","2px")):"medium"===a[i]&&($("#cfmt12"+a[i]+"Fmt").css("color","green"),$("#cfmt12"+a[i]+"Sample").css("color","green"));
f=new DateFactory({year:2011,month:6,day:20,hour:13,minute:45,second:0,type:e.getCalendar()});h=new DateFactory({year:2016,month:4,day:28,hour:5,minute:30,second:0,type:e.getCalendar()});for(c=i=0;4>i;i++,c++)b[i]=new DateRngFmt({locale:g,length:a[i]}),d[c]=b[i],$("#cfmt20"+a[i]).text(a[i]),$("#cfmt20"+a[i]+"Fmt").text(d[i].dateFmt.formats.range.c20[k[i]]),$("#cfmt20"+a[i]+"Sample").text(d[i].format(f,h)),"full"===a[i]?($("#cfmt20"+a[i]+"Fmt").css("color","#CC3333"),$("#cfmt20"+a[i]+"Sample").css("color",
"#CC3333")):"short"===a[i]?($("#cfmt20"+a[i]+"Fmt").css("border-color","black"),$("#cfmt20"+a[i]+"Fmt").css("border-width","2px"),$("#cfmt20"+a[i]+"Sample").css("border-color","black"),$("#cfmt20"+a[i]+"Sample").css("border-width","2px")):"medium"===a[i]&&($("#cfmt20"+a[i]+"Fmt").css("color","green"),$("#cfmt20"+a[i]+"Sample").css("color","green"));f=new DateFactory({year:2011,month:6,day:20,hour:13,minute:45,second:0,type:e.getCalendar()});h=new DateFactory({year:2032,month:4,day:28,hour:5,minute:30,
second:0,type:e.getCalendar()});for(c=i=0;4>i;i++,c++)b[i]=new DateRngFmt({locale:g,length:a[i]}),d[c]=b[i],$("#cfmt30"+a[i]).text(a[i]),$("#cfmt30"+a[i]+"Fmt").text(d[i].dateFmt.formats.range.c30[k[i]]),$("#cfmt30"+a[i]+"Sample").text(d[i].format(f,h)),"full"===a[i]?($("#cfmt30"+a[i]+"Fmt").css("color","#CC3333"),$("#cfmt30"+a[i]+"Sample").css("color","#CC3333")):"short"===a[i]?($("#cfmt30"+a[i]+"Fmt").css("border-color","black"),$("#cfmt30"+a[i]+"Fmt").css("border-width","2px"),$("#cfmt30"+a[i]+
"Sample").css("border-color","black"),$("#cfmt30"+a[i]+"Sample").css("border-width","2px")):"medium"===a[i]&&($("#cfmt30"+a[i]+"Fmt").css("color","green"),$("#cfmt30"+a[i]+"Sample").css("color","green"));durationNumberSample={"af-ZA":[1,2],"sq-AL":[1,16],"sq-ME":[1,17],"am-ET":[1,18],"ar-DZ":[1,2,3,11,100],"ar-BH":[1,2,10,26,102],"ar-DJ":[1,2,103,26,200],"ar-EG":[1,2,110,112,202],"ar-IQ":[1,2,3,11,100],"ar-JO":[1,2,103,99,300],"ar-KW":[1,2,3,11,100],"ar-LB":[1,2,3,11,100],"ar-LY":[1,2,3,11,100],"ar-MR":[1,
2,3,11,100],"ar-MA":[1,2,3,11,100],"ar-OM":[1,2,3,11,100],"ar-QA":[1,2,3,11,100],"ar-SA":[1,2,3,11,100],"ar-SD":[1,2,3,11,100],"ar-SY":[1,2,3,11,100],"ar-TN":[1,2,3,11,100],"ar-AE":[1,2,3,11,100],"ar-YE":[1,2,3,11,100],"as-IN":[1,2],"bn-IN":[1,18],"bs-BA":[1,4,5],"bs-ME":[1,2,20],"bg-BG":[1,2],"zh-Hans-CN":[1],"zh-Hans-MY":[15],"zh-Hans-SG":[16],"zh-Hant-HK":[2],"zh-Hant-TW":[1],"hr-HR":[1,2,5],"hr-ME":[1,4,19],"cs-CZ":[1,2,5],"da-DK":[1,2],"nl-BE":[1,2],"nl-NL":[1,2],"en-AM":[1,2],"en-AU":[1,16],
"en-AZ":[1,17],"en-CA":[1,2],"en-CN":[1,2],"en-ET":[1,2],"en-GM":[1,2],"en-GE":[1,2],"en-GH":[1,2],"en-GB":[1,2],"en-HK":[1,2],"en-IS":[1,2],"en-IN":[1,2],"en-IE":[1,2],"en-JP":[1,2],"en-KE":[1,2],"en-LR":[1,2],"en-MW":[1,2],"en-MY":[1,2],"en-MX":[1,2],"en-MM":[1,2],"en-NZ":[1,2],"en-NG":[1,2],"en-PK":[1,2],"en-PH":[1,2],"en-PR":[1,2],"en-KR":[1,2],"en-RW":[1,2],"en-SL":[1,2],"en-SG":[1,2],"en-ZA":[1,2],"en-LK":[1,2],"en-SD":[1,2],"en-TW":[1,2],"en-UG":[1,2],"en-TZ":[1,2],"en-US":[1,2],"en-ZM":[1,
2],"et-EE":[1,2],"fa-AF":[1,2],"fa-IR":[1,18],"fi-FI":[1,17],"fr-DZ":[1,2],"fr-BE":[1,16],"fr-BJ":[1,17],"fr-BF":[1,2],"fr-CM":[1,16],"fr-CA":[1,17],"fr-CF":[1,2],"fr-CG":[1,16],"fr-CD":[1,17],"fr-DJ":[1,2],"fr-GQ":[1,16],"fr-FR":[1,17],"fr-GA":[1,2],"fr-GN":[1,16],"fr-CI":[1,17],"fr-LB":[1,2],"fr-LU":[1,16],"fr-ML":[1,17],"fr-RW":[1,2],"fr-SN":[1,16],"fr-CH":[1,17],"fr-TG":[1,2],"ga-IE":[1,2,3,7,11],"de-AT":[1,2],"de-DE":[1,16],"de-LU":[1,17],"de-CH":[1,2],"el-CY":[1,2],"el-GR":[1,17],"gu-IN":[1,
2],"ha-Latn-NG":[1,2],"he-IL":[1,2,20,19],"hi-IN":[1,2],"hu-HU":[1,17],"id-ID":[1,2],"it-IT":[1,2],"it-CH":[1,17],"ja-JP":[1,16],"kn-IN":[1,2],"kk-KZ":[1,2],"ko-KR":[1,2],"ku-IQ":[1,2],"lv-LV":[10,21,9],"lt-LT":[21,9,11],"mk-MK":[1,2],"ms-MY":[1,2],"ms-SG":[1,2],"ml-IN":[1,2],"mr-IN":[1,18],"mn-Cyrl-MN":[1,2,3],"nb-NO":[1,2],"or-IN":[1,17],"pa-IN":[1,2],"pa-Arab-PK":[1,18],"pl-PL":[1,2,5],"pt-AO":[1,2],"pt-BR":[1,17],"pt-CV":[1,18],"pt-GQ":[1,2],"pt-PT":[1,17],"ro-RO":[1,2,20],"ru-BY":[1,2,5],"ru-GE":[21,
4,19],"ru-KZ":[31,22,20],"ru-KG":[41,24,25],"ru-RU":[31,32,19],"ru-UA":[1,2,5],"sr-Latn-RS":[1,2,5],"sr-Cyrl-RS":[1,4,20],"sk-SK":[1,2,5],"sl-SI":[1,2,3,5],"es-AR":[1,2],"es-BO":[1,16],"es-CA":[1,17],"es-CL":[1,2],"es-CO":[1,16],"es-CR":[1,17],"es-DO":[1,2],"es-EC":[1,16],"es-SV":[1,17],"es-GQ":[1,2],"es-GT":[1,16],"es-HN":[1,17],"es-MX":[1,2],"es-NI":[1,16],"es-PA":[1,17],"es-PY":[1,2],"es-PE":[1,16],"es-PH":[1,17],"es-PR":[1,2],"es-ES":[1,16],"es-US":[1,17],"es-UY":[1,2],"es-VE":[1,16],"sv-FI":[1,
2],"sv-SE":[1,17],"ta-IN":[1,2],"te-IN":[1,16],"th-TH":[1,16],"tr-AM":[1,2],"tr-AZ":[1,16],"tr-CY":[1,17],"tr-TR":[1,2],"uk-UA":[1,2,5],"ur-IN":[1,2],"ur-PK":[1,17],"uz-Latn-UZ":[1,2],"vi-VN":[1,2]};b=durationNumberSample[g];f=[];timeRow=[];for(i=0;i<b.length;i++)for(j=c=0;4>j;j++)f[j]="<tr class='gradeA'><td id=subject"+a[j]+"num"+i+" /><td id=durFmtLength"+a[j]+"num"+i+" /><td id=durFmtResult"+a[j]+"num"+i+"/>",$("#durationTable").append(f[j]),timeRow[j]="<tr class='gradeA'><td id=timesubject"+
a[j]+"num"+i+" /><td id=timedurFmtLength"+a[j]+"num"+i+" /><td id=timedurFmtResult"+a[j]+"num"+i+"/>",$("#durationTimeTable").append(timeRow[j]),c++;durDate=[];rangefmt=[];durfmtArray=[];timerangefmt=[];timedurfmtArray=[];for(i=0;i<b.length;i++)for(c=j=0;4>j;j++,c++)rangefmt[j]=new DurationFmt({locale:g,style:"text",length:a[j]}),durfmtArray[c]=rangefmt[j],$("#durFmtLength"+a[j]+"num"+i).text(a[j]),durationDateSample={year:b[i],month:b[i],week:b[i],day:b[i]},$("#durFmtResult"+a[j]+"num"+i).text(durfmtArray[j].format(durationDateSample).toString()),
timerangefmt[j]=new DurationFmt({locale:g,style:"clock",length:a[j]}),timedurfmtArray[c]=rangefmt[j],$("#timedurFmtLength"+a[j]+"num"+i).text(a[j]),durationTimeSample={hour:b[i],minute:b[i],second:b[i]},$("#timedurFmtResult"+a[j]+"num"+i).text(durfmtArray[j].format(durationTimeSample).toString()),"medium"===a[j]?($("#durFmtResult"+a[j]+"num"+i).css("color","#CC3333"),$("#timedurFmtResult"+a[j]+"num"+i).css("color","#CC3333")):"long"===a[j]?($("#durFmtResult"+a[j]+"num"+i).css("color","green"),$("#timedurFmtResult"+
a[j]+"num"+i).css("color","green")):"short"===a[j]&&($("#durFmtLength"+a[j]+"num"+i).css("border-color","black"),$("#durFmtLength"+a[j]+"num"+i).css("border-width","2px"),$("#durFmtResult"+a[j]+"num"+i).css("border-color","black"),$("#durFmtResult"+a[j]+"num"+i).css("border-width","2px"),$("#timedurFmtLength"+a[j]+"num"+i).css("border-color","black"),$("#timedurFmtLength"+a[j]+"num"+i).css("border-width","2px"),$("#timedurFmtResult"+a[j]+"num"+i).css("border-color","black"),$("#timedurFmtResult"+
a[j]+"num"+i).css("border-width","2px"));$("#subjectfullnum0").attr("rowSpan",4*b.length);$("#subjectfullnum0").text("Date");$("#timesubjectfullnum0").attr("rowSpan",4*b.length);$("#timesubjectfullnum0").text("Time");for(i=1;i<b.length;i++)for(j=0;4>j;j++)$("#subject"+a[j]+"num"+i).remove(),$("#timesubject"+a[j]+"num"+i).remove();$("#subjectlongnum0").remove();$("#subjectmediumnum0").remove();$("#subjectshortnum0").remove();$("#timesubjectlongnum0").remove();$("#timesubjectmediumnum0").remove();$("#timesubjectshortnum0").remove();
b=new NumFmt({locale:g,type:"standard"});$("#numDecimalSymbol").text(e.getDecimalSeparator());$("#numDecimal").text(b.format(1.734));b=new NumFmt({locale:g,style:"standard"});$("#numGroupSymbol").text(e.getGroupingSeparator());$("#numGroupFmt").text(b.format(1.234567894E8));b=new NumFmt({locale:g,type:"percentage"});$("#numPercentSymbol").text(e.getPercentageSymbol());$("#numPercent").text(b.format(34));b=new NumFmt({locale:g,type:"currency",currency:e.getCurrency()});$("#numCurrencySymbol").text(b.sign);
$("#numCurrency").text(b.format(57.05));b=new NumFmt({locale:g});$("#numPlus").text(b.format(572));$("#numMinus").text(b.format(-37));phoneNumberList={"de-DE":["038852123456","0033112345678","016512345678"],"de-LU":["501234","00352123456","661234567"],"en-AU":["0287654321","001661256781234","0419212345"],"en-GB":["02034523434","0033112345678","0751234567"],"en-HK":["61234567","00133112345678","61234567"],"en-IE":["040412345678","0033112345678","0851234567"],"en-IN":["01112345678","00911112345678",
"9127654321"],"en-NZ":["033452343","006431234567","0211234567"],"en-SG":["61234567","00133112345678","81234567"],"en-US":["4563453434","01133112345678"],"es-ES":["912123456","0034957123456","616846357"],"es-MX":["015512345678","0033112345678","04412345678"],"fr-FR":["0412345678","0033112345678","0612345678"],"it-IT":["096212345678","00390612345678","3991234567"],"ja-JP":["0152410670","01014084567890","09017901357"],"ko-KR":["03134523434","00233112345678","01012345678"],"nl-BE":["0601234567","003221234567",
"0491234567"],"nl-NL":["0255123456","0031201234567","0612345678"],"pt-BR":["0211123456789","004114084567890","923456789"],"ru-RU":["88122345678","81014084567890","89012345678"],"zh-Hans-CN":["010 12345678","0033112345678","15005179573"],"zh-CN":["010 12345678","0033112345678","15005179573"],"zh-Hant-TW":["039606537","00214084567890","0912345678"],"zh-TW":["039606537","00214084567890","0912345678"]};f=[];e=["local","international","mobile"];a=phoneNumberList[g];if(void 0!==a){for(i=0;i<a.length;i++)for(j=
c=0;j<a[i].length;j++)f[j]="<tr class='gradeA'><td id="+e[i]+"subject"+c+" /><td id="+e[i]+"inputNum"+c+" /><td id="+e[i]+"partialFmt"+c+"/><td id="+e[i]+"wholeFmt"+c+" />",$("#phoneNumTable").append(f[c]),c++;d=[];k=[];b=new PhoneFmt({locale:g});f=[];c=[];for(i=0;i<a.length;i++)for(j=0;j<a[i].length;j++)d[j]=a[i].substring(0,j+1),0===i?($("#localinputNum"+j).text(d[j]),k[j]=new PhoneNumber(d[j],{locale:g}),c[j]=b.format(k[j],{partial:!0}),$("#localpartialFmt"+j).text(c[j]),f[j]=b.format(k[j]),$("#localwholeFmt"+
j).text(f[j])):1===i?($("#internationalinputNum"+j).text(d[j]),k[j]=new PhoneNumber(d[j],{locale:g}),c[j]=b.format(k[j],{partial:!0}),$("#internationalpartialFmt"+j).text(c[j]),f[j]=b.format(k[j]),$("#internationalwholeFmt"+j).text(f[j])):2===i&&($("#mobileinputNum"+j).text(d[j]),k[j]=new PhoneNumber(d[j],{locale:g}),c[j]=b.format(k[j],{partial:!0}),$("#mobilepartialFmt"+j).text(c[j]),f[j]=b.format(k[j]),$("#mobilewholeFmt"+j).text(f[j]));for(i=0;i<a.length;i++)for($("#"+e[i]+"subject0").attr("rowSpan",
a[i].length),$("#"+e[i]+"subject0").text(e[i]),j=1;j<a[i].length;j++)$("#"+e[i]+"subject"+j).remove()}else f[0]="<tr><td colspan='4' align='center'>Not supported yet </td>",$("#phoneNumTable").append(f[0]);$("tr").addClass("gradeA");$("td").addClass("table-border-underine")});
