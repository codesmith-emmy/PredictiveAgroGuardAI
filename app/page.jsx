import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    // <div className="relative isolate px-6 pt-14 lg:px-8">
    <main className="grow">
      <Navbar />
      <section id="stack-section--hero">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="absolute inset-0 -z-10" aria-hidden="true">
            <canvas
              width={634}
              height={930}
              style={{ width: 564, height: 827 }}
            />
          </div>
          <div
            className="absolute inset-0 -z-10 -mx-28 rounded-b-[3rem] pointer-events-none overflow-hidden"
            aria-hidden="true"
          >
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 -z-10" />
          </div>
          <div className="pt-48 pb-48 md:pt-48 md:pb-36 xl:pt-64 xl:pb-36">
            <div className="max-w-3xl mx-auto text-center">
              <div className="mb-10">
                <div className="inline-flex relative before:absolute before:inset-0 before:bg-purple-700 before:bg-opacity-80 before:blur-lg px-2 rounded-full">
                  <span className="">
                    <a
                      href="https://www.ycombinator.com/companies/stack-auth"
                      target="_blank"
                    >
                      Powered By IBM Waston AI
                    </a>
                  </span>
                </div>
              </div>
              <h1 className="h1 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4 leading-tight">
                Predict Risk For Your Crops Based On Climate.
              </h1>
              <p className="text-lg text-slate-300 mb-14 ">
              Lorem ipsum dolor sit ame dolorem laborum deleniti perferendis aperiam modi, harum perspiciatis quod a! Cum dolor nisi saepe.
              </p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4 ">
                  <Link
                    href="/dashboard"
                    >
                      <Button className="bg-white text-black hover:bg-white/90 hover:text-black">                         
                          Get started
                      </Button>
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="features" />
      <section id="stack-section--features04" className="relative">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-16 pb-12 md:pt-16 md:pb-20">
            <div className="max-w-3xl pb-12 md:pb-12">
              <h2 className="h2 bg-clip-text text-transparent bg-slate-200 from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
                Features
              </h2>
            </div>
            <div className="divide-y divide-slate-800">
              <div className="py-4 first-of-type:pt-0 last-of-type:pb-0">
                <div>
                  <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-6">
                    Authentication
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-2">
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-2 mb-1">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth={0}
                        viewBox="0 0 15 15"
                        height={22}
                        width={22}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5 4.63601C5 3.76031 5.24219 3.1054 5.64323 2.67357C6.03934 2.24705 6.64582 1.9783 7.5014 1.9783C8.35745 1.9783 8.96306 2.24652 9.35823 2.67208C9.75838 3.10299 10 3.75708 10 4.63325V5.99999H5V4.63601ZM4 5.99999V4.63601C4 3.58148 4.29339 2.65754 4.91049 1.99307C5.53252 1.32329 6.42675 0.978302 7.5014 0.978302C8.57583 0.978302 9.46952 1.32233 10.091 1.99162C10.7076 2.65557 11 3.57896 11 4.63325V5.99999H12C12.5523 5.99999 13 6.44771 13 6.99999V13C13 13.5523 12.5523 14 12 14H3C2.44772 14 2 13.5523 2 13V6.99999C2 6.44771 2.44772 5.99999 3 5.99999H4ZM3 6.99999H12V13H3V6.99999Z"
                          fill="currentColor"
                        />
                      </svg>
                      <h4 className="font-medium text-slate-50">
                        Password, OAuth &amp; magic link
                      </h4>
                    </div>
                    <p className="text-sm text-slate-400 grow">
                      Beautifully styled components to help you get started
                      quickly. No need to worry about design and internal logic.
                    </p>
                    <div className="text-right">
                      <a
                        target="_blank"
                        className="text-sm font-medium text-slate-300 hover:text-white inline-flex items-center transition duration-150 ease-in-out group"
                        href="https://docs.stack-auth.com/getting-started/setup"
                      >
                        Get Started
                        <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                          {"{"}" "{"}"}
                          &gt;
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-2 mb-1">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth={0}
                        viewBox="0 0 15 15"
                        height={22}
                        width={22}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.877197 7.49984C0.877197 3.84216 3.84234 0.877014 7.50003 0.877014C11.1577 0.877014 14.1229 3.84216 14.1229 7.49984C14.1229 11.1575 11.1577 14.1227 7.50003 14.1227C3.84234 14.1227 0.877197 11.1575 0.877197 7.49984ZM7.50003 1.82701C4.36702 1.82701 1.8272 4.36683 1.8272 7.49984C1.8272 10.6328 4.36702 13.1727 7.50003 13.1727C10.633 13.1727 13.1729 10.6328 13.1729 7.49984C13.1729 4.36683 10.633 1.82701 7.50003 1.82701ZM7.12457 9.00001C7.06994 9.12735 6.33165 11.9592 6.33165 11.9592C6.26018 12.226 5.98601 12.3843 5.71928 12.3128C5.45255 12.2413 5.29425 11.9672 5.36573 11.7004C5.36573 11.7004 6.24661 8.87268 6.24661 8.27007V6.80099L4.28763 6.27608C4.0209 6.20461 3.86261 5.93045 3.93408 5.66371C4.00555 5.39698 4.27972 5.23869 4.54645 5.31016C4.54645 5.31016 6.20042 5.87268 6.84579 5.87268H8.15505C8.80042 5.87268 10.4534 5.31042 10.4534 5.31042C10.7202 5.23895 10.9943 5.39724 11.0658 5.66397C11.1373 5.93071 10.979 6.20487 10.7122 6.27635L8.74661 6.80303V8.27007C8.74661 8.87268 9.62663 11.6971 9.62663 11.6971C9.6981 11.9639 9.5398 12.238 9.27307 12.3095C9.00634 12.381 8.73217 12.2227 8.6607 11.956C8.6607 11.956 7.91994 9.12735 7.86866 9.00001C7.81994 8.87268 7.65006 8.87268 7.65006 8.87268H7.34317C7.34317 8.87268 7.16994 8.87268 7.12457 9.00001ZM7.50043 5.12007C8.12175 5.12007 8.62543 4.61639 8.62543 3.99507C8.62543 3.37375 8.12175 2.87007 7.50043 2.87007C6.87911 2.87007 6.37543 3.37375 6.37543 3.99507C6.37543 4.61639 6.87911 5.12007 7.50043 5.12007Z"
                          fill="currentColor"
                        />
                      </svg>
                      <h4 className="font-medium text-slate-50">
                        Headless or headful UI
                      </h4>
                    </div>
                    <p className="text-sm text-slate-400 grow">
                      Integrate our{"{"}" "{"}"}
                      <span className="font-mono font-medium text-slate-200">
                        shadcn/ui
                      </span>
                      {"{"}" "{"}"}
                      components, or build your own with our headless SDK.
                    </p>
                    <div className="text-right">
                      <a
                        target="_blank"
                        className="text-sm font-medium text-slate-300 hover:text-white inline-flex items-center transition duration-150 ease-in-out group"
                        href="https://docs.stack-auth.com/customization/custom-pages"
                      >
                        Learn More{"{"}" "{"}"}
                        <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                          {"{"}" "{"}"}
                          &gt;
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-2 mb-1">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth={0}
                        viewBox="0 0 15 15"
                        height={22}
                        width={22}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.877197 7.49984C0.877197 3.84216 3.84234 0.877014 7.50003 0.877014C11.1577 0.877014 14.1229 3.84216 14.1229 7.49984C14.1229 11.1575 11.1577 14.1227 7.50003 14.1227C3.84234 14.1227 0.877197 11.1575 0.877197 7.49984ZM7.50003 1.82701C4.36702 1.82701 1.8272 4.36683 1.8272 7.49984C1.8272 10.6328 4.36702 13.1727 7.50003 13.1727C10.633 13.1727 13.1729 10.6328 13.1729 7.49984C13.1729 4.36683 10.633 1.82701 7.50003 1.82701ZM7.12457 9.00001C7.06994 9.12735 6.33165 11.9592 6.33165 11.9592C6.26018 12.226 5.98601 12.3843 5.71928 12.3128C5.45255 12.2413 5.29425 11.9672 5.36573 11.7004C5.36573 11.7004 6.24661 8.87268 6.24661 8.27007V6.80099L4.28763 6.27608C4.0209 6.20461 3.86261 5.93045 3.93408 5.66371C4.00555 5.39698 4.27972 5.23869 4.54645 5.31016C4.54645 5.31016 6.20042 5.87268 6.84579 5.87268H8.15505C8.80042 5.87268 10.4534 5.31042 10.4534 5.31042C10.7202 5.23895 10.9943 5.39724 11.0658 5.66397C11.1373 5.93071 10.979 6.20487 10.7122 6.27635L8.74661 6.80303V8.27007C8.74661 8.87268 9.62663 11.6971 9.62663 11.6971C9.6981 11.9639 9.5398 12.238 9.27307 12.3095C9.00634 12.381 8.73217 12.2227 8.6607 11.956C8.6607 11.956 7.91994 9.12735 7.86866 9.00001C7.81994 8.87268 7.65006 8.87268 7.65006 8.87268H7.34317C7.34317 8.87268 7.16994 8.87268 7.12457 9.00001ZM7.50043 5.12007C8.12175 5.12007 8.62543 4.61639 8.62543 3.99507C8.62543 3.37375 8.12175 2.87007 7.50043 2.87007C6.87911 2.87007 6.37543 3.37375 6.37543 3.99507C6.37543 4.61639 6.87911 5.12007 7.50043 5.12007Z"
                          fill="currentColor"
                        />
                      </svg>
                      <h4 className="font-medium text-slate-50">
                        JWTs without the JWTs
                      </h4>
                    </div>
                    <p className="text-sm text-slate-400 grow">
                      Stack manages JWTs and access tokens for you, so you get
                      the performance benefits without ever having to think
                      about them.
                    </p>
                    <div className="text-right">
                      <a
                        target="_blank"
                        className="text-sm font-medium text-slate-300 hover:text-white inline-flex items-center transition duration-150 ease-in-out group"
                        href="https://docs.stack-auth.com/getting-started/users"
                      >
                        Learn More{"{"}" "{"}"}
                        <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                          &gt;
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-4 first-of-type:pt-0 last-of-type:pb-0">
                <div>
                  <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-6">
                    Authorization
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-2">
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-2 mb-1">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth={0}
                        viewBox="0 0 15 15"
                        height={22}
                        width={22}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5 1C5 0.447715 5.44772 0 6 0H9C9.55228 0 10 0.447715 10 1V2H14C14.5523 2 15 2.44772 15 3V6C15 6.8888 14.6131 7.68734 14 8.23608V11.5C14 12.3284 13.3284 13 12.5 13H2.5C1.67157 13 1 12.3284 1 11.5V8.2359C0.38697 7.68721 0 6.88883 0 6V3C0 2.44772 0.447716 2 1 2H5V1ZM9 1V2H6V1H9ZM1 3H5H5.5H9.5H10H14V6C14 6.654 13.6866 7.23467 13.1997 7.6004C12.8655 7.85144 12.4508 8 12 8H8V7.5C8 7.22386 7.77614 7 7.5 7C7.22386 7 7 7.22386 7 7.5V8H3C2.5493 8 2.1346 7.85133 1.80029 7.60022C1.31335 7.23446 1 6.65396 1 6V3ZM7 9H3C2.64961 9 2.31292 8.93972 2 8.82905V11.5C2 11.7761 2.22386 12 2.5 12H12.5C12.7761 12 13 11.7761 13 11.5V8.82915C12.6871 8.93978 12.3504 9 12 9H8V9.5C8 9.77614 7.77614 10 7.5 10C7.22386 10 7 9.77614 7 9.5V9Z"
                          fill="currentColor"
                        />
                      </svg>
                      <h4 className="font-medium text-slate-50">
                        Organizations &amp; teams
                      </h4>
                    </div>
                    <p className="text-sm text-slate-400 grow">
                      Manage B2B customers with orgs &amp; teams, supporting
                      email invitations, team components, and management tools.
                    </p>
                    <div className="text-right">
                      <a
                        target="_blank"
                        className="text-sm font-medium text-slate-300 hover:text-white inline-flex items-center transition duration-150 ease-in-out group"
                        href="https://docs.stack-auth.com/concepts/orgs-and-teams"
                      >
                        Learn More
                        <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                          &gt;
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-2 mb-1">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth={0}
                        viewBox="0 0 15 15"
                        height={22}
                        width={22}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M14 11.0001V4.00006L1 4.00006L1 11.0001H14ZM15 4.00006V11.0001C15 11.5523 14.5523 12.0001 14 12.0001H1C0.447715 12.0001 0 11.5523 0 11.0001V4.00006C0 3.44778 0.447715 3.00006 1 3.00006H14C14.5523 3.00006 15 3.44778 15 4.00006ZM2 5.25C2 5.11193 2.11193 5 2.25 5H5.75C5.88807 5 6 5.11193 6 5.25V9.75C6 9.88807 5.88807 10 5.75 10H2.25C2.11193 10 2 9.88807 2 9.75V5.25ZM7.5 7C7.22386 7 7 7.22386 7 7.5C7 7.77614 7.22386 8 7.5 8H10.5C10.7761 8 11 7.77614 11 7.5C11 7.22386 10.7761 7 10.5 7H7.5ZM7 9.5C7 9.22386 7.22386 9 7.5 9H12.5C12.7761 9 13 9.22386 13 9.5C13 9.77614 12.7761 10 12.5 10H7.5C7.22386 10 7 9.77614 7 9.5ZM7.5 5C7.22386 5 7 5.22386 7 5.5C7 5.77614 7.22386 6 7.5 6H11.5C11.7761 6 12 5.77614 12 5.5C12 5.22386 11.7761 5 11.5 5H7.5Z"
                          fill="currentColor"
                        />
                      </svg>
                      <h4 className="font-medium text-slate-50">
                        Permissions &amp; RBAC
                      </h4>
                    </div>
                    <p className="text-sm text-slate-400 grow">
                      Define arbitrary permission trees and org-wide roles.
                    </p>
                    <div className="text-right">
                      <a
                        target="_blank"
                        className="text-sm font-medium text-slate-300 hover:text-white inline-flex items-center transition duration-150 ease-in-out group"
                        href="https://docs.stack-auth.com/concepts/permissions"
                      >
                        Learn More
                        <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                          &gt;
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-2 mb-1">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth={0}
                        viewBox="0 0 15 15"
                        height={22}
                        width={22}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.62471 4.00001L4.56402 4.00001C4.04134 3.99993 3.70687 3.99988 3.4182 4.055C2.2379 4.28039 1.29846 5.17053 1.05815 6.33035C0.999538 6.61321 0.999604 6.93998 0.999703 7.43689L0.999711 7.50001L0.999703 7.56313C0.999604 8.06004 0.999538 8.38681 1.05815 8.66967C1.29846 9.8295 2.2379 10.7196 3.4182 10.945C3.70688 11.0001 4.04135 11.0001 4.56403 11L4.62471 11H5.49971C5.77585 11 5.99971 10.7762 5.99971 10.5C5.99971 10.2239 5.77585 10 5.49971 10H4.62471C4.02084 10 3.78907 9.99777 3.60577 9.96277C2.80262 9.8094 2.19157 9.21108 2.03735 8.46678C2.00233 8.29778 1.99971 8.08251 1.99971 7.50001C1.99971 6.91752 2.00233 6.70225 2.03735 6.53324C2.19157 5.78895 2.80262 5.19062 3.60577 5.03725C3.78907 5.00225 4.02084 5.00001 4.62471 5.00001H5.49971C5.77585 5.00001 5.99971 4.77615 5.99971 4.50001C5.99971 4.22387 5.77585 4.00001 5.49971 4.00001H4.62471ZM10.3747 5.00001C10.9786 5.00001 11.2104 5.00225 11.3937 5.03725C12.1968 5.19062 12.8079 5.78895 12.9621 6.53324C12.9971 6.70225 12.9997 6.91752 12.9997 7.50001C12.9997 8.08251 12.9971 8.29778 12.9621 8.46678C12.8079 9.21108 12.1968 9.8094 11.3937 9.96277C11.2104 9.99777 10.9786 10 10.3747 10H9.49971C9.22357 10 8.99971 10.2239 8.99971 10.5C8.99971 10.7762 9.22357 11 9.49971 11H10.3747L10.4354 11C10.9581 11.0001 11.2925 11.0001 11.5812 10.945C12.7615 10.7196 13.701 9.8295 13.9413 8.66967C13.9999 8.38681 13.9998 8.06005 13.9997 7.56314L13.9997 7.50001L13.9997 7.43688C13.9998 6.93998 13.9999 6.61321 13.9413 6.33035C13.701 5.17053 12.7615 4.28039 11.5812 4.055C11.2925 3.99988 10.9581 3.99993 10.4354 4.00001L10.3747 4.00001H9.49971C9.22357 4.00001 8.99971 4.22387 8.99971 4.50001C8.99971 4.77615 9.22357 5.00001 9.49971 5.00001H10.3747ZM5.00038 7C4.72424 7 4.50038 7.22386 4.50038 7.5C4.50038 7.77614 4.72424 8 5.00038 8H10.0004C10.2765 8 10.5004 7.77614 10.5004 7.5C10.5004 7.22386 10.2765 7 10.0004 7H5.00038Z"
                          fill="currentColor"
                        />
                      </svg>
                      <h4 className="font-medium text-slate-50">
                        3rd-party OAuth
                      </h4>
                    </div>
                    <p className="text-sm text-slate-400 grow">
                      Access third-party OAuth APIs such as Gmail or OneDrive
                      without having to think about OAuth flows or token
                      refreshes.
                    </p>
                    <div className="text-right">
                      <a
                        target="_blank"
                        className="text-sm font-medium text-slate-300 hover:text-white inline-flex items-center transition duration-150 ease-in-out group"
                        href="https://docs.stack-auth.com/concepts/oauth"
                      >
                        Learn More{"{"}" "{"}"}
                        <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                          -&gt;
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-4 first-of-type:pt-0 last-of-type:pb-0">
                <div>
                  <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-6">
                    User Management
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-2">
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-2 mb-1">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth={0}
                        viewBox="0 0 15 15"
                        height={22}
                        width={22}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.49996 1.80002C4.35194 1.80002 1.79996 4.352 1.79996 7.50002C1.79996 10.648 4.35194 13.2 7.49996 13.2C10.648 13.2 13.2 10.648 13.2 7.50002C13.2 4.352 10.648 1.80002 7.49996 1.80002ZM0.899963 7.50002C0.899963 3.85494 3.85488 0.900024 7.49996 0.900024C11.145 0.900024 14.1 3.85494 14.1 7.50002C14.1 11.1451 11.145 14.1 7.49996 14.1C3.85488 14.1 0.899963 11.1451 0.899963 7.50002Z"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.4999 7.89998H1.49994V7.09998H13.4999V7.89998Z"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.09991 13.5V1.5H7.89991V13.5H7.09991zM10.375 7.49998C10.375 5.32724 9.59364 3.17778 8.06183 1.75656L8.53793 1.24341C10.2396 2.82218 11.075 5.17273 11.075 7.49998 11.075 9.82724 10.2396 12.1778 8.53793 13.7566L8.06183 13.2434C9.59364 11.8222 10.375 9.67273 10.375 7.49998zM3.99969 7.5C3.99969 5.17611 4.80786 2.82678 6.45768 1.24719L6.94177 1.75281C5.4582 3.17323 4.69969 5.32389 4.69969 7.5 4.6997 9.67611 5.45822 11.8268 6.94179 13.2472L6.45769 13.7528C4.80788 12.1732 3.9997 9.8239 3.99969 7.5z"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.49996 3.95801C9.66928 3.95801 11.8753 4.35915 13.3706 5.19448 13.5394 5.28875 13.5998 5.50197 13.5055 5.67073 13.4113 5.83948 13.198 5.89987 13.0293 5.8056 11.6794 5.05155 9.60799 4.65801 7.49996 4.65801 5.39192 4.65801 3.32052 5.05155 1.97064 5.8056 1.80188 5.89987 1.58866 5.83948 1.49439 5.67073 1.40013 5.50197 1.46051 5.28875 1.62927 5.19448 3.12466 4.35915 5.33063 3.95801 7.49996 3.95801zM7.49996 10.85C9.66928 10.85 11.8753 10.4488 13.3706 9.6135 13.5394 9.51924 13.5998 9.30601 13.5055 9.13726 13.4113 8.9685 13.198 8.90812 13.0293 9.00238 11.6794 9.75643 9.60799 10.15 7.49996 10.15 5.39192 10.15 3.32052 9.75643 1.97064 9.00239 1.80188 8.90812 1.58866 8.9685 1.49439 9.13726 1.40013 9.30601 1.46051 9.51924 1.62927 9.6135 3.12466 10.4488 5.33063 10.85 7.49996 10.85z"
                          fill="currentColor"
                        />
                      </svg>
                      <h4 className="font-medium text-slate-50">REST API</h4>
                    </div>
                    <p className="text-sm text-slate-400 grow">
                      Use our client and server APIs to build custom front- and
                      backends.
                    </p>
                    <div className="text-right">
                      <a
                        target="_blank"
                        className="text-sm font-medium text-slate-300 hover:text-white inline-flex items-center transition duration-150 ease-in-out group"
                        href="https://docs.stack-auth.com/rest-api/auth"
                      >
                        Learn More{"{"}" "{"}"}
                        <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                          -&gt;
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-2 mb-1">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth={0}
                        viewBox="0 0 15 15"
                        height={22}
                        width={22}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
                          fill="currentColor"
                        />
                      </svg>
                      <h4 className="font-medium text-slate-50">
                        Impersonation
                      </h4>
                    </div>
                    <p className="text-sm text-slate-400 grow">
                      Impersonate users to debug issues or help your customers.
                    </p>
                    <div className="text-right">
                      <a
                        target="_blank"
                        className="text-sm font-medium text-slate-300 hover:text-white inline-flex items-center transition duration-150 ease-in-out group"
                        href="https://app.stack-auth.com"
                      >
                        Go To Dashboard{"{"}" "{"}"}
                        <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                          -&gt;
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-2 mb-1">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 256 256"
                        height={22}
                        width={22}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M178.16,184H111.32A48,48,0,1,1,25.6,147.19a8,8,0,0,1,12.8,9.61A31.69,31.69,0,0,0,32,176a32,32,0,0,0,64,0,8,8,0,0,1,8-8h74.16a16,16,0,1,1,0,16ZM64,192a16,16,0,0,0,14.08-23.61l35.77-58.14a8,8,0,0,0-2.62-11,32,32,0,1,1,46.1-40.06A8,8,0,1,0,172,52.79a48,48,0,1,0-75.62,55.33L64.44,160c-.15,0-.29,0-.44,0a16,16,0,0,0,0,32Zm128-64a48.18,48.18,0,0,0-18,3.49L142.08,79.6A16,16,0,1,0,128,88l.44,0,35.78,58.15a8,8,0,0,0,11,2.61A32,32,0,1,1,192,208a8,8,0,0,0,0,16,48,48,0,0,0,0-96Z" />
                      </svg>
                      <h4 className="font-medium text-slate-50">Webhooks</h4>
                    </div>
                    <p className="text-sm text-slate-400 grow">
                      Sync with Slack, your database, or any other service.
                    </p>
                    <div className="text-right">
                      <a
                        target="_blank"
                        className="text-sm font-medium text-slate-300 hover:text-white inline-flex items-center transition duration-150 ease-in-out group"
                        href="https://docs.stack-auth.com/concepts/webhooks"
                      >
                        Learn More{"{"}" "{"}"}
                        <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                          -&gt;
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="faqs" />
      <section id="stack-section--faqs" className="relative">
        <div
          className="absolute top-0 -translate-y-1/3 left-1/2 -translate-x-1/2 ml-24 blur-2xl opacity-50 pointer-events-none -z-10"
          aria-hidden="true"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width={434} height={427}>
            <defs>
              <linearGradient
                id="bs3-a"
                x1="19.609%"
                x2="50%"
                y1="14.544%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#6366F1" />
                <stop offset="100%" stopColor="#6366F1" stopOpacity={0} />
              </linearGradient>
            </defs>
            <path
              fill="url(#bs3-a)"
              fillRule="evenodd"
              d="m410 0 461 369-284 58z"
              transform="matrix(1 0 0 -1 -410 427)"
            />
          </svg>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20 border-t [border-image:linear-gradient(to_right,transparent,theme(colors.slate.800),transparent)1]">
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <div>
                <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-3">
                  Getting started with Stack
                </div>
              </div>
              <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
                Everything you need to know
              </h2>
            </div>
            <div className="md:flex md:space-x-12 space-y-8 md:space-y-0">
              <div className="w-full md:w-1/2 space-y-8">
                <div className="space-y-2">
                  <h4 className="font-semibold">
                    Can I integrate Stack into my existing project?
                  </h4>
                  <p className="text-slate-400">
                    Yes! It is very straightforward! Stack does not require any
                    special architecture and can merge well into any Next.js
                    project that uses the App router.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">
                    How do I sync user data with my database?
                  </h4>
                  <p className="text-slate-400">
                    For most of the time, you don't need to sync user data with
                    your database. You can store JSON data in the user object
                    itself. However, if you really need to sync data, you can
                    use our webhooks.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">
                    Can I deploy Stack on my own servers?
                  </h4>
                  <p className="text-slate-400">
                    Yes! Stack is fully open-source and you can self-host it on
                    your own servers.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-8">
                <div className="space-y-2">
                  <h4 className="font-semibold">
                    How can I integrate Stack into my backend?
                  </h4>
                  <p className="text-slate-400">
                    Stack provides a Next.js server side SDK that you can just
                    import and use. If you are using a different language or
                    framework, you can use our REST API.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">
                    Does Stack support SSO with SAML?
                  </h4>
                  <p className="text-slate-400">
                    Yes! Let's get in touch and we can help you.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">
                    What kind of support do you offer?
                  </h4>
                  <p className="text-slate-400">
                    We offer a range of support from data migration to custom
                    on-premise deployments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="stack-section--cta">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="relative px-8 py-12 md:py-20 rounded-[3rem] overflow-hidden">
            <div
              className="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square"
              aria-hidden="true"
            >
              <div className="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-70" />
              <div className="absolute w-1/4 h-1/4 translate-z-0 bg-purple-400 rounded-full blur-[40px]" />
            </div>
            <div
              className="absolute bottom-0 translate-y-1/2 left-0 blur-2xl opacity-50 pointer-events-none -z-10"
              aria-hidden="true"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width={434} height={427}>
                <defs>
                  <linearGradient
                    id="bs5-a"
                    x1="19.609%"
                    x2="50%"
                    y1="14.544%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#A855F7" />
                    <stop offset="100%" stopColor="#6366F1" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#bs5-a)"
                  fillRule="evenodd"
                  d="m0 0 461 369-284 58z"
                  transform="matrix(1 0 0 -1 0 427)"
                />
              </svg>
            </div>
            <div className="max-w-3xl mx-auto text-center">
              <div>
                <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-3">
                  A Platform for Farmers to save future
                </div>
              </div>
              <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
                Start Contributing
              </h2>
              <p className="text-lg text-slate-400 mb-8">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae sed asperiores dolor nesciunt, ducimus consequatur debitis aspernatur? Cupiditate?
              </p>
              <Link href="https://github.com/awaisoem">
                <Button className="bg-white text-black hover:bg-white/90 hover:text-black">                         
                          Github
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
