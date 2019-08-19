const Menu = [
  {
    heading: "Main Navigation"
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: "icon-grid"
  },
  {
    heading: "Diet"
  },
  {
    name: "Wizard",
    path: "/diet/wizard",
    icon: "icon-energy"
  },
  {
    name: "Goals",
    path: "/diet/goals",
    icon: "icon-trophy"
  },
  {
    name: "Settings",
    path: "/diet/settings",
    icon: "icon-settings"
  },
  {
    heading: "Exercise"
  },
  {
    name: "Track",
    path: "/exercise/track",
    icon: "icon-note"
  },
  {
    name: "Create",
    path: "/exercise/create",
    icon: "icon-energy"
  },
  {
    name: "Goals",
    path: "/exercise/goals",
    icon: "icon-trophy"
  },
  {
    name: "Settings",
    path: "/exercise/settings",
    icon: "icon-settings",
    label: { value: "+400", color: "success" }
  },
  {
    heading: "Mind"
  },
  {
    name: "Goals",
    path: "/mind/goals",
    icon: "icon-trophy"
  },
  {
    name: "Settings",
    path: "/mind/settings",
    icon: "icon-settings"
  },
  {
    heading: "Lab"
  },
  {
    name: "Blood",
    icon: "icon-drop",
    submenu: [
      {
        name: "Order",
        path: "/lab/blood/order"
      },
      {
        name: "Results",
        path: "/lab/blood/results"
      }
    ]
  },

  {
    heading: "Help"
  },
  {
    name: "Tutorial",
    path: "/help/tutorial",
    icon: "icon-question"
  },
  {
    name: "FAQ",
    path: "/help/faq",
    icon: "icon-question"
  },
  {
    name: "Contact Us",
    path: "/help/settings",
    icon: "icon-question"
  }
];

export default Menu;
