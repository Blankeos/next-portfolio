import {
  IconBriefcase,
  IconChevronLeft,
  IconHome,
  IconPalette,
  IconPen,
  IconSmilingFace,
} from '@/assets/icons';

const SITE_COMMANDS = [
  {
    icon: <IconPalette />,
    label: 'Change theme',
    href: '/',
  },
];

const MAIN_PAGES = [
  {
    icon: <IconHome />,
    label: 'Home',
    href: '/',
  },
  {
    icon: <IconSmilingFace />,
    label: 'About',
    href: '/about',
  },
  {
    icon: <IconBriefcase />,
    label: 'Projects',
    href: '/projects',
  },
  {
    icon: <IconPen />,
    label: 'Blog',
    href: '/blog',
  },
];

import { useThemeContext } from '@/contexts/theme.context';
import { useKeyboard } from '@/hooks/use-keyboard';
import { useHotkeys } from '@mantine/hooks';
import { Content as DialogContent, DialogTitle } from '@radix-ui/react-dialog';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { Kbd } from './kbd';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from './ui/command';
import {
  Dialog,
  DialogOverlay,
  DialogPortal,
  DialogTrigger,
} from './ui/dialog';

export function CmdNav() {
  const router = useRouter();

  const [query, setQuery] = useState('');

  const [isChoosingTheme, setIsChoosingTheme] = useState(false);
  const [isOpen, _setIsOpen] = useState(false);

  function setIsOpen(value: boolean) {
    if (isChoosingTheme) {
      setIsChoosingTheme(false);
    } else {
      _setIsOpen(value);
    }
    setTimeout(() => setQuery(''), 200);
  }

  useHotkeys([
    [
      'mod+k',
      () => {
        setIsOpen(true);
      },
    ],
  ]);

  const { searchPosts, searchProjects } = useSearchContext();

  const [postsResults, setPostsResults] = useState<
    ReturnType<typeof searchPosts>
  >([]);
  const [projectsResults, setProjectsResults] = useState<
    ReturnType<typeof searchProjects>
  >([]);
  const mainPagesResults = useMemo(() => {
    if (!query) return MAIN_PAGES;
    return MAIN_PAGES.filter((_mainPage) =>
      _mainPage.label.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);
  const siteCommandsResults = useMemo(() => {
    if (!query) return SITE_COMMANDS;
    return SITE_COMMANDS.filter((_mainPage) =>
      _mainPage.label.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  const noResults = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    return (
      postsResults.length === 0 &&
      projectsResults.length === 0 &&
      siteCommandsResults.length === 0 &&
      mainPagesResults.length === 0
    );
  }, [
    mainPagesResults.length,
    postsResults.length,
    projectsResults.length,
    siteCommandsResults.length,
  ]);

  function onCommandInputChange(value: string) {
    const _postsResults = searchPosts(value);
    const _projectsResults = searchProjects(value);

    setQuery(value);
    setPostsResults(_postsResults);
    setProjectsResults(_projectsResults);
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger className="border-border bg-muted/50 text-typography-foreground-light text-xxs flex items-center gap-x-2 truncate border px-2 py-1 outline-none">
        Search...
        <Kbd className="flex gap-x-1">
          <span>⌘</span>
          <span>K</span>
        </Kbd>
      </DialogTrigger>

      <DialogPortal>
        <DialogOverlay />

        <DialogContent
          className={cn(
            'top-[8%] left-1/2 -translate-x-1/2',
            '"bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] border-primary duration-200" ap-4 fixed z-50 grid w-full max-w-lg shadow-lg outline-none'
          )}
          // Prevents autoscroll
          onCloseAutoFocus={(e) => e.preventDefault()}
        >
          <div
            aria-hidden
            className="bg-primary absolute -inset-0.5 -z-10 mx-2 rotate-[3deg] rounded-lg"
          />
          <DialogTitle className="hidden">Global search</DialogTitle>
          <div className="bg-background border-primary relative z-10 mx-2 rounded-md border py-1">
            {isChoosingTheme && (
              <ThemeChangeContent
                setIsChoosingTheme={setIsChoosingTheme}
                closeDialog={() => _setIsOpen(false)}
              />
            )}

            {!isChoosingTheme && (
              <Command
                // We'll be filtering manually.
                // Use in combination with the `noResults` for CommandEmpty, and `.map` for the results.
                shouldFilter={false}
              >
                <CommandInput
                  autoFocus
                  value={query}
                  onValueChange={onCommandInputChange}
                  placeholder="Global search..."
                  className="text-base sm:text-sm"
                  onKeyDown={(event) => {
                    // Close
                    if (event.metaKey && event.key === 'k') {
                      setIsOpen(false);
                    }
                  }}
                />
                <CommandList className="no-scrollbar mt-2">
                  {noResults && query?.length > 0 ? (
                    <CommandEmpty>No results found.</CommandEmpty>
                  ) : (
                    <>
                      {siteCommandsResults.length > 0 && (
                        <CommandGroup heading="Site">
                          {siteCommandsResults.map((command) => (
                            <CommandItem
                              key={command.label}
                              onSelect={() => {
                                setIsChoosingTheme(true);
                              }}
                            >
                              {command.icon} {command.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      )}

                      {mainPagesResults.length > 0 && (
                        <CommandGroup heading="Main Pages">
                          {mainPagesResults.map((page) => (
                            <CommandItem
                              key={page.label}
                              onSelect={() => {
                                router.push(page.href);
                                setIsOpen(false);
                              }}
                            >
                              {page.icon} {page.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      )}

                      {postsResults.length > 0 && (
                        <CommandGroup heading="Blog Posts">
                          {postsResults.map((post) => (
                            <CommandItem
                              key={post.slug}
                              onSelect={() => {
                                router.push(`/blog/${post.slug}`);
                                setIsOpen(false);
                              }}
                            >
                              {post.title}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      )}

                      {projectsResults.length > 0 && (
                        <CommandGroup heading="Projects">
                          {projectsResults.map((project) => (
                            <CommandItem
                              key={project.slug}
                              onSelect={() => {
                                router.push(`/projects/${project.slug}`);
                                setIsOpen(false);
                              }}
                            >
                              {project.title}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      )}
                    </>
                  )}
                </CommandList>
              </Command>
            )}
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}

import { useSearchContext } from '@/contexts/search.context';
import { Theme } from '@/contexts/theme.context';
import { cn } from '@/lib/cn';

const themes: { name: Theme; color: string; icon: string }[] = [
  { name: 'light', color: 'bg-neutral-200', icon: '☀️' },
  { name: 'dark', color: 'bg-neutral-800', icon: '🌙' },
  { name: 'system', color: 'bg-zinc-500', icon: '⚙️' },
  { name: 'batman', color: 'bg-yellow-400 text-black', icon: '🦇' },
];

function ThemeChangeContent(props: {
  setIsChoosingTheme: React.Dispatch<React.SetStateAction<boolean>>;
  closeDialog?: () => void;
}) {
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);

  useHotkeys([
    [
      'left',
      () => {
        setCurrentThemeIndex((prev) =>
          prev === 0 ? themes.length - 1 : prev - 1
        );
      },
    ],
    [
      'right',
      () => {
        setCurrentThemeIndex((prev) =>
          prev === themes.length - 1 ? 0 : prev + 1
        );
      },
    ],
    [
      'enter',
      () => {
        props.closeDialog?.();
        setTimeout(() => {
          props.setIsChoosingTheme(false);
        }, 200);
      },
    ],
  ]);

  const { theme, inferredTheme, setTheme } = useThemeContext();

  useKeyboard({
    onKeyDown: (e) => {
      if (e.key === 'ArrowLeft' || e.key === 'h') {
        setCurrentThemeIndex((prev) => {
          const newIndex = prev === 0 ? themes.length - 1 : prev - 1;
          setTheme(themes[newIndex].name);
          return newIndex;
        });
      }
      if (e.key === 'ArrowRight' || e.key === 'l') {
        setCurrentThemeIndex((prev) => {
          const newIndex = prev === themes.length - 1 ? 0 : prev + 1;
          setTheme(themes[newIndex].name);
          return newIndex;
        });
      }
    },
  });

  useEffect(() => {
    const index = themes.findIndex((t) => t.name === theme);
    if (index !== -1) {
      setCurrentThemeIndex(index);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme, themes]);

  return (
    <div className="flex flex-col gap-2 p-6">
      <div className="flex items-center gap-2">
        <button
          onClick={() => props.setIsChoosingTheme(false)}
          className="text-typography-body text-typography-foreground flex items-center gap-x-0 text-xs"
        >
          <IconChevronLeft className="" />
          {/* <Kbd>Esc</Kbd> */}
        </button>

        <p className="text-typography-body text-typography-foreground flex gap-x-2">
          Choose a Theme
          <span className="bg-secondary text-secondary-foreground ml-1 rounded-md px-2 py-1 text-xs font-medium">
            {theme}
            {theme === 'system' ? ` (${inferredTheme})` : ''}
          </span>
        </p>
      </div>
      <div className="flex flex-row gap-2">
        {themes.map((theme, index) => (
          <button
            key={theme.name}
            className={cn(
              'flex h-8 w-12 items-center justify-center rounded-md hover:ring-4',
              theme.color,
              currentThemeIndex === index
                ? 'ring-primary ring-4'
                : 'ring-primary/50 ring-0'
            )}
            onClick={() => {
              setTheme(theme.name);
              setCurrentThemeIndex(index);
            }}
          >
            {theme.icon}
          </button>
        ))}
      </div>
    </div>
  );
}
