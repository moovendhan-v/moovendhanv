let blogId = '5530021458797188202';
let apiKey = 'AIzaSyAvDMW8O-oJJd2iIP7ATyj8EgfmB7YZjHE';
let result = '15';
let url = "https://comadykingdom.blogspot.com/2023/04/moovendhan%20poster.html"
var blog =
  `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts/byurl?ulr=${url}key=${apiKey}&maxResults=${result}`;

  
    fetch(api)
    .then(response => response.json())
  .then(data => {
    const postContent = data.content;

    console.log(postContent);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

