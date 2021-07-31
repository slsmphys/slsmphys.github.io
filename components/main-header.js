class MainHeader extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <header class="c-main-header">
                <nav class="c-main-nav">
                    <a href="#" class="c-main-nav__mobile-nav" data-mobile-nav-button>Menu</a>
                    <ul class="c-main-nav__items-wrapper" data-menu-wrapper>
                        <li class="c-main-nav__item">
                            <a href="#" class="c-main-nav__item-link">Home</a>
                        </li>
                        <li class="c-main-nav__item">
                            <a href="#" class="c-main-nav__item-link">About</a>
                            </li>
                        <li class="c-main-nav__item">
                            <a href="#" class="c-main-nav__item-link">Contact</a>
                        </li>
                    </ul>
                </nav>
            </header>
        `;
    }
}

customElements.define("main-header", MainHeader);
