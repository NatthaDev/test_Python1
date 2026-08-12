let cart = [];

function addToCart(name, price) {
    cart.push({
        name: name,
        price: price
    });

    updateCart();

    alert(`เพิ่ม "${name}" ลงในตะกร้าแล้ว 🛒`);
}

function updateCart() {
    document.getElementById("cart-count").textContent = cart.length;

    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>ยังไม่มีสินค้าในตะกร้า</p>";
        cartTotal.textContent = "฿0";
        return;
    }

    let total = 0;

    cartItems.innerHTML = "";

    cart.forEach((item, index) => {
        total += item.price;

        cartItems.innerHTML += `
            <div class="cart-item">
                <div>
                    <strong>${item.name}</strong>
                    <br>
                    ฿${item.price.toLocaleString()}
                </div>

                <button onclick="removeItem(${index})">
                    ลบ
                </button>
            </div>
        `;
    });

    cartTotal.textContent = `฿${total.toLocaleString()}`;
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

function showCart() {
    document.getElementById("cart-modal").style.display = "flex";
}

function closeCart() {
    document.getElementById("cart-modal").style.display = "none";
}

function checkout() {
    if (cart.length === 0) {
        alert("กรุณาเลือกสินค้าก่อนสั่งซื้อ");
        return;
    }

    alert("ขอบคุณสำหรับการสั่งซื้อ! 🎉");

    cart = [];
    updateCart();
    closeCart();
}

function sendMessage(event) {
    event.preventDefault();

    alert("ส่งข้อความเรียบร้อยแล้ว ขอบคุณที่ติดต่อ TOP STORE ❤️");

    event.target.reset();
}

window.onclick = function(event) {
    const modal = document.getElementById("cart-modal");

    if (event.target === modal) {
        closeCart();
    }
};
