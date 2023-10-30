import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { AppstoreAddOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export const items = [
  {
    label: "MEN",
    key: "men",
    children: [
      {
        key: "1",
        label: "TOPWEAR",
        children: [
          {
            label: "T-Shirt",
            key: "t-shirt",
          },
          {
            label: "Casual Shirts",
            key: "casual Shirts",
          },
          {
            label: "Formal Shirts",
            key: "formal Shirts",
          },
          {
            label: "Sweatshirts",
            key: "sweatshirts",
          },
          {
            label: "Sweaters",
            key: "sweaters",
          },
          {
            label: "Jackets",
            key: "jackets",
          },
          {
            label: "Blazers & Coats",
            key: "blazers & coats",
          },
          {
            label: "Suits",
            key: "suits",
          },
        ],
      },

      {
        key: "2",
        label: "Indian & Festive Wear",
        children: [
          {
            label: "Kurts & Kurta Sets",
            key: "Kurts & Kurta Sets",
          },
          {
            label: "Nehru Jackets",
            key: "Nehru Jackets",
          },
          {
            label: "Sherwanis",
            key: "Sherwanis",
          },
        ],
      },
      {
        label: "Bottomwear",
        children: [
          {
            label: "Shorts",
            key: "Shorts1",
          },
          {
            label: "Jeans",
            key: "jeans",
          },
          {
            label: "Casual Trousers",
            key: "Casual Trosers",
          },
          {
            label: "Track Pants & Joggers",
            key: "Track Pants & Joggers",
          },
        ],
      },
      {
        label: "Innerwear & Sleepwear",
        children: [
          {
            label: "Boxers",
            key: "Boxers",
          },
          {
            label: "Vests",
            key: "Vests",
          },
          {
            label: "Thermals",
            key: "Thermals",
          },
        ],
      },
      {
        label: "Fashion Accessories",
        children: [
          {
            label: "Wallets",
            key: "Wallets",
          },
          {
            label: "Belts",
            key: "Belts",
          },
          {
            label: "Trimers",
            key: "Trimers",
          },
          {
            label: "Caps",
            key: "Caps",
          },
          {
            label: "Mufflers",
            key: "Mufflers",
          },
          {
            label: "Perfumes",
            key: "Perfumes",
          },
          {
            label: "Deodorants",
            key: "Deodorants",
          },
        ],
      },
    ],
  },
  {
    label: "WOMEN",
    key: "women",
    children: [
      {
        label: "Indian & Fusion Wear",
        children: [
          {
            label: "Kurtas & Suits",
            key: "Kurtas & Suits",
          },
          {
            label: "Kurti",
            key: "Kurti",
          },
          {
            label: "Saree",
            key: "Saree",
          },
          {
            label: "Ethinic Wear",
            key: "Ethinic Wear",
          },
          {
            label: "Skirts & Palazzos",
            key: "Skirts & Palazzos",
          },
          {
            label: "Lehnga Cholis",
            key: "Lehnga Cholis",
          },
          {
            label: "Dupatta & Shawls",
            key: "Dupatta & Shawls",
          },
        ],
      },
      {
        label: "Indian & Festive Wear",
        children: [
          {
            label: "Kurts & Kurta Sets",
            key: "Kurts & Kurta Sets",
          },
          {
            label: "Nehru Jackets",
            key: "Nehru Jackets",
          },
          {
            label: "Sherwanis",
            key: "Sherwanis",
          },
        ],
      },
      {
        label: "Bottomwear",
        children: [
          {
            label: "Shorts",
            key: "Shorts2",
          },
          {
            label: "Jeans",
            key: "jeans",
          },
          {
            label: "Casual Trousers",
            key: "Casual Trosers",
          },
          {
            label: "Track Pants & Joggers",
            key: "Track Pants & Joggers",
          },
        ],
      },
      {
        label: "Innerwear & Sleepwear",
        children: [
          {
            label: "Boxers",
            key: "Boxers",
          },
          {
            label: "Vests",
            key: "Vests",
          },
          {
            label: "Thermals",
            key: "Thermals",
          },
        ],
      },
      {
        label: "Fashion Accessories",
        children: [
          {
            label: "Wallets",
            key: "Wallets",
          },
          {
            label: "Belts",
            key: "Belts",
          },
          {
            label: "Trimers",
            key: "Trimers",
          },
          {
            label: "Caps",
            key: "Caps",
          },
          {
            label: "Mufflers",
            key: "Mufflers",
          },
          {
            label: "Perfumes",
            key: "Perfumes",
          },
          {
            label: "Deodorants",
            key: "Deodorants",
          },
        ],
      },
    ],
  },
  {
    label: "KIDS",
    key: "kids",
    children: [
      {
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
      {
        label: "Item 2",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
  {
    label: "BEAUTY",
    key: "beauty",
    children: [
      {
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
      {
        label: "Item 2",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
];

export const MenusItems = ({ color }: any) => {
  const naviagate = useNavigate();

  return (
    <div
      onClick={() => naviagate(`/topwear`)}
      style={{ color: `${color}`, fontWeight: "bold", cursor: "pointer" }}
    >
      TOPWEAR
    </div>
  );
};

export const items2 = [
  {
    label: "MEN",
    key: "men",
    children: [
      {
        key: "1",
        type: "group",
        label: (
          <div style={{ color: "#ff0000", fontWeight: "bold" }}>TOPWEAR</div>
        ),
        children: [
          {
            label: "T-Shirt",
            key: "t-shirt",
          },
          {
            label: "Casual Shirts",
            key: "casual_Shirts",
          },
          {
            label: "Formal Shirts",
            key: "formal_Shirts",
          },
          {
            label: "Sweatshirts",
            key: "sweatshirts",
          },
          {
            label: "Sweaters",
            key: "sweaters",
          },
          {
            label: "Jackets",
            key: "jackets",
          },
          {
            label: "Blazers & Coats",
            key: "blazers_coats",
          },
          {
            label: "Suits",
            key: "suits",
          },
        ],
      },

      {
        key: "2",
        type: "group",
        label: (
          <div style={{ color: "#ff0000", fontWeight: "bold" }}>
            Indian & Festive Wear
          </div>
        ),
        children: [
          {
            label: "Kurts & Kurta Sets",
            key: "Kurts_Kurta_Sets",
          },
          {
            label: "Nehru Jackets",
            key: "Nehru_Jackets",
          },
          {
            label: "Sherwanis",
            key: "Sherwanis",
          },
        ],
      },
      {
        type: "group",
        label: (
          <div style={{ color: "#ff0000", fontWeight: "bold" }}>Bottomwear</div>
        ),
        children: [
          {
            label: "Shorts",
            key: "Shorts3",
          },
          {
            label: "Jeans",
            key: "jeans",
          },
          {
            label: "Casual Trousers",
            key: "Casual Trosers",
          },
          {
            label: "Track Pants & Joggers",
            key: "Track Pants & Joggers",
          },
        ],
      },
      {
        type: "group",
        label: (
          <div style={{ color: "#ff0000", fontWeight: "bold" }}>
            Innerwear & Sleepwear
          </div>
        ),
        children: [
          {
            label: "Boxers",
            key: "Boxers",
          },
          {
            label: "Vests",
            key: "Vests",
          },
          {
            label: "Thermals",
            key: "Thermals",
          },
        ],
      },

      {
        type: "group",
        label: (
          <div style={{ color: "#ff0000", fontWeight: "bold" }}>
            Fashion Accessories
          </div>
        ),
        children: [
          {
            label: "Wallets",
            key: "Wallets1",
          },
          {
            label: "Belts",
            key: "Belts",
          },
          {
            label: "Trimers",
            key: "Trimers",
          },
          {
            label: "Caps",
            key: "Caps",
          },
          {
            label: "Mufflers",
            key: "Mufflers",
          },
          {
            label: "Perfumes",
            key: "Perfumes",
          },
          {
            label: "Deodorants",
            key: "Deodorants",
          },
        ],
      },
    ],
  },
  {
    label: "WOMEN",
    key: "women",
    children: [
      {
        type: "group",
        label: (
          <div style={{ color: "#ff00a2", fontWeight: "bold" }}>
            Indian & Fusion Wear
          </div>
        ),
        children: [
          {
            label: "Kurtas & Suits",
            key: "Kurtas_Suits",
          },
          {
            label: "Kurti",
            key: "Kurti",
          },
          {
            label: "Saree",
            key: "Saree",
          },
          {
            label: "Ethinic Wear",
            key: "Ethinic_Wear",
          },
          {
            label: "Skirts & Palazzos",
            key: "Skirts_Palazzos",
          },
          {
            label: "Lehnga Cholis",
            key: "Lehnga_Cholis",
          },
          {
            label: "Dupatta & Shawls",
            key: "Dupatta_Shawls",
          },
        ],
      },
      {
        type: "group",
        label: (
          <div style={{ color: "#ff00a2", fontWeight: "bold" }}>
            Indian & Festive Wear
          </div>
        ),
        children: [
          {
            label: "Kurts & Kurta Sets",
            key: "KurtaKurta_Sets",
          },
          {
            label: "Nehru Jackets",
            key: "NehruJackets",
          },
          {
            label: "Sherwanis",
            key: "Sherwanis2",
          },
        ],
      },
      {
        type: "group",
        label: (
          <div style={{ color: "#ff00a2", fontWeight: "bold" }}>Bottomwear</div>
        ),
        children: [
          {
            label: "Shorts",
            key: "Shorts4",
          },
          {
            label: "Jeans",
            key: "jeans",
          },
          {
            label: "Casual Trousers",
            key: "Casual_Trosers",
          },
          {
            label: "Track Pants & Joggers",
            key: "Track_Pants_Joggers",
          },
        ],
      },
      {
        type: "group",
        label: (
          <div style={{ color: "#ff00a2", fontWeight: "bold" }}>
            Innerwear & Sleepwear
          </div>
        ),
        children: [
          {
            label: "Boxers",
            key: "Boxers",
          },
          {
            label: "Vests",
            key: "Vests",
          },
          {
            label: "Thermals",
            key: "Thermals",
          },
        ],
      },

      {
        type: "group",
        label: (
          <div style={{ color: "#ff00a2", fontWeight: "bold" }}>
            Fashion Accessories
          </div>
        ),
        children: [
          {
            label: "Wallets",
            key: "Wallets",
          },
          {
            label: "Belts",
            key: "Belts",
          },
          {
            label: "Trimers",
            key: "Trimers",
          },
          {
            label: "Caps",
            key: "Caps",
          },
          {
            label: "Mufflers",
            key: "Mufflers",
          },
          {
            label: "Perfumes",
            key: "Perfumes",
          },
          {
            label: "Deodorants",
            key: "Deodorants",
          },
        ],
      },
    ],
  },
  {
    label: "KIDS",
    key: "kids",
    children: [
      {
        type: "group",
        label: (
          <div
            style={{
              color: "#ff0000",
              fontWeight: "bold",
              margin: 0,
            }}
          >
            TOPWEAR
          </div>
        ),
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
  {
    label: "BEAUTY",
    key: "beauty",
    children: [
      {
        type: "group",
        key: "Face",
        label: (
          <div
            style={{
              color: "#ff0000",
              fontWeight: "bold",
              margin: 0,
            }}
          >
            Face
          </div>
        ),
        children: [
          {
            label: "Option 1",
            key: "1",
          },
          {
            label: "Option 2",
            key: "2",
          },
        ],
      },
      {
        type: "group",
        key: "Hair",
        label: (
          <div
            style={{
              color: "#ff0000",
              fontWeight: "bold",
              margin: 0,
            }}
          >
            Hair
          </div>
        ),
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
];
