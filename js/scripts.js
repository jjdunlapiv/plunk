function goBck(){
 window.history.back()
}

function linkin(isInternal, URL) {
        var strPath = window.location.href;
        var path = strPath.substr(0,strPath.lastIndexOf('../')) + URL;
    if(isInternal){
        window.open((path),'_blank', 'location=no,disallowoverscroll=no,toolbar=yes');
    }
    else{
        window.open((URL),'_system', 'location=yes,disallowoverscroll=no,toolbar=yes');
    }
}