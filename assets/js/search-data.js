// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "This page is still under construction, stay tuned!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-move-to-oxford-uk-joining-power-electronics-group-uni-of-oxford-as-post-doctoral-research-associate-under-prof-dan-rogers",
          title: 'Move to Oxford, UK, joining Power Electronics Group, Uni. of Oxford as Post-Doctoral...',
          description: "",
          section: "News",},{id: "news-as-one-of-five-repesentatives-from-university-of-oxford-attending-global-young-scientist-summit-official-report",
          title: 'As one of five repesentatives from University of Oxford attending Global Young Scientist...',
          description: "",
          section: "News",},{id: "news-joining-infineon-technologies-ag-germany-as-a-system-engineer-for-industrial-division",
          title: 'Joining Infineon Technologies AG, Germany, as a System Engineer for Industrial Division',
          description: "",
          section: "News",},{id: "news-being-promoted-to-senior-system-engineer",
          title: 'Being promoted to Senior System Engineer',
          description: "",
          section: "News",},{id: "news-move-to-münich-start-as-a-staff-system-architect-at-infineon-automotive-division-being-resposible-for-aurixtm-microcontroller",
          title: 'Move to Münich, start as a Staff System Architect at Infineon Automotive Division...',
          description: "",
          section: "News",},{id: "news-being-promoted-to-senior-staff-system-architect",
          title: 'Being promoted to Senior Staff System Architect',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
