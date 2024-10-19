"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { regiones } from "@/data/regiones";
import { cn, createUrl } from "@/lib/utils";

const NavbarMobile = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md font-sans lg:hidden">
      <div className="flex items-center justify-between h-16 px-4">
        <Link href="/">
          <Image
            src="/logo2.jpeg"
            alt="Logo"
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <div className="py-4">
              <Accordion type="single" collapsible className="w-full">
                {regiones.map((region) => (
                  <AccordionItem key={region.id} value={`region-${region.id}`}>
                    <AccordionTrigger>{region.name}</AccordionTrigger>
                    <AccordionContent>
                      <Accordion type="single" collapsible className="w-full">
                        {region.subRegions.map((subRegion, subIndex) => (
                          <AccordionItem key={subIndex} value={`subregion-${region.id}-${subIndex}`}>
                            <AccordionTrigger>{subRegion.name}</AccordionTrigger>
                            <AccordionContent>
                              {subRegion.zonas && subRegion.zonas.map((zona, zonaIndex) => (
                                <Link
                                  key={zonaIndex}
                                  href={`/Regiones/${createUrl(region.name)}/${createUrl(subRegion.name)}/${createUrl(zona.name)}`}
                                  className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
                                  onClick={() => setOpen(false)}
                                >
                                  {zona.name}
                                </Link>
                              ))}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default NavbarMobile;