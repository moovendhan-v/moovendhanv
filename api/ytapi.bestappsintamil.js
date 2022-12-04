function bestappsintamil(id){
    const APIKey = '';
    const Userid = id;
    const subscriberCount= document.getElementById('subcounts');
    
    let getcontent = () => {
        fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${Userid}&key=${APIKey}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data);
            let sub = subscriberCount.innerHTML = data["items"][0].statistics.subscriberCount;
            console.log(sub);
        })
    }
    getcontent();
}
bestappsintamil("UCdrrGvlDqvXo4H0aH8Rh8wQ")
