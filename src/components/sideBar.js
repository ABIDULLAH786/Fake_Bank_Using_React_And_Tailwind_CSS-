import MenuItemCard from "../themes/menuItemCard";
import {
  HelpIcon,
  HistoryIcon,
  HomeIcon,
  HrIcon,
  InboxIcon,
  LogOutIcon,
  ManageUserIcon,
  TransferIcon,
} from "../assets/icons";
import { useEffect, useState } from "react";
import { RiMenuFoldLine, RiMenuUnfoldLine } from "react-icons/ri";
import useWindowDimensions from "../hooks/useWindowDimensions";
const MenuGeneralItems = [
  {
    text: "Dashboard",
    icon: HomeIcon,
    path: "/dashboard",
    className: "flex items-center ml-[42.75px] mb-[33px] font-semibold group",
  },
  {
    text: "Manage Users",
    icon: ManageUserIcon,
    path: "/dashboard/manage-users",
    className: "flex items-center ml-[42.75px] mb-[33px] font-semibold group",
  },
  {
    text: "Transfer to Users",
    icon: TransferIcon,
    path: "/dashboard/transfer-to-users",
    className: "flex items-center ml-[42.75px] mb-[33px] font-semibold group",
  },
  {
    text: "History",
    icon: HistoryIcon,
    path: "/dashboard/history",
    className: "flex items-center ml-[42.75px] mb-[33px] font-semibold group",
  },
  {
    text: "Inbox",
    icon: InboxIcon,
    path: "/dashboard/inbox",
    className: "flex items-center ml-[42.75px]  font-semibold group",
  },
];
const SideBar = (props) => {
  
  return (
    <div className="flex flex-grow h-screen">
      <aside aria-label="Sidebar">
        {/* add absolute to below div to fix the log out button to the bottom */}
        <div className=" sticky top-0 h-screen bg-white w-[256px] ">
          <ul className="ml-[39px] mb-[52px] pt-[30px]">
            <svg
              width="149"
              height="39"
              viewBox="0 0 149 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.016 12.248V29H1.656V12.248H5.016ZM17.8397 20.408C18.7837 20.584 19.5597 21.056 20.1677 21.824C20.7757 22.592 21.0797 23.472 21.0797 24.464C21.0797 25.36 20.8557 26.152 20.4077 26.84C19.9757 27.512 19.3437 28.04 18.5117 28.424C17.6797 28.808 16.6957 29 15.5597 29H8.33569V12.248H15.2477C16.3837 12.248 17.3597 12.432 18.1757 12.8C19.0077 13.168 19.6317 13.68 20.0477 14.336C20.4797 14.992 20.6957 15.736 20.6957 16.568C20.6957 17.544 20.4317 18.36 19.9037 19.016C19.3917 19.672 18.7037 20.136 17.8397 20.408ZM11.6957 19.16H14.7677C15.5677 19.16 16.1837 18.984 16.6157 18.632C17.0477 18.264 17.2637 17.744 17.2637 17.072C17.2637 16.4 17.0477 15.88 16.6157 15.512C16.1837 15.144 15.5677 14.96 14.7677 14.96H11.6957V19.16ZM15.0797 26.264C15.8957 26.264 16.5277 26.072 16.9757 25.688C17.4397 25.304 17.6717 24.76 17.6717 24.056C17.6717 23.336 17.4317 22.776 16.9517 22.376C16.4717 21.96 15.8237 21.752 15.0077 21.752H11.6957V26.264H15.0797ZM22.8936 22.304C22.8936 20.96 23.1576 19.768 23.6856 18.728C24.2296 17.688 24.9576 16.888 25.8696 16.328C26.7976 15.768 27.8296 15.488 28.9656 15.488C29.9576 15.488 30.8216 15.688 31.5576 16.088C32.3096 16.488 32.9096 16.992 33.3576 17.6V15.704H36.7416V29H33.3576V27.056C32.9256 27.68 32.3256 28.2 31.5576 28.616C30.8056 29.016 29.9336 29.216 28.9416 29.216C27.8216 29.216 26.7976 28.928 25.8696 28.352C24.9576 27.776 24.2296 26.968 23.6856 25.928C23.1576 24.872 22.8936 23.664 22.8936 22.304ZM33.3576 22.352C33.3576 21.536 33.1976 20.84 32.8776 20.264C32.5576 19.672 32.1256 19.224 31.5816 18.92C31.0376 18.6 30.4536 18.44 29.8296 18.44C29.2056 18.44 28.6296 18.592 28.1016 18.896C27.5736 19.2 27.1416 19.648 26.8056 20.24C26.4856 20.816 26.3256 21.504 26.3256 22.304C26.3256 23.104 26.4856 23.808 26.8056 24.416C27.1416 25.008 27.5736 25.464 28.1016 25.784C28.6456 26.104 29.2216 26.264 29.8296 26.264C30.4536 26.264 31.0376 26.112 31.5816 25.808C32.1256 25.488 32.5576 25.04 32.8776 24.464C33.1976 23.872 33.3576 23.168 33.3576 22.352ZM47.3912 15.512C48.9752 15.512 50.2552 16.016 51.2312 17.024C52.2072 18.016 52.6952 19.408 52.6952 21.2V29H49.3352V21.656C49.3352 20.6 49.0712 19.792 48.5432 19.232C48.0152 18.656 47.2952 18.368 46.3832 18.368C45.4552 18.368 44.7192 18.656 44.1752 19.232C43.6472 19.792 43.3832 20.6 43.3832 21.656V29H40.0232V15.704H43.3832V17.36C43.8312 16.784 44.3992 16.336 45.0872 16.016C45.7912 15.68 46.5592 15.512 47.3912 15.512ZM63.7624 29L59.2504 23.336V29H55.8904V11.24H59.2504V21.344L63.7144 15.704H68.0824L62.2264 22.376L68.1304 29H63.7624Z"
                fill="#0B677E"
              />
              <path
                d="M69.84 20.6C69.84 18.952 70.208 17.48 70.944 16.184C71.696 14.872 72.712 13.856 73.992 13.136C75.288 12.4 76.736 12.032 78.336 12.032C80.208 12.032 81.848 12.512 83.256 13.472C84.664 14.432 85.648 15.76 86.208 17.456H82.344C81.96 16.656 81.416 16.056 80.712 15.656C80.024 15.256 79.224 15.056 78.312 15.056C77.336 15.056 76.464 15.288 75.696 15.752C74.944 16.2 74.352 16.84 73.92 17.672C73.504 18.504 73.296 19.48 73.296 20.6C73.296 21.704 73.504 22.68 73.92 23.528C74.352 24.36 74.944 25.008 75.696 25.472C76.464 25.92 77.336 26.144 78.312 26.144C79.224 26.144 80.024 25.944 80.712 25.544C81.416 25.128 81.96 24.52 82.344 23.72H86.208C85.648 25.432 84.664 26.768 83.256 27.728C81.864 28.672 80.224 29.144 78.336 29.144C76.736 29.144 75.288 28.784 73.992 28.064C72.712 27.328 71.696 26.312 70.944 25.016C70.208 23.72 69.84 22.248 69.84 20.6ZM88.2139 22.304C88.2139 20.96 88.4779 19.768 89.0059 18.728C89.5499 17.688 90.2779 16.888 91.1899 16.328C92.1179 15.768 93.1499 15.488 94.2859 15.488C95.2779 15.488 96.1419 15.688 96.8779 16.088C97.6299 16.488 98.2299 16.992 98.6779 17.6V15.704H102.062V29H98.6779V27.056C98.2459 27.68 97.6459 28.2 96.8779 28.616C96.1259 29.016 95.2539 29.216 94.2619 29.216C93.1419 29.216 92.1179 28.928 91.1899 28.352C90.2779 27.776 89.5499 26.968 89.0059 25.928C88.4779 24.872 88.2139 23.664 88.2139 22.304ZM98.6779 22.352C98.6779 21.536 98.5179 20.84 98.1979 20.264C97.8779 19.672 97.4459 19.224 96.9019 18.92C96.3579 18.6 95.7739 18.44 95.1499 18.44C94.5259 18.44 93.9499 18.592 93.4219 18.896C92.8939 19.2 92.4619 19.648 92.1259 20.24C91.8059 20.816 91.6459 21.504 91.6459 22.304C91.6459 23.104 91.8059 23.808 92.1259 24.416C92.4619 25.008 92.8939 25.464 93.4219 25.784C93.9659 26.104 94.5419 26.264 95.1499 26.264C95.7739 26.264 96.3579 26.112 96.9019 25.808C97.4459 25.488 97.8779 25.04 98.1979 24.464C98.5179 23.872 98.6779 23.168 98.6779 22.352ZM108.704 17.768C109.136 17.064 109.696 16.512 110.384 16.112C111.088 15.712 111.888 15.512 112.784 15.512V19.04H111.896C110.84 19.04 110.04 19.288 109.496 19.784C108.968 20.28 108.704 21.144 108.704 22.376V29H105.344V15.704H108.704V17.768ZM127.407 22.064C127.407 22.544 127.375 22.976 127.311 23.36H117.591C117.671 24.32 118.007 25.072 118.599 25.616C119.191 26.16 119.919 26.432 120.783 26.432C122.031 26.432 122.919 25.896 123.447 24.824H127.071C126.687 26.104 125.951 27.16 124.863 27.992C123.775 28.808 122.439 29.216 120.855 29.216C119.575 29.216 118.423 28.936 117.399 28.376C116.391 27.8 115.599 26.992 115.023 25.952C114.463 24.912 114.183 23.712 114.183 22.352C114.183 20.976 114.463 19.768 115.023 18.728C115.583 17.688 116.367 16.888 117.375 16.328C118.383 15.768 119.543 15.488 120.855 15.488C122.119 15.488 123.247 15.76 124.239 16.304C125.247 16.848 126.023 17.624 126.567 18.632C127.127 19.624 127.407 20.768 127.407 22.064ZM123.927 21.104C123.911 20.24 123.599 19.552 122.991 19.04C122.383 18.512 121.639 18.248 120.759 18.248C119.927 18.248 119.223 18.504 118.647 19.016C118.087 19.512 117.743 20.208 117.615 21.104H123.927Z"
                fill="#FCBA2D"
              />
              <path
                d="M137 2L129 5V11.09C129 16.14 132.41 20.85 137 22C141.59 20.85 145 16.14 145 11.09V5L137 2Z"
                fill="#0B677E"
              />
              <path
                d="M139.67 12.99C139.67 13.3367 139.58 13.6633 139.4 13.97C139.227 14.27 138.967 14.52 138.62 14.72C138.28 14.9133 137.877 15.0267 137.41 15.06V15.87H136.77V15.05C136.103 14.99 135.567 14.79 135.16 14.45C134.753 14.1033 134.543 13.6367 134.53 13.05H136.03C136.07 13.53 136.317 13.82 136.77 13.92V12.01C136.29 11.89 135.903 11.77 135.61 11.65C135.317 11.53 135.063 11.3367 134.85 11.07C134.637 10.8033 134.53 10.44 134.53 9.98C134.53 9.4 134.737 8.92667 135.15 8.56C135.57 8.19333 136.11 7.98333 136.77 7.93V7.12H137.41V7.93C138.05 7.98333 138.56 8.17667 138.94 8.51C139.327 8.84333 139.543 9.30333 139.59 9.89H138.08C138.06 9.69667 137.99 9.53 137.87 9.39C137.757 9.24333 137.603 9.14 137.41 9.08V10.97C137.91 11.0967 138.303 11.22 138.59 11.34C138.883 11.4533 139.137 11.6433 139.35 11.91C139.563 12.17 139.67 12.53 139.67 12.99ZM135.99 9.91C135.99 10.13 136.057 10.31 136.19 10.45C136.323 10.5833 136.517 10.6933 136.77 10.78V9.05C136.53 9.08333 136.34 9.17333 136.2 9.32C136.06 9.46667 135.99 9.66333 135.99 9.91ZM137.41 13.94C137.663 13.8933 137.86 13.79 138 13.63C138.147 13.47 138.22 13.2767 138.22 13.05C138.22 12.83 138.15 12.6533 138.01 12.52C137.87 12.3867 137.67 12.2767 137.41 12.19V13.94Z"
                fill="white"
              />
            </svg>
          </ul>
          <ul>
            <li className="text-[14px]  ml-[38px] mb-[31px] font-semibold text-heading-color">
              General
            </li>
            <li>
              {MenuGeneralItems.map((item) => {
                return (
                  <MenuItemCard
                    to={item.path}
                    className={item.className}
                    itemLabel={item.text}
                    svg={item.icon}
                  />
                );
              })}
            </li>
          </ul>
          <div className="pt-[31px] pb-[36.5px]">
            <HrIcon />
          </div>

          <ul className="">
            <li className="text-[14px]  ml-[38px] mb-[31px] font-semibold text-heading-color">
              Other
            </li>
            <li>
              <MenuItemCard
                to={"help-and-support"}
                className={
                  "flex items-center ml-[42.75px] mb-[33px] font-semibold group"
                }
                itemLabel={"Help & Suppor"}
                svg={HelpIcon}
              />
            </li>
            <li>
              <MenuItemCard
                to={"help-and-support"}
                className={
                  "flex items-center ml-[42.75px] mb-[33px] font-semibold group"
                }
                itemLabel={"Logout"}
                svg={LogOutIcon}
              />
            </li>
          </ul>
         
        </div>
      </aside>
    </div>
  );
}
export default SideBar;
