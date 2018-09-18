function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

function setUpdated (){
    formattedDate = new Date().toTimeString().split(' ')[0];
    document.getElementById("lastupdated").innerHTML = formattedDate;
};
