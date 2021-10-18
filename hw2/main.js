const food_images =
[
    "https://farm4.staticflickr.com/3831/19797406205_6fc7785c9b_c.jpg",
    "https://www.tripodking.com.tw/img/about_img.jpg",
    "https://www.gomaji.com/blog/wp-content/uploads/2020/05/IMG_9991.jpg",
    "https://miro.medium.com/max/2625/1*6ZEtusQ7sOXGQQcTNWbk9A.jpeg",
    "https://images.deliveryhero.io/image/fd-tw/LH/y8jy-hero.jpg",
    "https://farm2.staticflickr.com/1730/27926724507_5ec51623ab_b.jpg",
    "https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg",
    "https://cdn.thewirecutter.com/wp-content/media/2021/03/adopting-a-cat-2048px-06052.jpg",
    "https://www.hillcrestanimals.com/files/Catnoteating.jpeg",
    "https://images.theconversation.com/files/85597/original/image-20150618-23263-z93lud.jpg",
    "https://media11.s-nbcnews.com/i/MSNBC/Components/Video/201904/d_mach_cats_1904170.jpg",
    "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322594_1100-1100x628.jpg"

]



let b = document.getElementsByClassName("button");
let frame = document.getElementsByClassName("frame");
let display = document.getElementById("di");
let d = document.getElementsByClassName("big_square");
let empty = document.getElementsByClassName("ebutton");
let food = document.getElementsByClassName("food");
let cat = document.getElementsByClassName("cat");

//cat[0].style.display = "none"; 
b[0].onclick = function()
{
    food[0].style.display = "block";
    cat[0].style.display = "none";
}


b[1].onclick = function()
{
    food[0].style.display = "none";
    cat[0].style.display = "block";
}



empty[0].onclick = function() 
{
    alert('It\'s empty!');
}


//display.src = food_images[1];


frame[0].onclick = function() 
{
    d[0].style.backgroundImage = `url("${food_images[0]}")`;
    frame[0].style.border = "5px solid #555";
    for(i=1;i<6;i++)
    {
        　frame[i].style.border = "0";
        }
        
}
frame[1].onclick = function() 
{
    d[0].style.backgroundImage = `url("${food_images[1]}")`;
    
    for(i=0;i<6 ;i++)
    {
        　frame[i].style.border = "0";
    }
        frame[1].style.border = "5px solid #555";
}
frame[2].onclick = function() 
{
    d[0].style.backgroundImage = `url("${food_images[2]}")`;
    for(i=0;i<6 ;i++)
    {
        　frame[i].style.border = "0";
    }
    frame[2].style.border = "5px solid #555";
}
frame[3].onclick = function() 
{
    d[0].style.backgroundImage = `url("${food_images[3]}")`;
    for(i=0;i<6 ;i++)
    {
        　frame[i].style.border = "0";
    }
    frame[3].style.border = "5px solid #555";
}
frame[4].onclick = function() 
{
    d[0].style.backgroundImage = `url("${food_images[4]}")`;
    for(i=0;i<6 ;i++)
    {
        　frame[i].style.border = "0";
    }
    frame[4].style.border = "5px solid #555";
}
frame[5].onclick = function() 
{
    d[0].style.backgroundImage = `url("${food_images[5]}")`;
    for(i=0;i<6 ;i++)
    {
        　frame[i].style.border = "0";
    }
    frame[5].style.border = "5px solid #555";
}



frame[6].onclick = function() 
{
    d[0].style.backgroundImage = `url("${food_images[6]}")`;
    
    for(i=6;i<12;i++)
    {
        　frame[i].style.border = "0";
        }
    frame[6].style.border = "5px solid #555";    
}
frame[7].onclick = function() 
{
    d[0].style.backgroundImage = `url("${food_images[7]}")`;
    
    for(i=6;i<12;i++)
    {
        　frame[i].style.border = "0";
        }
    frame[7].style.border = "5px solid #555";    
}
frame[8].onclick = function() 
{
    d[0].style.backgroundImage = `url("${food_images[8]}")`;
    
    for(i=6;i<12;i++)
    {
        　frame[i].style.border = "0";
        }
    frame[8].style.border = "5px solid #555";    
}
frame[9].onclick = function() 
{
    d[0].style.backgroundImage = `url("${food_images[9]}")`;
   
    for(i=6;i<12;i++)
    {
        　frame[i].style.border = "0";
        }
     frame[9].style.border = "5px solid #555";
}
frame[10].onclick = function() 
{
    d[0].style.backgroundImage = `url("${food_images[10]}")`;
   
    for(i=6;i<12;i++)
    {
        　frame[i].style.border = "0";
        }
     frame[10].style.border = "5px solid #555";    
}
frame[11].onclick = function() 
{
    d[0].style.backgroundImage = `url("${food_images[11]}")`;
    
    for(i=6;i<12;i++)
    {
        　frame[i].style.border = "0";
        }
    frame[11].style.border = "5px solid #555";    
}

//let di = document.getElementById("di");

console.log(food);

