"use client";

import { AkarChevronDownIcon } from "@/components/ui/icons/akar-icons-chevron-down";
import { HomeAlt1Icon } from "@/components/ui/icons/akar-icons-home-alt1";
import { AkarPencilIcon } from "@/components/ui/icons/akar-icons-pencil";
import { canvasStorageService } from "@/services/canvasStorage.service";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const [collapsed, setCollapsed] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    {
      href: "/overview",
      label: "Overview",
      Icon: HomeAlt1Icon,
    },
  ];

  const handleCreateCanvas = () => {
    const id = crypto.randomUUID();
    const now = new Date();

    canvasStorageService.saveCanvas({
      id,
      createdAt: now,
      updatedAt: now,
    });

    setCollapsed(true);
    router.push(`/draw/${id}`);
  };

  return (
    <aside
      className={`z-999 fixed left-0 top-0 flex h-screen flex-col border-r
      bg-white/90 border-zinc-200
      dark:bg-black/95 dark:border-zinc-800
      py-8 transition-all duration-300
      ${collapsed ? "w-10 px-2" : "w-56 px-6"}`}
    >
      <button
        type="button"
        onClick={() => setCollapsed((prev) => !prev)}
        className="mb-10 flex items-center gap-2"
      >
        <span
          className="inline-flex h-7 w-7 items-center justify-center rounded-full
          border border-zinc-300 bg-zinc-50
          dark:border-zinc-700 dark:bg-zinc-900"
        >
          <AkarChevronDownIcon
            className={`h-4 w-4 transition-transform duration-300 ${
              collapsed ? "-rotate-90" : "rotate-0"
            }`}
          />
        </span>

        {!collapsed && (
          <Link href="/">
            <span className="text-sm font-medium tracking-[0.2em] uppercase text-zinc-600 dark:text-zinc-400">
              Sketchly
            </span>
          </Link>
        )}
      </button>
      {!collapsed && (
        <>
          <nav className="space-y-1">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.4em] text-zinc-500 dark:text-zinc-500">
              Navigation
            </p>

            <ul className="space-y-1">
              {navItems.map(({ href, label, Icon }) => {
                const isActive = pathname === href;

                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition
                      ${
                        isActive
                          ? "text-zinc-900 dark:text-zinc-100 bg-zinc-100/60 dark:bg-zinc-900/60"
                          : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"
                      }`}
                      onClick={() => setCollapsed(true)}
                    >
                      <Icon />
                      <span className="relative">
                        {label}
                        {isActive && (
                          <span className="absolute left-0 right-0 -bottom-1 h-[2px] rounded-full bg-zinc-900 dark:bg-zinc-100" />
                        )}
                      </span>
                    </Link>
                  </li>
                );
              })}
              <li>
                <button
                  type="button"
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"
                  onClick={handleCreateCanvas}
                >
                  <AkarPencilIcon />
                  <span className="relative">New Canvas</span>
                </button>
              </li>
            </ul>
          </nav>

          <div className="mt-auto pt-8 text-sm text-zinc-500 dark:text-zinc-500">
            <span>© {new Date().getFullYear()} Sketchly</span>
          </div>
        </>
      )}
    </aside>
  );
}
