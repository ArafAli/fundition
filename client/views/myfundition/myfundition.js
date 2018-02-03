Template.myfundition.sc2UserAuthentify = function (query) {
    if (!query) return
    else {
        sessionStorage.clear();
        var array = query.split('&')
        sessionStorage.setItem('accesstoken', array[0].split('=')[1]) 
        sessionStorage.setItem('accesstoken', array[0].split('=')[1]) 
        sessionStorage.setItem('expireat', array[1].split('=')[1]) 
        sessionStorage.setItem('username', array[2].split('=')[1]) 

    }
}

Template.myfundition.rendered = function (query) {
        console.log(sessionStorage.getItem('accesstoken'))
        console.log(sessionStorage.getItem('expireat'))
        console.log(sessionStorage.getItem('username'))
}

