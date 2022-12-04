
const APIKey = 'AIzaSyDbEgadnqHQCSVitn2tsnQsY1HXsfsS0dM';
const Userid = 'UCSjSmjY9cEI_ib-NrBElVXw';
const subscriberCount= document.getElementById('subscriberCount');
const viewCount = document.getElementById('viewCount');
const videoCount = document.getElementById('videoCount');
let getdata = () => {
    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${Userid}&key=${APIKey}`)
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data);
        subscriberCount.innerHTML = data["items"][0].statistics.subscriberCount;
        viewCount.innerHTML = data["items"][0].statistics.viewCount;
        videoCount.innerHTML = data["items"][0].statistics.videoCount;
    })
}
getdata();
