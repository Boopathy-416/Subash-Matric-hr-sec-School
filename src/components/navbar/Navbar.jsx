// import React, { useState } from "react";
// import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "./Ui/NavigationMenu";
// import Button from "./Ui/Button";
// import ListItem from "./Ui/ListItem";

// const academicsPages = [
//   { title: "Curriculum", href: "/curriculum", description: "Our comprehensive academic programs" },
//   { title: "Faculty", href: "/faculty", description: "Meet our experienced teaching staff" },
//   { title: "Departments", href: "/departments", description: "Explore our academic departments" },
//   { title: "Library", href: "/library", description: "Access our learning resources" },
// ];

// const admissionsPages = [
//   { title: "How to Apply", href: "/how-to-apply", description: "Step-by-step application guide" },
//   { title: "Requirements", href: "/requirements", description: "Admission criteria and documents" },
//   { title: "Fees Structure", href: "/fees", description: "Detailed fee information" },
//   { title: "Scholarships", href: "/scholarships", description: "Financial aid opportunities" },
// ];

// const campusLifePages = [
//   { title: "Sports", href: "/sports", description: "Athletic programs and facilities" },
//   { title: "Clubs", href: "/clubs", description: "Student organizations and activities" },
//   { title: "Events", href: "/events", description: "School events and calendar" },
//   { title: "Gallery", href: "/gallery", description: "Photos of school life and activities" },
// ];

// const careerPages = [
//   { title: "Job Openings", href: "/careers/jobs", description: "Current teaching and staff positions" },
//   { title: "Benefits", href: "/careers/benefits", description: "Employee benefits and growth opportunities" },
//   { title: "Apply Now", href: "/careers/apply", description: "Join our educational community" },
// ];

// export default function Navbar() {
//   const [academicsOpen, setAcademicsOpen] = useState(false);
//   const [admissionsOpen, setAdmissionsOpen] = useState(false);
//   const [campusLifeOpen, setCampusLifeOpen] = useState(false);
//   const [careerOpen, setCareerOpen] = useState(false);

//   return (
//     <header className="sticky top-0 z-50 w-full border-b bg-white shadow-md">
//       <div className="container mx-auto flex h-16 items-center px-4">
//         <a href="/" className="flex items-center gap-2 text-xl font-semibold">
//           <span>School Name</span>
//         </a>
//         <NavigationMenu>
//           <NavigationMenuList>
//             <NavigationMenuItem>
//               <NavigationMenuLink href="/">Home</NavigationMenuLink>
//             </NavigationMenuItem>
//             <NavigationMenuItem>
//               <NavigationMenuLink href="/about">About Us</NavigationMenuLink>
//             </NavigationMenuItem>
//             <NavigationMenuItem>
//               <NavigationMenuTrigger onClick={() => setAcademicsOpen(!academicsOpen)}>
//                 Academics
//               </NavigationMenuTrigger>
//               <NavigationMenuContent open={academicsOpen}>
//                 <ul className="grid w-64 gap-3 p-4 bg-white shadow-md">
//                   {academicsPages.map((item) => (
//                     <ListItem key={item.title} title={item.title} href={item.href}>
//                       {item.description}
//                     </ListItem>
//                   ))}
//                 </ul>
//               </NavigationMenuContent>
//             </NavigationMenuItem>
//             <NavigationMenuItem>
//               <NavigationMenuTrigger onClick={() => setAdmissionsOpen(!admissionsOpen)}>
//                 Admissions
//               </NavigationMenuTrigger>
//               <NavigationMenuContent open={admissionsOpen}>
//                 <ul className="grid w-64 gap-3 p-4 bg-white shadow-md">
//                   {admissionsPages.map((item) => (
//                     <ListItem key={item.title} title={item.title} href={item.href}>
//                       {item.description}
//                     </ListItem>
//                   ))}
//                 </ul>
//               </NavigationMenuContent>
//             </NavigationMenuItem>
//             <NavigationMenuItem>
//               <NavigationMenuTrigger onClick={() => setCampusLifeOpen(!campusLifeOpen)}>
//                 Campus Life
//               </NavigationMenuTrigger>
//               <NavigationMenuContent open={campusLifeOpen}>
//                 <ul className="grid w-64 gap-3 p-4 bg-white shadow-md">
//                   {campusLifePages.map((item) => (
//                     <ListItem key={item.title} title={item.title} href={item.href}>
//                       {item.description}
//                     </ListItem>
//                   ))}
//                 </ul>
//               </NavigationMenuContent>
//             </NavigationMenuItem>
//             <NavigationMenuItem>
//               <NavigationMenuTrigger onClick={() => setCareerOpen(!careerOpen)}>
//                 Careers
//               </NavigationMenuTrigger>
//               <NavigationMenuContent open={careerOpen}>
//                 <ul className="grid w-64 gap-3 p-4 bg-white shadow-md">
//                   {careerPages.map((item) => (
//                     <ListItem key={item.title} title={item.title} href={item.href}>
//                       {item.description}
//                     </ListItem>
//                   ))}
//                 </ul>
//               </NavigationMenuContent>
//             </NavigationMenuItem>
//             <NavigationMenuItem>
//               <NavigationMenuLink href="/contact">Contact</NavigationMenuLink>
//             </NavigationMenuItem>
//           </NavigationMenuList>
//         </NavigationMenu>
//         <div className="ml-auto flex items-center gap-4">
//           <Button variant="outline" className="bg-green-500 text-white hover:bg-green-600">
//             Apply Now
//           </Button>
//         </div>
//       </div>
//     </header>
//   );
// }

