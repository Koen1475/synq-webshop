fetch("https://fakestoreapi.com/products/category/men's%20clothing").then(res=>res.json()).then(data=>{
        const ProductData = data

        //get the section where the products will be displayed
        const products = document.querySelector('.product__section');

        //loop through the data and display the products
        ProductData.forEach(product => {

                // creating the card for the products
                const card = document.createElement('article');
                card.classList.add('product__card');

                //  creating the image for the products
                const img = document.createElement('img');
                img.classList.add('product__img');

                // creating a section to group the name and price
                const info = document.createElement('section');
                info.classList.add('product__info');

                // creating the name of the products
                const name = document.createElement('h3');

                // creating the price of the products
                const price = document.createElement('p');

                // appending the name and price to the info section
                info.appendChild(name);
                info.appendChild(price);

                // creating the button for the products
                const button = document.createElement('a');
                button.classList.add('Add__to__cart');

                // adding the content to the elements
                img.src = product.image;
                name.textContent = product.title;
                price.textContent = '€' + product.price;
                // add euro sign to the price
                
                button.textContent = 'Add to cart';

                // adding the attributes to the elements
                button.setAttribute('href', '#');

                // appending the elements to the card
                card.appendChild(img);
                card.appendChild(info);
                card.appendChild(button);

                // appending the card to the product section
                products.appendChild(card);
        });
})