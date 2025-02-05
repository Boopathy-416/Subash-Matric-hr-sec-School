import React, { useState } from 'react';
import Button from './Ui/Button';
import ListItem from './Ui/ListItem';

const mobileNavData = {
  mainMenu: [
    { title: 'Home', href: '/' },
    { title: 'About Us', href: '/about' },
  ],
  academics: [
    { title: 'Curriculum', href: '/curriculum', description: 'Our comprehensive academic programs' },
    { title: 'Faculty', href: '/faculty', description: 'Meet our experienced teaching staff' },
    { title: 'Departments', href: '/departments', description: 'Explore our academic departments' },
    { title: 'Library', href: '/library', description: 'Access our learning resources' },
  ],
  admissions: [
    { title: 'How to Apply', href: '/how-to-apply', description: 'Step-by-step application guide' },
    { title: 'Requirements', href: '/requirements', description: 'Admission criteria and documents' },
    { title: 'Fees Structure', href: '/fees', description: 'Detailed fee information' },
    { title: 'Scholarships', href: '/scholarships', description: 'Financial aid opportunities' },
  ],
  campusLife: [
    { title: 'Sports', href: '/sports', description: 'Athletic programs and facilities' },
    { title: 'Clubs', href: '/clubs', description: 'Student organizations and activities' },
    { title: 'Events', href: '/events', description: 'School events and calendar' },
    { title: 'Gallery', href: '/gallery', description: 'Photos of school life and activities' },
  ],
  careers: [
    { title: 'Job Openings', href: '/careers/jobs', description: 'Current teaching and staff positions' },
    { title: 'Benefits', href: '/careers/benefits', description: 'Employee benefits and growth opportunities' },
    { title: 'Apply Now', href: '/careers/apply', description: 'Join our educational community' },
  ],
  contact: { title: 'Contact', href: '/contact' }
};

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setActiveSection(null);
  };

  const renderSubmenu = (items) => (
    <ul className="pl-4 mt-2">
      {items.map((item) => (
        <ListItem 
          key={item.title} 
          title={item.title} 
          href={item.href}
        >
          {item.description}
        </ListItem>
      ))}
    </ul>
  );

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      <div className="lg:hidden">
        <Button 
          onClick={toggleMenu} 
          className="fixed top-4 right-4 z-50 bg-blue-500 text-white p-2 rounded-full"
        >
          {isOpen ? '✕' : '☰'}
        </Button>
      </div>

      {/* Mobile Side Drawer */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={toggleMenu}
        >
          <div 
            className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4">
              {/* Main Menu Items */}
              {mobileNavData.mainMenu.map((item) => (
                <a 
                  key={item.title}
                  href={item.href} 
                  className="block py-2 border-b"
                  onClick={toggleMenu}
                >
                  {item.title}
                </a>
              ))}

              {/* Expandable Sections */}
              <div className="mt-4">
                {/* Academics */}
                <div 
                  className="py-2 border-b flex justify-between items-center"
                  onClick={() => setActiveSection(activeSection === 'academics' ? null : 'academics')}
                >
                  <span>Academics</span>
                  <span>{activeSection === 'academics' ? '▲' : '▼'}</span>
                </div>
                {activeSection === 'academics' && renderSubmenu(mobileNavData.academics)}

                {/* Admissions */}
                <div 
                  className="py-2 border-b flex justify-between items-center"
                  onClick={() => setActiveSection(activeSection === 'admissions' ? null : 'admissions')}
                >
                  <span>Admissions</span>
                  <span>{activeSection === 'admissions' ? '▲' : '▼'}</span>
                </div>
                {activeSection === 'admissions' && renderSubmenu(mobileNavData.admissions)}

                {/* Campus Life */}
                <div 
                  className="py-2 border-b flex justify-between items-center"
                  onClick={() => setActiveSection(activeSection === 'campusLife' ? null : 'campusLife')}
                >
                  <span>Campus Life</span>
                  <span>{activeSection === 'campusLife' ? '▲' : '▼'}</span>
                </div>
                {activeSection === 'campusLife' && renderSubmenu(mobileNavData.campusLife)}

                {/* Careers */}
                <div 
                  className="py-2 border-b flex justify-between items-center"
                  onClick={() => setActiveSection(activeSection === 'careers' ? null : 'careers')}
                >
                  <span>Careers</span>
                  <span>{activeSection === 'careers' ? '▲' : '▼'}</span>
                </div>
                {activeSection === 'careers' && renderSubmenu(mobileNavData.careers)}

                {/* Contact */}
                <a 
                  href={mobileNavData.contact.href} 
                  className="block py-2 border-b"
                  onClick={toggleMenu}
                >
                  {mobileNavData.contact.title}
                </a>
              </div>

              {/* Apply Now Button */}
              <div className="mt-4 px-2">
                <Button className="w-full bg-green-500 text-white">
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNavigation;