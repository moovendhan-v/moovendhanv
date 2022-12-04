let url = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCSjSmjY9cEI_ib-NrBElVXw&maxResults=10&order=date&key=AIzaSyDl1FjjkXjF5iUQGBscfAS697y_fE-vLfk";

fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCSjSmjY9cEI_ib-NrBElVXw&maxResults=10&order=date&key=AIzaSyDl1FjjkXjF5iUQGBscfAS697y_fE-vLfk")
.then((result)=>{
    return result.json();
}).then((data)=>{
    console.log(data);
    let videos = data.items;
    for(video of videos){
        console.log(video.snippet.title);
    }
})
