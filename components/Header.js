import React from "react";
import Image from "next/image";
import {
	MenuIcon,
	SearchIcon,
	ShoppingCartIcon,
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/react"
import { useRouter } from "next/router"
import { selectItems } from "../slices/basketSlice"
import { useSelector } from "react-redux"

const Header = () => {
	const {data: session} = useSession();
	const router = useRouter()
  const items = useSelector(selectItems)

	return (
		<header>
			<div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
				<div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
					<Image
					  onClick={() => router.push("/")}
						src="https://links.papareact.com/f90"
						width={150}
						height={40}
						objectFit="contain"
						className="cursor-pointer"
					/>
				</div>
				{/*Search*/}
				<div className="hidden sm:flex items-center flex-grow cursor-pointer h-10 rounded-md bg-yellow-400 hover:bg-yellow-500">
					<input
						className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
						type="text"
					/>
					<SearchIcon className="h-12 p-4" />
				</div>

				{/*Right*/}
				<div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
					<div onClick={!session ? signIn : signOut} className="link">
						<p>{session ? `Hello, ${session.user?.name}` : "Sign In"}</p>
						<p className="font-extrabold md:text-sm">Account &amp; Lists</p>
					</div>
					<div className="link">
						<p>Returns</p>
						<p className="font-extrabold md:text-sm">&amp; Orders</p>
					</div>
					<div onClick={() => router.push("/checkout")} className="relative link flex items-center">
						<span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-500 text-center rounded-full text-black font-bold">{items.length}</span>
						<ShoppingCartIcon className="h-10"/>
						<p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
					</div>
				</div>
			</div>
			<div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
				<p className="link flex items-center">
					<MenuIcon className="h-6 mr-1"/>
					All
				</p>
				<p className="link">Prime Videos</p>
				<p className="link">Amazon Business</p>
				<p className="link">Today&apos;s Deals</p>
				<p className="hidden lg:inline-flex link">Electronics</p>
				<p className="hidden lg:inline-flex link">Food &amp; Grocery</p>
				<p className="hidden lg:inline-flex link">Prime</p>
				<p className="hidden lg:inline-flex link">Buy Again</p>
				<p className="hidden lg:inline-flex link">Shopper Toolkit</p>
				<p className="hidden lg:inline-flex link">Health &amp; Personal Care</p>
			</div>
		</header>
	);
};

export default Header;
