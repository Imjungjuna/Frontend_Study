document.addEventListener("DOMContentLoaded", () => {
    const studyDetail = document.getElementById("study-detail");
    const studyData = JSON.parse(localStorage.getItem("studyData"));
  
    if (studyData) {
      const card = document.createElement("div");
      card.setAttribute("class", "detail-card");
  
      const img = document.createElement("img");
      img.setAttribute("src", studyData.imageSrc);
      img.setAttribute("alt", studyData.title);
  
      const title = document.createElement("h3");
      title.innerText = studyData.title;
  
      const description = document.createElement("p");
      description.innerText = studyData.description;
  
      const badgeWrapper = document.createElement("div");
      badgeWrapper.setAttribute("class", "badge-wrapper");
  
      const level = document.createElement("div");
      level.setAttribute("class", "badge");
      level.innerText = studyData.level;
  
      const stack = document.createElement("div");
      stack.setAttribute("class", "badge");
      stack.innerText = studyData.stack.join(", ");
  
      const campus = document.createElement("div");
      campus.setAttribute("class", "badge");
      campus.innerText = studyData.campus;
  
      badgeWrapper.append(level, stack, campus);
      card.append(img, title, description, badgeWrapper);
      studyDetail.append(card);
    } else {
      studyDetail.innerText = "<p>No study data found. Please go back to the main page and select a study.</p>";
    }
  });
  