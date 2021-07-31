window.onload = () => {
    const mobileNavButton = document.querySelector("[data-mobile-nav-button]");
    const mainNavWrapper = document.querySelector("[data-menu-wrapper]");

    mobileNavButton.addEventListener("click", _handleMobileNavClick);

    function _handleMobileNavClick() {
        mainNavWrapper.classList.toggle("expanded");
    }
};
