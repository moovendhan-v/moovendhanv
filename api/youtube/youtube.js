async function latestVideosFormYoutube(apiPath) {
  const uri = `https://www.api.agricreations.com/${apiPath}`;
  const responce = await fetch(uri);
  const data = await responce.json();
  const datas = data.items;
 
  for (const list of datas) {
    const latestVidoesDiv = document.querySelector(".latestVideosFormYoutube");
    const colDiv = document.createElement("div");
    colDiv.classList.add('col-sm-4', 'col-lg-4', 'col-md-6', 'p-3', 'text-center');
    const imgDiv = document.createElement('img');
    imgDiv.classList.add('img-fluid',"border", 'border-3' ,'border-light', 'rounded')
    const aTag = document.createElement('a');
    console.log(list);
    const img = list.snippet.thumbnails.medium.url;
    const id =  list.id.videoId;
    aTag.setAttribute("href", `https://www.youtube.com/watch?v=${id}`);
    imgDiv.setAttribute("src", `${img}`);
    aTag.setAttribute("target", "_blank");
    colDiv.appendChild(aTag);
    aTag.appendChild(imgDiv);
    latestVidoesDiv.appendChild(colDiv);
  }
}
