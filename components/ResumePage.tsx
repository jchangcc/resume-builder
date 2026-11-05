"use client";

import * as React from "react";
import { useRef } from "react";
import Link from "next/link";
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
import type { ResumeRole } from "@/lib/resume";

export function ResumePage({
  experience,
  documentTitle = "resume",
  variant,
}: {
  experience: ResumeRole[];
  documentTitle?: string;
  variant: "public" | "perm";
}) {
  const [darkMode, setDarkMode] = React.useState(false);
  const [paperSize, setPaperSize] = React.useState<"letter" | "a4">("letter");
  const componentRef = useRef<HTMLDivElement>(null);
  const pageSize = paperSize === "letter" ? "215.9mm 279.4mm" : "210mm 297mm";

  const handlePrint = useReactToPrint({
    documentTitle,
    contentRef: componentRef,
    pageStyle: `
      @page {
        size: ${pageSize};
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
      <style>{`
        @media print {
          @page {
            size: ${pageSize};
            margin: 0;
          }
          html, body {
            margin: 0 !important;
            padding: 0 !important;
            background: white !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          nextjs-portal,
          next-route-announcer {
            display: none !important;
          }
        }
      `}</style>
      <div className="min-h-screen bg-background text-foreground print:min-h-0 print:bg-white">
        <div className="resume-chrome fixed left-4 top-4 z-10 flex gap-2 print:hidden">
          <Button
            variant={variant === "public" ? "default" : "outline"}
            asChild
          >
            <Link href="/">Public</Link>
          </Button>
          <Button variant={variant === "perm" ? "default" : "outline"} asChild>
            <Link href="/perm">PERM dates</Link>
          </Button>
        </div>
        <div className="resume-chrome fixed right-4 top-4 z-10 flex gap-2 print:hidden">
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

        <div className="resume-stage mx-auto p-6 print:m-0 print:p-0">
          <div
            ref={componentRef}
            data-resume-sheet
            className={`resume-sheet mx-auto bg-background p-14 border-2 border-gray-200 dark:border-gray-800 rounded-xl shadow-lg print:rounded-none print:border-0 print:shadow-none print:m-0 ${
              paperSize === "letter"
                ? "h-[279.4mm] w-[215.9mm]"
                : "h-[297mm] w-[210mm]"
            }`}
          >
            <header className="mb-6">
              <h1 className="mb-2 text-3xl font-semibold tracking-tight">
                Jason Chang
              </h1>
              <p className="max-w-[450px] text-sm font-medium mb-1">
                I&apos;m a product designer. I craft human interfaces that
                conform necessary function into intuitive form.
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
            </header>

            {variant === "public" ? (
              <div className="mb-6 border-b border-gray-300 dark:border-gray-800" />
            ) : null}

            <div className="grid grid-cols-[1fr_1fr] gap-10 mb-3">
              <section>
                <div className="mb-5">
                  <h2 className="mb-2 text-base font-semibold">Education</h2>
                  <div>
                    <h3 className="text-sm font-semibold">
                      Carnegie Mellon University
                      {variant === "public" ? (
                        <>
                          {" "}
                          <span className="font-medium text-muted-foreground">
                            2015 - 2018
                          </span>
                        </>
                      ) : null}
                    </h3>
                    {variant === "perm" ? (
                      <p className="text-sm font-medium text-muted-foreground mb-0.5">
                        08/31/2015 – 12/19/2018
                      </p>
                    ) : null}
                    <p className="text-sm">B.S. in Information Systems</p>
                  </div>
                </div>
                <h2 className="mb-2 text-base font-semibold">Experience</h2>

                <div className="space-y-3">
                  {experience.map((role) => (
                    <Experience
                      key={role.title}
                      title={role.title}
                      period={role.period}
                      bullets={role.bullets}
                      variant={variant === "perm" ? "paragraph" : "bullets"}
                    />
                  ))}
                </div>
              </section>

              <div className="space-y-5">
                <div className="space-y-1.5">
                  <h2 className="mb-2 text-base font-semibold">
                    Skills & Tools
                  </h2>
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
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
