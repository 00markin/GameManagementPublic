import Iconify from '../../components/Iconify';

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const admin = true;

const adminNavConfig = [
  {
    title: 'Dashboard',
    path: '/dashboard/general',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'Gerenciar Usuários',
    path: '/management/user',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'Gerenciar Jogos',
    path: '/management/game',
    icon: getIcon('fluent-emoji-high-contrast:game-die'),
  },
  {
    title: "Gerenciar Templates",
    path: "/management/template",
    icon: getIcon("fluent:book-template-20-regular"),
  },
  {
    title: "Gerenciar Lotéricas",
    path: "/management/lottery",
    icon: getIcon("fluent:lottery-24-regular"),
  },
  {
    title: "Gerenciar Parceiros",
    path: "/management/partner",
    icon: getIcon("carbon:partnership"),
  },
  {
    title: "Gerenciar Papéis",
    path: "/management/role",
    icon: getIcon("eos-icons:role-binding-outlined"),
  },
  {
    title: "Gerenciar Configurações",
    path: "/management/setting",
    icon: getIcon("akar-icons:gear"),
  },
  {
    title: "Gerenciar Lojas",
    path: "/management/shop",
    icon: getIcon("fluent:building-shop-20-regular"),
  },
  {
    title: "Gerenciar Homologações",
    path: "/management/statement",
    icon: getIcon("healthicons:i-certificate-paper-outline"),
  },
  {
    title: "Gerenciar Bilhetes",
    path: "/management/ticket",
    icon: getIcon("fluent-emoji-high-contrast:ticket"),
  },
  {
    title: "Gerenciar Carteiras",
    path: "/management/wallet",
    icon: getIcon("et:wallet"),
  },
  {
    title: "Gerenciar Zonas",
    path: "/management/zone",
    icon: getIcon("majesticons:map-marker-area-line"),
  },
];

const userNavConfig = [
  {
    title: "Dashboard",
    path: "/dashboard/general",
    icon: getIcon("eva:pie-chart-2-fill"),
  },
  {
    title: "Jogos",
    path: "/game",
    icon: getIcon("fluent-emoji-high-contrast:game-die"),
  },
]

let navConfig = [];

if (admin) {
  navConfig = adminNavConfig;
} else {
  navConfig = userNavConfig;
}

export default navConfig;