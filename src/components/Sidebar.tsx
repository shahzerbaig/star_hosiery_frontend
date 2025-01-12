"use client";

import { useState } from "react";
import * as Collapsible from "@radix-ui/react-collapsible";
import Link from "next/link";
//import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/outline";
import { ChevronRightIcon,ChevronLeftIcon } from "@heroicons/react/16/solid";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible.Root
      open={isOpen}
      onOpenChange={setIsOpen}
      className={`flex h-screen`}
    >
      {/* Toggle Button */}
      <Collapsible.Trigger
        className="p-2 bg-gray-100 text-gray-700 hover:bg-gray-200 border rounded-md m-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-label="Toggle sidebar"
      >
        {isOpen ? (
          <ChevronLeftIcon className="w-5 h-5" />
        ) : (
          <ChevronRightIcon className="w-5 h-5" />
        )}
      </Collapsible.Trigger>

      {/* Sidebar Content */}
      <Collapsible.Content
        className={`${
          isOpen ? "w-64" : "w-16"
        } bg-gray-100 h-full p-4 transition-all duration-300`}
      >
        <nav>
          <ul className={`space-y-4 ${isOpen ? "block" : "hidden"} md:block`}>
            <li>
              <Link href="/" className="text-blue-600 font-medium">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/collections" className="text-gray-700">
                Collections
              </Link>
            </li>
            <li>
              <Link href="/bills" className="text-gray-700">
                Bills
              </Link>
            </li>
          </ul>
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  );
};

export default Sidebar;
