// Function to handle hover and click events for prefectures
function handlePrefectureEvents(prefecture, alumniInfo) {
    var prefectureElement = document.getElementById(prefecture);
  
    // Hover event
    prefectureElement.addEventListener('mouseover', function () {
      prefectureElement.classList.add('hovered');
      document.getElementById('alumni-info').innerHTML = alumniInfo;
    });
  
    prefectureElement.addEventListener('mouseout', function () {
      prefectureElement.classList.remove('hovered');
      document.getElementById('alumni-info').innerHTML = 'Hover over a prefecture to view alumni details.';
    });
  
    // Click event (if needed)
    // prefectureElement.addEventListener('click', function () {
    //   alert('You clicked on ' + prefecture);
    // });
  }
  
  // Function to create SVG element for each prefecture
  function createPrefecture(prefecture, coordinates) {
    var svgNS = 'http://www.w3.org/2000/svg';
    var svgElement = document.createElementNS(svgNS, 'path');
    svgElement.setAttribute('id', prefecture);
    svgElement.setAttribute('class', 'prefecture');
    svgElement.setAttribute('d', coordinates);
    document.getElementById('map').appendChild(svgElement);
  
    handlePrefectureEvents(prefecture, alumniData[prefecture]);
  }
  
  // Example coordinates for Tokyo (replace with actual SVG path data)
  var tokyoCoordinates = "M100,10 L150,10 L150,60 L100,60 Z";
  
  // Create prefectures with their coordinates
  createPrefecture('Tokyo', tokyoCoordinates);
  // Add more prefectures as needed
  
  