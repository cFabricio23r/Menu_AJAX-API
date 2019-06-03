$(document).ready(function () {

    $("#btn-get-datos").click(function () {
        getData();
    });

    function getData() {
        $.ajax({
            url: "https://mini-shop-rg.herokuapp.com/products",
            type: "GET",
            dataType: "json",
            success: function (respuesta) {
                var divListaMenu = $("#lista-menu");
                console.log(respuesta);
                var collectionMenu = respuesta;
                var newElement = "";
                for (var i = 0; i < collectionMenu.length; i++) {
                    var dato = collectionMenu[i];
                    newElement +=
                        "<div class='card mt-4'>" +
                        "<img class='card-img-top img-fluid' src=" +
                        ${dato.image} +
                        " />" +
                        "<div class='card-body'>" +
                        "<h3 class='card-title'>" +
                        dato.name +
                        "</h3>" +
                        "<h4>" +
                        dato.price +
                        "</h4>" +
                        "<p class='card-text'>"+
                        dato.description +
                        "</p>" +
                        "<span class='text-warning'>&#9733; &#9733; &#9733; &#9733; &#9734;</span> 4.0 stars" +
                        "</div></div>"                  
                };
                divListaMenu.html(newElement);
            },
            error: function (error) {
                alert("Ha ocurrido un error!");
            }
        });
    }
});
