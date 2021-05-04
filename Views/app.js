
const application = document.querySelector(".application");

const tagsLayer = document.querySelector(".tags-layer")

fetch('../Data/tags_data.json')
  .then((response) => response.json())
  .then((response) => {
    for (let Data in response) {
      let tag = document.createElement("a");
      tag.classList.add("tag");
      tag.textContent = response[Data].tag;
      
      tagsLayer.append(tag);
    }
  })
  .catch(() => {
    console.log("The Tags data is not loading up from the JSON file");
  });

const videoContainer = document.querySelector(".video-container");

fetch('../Data/video_data.json')
  .then((video_response) => video_response.json())
  .then((video_response) => {
    for (let Data in video_response) {

      let linkVideo = document.createElement("a");
      linkVideo.href = video_response[Data].video_url;

      let video_card = document.createElement("div");
      video_card.classList.add("video-card");
      
      let video_thumbnail = document.createElement("img");
      video_thumbnail.classList.add('video-thumbnail');
      video_thumbnail.src = video_response[Data].video_thumbnail;
      
      let channel_name = document.createElement("p");
      channel_name.classList.add("channel-name");;
      channel_name.textContent = video_response[Data].channel_name;

      let video_details_layer = document.createElement("div");
      video_details_layer.classList.add("video-details-layer");
      
      let video_title = document.createElement("p");
      video_title.classList.add("video-title");
      video_title.textContent = video_response[Data].video_title;
      
      let channel_profile = document.createElement("img");
      channel_profile.classList.add("channel-profile");
      channel_profile.src = video_response[Data].channel_profile;

      let watching_count = document.createElement("p");
      watching_count.classList.add("watching-count");
      watching_count.textContent = video_response[Data].watching_count;
      
      video_card.append(video_thumbnail);
      
      video_details_layer.append(channel_profile);
      video_details_layer.append(video_title);

      video_card.append(video_details_layer);

      video_card.append(channel_name);
      video_card.append(watching_count);

      videoContainer.append(video_card);
    }

  })
  .catch(() => {
    console.log("The Video data is not loading up from the JSON file");
  });