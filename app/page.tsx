"use client";

import * as React from "react";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowDownToLine, Moon, Sun } from "lucide-react";
import { Experience } from "@/components/Experience";

export default function Component() {
  const [darkMode, setDarkMode] = React.useState(false);
  const [paperSize, setPaperSize] = React.useState<"letter" | "a4">("letter");
  const componentRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    documentTitle: "resume",
    contentRef: componentRef,
    pageStyle: `
      @page {
        size: ${paperSize === "letter" ? "215.9mm 279.4mm" : "210mm 297mm"};
        margin: 0mm !important;
      }
      @media print {
        html, body {
          width: ${paperSize === "letter" ? "215.9mm" : "210mm"} !important;
          height: ${paperSize === "letter" ? "279.4mm" : "297mm"} !important;
          margin: 0 !important;
          padding: 0 !important;
          box-sizing: border-box !important;
        }
        body {
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }
      }
    `,
    onPrintError: (error) => console.log(error),
    onAfterPrint: () => console.log("Printed successfully"),
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handlePrintClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    handlePrint();
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-background text-foreground">
        {/* Controls */}
        <div className="fixed right-4 top-4 flex gap-2">
          <Button variant="outline" size="icon" onClick={toggleDarkMode}>
            {darkMode ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                {paperSize === "letter" ? "US Letter" : "A4"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setPaperSize("letter")}>
                US Letter
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setPaperSize("a4")}>
                A4
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button onClick={handlePrintClick}>
            <ArrowDownToLine className="h-4 w-4" />
            Export PDF
          </Button>
        </div>

        {/* Resume Content */}
        <div className="mx-auto p-6">
          <div
            ref={componentRef}
            className={`mx-auto bg-background p-14 border-2 border-gray-200 dark:border-gray-800 rounded-xl shadow-lg print:border-0 print:shadow-none ${
              paperSize === "letter"
                ? "h-[279.4mm] w-[215.9mm]"
                : "h-[297mm] w-[210mm]"
            }`}
          >
            {/* Header */}
            <header className="mb-6">
              <h1 className="mb-2 text-3xl font-semibold tracking-tight">
                Jason Chang
              </h1>
              <p className="max-w-[450px] text-sm font-medium mb-1">
                I'm a product designer. I craft human interfaces that conform
                necessary function into intuitive form.
              </p>
              <div className="mb-3 text-sm flex items-center gap-2">
                <a href="https://jchang.cc" className="underline">
                  jchang.cc
                </a>{" "}
                <span className="text-xs font-medium">|</span>
                <a href="mailto:jason@jchang.cc" className="underline">
                  jason@jchang.cc
                </a>
              </div>

              {/* <div>
                <span className="text-sm font-semibold">Design </span>
                <span className="text-sm font-medium text-muted-foreground">
                  Figma, Adobe Creative Suite, Blender
                </span>
              </div>
              <div>
                <span className="text-sm font-semibold">Development </span>
                <span className="text-sm font-medium text-muted-foreground">
                  HTML/CSS, JavaScript, Python, Cursor
                </span>
              </div> */}
            </header>

            <div className="mb-6 border-b border-gray-300 dark:border-gray-800" />
            {/* 
            <div className="space-y-8 mb-8">
              <section>
                <h2 className="mb-2 text-md font-bold">Education</h2>
                <div>
                  <h3 className="text-sm font-semibold">
                    Carnegie Mellon University{" "}
                    <span className="font-medium text-muted-foreground">
                      2015 - 2018
                    </span>
                  </h3>
                  <p className="text-sm">B.S. in Information Systems</p>
                </div>
              </section>
            </div> */}

            <div className="grid grid-cols-[1fr_1fr] gap-10 mb-3">
              <section>
                <div className="mb-5">
                  <h2 className="mb-2 text-base font-semibold">Education</h2>
                  <div>
                    <h3 className="text-sm font-semibold">
                      Carnegie Mellon University{" "}
                      <span className="font-medium text-muted-foreground">
                        2015 - 2018
                      </span>
                    </h3>
                    <p className="text-sm">B.S. in Information Systems</p>
                  </div>
                </div>
                <h2 className="mb-2 text-base font-semibold">Experience</h2>

                <div className="space-y-3">
                  <Experience
                    title="Product Designer at Hedra"
                    period="2025 - Present"
                    bullets={[
                      "Prototyped, designed, and shipped new features and flows, including major UX redesigns.",
                      "Collaborated closely with engineers, cross-functional teams, and leadership on agentic experiences and video timelines.",
                    ]}
                  />

                  <Experience
                    title="Design Engineer at Gumroad (Antiwork)"
                    period="2024 – 2025"
                    bullets={[
                      "Worked with the CEO to ship features for Gumroad, Flexile, and Helper.",
                      "Built designs directly in code and shipped to millions of users.",
                    ]}
                  />

                  <Experience
                    title="UI/UX Designer at Procreate"
                    period="2023 – 2025"
                    bullets={[
                      "Led design for all aspects of user experience for Procreate's digital platforms.",
                      "Advised on product design and brand architecture.",
                    ]}
                  />

                  <Experience
                    title="Product Designer at La Visual"
                    period="2022 – 2023"
                    bullets={[
                      "Designed digital products with clients, such as the NFL and the U.S. Department of Education, focusing on brand identity and intuitive UX.",
                    ]}
                  />

                  <Experience
                    title="UI/UX Designer at Huemor"
                    period="2019 – 2022"
                    bullets={[
                      "Shipped websites for numerous clients across tech, construction, and many other industries.",
                    ]}
                  />
                </div>
              </section>

              <div className="space-y-5">
                <div className="space-y-1.5">
                  <h2 className="mb-2 text-base font-semibold">Skills & Tools</h2>
                  <p className="text-sm">Cursor, Figma, Claude Code, v0</p>
                </div>
                <section>
                  <div className="mb-5">
                    <h2 className="mb-2 text-base font-semibold">Projects</h2>

                    <div className="space-y-3">
                      <Experience
                        title="Agentic Image & Video Creation"
                        period="2025"
                        bullets={[
                          "Designed a video agent that acts as a creative collaborator: users describe what they want, and the agent helps them refine and assemble it on a timeline until they have a video they can export.",
                        ]}
                        variant="paragraph"
                      />

                      <Experience
                        title="AI Video Timeline"
                        period="2025"
                        bullets={[
                          "Designed an AI-powered video timeline and accessible editing experience for creators who prefer simplicity over traditional tools.",
                        ]}
                        variant="paragraph"
                      />

                      <Experience
                        title="Flexile - Payroll & Equity Platform"
                        period="2025"
                        bullets={[
                          "Designed and shipped payment flows and equity management tools for Flexile.",
                        ]}
                        variant="paragraph"
                      />

                      <Experience
                        title="Procreate Help Center Redesign"
                        period="2025"
                        bullets={[
                          "Led redesign of Procreate's Help Center with a new design system and unified forum support.",
                        ]}
                        variant="paragraph"
                      />
                      {/* <Experience
                        title="Procreate Marketing Site Redesign"
                        period="2024"
                        bullets={[
                          "Redesigned Procreate's marketing site, notably the homepage, careers page, and product pages, in preparation for Procreate's unprecedented spotlight on the world stage in Apple's iPad Keynote in May 2024.",
                        ]}
                        variant="paragraph"
                      /> */}

                      {/* <Experience
                        title="Gumroad Marketplace Redesign"
                        period="2024"
                        bullets={[
                          "Designed and shipped a complete redesign of Gumroad's Discover marketplace to increase GMV and improve product discoverability.",
                        ]}
                        variant="paragraph"
                      /> */}

                      <Experience
                        title="Open Source Gumroad's Design System"
                        period="2024"
                        bullets={[
                          "Published Gumroad's design system to the public to support open sourcing Gumroad.",
                        ]}
                        variant="paragraph"
                      />

                      <Experience
                        title="Procreate Dreams Reveal and Launch"
                        period="2023"
                        bullets={[
                          "Designed all digital marketing experiences for the launch of Procreate Dreams, the new flagship animation app from Procreate.",
                        ]}
                        variant="paragraph"
                      />

                      {/* <Experience
                        title="NFL+"
                        period="2022"
                        bullets={[
                          "Designed the landing page experience and branding for the NFL's all-new streaming platform, NFL+.",
                        ]}
                        variant="paragraph"
                      /> */}
                    </div>
                  </div>
                </section>
              </div>
            </div>

            {/* <div className="space-y-8">
              <section>
                <h2 className="mb-2 text-md font-semibold text-muted-foreground">
                    Skills & Tools
                  </h2>
                  <div className="space-y-0">
                    <div>
                      <span className="text-sm font-medium">Design </span><span className="text-sm text-muted-foreground">
                        Product Design, Interaction Design, Graphic Design,
                        Design Sketching, Illustration
                      </span>
                    </div>
                    <div>
                      <span className="text-sm font-semibold">Design </span>
                      <span className="text-sm text-muted-foreground">
                        Figma, Adobe Creative Suite
                      </span>
                    </div>
                    <div>
                      <span className="text-sm font-semibold">Development </span>
                      <span className="text-sm text-muted-foreground">
                        HTML/CSS, JavaScript, Python, Cursor
                      </span>
                    </div>
                  </div>
              </section>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
