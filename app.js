console.log("Let's get this party started!");


$("form").on("submit",async function(e) {
    e.preventDefault();
    let keyWord = $("input").val();
    $("input").val("") ;
    let res = await axios.get("http://api.giphy.com/v1/gifs/search?q=`${keyWord}`&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym");
    console.log(res);
    let numResults = res.data.data.length;
    console.log(numResults);
    let randomIdx = Math.floor(Math.random() * numResults);
    console.log(randomIdx);
    console.log(res.data.data[randomIdx].images.original.url);
    let img = $("<img>").attr("src",res.data.data[randomIdx].images.original.url);
    $("#gifArea").append($(img));
}) 

$("#delete").on("click", function() {
    $("#gifArea").empty();
})


