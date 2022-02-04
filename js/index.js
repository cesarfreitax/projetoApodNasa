$(".dataButton").on("click", function (event) {
  event.preventDefault();
  apod();
});

function apod() {
  const pdcontainer = $(".pictureDayContainer")
  const pddata = $(".dataInput").val();
  const pdtitulo = $(".pictureDayTitulo");
  const pdtexto = $(".pictureDayTexto");
  const pdimagem = $(".pictureDayImagem");
  const pdvideo = $(".pictureDayVideo");

  $.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=fPYCd2Epp6jDc2uLnSnZfG1RM9Ed4q4W2YpCbxaz&date=${pddata}`,

    success: function (search) {
      pdcontainer.css("visibility", "visible");
      pdtitulo.text(search.title);
      pdtexto.text(search.explanation);

      if (search.media_type == "image") {
        pdimagem.attr("src", search.url);
        pdimagem.css("display", "flex");
        pdvideo.css("display", "none");
      } else {
        pdvideo.attr("src", search.url);
        pdimagem.css("display", "none");
        pdvideo.css("display", "flex");
      }
      return search;
    },

    error: function () {
      pdcontainer.css("display", "flex");
      pdtitulo.text(`Erro na Api`);
      pdtexto.text(`Por favor, insira uma data de 16 de junho de 1995 até a data atual (exceto 17, 18 e 19 de junho de 1995)`);
      pdimagem.attr("src", "./image/findSerch.png");
      pdimagem.css("width", "150px")
      pdvideo.css("display", "none");
    },
  });
}