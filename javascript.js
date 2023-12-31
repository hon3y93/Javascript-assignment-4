console.log("Loaded fully");

var productData = {
    "id": "1",
    "name": "Men Navy Blue Solid Sweatshirt",
    "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "photos": [
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
    ],
    "description": "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
    "size": [
      1,
      1,
      0,
      1,
      0
    ],
    "isAccessory": false,
    "brand": "United Colors of Benetton",
    "price": 2599
  }

// ---------------- Create Product Page i.e Inserting Information -------

  // Product Image
  var productImg = document.getElementById("productImg");
  productImg.src = productData.preview;


  // Product Name
  var productName = document.getElementById("name");
  productName.innerHTML = productData.name;

  // Product Brand
  var productBrand = document.getElementById("brand");
  productBrand.innerHTML = productData.brand;

  // Product Price
  var productPrice = document.getElementById("price");
  productPrice.innerHTML = productData.price;

  // Product Description
  var productDescription = document.getElementById("description");
  productDescription.innerHTML = productData.description;

  // Product Preview Image 0
  var photo0 = document.getElementById("img0");
  photo0.src = productData.photos[0];

  // Product Preview Image 1
  var photo1 = document.getElementById("img1");
  photo1.src = productData.photos[1];

  // Product Preview Image 2
  var photo2 = document.getElementById("img2");
  photo2.src = productData.photos[2];

  // Product Preview Image 3
  var photo3 = document.getElementById("img3");
  photo3.src = productData.photos[3];

  // Product Preview Image 4
  var photo4 = document.getElementById("img4");
  photo4.src = productData.photos[4];

  // ---------------- Change Preview Image OnClick -------
  function changeImage() {
    // Photo 1
    photo0.addEventListener('click', function() {
      productImg.src = productData.photos[0];
      removeActiveClass();
    photo0.classList.add('active');
    });

    // Photo 2
    photo1.addEventListener('click', function() {
      productImg.src = productData.photos[1];
      removeActiveClass();
    photo1.classList.add('active');
    });

    // Photo 3
    photo2.addEventListener("click", function() {
      productImg.src = productData.photos[2];
      removeActiveClass();
    photo2.classList.add('active');
    });

    // Photo 4
    photo3.addEventListener("click", function() {
      productImg.src = productData.photos[3];
      removeActiveClass();
    photo3.classList.add('active');
    });

    // Photo 5
    photo4.addEventListener("click", function() {
      productImg.src = productData.photos[4];
      removeActiveClass();
    photo4.classList.add('active');
    });


    function removeActiveClass() {
      var previewImages = document.querySelectorAll('.previewImg img');
      previewImages.forEach(function(image) {
        image.classList.remove('active');
      });
    }
    
  }

  changeImage();