export const headerMenu = {
  menuItems: [
    { key: 0, label: "Home", slug: "/" },
    { key: 1, label: "Works", slug: "/works" },
    { key: 2, label: "About", slug: "/about" },
  ],
  getHeaderMenu: () => headerMenu.menuItems,
};
