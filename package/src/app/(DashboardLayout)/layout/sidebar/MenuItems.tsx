import { uniqueId } from "lodash";

interface MenuitemsType {
  [x: string]: any;
  id?: string;
  navlabel?: boolean;
  subheader?: string;
  title?: string;
  icon?: any;
  href?: string;
  children?: MenuitemsType[];
  chip?: string;
  chipColor?: string;
  variant?: string;
  external?: boolean;
}

const Menuitems: MenuitemsType[] = [
  {
    navlabel: true,
    subheader: "PERSONAL",

  },

  {
    id: uniqueId(),
    title: "Dashboard",
    icon: 'solar:home-2-line-duotone',
    href: "/",
  },

  {
    id: uniqueId(),
    title: "General",
    icon: "solar:screencast-2-linear",
    href: "https://materialpro-nextjs-pro.vercel.app/",
    chip: "pro",
  },
  {
    id: uniqueId(),
    title: "Classic",
    icon: "solar:atom-linear",
    href: "https://materialpro-nextjs-pro.vercel.app/dashboards/classic",
    chip: "pro",
  },
  {
    id: uniqueId(),
    title: "Analytical",
    icon: "solar:box-minimalistic-linear",
    href: "https://materialpro-nextjs-pro.vercel.app/dashboards/analytical",
    chip: "pro",
  },
  {
    id: uniqueId(),
    title: "Campaign",
    icon: "solar:buildings-2-linear",
    href: "https://materialpro-nextjs-pro.vercel.app/dashboards/campaign",
    chip: "pro",
  },
  {
    id: uniqueId(),
    title: "Modern",
    icon: "solar:basketball-linear",
    href: "https://materialpro-nextjs-pro.vercel.app/dashboards/modern",
    chip: "pro",
  },
  {
    id: uniqueId(),
    title: "eCommerce",
    icon: "solar:cart-large-2-linear",
    href: "https://materialpro-nextjs-pro.vercel.app/dashboards/ecommerce",
    chip: "pro",
  },
  {
    id: uniqueId(),
    title: "Frontend pages",
    icon: "solar:home-angle-linear",
    href: "https://materialpro-nextjs-pro.vercel.app/frontend-pages/homepage",

    children: [
      {
        id: uniqueId(),
        title: "Homepage",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/frontend-pages/homepage",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "About Us",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/frontend-pages/about",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Blog",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/frontend-pages/blog",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Blog Details",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/frontend-pages/blog/Blog_1",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Contact",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/frontend-pages/contact",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Portfolio",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/frontend-pages/portfolio",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Pricing",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/frontend-pages/pricing",
        chip: "pro",
      },
    ],
  },
  {
    navlabel: true,
    subheader: "UTILITIES",
  },
  {
    id: uniqueId(),
    title: 'Autocomplete',
    icon: 'solar:sort-by-alphabet-outline',
    href: '/utilities/autocomplete',
  },
  {
    id: uniqueId(),
    title: 'Checkbox',
    icon: 'solar:check-square-linear',
    href: '/utilities/checkbox',
  },
  {
    id: uniqueId(),
    title: 'Radio',
    icon: 'solar:radar-outline',
    href: '/utilities/radio',
  },
  {
    id: uniqueId(),
    title: "Buttons",
    icon: 'solar:menu-dots-circle-line-duotone',
    href: "/utilities/buttons",
  },
  {
    id: uniqueId(),
    title: 'Slider',
    icon: 'solar:slider-vertical-minimalistic-outline',
    href: '/utilities/slider',
  },
  {
    id: uniqueId(),
    title: 'Switch',
    icon: 'solar:shield-minimalistic-outline',
    href: '/utilities/switch',
  },
  {
    id: uniqueId(),
    title: "Forms",
    icon: 'solar:window-frame-linear',
    href: "/utilities/forms",
  },
  {
    id: uniqueId(),
    title: "Alerts",
    icon: 'solar:info-circle-line-duotone',
    href: "/utilities/alerts",
  },
  {
    id: uniqueId(),
    title: "Ratings",
    icon: 'solar:star-line-duotone',
    href: "/utilities/ratings",
  },

  {
    id: uniqueId(),
    title: "Pagination",
    icon: 'solar:user-rounded-linear',
    href: "/utilities/pagination",
  },
  {
    id: uniqueId(),
    title: "Tables",
    icon: 'solar:menu-dots-square-line-duotone',
    href: "/utilities/table",
  },
  {
    id: uniqueId(),
    title: 'Sample Page',
    icon: 'solar:home-smile-outline',
    href: '/sample-page',
  },

  {
    navlabel: true,
    subheader: "Apps",
  },
  {
    id: uniqueId(),
    title: "Contacts",
    icon: "solar:list-check-linear",

    href: "https://materialpro-nextjs-pro.vercel.app/apps/contacts",
    chip: "pro",
  },



  {
    id: uniqueId(),
    title: "Chats",
    icon: "solar:chat-line-linear",
    href: "https://materialpro-nextjs-pro.vercel.app/apps/chats",
    chip: "pro",
  },
  {
    id: uniqueId(),
    title: "Notes",
    icon: "solar:palette-linear",
    href: "https://materialpro-nextjs-pro.vercel.app/apps/notes",
    chip: "pro",
  },
  {
    id: uniqueId(),
    title: "Calendar",
    icon: "solar:calendar-linear",
    href: "https://materialpro-nextjs-pro.vercel.app/apps/calendar",
    chip: "pro",
  },
  {
    id: uniqueId(),
    title: "Email",
    icon: "solar:letter-unread-linear",
    href: "https://materialpro-nextjs-pro.vercel.app/apps/email",
    chip: "pro",
  },
  {
    id: uniqueId(),
    title: "Tickets",
    icon: "solar:ticket-sale-linear",
    href: "https://materialpro-nextjs-pro.vercel.app/apps/tickets",
    chip: "pro",
  },
  {
    id: uniqueId(),
    title: "Kanban",
    icon: "solar:notes-linear",
    href: "https://materialpro-nextjs-pro.vercel.app/apps/kanban",
    chip: "pro",
  },
  {
    id: uniqueId(),
    title: "Users",
    icon: "solar:user-circle-linear",
    href: "https://materialpro-nextjs-pro.vercel.app/apps/user-profile/profile",

    children: [
      {
        id: uniqueId(),
        title: "Profile",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/apps/user-profile/profile",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Followers",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/apps/user-profile/followers",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Friends",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/apps/user-profile/friends",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Gallery",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/apps/user-profile/gallery",
        chip: "pro",
      },
    ],
  },
  {
    id: uniqueId(),
    title: "Blog",
    icon: "solar:widget-4-linear",
    href: "https://materialpro-nextjs-pro.vercel.app/apps/blog/",

    children: [
      {
        id: uniqueId(),
        title: "Posts",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/apps/blog/post",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Detail",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/apps/blog/detail/streaming-video-way-before-it-was-cool-go-dark-tomorrow",
        chip: "pro",
      },
    ],
  },
  {
    id: uniqueId(),
    title: "Ecommerce",
    icon: "solar:cart-2-linear",
    href: "https://materialpro-nextjs-pro.vercel.app/apps/ecommerce/",

    children: [
      {
        id: uniqueId(),
        title: "Shop",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/apps/ecommerce/shop",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Detail",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/apps/ecommerce/detail/1",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "List",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/apps/ecommerce/list",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Checkout",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/apps/ecommerce/checkout",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Add Product",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/apps/ecommerce/add-product",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Edit Product",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/apps/ecommerce/edit-product",
        chip: "pro",
      },
    ],
  },
  {
    id: uniqueId(),
    title: "Invoice",
    icon: "solar:bill-list-linear",
    href: "https://materialpro-nextjs-pro.vercel.app/apps/invoice/list",
    children: [
      {
        id: uniqueId(),
        title: "List",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/apps/invoice/list",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Details",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/apps/invoice/detail/PineappleInc",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Create",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/apps/invoice/create",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Edit",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/apps/invoice/edit/PineappleInc",
        chip: "pro",
      },
    ],
  },
  {
    navlabel: true,
    subheader: "PAGES",
  },

  {
    id: uniqueId(),
    title: "Pages",
    icon: "solar:accessibility-linear",
    href: "https://spike-nextjs-pro-main.vercel.app/apps/invoice/list",

    children: [
      {
        id: uniqueId(),
        title: "Roll Base Access",
        icon: "solar:accessibility-linear",
        href: "https://materialpro-nextjs-pro.vercel.app/theme-pages/casl",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Pricing",
        icon: "solar:dollar-minimalistic-linear",
        href: "https://materialpro-nextjs-pro.vercel.app/theme-pages/pricing",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Account Setting",
        icon: "solar:settings-linear",
        href: "https://materialpro-nextjs-pro.vercel.app/theme-pages/account-settings",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "FAQ",
        icon: "solar:question-circle-linear",
        href: "https://materialpro-nextjs-pro.vercel.app/theme-pages/faq",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Landingpage",
        icon: "solar:align-vertical-spacing-linear",
        href: "https://materialpro-nextjs-pro.vercel.app/landingpage",
        chip: "pro",
      },
    ],
  },



  {
    navlabel: true,
    subheader: "FORMS",
  },
  {
    id: uniqueId(),
    title: "Form Elements",
    icon: "solar:notification-unread-lines-linear",
    href: "https://materialpro-nextjs-pro.vercel.app/forms/form-elements/autocomplete",
    children: [
      {
        id: uniqueId(),
        title: "Autocomplete",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/forms/form-elements/autocomplete",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Button",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/forms/form-elements/button",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Checkbox",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/forms/form-elements/checkbox",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Radio",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/forms/form-elements/radio",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Date Time",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/forms/form-elements/date-time",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Slider",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/forms/form-elements/slider",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Switch",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/forms/form-elements/switch",
        chip: "pro",
      },
    ],
  },
  {
    id: uniqueId(),
    title: "Form Layout",
    icon: "solar:file-text-linear",
    href: "https://materialpro-nextjs-pro.vercel.app/forms/form-layout",
    chip: "pro",
  },
  {
    id: uniqueId(),
    title: "Form Horizontal",
    icon: "solar:file-check-linear",
    href: "https://materialpro-nextjs-pro.vercel.app/forms/form-horizontal",
    chip: "pro",
  },
  {
    id: uniqueId(),
    title: "Form Vertical",
    icon: "solar:file-favourite-linear",
    href: "https://materialpro-nextjs-pro.vercel.app/forms/form-vertical",
    chip: "pro",
  },
  {
    id: uniqueId(),
    title: "Form Custom",
    icon: "solar:file-smile-linear",
    href: "https://materialpro-nextjs-pro.vercel.app/forms/form-custom",
    chip: "pro",
  },
  {
    id: uniqueId(),
    title: "Form Wizard",
    icon: "solar:download-twice-square-linear",
    href: "https://materialpro-nextjs-pro.vercel.app/forms/form-wizard",
    chip: "pro",
  },
  {
    id: uniqueId(),
    title: "Form Validation",
    icon: "solar:shield-warning-linear",
    href: "https://materialpro-nextjs-pro.vercel.app/forms/form-validation",
    chip: "pro",
  },
  {
    id: uniqueId(),
    title: "Tiptap Editor",
    icon: "solar:stop-circle-line-duotone",
    href: "https://materialpro-nextjs-pro.vercel.app/forms/form-tiptap",
    chip: "pro",
  },
  {
    navlabel: true,
    subheader: "WIDGETS",
  },

  {
    id: uniqueId(),
    title: "Cards",
    icon: "solar:card-linear",
    href: "https://materialpro-nextjs-pro.vercel.app/widgets/cards",
    chip: "pro",
  },
  {
    id: uniqueId(),
    title: "Banners",
    icon: "solar:widget-6-linear",
    href: "https://materialpro-nextjs-pro.vercel.app/widgets/banners",
    chip: "pro",
  },
  {
    id: uniqueId(),
    title: "Charts",
    icon: "solar:chart-linear",
    href: "https://materialpro-nextjs-pro.vercel.app/widgets/charts",
    chip: "pro",
  },
  {
    navlabel: true,
    subheader: "TABLES",
  },
  {
    id: uniqueId(),
    title: "Tables",
    icon: "solar:window-frame-linear",

    href: "https://spike-nextjs-pro-main.vercel.app/apps/invoice/list",
    chip: "pro",
    children: [
      {
        id: uniqueId(),
        title: "Basic",
        icon: "solar:window-frame-linear",
        href: "https://materialpro-nextjs-pro.vercel.app/tables/basic",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Collapsible",
        icon: "solar:code-scan-linear",
        href: "https://materialpro-nextjs-pro.vercel.app/tables/collapsible",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Enhanced",
        icon: "solar:command-linear",
        href: "https://materialpro-nextjs-pro.vercel.app/tables/enhanced",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Fixed Header",
        icon: "solar:feed-linear",
        href: "https://materialpro-nextjs-pro.vercel.app/tables/fixed-header",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Pagination",
        icon: "solar:filters-linear",
        href: "https://materialpro-nextjs-pro.vercel.app/tables/pagination",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Search",
        icon: "solar:card-search-linear",
        href: "https://materialpro-nextjs-pro.vercel.app/tables/search",
        chip: "pro",
      },
    ]
  },


  {
    id: uniqueId(),
    title: "React Table",
    icon: "solar:sidebar-code-linear",
    href: "https://materialpro-nextjs-pro.vercel.app/react-tables/basic",
    chip: "pro",
    children: [
      {
        id: uniqueId(),
        title: "Basic",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/react-tables/basic",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Dense",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/react-tables/dense",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Filter",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/react-tables/filter",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Row Selection",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/react-tables/row-selection",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Pagination",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/react-tables/pagination",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Sorting",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/react-tables/sorting",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Column Visibility",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/react-tables/column-visiblity",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Drag n Drop",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/react-tables/drag-n-drop",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Editable",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/react-tables/editable",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Empty",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/react-tables/empty",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Expand",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/react-tables/expanding",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Sticky",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/react-tables/sticky",
        chip: "pro",
      },
    ],
  },
  {
    navlabel: true,
    subheader: "UI",
  },
  {
    id: uniqueId(),
    title: "Ui Components",
    icon: "solar:widget-linear",
    href: "https://materialpro-nextjs-pro.vercel.app/ui-components/alert",
    children: [
      {
        id: uniqueId(),
        title: "Alert",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/ui-components/alert",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Accordion",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/ui-components/accordion",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Avatar",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/ui-components/avatar",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Chip",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/ui-components/chip",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Dialog",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/ui-components/dialog",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "List",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/ui-components/list",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Popover",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/ui-components/popover",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Rating",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/ui-components/rating",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Tabs",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/ui-components/tabs",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Tooltip",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/ui-components/tooltip",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Transfer List",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/ui-components/transfer-list",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Typography",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/ui-components/typography",
        chip: "pro",
      },
    ],
  },

  {
    navlabel: true,
    subheader: "CHARTS",
  },
  {
    id: uniqueId(),
    title: "Line",
    icon: "solar:chart-linear",
    href: "https://materialpro-nextjs-pro.vercel.app/charts/line",
    chip: "pro",
  },
  {
    id: uniqueId(),
    title: "Gradient",
    icon: "solar:chart-square-linear",
    href: "https://materialpro-nextjs-pro.vercel.app/charts/gradient",
    chip: "pro",
  },
  {
    id: uniqueId(),
    title: "Area",
    icon: "solar:colour-tuneing-linear",
    href: "https://materialpro-nextjs-pro.vercel.app/charts/area",
    chip: "pro",
  },
  {
    id: uniqueId(),
    title: "Candlestick",
    icon: "solar:align-left-outline",
    href: "https://materialpro-nextjs-pro.vercel.app/charts/candlestick",
    chip: "pro",
  },
  {
    id: uniqueId(),
    title: "Column",
    icon: "solar:chart-2-linear",
    href: "https://materialpro-nextjs-pro.vercel.app/charts/column",
    chip: "pro",
  },
  {
    id: uniqueId(),
    title: "Doughtnut & Pie",
    icon: "solar:pie-chart-3-linear",
    href: "https://materialpro-nextjs-pro.vercel.app/charts/doughnut",
    chip: "pro",
  },
  {
    id: uniqueId(),
    title: "RadialBar & Radar",
    icon: "solar:pie-chart-linear",
    href: "https://materialpro-nextjs-pro.vercel.app/charts/radialbar",
    chip: "pro",
  },
  {
    navlabel: true,
    subheader: "ICONS",
  },
  {
    id: uniqueId(),
    title: "Tabler",
    icon: "solar:face-scan-circle-linear",
    href: "https://materialpro-nextjs-pro.vercel.app/icons",
    chip: "pro",
  },
  {
    navlabel: true,
    subheader: "Mui Charts ",
  },
  {
    id: uniqueId(),
    title: "Bar Charts",
    icon: "solar:chart-square-linear",
    href: "https://materialpro-nextjs-pro.vercel.app/muicharts/barcharts",
    chip: "pro",
  },
  {
    id: uniqueId(),
    title: "Line Charts",
    icon: "solar:chart-linear",
    href: "https://materialpro-nextjs-pro.vercel.app/muicharts/linecharts/line",
    children: [
      {
        id: uniqueId(),
        title: "Lines",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/muicharts/linecharts/line",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Area",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/muicharts/linecharts/area",
        chip: "pro",
      },
    ],
  },
  {
    id: uniqueId(),
    title: "Pie Charts",
    icon: "solar:pie-chart-2-linear",
    href: "https://materialpro-nextjs-pro.vercel.app/muicharts/piecharts",
    chip: "pro",
  },
  {
    id: uniqueId(),
    title: "Scatter Charts",
    icon: "solar:align-bottom-linear",
    href: "https://materialpro-nextjs-pro.vercel.app/muicharts/scattercharts",
    chip: "pro",
  },
  {
    id: uniqueId(),
    title: "Sparkline Charts",
    icon: "solar:chart-2-line-duotone",
    href: "https://materialpro-nextjs-pro.vercel.app/muicharts/sparklinecharts",
    chip: "pro",
  },
  {
    id: uniqueId(),
    title: "Gauge Charts",
    icon: "solar:pie-chart-outline",
    href: "https://materialpro-nextjs-pro.vercel.app/muicharts/gaugecharts",
    chip: "pro",
  },

  {
    navlabel: true,
    subheader: "MUI TREES",
  },
  {
    id: uniqueId(),
    title: "TreeView",
    icon: "solar:benzene-ring-broken",
    href: "https://materialpro-nextjs-pro.vercel.app/mui-trees/simpletree/simpletree-items",
    children: [
      {
        id: uniqueId(),
        title: "Items",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/mui-trees/simpletree/simpletree-items",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Selection",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/mui-trees/simpletree/simpletree-selection",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Expansion",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/mui-trees/simpletree/simpletree-expansion",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Customization",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/mui-trees/simpletree/simpletree-customization",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Focus",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/mui-trees/simpletree/simpletree-focus",
        chip: "pro",
      },
    ],
  },
  {
    navlabel: true,
    subheader: "AUTH",
  },

  {
    id: uniqueId(),
    title: "Login",
    icon: 'solar:login-2-broken',
    href: "/authentication/login",
  },
  {
    id: uniqueId(),
    title: "Register",
    icon: 'solar:shield-user-linear',
    href: "/authentication/register",
  },

  {
    id: uniqueId(),
    title: "AuthPage",
    icon: "solar:lock-keyhole-minimalistic-linear",
    href: "https://spike-nextjs-pro-main.vercel.app/auth/auth1/login",
    chip: "pro",

    children: [
      {
        id: uniqueId(),
        title: "Side Login",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/auth/auth1/login",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Boxed Login",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/auth/auth2/login",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Side Register",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/auth/auth1/register",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Boxed Register",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/auth/auth2/register",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Side Forgot PWD",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/auth/auth1/forgot-password",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Boxed Forgot PWD",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/auth/auth2/forgot-password",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Side Two Steps",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/auth/auth1/two-steps",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Boxed Two Steps",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/auth/auth2/two-steps",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Error",
        icon: "solar:shield-warning-linear",
        href: "https://materialpro-nextjs-pro.vercel.app/auth/error",
        chip: "pro",
      },
      {
        id: uniqueId(),
        title: "Maintenance",
        icon: "solar:calendar-minimalistic-linear",
        href: "https://materialpro-nextjs-pro.vercel.app/auth/maintenance",
        chip: "pro",
      },

    ]
  },



  {
    navlabel: true,
    subheader: "OTHERS",
  },
  {
    id: uniqueId(),
    title: "Menu Level",
    icon: "solar:layers-minimalistic-line-duotone",
    href: "https://materialpro-nextjs-pro.vercel.app/menulevel/",
    children: [
      {
        id: uniqueId(),
        title: "Level 1",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/l1",
        chip: "pro",

      },
      {
        id: uniqueId(),
        title: "Level 1.1",
        icon: "solar:stop-circle-line-duotone",
        href: "https://materialpro-nextjs-pro.vercel.app/l1.1",
        chip: "pro",
        children: [
          {
            id: uniqueId(),
            title: "Level 2",
            icon: "solar:stop-circle-line-duotone",
            href: "https://materialpro-nextjs-pro.vercel.app/l2",
            chip: "pro",
          },
          {
            id: uniqueId(),
            title: "Level 2.1",
            icon: "solar:stop-circle-line-duotone",
            href: "https://materialpro-nextjs-pro.vercel.app/l2.1",
            chip: "pro",
            children: [
              {
                id: uniqueId(),
                title: "Level 3",
                icon: "solar:stop-circle-line-duotone",
                href: "https://materialpro-nextjs-pro.vercel.app/l3",
                chip: "pro",
              },
              {
                id: uniqueId(),
                title: "Level 3.1",
                icon: "solar:stop-circle-line-duotone",
                href: "https://materialpro-nextjs-pro.vercel.app/l3.1",
                chip: "pro",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: uniqueId(),
    title: "Disabled",
    icon: "solar:forbidden-circle-line-duotone",
    href: "/#",
    disabled: true,
    chip: "pro",
  },
  {
    id: uniqueId(),
    title: "SubCaption",
    subtitle: "This is the sutitle",
    icon: "solar:star-line-duotone",
    href: "/#",
    chip: "pro",
  },

  {
    id: uniqueId(),
    title: "Chip",
    icon: "solar:shield-check-line-duotone",
    href: "/#",
    chip: "pro",
  },
  {
    id: uniqueId(),
    title: "Outlined",
    icon: "solar:smile-circle-outline",
    href: "/#",

    variant: "outlined",
    chip: "pro",
  },
  {
    id: uniqueId(),
    title: "External Link",
    external: true,
    icon: "solar:link-square-linear",
    href: "https://google.com",
    chip: "pro",
  },
];

export default Menuitems;