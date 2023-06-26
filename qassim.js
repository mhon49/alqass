function generateImage(e) {
    e.preventDefault();
    // Get user input
    const name = document.getElementById("name").value;
  
    // Create canvas element
    const canvas = document.createElement("canvas");
    canvas.width = 1050;
    canvas.height = 1350;
    const context = canvas.getContext("2d");
  
    // Load image
    const image = new Image();
    image.src = "eid.png";
    image.onload = function() {
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
  
      // Add text
      context.font = "bold 40px Noto Kufi Arabic";
      context.fillStyle = "white";
      context.textAlign = "center";
      context.fillText(name, canvas.width/2, 900);
  
      // Update image source
      const userImage = document.getElementById("user-image");
      userImage.src = canvas.toDataURL("image/png");
      userImage.style.display = "block";
  
      // Update download link
     /*  const downloadLink = document.getElementById("download-link");
      downloadLink.href = canvas.toDataURL("image/png");
      downloadLink.style.display = "block"; */

    

      downloadFile(canvas.toDataURL("image/png"));
    };
  }

function downloadFile(filePath){
  var link = document.createElement('a');
  link.href = filePath;
  link.download = "image.png";
  link.click();
}