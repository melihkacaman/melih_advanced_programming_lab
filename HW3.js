const canvas = document.getElementById("canvas"); 
const CANVAS_WITH = canvas.with = CANVAS_HEIGHT = canvas.height = 600; 


function main(){
    fetch("https://static.euronews.com/articles/stories/05/62/57/76/1440x810_cmsv2_8331d75a-ad74-5b67-9f63-7ec263748179-5625776.jpg").then(response => {
        console.log(response); 
    })
}

main(); 

