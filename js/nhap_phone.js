// sản phẩm có giảm giá
function renderProductById(product, containerClass) {
    // Tìm div chứa sản phẩm với id tương ứng
    const container = document.querySelector(`.${containerClass}`);
    if (container) {
        // Tạo nội dung HTML hiển thị sản phẩm
        container.innerHTML = `
        <div class="san_pham">
            <a href="">
                <div class="Tra_gop"><span>Trả góp 0%</span></div>
                <div class="img_phone">
                    <img src="${product.image}" alt="${product.model}">
                </div>
                <div class="Chi_tiet">
                    <div class="Thong_So">
                        <span>${product.processor}</span>
                        <span>${product.ram}</span>
                        <span>${product.screenSize}</span>
                    </div>
                    <div class="Thong_tin">
                        <div>
                            <span>${product.model} ${product.storage}</span>
                        </div>
                        <div class="money">
                            <span>${product.price.toLocaleString()} &#273;</span><br>
                            <span class="tien">${product.pricesale.toLocaleString()} &#273;</span>
                        </div>
                    </div>
                    <hr>
                    <div class="box">
                        <span>Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng.</span>
                    </div>
                </div>
            </a>
            <button>
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.5 10C6.5 9.72386 6.72386 9.5 7 9.5H10V6.5C10 6.22386 10.2239 6 10.5 6C10.7761 6 11 6.22386 11 6.5V9.5H14C14.2761 9.5 14.5 9.72386 14.5 10C14.5 10.2761 14.2761 10.5 14 10.5H11V13.5C11 13.7761 10.7761 14 10.5 14C10.2239 14 10 13.7761 10 13.5V10.5H7C6.72386 10.5 6.5 10.2761 6.5 10ZM10.5 18C14.9183 18 18.5 14.4183 18.5 10C18.5 5.58172 14.9183 2 10.5 2C6.08172 2 2.5 5.58172 2.5 10C2.5 14.4183 6.08172 18 10.5 18ZM10.5 17C6.63401 17 3.5 13.866 3.5 10C3.5 6.13401 6.63401 3 10.5 3C14.366 3 17.5 6.13401 17.5 10C17.5 13.866 14.366 17 10.5 17Z" fill="#090D14"></path>
                </svg>
                <span id="SS1">So sánh</span>
                <span id="SS2">Đã thêm</span>
            </button>
        </div>
        `;
    }
}
// sản phẩm không giảm giá
function renderProductByIdNO(product, containerClass) {
    // Tìm div chứa sản phẩm với id tương ứng
    const container = document.querySelector(`.${containerClass}`);
    if (container) {
        // Tạo nội dung HTML hiển thị sản phẩm
        container.innerHTML = `
        <div class="san_pham">
            <a href="">
                <div class="Tra_gop"><span>Trả góp 0%</span></div>
                <div class="img_phone">
                    <img src="${product.image}" alt="${product.model}">
                </div>
                <div class="Chi_tiet">
                    <div class="Thong_So">
                        <span>${product.processor}</span>
                        <span>${product.ram}</span>
                        <span>${product.screenSize}</span>
                    </div>
                    <div class="Thong_tin">
                        <span>${product.model} ${product.storage}</span>
                        <div class="money">
                            <span class="tien">${product.pricesale.toLocaleString()} &#273;</span>
                        </div>
                    </div>
                    <hr>
                    <div class="box">
                        <span>Không phí chuyển đổi khi trả góp 0% qua thẻ tín dụng kỳ hạn 3-6 tháng.</span>
                    </div>
                </div>
            </a>
            <button>
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.5 10C6.5 9.72386 6.72386 9.5 7 9.5H10V6.5C10 6.22386 10.2239 6 10.5 6C10.7761 6 11 6.22386 11 6.5V9.5H14C14.2761 9.5 14.5 9.72386 14.5 10C14.5 10.2761 14.2761 10.5 14 10.5H11V13.5C11 13.7761 10.7761 14 10.5 14C10.2239 14 10 13.7761 10 13.5V10.5H7C6.72386 10.5 6.5 10.2761 6.5 10ZM10.5 18C14.9183 18 18.5 14.4183 18.5 10C18.5 5.58172 14.9183 2 10.5 2C6.08172 2 2.5 5.58172 2.5 10C2.5 14.4183 6.08172 18 10.5 18ZM10.5 17C6.63401 17 3.5 13.866 3.5 10C3.5 6.13401 6.63401 3 10.5 3C14.366 3 17.5 6.13401 17.5 10C17.5 13.866 14.366 17 10.5 17Z" fill="#090D14"></path>
                </svg>
                <span id="SS1">So sánh</span>
                <span id="SS2">Đã thêm</span>
            </button>
        </div>
        `;
    }
}

fetch('phone.json')  // Đường dẫn tới file JSON của bạn
  .then(response => response.json())  // Chuyển dữ liệu thành đối tượng JSON
  .then(data => {
    // khởi gán dữ liệu
    const apple = data.apple;
    const samsung = data.samsung;
    const oppo = data.oppo;
    // Hiển thị sản phẩm Apple
    if (apple.length > 0) {
        for (let i = 1; i <= apple.length; i++) {
            const product = apple.find(phone => phone.id === `S${i}`);
            if (product) {
                // const hasProductWithPrice = appleProducts.some(product => product.pricesale === 0);
                if (product.pricesale == 0) {
                    renderProductByIdNO(product, `S${i}Apple`); // Render sản phẩm Apple vào div có id="S1", "S2", ...
                } else {
                    renderProductById(product, `S${i}Apple`); // Render sản phẩm Apple vào div có id="S1", "S2", ...
                }
            }
        }
    }
    // Hiển thị sản phẩm Samsung
    if (samsung.length > 0) {
        for (let i = 1; i <= samsung.length; i++) { // Lặp từ 1 đến samsung.length
            const product = samsung.find(phone => phone.id === `S${i}`);
            if (product) { // Kiểm tra sản phẩm có tồn tại không
                renderProductById(product, `S${i}Samsung`); // Render sản phẩm Samsung vào div có id="S1Samsung", "S2Samsung", ...
            }
        }
    }
    // Hiển thị sản phẩm Oppo
})
