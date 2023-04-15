let blogId = '1983727176677249382';
let apiKey = 'AIzaSyAvDMW8O-oJJd2iIP7ATyj8EgfmB7YZjHE';
let result = '15';
var blog =
  `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${apiKey}&maxResults=${result}`;

fetch(blog)
  .then((jsons) => jsons.json())
  .then((result) => {
    const results = result.items;
    results.forEach((posts) => {
      //Fetching all contents
      img = posts.content;
      //Using regex we where filtering images 
      const regex = /(?:)(https?:\/\/[^\s"]+)/g;
      const matches = img.match(regex);
      console.log(matches[0]);
      title = posts.title;
      published = posts.published;
      url = posts.url;
      content = posts.content;
      author = posts.author.displayName;
      authorPic = posts.author.image.url;
      labels = posts.labels[0];
        const container = document.querySelector('.container');
        const div1 =document.createElement('div');
        div1.classList.add("row", "bg-blue" ,"p-2" ,"mt-4");
        const div11 = document.createElement('div');
        div11.classList.add('col-lg-4' , 'text-center', 'rounded-pill');
        const image =document.createElement('img');
        image.classList.add('imgs', 'img-fluid');
        image.setAttribute("src", matches[0])
        div11.append(image);
        div1.append(div11);
        const div2 = document.createElement('div');
        div2.classList.add("col-lg-8", "text-light", "p-4")
        const div3 = document.createElement('div');
        div3.classList.add("card-body");
        const h5 = document.createElement('h5');
        h5.classList.add('card-title');
        h5.textContent = title;
        const br = document.createElement('br');
        const a = document.createElement('a');
        const text = document.createTextNode(" Visit blog");
        a.classList.add('btn', 'btn-light');
        a.setAttribute("href", url)
        const btnImg = document.createElement('img');
        btnImg.classList.add('rounded');
        btnImg.setAttribute('src', "//4.bp.blogspot.com/-hWAgovwMgfM/ZBKv6OXPzHI/AAAAAAAAEbo/-vy40ZXvBgoxj4IqRCtfyLG7QN3HxGNTQCK4BGAYYCw/s35/profile.jpg")
        a.append(btnImg);
        a.append(text);
        div3.append(h5)
        div3.append(br)
        div3.append(a)
        div2.append(div3)
        div1.append(div2)
        container.appendChild(div1)

    });
  });