// is working 
import React from "react";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "./Ui/NavigationMenu";
import Button from "./Ui/Button";
import ListItem from "./Ui/ListItem";

const academicsPages = [
  { title: "Curriculum", href: "/curriculum", description: "Our comprehensive academic programs" },
  { title: "Faculty", href: "/faculty", description: "Meet our experienced teaching staff" },
  { title: "Departments", href: "/departments", description: "Explore our academic departments" },
  { title: "Library", href: "/library", description: "Access our learning resources" },
];

const admissionsPages = [
  { title: "How to Apply", href: "/how-to-apply", description: "Step-by-step application guide" },
  { title: "Requirements", href: "/requirements", description: "Admission criteria and documents" },
  { title: "Fees Structure", href: "/fees", description: "Detailed fee information" },
  { title: "Scholarships", href: "/scholarships", description: "Financial aid opportunities" },
];

const campusLifePages = [
  { title: "Sports", href: "/sports", description: "Athletic programs and facilities" },
  { title: "Clubs", href: "/clubs", description: "Student organizations and activities" },
  { title: "Events", href: "/events", description: "School events and calendar" },
  { title: "Gallery", href: "/gallery", description: "Photos of school life and activities" },
];

const careerPages = [
  { title: "Job Openings", href: "/careers/jobs", description: "Current teaching and staff positions" },
  { title: "Benefits", href: "/careers/benefits", description: "Employee benefits and growth opportunities" },
  { title: "Apply Now", href: "/careers/apply", description: "Join our educational community" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-md">
      <div className="container mx-auto flex h-16 items-center px-4">
        <img src="/assets/icons/boses.png" width="80px"></img>
        <a href="/" className="flex items-center gap-2 text-xl font-semibold">
          <span className="font-black" >Subash school</span>
        </a>
        <NavigationMenu className="ml-6">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="/">
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuLink href="/about">
                About Us
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>
                Academics
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[400px] p-4">
                  <ul className="grid gap-3">
                    {academicsPages.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href}>
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>
                Admissions
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[400px] p-4">
                  <ul className="grid gap-3">
                    {admissionsPages.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href}>
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>
                Campus Life
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[400px] p-4">
                  <ul className="grid gap-3">
                    {campusLifePages.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href}>
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>
                Careers
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[400px] p-4">
                  <ul className="grid gap-3">
                    {careerPages.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href}>
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="/contact">
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="outline" className="bg-green-500 text-white hover:bg-green-600">
            Apply Now
          </Button>
        </div>
      </div>
    </header>
  );
}