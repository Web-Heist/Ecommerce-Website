function catagorybar() {
    const bar = document.getElementById('catagorybar');

    if (bar.style.display === 'none' || bar.style.display === '') {
        bar.style.display = 'block'; 
    } else {
        bar.style.display = 'none'; 
    }
}

const seemorecatagory =()=> {
    const container = document.getElementById('extra-categories');
    const button = document.getElementById('toggle-button1');
    

    if (container.style.display === 'none' || container.style.display === '') {

        container.style.display = 'block';
        button.textContent = 'See less';

        if (!container.hasChildNodes()) {
            const categories = [
                "Laptps/PC",
                "Electronics",
                "SmartPhones",
            ];
            categories.forEach(category => {
                const label = document.createElement('label');
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                label.appendChild(checkbox);
                label.append(` ${category}`);
                container.appendChild(label);
            });
        }
    } else {
        container.style.display = 'none';
        button.textContent = 'See all';
    }
};

const seemorebrand =()=> {
    const container = document.getElementById('extra-brand');
    const button = document.getElementById('toggle-button2');
    

    if (container.style.display === 'none' || container.style.display === '') {

        container.style.display = 'block';
        button.textContent = 'See less';

        if (!container.hasChildNodes()) {
            const categories = [
                "Sony",
                "Lenovo",
                "Redmi"
            ];
            categories.forEach(category => {
                const label = document.createElement('label');
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                label.appendChild(checkbox);
                label.append(` ${category}`);
                container.appendChild(label);
            });
        }
    } else {
        container.style.display = 'none';
        button.textContent = 'See all';
    }
};

const seemorefeature =()=> {
    const container = document.getElementById('extra-feature');
    const button = document.getElementById('toggle-button3');
    

    if (container.style.display === 'none' || container.style.display === '') {

        container.style.display = 'block';
        button.textContent = 'See less';

        if (!container.hasChildNodes()) {
            const categories = [
                "Plastic cover",
                "Metalic",
                "6GB Ram",
            ];
            categories.forEach(category => {
                const label = document.createElement('label');
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                label.appendChild(checkbox);
                label.append(` ${category}`);
                container.appendChild(label);
            });
        }
    } else {
        container.style.display = 'none';
        button.textContent = 'See all';
    }
};

function changeImage1() {
    // Manually set the source for each image
    document.getElementById("image1").src = "./public/2.jpg";  // First image
    document.getElementById("image2").src = "./public/3.jpg";  // Second image
    document.getElementById("image3").src = "./public/1.jpg";  // Third image
    document.getElementById("image4").src = "./public/8.jpg";  // Fourth image
    document.getElementById("image5").src = "./public/5.jpg";  // Fifth image
    document.getElementById("image6").src = "./public/6.jpg";  // Sixth image
  }
  function changeImage2() {
    // Manually set the source for each image
    document.getElementById("image1").src = "./public/4.jpg";  // First image
    document.getElementById("image2").src = "./public/5.jpg";  // Second image
    document.getElementById("image3").src = "./public/7.jpg";  // Third image
    document.getElementById("image4").src = "./public/9.jpg";  // Fourth image
    document.getElementById("image5").src = "./public/10.jpg";  // Fifth image
    document.getElementById("image6").src = "./public/1.jpg";  // Sixth image

  }function changeImage3() {
    // Manually set the source for each image
    document.getElementById("image1").src = "./public/9.jpg";  // First image
    document.getElementById("image2").src = "./public/6.jpg";  // Second image
    document.getElementById("image3").src = "./public/1.jpg";  // Third image
    document.getElementById("image4").src = "./public/8.jpg";  // Fourth image
    document.getElementById("image5").src = "./public/3.jpg";  // Fifth image
    document.getElementById("image6").src = "./public/2.jpg";  // Sixth image

  }function changeImage4() {
    // Manually set the source for each image
    document.getElementById("image1").src = "./public/1.jpg";  // Fourth image
    document.getElementById("image2").src = "./public/4.jpg";  // Fifth image
    document.getElementById("image3").src = "./public/6.jpg";  // Sixth image
    document.getElementById("image4").src = "./public/2.jpg";  // First image
    document.getElementById("image5").src = "./public/3.jpg";  // Second image
    document.getElementById("image6").src = "./public/8.jpg";  // Third image
   

  }function changeImage5() {
    // Manually set the source for each image
    document.getElementById("image1").src = "./public/2.jpg";  // First image
    document.getElementById("image2").src = "./public/3.jpg";  // Second image
    document.getElementById("image3").src = "./public/7.jpg";  // Third image
    document.getElementById("image4").src = "./public/8.jpg";  // Fourth image
    document.getElementById("image5").src = "./public/5.jpg";  // Fifth image
    document.getElementById("image6").src = "./public/6.jpg";  // Sixth image

  }function changeImage6() {
    // Manually set the source for each image
    document.getElementById("image1").src = "./public/1.jpg";  // Fourth image
    document.getElementById("image2").src = "./public/4.jpg";  // Fifth image
    document.getElementById("image3").src = "./public/6.jpg";  // Sixth image
    document.getElementById("image4").src = "./public/2.jpg";  // First image
    document.getElementById("image5").src = "./public/3.jpg";  // Second image
    document.getElementById("image6").src = "./public/8.jpg";  // Third image
  }
  
  