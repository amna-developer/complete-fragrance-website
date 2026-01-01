  let cart = [];
        function showPage(pageId) {
            document.querySelectorAll('.page').forEach(p => p.classList.remove('active-page'));
            document.getElementById(pageId).classList.add('active-page');
            window.scrollTo(0,0);
        }
        function addToCart(name, price) {
            cart.push({name, price});
            document.getElementById('cart-count').innerText = cart.length;
            alert(name + " added to cart!");
            updateCartUI();
        }
        function updateCartUI() {
            const display = document.getElementById('cart-items-display');
            if(cart.length === 0) { display.innerHTML = "Cart is empty."; return; }
            display.innerHTML = cart.map((item, i) => `<p>${item.name} - ${item.price} <span onclick="removeItem(${i})" style="color:red; cursor:pointer; font-weight:bold;"> (X)</span></p>`).join('');
        }
        function removeItem(i) {
            cart.splice(i, 1);
            document.getElementById('cart-count').innerText = cart.length;
            updateCartUI();
        }
        function checkoutWhatsApp() {
            const name = document.getElementById('cust-name').value;
            const address = document.getElementById('cust-address').value;
            const phone = document.getElementById('cust-phone').value;
            if(!name || !address || !phone || cart.length === 0) { alert("Please fill details and add items!"); return; }
            let text = `*NEW ORDER - CRAFTED FRAGRANCE*%0A%0A*Customer:* ${name}%0A*Phone:* ${phone}%0A*Address:* ${address}%0A%0A*Items:*%0A`;
            cart.forEach(item => text += `- ${item.name} (${item.price})%0A`);
            window.open(`https://wa.me/923200205380?text=${text}`, '_blank');
        }
        function subscribe() {
            const email = document.getElementById('subscriber-email').value;
            if(email) { alert("Welcome to the Circle! Updates will be sent to: " + email); document.getElementById('sale-alert').style.display='none'; }
        }