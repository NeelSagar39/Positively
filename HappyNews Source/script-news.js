function li_elements(title,image,url){
    var list_items = document.createElement('li');
    var image_item = document.createElement('img');
    var title_item = document.createElement('h4');
    var link_item = document.createElement('a');
    link_item.setAttribute("href",url);
    title_item.classList.add('news-headlines');
    title_item.innerHTML = title;
    image_item.setAttribute("src",image);
    link_item.appendChild(image_item);
    list_items.appendChild(link_item);
    list_items.appendChild(title_item);
    console.log(list_items);
    document.getElementById('news-list').appendChild(list_items);
}


$(document).ready(function(){
    var img_url = "close-up-of-coffee-cup-on-table-256523.jpg";
    var titles = [];
    var i = 0;
    var j = 0;
    const list =document.getElementById('news-list');
    console.log(list);
    while (list.firstChild) {
      list.removeChild(list.lastChild);
    }
    $(".news-list").toggleClass('news-section-active')
    $(".hamburger").click(function() {
        $(".hamburger").toggleClass('toggle');
        $(".hamburger-menu").toggleClass('hamburger-active');
    
    });
    $(".arrow-1").click(function() {
        console.log("hehe");
        $('html, body').animate({
            scrollTop: $(".daily-news").offset().top
        }, 2000);
    });
    $.getJSON("https://www.reddit.com/r/Positive_News/new/.json", function(data){
        console.log(data.data.children);
        for (x in data.data.children){
            console.log(data.data.children[x].data.title);
            li_elements(data.data.children[x].data.title,data.data.children[x].data.thumbnail,data.data.children[x].data.url);
            j= j+1;
            if(j>=12)
                { break; }
        }
    });
    $.getJSON("https://www.reddit.com/r/goodnews/.json", function(data){
        console.log(data.data.children);
        for (x in data.data.children){
            if (data.data.children[x].data.author == "AutoModerator"){
                continue;
            }
            console.log(data.data.children[x].data.thumbnail);
            if(data.data.children[x].data.thumbnail == 'self'){
                li_elements(data.data.children[x].data.title,img_url,data.data.children[x].data.url);
            }
            else{
            li_elements(data.data.children[x].data.title,data.data.children[x].data.thumbnail,data.data.children[x].data.url);}
            i= i+1;
            if(i>=12)
                { break; }
        }
    })
});

