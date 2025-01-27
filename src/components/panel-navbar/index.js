"use client"

import { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
//   Link,
//   Button,
} from "@heroui/navbar";

import {Link} from "@heroui/link";
import { signOut } from "next-auth/react";
// import {Button, ButtonGroup} from "@heroui/button";
import Image from "next/image";
import {Avatar, AvatarGroup, AvatarIcon} from "@heroui/avatar";
import { Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownItem} from "@heroui/dropdown";
import AxiosInstance from "@/utils/axiosInstance";
import { useRouter } from 'next/navigation'; // or your preferred routing library

export default function PanelNavBar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState("Loading...");
  const [user, setUser] = useState(null);

  const fetchData = async () => {
    try {
      const response = await AxiosInstance.get('/api/info/user');

  setEmail(response.data.email)
      setUser(response.data); // Save data to state
    } catch (err) {
        setEmail('Error loading email')
      setUser(null); // Handle errors
    } finally {
      // setLoading(false); // Set loading to false
    }
  };

  useEffect(() => {
    if(user === null){
        fetchData();
    }
  }); 

  const menuItems = [
    "History",
    "New post",
    "Smart direct",
    "Smart comment",
  ];

  return (
    <Navbar maxWidth={'full'} onMenuOpenChange={setIsMenuOpen} className="bg-[#0a0a0a]">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image
          src={"/images/logo.png"}
          width={55}
          height={55}
          alt="logo"
          />
          <p className="font-bold text-inherit">Gramatic</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarItem isActive>
          <Link color="" className="text-[#84c4eb]" href="/panel/history">
            History
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link aria-current="page" className="text-[#84c4eb]" href="/panel/new">
            New post
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="" className="text-[#84c4eb]" href="/panel/direct">
            Smart direct
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="" className="text-[#84c4eb]" href="/panel/comment">
            Smart comment
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end" className="bg-black">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src={user?.image || "/images/logo.png"}
            />
          </DropdownTrigger>
          <DropdownMenu className="bg-black m-0" aria-label="Profile Actions" variant="flat" onAction={(key) => {
    if (key === 'settings') {
      router.push('/panel/settings');
    }
  }}>
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">{email}</p>
            </DropdownItem>
            <DropdownItem key="settings" href="/panel/settings">Settings</DropdownItem>
            <DropdownItem key="logout" color="danger" onPress={()=> signOut({callbackUrl: "/"})}>
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      <NavbarMenu className="bg-black">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color="primary"
              href={
                index === 0 ? "/panel/history" : index === 1 ? "/panel/new" : index == 2 ? "/panel/direct" : index == 3 ? "/panel/comment" : ""
              }
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
