import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IconArrowRight, IconLayout } from "@tabler/icons-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <Link
              href="https://github.com/your-repo"
              className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
              target="_blank"
            >
              Follow along on GitHub
            </Link>
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
              Your Next.js Application
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Built with Next.js 14 and shadcn/ui. Open source. Free forever.
              Deploy anywhere.
            </p>
            <div className="space-x-4">
              <Link href="/styleguide" passHref>
                <Button size="lg">
                  Get Started
                  <IconArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/styleguide/components" passHref>
                <Button variant="outline" size="lg">
                  Components
                  <IconLayout className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-6 md:px-8 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built with{" "}
            <Link
              href="https://nextjs.org"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Next.js
            </Link>
            . The source code is available on{" "}
            <Link
              href="https://github.com/your-repo"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </Link>
            .
          </p>
        </div>
      </footer>
    </div>
  );
}
