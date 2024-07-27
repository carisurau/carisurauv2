"use client";

import MultipleSelector from "@/components/custom/MultipleSelector";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heart, MapPinIcon, MenuIcon, Star } from "lucide-react";
import Image from "next/image";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const Header = () => (
  <>
    <div className="flex justify-between">
      <Image
        src="/logos/carisurau-purple.png"
        alt="carisurau-logo-purple"
        width={16}
        height={28.28}
      />

      <Sheet>
        <SheetTrigger asChild>
          <MenuIcon
            className="w-8 h-8"
            style={{ color: "var(--foreground)" }}
          />
        </SheetTrigger>
        <SheetContent side="top" className="bg-white">
          <SheetHeader className="flex items-start justify-start">
            <SheetTitle></SheetTitle>
            <Image
              src="/logos/carisurau-purple.png"
              alt="carisurau-logo-purple"
              width={16}
              height={28.28}
            />
          </SheetHeader>
          <div className="pt-6 w-full">
            <Select>
              <SelectTrigger className="bg-white border-b outline-none ring-0 text-brand-primary">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent className="bg-white rounded-xl shadow-xl">
                <SelectItem value="All">All</SelectItem>
                <SelectItem value="surau-only">Surau only</SelectItem>
                <SelectItem value="masjid-only">Masjid only</SelectItem>
              </SelectContent>
            </Select>
            <div className="pt-4">
              <MultipleSelector
                maxSelected={1}
                placeholder="Search..."
                className="rounded-full border-gray-400"
                options={[
                  { value: "1", label: "Surau 1" },
                  { value: "2", label: "Surau 2" },
                  { value: "3", label: "Surau 3" },
                  { value: "4", label: "Surau 4" },
                  { value: "5", label: "Surau 5" },
                  { value: "6", label: "Surau 6" },
                  { value: "7", label: "Surau 7" },
                  { value: "8", label: "Surau 8" },
                  { value: "9", label: "Surau 9" },
                  { value: "10", label: "Surau 10" },
                  { value: "11", label: "Surau 11" },
                  { value: "12", label: "Surau 12" },
                  { value: "13", label: "Surau 13" },
                  { value: "14", label: "Surau 14" },
                  { value: "15", label: "Surau 15" },
                  { value: "16", label: "Surau 16" },
                  { value: "17", label: "Surau 17" },
                  { value: "18", label: "Surau 18" },
                  { value: "19", label: "Surau 19" },
                  { value: "20", label: "Surau 20" },
                ]}
              />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  </>
);

const SurauCard = () => (
  <div className="grid grid-cols-3 overflow-hidden">
    <div className="px-2">
      <div className="relative h-24 w-full rounded-full">
        <Image
          className="h-full w-full object-cover rounded-xl"
          src="/example/masjidputra.jpg"
          alt="Masjid Abidin"
          layout="fill"
        />
        <Heart className="absolute top-2 right-2 h-4 w-4 text-white" />
      </div>
    </div>

    <div className="col-span-2 flex flex-col">
      <div className="uppercase tracking-wide text-sm font-semibold line-clamp-2">
        Masjid Abidin (Masjid Negeri Terengganu)
      </div>
      <div className="flex items-center mt-2">
        <Star className="h-4 w-4" fill="black" />
        <span className="ml-2 text-gray-600">4.0</span>
      </div>
      <div className="flex items-center mt-2">
        <MapPinIcon className="h-4 w-4" />
        <span className="ml-1 font-light">Bandar, Kuala Terengganu</span>
      </div>
    </div>
  </div>
);

export default function Home() {
  return (
    <div className="xl:px-96">
      <Header />
      <div className="pt-6">
        <div>
          <MultipleSelector
            placeholder="Search for a surau..."
            className="rounded-full border-gray-400"
            options={[
              { value: "1", label: "Surau 1" },
              { value: "2", label: "Surau 2" },
              { value: "3", label: "Surau 3" },
              { value: "4", label: "Surau 4" },
              { value: "5", label: "Surau 5" },
              { value: "6", label: "Surau 6" },
              { value: "7", label: "Surau 7" },
              { value: "8", label: "Surau 8" },
              { value: "9", label: "Surau 9" },
              { value: "10", label: "Surau 10" },
              { value: "11", label: "Surau 11" },
              { value: "12", label: "Surau 12" },
              { value: "13", label: "Surau 13" },
              { value: "14", label: "Surau 14" },
              { value: "15", label: "Surau 15" },
              { value: "16", label: "Surau 16" },
              { value: "17", label: "Surau 17" },
              { value: "18", label: "Surau 18" },
              { value: "19", label: "Surau 19" },
              { value: "20", label: "Surau 20" },
            ]}
          />
        </div>
        <div className="pt-2 text-center">
          Can&apos;t find your surau/masjid?
          <Button variant="link" className="text-brand-primary">
            Add here
          </Button>
        </div>
        <Separator className="mt-4" />
        <div className="pt-2">
          <h1 className="text-xl font-bold">Most Viewed</h1>
        </div>
        <div className="pt-4 xl:px-48">
          {/* <MostViewedLists /> */}
          <SurauCard />
        </div>
        <div className="pt-4">
          <div className="flex items-center justify-center flex-col py-2 bg-brand-400">
            <div>Can&apos;t find your surau/masjid?</div>
            <Button variant="link" className=" text-brand-primary">
              Add here
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
