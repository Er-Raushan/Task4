function navigate(id) {
      document.querySelectorAll('.container').forEach(sec => sec.classList.remove('active'));
      document.getElementById(id).classList.add('active');
    }

    const taskList = document.getElementById("taskList");
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    function renderTasks() {
      taskList.innerHTML = "";
      tasks.forEach((task, index) => {
        const div = document.createElement("div");
        div.className = "task";
        div.innerHTML = `${task} <button onclick="deleteTask(${index})">❌</button>`;
        taskList.appendChild(div);
      });
    }

    function addTask() {
      const input = document.getElementById("taskInput");
      const value = input.value.trim();
      if (value) {
        tasks.push(value);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        input.value = "";
        renderTasks();
      }
    }

    function deleteTask(index) {
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      renderTasks();
    }

    renderTasks();

    const productList = document.getElementById("productList");
    const products = [
      { name: "Book: JavaScript 101", category: "books", price: 20, image: "https://media.springernature.com/full/springer-static/cover-hires/book/978-1-4842-4395-4" },
      { name: "Smartphone", category: "tech", price: 499, image: "https://image.made-in-china.com/318f0j00UalYZgPBshbV/ChatGPT-mp4.webp" },
      { name: "Book: HTML & CSS", category: "books", price: 15, image: "https://ik.imagekit.io/deciphered/websites/phpandmysql/series/tr:w-400,h-250,f-auto/stack-html.jpg" },
      { name: "Laptop", category: "tech", price: 999, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXBwbGUlMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D" },
      {
        name:"Cars",category:"toys",price:1000,image:"https://www.jiomart.com/images/product/original/rv5xj5cmym/toy-cloud-metal-car-toy-1-32-scale-car-door-opening-pull-back-die-cast-car-realistic-model-racing-cars-toys-lamborghini-toy-cars-for-boys-5-8-product-images-orv5xj5cmym-p609953206-0-202409121610.jpg?im=Resize=(1000,1000)"
      },
      {
        name:"Doll house",category:"toys",price:900,image:"https://m.media-amazon.com/images/I/61QfprvJEbL.jpg"
      },
      {
        name:"teddy bear",category:"toys",price:400,image:"https://images-cdn.ubuy.co.in/67a64110fb4f4538e109b5e3-cute-plush-teddy-bear-stuffed-animal.jpg"
      },{
        name:"saree",category:"clothing",price:1000,image:"https://thenmozhidesigns.com/cdn/shop/files/V_RK6096copy.jpg?v=1695886293"
      },
      {
        name:"t-shirt",category:"clothing",price:300,image:"https://images.unsplash.com/photo-1521498542256-5aeb47ba2b36?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D"
      },
      {
        name:"jeans",category:"clothing",price:600,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPk3Y7T1egmQxHhEQXchUrGIWlRhPsj51Szg&s"
      }
    ];

    function renderProducts() {
      const filter = document.getElementById("filter").value;
      const sort = document.getElementById("sort").value;
      let filtered = [...products];

      if (filter !== "all") {
        filtered = filtered.filter(p => p.category === filter);
      }

      if (sort === "low") {
        filtered.sort((a, b) => a.price - b.price);
      } else if (sort === "high") {
        filtered.sort((a, b) => b.price - a.price);
      }

      productList.innerHTML = "";
      filtered.forEach(p => {
        const div = document.createElement("div");
        div.className = "product";
        div.innerHTML = `<img src="${p.image}" alt="${p.name}" /><h4>${p.name}</h4><p><strong>Category:</strong> ${p.category}</p><p><strong>Price:</strong> $${p.price}</p>`;
        productList.appendChild(div);
      });
    }

    renderProducts();