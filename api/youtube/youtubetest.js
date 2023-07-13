async function latestVideosFormYoutube(apiPath) {
  const uri = `https://www.api.agricreations.com/${apiPath}`;
  const responce = await fetch(uri);
  const data = await responce.json();
  const datas = data.items;
 const latestVidoesDiv = document.querySelector(".latestVideosFormYoutube");
  for (const list of datas) {
    const image = list.snippet.thumbnails.medium.url;
    const id = list.id.videoId;
    const title = list.snippet.title;
    const description = list.snippet.description;
    const rowDiv = document.createElement("div");
    rowDiv.classList.add('mt-5', 'row', 'g-0','bg-dark', 'position-relative','border', 'border-3', 'border-primary','rounded');
    const colDiv = document.createElement("div");
    colDiv.classList.add('col-md-6', 'mb-md-0', 'p-md-4');
    const imgDiv = document.createElement('img');
    imgDiv.setAttribute("src", `${image}`);
    imgDiv.classList.add('w-100');
    const subDiv = document.createElement("div");
    subDiv.classList.add("col-md-6", 'p-4', 'ps-md-0');
    const h5 =  document.createElement('h5');
    h5.classList.add('text-primary','poppins','titleFlex');
    h5.textContent = title;
    const p = document.createElement('p');
    p.classList.add('text-light','paraFlex');
    const a = document.createElement('a');
    a.classList.add('btn', 'btn-primary', 'text-light');
    colDiv.appendChild(imgDiv);
    subDiv.appendChild(h5);
    subDiv.appendChild(p);
    p.textContent = description;
    subDiv.appendChild(a);
    a.textContent = `Watch now`;
    a.setAttribute('href', `https://www.youtube.com/watch?v=${id}`)
    rowDiv.appendChild(colDiv);
    rowDiv.appendChild(subDiv);
    
    latestVidoesDiv.appendChild(rowDiv);
  }
}
