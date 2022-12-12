class Header {
    render(count) {
        const html = `
           <div class="header-container">
                <div class="header-counter">
                    ${count}
                </div>
           </div>
        `;

        ROOT_HEADER.innerHTML = html;
    }
}

const hederEl = new Header()
hederEl.render(localStorageEl.getProducts().length);
