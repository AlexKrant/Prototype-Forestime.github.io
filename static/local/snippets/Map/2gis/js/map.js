tts=mp;tt=tts[0];mpJSonEl=tt;mpJSonEl=tt;x_map=mpJSonEl["LAT"];y_map=mpJSonEl["LON"];zoom=12;if(tts.length<2){zoom=14;}
b_header=mpJSonEl["NAME_TT"];b_body=mpJSonEl["ADDRESS_TT"];DG.then(function(){var map=DG.map('map',{center:[x_map,y_map],zoom:zoom,});for(i=0;i<tts.length;i++){if(tts[i]['SERVICE_NAME']){tts[i]['NAME_TT']=tts[i]['SERVICE_NAME'];}
var popupContent="<b>"+tts[i]['NAME_TT']+"</b><br>"+tts[i]['ADDRESS_TT']
if(tts[i]["URL_TEXT"]){popupContent=popupContent+"<br><br>"+"<a href='"+tts[i]["URL"]+"' target='_blank'>"+tts[i]["URL_TEXT"]+"</a>";}
DG.marker([tts[i]["LAT"],tts[i]["LON"]]).addTo(map).bindPopup(popupContent);}});