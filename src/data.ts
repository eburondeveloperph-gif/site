export type Software = {
  name: string;
  description: string;
  url: string;
  sourceUrl?: string;
  license: string;
  language?: string;
  tags: string[];
};

export type Category = {
  id: string;
  name: string;
  items: Software[];
};

export const categories: Category[] = [
  {
    "id": "analytics",
    "name": "Analytics",
    "items": [
      {
        "name": "ANALOG",
        "description": "A minimal analytics tool. Tracks events in a span of 10-30 days",
        "url": "https://github.com/orangecoloured/analog",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Nodejs/Docker",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Aptabase",
        "description": "Privacy first and simple analytics for mobile and desktop apps",
        "url": "https://aptabase.com/",
        "sourceUrl": "https://github.com/aptabase/aptabase",
        "license": "AGPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "AWStats",
        "description": "Generate statistics from web, streaming, ftp or mail server logfiles. ([Demo](https://www.awstats.org/#DEMO), [Source Code](https://github.com/eldy/awstats))",
        "url": "http://www.awstats.org/",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Perl",
        "tags": [
          "perl"
        ]
      },
      {
        "name": "Countly Community Edition",
        "description": "Real time mobile and web analytics, crash reporting and push notifications platform",
        "url": "https://count.ly",
        "sourceUrl": "https://github.com/Countly/countly-server",
        "license": "AGPL-3.0",
        "language": "Nodejs/Docker",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "d8a.tech",
        "description": "A data collection service that works with your existing Google Analytics setup to capture user activity and send it straight to your own private database. ([Demo](https://lookerstudio.google.com/u/0/reporting/0e4102b6-c38b-4f55-aa25-c1fe91d1c1e9), [Source Code](https://github.com/d8a-tech/d8a))",
        "url": "https://d8a.tech",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Go/Docker",
        "tags": [
          "go"
        ]
      },
      {
        "name": "Daily Stars Explorer",
        "description": "Track GitHub repo trends with daily star insights to see growth and community interest over time. ([Demo](https://emanuelef.github.io/daily-stars-explorer), [Source Code](https://github.com/emanuelef/daily-stars-explorer))",
        "url": "https://emanuelef.github.io/daily-stars-explorer",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Go/Nodejs/Docker",
        "tags": [
          "go"
        ]
      },
      {
        "name": "Druid",
        "description": "Distributed, column-oriented, real-time analytics data store",
        "url": "https://druid.apache.org",
        "sourceUrl": "https://github.com/apache/druid",
        "license": "Apache-2.0",
        "language": "Java/Docker",
        "tags": [
          "java"
        ]
      },
      {
        "name": "EDA",
        "description": "Web application for data analysis and visualization",
        "url": "https://github.com/jortilles/EDA",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Nodejs/Docker",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "GoAccess",
        "description": "Real-time web log analyzer and interactive viewer that runs in a terminal",
        "url": "http://goaccess.io/",
        "sourceUrl": "https://github.com/allinurl/goaccess",
        "license": "GPL-2.0",
        "language": "C",
        "tags": [
          "c"
        ]
      },
      {
        "name": "GoatCounter",
        "description": "Easy web statistics without tracking of personal data",
        "url": "https://www.goatcounter.com",
        "sourceUrl": "https://github.com/arp242/goatcounter",
        "license": "EUPL-1.2",
        "language": "Go",
        "tags": [
          "go"
        ]
      },
      {
        "name": "HitKeep",
        "description": "Privacy-first web analytics with goals, funnels, ecommerce tracking, and team management in a single binary with embedded DuckDB (alternative to Google Analytics, Plausible, Umami)",
        "url": "https://hitkeep.com/",
        "sourceUrl": "https://github.com/pascalebeier/hitkeep",
        "license": "MIT",
        "language": "Go/Docker",
        "tags": [
          "go"
        ]
      },
      {
        "name": "Litlyx",
        "description": "All-in-one Analytics Solution. Setup in 30 seconds. Display all your data on an AI-powered dashboard. Fully self-hostable and GDPR compliant",
        "url": "https://litlyx.com",
        "sourceUrl": "https://github.com/Litlyx/litlyx",
        "license": "Apache-2.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Liwan",
        "description": "Privacy-first web analytics. ([Demo](https://demo.liwan.dev/p/liwan.dev), [Source Code](https://github.com/explodingcamera/liwan))",
        "url": "https://liwan.dev/",
        "sourceUrl": "",
        "license": "Apache-2.0",
        "language": "Rust/Docker",
        "tags": [
          "rust"
        ]
      },
      {
        "name": "Matomo",
        "description": "Web analytics that protects your data and your customers' privacy (alternative to Google Analytics)",
        "url": "https://matomo.org/",
        "sourceUrl": "https://github.com/matomo-org/matomo",
        "license": "GPL-3.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Medama Analytics",
        "description": "Privacy-first website analytics. Tiny, simple, and cookie-free. ([Demo](https://demo.medama.io), [Source Code](https://github.com/medama-io/medama))",
        "url": "https://oss.medama.io",
        "sourceUrl": "",
        "license": "Apache-2.0/MIT",
        "language": "Docker/Go",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Metabase",
        "description": "Easy way for everyone in your company to ask questions and learn from data",
        "url": "https://metabase.com/",
        "sourceUrl": "https://github.com/metabase/metabase",
        "license": "AGPL-3.0",
        "language": "Java/Docker",
        "tags": [
          "java"
        ]
      },
      {
        "name": "Middleware",
        "description": "Tool designed to help engineering leaders measure and analyze the effectiveness of their teams using the DORA metrics",
        "url": "https://middlewarehq.com/",
        "sourceUrl": "https://github.com/middlewarehq/middleware",
        "license": "Apache-2.0",
        "language": "Docker/Python/Nodejs",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Mixpost",
        "description": "Social media management software to easily create, schedule, publish, and manage social media content in one place (alternative to Hootsuite and Buffer)",
        "url": "https://mixpost.app/",
        "sourceUrl": "https://github.com/inovector/MixpostApp",
        "license": "MIT",
        "language": "PHP/Docker",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Netron",
        "description": "Visualizer for neural network and machine learning models",
        "url": "https://netron.app/",
        "sourceUrl": "https://github.com/lutzroeder/netron",
        "license": "MIT",
        "language": "Python/Nodejs",
        "tags": [
          "python"
        ]
      },
      {
        "name": "Offen",
        "description": "Fair, lightweight and open web analytics tool. Gain insights while your users have full access to their data. ([Demo](https://www.offen.dev/try-demo/), [Source Code](https://github.com/offen/offen))",
        "url": "https://www.offen.dev/",
        "sourceUrl": "",
        "license": "Apache-2.0",
        "language": "Go/Docker",
        "tags": [
          "go"
        ]
      },
      {
        "name": "Plausible Analytics",
        "description": "Simple, lightweight (< 1 KB) and privacy-friendly web analytics",
        "url": "https://plausible.io/",
        "sourceUrl": "https://github.com/plausible/analytics/",
        "license": "AGPL-3.0",
        "language": "Elixir",
        "tags": [
          "elixir"
        ]
      },
      {
        "name": "PostHog",
        "description": "Product analytics, session recording, feature flagging and a/b testing that you can self-host (alternative to Mixpanel, Amplitude, Heap, HotJar, Optimizely)",
        "url": "https://posthog.com",
        "sourceUrl": "https://github.com/posthog/posthog",
        "license": "MIT",
        "language": "Python",
        "tags": [
          "python"
        ]
      },
      {
        "name": "Postiz",
        "description": "Schedule posts, track the performance of your content, and manage all your social media accounts in one place (Alternative to Buffer, Hootsuite, Sprout Social)",
        "url": "https://postiz.com",
        "sourceUrl": "https://github.com/gitroomhq/postiz-app",
        "license": "AGPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Prisme Analytics",
        "description": "Privacy-focused and progressive analytics service based on Grafana",
        "url": "https://www.prismeanalytics.com",
        "sourceUrl": "https://github.com/prismelabs/analytics",
        "license": "AGPL-3.0/MIT",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Redash",
        "description": "Connect and query your data sources, build dashboards to visualize data and share them with your company",
        "url": "http://redash.io",
        "sourceUrl": "https://github.com/getredash/redash",
        "license": "BSD-2-Clause",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Rybbit",
        "description": "Web and products analytics that is easy to setup and more intuitive (alternative to Google Analytics). ([Demo](https://demo.rybbit.com/1), [Source Code](https://github.com/rybbit-io/rybbit))",
        "url": "https://rybbit.com/",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Shaper",
        "description": "Build Data Dashboards all in SQL. Powered by DuckDB. ([Demo](https://demo.taleshape.com/view/pvggvdpiwb9wlyppuqbyx0nt), [Source Code](https://github.com/taleshape-com/shaper))",
        "url": "https://taleshape.com/shaper/docs",
        "sourceUrl": "",
        "license": "MPL-2.0",
        "language": "Docker/Nodejs/Python/Go",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Socioboard",
        "description": "Social media management, analytics, and reporting platform supporting nine social media networks out-of-the-box",
        "url": "https://github.com/socioboard/Socioboard-5.0",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Nodejs",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Statistics for Strava",
        "description": "Statistics dashboard generated from Strava data. ([Demo](https://statistics-for-strava.robiningelbrecht.be/))",
        "url": "https://github.com/robiningelbrecht/statistics-for-strava",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Superset",
        "description": "Modern data exploration and visualization platform",
        "url": "http://superset.apache.org/",
        "sourceUrl": "https://github.com/apache/superset",
        "license": "Apache-2.0",
        "language": "Python",
        "tags": [
          "python"
        ]
      },
      {
        "name": "Swetrix",
        "description": "Ultimate, open-source web analytics to satisfy all your needs. ([Demo](https://swetrix.com/projects/STEzHcB1rALV), [Source Code](https://github.com/Swetrix/selfhosting))",
        "url": "https://swetrix.com/",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Umami",
        "description": "Simple, fast, privacy-focused alternative to Google Analytics. ([Demo](https://cloud.umami.is/share/LGazGOecbDtaIwDr), [Source Code](https://github.com/umami-software/umami))",
        "url": "https://umami.is/",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Nodejs/Docker",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Vince",
        "description": "Web analytics and dashboard (alternative to Google Analytics)",
        "url": "https://www.vinceanalytics.com/",
        "sourceUrl": "https://github.com/vinceanalytics/vince",
        "license": "AGPL-3.0",
        "language": "Go/Docker/K8S/deb",
        "tags": [
          "go"
        ]
      }
    ]
  },
  {
    "id": "archiving-and-digital-preservation-dp-",
    "name": "Archiving and Digital Preservation (DP)",
    "items": [
      {
        "name": "ArchiveBox",
        "description": "Create HTML & screenshot archives of sites from your bookmarks, browsing history, RSS feeds, or other sources (alternative to Wayback Machine). ([Demo](https://demo.archivebox.io/), [Source Code](https://github.com/ArchiveBox/ArchiveBox))",
        "url": "https://archivebox.io/",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Python/Docker",
        "tags": [
          "python"
        ]
      },
      {
        "name": "ArchivesSpace",
        "description": "Archives information management application for managing and providing Web access to archives, manuscripts and digital objects. ([Demo](https://archivesspace.org/application/sandbox), [Source Code](https://github.com/archivesspace/archivesspace))",
        "url": "https://archivesspace.org/",
        "sourceUrl": "",
        "license": "ECL-2.0",
        "language": "Ruby",
        "tags": [
          "ruby"
        ]
      },
      {
        "name": "bitmagnet",
        "description": "BitTorrent indexer, DHT crawler, content classifier and torrent search engine with web UI, GraphQL API and Servarr stack integration",
        "url": "https://bitmagnet.io",
        "sourceUrl": "https://github.com/bitmagnet-io/bitmagnet",
        "license": "MIT",
        "language": "Go/Docker",
        "tags": [
          "go"
        ]
      },
      {
        "name": "CKAN",
        "description": "Make open data websites",
        "url": "https://ckan.org",
        "sourceUrl": "https://github.com/ckan/ckan",
        "license": "AGPL-3.0",
        "language": "Python",
        "tags": [
          "python"
        ]
      },
      {
        "name": "Collective Access - Providence",
        "description": "Highly configurable Web-based framework for management, description, and discovery of digital and physical collections supporting a variety of metadata standards, data types, and media formats",
        "url": "https://collectiveaccess.org/",
        "sourceUrl": "https://github.com/collectiveaccess/providence",
        "license": "GPL-3.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Eonvelope",
        "description": "Email archiving software that allows you to preserve your emails for an indefinite long period of time",
        "url": "https://dacid99.gitlab.io/eonvelope",
        "sourceUrl": "https://gitlab.com/dacid99/eonvelope",
        "license": "AGPL-3.0",
        "language": "K8S/Docker",
        "tags": [
          "k8s"
        ]
      },
      {
        "name": "Ganymede",
        "description": "Twitch VOD and live stream archiving platform. Includes a rendered chat for each archive",
        "url": "https://github.com/Zibbp/ganymede",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "mail-archiver",
        "description": "Web application for archiving, searching, and exporting emails from multiple accounts (IMAP, M365 or Import). Featuring folder sync, attachment support, mailbox migration and a dashboard",
        "url": "https://github.com/s1t5/mail-archiver",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Omeka S",
        "description": "Next-generation web publishing platform for institutions interested in connecting digital cultural heritage collections with other resources online",
        "url": "https://omeka.org/s/",
        "sourceUrl": "https://github.com/omeka/omeka-s",
        "license": "GPL-3.0",
        "language": "Nodejs",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Open Archiver",
        "description": "Email archiving solution with full-text search and eDiscovery search features. ([Demo](https://github.com/LogicLabs-OU/OpenArchiver?tab=readme-ov-file#-live-demo), [Source Code](https://github.com/LogicLabs-OU/OpenArchiver))",
        "url": "https://openarchiver.com/",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Piler",
        "description": "Feature-rich email archiving solution",
        "url": "https://www.mailpiler.org/",
        "sourceUrl": "https://github.com/jsuto/piler/",
        "license": "GPL-3.0",
        "language": "C/Docker/deb",
        "tags": [
          "c"
        ]
      },
      {
        "name": "Wallabag",
        "description": "Wallabag, formerly Poche, is a web application allowing you to save articles to read them later with improved readability",
        "url": "https://www.wallabag.org",
        "sourceUrl": "https://github.com/wallabag/wallabag",
        "license": "MIT",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Wayback",
        "description": "A self-hosted toolkit for archiving webpages to the Internet Archive, archive.today, IPFS, and local file systems",
        "url": "https://github.com/wabarc/wayback",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Go",
        "tags": [
          "go"
        ]
      }
    ]
  },
  {
    "id": "automation",
    "name": "Automation",
    "items": [
      {
        "name": "Activepieces",
        "description": "No-code business automation tool like Zapier or Tray. For example, you can send a Slack notification for each new Trello card",
        "url": "https://www.activepieces.com",
        "sourceUrl": "https://github.com/activepieces/activepieces",
        "license": "MIT",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Apache Airflow",
        "description": "Platform to programmatically author, schedule, and monitor workflows",
        "url": "https://airflow.apache.org/",
        "sourceUrl": "https://github.com/apache/airflow/",
        "license": "Apache-2.0",
        "language": "Python/Docker",
        "tags": [
          "python"
        ]
      },
      {
        "name": "Automatisch",
        "description": "Business automation tool that lets you connect different services like Twitter, Slack, and more to automate your business processes (alternative to Zapier)",
        "url": "https://automatisch.io",
        "sourceUrl": "https://github.com/automatisch/automatisch",
        "license": "AGPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "BookBounty",
        "description": "Retrieve missing Readarr books from Library Genesis",
        "url": "https://github.com/TheWicklowWolf/BookBounty",
        "sourceUrl": "",
        "license": "MPL-2.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "changedetection.io",
        "description": "Stay up-to-date with web-site content changes",
        "url": "https://changedetection.io/",
        "sourceUrl": "https://github.com/dgtlmoon/changedetection.io",
        "license": "Apache-2.0",
        "language": "Python/Docker",
        "tags": [
          "python"
        ]
      },
      {
        "name": "ChiefOnboarding",
        "description": "Employee onboarding platform that allows you to provision user accounts and create sequences with todo items, resources, text/email/Slack messages, and more! Available as a web portal and Slack bot",
        "url": "https://chiefonboarding.com",
        "sourceUrl": "https://github.com/chiefonboarding/ChiefOnboarding",
        "license": "AGPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Cronicle",
        "description": "Simple, distributed task scheduler and runner with a web based UI",
        "url": "https://cronicle.net/",
        "sourceUrl": "https://github.com/jhuckaby/Cronicle",
        "license": "MIT",
        "language": "Nodejs",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Cronmaster",
        "description": "Cronjob management UI with human readable syntax, live logging and log history for your cronjobs",
        "url": "https://github.com/fccview/cronmaster",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Dagu",
        "description": "Powerful Cron alternative with a Web UI. It allows you to define dependencies between commands as a Directed Acyclic Graph (DAG) in a declarative YAML format",
        "url": "https://docs.dagu.cloud/",
        "sourceUrl": "https://github.com/dagu-org/dagu",
        "license": "GPL-3.0",
        "language": "Go/Docker",
        "tags": [
          "go"
        ]
      },
      {
        "name": "Discount Bandit",
        "description": "Track pricing, stock status of products across multiple stores such as Amazon, Ebay, Walmart, etc",
        "url": "https://discount-bandit.cybrarist.com/",
        "sourceUrl": "https://github.com/Cybrarist/Discount-Bandit",
        "license": "GPL-3.0",
        "language": "PHP/Docker",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Dittofeed",
        "description": "Omni-channel customer engagement and messaging automation platform (alternative to Braze, Customer.io, Iterable). ([Demo](https://demo.dittofeed.com/dashboard/journeys), [Source Code](https://github.com/dittofeed/dittofeed))",
        "url": "https://www.dittofeed.com",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "feedmixer",
        "description": "Micro web service which takes a list of feed URLs and returns a new feed consisting of the most recent n entries from each given feed (returns Atom, RSS, or JSON). ([Demo](https://mretc.net/feedmixer/json?f=https://hnrss.org/newest&f=https://americancynic.net/atom.xml&n=1))",
        "url": "https://github.com/cristoper/feedmixer",
        "sourceUrl": "",
        "license": "WTFPL",
        "language": "Python",
        "tags": [
          "python"
        ]
      },
      {
        "name": "Fredy",
        "description": "Searches for new apartments, houses, and flats in Germany on platforms like ImmoScout24, Immowelt, and others, and instantly delivers the results to you via Slack, Telegram, and more. ([Demo](https://fredy-demo.orange-coding.net), [Source Code](https://github.com/orangecoding/fredy))",
        "url": "https://fredy.orange-coding.net/",
        "sourceUrl": "",
        "license": "Apache-2.0",
        "language": "Nodejs/Docker",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Github Ntfy",
        "description": "Push notifications to NTFY, Gotify, Discord or Slack when a new release is available on Docker Hub or Github. ([Clients](https://github.com/binwiederhier/ntfy))",
        "url": "https://github.com/BreizhHardware/ntfy_alerts",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Rust/Docker",
        "tags": [
          "rust"
        ]
      },
      {
        "name": "gocron",
        "description": "Task scheduler that allows users to specify recurring jobs via a simple YAML configuration file",
        "url": "https://github.com/flohoss/gocron",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "HandBrake Web",
        "description": "Use one or more instances of HandBrake video transcoder on a headless device via a web interface",
        "url": "https://github.com/TheNickOfTime/handbrake-web",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Healthchecks",
        "description": "Listen for pings and sends alerts when pings are late",
        "url": "https://healthchecks.io/",
        "sourceUrl": "https://github.com/healthchecks/healthchecks",
        "license": "BSD-3-Clause",
        "language": "Python/Docker",
        "tags": [
          "python"
        ]
      },
      {
        "name": "Huginn",
        "description": "Build agents that monitor and act on your behalf",
        "url": "https://github.com/huginn/huginn",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Ruby",
        "tags": [
          "ruby"
        ]
      },
      {
        "name": "Kestra",
        "description": "Event-driven, language-agnostic platform to create, schedule, and monitor workflows. In code. Coordinate data pipelines and tasks such as ETL and ELT",
        "url": "https://kestra.io",
        "sourceUrl": "https://github.com/kestra-io/kestra",
        "license": "Apache-2.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Kibitzr",
        "description": "Lightweight personal web assistant with powerful integrations",
        "url": "https://kibitzr.github.io",
        "sourceUrl": "https://github.com/kibitzr/kibitzr",
        "license": "MIT",
        "language": "Python",
        "tags": [
          "python"
        ]
      },
      {
        "name": "LazyLibrarian",
        "description": "Follow authors and grab metadata for all your digital reading needs. It uses a combination of Goodreads, Librarything and optionally GoogleBooks as sources for author info and book info",
        "url": "https://gitlab.com/LazyLibrarian/LazyLibrarian",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Python",
        "tags": [
          "python"
        ]
      },
      {
        "name": "Leon",
        "description": "Personal assistant who can live on your server",
        "url": "https://getleon.ai",
        "sourceUrl": "https://github.com/leon-ai/leon",
        "license": "MIT",
        "language": "Nodejs",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Matchering",
        "description": "Automated music mastering (alternative to LANDR, eMastered and MajorDecibel)",
        "url": "https://github.com/sergree/matchering",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Mylar3",
        "description": "Automated Comic Book (cbr/cbz) downloader program for use with NZB and torrents",
        "url": "https://mylarcomics.com/",
        "sourceUrl": "https://github.com/mylar3/mylar3",
        "license": "GPL-3.0",
        "language": "Python/Docker",
        "tags": [
          "python"
        ]
      },
      {
        "name": "OliveTin",
        "description": "Web interface for running Linux shell commands",
        "url": "https://www.olivetin.app/",
        "sourceUrl": "https://github.com/OliveTin/OliveTin",
        "license": "AGPL-3.0",
        "language": "Go",
        "tags": [
          "go"
        ]
      },
      {
        "name": "pyLoad",
        "description": "Lightweight, customizable and remotely manageable downloader for 1-click-hosting sites like rapidshare.com or uploaded.to",
        "url": "https://pyload.net/",
        "sourceUrl": "https://github.com/pyload/pyload",
        "license": "AGPL-3.0",
        "language": "Python",
        "tags": [
          "python"
        ]
      },
      {
        "name": "StackStorm",
        "description": "StackStorm (aka _IFTTT for Ops_) is event-driven automation for auto-remediation, security responses, troubleshooting, deployments, and more. Includes rules engine, workflow, 160 integration packs with 6000+ actions and ChatOps",
        "url": "https://stackstorm.com",
        "sourceUrl": "https://github.com/StackStorm/st2",
        "license": "Apache-2.0",
        "language": "Python",
        "tags": [
          "python"
        ]
      },
      {
        "name": "µTask",
        "description": "Automation engine that models and executes business processes declared in yaml",
        "url": "https://github.com/ovh/utask",
        "sourceUrl": "",
        "license": "BSD-3-Clause",
        "language": "Go/Docker",
        "tags": [
          "go"
        ]
      }
    ]
  },
  {
    "id": "blogging-platforms",
    "name": "Blogging Platforms",
    "items": [
      {
        "name": "Antville",
        "description": "Free, open source project aimed at the development of a high performance, feature rich weblog hosting software",
        "url": "https://antville.org",
        "sourceUrl": "https://github.com/antville/antville",
        "license": "Apache-2.0",
        "language": "Javascript",
        "tags": [
          "javascript"
        ]
      },
      {
        "name": "Castopod",
        "description": "Podcast management hosting platform that includes the latest podcast 2.0 standards, an automated Fediverse feed, analytics, an embeddable player, and more",
        "url": "https://castopod.org",
        "sourceUrl": "https://code.castopod.org/adaures/castopod",
        "license": "AGPL-3.0",
        "language": "PHP/Docker",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Chyrp Lite",
        "description": "Extra-awesome, extra-lightweight blog engine",
        "url": "https://chyrplite.net",
        "sourceUrl": "https://github.com/xenocrat/chyrp-lite",
        "license": "BSD-3-Clause",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Dotclear",
        "description": "Take control over your blog",
        "url": "https://git.dotclear.org/dev/dotclear",
        "sourceUrl": "",
        "license": "GPL-2.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Ech0",
        "description": "Lightweight federated publishing platform focused on personal idea sharing (documentation in Chinese). ([Demo](https://memo.vaaat.com/), [Source Code](https://github.com/lin-snow/Ech0))",
        "url": "https://echo.soopy.cn/",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Docker/K8S",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "FlatPress",
        "description": "A lightweight, easy-to-set-up flat-file blogging engine",
        "url": "https://flatpress.org/",
        "sourceUrl": "https://github.com/flatpressblog/flatpress",
        "license": "GPL-2.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "fx",
        "description": "Micro-blog tool offering built-in syntax highlighting, mobile publishing and more (alternative to Twitter, Bluesky)",
        "url": "https://github.com/rikhuijzer/fx",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Ghost",
        "description": "Just a blogging platform",
        "url": "https://ghost.org/",
        "sourceUrl": "https://github.com/TryGhost/Ghost",
        "license": "MIT",
        "language": "Nodejs",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Haven",
        "description": "Private blogging system with markdown editing and built in RSS reader. ([Demo](https://havenweb.org/demo.html), [Source Code](https://github.com/havenweb/haven))",
        "url": "https://havenweb.org/",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Ruby",
        "tags": [
          "ruby"
        ]
      },
      {
        "name": "HTMLy",
        "description": "Databaseless PHP blogging platform. A flat-file CMS that allows you to create a fast, secure, and powerful website or blog in seconds. ([Demo](http://demo.htmly.com/), [Source Code](https://github.com/danpros/htmly))",
        "url": "https://www.htmly.com/",
        "sourceUrl": "",
        "license": "GPL-2.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Known",
        "description": "Collaborative social publishing platform",
        "url": "https://withknown.com/",
        "sourceUrl": "https://github.com/idno/idno",
        "license": "Apache-2.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Mataroa",
        "description": "Naked blogging platform for minimalists",
        "url": "https://mataroa.blog/",
        "sourceUrl": "https://github.com/mataroablog/mataroa",
        "license": "MIT",
        "language": "Python",
        "tags": [
          "python"
        ]
      },
      {
        "name": "PluXml",
        "description": "XML-based blog/CMS platform",
        "url": "https://pluxml.org",
        "sourceUrl": "https://github.com/pluxml/PluXml",
        "license": "GPL-3.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Serendipity",
        "description": "Serendipity (s9y) is a highly extensible and customizable PHP blog engine using Smarty templating",
        "url": "https://docs.s9y.org/",
        "sourceUrl": "https://github.com/s9y/serendipity",
        "license": "BSD-3-Clause",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "WriteFreely",
        "description": "Writing software for starting a minimalist, federated blog — or an entire community",
        "url": "https://writefreely.org",
        "sourceUrl": "https://github.com/writefreely/writefreely",
        "license": "AGPL-3.0",
        "language": "Go",
        "tags": [
          "go"
        ]
      }
    ]
  },
  {
    "id": "booking-and-scheduling",
    "name": "Booking and Scheduling",
    "items": [
      {
        "name": "Alf.io",
        "description": "Ticket reservation system. ([Demo](https://demo.alf.io/authentication), [Source Code](https://github.com/alfio-event/alf.io))",
        "url": "https://alf.io/",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Java",
        "tags": [
          "java"
        ]
      },
      {
        "name": "Cal.com",
        "description": "Online appointment scheduling system. ([Demo](https://app.cal.com/bailey), [Source Code](https://github.com/calcom/cal.com))",
        "url": "https://cal.com/",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Nodejs",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Easy!Appointments",
        "description": "Allows your customers to book appointments with you via the web. ([Demo](https://demo.easyappointments.org/), [Source Code](https://github.com/alextselegidis/easyappointments))",
        "url": "https://easyappointments.org/",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Hi.Events",
        "description": "Event management and ticketing platform for conferences, concerts, and more. Offering customizable event pages and embeddable ticket widgets. ([Demo](https://demo.hi.events/event/1/dog-conf-2030), [Source Code](https://github.com/HiEventsDev/hi.events))",
        "url": "https://hi.events",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "LibreBooking",
        "description": "Resource scheduling solution offering a flexible, mobile-friendly, and extensible interface for organizations to manage resource reservations. ([Demo](https://librebooking-demo.fly.dev/), [Source Code](https://github.com/LibreBooking/librebooking))",
        "url": "https://librebooking.readthedocs.io/",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "PHP/Docker",
        "tags": [
          "php"
        ]
      },
      {
        "name": "QloApps",
        "description": "Customizable and intuitive web-based hotel reservation system and a booking engine. ([Demo](https://demo.qloapps.com/), [Source Code](https://github.com/Qloapps/QloApps))",
        "url": "https://qloapps.com/",
        "sourceUrl": "",
        "license": "OSL-3.0",
        "language": "PHP/Nodejs",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Rallly",
        "description": "Create polls to vote on dates and times (alternative to Doodle). ([Demo](https://app.rallly.co), [Source Code](https://github.com/lukevella/rallly))",
        "url": "https://rallly.co",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Nodejs/Docker",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Seatsurfing",
        "description": "Webbased app to book seats, desks and rooms for offices",
        "url": "https://seatsurfing.app/",
        "sourceUrl": "https://github.com/seatsurfing/seatsurfing",
        "license": "GPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      }
    ]
  },
  {
    "id": "bookmarks-and-link-sharing",
    "name": "Bookmarks and Link Sharing",
    "items": [
      {
        "name": "Briefkasten",
        "description": "Modern app for saving and managing your own bookmarks. Includes a browser extension. ([Demo](https://briefkastenhq.com/auth/signin))",
        "url": "https://github.com/ndom91/briefkasten",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Nodejs/Docker",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Buku",
        "description": "Powerful bookmark manager and a personal textual mini-web",
        "url": "https://github.com/jarun/Buku",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Python/deb",
        "tags": [
          "python"
        ]
      },
      {
        "name": "Digibunch",
        "description": "Create bunches of links to share with your learners or colleagues. ([Demo](https://ladigitale.dev/digibunch/#/b/5f67b12092b60), [Source Code](https://codeberg.org/ladigitale/digibunch))",
        "url": "https://ladigitale.dev/digibunch/#/",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Nodejs/PHP",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Espial",
        "description": "An open-source, web-based bookmarking server",
        "url": "https://github.com/jonschoning/espial",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Haskell",
        "tags": [
          "haskell"
        ]
      },
      {
        "name": "Firefox Account Server",
        "description": "Host your own Firefox accounts server",
        "url": "https://mozilla-services.readthedocs.io/en/latest/howtos/run-fxa.html",
        "sourceUrl": "https://github.com/mozilla/fxa",
        "license": "MPL-2.0",
        "language": "Nodejs/Java",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Grimoire",
        "description": "Bookmark manager with a modern UI, automatic content & metadata extraction, categorization, filtering, and more. It has fully documented REST API, and Docker image for easy deployment",
        "url": "https://grimoire.pro",
        "sourceUrl": "https://github.com/goniszewski/grimoire",
        "license": "MIT",
        "language": "Nodejs/Docker",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Karakeep",
        "description": "Bookmark-everything app with a touch of AI for the data hoarders out there. ([Demo](https://try.karakeep.app/signin), [Source Code](https://github.com/karakeep-app/karakeep))",
        "url": "https://karakeep.app/",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "LinkAce",
        "description": "Bookmark archive with automatic backups to the Internet Archive, link monitoring, and a full REST API. Installation is done via Docker, or as a simple PHP application. ([Demo](https://demo.linkace.org/guest/links), [Source Code](https://github.com/Kovah/LinkAce/))",
        "url": "https://www.linkace.org/",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Docker/PHP",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "linkding",
        "description": "Minimal bookmark management with a fast and clean UI. Simple installation through Docker and can run on your Raspberry Pi. ([Demo](https://demo.linkding.link/login/), [Source Code](https://github.com/sissbruecker/linkding))",
        "url": "https://linkding.link/",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "LinkWarden",
        "description": "Bookmark and archive manager to store your useful links",
        "url": "https://linkwarden.app/",
        "sourceUrl": "https://github.com/linkwarden/linkwarden",
        "license": "MIT",
        "language": "Docker/Nodejs",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "NeonLink",
        "description": "Bookmark service with unique design and simple installation with Docker",
        "url": "https://github.com/AlexSciFier/neonlink",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Readeck",
        "description": "Save the precious readable content of web pages you like and want to keep forever. See it as a bookmark manager and a read later tool. ([Source Code](https://codeberg.org/readeck/readeck), [Clients](https://codeberg.org/readeck/browser-extension))",
        "url": "https://readeck.org/en/",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Go/Docker",
        "tags": [
          "go"
        ]
      },
      {
        "name": "Servas",
        "description": "A self-hosted bookmark management tool. It allows organization with tags, groups, and a list specifically for later access. It supports multiple users with 2FA. Companion browser extensions are available for Firefox and Chrome. ([Clients](https://github.com/beromir/Servas#browser-extensions))",
        "url": "https://github.com/beromir/Servas",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Docker/Nodejs/PHP",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Shaarli",
        "description": "Personal, minimalist, super-fast, no-database bookmarking and link sharing platform. ([Demo](https://demo.shaarli.org))",
        "url": "https://github.com/shaarli/Shaarli",
        "sourceUrl": "",
        "license": "Zlib",
        "language": "PHP/deb",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Shiori",
        "description": "Simple bookmark manager built with Go",
        "url": "https://github.com/go-shiori/shiori",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Go/Docker",
        "tags": [
          "go"
        ]
      },
      {
        "name": "Slash",
        "description": "An open source, self-hosted bookmarks and link sharing platform",
        "url": "https://github.com/yourselfhosted/slash",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "SyncMarks",
        "description": "Sync and manage your browser bookmarks from Edge, Firefox and Chromium. ([Clients](https://codeberg.org/Offerel/SyncMarks-Extension))",
        "url": "https://codeberg.org/Offerel/SyncMarks-Webapp",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      }
    ]
  },
  {
    "id": "calendar-contacts",
    "name": "Calendar & Contacts",
    "items": [
      {
        "name": "Baïkal",
        "description": "Lightweight CalDAV and CardDAV server based on sabre/dav",
        "url": "https://sabre.io/baikal/",
        "sourceUrl": "https://github.com/sabre-io/Baikal",
        "license": "GPL-3.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "DAViCal",
        "description": "Server for calendar sharing (CalDAV) that uses a PostgreSQL database as a data store",
        "url": "https://www.davical.org/",
        "sourceUrl": "https://gitlab.com/davical-project/davical",
        "license": "GPL-2.0",
        "language": "PHP/deb",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Davis",
        "description": "A simple, dockerizable and fully translatable admin interface for sabre/dav based on Symfony 5 and Bootstrap 4, largely inspired by Baïkal",
        "url": "https://github.com/tchapi/davis",
        "sourceUrl": "",
        "license": "MIT",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Manage My Damn Life",
        "description": "Manage my Damn Life (MMDL) is a self-hosted front end for managing your CalDAV tasks and calendars",
        "url": "https://intri.in/manage-my-damn-life/",
        "sourceUrl": "https://github.com/intri-in/manage-my-damn-life-nextjs",
        "license": "GPL-3.0",
        "language": "Nodejs/Docker",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Radicale",
        "description": "Simple calendar and contact server with extremely low administrative overhead",
        "url": "https://radicale.org/",
        "sourceUrl": "https://github.com/Kozea/Radicale",
        "license": "GPL-3.0",
        "language": "Python/deb",
        "tags": [
          "python"
        ]
      },
      {
        "name": "SabreDAV",
        "description": "Open source CardDAV, CalDAV, and WebDAV framework and server",
        "url": "https://sabre.io/",
        "sourceUrl": "https://github.com/sabre-io/dav",
        "license": "MIT",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Xandikos",
        "description": "Open source CardDAV and CalDAV server with minimal administrative overhead, backed by a Git repository",
        "url": "https://github.com/jelmer/xandikos",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Python/deb",
        "tags": [
          "python"
        ]
      }
    ]
  },
  {
    "id": "communication-custom-communication-systems",
    "name": "Communication - Custom Communication Systems",
    "items": [
      {
        "name": "AnyCable",
        "description": "Realtime server for reliable two-way communication over WebSockets, Server-sent events, etc. ([Demo](https://demo.anycable.io), [Source Code](https://github.com/anycable/anycable))",
        "url": "https://anycable.io/",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Go/Docker",
        "tags": [
          "go"
        ]
      },
      {
        "name": "Apprise",
        "description": "Apprise allows you to send a notification to almost all of the most popular notification services available to us today such as: Telegram, Discord, Slack, Amazon SNS, Gotify, etc",
        "url": "https://github.com/caronc/apprise",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Python/Docker/deb",
        "tags": [
          "python"
        ]
      },
      {
        "name": "Centrifugo",
        "description": "Language-agnostic real-time messaging (Websocket or SockJS) server. ([Demo](https://github.com/centrifugal/centrifugo#demo), [Source Code](https://github.com/centrifugal/centrifugo))",
        "url": "https://centrifugal.dev/",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Go/Docker/K8S",
        "tags": [
          "go"
        ]
      },
      {
        "name": "Chitchatter",
        "description": "Peer-to-peer chat app that is serverless, decentralized, and ephemeral",
        "url": "https://chitchatter.im/",
        "sourceUrl": "https://github.com/jeremyckahn/chitchatter",
        "license": "GPL-2.0",
        "language": "Nodejs",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Conduit",
        "description": "A simple, fast, and reliable chat server powered by Matrix",
        "url": "https://conduit.rs/",
        "sourceUrl": "https://gitlab.com/famedly/conduit",
        "license": "Apache-2.0",
        "language": "Rust",
        "tags": [
          "rust"
        ]
      },
      {
        "name": "Databag",
        "description": "Federated, end-to-end encrypted messaging service for the web, iOS, and Android, supporting text, photos, video, and WebRTC video and audio calls. ([Demo](https://databag.coredb.org/#/create))",
        "url": "https://github.com/balzack/databag",
        "sourceUrl": "",
        "license": "Apache-2.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Element",
        "description": "Fully-featured Matrix client for Web, iOS & Android",
        "url": "https://element.io",
        "sourceUrl": "https://github.com/element-hq/element-web",
        "license": "Apache-2.0",
        "language": "Nodejs",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "GlobaLeaks",
        "description": "Whistleblowing software enabling anyone to easily set up and maintain a secure reporting platform. ([Demo](https://demo.globaleaks.org), [Source Code](https://github.com/globaleaks/globaleaks-whistleblowing-software))",
        "url": "https://www.globaleaks.org/",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Python/deb/Docker",
        "tags": [
          "python"
        ]
      },
      {
        "name": "GNUnet",
        "description": "Software framework for decentralized, peer-to-peer networking",
        "url": "https://gnunet.org/",
        "sourceUrl": "https://gnunet.org/git/",
        "license": "GPL-3.0",
        "language": "C",
        "tags": [
          "c"
        ]
      },
      {
        "name": "Gotify",
        "description": "Notification server with Android and CLI clients (alternative to PushBullet). ([Source Code](https://github.com/gotify/server), [Clients](https://github.com/gotify/android))",
        "url": "https://gotify.net/",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Go/Docker",
        "tags": [
          "go"
        ]
      },
      {
        "name": "Hyphanet",
        "description": "Anonymously share files, browse and publish _freesites_ (web sites accessible only through Hyphanet) and chat on forums",
        "url": "https://hyphanet.org/",
        "sourceUrl": "https://github.com/hyphanet/fred",
        "license": "GPL-2.0",
        "language": "Java",
        "tags": [
          "java"
        ]
      },
      {
        "name": "Jami",
        "description": "Universal communication platform which preserves the user's privacy and freedoms",
        "url": "https://jami.net/",
        "sourceUrl": "https://git.jami.net/savoirfairelinux?sort=latest_activity_desc&filter=jami",
        "license": "GPL-3.0",
        "language": "C++",
        "tags": [
          "c++"
        ]
      },
      {
        "name": "Live Helper Chat",
        "description": "Live Support chat for your website",
        "url": "https://livehelperchat.com/",
        "sourceUrl": "https://github.com/LiveHelperChat/livehelperchat",
        "license": "Apache-2.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Mumble",
        "description": "Low-latency, high quality voice/text chat software. ([Source Code](https://github.com/mumble-voip/mumble), [Clients](https://wiki.mumble.info/wiki/3rd_Party_Applications))",
        "url": "https://wiki.mumble.info/wiki/Main_Page",
        "sourceUrl": "",
        "license": "BSD-3-Clause",
        "language": "C++/deb",
        "tags": [
          "c++"
        ]
      },
      {
        "name": "Notifo",
        "description": "Multichannel notification server with support for Email, Mobile Push, Web Push, SMS, messaging and a javascript plugin",
        "url": "https://github.com/notifo-io/notifo",
        "sourceUrl": "",
        "license": "MIT",
        "language": "C#",
        "tags": [
          "c#"
        ]
      },
      {
        "name": "Novu",
        "description": "Notification infrastructure for developers",
        "url": "https://novu.co/",
        "sourceUrl": "https://github.com/novuhq/novu/",
        "license": "MIT",
        "language": "Docker/Nodejs",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "ntfy",
        "description": "Push notifications to phone or desktop using HTTP PUT/POST, with Android app, CLI and web app, similar to Pushover and Gotify. ([Demo](https://ntfy.sh/app), [Source Code](https://github.com/binwiederhier/ntfy), [Clients](https://github.com/binwiederhier/ntfy-android))",
        "url": "https://ntfy.sh/",
        "sourceUrl": "",
        "license": "Apache-2.0/GPL-2.0",
        "language": "Go/Docker/K8S",
        "tags": [
          "go"
        ]
      },
      {
        "name": "One Time Secret",
        "description": "Share sensitive information securely with self-destructing links that are only viewable once. ([Demo](https://onetimesecret.com), [Source Code](https://github.com/onetimesecret/onetimesecret))",
        "url": "https://docs.onetimesecret.com",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker/Ruby/Nodejs",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "OTS",
        "description": "One-Time-Secret sharing platform with a symmetric 256bit AES encryption in the browser",
        "url": "https://ots.fyi/",
        "sourceUrl": "https://github.com/Luzifer/ots",
        "license": "Apache-2.0",
        "language": "Go",
        "tags": [
          "go"
        ]
      },
      {
        "name": "PushBits",
        "description": "Notification server for relaying push notifications via Matrix, similar to PushBullet and Gotify",
        "url": "https://github.com/pushbits/server",
        "sourceUrl": "",
        "license": "ISC",
        "language": "Go",
        "tags": [
          "go"
        ]
      },
      {
        "name": "RetroShare",
        "description": "Secured and decentralized communication system. Offers decentralized chat, forums, messaging, file transfer",
        "url": "https://retroshare.cc",
        "sourceUrl": "https://github.com/RetroShare/RetroShare",
        "license": "GPL-2.0",
        "language": "C++",
        "tags": [
          "c++"
        ]
      },
      {
        "name": "Rocket.Chat",
        "description": "Communications platform that puts data protection first (alternative to Gitter.im and Slack)",
        "url": "https://rocket.chat/",
        "sourceUrl": "https://github.com/RocketChat/Rocket.Chat",
        "license": "MIT",
        "language": "Nodejs/Docker/K8S",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "SAMA",
        "description": "Next-Gen self-hosted chat server and clients. ([Demo](https://app.samacloud.io/demo), [Source Code](https://github.com/SAMA-Communications/sama-server), [Clients](https://github.com/SAMA-Communications/sama-client))",
        "url": "https://samacloud.io",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Nodejs/Docker",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Screego",
        "description": "Screego is a simple tool to quickly share your screen to one or multiple people via web browser. ([Demo](https://app.screego.net/), [Source Code](https://github.com/screego/server))",
        "url": "https://screego.net",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Docker/Go",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Shhh",
        "description": "Keep secrets out of emails or chat logs, share them using secure links with passphrase and expiration dates",
        "url": "https://github.com/smallwat3r/shhh",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Python",
        "tags": [
          "python"
        ]
      },
      {
        "name": "SimpleX Chat",
        "description": "The most private and secure chat and applications platform - now with double ratchet E2E encryption",
        "url": "https://github.com/simplex-chat/simplex-chat",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Haskell",
        "tags": [
          "haskell"
        ]
      },
      {
        "name": "Spectrum 2",
        "description": "Spectrum 2 is an open source instant messaging transport.  It allows users to chat together even when they are using different IM networks",
        "url": "https://spectrum.im/",
        "sourceUrl": "https://github.com/SpectrumIM/spectrum2",
        "license": "GPL-3.0",
        "language": "C++",
        "tags": [
          "c++"
        ]
      },
      {
        "name": "Stoat",
        "description": "Stoat is a user-first chat platform built with modern web technologies",
        "url": "https://stoat.chat/",
        "sourceUrl": "https://github.com/stoatchat/self-hosted",
        "license": "AGPL-3.0/MIT",
        "language": "Rust",
        "tags": [
          "rust"
        ]
      },
      {
        "name": "Synapse",
        "description": "Server for [Matrix](https://matrix.org/), an open standard for decentralized persistent communication",
        "url": "https://element-hq.github.io/synapse/latest/index.html",
        "sourceUrl": "https://github.com/element-hq/synapse",
        "license": "Apache-2.0",
        "language": "Python/deb",
        "tags": [
          "python"
        ]
      },
      {
        "name": "Tailchat",
        "description": "Next generation noIM application in your own workspace, not only another Slack/Discord/rocket.chat. ([Demo](https://nightly.paw.msgbyte.com/), [Source Code](https://github.com/msgbyte/tailchat))",
        "url": "https://tailchat.msgbyte.com/",
        "sourceUrl": "",
        "license": "Apache-2.0",
        "language": "Docker/K8S/Nodejs",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Tiledesk",
        "description": "All-in-one customer engagement platform from lead-gen to post-sales, from WhatsApp to your website. With omni-channel live agents and AI-powered chatbots (alternative to Intercom, Zendesk, Tawk.to and Tidio)",
        "url": "https://tiledesk.com",
        "sourceUrl": "https://github.com/Tiledesk/tiledesk",
        "license": "MIT",
        "language": "Docker/K8S",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Tinode",
        "description": "Instant messaging platform. Backend in Go. Clients: Swift iOS, Java Android, JS webapp, scriptable command line; chatbots. ([Demo](https://sandbox.tinode.co/), [Source Code](https://github.com/tinode/chat), [Clients](https://github.com/tinode/webapp))",
        "url": "https://github.com/tinode",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Go",
        "tags": [
          "go"
        ]
      },
      {
        "name": "Tox",
        "description": "Distributed, secure messenger with audio and video chat capabilities",
        "url": "https://tox.chat/",
        "sourceUrl": "https://github.com/TokTok/c-toxcore",
        "license": "GPL-3.0",
        "language": "C",
        "tags": [
          "c"
        ]
      },
      {
        "name": "Tuwunel",
        "description": "High-performance and feature-rich chat server for Matrix, and the successor to conduwuit (fork of Conduit). ([Demo](https://try.tuwunel.chat/), [Source Code](https://github.com/matrix-construct/tuwunel))",
        "url": "https://tuwunel.chat",
        "sourceUrl": "",
        "license": "Apache-2.0",
        "language": "deb/Docker/Nix/Rust",
        "tags": [
          "deb"
        ]
      },
      {
        "name": "Typebot",
        "description": "Conversational app builder (alternative to Typeform and Landbot)",
        "url": "https://typebot.io",
        "sourceUrl": "https://github.com/baptisteArno/typebot.io",
        "license": "AGPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "WBO",
        "description": "Web Whiteboard to collaborate in real-time on schemas, drawings, and notes. ([Demo](https://wbo.ophir.dev/))",
        "url": "https://github.com/lovasoa/whitebophir",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Nodejs/Docker",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Zulip",
        "description": "Zulip is a powerful, open source group chat application",
        "url": "https://zulip.org",
        "sourceUrl": "https://github.com/zulip/zulip",
        "license": "Apache-2.0",
        "language": "Python",
        "tags": [
          "python"
        ]
      }
    ]
  },
  {
    "id": "communication-email-complete-solutions",
    "name": "Communication - Email - Complete Solutions",
    "items": [
      {
        "name": "AnonAddy",
        "description": "Email forwarding service for creating aliases",
        "url": "https://anonaddy.com",
        "sourceUrl": "https://github.com/anonaddy/anonaddy",
        "license": "MIT",
        "language": "PHP/Docker",
        "tags": [
          "php"
        ]
      },
      {
        "name": "b1gMail",
        "description": "Complete email solution that runs on any webspace with PHP and MariaDB. It supports POP3 catchall mailboxes and can also integrate with Postfix or b1gMailServer if you're running your own server. ([Source Code](https://codeberg.org/b1gMail/b1gMail), [Clients](https://www.b1gmail.eu/en/start/addon-b1gmailserver/))",
        "url": "https://www.b1gmail.eu",
        "sourceUrl": "",
        "license": "GPL-2.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "DebOps",
        "description": "Your Debian-based data center in a box. A set of general-purpose Ansible roles that can be used to manage Debian or Ubuntu hosts",
        "url": "https://docs.debops.org/",
        "sourceUrl": "https://github.com/debops/debops",
        "license": "GPL-3.0",
        "language": "Ansible/Python",
        "tags": [
          "ansible"
        ]
      },
      {
        "name": "docker-mailserver",
        "description": "Production-ready fullstack but simple mail server (SMTP, IMAP, LDAP, Antispam, Antivirus, etc.) running inside a container. Only configuration files, no SQL database",
        "url": "https://docker-mailserver.github.io/docker-mailserver/edge/",
        "sourceUrl": "https://github.com/docker-mailserver/docker-mailserver",
        "license": "MIT",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Dovel",
        "description": "SMTP server that sends and receives emails according to a simple configuration file, with an optional web interface that you can use to browse your emails",
        "url": "https://dovel.email",
        "sourceUrl": "https://dovel.email/server/tree.html",
        "license": "LGPL-3.0",
        "language": "Go",
        "tags": [
          "go"
        ]
      },
      {
        "name": "emailwiz",
        "description": "Luke Smith's bash script to completely automate the setup of a Postfix/Dovecot/SpamAssassin/OpenDKIM server on debian",
        "url": "https://github.com/LukeSmithxyz/emailwiz",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Shell",
        "tags": [
          "shell"
        ]
      },
      {
        "name": "Inboxen",
        "description": "Lets you have an infinite number of unique inboxes",
        "url": "https://inboxen.org",
        "sourceUrl": "https://codeberg.org/Inboxen/Inboxen",
        "license": "GPL-3.0",
        "language": "Python",
        "tags": [
          "python"
        ]
      },
      {
        "name": "iRedMail",
        "description": "Full-featured mail server solution based on Postfix and Dovecot",
        "url": "https://www.iredmail.org/",
        "sourceUrl": "https://github.com/iredmail/iRedMail",
        "license": "GPL-3.0",
        "language": "Shell",
        "tags": [
          "shell"
        ]
      },
      {
        "name": "Maddy Mail Server",
        "description": "All-in-one mail server that implements SMTP (both MTA and MX) and IMAP. Replaces Postfix, Dovecot, OpenDKIM, OpenSPF, OpenDMARC with single daemon",
        "url": "https://maddy.email/",
        "sourceUrl": "https://github.com/foxcpp/maddy",
        "license": "GPL-3.0",
        "language": "Go",
        "tags": [
          "go"
        ]
      },
      {
        "name": "Mail-in-a-Box",
        "description": "Turns any Ubuntu server into a fully functional mail server with one command",
        "url": "https://mailinabox.email/",
        "sourceUrl": "https://github.com/mail-in-a-box/mailinabox",
        "license": "CC0-1.0",
        "language": "Shell",
        "tags": [
          "shell"
        ]
      },
      {
        "name": "Mailcow",
        "description": "Mail server suite based on Dovecot, Postfix and other open source software, that provides a modern Web UI for administration",
        "url": "https://mailcow.email/",
        "sourceUrl": "https://github.com/mailcow/mailcow-dockerized",
        "license": "GPL-3.0",
        "language": "Docker/PHP",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Mailu",
        "description": "Simple yet full-featured mail server as a set of Docker images",
        "url": "https://mailu.io/",
        "sourceUrl": "https://github.com/Mailu/Mailu",
        "license": "MIT",
        "language": "Docker/Python",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Modoboa",
        "description": "Mail hosting and management platform including a modern and simplified web user interface",
        "url": "https://modoboa.org/en/",
        "sourceUrl": "https://github.com/modoboa/modoboa",
        "license": "ISC",
        "language": "Python",
        "tags": [
          "python"
        ]
      },
      {
        "name": "Mox",
        "description": "Complete e-mail solution with IMAP4, SMTP, SPF, DKIM, DMARC, MTA-STS, DANE and DNSSEC, reputation-based and content-based junk filtering, Internationalization (IDNA), automatic TLS with ACME and Let's Encrypt, account autoconfiguration, and webmail",
        "url": "https://www.xmox.nl/",
        "sourceUrl": "https://github.com/mjl-/mox",
        "license": "MIT",
        "language": "Go",
        "tags": [
          "go"
        ]
      },
      {
        "name": "Postal",
        "description": "Complete and fully featured mail server for use by websites & web servers",
        "url": "https://docs.postalserver.io/",
        "sourceUrl": "https://github.com/postalserver/postal",
        "license": "MIT",
        "language": "Docker/Ruby",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Simple NixOS Mailserver",
        "description": "Complete mailserver solution leveraging the Nix Ecosystem",
        "url": "https://gitlab.com/simple-nixos-mailserver/nixos-mailserver",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Nix",
        "tags": [
          "nix"
        ]
      },
      {
        "name": "SimpleLogin",
        "description": "Open source email alias solution to protect your email address. Comes with browser extensions and mobile apps",
        "url": "https://simplelogin.io",
        "sourceUrl": "https://github.com/simple-login/app",
        "license": "MIT",
        "language": "Docker/Python",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Stalwart Mail Server",
        "description": "All-in-one mail server with JMAP, IMAP4, and SMTP support and a wide range of modern features",
        "url": "https://stalw.art",
        "sourceUrl": "https://github.com/stalwartlabs/stalwart",
        "license": "AGPL-3.0",
        "language": "Rust/Docker",
        "tags": [
          "rust"
        ]
      },
      {
        "name": "wildduck",
        "description": "Scalable no-SPOF IMAP/POP3 mail server",
        "url": "https://wildduck.email/",
        "sourceUrl": "https://github.com/zone-eu/wildduck",
        "license": "EUPL-1.2",
        "language": "Nodejs/Docker",
        "tags": [
          "nodejs"
        ]
      }
    ]
  },
  {
    "id": "communication-email-mail-delivery-agents",
    "name": "Communication - Email - Mail Delivery Agents",
    "items": [
      {
        "name": "Cyrus IMAP",
        "description": "Email (IMAP/POP3), contacts and calendar server",
        "url": "https://www.cyrusimap.org/",
        "sourceUrl": "https://github.com/cyrusimap/cyrus-imapd",
        "license": "BSD-3-Clause-Attribution",
        "language": "C",
        "tags": [
          "c"
        ]
      },
      {
        "name": "DavMail",
        "description": "POP/IMAP/SMTP/Caldav/Carddav/LDAP exchange gateway allowing users to use any mail/calendar client with an Exchange server, even from the internet or behind a firewall through Outlook Web Access",
        "url": "https://davmail.sourceforge.net/",
        "sourceUrl": "https://github.com/mguessan/davmail",
        "license": "GPL-2.0",
        "language": "Java",
        "tags": [
          "java"
        ]
      },
      {
        "name": "Dovecot",
        "description": "IMAP and POP3 server written primarily with security in mind",
        "url": "https://www.dovecot.org/",
        "sourceUrl": "https://github.com/dovecot/core",
        "license": "MIT/LGPL-2.1",
        "language": "C/deb",
        "tags": [
          "c"
        ]
      }
    ]
  },
  {
    "id": "communication-email-mail-transfer-agents",
    "name": "Communication - Email - Mail Transfer Agents",
    "items": [
      {
        "name": "chasquid",
        "description": "SMTP (email) server with a focus on simplicity, security, and ease of operation",
        "url": "https://blitiri.com.ar/p/chasquid/",
        "sourceUrl": "https://blitiri.com.ar/git/r/chasquid/",
        "license": "Apache-2.0",
        "language": "Go",
        "tags": [
          "go"
        ]
      },
      {
        "name": "Courier MTA",
        "description": "Fast, scalable, enterprise mail/groupware server providing ESMTP, IMAP, POP3, webmail, mailing list, basic web-based calendaring and scheduling services",
        "url": "https://www.courier-mta.org/",
        "sourceUrl": "https://www.courier-mta.org/repo.html",
        "license": "GPL-3.0",
        "language": "C/deb",
        "tags": [
          "c"
        ]
      },
      {
        "name": "DragonFly",
        "description": "A small MTA for home and office use. Works on Linux and FreeBSD",
        "url": "https://github.com/corecode/dma",
        "sourceUrl": "",
        "license": "BSD-3-Clause",
        "language": "C",
        "tags": [
          "c"
        ]
      },
      {
        "name": "EmailRelay",
        "description": "A small and easy to configure SMTP and POP3 server for Windows and Linux",
        "url": "https://emailrelay.sourceforge.net/",
        "sourceUrl": "https://sourceforge.net/p/emailrelay/code/HEAD/tree/",
        "license": "GPL-3.0",
        "language": "C++",
        "tags": [
          "c++"
        ]
      },
      {
        "name": "Exim",
        "description": "Message transfer agent (MTA) developed at the University of Cambridge",
        "url": "https://www.exim.org/",
        "sourceUrl": "https://git.exim.org/exim.git",
        "license": "GPL-3.0",
        "language": "C/deb",
        "tags": [
          "c"
        ]
      },
      {
        "name": "Haraka",
        "description": "Fast, highly extensible, and event driven SMTP server",
        "url": "https://haraka.github.io/",
        "sourceUrl": "https://github.com/haraka/Haraka",
        "license": "MIT",
        "language": "Nodejs",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "OpenSMTPD",
        "description": "Secure SMTP server implementation from the OpenBSD project",
        "url": "https://opensmtpd.org/",
        "sourceUrl": "https://github.com/OpenSMTPD/OpenSMTPD/",
        "license": "ISC",
        "language": "C/deb",
        "tags": [
          "c"
        ]
      },
      {
        "name": "OpenTrashmail",
        "description": "Complete trashmail solution that exposes an SMTP server and has a web interface to manage received emails. Works with multiple and wildcard domains and is fully file based (no database needed). Includes RSS feeds and JSON API",
        "url": "https://github.com/HaschekSolutions/opentrashmail",
        "sourceUrl": "",
        "license": "Apache-2.0",
        "language": "Python/PHP/Docker",
        "tags": [
          "python"
        ]
      },
      {
        "name": "Postfix",
        "description": "Fast, easy to administer, and secure Sendmail replacement",
        "url": "http://www.postfix.org/",
        "sourceUrl": "",
        "license": "IPL-1.0",
        "language": "C/deb",
        "tags": [
          "c"
        ]
      },
      {
        "name": "Sendmail",
        "description": "Message transfer agent (MTA)",
        "url": "https://www.proofpoint.com/us/products/email-protection/open-source-email-solution",
        "sourceUrl": "",
        "license": "Sendmail",
        "language": "C/deb",
        "tags": [
          "c"
        ]
      }
    ]
  },
  {
    "id": "communication-email-mailing-lists-and-newsletters",
    "name": "Communication - Email - Mailing Lists and Newsletters",
    "items": [
      {
        "name": "HyperKitty",
        "description": "Access GNU Mailman v3 archives. ([Demo](https://lists.mailman3.org/), [Source Code](https://gitlab.com/mailman/hyperkitty))",
        "url": "https://wiki.list.org/HyperKitty",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Python",
        "tags": [
          "python"
        ]
      },
      {
        "name": "Keila",
        "description": "Reliable and easy-to-use newsletter tool (alternative to Mailchimp and Sendinblue). ([Demo](https://app.keila.io), [Source Code](https://github.com/pentacent/keila))",
        "url": "https://www.keila.io",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Listmonk",
        "description": "High performance, self-hosted newsletter and mailing list manager with a modern dashboard. ([Demo](https://demo.listmonk.app/), [Source Code](https://github.com/knadh/listmonk))",
        "url": "https://listmonk.app/",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Go/Docker",
        "tags": [
          "go"
        ]
      },
      {
        "name": "Mailman",
        "description": "Manage electronic mail discussion and e-newsletter lists",
        "url": "https://www.list.org/",
        "sourceUrl": "https://gitlab.com/mailman/",
        "license": "GPL-3.0",
        "language": "Python",
        "tags": [
          "python"
        ]
      },
      {
        "name": "Mautic",
        "description": "Marketing automation software (email, social and more)",
        "url": "https://www.mautic.org/",
        "sourceUrl": "https://github.com/mautic/mautic",
        "license": "GPL-3.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "phpList",
        "description": "Newsletter and email marketing with advanced management of subscribers, bounces, and plugins",
        "url": "https://www.phplist.org",
        "sourceUrl": "https://github.com/phpList/phplist3",
        "license": "AGPL-3.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Postorius",
        "description": "Web user interface to access GNU Mailman",
        "url": "https://docs.mailman3.org/projects/postorius/en/latest/",
        "sourceUrl": "https://gitlab.com/mailman/postorius/",
        "license": "GPL-3.0",
        "language": "Python",
        "tags": [
          "python"
        ]
      },
      {
        "name": "Schleuder",
        "description": "GPG-enabled mailing list manager with resending-capabilities",
        "url": "https://schleuder.nadir.org/",
        "sourceUrl": "https://0xacab.org/schleuder/schleuder/tree/master",
        "license": "GPL-3.0",
        "language": "Ruby",
        "tags": [
          "ruby"
        ]
      },
      {
        "name": "Sympa",
        "description": "Mailing list manager",
        "url": "https://www.sympa.community/",
        "sourceUrl": "https://github.com/sympa-community/sympa",
        "license": "GPL-2.0",
        "language": "Perl",
        "tags": [
          "perl"
        ]
      }
    ]
  },
  {
    "id": "communication-email-webmail-clients",
    "name": "Communication - Email - Webmail Clients",
    "items": [
      {
        "name": "Cypht",
        "description": "Feed reader for your email accounts",
        "url": "https://cypht.org",
        "sourceUrl": "https://github.com/cypht-org/cypht",
        "license": "LGPL-2.1",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Roundcube",
        "description": "Browser-based IMAP client with an application-like user interface",
        "url": "https://roundcube.net",
        "sourceUrl": "https://github.com/roundcube/roundcubemail",
        "license": "GPL-3.0",
        "language": "PHP/deb",
        "tags": [
          "php"
        ]
      },
      {
        "name": "SnappyMail",
        "description": "Simple, modern, lightweight & fast web-based email client (fork of RainLoop). ([Demo](https://snappymail.eu/demo/), [Source Code](https://github.com/the-djmaze/snappymail), [Clients](https://snappymail.eu/repository/v2/plugins/))",
        "url": "https://snappymail.eu/",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "SquirrelMail",
        "description": "Another browser-based IMAP client",
        "url": "https://squirrelmail.org",
        "sourceUrl": "https://sourceforge.net/p/squirrelmail/code/HEAD/tree/",
        "license": "GPL-2.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      }
    ]
  },
  {
    "id": "communication-irc",
    "name": "Communication - IRC",
    "items": [
      {
        "name": "Ergo",
        "description": "Modern IRCv3 server written in Go, combining the features of an ircd, a services framework, and a bouncer",
        "url": "https://ergo.chat/",
        "sourceUrl": "https://github.com/ergochat/ergo",
        "license": "MIT",
        "language": "Go/Docker",
        "tags": [
          "go"
        ]
      },
      {
        "name": "Glowing Bear",
        "description": "A web frontend for WeeChat. ([Demo](https://www.glowing-bear.org))",
        "url": "https://github.com/glowing-bear/glowing-bear",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Nodejs",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "InspIRCd",
        "description": "Modular IRC server written in C++ for Linux, BSD, Windows, and macOS",
        "url": "https://www.inspircd.org/",
        "sourceUrl": "https://github.com/inspircd/inspircd",
        "license": "GPL-2.0",
        "language": "C++/Docker",
        "tags": [
          "c++"
        ]
      },
      {
        "name": "Kiwi IRC",
        "description": "Responsive web IRC client with theming support. ([Demo](https://kiwiirc.com/nextclient/), [Source Code](https://github.com/kiwiirc/kiwiirc))",
        "url": "https://kiwiirc.com/",
        "sourceUrl": "",
        "license": "Apache-2.0",
        "language": "Nodejs",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "ngircd",
        "description": "Portable and lightweight Internet Relay Chat server for small or private networks",
        "url": "https://ngircd.barton.de/",
        "sourceUrl": "https://github.com/ngircd/ngircd",
        "license": "GPL-2.0",
        "language": "C/deb",
        "tags": [
          "c"
        ]
      },
      {
        "name": "Quassel IRC",
        "description": "Distributed IRC client, meaning that one (or multiple) client(s) can attach to and detach from a central core",
        "url": "https://quassel-irc.org/",
        "sourceUrl": "https://github.com/quassel/quassel",
        "license": "GPL-2.0",
        "language": "C++",
        "tags": [
          "c++"
        ]
      },
      {
        "name": "Robust IRC",
        "description": "IRC without netsplits. Distributed IRC server, based on RobustSession protocol",
        "url": "https://robustirc.net/",
        "sourceUrl": "https://github.com/robustirc/robustirc",
        "license": "BSD-3-Clause",
        "language": "Go",
        "tags": [
          "go"
        ]
      },
      {
        "name": "The Lounge",
        "description": "Self-hosted web IRC client. ([Demo](https://demo.thelounge.chat/), [Source Code](https://github.com/thelounge/thelounge))",
        "url": "https://thelounge.chat/",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Nodejs/Docker",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "UnrealIRCd",
        "description": "Modular, advanced and highly configurable IRC server written in C for Linux, BSD, Windows, and macOS",
        "url": "https://www.unrealircd.org/",
        "sourceUrl": "https://github.com/unrealircd/unrealircd",
        "license": "GPL-2.0",
        "language": "C",
        "tags": [
          "c"
        ]
      },
      {
        "name": "Weechat",
        "description": "Fast, light and extensible chat client",
        "url": "https://weechat.org/",
        "sourceUrl": "https://github.com/weechat/weechat",
        "license": "GPL-3.0",
        "language": "C/Docker/deb",
        "tags": [
          "c"
        ]
      },
      {
        "name": "ZNC",
        "description": "Advanced IRC bouncer",
        "url": "https://wiki.znc.in/ZNC",
        "sourceUrl": "https://github.com/znc/znc",
        "license": "Apache-2.0",
        "language": "C++/deb",
        "tags": [
          "c++"
        ]
      }
    ]
  },
  {
    "id": "communication-sip",
    "name": "Communication - SIP",
    "items": [
      {
        "name": "Asterisk",
        "description": "Easy to use but advanced IP PBX system, VoIP gateway and conference server",
        "url": "https://www.asterisk.org/",
        "sourceUrl": "https://github.com/asterisk/asterisk",
        "license": "GPL-2.0",
        "language": "C/deb",
        "tags": [
          "c"
        ]
      },
      {
        "name": "Flexisip",
        "description": "Complete, modular and scalable SIP server, includes a push gateway, to deliver SIP incoming calls or text messages on mobile device platforms where push notifications are required to receive information when the app is not active in the foreground",
        "url": "https://www.linphone.org/en/flexisip-sip-server/",
        "sourceUrl": "https://github.com/BelledonneCommunications/flexisip",
        "license": "AGPL-3.0",
        "language": "C/Docker",
        "tags": [
          "c"
        ]
      },
      {
        "name": "Freepbx",
        "description": "Web-based open source GUI that controls and manages Asterisk",
        "url": "https://www.freepbx.org",
        "sourceUrl": "https://git.freepbx.org/projects/FREEPBX",
        "license": "GPL-2.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "FreeSWITCH",
        "description": "Scalable open source cross-platform telephony platform",
        "url": "https://freeswitch.org/",
        "sourceUrl": "https://github.com/signalwire/freeswitch",
        "license": "MPL-2.0",
        "language": "C",
        "tags": [
          "c"
        ]
      },
      {
        "name": "FusionPBX",
        "description": "Web interface for multi-platform voice switch called FreeSWITCH",
        "url": "https://www.fusionpbx.com/",
        "sourceUrl": "https://github.com/fusionpbx/fusionpbx",
        "license": "MPL-1.1",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Kamailio",
        "description": "Modular SIP server (registrar/proxy/router/etc)",
        "url": "https://www.kamailio.org/w/",
        "sourceUrl": "https://github.com/kamailio/kamailio",
        "license": "GPL-2.0",
        "language": "C/deb",
        "tags": [
          "c"
        ]
      },
      {
        "name": "openSIPS",
        "description": "SIP proxy/server for voice, video, IM, presence and any other SIP extensions",
        "url": "https://opensips.org/",
        "sourceUrl": "https://github.com/OpenSIPS/opensips",
        "license": "GPL-2.0",
        "language": "C",
        "tags": [
          "c"
        ]
      },
      {
        "name": "Routr",
        "description": "Lightweight SIP proxy, location server, and registrar for a reliable and scalable SIP infrastructure",
        "url": "https://routr.io",
        "sourceUrl": "https://github.com/fonoster/routr",
        "license": "MIT",
        "language": "Docker/K8S",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "SIP3",
        "description": "VoIP troubleshooting and monitoring platform. ([Demo](https://demo.sip3.io), [Source Code](https://github.com/sip3io/))",
        "url": "https://sip3.io/",
        "sourceUrl": "",
        "license": "Apache-2.0",
        "language": "Java",
        "tags": [
          "java"
        ]
      },
      {
        "name": "SIPCAPTURE Homer",
        "description": "Troubleshooting and monitoring VoIP calls",
        "url": "https://www.sipcapture.org/",
        "sourceUrl": "https://github.com/sipcapture/homer",
        "license": "AGPL-3.0",
        "language": "Nodejs/Go/Docker",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Wazo",
        "description": "Full-featured IPBX solution built atop Asterisk with integrated Web administration interface and REST-ful API",
        "url": "https://wazo-platform.org/",
        "sourceUrl": "https://github.com/wazo-platform",
        "license": "GPL-3.0",
        "language": "Python",
        "tags": [
          "python"
        ]
      },
      {
        "name": "Yeti-Switch",
        "description": "Transit class4 softswitch(SBC) with integrated billing and routing engine and REST API. ([Demo](https://demo.yeti-switch.org/), [Source Code](https://github.com/yeti-switch))",
        "url": "https://yeti-switch.org/",
        "sourceUrl": "",
        "license": "GPL-2.0",
        "language": "C++/Ruby",
        "tags": [
          "c++"
        ]
      }
    ]
  },
  {
    "id": "communication-social-networks-and-forums",
    "name": "Communication - Social Networks and Forums",
    "items": [
      {
        "name": "Akkoma",
        "description": "Federated microblogging server with Mastodon, GNU social, and ActivityPub compatibility",
        "url": "https://akkoma.social/",
        "sourceUrl": "https://akkoma.dev/AkkomaGang/akkoma",
        "license": "AGPL-3.0",
        "language": "Elixir/Docker",
        "tags": [
          "elixir"
        ]
      },
      {
        "name": "Answer",
        "description": "Knowledge-based community software. You can use it to quickly build your Q&A community for product technical support, customer support, user communication, and more",
        "url": "https://answer.apache.org",
        "sourceUrl": "https://github.com/apache/answer",
        "license": "Apache-2.0",
        "language": "Docker/Go",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Artalk",
        "description": "Comment system built in Golang, providing a lightweight and highly customizable solution for adding comments to your website",
        "url": "https://artalk.js.org/",
        "sourceUrl": "https://github.com/ArtalkJS/Artalk",
        "license": "MIT",
        "language": "Go/Docker",
        "tags": [
          "go"
        ]
      },
      {
        "name": "AsmBB",
        "description": "Fast, SQLite-powered forum engine written in ASM",
        "url": "https://board.asm32.info",
        "sourceUrl": "https://asm32.info/fossil/asmbb/index",
        "license": "EUPL-1.2",
        "language": "Assembly",
        "tags": [
          "assembly"
        ]
      },
      {
        "name": "BuddyPress",
        "description": "Powerful plugin that takes your WordPress.org powered site beyond the blog with social-network features like user profiles, activity streams, user groups, and more",
        "url": "https://buddypress.org/about/",
        "sourceUrl": "https://github.com/buddypress/BuddyPress",
        "license": "GPL-2.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Chirpy",
        "description": "Privacy-friendly and customizable Disqus (comment system) alternate. ([Demo](https://chirpy.dev/play), [Source Code](https://github.com/devrsi0n/chirpy))",
        "url": "https://chirpy.dev",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Docker/Nodejs",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Coral",
        "description": "A better commenting experience from Vox Media",
        "url": "https://coralproject.net/",
        "sourceUrl": "https://github.com/coralproject/talk",
        "license": "Apache-2.0",
        "language": "Docker/Nodejs",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "diaspora*",
        "description": "Distributed social networking server",
        "url": "https://diasporafoundation.org/",
        "sourceUrl": "https://github.com/diaspora/diaspora",
        "license": "AGPL-3.0",
        "language": "Ruby",
        "tags": [
          "ruby"
        ]
      },
      {
        "name": "Discourse",
        "description": "Advanced forum / community solution based on Ruby and JS. ([Demo](https://try.discourse.org/), [Source Code](https://github.com/discourse/discourse))",
        "url": "https://www.discourse.org/",
        "sourceUrl": "",
        "license": "GPL-2.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Elgg",
        "description": "Powerful open source social networking engine",
        "url": "https://elgg.org/",
        "sourceUrl": "https://github.com/Elgg/Elgg",
        "license": "GPL-2.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Enigma 1/2 BBS",
        "description": "Enigma 1/2 is a modern, multi-platform BBS engine with unlimited \"callers\" and legacy DOS door game support",
        "url": "https://nuskooler.github.io/enigma-bbs/",
        "sourceUrl": "https://github.com/NuSkooler/enigma-bbs",
        "license": "BSD-2-Clause",
        "language": "Shell/Docker/Nodejs",
        "tags": [
          "shell"
        ]
      },
      {
        "name": "Flarum",
        "description": "Delightfully simple forums. Flarum is the next-generation forum software that makes online discussion fun again",
        "url": "https://flarum.org",
        "sourceUrl": "https://github.com/flarum/flarum",
        "license": "MIT",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Friendica",
        "description": "Social Communication Server",
        "url": "https://friendi.ca/",
        "sourceUrl": "https://github.com/friendica/friendica",
        "license": "AGPL-3.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "GoToSocial",
        "description": "ActivityPub federated social network server implementing the Mastodon client API",
        "url": "https://docs.gotosocial.org/en/latest/",
        "sourceUrl": "https://codeberg.org/superseriousbusiness/gotosocial",
        "license": "AGPL-3.0",
        "language": "Docker/Go",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Hatsu",
        "description": "Bridge that interacts with Fediverse on behalf of your static site",
        "url": "https://hatsu.cli.rs/",
        "sourceUrl": "https://github.com/importantimport/hatsu",
        "license": "AGPL-3.0",
        "language": "Docker/Rust",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Hubzilla",
        "description": "Decentralized identity, privacy, publishing, sharing, cloud storage, and communications/social platform",
        "url": "https://hubzilla.org",
        "sourceUrl": "https://framagit.org/hubzilla/core",
        "license": "MIT",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "HumHub",
        "description": "Flexible kit for private social networks",
        "url": "https://www.humhub.org/",
        "sourceUrl": "https://github.com/humhub/humhub",
        "license": "AGPL-3.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Iceshrimp.NET",
        "description": "Federated microblogging server that communicates over ActivityPub",
        "url": "https://iceshrimp.net",
        "sourceUrl": "https://iceshrimp.dev/iceshrimp/iceshrimp.net",
        "license": "EUPL-1.2",
        "language": ".NET/C#/Docker",
        "tags": [
          ".net"
        ]
      },
      {
        "name": "Isso",
        "description": "Lightweight commenting server written in Python and Javascript. It aims to be a drop-in replacement for Disqus",
        "url": "https://isso-comments.de/",
        "sourceUrl": "https://github.com/isso-comments/isso",
        "license": "MIT",
        "language": "Python/Docker",
        "tags": [
          "python"
        ]
      },
      {
        "name": "Lemmy",
        "description": "Link aggregator for the fediverse (alternative to Reddit)",
        "url": "https://join-lemmy.org/",
        "sourceUrl": "https://github.com/LemmyNet/lemmy",
        "license": "AGPL-3.0",
        "language": "Docker/Rust",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Loomio",
        "description": "Collaborative decision-making tool that makes it easy for anyone to participate in decisions which affect them",
        "url": "https://www.loomio.org/",
        "sourceUrl": "https://github.com/loomio/loomio",
        "license": "AGPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Mastodon",
        "description": "Federated microblogging server. ([Source Code](https://github.com/mastodon/mastodon), [Clients](https://github.com/hyperupcall/awesome-mastodon))",
        "url": "https://joinmastodon.org/",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Ruby",
        "tags": [
          "ruby"
        ]
      },
      {
        "name": "Misago",
        "description": "Fully featured modern forum application that is fast, scalable and responsive",
        "url": "https://misago-project.org/",
        "sourceUrl": "https://github.com/rafalp/Misago",
        "license": "GPL-2.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Misskey",
        "description": "Decentralized app-like microblogging server/SNS for the Fediverse, using the ActivityPub protocol like GNU social and Mastodon",
        "url": "https://misskey.io/",
        "sourceUrl": "https://github.com/misskey-dev/misskey",
        "license": "AGPL-3.0",
        "language": "Nodejs/Docker",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Movim",
        "description": "Modern, federated social network based on XMPP, with a fully featured group-chat, subscriptions and microblogging",
        "url": "https://movim.eu/",
        "sourceUrl": "https://github.com/movim/movim",
        "license": "AGPL-3.0",
        "language": "PHP/Docker",
        "tags": [
          "php"
        ]
      },
      {
        "name": "MyBB",
        "description": "Free, extensible forum software package",
        "url": "https://mybb.com/",
        "sourceUrl": "https://github.com/mybb/mybb",
        "license": "LGPL-3.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "NodeBB",
        "description": "Forum software built for the modern web. ([Demo](https://try.nodebb.org/), [Source Code](https://github.com/NodeBB/NodeBB))",
        "url": "https://nodebb.org/",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Nodejs/Docker",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "OSSN",
        "description": "Social networking software that allows you to make a social networking website and helps your members build social relationships, with people who share similar professional or personal interests",
        "url": "https://www.opensource-socialnetwork.org/",
        "sourceUrl": "https://github.com/opensource-socialnetwork/opensource-socialnetwork",
        "license": "CAL-1.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "phpBB",
        "description": "Flat-forum bulletin board software solution that can be used to stay in touch with a group of people or can power your entire website",
        "url": "https://www.phpbb.com/",
        "sourceUrl": "https://github.com/phpbb/phpbb",
        "license": "GPL-2.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "PixelFed",
        "description": "Ethical photo sharing platform, powered by ActivityPub federation (alternative to Instagram)",
        "url": "https://pixelfed.social",
        "sourceUrl": "https://github.com/pixelfed/pixelfed",
        "license": "AGPL-3.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Pleroma",
        "description": "Federated microblogging server, Mastodon, GNU social, & ActivityPub compatible",
        "url": "https://pleroma.social",
        "sourceUrl": "https://git.pleroma.social/pleroma/pleroma",
        "license": "AGPL-3.0",
        "language": "Elixir",
        "tags": [
          "elixir"
        ]
      },
      {
        "name": "qpixel",
        "description": "Q&A-based community knowledge-sharing software",
        "url": "https://codidact.com/",
        "sourceUrl": "https://github.com/codidact/qpixel",
        "license": "AGPL-3.0",
        "language": "Ruby",
        "tags": [
          "ruby"
        ]
      },
      {
        "name": "Redlib",
        "description": "An alternative private front-end to Reddit, with its origins in Libreddit",
        "url": "https://github.com/redlib-org/redlib",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Rust",
        "tags": [
          "rust"
        ]
      },
      {
        "name": "remark42",
        "description": "Lightweight and simple comment engine, which doesn't spy on users. It can be embedded into blogs, articles or any other place where readers add comments. ([Demo](https://remark42.com/demo/), [Source Code](https://github.com/umputun/remark42))",
        "url": "https://remark42.com/",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker/Go",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Scoold",
        "description": "Stack Overflow in a JAR. An enterprise-ready Q&A platform with full-text search, SAML, LDAP integration and social login support. ([Demo](https://live.scoold.com), [Source Code](https://github.com/Erudika/scoold))",
        "url": "https://scoold.com",
        "sourceUrl": "",
        "license": "Apache-2.0",
        "language": "Java/Docker/K8S",
        "tags": [
          "java"
        ]
      },
      {
        "name": "Simple Machines Forum",
        "description": "Free, professional grade software package that allows you to set up your own online community within minutes",
        "url": "https://www.simplemachines.org/",
        "sourceUrl": "https://github.com/SimpleMachines/SMF",
        "license": "BSD-3-Clause",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Socialhome",
        "description": "Federated and decentralized profile builder and social network engine. ([Demo](https://socialhome.network/), [Source Code](https://github.com/jaywink/socialhome))",
        "url": "https://socialhome.network",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Docker/Python",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Talkyard",
        "description": "Create a community, where your users can suggest ideas and get questions answered. And have friendly open-ended discussions and chat (Slack/StackOverflow/Discourse/Reddit/Disqus hybrid). ([Demo](https://www.talkyard.io/forum/latest), [Source Code](https://github.com/debiki/talkyard))",
        "url": "https://www.talkyard.io/",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Docker/Scala",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "yarn.social",
        "description": "Self-Hosted, Twitter™-like Decentralised micro-logging platform. No ads, no tracking, your content, your data",
        "url": "https://yarn.social",
        "sourceUrl": "https://git.mills.io/yarnsocial/yarn",
        "license": "MIT",
        "language": "Go",
        "tags": [
          "go"
        ]
      }
    ]
  },
  {
    "id": "communication-video-conferencing",
    "name": "Communication - Video Conferencing",
    "items": [
      {
        "name": "BigBlueButton",
        "description": "Supports real-time sharing of audio, video, slides (with whiteboard controls), chat, and the screen. Instructors can engage remote students with polling, emojis, and breakout rooms",
        "url": "https://bigbluebutton.org/",
        "sourceUrl": "https://github.com/bigbluebutton/bigbluebutton",
        "license": "LGPL-3.0",
        "language": "Java",
        "tags": [
          "java"
        ]
      },
      {
        "name": "Galene",
        "description": "Video conferencing server that is easy to deploy and that requires moderate server resources",
        "url": "https://galene.org/",
        "sourceUrl": "https://github.com/jech/galene",
        "license": "MIT",
        "language": "Go",
        "tags": [
          "go"
        ]
      },
      {
        "name": "Janus",
        "description": "General-purpose, lightweight, minimalist WebRTC Server. ([Demo](https://janus.conf.meetecho.com/demos/), [Source Code](https://github.com/meetecho/janus-gateway))",
        "url": "https://janus.conf.meetecho.com/",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "C",
        "tags": [
          "c"
        ]
      },
      {
        "name": "Jitsi Meet",
        "description": "WebRTC application that uses Jitsi Videobridge to provide high quality, scalable video conferences. ([Demo](https://meet.jit.si), [Source Code](https://github.com/jitsi/jitsi-meet))",
        "url": "https://jitsi.org/Projects/JitsiMeet",
        "sourceUrl": "",
        "license": "Apache-2.0",
        "language": "Nodejs/Docker/deb",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Jitsi Video Bridge",
        "description": "WebRTC compatible Selective Forwarding Unit (SFU) that allows for multiuser video communication",
        "url": "https://jitsi.org/Projects/JitsiVideobridge",
        "sourceUrl": "https://github.com/jitsi/jitsi-videobridge",
        "license": "Apache-2.0",
        "language": "Java/deb",
        "tags": [
          "java"
        ]
      },
      {
        "name": "MiroTalk C2C",
        "description": "Real-time cam-2-cam video calls & screen sharing, end-to-end encrypted, to embed in any website with a simple iframe",
        "url": "https://c2c.mirotalk.com",
        "sourceUrl": "https://github.com/miroslavpejic85/mirotalkc2c",
        "license": "AGPL-3.0",
        "language": "Nodejs/Docker",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "MiroTalk P2P",
        "description": "Simple, secure, fast real-time video conferences up to 4k and 60fps, compatible with all browsers and platforms. ([Demo](https://p2p.mirotalk.com/newcall), [Source Code](https://github.com/miroslavpejic85/mirotalk))",
        "url": "https://p2p.mirotalk.com",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Nodejs/Docker",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "MiroTalk SFU",
        "description": "Simple, secure, scalable real-time video conferences up to 4k, compatible with all browsers and platforms. ([Demo](https://sfu.mirotalk.com/newroom), [Source Code](https://github.com/miroslavpejic85/mirotalksfu))",
        "url": "https://sfu.mirotalk.com",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Nodejs/Docker",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "plugNmeet",
        "description": "Scalable and high performance web conferencing system. ([Demo](https://demo.plugnmeet.com/login.html), [Source Code](https://github.com/mynaparrot/plugNmeet-server))",
        "url": "https://www.plugnmeet.org/",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker/Go",
        "tags": [
          "docker"
        ]
      }
    ]
  },
  {
    "id": "communication-xmpp-servers",
    "name": "Communication - XMPP - Servers",
    "items": [
      {
        "name": "ejabberd",
        "description": "XMPP instant messaging server",
        "url": "https://www.ejabberd.im/",
        "sourceUrl": "https://github.com/processone/ejabberd",
        "license": "GPL-2.0",
        "language": "Erlang/Docker",
        "tags": [
          "erlang"
        ]
      },
      {
        "name": "MongooseIM",
        "description": "Mobile messaging platform with a focus on performance and scalability",
        "url": "https://www.erlang-solutions.com/products/mongooseim.html",
        "sourceUrl": "https://github.com/esl/MongooseIM",
        "license": "GPL-2.0",
        "language": "Erlang/Docker/K8S",
        "tags": [
          "erlang"
        ]
      },
      {
        "name": "Openfire",
        "description": "Real time collaboration (RTC) server",
        "url": "https://www.igniterealtime.org/projects/openfire/",
        "sourceUrl": "https://github.com/igniterealtime/Openfire",
        "license": "Apache-2.0",
        "language": "Java",
        "tags": [
          "java"
        ]
      },
      {
        "name": "Prosody IM",
        "description": "Feature-rich and easy to configure XMPP server",
        "url": "https://prosody.im/",
        "sourceUrl": "https://hg.prosody.im/",
        "license": "MIT",
        "language": "Lua",
        "tags": [
          "lua"
        ]
      },
      {
        "name": "Snikket",
        "description": "All-in-one Dockerized easy XMPP solution, including web admin and clients. ([Source Code](https://github.com/snikket-im/snikket-server), [Clients](https://snikket.org/app/))",
        "url": "https://snikket.org/",
        "sourceUrl": "",
        "license": "Apache-2.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Tigase",
        "description": "XMPP server implementation in Java",
        "url": "https://tigase.net/xmpp-server",
        "sourceUrl": "https://github.com/tigase/tigase-server",
        "license": "GPL-3.0",
        "language": "Java",
        "tags": [
          "java"
        ]
      }
    ]
  },
  {
    "id": "communication-xmpp-web-clients",
    "name": "Communication - XMPP - Web Clients",
    "items": [
      {
        "name": "Converse.js",
        "description": "XMPP chat client in your browser",
        "url": "https://conversejs.org/",
        "sourceUrl": "https://github.com/conversejs/converse.js",
        "license": "MPL-2.0",
        "language": "Javascript",
        "tags": [
          "javascript"
        ]
      },
      {
        "name": "Libervia",
        "description": "Web frontend from Salut à Toi",
        "url": "https://repos.goffi.org/libervia-web",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Python",
        "tags": [
          "python"
        ]
      },
      {
        "name": "Salut à Toi",
        "description": "Multipurpose, multi frontend, libre and decentralized communication tool",
        "url": "https://www.salut-a-toi.org/",
        "sourceUrl": "https://repos.goffi.org/libervia-backend",
        "license": "AGPL-3.0",
        "language": "Python",
        "tags": [
          "python"
        ]
      }
    ]
  },
  {
    "id": "community-supported-agriculture-csa-",
    "name": "Community-Supported Agriculture (CSA)",
    "items": [
      {
        "name": "ACP Admin",
        "description": "CSA administration. Manage members, subscriptions, deliveries, drop-off locations, member participation, invoices and emails (documentation in French)",
        "url": "https://acp-admin.ch/",
        "sourceUrl": "https://github.com/csa-admin-org/csa-admin",
        "license": "MIT",
        "language": "Ruby",
        "tags": [
          "ruby"
        ]
      },
      {
        "name": "E-Label",
        "description": "Solution for electronic labels, with QR Codes, on wine bottles sold within the European Union",
        "url": "https://filipecarneiro.github.io/ELabel/",
        "sourceUrl": "https://github.com/filipecarneiro/ELabel",
        "license": "MIT",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "FoodCoopShop",
        "description": "User-friendly software for food-coops",
        "url": "https://www.foodcoopshop.com/",
        "sourceUrl": "https://github.com/foodcoopshop/foodcoopshop",
        "license": "AGPL-3.0",
        "language": "PHP/Docker",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Foodsoft",
        "description": "Manage a non-profit food coop (product catalog, ordering, accounting, job scheduling)",
        "url": "https://foodcoops.net/",
        "sourceUrl": "https://github.com/foodcoops/foodsoft",
        "license": "AGPL-3.0",
        "language": "Docker/Ruby",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Hive-Pal",
        "description": "Mobile-first beekeeping management app for tracking hives, inspections, queen records, and equipment with streamlined data entry optimized for field use. ([Demo](https://hivepal.app), [Source Code](https://github.com/martinhrvn/hive-pal))",
        "url": "https://hivepal.app",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Nodejs/Docker",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "juntagrico",
        "description": "Management platform for community gardens and vegetable cooperatives",
        "url": "https://juntagrico.org/",
        "sourceUrl": "https://github.com/juntagrico/juntagrico",
        "license": "LGPL-3.0",
        "language": "Python",
        "tags": [
          "python"
        ]
      },
      {
        "name": "Open Food Network",
        "description": "Online marketplace for local food. It enables a network of independent online food stores that connect farmers and food hubs with individuals and local businesses",
        "url": "https://www.openfoodnetwork.org/",
        "sourceUrl": "https://github.com/openfoodfoundation/openfoodnetwork",
        "license": "AGPL-3.0",
        "language": "Ruby",
        "tags": [
          "ruby"
        ]
      },
      {
        "name": "OpenOlitor",
        "description": "Administration platform for Community Supported Agriculture groups",
        "url": "https://openolitor.org/",
        "sourceUrl": "https://github.com/OpenOlitor/openolitor-server",
        "license": "AGPL-3.0",
        "language": "Scala",
        "tags": [
          "scala"
        ]
      },
      {
        "name": "teikei",
        "description": "A web application that maps out community-supported agriculture based on crowdsourced data. ([Demo](https://ernte-teilen.org/karte/#/))",
        "url": "https://github.com/teikei/teikei",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Nodejs",
        "tags": [
          "nodejs"
        ]
      }
    ]
  },
  {
    "id": "conference-management",
    "name": "Conference Management",
    "items": [
      {
        "name": "indico",
        "description": "Feature-rich event management system, made @ CERN, the place where the Web was born. ([Demo](https://sandbox.getindico.io/), [Source Code](https://github.com/indico/indico))",
        "url": "https://getindico.io/",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Python",
        "tags": [
          "python"
        ]
      },
      {
        "name": "motion.tools (Antragsgrün)",
        "description": "Manage motions and amendments for (political) conventions. ([Demo](https://sandbox.motion.tools/createsite), [Source Code](https://github.com/CatoTH/antragsgruen))",
        "url": "https://motion.tools/",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "PHP/Docker",
        "tags": [
          "php"
        ]
      },
      {
        "name": "OpenSlides",
        "description": "Presentation and assembly system for managing and projecting agenda, motions and elections of an assembly. ([Demo](https://demo.openslides.org/login), [Source Code](https://github.com/OpenSlides/OpenSlides))",
        "url": "https://openslides.com/",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "osem",
        "description": "Event management tailored to free Software conferences",
        "url": "https://osem.io/",
        "sourceUrl": "https://github.com/openSUSE/osem",
        "license": "MIT",
        "language": "Ruby/Docker",
        "tags": [
          "ruby"
        ]
      },
      {
        "name": "pretalx",
        "description": "Web-based event management, including running a Call for Papers, reviewing submissions, and scheduling talks. Exports and imports for various related tools",
        "url": "https://pretalx.org",
        "sourceUrl": "https://github.com/pretalx/pretalx",
        "license": "Apache-2.0",
        "language": "Python",
        "tags": [
          "python"
        ]
      }
    ]
  },
  {
    "id": "content-management-systems-cms-",
    "name": "Content Management Systems (CMS)",
    "items": [
      {
        "name": "Alfresco Community Edition",
        "description": "The open source Enterprise Content Management software that handles any type of content, allowing users to easily share and collaborate on content",
        "url": "https://www.alfresco.com/products/community/download",
        "sourceUrl": "https://github.com/Alfresco/alfresco-community-repo",
        "license": "LGPL-3.0",
        "language": "Java",
        "tags": [
          "java"
        ]
      },
      {
        "name": "Apostrophe",
        "description": "CMS with a focus on extensible in-context editing tools. ([Demo](https://apostrophecms.com/demo), [Source Code](https://github.com/apostrophecms/apostrophe))",
        "url": "https://apostrophecms.com/",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Nodejs",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Automad",
        "description": "Flat-file content management system and template engine. ([Demo](https://try.automad.org/), [Source Code](https://github.com/marcantondahmen/automad))",
        "url": "https://automad.org/",
        "sourceUrl": "",
        "license": "MIT",
        "language": "PHP/Docker",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Backdrop CMS",
        "description": "Comprehensive CMS for small to medium sized businesses and non-profits",
        "url": "https://backdropcms.org/",
        "sourceUrl": "https://github.com/backdrop/backdrop",
        "license": "GPL-2.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "BigTree CMS",
        "description": "Straightforward, well documented, and capable CMS",
        "url": "https://www.bigtreecms.org/",
        "sourceUrl": "https://github.com/bigtreecms/BigTree-CMS",
        "license": "LGPL-2.1",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Bludit",
        "description": "Build a site or blog in seconds. Bludit uses flat-files (text files in JSON format) to store posts and pages",
        "url": "https://www.bludit.com/",
        "sourceUrl": "https://github.com/bludit/bludit",
        "license": "MIT",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Bolt CMS",
        "description": "Content Management Tool, which strives to be as simple and straightforward as possible",
        "url": "https://boltcms.io/",
        "sourceUrl": "https://github.com/bolt/core",
        "license": "MIT",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "CMS Made Simple",
        "description": "Faster and easier management of website contents, scalable for small businesses to large corporations",
        "url": "https://www.cmsmadesimple.org/",
        "sourceUrl": "http://svn.cmsmadesimple.org/svn/cmsmadesimple/trunk/",
        "license": "GPL-2.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Cockpit",
        "description": "Simple content platform to manage any structured content",
        "url": "https://getcockpit.com",
        "sourceUrl": "https://github.com/Cockpit-HQ/Cockpit",
        "license": "MIT",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Concrete 5 CMS",
        "description": "Open source content management system",
        "url": "https://www.concretecms.com",
        "sourceUrl": "https://github.com/concretecms/concretecms",
        "license": "MIT",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Contao",
        "description": "Powerful CMS that allows you to create professional websites and scalable web applications. ([Demo](https://demo.contao.org/contao), [Source Code](https://github.com/contao/contao/))",
        "url": "https://contao.org/",
        "sourceUrl": "",
        "license": "LGPL-3.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "CouchCMS",
        "description": "CMS for designers",
        "url": "https://www.couchcms.com/",
        "sourceUrl": "https://github.com/CouchCMS/CouchCMS",
        "license": "CPAL-1.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Drupal",
        "description": "Advanced open source content management platform",
        "url": "https://www.drupal.org/",
        "sourceUrl": "https://git.drupalcode.org/project/drupal",
        "license": "GPL-2.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "eLabFTW",
        "description": "Online lab notebook for research labs. Store experiments, use a database to find reagents or protocols, use trusted timestamping to legally timestamp an experiment, export as pdf or zip archive, share with collaborators…. ([Demo](https://demo.elabftw.net), [Source Code](https://github.com/elabftw/elabftw))",
        "url": "https://www.elabftw.net",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Expressa",
        "description": "Content Management System for powering database driven websites using JSON schemas. Provides permission management and automatic REST APIs",
        "url": "https://github.com/thomas4019/expressa",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Nodejs",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Joomla!",
        "description": "Advanced Content Management System (CMS)",
        "url": "https://www.joomla.org/",
        "sourceUrl": "https://github.com/joomla/joomla-cms",
        "license": "GPL-2.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "KeystoneJS",
        "description": "CMS and web application platform",
        "url": "https://keystonejs.com/",
        "sourceUrl": "https://github.com/keystonejs/keystone",
        "license": "MIT",
        "language": "Nodejs",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Localess",
        "description": "Powerful translation management and content management system. Manage and translate your website or app content into multiple languages, using AI to translate faster",
        "url": "https://localess.org/home",
        "sourceUrl": "https://github.com/Lessify/localess",
        "license": "MIT",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "MODX",
        "description": "Advanced content management and publishing platform. The current version is called 'Revolution'",
        "url": "https://modx.com/",
        "sourceUrl": "https://github.com/modxcms/revolution",
        "license": "GPL-2.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Neos",
        "description": "Neos or TYPO3 Neos (for version 1) is a modern, open source CMS",
        "url": "https://www.neos.io",
        "sourceUrl": "https://github.com/neos",
        "license": "GPL-3.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Noosfero",
        "description": "Platform for social and solidarity economy networks with blog, e-Portfolios, CMS, RSS, thematic discussion, events agenda and collective intelligence for solidarity economy in the same system",
        "url": "https://gitlab.com/noosfero/noosfero",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Ruby",
        "tags": [
          "ruby"
        ]
      },
      {
        "name": "Omeka",
        "description": "Create complex narratives and share rich collections, adhering to Dublin Core standards with Omeka on your server, designed for scholars, museums, libraries, archives, and enthusiasts. ([Demo](https://omeka.org/classic/showcase/), [Source Code](https://github.com/omeka/Omeka))",
        "url": "https://omeka.org",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Payload CMS",
        "description": "Developer-first headless CMS and application framework",
        "url": "https://payloadcms.com/",
        "sourceUrl": "https://github.com/payloadcms/payload",
        "license": "MIT",
        "language": "Nodejs",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Pimcore",
        "description": "Multi-channel experience and engagement management platform",
        "url": "http://www.pimcore.com/",
        "sourceUrl": "https://github.com/pimcore/pimcore",
        "license": "GPL-3.0",
        "language": "PHP/Docker",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Plone",
        "description": "Powerful open-source CMS system",
        "url": "https://plone.org/",
        "sourceUrl": "https://github.com/plone",
        "license": "ZPL-2.0",
        "language": "Python/Docker",
        "tags": [
          "python"
        ]
      },
      {
        "name": "Publify",
        "description": "Simple but full featured web publishing software",
        "url": "https://publify.github.io/",
        "sourceUrl": "https://github.com/publify/publify",
        "license": "MIT",
        "language": "Ruby",
        "tags": [
          "ruby"
        ]
      },
      {
        "name": "REDAXO",
        "description": "Simple, flexible and useful content management system (documentation in German)",
        "url": "https://www.redaxo.org",
        "sourceUrl": "https://github.com/redaxo/redaxo",
        "license": "MIT",
        "language": "PHP/Docker",
        "tags": [
          "php"
        ]
      },
      {
        "name": "SilverStripe",
        "description": "Easy to use CMS with powerful MVC framework underlying. ([Demo](https://demo.silverstripe.org/), [Source Code](https://github.com/silverstripe))",
        "url": "https://www.silverstripe.org",
        "sourceUrl": "",
        "license": "BSD-3-Clause",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "SPIP",
        "description": "Publication system for the Internet aimed at collaborative work, multilingual environments, and simplicity of use for web authors",
        "url": "https://www.spip.net/fr",
        "sourceUrl": "https://git.spip.net/",
        "license": "GPL-3.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Squidex",
        "description": "Headless CMS, based on MongoDB, CQRS and Event Sourcing. ([Demo](https://cloud.squidex.io), [Source Code](https://github.com/Squidex/squidex))",
        "url": "https://squidex.io",
        "sourceUrl": "",
        "license": "MIT",
        "language": ".NET",
        "tags": [
          ".net"
        ]
      },
      {
        "name": "Strapi",
        "description": "The most advanced open-source Content Management Framework (headless-CMS) to build powerful API with no effort",
        "url": "https://strapi.io/",
        "sourceUrl": "https://github.com/strapi/strapi",
        "license": "MIT",
        "language": "Nodejs",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Superdesk",
        "description": "End-to-end news creation, production, curation, distribution, and publishing platform",
        "url": "https://superdesk.org/",
        "sourceUrl": "https://github.com/superdesk/superdesk",
        "license": "AGPL-3.0",
        "language": "Docker/Python/PHP",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Textpattern",
        "description": "Flexible, elegant and easy-to-use CMS. ([Demo](https://textpattern.co/demo), [Source Code](https://github.com/textpattern/textpattern))",
        "url": "https://textpattern.com/",
        "sourceUrl": "",
        "license": "GPL-2.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Typemill",
        "description": "Author-friendly flat-file-cms with a visual markdown editor based on vue.js",
        "url": "https://typemill.net/",
        "sourceUrl": "https://github.com/typemill/typemill",
        "license": "MIT",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "TYPO3",
        "description": "Powerful and advanced CMS with a large community",
        "url": "https://typo3.org/",
        "sourceUrl": "https://github.com/TYPO3/typo3",
        "license": "GPL-2.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Umbraco",
        "description": "The friendly CMS. Free and open source with an amazing community",
        "url": "https://umbraco.com/",
        "sourceUrl": "https://github.com/umbraco/Umbraco-CMS",
        "license": "MIT",
        "language": ".NET",
        "tags": [
          ".net"
        ]
      },
      {
        "name": "Vvveb CMS",
        "description": "Powerful and easy to use CMS to build websites, blogs or e-commerce stores. ([Demo](https://demo.vvveb.com), [Source Code](https://github.com/givanz/Vvveb))",
        "url": "https://www.vvveb.com",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "PHP/Docker",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Wagtail",
        "description": "Django content management system focused on flexibility and user experience",
        "url": "https://wagtail.io/",
        "sourceUrl": "https://github.com/wagtail/wagtail",
        "license": "BSD-3-Clause",
        "language": "Python",
        "tags": [
          "python"
        ]
      },
      {
        "name": "WinterCMS",
        "description": "Speedy and secure content management system built on the Laravel PHP framework",
        "url": "https://wintercms.com/",
        "sourceUrl": "https://github.com/wintercms/winter",
        "license": "MIT",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "WonderCMS",
        "description": "WonderCMS is the smallest flat file CMS since 2008. ([Demo](https://www.wondercms.com/demo), [Source Code](https://github.com/WonderCMS/wondercms))",
        "url": "https://www.wondercms.com",
        "sourceUrl": "",
        "license": "MIT",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "WordPress",
        "description": "World's most-used blogging and CMS engine",
        "url": "https://wordpress.org/",
        "sourceUrl": "https://github.com/WordPress/WordPress",
        "license": "GPL-2.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      }
    ]
  },
  {
    "id": "customer-relationship-management-crm-",
    "name": "Customer Relationship Management (CRM)",
    "items": [
      {
        "name": "Corteza",
        "description": "CRM including a unified workspace, enterprise messaging and a low code environment for rapidly and securely delivering records-based management solutions. ([Demo](https://latest.cortezaproject.org), [Source Code](https://github.com/cortezaproject/corteza))",
        "url": "https://docs.cortezaproject.org",
        "sourceUrl": "",
        "license": "Apache-2.0",
        "language": "Go",
        "tags": [
          "go"
        ]
      },
      {
        "name": "Django-CRM",
        "description": "Analytical CRM with tasks management, email marketing and many more. Django CRM is built for individual use, businesses of any size or freelancers and is designed to provide easy customization and quick development",
        "url": "https://DjangoCRM.github.io/info/",
        "sourceUrl": "https://github.com/DjangoCRM/django-crm",
        "license": "AGPL-3.0",
        "language": "Python",
        "tags": [
          "python"
        ]
      },
      {
        "name": "EspoCRM",
        "description": "CRM with a frontend designed as a single page application, and a REST API. ([Demo](https://demo.espocrm.com/), [Source Code](https://github.com/espocrm/espocrm))",
        "url": "https://www.espocrm.com/",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Krayin",
        "description": "CRM solution for SMEs and Enterprises for complete customer lifecycle management. ([Demo](https://demo.krayincrm.com/), [Source Code](https://github.com/krayin/laravel-crm))",
        "url": "https://krayincrm.com/",
        "sourceUrl": "",
        "license": "MIT",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Monica",
        "description": "Personal relationship manager, and a new kind of CRM to organize interactions with your friends and family",
        "url": "https://monicahq.com/",
        "sourceUrl": "https://github.com/monicahq/monica",
        "license": "AGPL-3.0",
        "language": "PHP/Docker",
        "tags": [
          "php"
        ]
      },
      {
        "name": "SuiteCRM",
        "description": "The award-winning, enterprise-class open source CRM",
        "url": "https://suitecrm.com",
        "sourceUrl": "https://github.com/SuiteCRM/SuiteCRM",
        "license": "AGPL-3.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Twenty",
        "description": "A modern CRM offering the flexibility of open source, advanced features, and a sleek design",
        "url": "https://twenty.com",
        "sourceUrl": "https://github.com/twentyhq/twenty",
        "license": "AGPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      }
    ]
  },
  {
    "id": "database-management",
    "name": "Database Management",
    "items": [
      {
        "name": "Adminer",
        "description": "Database management in a single PHP file. Available for MySQL, MariaDB, PostgreSQL, SQLite, MS SQL, Oracle, Elasticsearch, MongoDB and others",
        "url": "https://www.adminer.org/",
        "sourceUrl": "https://github.com/vrana/adminer",
        "license": "Apache-2.0/GPL-2.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Azimutt",
        "description": "Visual database exploration made for real world databases (big and messy). Explore your database schema as well as data, document them, extend them and even get analysis and guidelines. ([Demo](https://azimutt.app/gallery/gospeak), [Source Code](https://github.com/azimuttapp/azimutt))",
        "url": "https://azimutt.app",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Elixir/Nodejs/Docker",
        "tags": [
          "elixir"
        ]
      },
      {
        "name": "Baserow",
        "description": "Create your own database without technical experience (alternative to Airtable)",
        "url": "https://baserow.io/",
        "sourceUrl": "https://gitlab.com/baserow/baserow",
        "license": "MIT",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Bytebase",
        "description": "Safe database schema change and version control for DevOps teams, supports MySQL, PostgreSQL, TiDB, ClickHouse, and Snowflake. ([Demo](https://demo.bytebase.com), [Source Code](https://github.com/bytebase/bytebase))",
        "url": "https://www.bytebase.com/",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker/K8S/Go",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Chartbrew",
        "description": "Connect directly to databases and APIs and use the data to create beautiful charts. ([Demo](https://app.chartbrew.com/live-demo), [Source Code](https://github.com/chartbrew/chartbrew))",
        "url": "https://chartbrew.com",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Nodejs/Docker",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "ChartDB",
        "description": "Database diagrams editor that allows you to visualize and design your DB with a single query. ([Demo](https://app.chartdb.io), [Source Code](https://github.com/chartdb/chartdb))",
        "url": "https://chartdb.io/",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Nodejs/Docker",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "CloudBeaver",
        "description": "Manage databases, supports PostgreSQL, MySQL, SQLite and more. A web/hosted version of DBeaver",
        "url": "https://dbeaver.com/",
        "sourceUrl": "https://github.com/dbeaver/cloudbeaver",
        "license": "Apache-2.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Databunker",
        "description": "Network-based, self-hosted, GDPR compliant, secure database for personal data or PII",
        "url": "https://databunker.org/",
        "sourceUrl": "https://github.com/securitybunker/databunker",
        "license": "MIT",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Datasette",
        "description": "Explore and publish data with easy import and export and database management",
        "url": "https://datasette.io/",
        "sourceUrl": "https://github.com/simonw/datasette",
        "license": "Apache-2.0",
        "language": "Python/Docker",
        "tags": [
          "python"
        ]
      },
      {
        "name": "Evidence",
        "description": "Code-based BI tool. Write reports using SQL and markdown and they render as a website",
        "url": "https://evidence.dev",
        "sourceUrl": "https://github.com/evidence-dev/evidence",
        "license": "MIT",
        "language": "Nodejs",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Kottster",
        "description": "Low-code admin panel that connects to your database and automatically generates pages to view and manage your data. ([Demo](https://demo.kottster.app/), [Source Code](https://github.com/kottster/kottster))",
        "url": "https://kottster.app/",
        "sourceUrl": "",
        "license": "Apache-2.0",
        "language": "Nodejs/Docker",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Limbas",
        "description": "Database framework for creating database-driven business applications. As a graphical database frontend, it enables the efficient processing of data stocks and the flexible development of comfortable database applications",
        "url": "https://www.limbas.com/en/",
        "sourceUrl": "https://github.com/limbas/limbas",
        "license": "GPL-2.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Mathesar",
        "description": "Intuitive UI to manage data collaboratively, for users of all technical skill levels. Built on Postgres – connect an existing DB or set up a new one",
        "url": "https://mathesar.org/",
        "sourceUrl": "https://github.com/mathesar-foundation/mathesar",
        "license": "GPL-3.0",
        "language": "Docker/Python",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "WebDB",
        "description": "Efficient database IDE. ([Demo](https://demo.webdb.app/), [Source Code](https://gitlab.com/web-db/app))",
        "url": "https://webdb.app",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      }
    ]
  },
  {
    "id": "dns",
    "name": "DNS",
    "items": [
      {
        "name": "AdGuard Home",
        "description": "User-friendly ads & trackers blocking DNS server",
        "url": "https://adguard.com/en/adguard-home/overview.html",
        "sourceUrl": "https://github.com/AdguardTeam/AdGuardHome",
        "license": "GPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "blocky",
        "description": "Fast and lightweight DNS proxy as ad-blocker for local network with many features (alternative to Pi-hole)",
        "url": "https://0xerr0r.github.io/blocky/latest/",
        "sourceUrl": "https://github.com/0xERR0R/blocky",
        "license": "Apache-2.0",
        "language": "Go/Docker",
        "tags": [
          "go"
        ]
      },
      {
        "name": "Maza ad blocking",
        "description": "Local ad blocker. Like Pi-hole but local and using your operating system",
        "url": "https://maza-ad-blocking.andros.dev/",
        "sourceUrl": "https://github.com/tanrax/maza-ad-blocking",
        "license": "Apache-2.0",
        "language": "Shell",
        "tags": [
          "shell"
        ]
      },
      {
        "name": "Pi-hole",
        "description": "Blackhole for Internet advertisements with a GUI for management and monitoring",
        "url": "https://pi-hole.net/",
        "sourceUrl": "https://github.com/pi-hole/pi-hole",
        "license": "EUPL-1.2",
        "language": "Shell/PHP/Docker",
        "tags": [
          "shell"
        ]
      },
      {
        "name": "Technitium DNS Server",
        "description": "Authoritative/recursive DNS server with ad blocking functionality",
        "url": "https://technitium.com/dns/",
        "sourceUrl": "https://github.com/TechnitiumSoftware/DnsServer",
        "license": "GPL-3.0",
        "language": "Docker/C#",
        "tags": [
          "docker"
        ]
      }
    ]
  },
  {
    "id": "document-management",
    "name": "Document Management",
    "items": [
      {
        "name": "Docspell",
        "description": "Auto-tagging document organizer and archive",
        "url": "https://docspell.org",
        "sourceUrl": "https://github.com/eikek/docspell",
        "license": "GPL-3.0",
        "language": "Scala/Java/Docker",
        "tags": [
          "scala"
        ]
      },
      {
        "name": "Documenso",
        "description": "Digital document signing platform (alternative to DocuSign)",
        "url": "https://documenso.com",
        "sourceUrl": "https://github.com/documenso/documenso",
        "license": "AGPL-3.0",
        "language": "Nodejs/Docker",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Docuseal",
        "description": "Create, fill, and sign digital documents (alternative to DocuSign). ([Demo](https://demo.docuseal.tech/), [Source Code](https://github.com/docusealco/docuseal))",
        "url": "https://www.docuseal.co",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "EveryDocs",
        "description": "Simple Document Management System for private use with basic functionality to organize your documents digitally",
        "url": "https://github.com/jonashellmann/everydocs-core",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Docker/Ruby",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Gotenberg",
        "description": "Developer-friendly API to interact with powerful tools like Chromium and LibreOffice for converting numerous document formats (HTML, Markdown, Word, Excel, etc.) into PDF files, and more",
        "url": "https://gotenberg.dev",
        "sourceUrl": "https://github.com/gotenberg/gotenberg",
        "license": "MIT",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "I, Librarian",
        "description": "Organize PDF papers and office documents. It provides a lot of extra features for students and research groups both in industry and academia. ([Demo](https://eu1.i-librarian.net/demo), [Source Code](https://github.com/mkucej/i-librarian-free))",
        "url": "https://i-librarian.net",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Mayan EDMS",
        "description": "Electronic document management system for your documents with preview generation, OCR, and automatic categorization among other features",
        "url": "https://www.mayan-edms.com",
        "sourceUrl": "https://gitlab.com/mayan-edms/mayan-edms",
        "license": "GPL-2.0",
        "language": "Docker/K8S",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "OpenSign",
        "description": "Document signing software (alternative to DocuSign)",
        "url": "https://www.opensignlabs.com",
        "sourceUrl": "https://github.com/opensignlabs/opensign",
        "license": "AGPL-3.0",
        "language": "Nodejs/Docker",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Paperless-ngx",
        "description": "Scan, index, and archive all of your paper documents with an improved interface (fork of Paperless). ([Demo](https://demo.paperless-ngx.com/), [Source Code](https://github.com/paperless-ngx/paperless-ngx))",
        "url": "https://docs.paperless-ngx.com/",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Python/Docker",
        "tags": [
          "python"
        ]
      },
      {
        "name": "Papermerge",
        "description": "Document management system focused on scanned documents (electronic archives). Features file browsing in similar way to dropbox/google drive. OCR, full text search, text overlay/selection",
        "url": "https://papermerge.com",
        "sourceUrl": "https://github.com/papermerge/papermerge-core",
        "license": "Apache-2.0",
        "language": "Docker/K8S",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Papra",
        "description": "Minimalist document storage, management and archiving platform designed to be simple to use and accessible to everyone. ([Demo](https://demo.papra.app/), [Source Code](https://github.com/papra-hq/papra/))",
        "url": "https://papra.app",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "PdfDing",
        "description": "PDF manager, viewer and editor offering a seamless user experience on multiple devices. It's designed to be minimal, fast, and easy to set up using Docker. ([Demo](https://demo.pdfding.com), [Source Code](https://github.com/mrmn2/PdfDing))",
        "url": "https://www.pdfding.com",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Docker/K8S",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "SeedDMS",
        "description": "Document Management System with workflows, access rights, fulltext search, and more. ([Demo](https://www.seeddms.org/about/), [Source Code](https://sourceforge.net/p/seeddms/code/ci/master/tree/))",
        "url": "https://www.seeddms.org",
        "sourceUrl": "",
        "license": "GPL-2.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Signature PDF",
        "description": "Sign and manipulate PDFs with collaboration, organization, compression and metadata editing. ([Demo](https://pdf.24eme.fr/))",
        "url": "https://github.com/24eme/signaturepdf",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "PHP/deb/Docker",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Stirling-PDF",
        "description": "Local hosted web application that allows you to perform various operations on PDF files, such as merging, splitting, file conversions and OCR",
        "url": "https://github.com/Stirling-Tools/Stirling-PDF",
        "sourceUrl": "",
        "license": "Apache-2.0",
        "language": "Docker/Java",
        "tags": [
          "docker"
        ]
      }
    ]
  },
  {
    "id": "document-management-e-books",
    "name": "Document Management - E-books",
    "items": [
      {
        "name": "Atsumeru",
        "description": "Manga/comic/light novel media server with clients for Windows, Linux, macOS and Android. ([Source Code](https://github.com/Atsumeru-xyz/Atsumeru), [Clients](https://atsumeru.xyz/guides/#how-does-it-work))",
        "url": "https://atsumeru.xyz",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Java/Docker",
        "tags": [
          "java"
        ]
      },
      {
        "name": "BookLogr",
        "description": "Manage your personal book library with ease. ([Demo](https://demo.booklogr.app/))",
        "url": "https://github.com/Mozzo1000/booklogr",
        "sourceUrl": "",
        "license": "Apache-2.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Calibre Web Automated",
        "description": "All-in-one solution, combining the modern lightweight web UI from Calibre-Web with the robust, versatile feature set of Calibre (fork of Calibre Web)",
        "url": "https://github.com/crocodilestick/Calibre-Web-Automated",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Calibre Web",
        "description": "Browse, read and download eBooks using an existing Calibre database",
        "url": "https://github.com/janeczku/calibre-web",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Python",
        "tags": [
          "python"
        ]
      },
      {
        "name": "Calibre",
        "description": "E-book library manager that can view, convert, and catalog e-books in most of the major e-book formats and provides a built-in Web server for remote clients. ([Demo](https://calibre-ebook.com/demo), [Source Code](https://github.com/kovidgoyal/calibre))",
        "url": "https://calibre-ebook.com/",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Python/deb",
        "tags": [
          "python"
        ]
      },
      {
        "name": "Inkheart",
        "description": "Lightweight PDF library and reader",
        "url": "https://gitlab.com/Nystik/inkheart",
        "sourceUrl": "",
        "license": "Apache-2.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Kapowarr",
        "description": "Build and manage a comic book library. Download, rename, move and convert issues of the volume to your liking",
        "url": "https://casvt.github.io/Kapowarr/",
        "sourceUrl": "https://github.com/Casvt/Kapowarr",
        "license": "GPL-3.0",
        "language": "Docker/Python",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Kavita",
        "description": "Cross-platform e-book/manga/comic/pdf server and web reader with user management, ratings and reviews, and metadata support. ([Demo](https://www.kavitareader.com/#demo), [Source Code](https://github.com/Kareadita/Kavita))",
        "url": "https://www.kavitareader.com/",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": ".NET/Docker",
        "tags": [
          ".net"
        ]
      },
      {
        "name": "kiwix-serve",
        "description": "HTTP daemon for serving wikis from ZIM files",
        "url": "https://github.com/kiwix/kiwix-tools",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "C++",
        "tags": [
          "c++"
        ]
      },
      {
        "name": "Komga",
        "description": "Media server for comics/mangas/BDs with API and OPDS support, a modern web interface for exploring your libraries, as well as a web reader",
        "url": "https://komga.org",
        "sourceUrl": "https://github.com/gotson/komga",
        "license": "MIT",
        "language": "Java/Docker",
        "tags": [
          "java"
        ]
      },
      {
        "name": "MyMangaDB",
        "description": "Manga collection manager with automatic metadata, MyAnimeList import and detailed collection statistics",
        "url": "https://github.com/FabianRolfMatthiasNoll/MyMangaDB",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Stump",
        "description": "A fast, free and open source comics, manga and digital book server with OPDS support",
        "url": "https://www.stumpapp.dev",
        "sourceUrl": "https://github.com/stumpapp/stump",
        "license": "MIT",
        "language": "Rust",
        "tags": [
          "rust"
        ]
      }
    ]
  },
  {
    "id": "document-management-institutional-repository-and-digital-library-software",
    "name": "Document Management - Institutional Repository and Digital Library Software",
    "items": [
      {
        "name": "DSpace",
        "description": "Turnkey repository application providing durable access to digital resources",
        "url": "http://www.dspace.org/",
        "sourceUrl": "https://github.com/DSpace/DSpace",
        "license": "BSD-3-Clause",
        "language": "Java",
        "tags": [
          "java"
        ]
      },
      {
        "name": "EPrints",
        "description": "Digital document management system with a flexible metadata and workflow model primarily aimed at academic institutions. ([Demo](http://tryme.demo.eprints-hosting.org/), [Source Code](https://github.com/eprints/eprints3.4))",
        "url": "https://www.eprints.org/",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Perl",
        "tags": [
          "perl"
        ]
      },
      {
        "name": "Fedora Commons Repository",
        "description": "Robust and modular repository system for the management and dissemination of digital content especially suited for digital libraries and archives, both for access and preservation",
        "url": "https://wiki.lyrasis.org/display/FF/Fedora+Repository+Home",
        "sourceUrl": "https://github.com/fcrepo/fcrepo",
        "license": "Apache-2.0",
        "language": "Java",
        "tags": [
          "java"
        ]
      },
      {
        "name": "InvenioRDM",
        "description": "Highly scalable turn-key research data management platform with a beautiful user experience. ([Demo](https://inveniordm.web.cern.ch/), [Source Code](https://github.com/inveniosoftware/invenio-app-rdm), [Clients](https://inveniosoftware.org/products/rdm/))",
        "url": "https://inveniordm.docs.cern.ch/",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Python",
        "tags": [
          "python"
        ]
      },
      {
        "name": "Islandora",
        "description": "Drupal module for browsing and managing Fedora-based digital repositories. ([Demo](https://sandbox.islandora.ca/), [Source Code](https://github.com/Islandora/islandora))",
        "url": "https://www.islandora.ca/",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Samvera Hyrax",
        "description": "Front-end for the Samvera framework, which itself is a Ruby on Rails application for browsing and managing Fedora-based digital repositories",
        "url": "https://samvera.org/",
        "sourceUrl": "https://github.com/samvera/hyrax",
        "license": "Apache-2.0",
        "language": "Ruby",
        "tags": [
          "ruby"
        ]
      }
    ]
  },
  {
    "id": "document-management-integrated-library-systems-ils-",
    "name": "Document Management - Integrated Library Systems (ILS)",
    "items": [
      {
        "name": "Evergreen",
        "description": "Highly-scalable software for libraries that helps library patrons find library materials, and helps libraries manage, catalog, and circulate those materials",
        "url": "https://evergreen-ils.org",
        "sourceUrl": "https://github.com/evergreen-library-system/Evergreen",
        "license": "GPL-2.0",
        "language": "PLpgSQL",
        "tags": [
          "plpgsql"
        ]
      },
      {
        "name": "Koha",
        "description": "Enterprise-class ILS with modules for acquisitions, circulation, cataloging, label printing, offline circulation for when Internet access is not available, and much more. ([Demo](https://koha-community.org/demo/), [Source Code](https://github.com/Koha-Community/Koha))",
        "url": "https://koha-community.org/",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Perl",
        "tags": [
          "perl"
        ]
      },
      {
        "name": "RERO ILS",
        "description": "Large-scale ILS that can be run as a service with consortial features, intended primarily for library networks. Includes most standard modules (circulation, acquisitions, cataloging,...) and a web-based public and professional interface. ([Demo](https://ils.test.rero.ch/), [Source Code](https://github.com/rero/rero-ils))",
        "url": "https://rero21.ch/",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Python/Docker",
        "tags": [
          "python"
        ]
      }
    ]
  },
  {
    "id": "e-commerce",
    "name": "E-commerce",
    "items": [
      {
        "name": "Aimeos",
        "description": "E-commerce framework for building custom online shops, market places and complex B2B applications scaling to billions of items with Laravel. ([Demo](https://demo.aimeos.org/), [Source Code](https://github.com/aimeos/aimeos))",
        "url": "https://aimeos.org/",
        "sourceUrl": "",
        "license": "LGPL-3.0/MIT",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Bagisto",
        "description": "Leading Laravel open source e-commerce framework with multi-inventory sources, taxation, localization, dropshipping and more exciting features. ([Demo](https://demo.bagisto.com/), [Source Code](https://github.com/bagisto/bagisto))",
        "url": "https://bagisto.com/en/",
        "sourceUrl": "",
        "license": "MIT",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "CoreShop",
        "description": "E-commerce plugin for Pimcore",
        "url": "https://www.coreshop.org",
        "sourceUrl": "https://github.com/coreshop/CoreShop",
        "license": "GPL-3.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Drupal Commerce",
        "description": "Popular e-commerce module for Drupal CMS, with support for dozens of payment, shipping, and shopping related modules",
        "url": "https://drupalcommerce.org",
        "sourceUrl": "https://git.drupalcode.org/project/commerce",
        "license": "GPL-2.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "EverShop",
        "description": "E-commerce platform with essential commerce features. Modular architecture and fully customizable. ([Demo](https://demo.evershop.io/), [Source Code](https://github.com/evershopcommerce/evershop))",
        "url": "https://evershop.io/",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Docker/Nodejs",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Litecart",
        "description": "Shopping cart in 1 file (with support for payment by card or cryptocurrency)",
        "url": "https://github.com/shurco/litecart",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Go/Docker",
        "tags": [
          "go"
        ]
      },
      {
        "name": "Magento Open Source",
        "description": "Leading provider of open omnichannel innovation",
        "url": "https://business.adobe.com/products/magento/magento-commerce.html",
        "sourceUrl": "https://github.com/magento/magento2",
        "license": "OSL-3.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "MedusaJs",
        "description": "Headless commerce engine that enables developers to create amazing digital commerce experiences. ([Demo](https://next.medusajs.com/), [Source Code](https://github.com/medusajs/medusa))",
        "url": "https://medusajs.com/",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Nodejs",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Microweber",
        "description": "Drag and Drop CMS and online shop",
        "url": "https://microweber.com/",
        "sourceUrl": "https://github.com/microweber/microweber",
        "license": "MIT",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Open Source POS",
        "description": "Open Source Point of Sale is a web based point of sale system",
        "url": "https://github.com/opensourcepos/opensourcepos",
        "sourceUrl": "",
        "license": "MIT",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "OpenCart",
        "description": "Shopping cart solution",
        "url": "https://www.opencart.com",
        "sourceUrl": "https://github.com/opencart/opencart",
        "license": "GPL-3.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "PrestaShop",
        "description": "Fully scalable e-commerce solution. ([Demo](https://demo.prestashop.com/), [Source Code](https://github.com/PrestaShop/PrestaShop))",
        "url": "https://www.prestashop.com/",
        "sourceUrl": "",
        "license": "OSL-3.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Pretix",
        "description": "Ticket sales platform for events",
        "url": "https://pretix.eu/",
        "sourceUrl": "https://github.com/pretix/pretix",
        "license": "AGPL-3.0",
        "language": "Python/Docker",
        "tags": [
          "python"
        ]
      },
      {
        "name": "s-cart",
        "description": "E-commerce website for individuals and businesses, built on top of Laravel Framework. ([Demo](https://demo.s-cart.org/), [Source Code](https://github.com/gp247net/s-cart))",
        "url": "https://s-cart.org/",
        "sourceUrl": "",
        "license": "MIT",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Saleor",
        "description": "Django based open-sourced e-commerce storefront. ([Demo](https://demo.saleor.io/), [Source Code](https://github.com/saleor/saleor))",
        "url": "https://saleor.io",
        "sourceUrl": "",
        "license": "BSD-3-Clause",
        "language": "Docker/Python",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Shopware Community Edition",
        "description": "PHP based open source e-commerce software made in Germany. ([Demo](https://www.shopware.com/en/test-demo/), [Source Code](https://github.com/shopware/shopware))",
        "url": "https://www.shopware.com/en/community/community-edition/",
        "sourceUrl": "",
        "license": "MIT",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Solidus",
        "description": "A free, open-source ecommerce platform that gives you complete control over your store",
        "url": "https://solidus.io/",
        "sourceUrl": "https://github.com/solidusio/solidus",
        "license": "BSD-3-Clause",
        "language": "Ruby/Docker",
        "tags": [
          "ruby"
        ]
      },
      {
        "name": "Spree Commerce",
        "description": "Spree is a complete, modular & API-driven open source e-commerce solution for Ruby on Rails. ([Demo](https://demo.spreecommerce.org/), [Source Code](https://github.com/spree/spree))",
        "url": "https://spreecommerce.org",
        "sourceUrl": "",
        "license": "BSD-3-Clause",
        "language": "Ruby",
        "tags": [
          "ruby"
        ]
      },
      {
        "name": "Sylius",
        "description": "Symfony2 powered open source full-stack platform for eCommerce. ([Demo](https://sylius.com/try/), [Source Code](https://github.com/Sylius/Sylius))",
        "url": "https://sylius.com",
        "sourceUrl": "",
        "license": "MIT",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Thelia",
        "description": "Thelia is an open source and flexible e-commerce solution. ([Demo](https://demo.thelia.net/), [Source Code](https://github.com/thelia/thelia))",
        "url": "https://thelia.net/",
        "sourceUrl": "",
        "license": "LGPL-3.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Vendure",
        "description": "A headless commerce framework. ([Demo](https://demo.vendure.io), [Source Code](https://github.com/vendurehq/vendure))",
        "url": "https://www.vendure.io",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Nodejs",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "WooCommerce",
        "description": "WordPress based e-commerce solution",
        "url": "https://woocommerce.com/",
        "sourceUrl": "https://github.com/woocommerce/woocommerce",
        "license": "GPL-3.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      }
    ]
  },
  {
    "id": "feed-readers",
    "name": "Feed Readers",
    "items": [
      {
        "name": "Bubo Reader",
        "description": "Irrationally minimal RSS feed reader. ([Demo](https://bubo-rss-demo.netlify.app/))",
        "url": "https://github.com/georgemandis/bubo-rss",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Nodejs",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "CommaFeed",
        "description": "Google Reader inspired self-hosted RSS reader. ([Demo](https://www.commafeed.com/#/app/category/all), [Source Code](https://github.com/Athou/commafeed))",
        "url": "https://www.commafeed.com/",
        "sourceUrl": "",
        "license": "Apache-2.0",
        "language": "Java/Docker",
        "tags": [
          "java"
        ]
      },
      {
        "name": "FeedCord",
        "description": "Simple, lightweight & customizable RSS News Feed for your Discord Server",
        "url": "https://github.com/Qolors/FeedCord",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Feedpushr",
        "description": "Powerful RSS aggregator, able to transform and send articles to many outputs. Single binary, extensible with plugins",
        "url": "https://github.com/ncarlier/feedpushr",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Go/Docker",
        "tags": [
          "go"
        ]
      },
      {
        "name": "Feeds Fun",
        "description": "News reader with tags, scoring, and AI",
        "url": "https://feeds.fun/",
        "sourceUrl": "https://github.com/Tiendil/feeds.fun",
        "license": "BSD-3-Clause",
        "language": "Python",
        "tags": [
          "python"
        ]
      },
      {
        "name": "FreshRSS",
        "description": "Self-hostable RSS feed aggregator. ([Demo](https://demo.freshrss.org/i/), [Source Code](https://github.com/FreshRSS/FreshRSS))",
        "url": "https://freshrss.org/",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "PHP/Docker",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Fusion",
        "description": "Lightweight RSS aggregator and reader",
        "url": "https://github.com/0x2E/fusion",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Go/Docker",
        "tags": [
          "go"
        ]
      },
      {
        "name": "JARR",
        "description": "JARR (Just Another RSS Reader) is a web-based news aggregator and reader (fork of Newspipe). ([Demo](https://www.jarr.info/), [Source Code](https://github.com/jaesivsm/JARR))",
        "url": "https://1pxsolidblack.pl/jarr-en.html",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Docker/Python",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Kriss Feed",
        "description": "Simple and smart (or stupid) feed reader",
        "url": "https://github.com/tontof/kriss_feed",
        "sourceUrl": "",
        "license": "CC0-1.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Leed",
        "description": "Leed (for Light Feed) is a Free and minimalist RSS aggregator",
        "url": "https://github.com/LeedRSS/Leed",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Miniflux",
        "description": "Minimalist news reader",
        "url": "https://miniflux.app/",
        "sourceUrl": "https://github.com/miniflux/v2",
        "license": "Apache-2.0",
        "language": "Go/deb/Docker",
        "tags": [
          "go"
        ]
      },
      {
        "name": "NewsBlur",
        "description": "Personal news reader that brings people together to talk about the world. A new sound of an old instrument",
        "url": "https://www.newsblur.com/",
        "sourceUrl": "https://github.com/samuelclay/NewsBlur",
        "license": "MIT",
        "language": "Python",
        "tags": [
          "python"
        ]
      },
      {
        "name": "Newspipe",
        "description": "Web news reader. ([Demo](https://www.newspipe.org/signup))",
        "url": "https://git.sr.ht/~cedric/newspipe",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Python",
        "tags": [
          "python"
        ]
      },
      {
        "name": "reader",
        "description": "Feed reader web app and library (so you can use it to build your own), with only standard library and pure-Python dependencies",
        "url": "https://github.com/lemon24/reader",
        "sourceUrl": "",
        "license": "BSD-3-Clause",
        "language": "Python",
        "tags": [
          "python"
        ]
      },
      {
        "name": "Readflow",
        "description": "Lightweight news reader with modern interface and features: full-text search, automatic categorization, archiving, offline support, notifications",
        "url": "https://readflow.app",
        "sourceUrl": "https://github.com/ncarlier/readflow",
        "license": "AGPL-3.0",
        "language": "Go/Docker",
        "tags": [
          "go"
        ]
      },
      {
        "name": "RSS-Bridge",
        "description": "Generate RSS/ATOM feeds for websites which don't have one",
        "url": "https://github.com/RSS-Bridge/rss-bridge",
        "sourceUrl": "",
        "license": "Unlicense",
        "language": "PHP/Docker",
        "tags": [
          "php"
        ]
      },
      {
        "name": "RSS Monster",
        "description": "Easy to use web-based RSS aggregator and reader compatible with the Fever API (alternative to Google Reader)",
        "url": "https://github.com/pietheinstrengholt/rssmonster",
        "sourceUrl": "",
        "license": "MIT",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "RSS2EMail",
        "description": "Fetches RSS/Atom-feeds and pushes new content to any email-receiver, supports OPML",
        "url": "https://github.com/rss2email/rss2email",
        "sourceUrl": "",
        "license": "GPL-2.0",
        "language": "Python/deb",
        "tags": [
          "python"
        ]
      },
      {
        "name": "RSSHub",
        "description": "Easy to use, and extensible RSS feed aggregator capable of generating RSS feeds from pretty much everything ranging from social media to university departments. ([Demo](https://rsshub.app), [Source Code](https://github.com/DIYgod/RSSHub))",
        "url": "https://docs.rsshub.app",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Nodejs/Docker",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Selfoss",
        "description": "New multipurpose rss reader, live stream, mashup, aggregation web application",
        "url": "https://selfoss.aditu.de/",
        "sourceUrl": "https://github.com/fossar/selfoss",
        "license": "GPL-3.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Stringer",
        "description": "Work-in-progress self-hosted, anti-social RSS reader",
        "url": "https://github.com/stringer-rss/stringer",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Ruby",
        "tags": [
          "ruby"
        ]
      },
      {
        "name": "Tiny Tiny RSS",
        "description": "Web-based news feed (RSS/Atom) reader and aggregator",
        "url": "https://tt-rss.org",
        "sourceUrl": "https://github.com/tt-rss/tt-rss",
        "license": "GPL-3.0",
        "language": "Docker/PHP",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "TinyFeed",
        "description": "Generate a static HTML page from a collection of feeds with a simple CLI. ([Demo](https://feed.lovergne.dev/demo), [Source Code](https://github.com/TheBigRoomXXL/tinyfeed))",
        "url": "https://feed.lovergne.dev/",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Go/Docker",
        "tags": [
          "go"
        ]
      },
      {
        "name": "Upvote RSS",
        "description": "Generate rich RSS feeds from Reddit, Hacker News, Lemmy, Mbin, and more. ([Demo](https://www.upvote-rss.com/), [Source Code](https://github.com/johnwarne/upvote-rss))",
        "url": "https://www.upvote-rss.com/",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker/PHP",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Yarr",
        "description": "Yarr (yet another rss reader) is a web-based feed aggregator which can be used both as a desktop application and a personal self-hosted server",
        "url": "https://github.com/nkanaev/yarr",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Go",
        "tags": [
          "go"
        ]
      }
    ]
  },
  {
    "id": "file-transfer-synchronization",
    "name": "File Transfer & Synchronization",
    "items": [
      {
        "name": "bewCloud",
        "description": "File sharing + sync, notes, and photos (alternative to Nextcloud and ownCloud's RSS reader). ([Source Code](https://github.com/bewcloud/bewcloud), [Clients](https://github.com/bewcloud))",
        "url": "https://bewcloud.com",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Cloudreve",
        "description": "File management and sharing system, supports multiple storage providers. ([Demo](https://demo.cloudreve.org), [Source Code](https://github.com/cloudreve/cloudreve))",
        "url": "https://cloudreve.org/",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Docker/Go",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Git Annex",
        "description": "File synchronization between computers, servers, external drives",
        "url": "https://git-annex.branchable.com/",
        "sourceUrl": "https://git.joeyh.name/index.cgi/git-annex.git/",
        "license": "GPL-3.0",
        "language": "Haskell",
        "tags": [
          "haskell"
        ]
      },
      {
        "name": "Kinto",
        "description": "Minimalist JSON storage service with synchronisation and sharing abilities",
        "url": "https://kinto.readthedocs.org",
        "sourceUrl": "https://github.com/Kinto/kinto",
        "license": "Apache-2.0",
        "language": "Python",
        "tags": [
          "python"
        ]
      },
      {
        "name": "Nextcloud",
        "description": "Access and share your files, calendars, contacts, mail and [more](https://apps.nextcloud.com/) from any device, on your terms. ([Demo](https://try.nextcloud.com/), [Source Code](https://github.com/nextcloud/server))",
        "url": "https://nextcloud.com/",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "PHP/deb",
        "tags": [
          "php"
        ]
      },
      {
        "name": "OpenCloud",
        "description": "File Sharing and Collaboration Platform",
        "url": "https://docs.opencloud.eu/",
        "sourceUrl": "https://github.com/opencloud-eu/opencloud",
        "license": "Apache-2.0",
        "language": "Docker/Go/Nodejs",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "OpenSSH SFTP server",
        "description": "Secure File Transfer Program",
        "url": "https://www.openssh.com/",
        "sourceUrl": "https://cvsweb.openbsd.org/cgi-bin/cvsweb/src/usr.bin/ssh/",
        "license": "BSD-2-Clause",
        "language": "C/deb",
        "tags": [
          "c"
        ]
      },
      {
        "name": "ownCloud",
        "description": "All-in-one solution for saving, synchronizing, viewing, editing and sharing files, calendars, address books and more. ([Source Code](https://github.com/owncloud/core), [Clients](https://github.com/owncloud/core/wiki/Apps))",
        "url": "https://owncloud.org/",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "PHP/Docker/deb",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Peergos",
        "description": "Secure and private space online where you can store, share and view your photos, videos, music and documents. Also includes a calendar, news feed, task lists, chat and email client",
        "url": "https://peergos.org",
        "sourceUrl": "https://github.com/Peergos/Peergos",
        "license": "AGPL-3.0",
        "language": "Java",
        "tags": [
          "java"
        ]
      },
      {
        "name": "Puter",
        "description": "Web-based operating system designed to be feature-rich, exceptionally fast, and highly extensible. ([Demo](https://puter.com/), [Source Code](https://github.com/heyputer/puter))",
        "url": "https://puter.com/",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Nodejs/Docker",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Pydio",
        "description": "Turn any web server into a powerful file management system and an alternative to mainstream cloud storage providers. ([Demo](https://pydio.com/en/demo), [Source Code](https://github.com/pydio/cells))",
        "url": "https://pydio.com/",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Go",
        "tags": [
          "go"
        ]
      },
      {
        "name": "Samba",
        "description": "Samba is the standard Windows interoperability suite of programs for Linux and Unix. It provides secure, stable and fast file and print services for all clients using the SMB/CIFS protocol",
        "url": "https://www.samba.org/",
        "sourceUrl": "https://git.samba.org/samba.git/",
        "license": "GPL-3.0",
        "language": "C",
        "tags": [
          "c"
        ]
      },
      {
        "name": "Seafile",
        "description": "File hosting and sharing solution primary for teams and organizations",
        "url": "https://www.seafile.com/en/home/",
        "sourceUrl": "https://github.com/haiwen/seafile",
        "license": "GPL-2.0/GPL-3.0/AGPL-3.0/Apache-2.0",
        "language": "C",
        "tags": [
          "c"
        ]
      },
      {
        "name": "Sync-in",
        "description": "File storage, syncing, sharing, and collaboration with real-time editing, permission management, and desktop/CLI clients. ([Demo](https://sync-in.com/docs/demo), [Source Code](https://github.com/Sync-in/server), [Clients](https://github.com/Sync-in/desktop))",
        "url": "https://sync-in.com",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Nodejs/Docker",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Syncthing",
        "description": "Syncthing is an open source peer-to-peer file synchronisation tool",
        "url": "https://syncthing.net/",
        "sourceUrl": "https://github.com/syncthing/syncthing",
        "license": "MPL-2.0",
        "language": "Go/Docker/deb",
        "tags": [
          "go"
        ]
      },
      {
        "name": "Unison",
        "description": "Unison is a file-synchronization tool for OSX, Unix, and Windows",
        "url": "https://www.cis.upenn.edu/~bcpierce/unison/",
        "sourceUrl": "https://github.com/bcpierce00/unison",
        "license": "GPL-3.0",
        "language": "deb/OCaml",
        "tags": [
          "deb"
        ]
      }
    ]
  },
  {
    "id": "file-transfer-object-storage-file-servers",
    "name": "File Transfer - Object Storage & File Servers",
    "items": [
      {
        "name": "GarageHQ",
        "description": "Geo-distributed, S3‑compatible storage service that can fulfill many needs",
        "url": "https://garagehq.deuxfleurs.fr/",
        "sourceUrl": "https://git.deuxfleurs.fr/Deuxfleurs/garage",
        "license": "AGPL-3.0",
        "language": "Docker/Rust",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Harbor",
        "description": "Cloud native image registry that stores, signs, and scans content",
        "url": "https://goharbor.io/",
        "sourceUrl": "https://github.com/goharbor/harbor",
        "license": "Apache-2.0",
        "language": "Docker/K8S",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "SeaweedFS",
        "description": "SeaweedFS is an open source distributed file system supporting WebDAV, S3 API, FUSE mount, HDFS, etc, optimized for lots of small files, and easy to add capacity",
        "url": "https://github.com/seaweedfs/seaweedfs",
        "sourceUrl": "",
        "license": "Apache-2.0",
        "language": "Go",
        "tags": [
          "go"
        ]
      },
      {
        "name": "Zenko CloudServer",
        "description": "Zenko CloudServer, an open-source implementation of a server handling the Amazon S3 protocol",
        "url": "https://www.zenko.io/cloudserver",
        "sourceUrl": "https://github.com/scality/cloudserver",
        "license": "Apache-2.0",
        "language": "Docker/Nodejs",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "ZOT OCI Registry",
        "description": "A production-ready vendor-neutral OCI-native container image registry. ([Demo](https://zothub.io), [Source Code](https://github.com/project-zot/zot))",
        "url": "https://zotregistry.dev",
        "sourceUrl": "",
        "license": "Apache-2.0",
        "language": "Go/Docker",
        "tags": [
          "go"
        ]
      }
    ]
  },
  {
    "id": "file-transfer-peer-to-peer-filesharing",
    "name": "File Transfer - Peer-to-peer Filesharing",
    "items": [
      {
        "name": "bittorrent-tracker",
        "description": "Simple, robust, BitTorrent tracker (client and server) implementation",
        "url": "https://webtorrent.io/",
        "sourceUrl": "https://github.com/webtorrent/bittorrent-tracker",
        "license": "MIT",
        "language": "Nodejs",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Deluge",
        "description": "Lightweight, cross-platform BitTorrent client",
        "url": "https://deluge-torrent.org/",
        "sourceUrl": "https://git.deluge-torrent.org/deluge/tree/?h=develop",
        "license": "GPL-3.0",
        "language": "Python/deb",
        "tags": [
          "python"
        ]
      },
      {
        "name": "PrivyDrop",
        "description": "Simple and user-friendly, breakpoint-resumable peer-to-peer text, image, and file transfer tool based on WebRTC",
        "url": "https://www.privydrop.app",
        "sourceUrl": "https://github.com/david-bai00/PrivyDrop",
        "license": "MIT",
        "language": "Docker/Nodejs",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "qBittorrent",
        "description": "Free cross-platform bittorrent client with a feature rich Web UI for remote access",
        "url": "https://www.qbittorrent.org/",
        "sourceUrl": "https://github.com/qbittorrent/qBittorrent",
        "license": "GPL-2.0",
        "language": "C++",
        "tags": [
          "c++"
        ]
      },
      {
        "name": "Send",
        "description": "Simple, private, end to end encrypted temporary file sharing, originally built by Mozilla. ([Demo](https://send.vis.ee/), [Clients](https://gitlab.com/timvisee/send#clients))",
        "url": "https://gitlab.com/timvisee/send",
        "sourceUrl": "",
        "license": "MPL-2.0",
        "language": "Nodejs/Docker",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "slskd",
        "description": "A modern client-server application for the Soulseek file sharing network",
        "url": "https://github.com/slskd/slskd",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Docker/C#",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Transmission",
        "description": "Fast, easy, free Bittorrent client",
        "url": "https://transmissionbt.com/",
        "sourceUrl": "https://github.com/transmission/transmission",
        "license": "GPL-3.0",
        "language": "C++/deb",
        "tags": [
          "c++"
        ]
      },
      {
        "name": "Webtor",
        "description": "Web-based torrent client with instant audio/video streaming. ([Demo](https://webtor.io))",
        "url": "https://github.com/webtor-io/self-hosted",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      }
    ]
  },
  {
    "id": "file-transfer-single-click-drag-n-drop-upload",
    "name": "File Transfer - Single-click & Drag-n-drop Upload",
    "items": [
      {
        "name": "015",
        "description": "A temporary file sharing platform. Focused on providing one-time, temporary file and text upload, processing, and sharing services",
        "url": "https://send.fudaoyuan.icu",
        "sourceUrl": "https://github.com/keven1024/015",
        "license": "AGPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Chibisafe",
        "description": "File uploader service that aims to to be easy to use and set up. It accepts files, photos, documents, anything you imagine and gives you back a shareable link for you to send to others",
        "url": "https://chibisafe.app",
        "sourceUrl": "https://github.com/chibisafe/chibisafe",
        "license": "MIT",
        "language": "Docker/Nodejs",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Digirecord",
        "description": "Record and share audio files (documentation in French)",
        "url": "https://ladigitale.dev/digirecord/",
        "sourceUrl": "https://codeberg.org/ladigitale/digirecord",
        "license": "AGPL-3.0",
        "language": "Nodejs/PHP",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "elixire",
        "description": "Simple yet advanced screenshot uploading and link shortening service. ([Clients](https://gitlab.com/elixire/elixiremanager))",
        "url": "https://gitlab.com/elixire/elixire",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Python",
        "tags": [
          "python"
        ]
      },
      {
        "name": "Enclosed",
        "description": "Minimalistic web application designed for sending private and secure notes. ([Demo](https://enclosed.cc/), [Source Code](https://github.com/CorentinTh/enclosed))",
        "url": "https://enclosed.cc/",
        "sourceUrl": "",
        "license": "Apache-2.0",
        "language": "Docker/Nodejs",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Files Sharing",
        "description": "File sharing application based on unique and temporary links",
        "url": "https://github.com/axeloz/filesharing",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "PHP/Docker",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Flare",
        "description": "A nonbloated, modern, and highly configurable file/screenshot vault server with support for ShareX, Flameshot, and Spectacle. Offers OCR search and more",
        "url": "https://github.com/FlintSH/Flare",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker/Nodejs",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Gokapi",
        "description": "Lightweight server to share files, which expire after a set amount of downloads or days. Similar to the discontinued Firefox Send, with the difference that only the admin is allowed to upload files",
        "url": "https://github.com/Forceu/gokapi",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Go/Docker",
        "tags": [
          "go"
        ]
      },
      {
        "name": "goploader",
        "description": "Easy file sharing with server-side encryption, curl/httpie/wget compliant",
        "url": "https://depado.github.io/goploader/",
        "sourceUrl": "https://github.com/Depado/goploader",
        "license": "MIT",
        "language": "Go",
        "tags": [
          "go"
        ]
      },
      {
        "name": "GoSƐ",
        "description": "Modern file-uploader focusing on scalability and simplicity. It only depends on a S3 storage backend and hence scales horizontally without the need for additional databases or caches",
        "url": "https://codeberg.org/stv0g/gose",
        "sourceUrl": "",
        "license": "Apache-2.0",
        "language": "Go/Docker",
        "tags": [
          "go"
        ]
      },
      {
        "name": "Jirafeau",
        "description": "One-click-fileshare project. Select your file, upload, and share a link. That's it",
        "url": "https://gitlab.com/jirafeau/Jirafeau",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "PHP/Docker",
        "tags": [
          "php"
        ]
      },
      {
        "name": "OnionShare",
        "description": "Securely and anonymously share a file of any size",
        "url": "https://github.com/onionshare/onionshare",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Python/deb",
        "tags": [
          "python"
        ]
      },
      {
        "name": "PicoShare",
        "description": "Minimalist, easy-to-host service for sharing images and other files",
        "url": "https://github.com/mtlynch/picoshare",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Go/Docker",
        "tags": [
          "go"
        ]
      },
      {
        "name": "Picsur",
        "description": "Simple imaging hosting platform that allows you to easily host, edit, and share images",
        "url": "https://github.com/CaramelFur/Picsur",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "PictShare",
        "description": "Multi lingual image hosting service with a simple resizing and upload API",
        "url": "https://www.pictshare.net/",
        "sourceUrl": "https://github.com/HaschekSolutions/pictshare",
        "license": "Apache-2.0",
        "language": "PHP/Docker",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Plik",
        "description": "Scalable and friendly temporary file upload system. ([Demo](https://plik.root.gg/))",
        "url": "https://github.com/root-gg/plik",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Go/Docker",
        "tags": [
          "go"
        ]
      },
      {
        "name": "ProjectSend",
        "description": "Upload files and assign them to specific clients you create. Give access to those files to your clients",
        "url": "https://www.projectsend.org/",
        "sourceUrl": "https://github.com/projectsend/projectsend",
        "license": "GPL-2.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "PsiTransfer",
        "description": "Simple file sharing solution with robust up-/download-resume and password protection",
        "url": "https://github.com/psi-4ward/psitransfer",
        "sourceUrl": "",
        "license": "BSD-2-Clause",
        "language": "Nodejs",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "QuickShare",
        "description": "Quick and simple file sharing between different devices",
        "url": "https://ihexxa.github.io/quickshare.site/",
        "sourceUrl": "https://github.com/ihexxa/quickshare",
        "license": "LGPL-3.0",
        "language": "Docker/Go",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Sharry",
        "description": "Share files easily over the internet between authenticated and anonymous users (both ways) with resumable up- and downloads",
        "url": "https://github.com/eikek/sharry",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Scala/Java/deb/Docker",
        "tags": [
          "scala"
        ]
      },
      {
        "name": "Shifter",
        "description": "A simple, self-hosted file-sharing web app, powered by Django",
        "url": "https://github.com/TobySuch/Shifter",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Slink",
        "description": "Image sharing platform designed to give users complete control over their media sharing experience",
        "url": "https://docs.slinkapp.io/",
        "sourceUrl": "https://github.com/andrii-kryvoviaz/slink",
        "license": "AGPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "transfer.sh",
        "description": "Easy file sharing from the command line",
        "url": "https://github.com/dutchcoders/transfer.sh",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Go",
        "tags": [
          "go"
        ]
      },
      {
        "name": "Uguu",
        "description": "Stores files and deletes after X amount of time",
        "url": "https://github.com/nokonoko/uguu",
        "sourceUrl": "",
        "license": "MIT",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Uploady",
        "description": "Uploady is a simple file uploader script with multi file upload support",
        "url": "https://github.com/farisc0de/Uploady",
        "sourceUrl": "",
        "license": "MIT",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "XBackBone",
        "description": "A simple, fast and lightweight file manager with instant sharing tools integration, like ShareX (a free and open-source screenshot utility for Windows)",
        "url": "https://xbackbone.app/",
        "sourceUrl": "https://github.com/SergiX44/XBackBone",
        "license": "AGPL-3.0",
        "language": "PHP/Docker",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Zipline",
        "description": "A lightweight, fast and reliable file sharing server that is commonly used with ShareX, offering a react-based Web UI and fast API",
        "url": "https://github.com/diced/zipline",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker/Nodejs",
        "tags": [
          "docker"
        ]
      }
    ]
  },
  {
    "id": "file-transfer-web-based-file-managers",
    "name": "File Transfer - Web-based File Managers",
    "items": [
      {
        "name": "Apaxy",
        "description": "Theme built to enhance the experience of browsing web directories, using the mod_autoindex Apache module and some CSS to override the default style of a directory listing",
        "url": "https://oupala.github.io/apaxy/",
        "sourceUrl": "https://github.com/oupala/apaxy",
        "license": "GPL-3.0",
        "language": "Javascript",
        "tags": [
          "javascript"
        ]
      },
      {
        "name": "copyparty",
        "description": "Portable file server with accelerated resumable uploads, deduplication, WebDAV, FTP, zeroconf, media indexer, video thumbnails, audio transcoding, and write-only folders, in a single file with no mandatory dependencies. ([Demo](https://a.ocv.me/pub/demo/))",
        "url": "https://github.com/9001/copyparty",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Python",
        "tags": [
          "python"
        ]
      },
      {
        "name": "Directory Lister",
        "description": "Simple PHP based directory lister that lists a directory and all its sub-directories and allows you to navigate there within",
        "url": "https://www.directorylister.com/",
        "sourceUrl": "https://github.com/DirectoryLister/DirectoryLister",
        "license": "MIT",
        "language": "PHP/Docker",
        "tags": [
          "php"
        ]
      },
      {
        "name": "filebrowser",
        "description": "Web File Browser with a Material Design web interface",
        "url": "https://filebrowser.org/",
        "sourceUrl": "https://github.com/filebrowser/filebrowser",
        "license": "Apache-2.0",
        "language": "Go",
        "tags": [
          "go"
        ]
      },
      {
        "name": "FileGator",
        "description": "FileGator is a powerful multi-user file manager with a single page front-end. ([Demo](https://demo.filegator.io), [Source Code](https://github.com/filegator/filegator))",
        "url": "https://filegator.io/",
        "sourceUrl": "",
        "license": "MIT",
        "language": "PHP/Docker",
        "tags": [
          "php"
        ]
      },
      {
        "name": "FileRise",
        "description": "Web file manager with uploads, tagging, share links, gallery/table views, and an in-browser editor. ([Demo](https://github.com/error311/FileRise?tab=readme-ov-file#live-demo))",
        "url": "https://github.com/error311/FileRise",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker/PHP",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Filestash",
        "description": "Web file manager that lets you manage your data anywhere it is located: FTP, SFTP, WebDAV, Git, S3, Minio, Dropbox, or Google Drive. ([Demo](https://demo.filestash.app/), [Source Code](https://github.com/mickael-kerjean/filestash))",
        "url": "https://www.filestash.app/",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Gossa",
        "description": "Light and simple webserver for your files",
        "url": "https://github.com/pldubouilh/gossa",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Go",
        "tags": [
          "go"
        ]
      },
      {
        "name": "IFM",
        "description": "Single script file manager",
        "url": "https://github.com/misterunknown/ifm",
        "sourceUrl": "",
        "license": "MIT",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "mikochi",
        "description": "Browse remote folders, upload files, delete, rename, download and stream files to VLC/mpv",
        "url": "https://github.com/zer0tonin/Mikochi",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Go/Docker/K8S",
        "tags": [
          "go"
        ]
      },
      {
        "name": "miniserve",
        "description": "CLI tool to serve files and dirs over HTTP",
        "url": "https://github.com/svenstaro/miniserve",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Rust",
        "tags": [
          "rust"
        ]
      },
      {
        "name": "ResourceSpace",
        "description": "Simple, fast, and free way to organise your digital assets. ([Demo](https://www.resourcespace.com/trial), [Source Code](https://www.resourcespace.com/svn))",
        "url": "https://www.resourcespace.com",
        "sourceUrl": "",
        "license": "BSD-4-Clause",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "slcl",
        "description": "Simple and lightweight web cloud storage",
        "url": "https://gitea.privatedns.org/xavi/slcl",
        "sourceUrl": "https://codeberg.org/xavidcr/slcl",
        "license": "AGPL-3.0",
        "language": "C",
        "tags": [
          "c"
        ]
      },
      {
        "name": "Surfer",
        "description": "Simple static file server with webui to manage files",
        "url": "https://git.cloudron.io/cloudron/surfer",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Nodejs",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "TagSpaces",
        "description": "TagSpaces is an offline, cross-platform file manager and organiser that also can function as a note taking app. The WebDAV version of the application can be installed on top of a WebDAV servers such as Nextcloud or ownCloud. ([Demo](https://demo.tagspaces.com), [Source Code](https://github.com/tagspaces/tagspaces))",
        "url": "https://www.tagspaces.org/",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Nodejs",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Tiny File Manager",
        "description": "Web based File Manager in PHP, simple, fast and small file manager with a single file. ([Demo](https://tinyfilemanager.github.io/demo/), [Source Code](https://github.com/prasathmani/tinyfilemanager))",
        "url": "https://tinyfilemanager.github.io",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      }
    ]
  },
  {
    "id": "games",
    "name": "Games",
    "items": [
      {
        "name": "0 A.D.",
        "description": "Cross-platform real-time strategy game of ancient warfare",
        "url": "https://play0ad.com/",
        "sourceUrl": "https://gitea.wildfiregames.com/0ad/0ad",
        "license": "MIT/GPL-2.0/Zlib",
        "language": "C++/C/deb",
        "tags": [
          "c++"
        ]
      },
      {
        "name": "A Dark Room",
        "description": "Minimalist text adventure game for your browser. ([Demo](https://adarkroom.doublespeakgames.com/))",
        "url": "https://github.com/doublespeakgames/adarkroom",
        "sourceUrl": "",
        "license": "MPL-2.0",
        "language": "Javascript",
        "tags": [
          "javascript"
        ]
      },
      {
        "name": "Digibuzzer",
        "description": "Create a virtual game room around a connected buzzer (documentation in French). ([Demo](https://digibuzzer.app/), [Source Code](https://codeberg.org/ladigitale/digibuzzer))",
        "url": "https://digibuzzer.app/",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Nodejs",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Hypersomnia",
        "description": "Competitive top-down shooter blending Counter-Strike with Hotline Miami. Runs on Linux, Windows, MacOS and the Web. ([Demo](https://hypersomnia.io))",
        "url": "https://github.com/TeamHypersomnia/Hypersomnia",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "C++/Docker",
        "tags": [
          "c++"
        ]
      },
      {
        "name": "Lila",
        "description": "Ad-less chess server powering lichess.org, with official iOS and Android client apps",
        "url": "https://lichess.org/",
        "sourceUrl": "https://github.com/lichess-org/lila",
        "license": "AGPL-3.0",
        "language": "Scala",
        "tags": [
          "scala"
        ]
      },
      {
        "name": "Luanti",
        "description": "Voxel game engine (formerly Minetest). Play one of our many games, mod a game to your liking, make your own game, or play on a multiplayer server",
        "url": "https://www.luanti.org/",
        "sourceUrl": "https://github.com/luanti-org/luanti",
        "license": "LGPL-2.1/MIT/Zlib",
        "language": "C++/Lua/deb",
        "tags": [
          "c++"
        ]
      },
      {
        "name": "Mindustry",
        "description": "Factorio-like tower defense game. Build production chains to gather more resources, and build complex facilities",
        "url": "https://mindustrygame.github.io/",
        "sourceUrl": "https://github.com/Anuken/Mindustry",
        "license": "GPL-3.0",
        "language": "Java",
        "tags": [
          "java"
        ]
      },
      {
        "name": "MTA:SA",
        "description": "Add network play functionality to Rockstar North's Grand Theft Auto game series, in which this functionality is not originally found",
        "url": "https://multitheftauto.com/",
        "sourceUrl": "https://github.com/multitheftauto/mtasa-blue",
        "license": "GPL-3.0",
        "language": "C++",
        "tags": [
          "c++"
        ]
      },
      {
        "name": "OpenTTD",
        "description": "Transport tycoon simulation game. ([Source Code](https://github.com/OpenTTD/OpenTTD), [Clients](https://bananas.openttd.org/))",
        "url": "https://www.openttd.org/",
        "sourceUrl": "",
        "license": "GPL-2.0",
        "language": "C++/Docker",
        "tags": [
          "c++"
        ]
      },
      {
        "name": "piqueserver",
        "description": "Server for openspades, the first-person shooter in a destructible voxel world. ([Clients](https://github.com/yvt/openspades))",
        "url": "https://github.com/piqueserver/piqueserver",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Python/C++",
        "tags": [
          "python"
        ]
      },
      {
        "name": "Posio",
        "description": "Geography multiplayer game",
        "url": "https://github.com/abrenaut/posio",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Python",
        "tags": [
          "python"
        ]
      },
      {
        "name": "Quizmaster",
        "description": "Web application for conducting a quiz, including a page for players to enter their answers",
        "url": "https://github.com/nymanjens/quizmaster",
        "sourceUrl": "",
        "license": "Apache-2.0",
        "language": "Scala",
        "tags": [
          "scala"
        ]
      },
      {
        "name": "Red Eclipse 2",
        "description": "Arena first-person shooter similar to Unreal Tournament",
        "url": "https://www.redeclipse.net/",
        "sourceUrl": "https://github.com/redeclipse/base",
        "license": "Zlib/MIT/CC-BY-SA-4.0",
        "language": "C/C++/deb",
        "tags": [
          "c"
        ]
      },
      {
        "name": "Scribble.rs",
        "description": "A web-based pictionary game. ([Demo](https://scribblers.fly.dev))",
        "url": "https://github.com/scribble-rs/scribble.rs",
        "sourceUrl": "",
        "license": "BSD-3-Clause",
        "language": "Go/Docker",
        "tags": [
          "go"
        ]
      },
      {
        "name": "Suroi",
        "description": "An open-source 2D battle royale game inspired by surviv.io. ([Demo](https://suroi.io/), [Source Code](https://github.com/HasangerGames/suroi))",
        "url": "https://suroi.io/",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Nodejs",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "The Battle for Wesnoth",
        "description": "The Battle for Wesnoth is an Open Source, turn-based tactical strategy game with a high fantasy theme, featuring both singleplayer and online/hotseat multiplayer combat",
        "url": "https://github.com/wesnoth/wesnoth",
        "sourceUrl": "",
        "license": "GPL-2.0",
        "language": "C++/deb",
        "tags": [
          "c++"
        ]
      },
      {
        "name": "Veloren",
        "description": "Multiplayer RPG. Open-source game inspired by Cube World, Legend of Zelda, Dwarf Fortress and Minecraft",
        "url": "https://veloren.net/",
        "sourceUrl": "https://gitlab.com/veloren/veloren",
        "license": "GPL-3.0",
        "language": "Rust",
        "tags": [
          "rust"
        ]
      },
      {
        "name": "Word Mastermind",
        "description": "Wordle clone. A Mastermind-like game, but instead of colors you need to guess words. ([Demo](https://word-mastermind.glitch.me/))",
        "url": "https://github.com/clupasq/word-mastermind",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Nodejs",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Zero-K",
        "description": "Open Source on Springrts engine. Zero-K is a traditional real time strategy game with a focus on player creativity through terrain manipulation, physics, and a large roster of unique units - all while being balanced to support competitive play",
        "url": "https://zero-k.info/",
        "sourceUrl": "https://github.com/ZeroK-RTS/Zero-K",
        "license": "GPL-2.0",
        "language": "Lua",
        "tags": [
          "lua"
        ]
      }
    ]
  },
  {
    "id": "games-administrative-utilities-control-panels",
    "name": "Games - Administrative Utilities & Control Panels",
    "items": [
      {
        "name": "auto-mcs",
        "description": "Cross-platform Minecraft server manager",
        "url": "https://www.auto-mcs.com",
        "sourceUrl": "https://github.com/macarooni-man/auto-mcs",
        "license": "AGPL-3.0",
        "language": "Python",
        "tags": [
          "python"
        ]
      },
      {
        "name": "Crafty Controller",
        "description": "Minecraft launcher and manager that allows users to start and administer Minecraft servers from a user-friendly interface",
        "url": "https://craftycontrol.com/",
        "sourceUrl": "https://gitlab.com/crafty-controller/crafty-4",
        "license": "GPL-3.0",
        "language": "Docker/Python",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Drop",
        "description": "Game distribution platform, designed for distributing and sharing DRM-free games efficiently (alternative to Steam, GameVault). ([Source Code](https://github.com/Drop-OSS/drop), [Clients](https://github.com/Drop-OSS/drop-app))",
        "url": "https://droposs.org",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "EasyWI",
        "description": "Easy-Wi is a Web-interface that allows you to manage server daemons like gameservers. In addition it provides you with a CMS which includes a fully automated game- and voiceserver lending service",
        "url": "https://easy-wi.com",
        "sourceUrl": "https://github.com/easy-wi/developer/",
        "license": "GPL-3.0",
        "language": "PHP/Shell",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Gameyfin",
        "description": "Video game library manager with automatic scanning, web access, downloads, and plugin support",
        "url": "https://gameyfin.org",
        "sourceUrl": "https://github.com/gameyfin/gameyfin",
        "license": "AGPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Gaseous Server",
        "description": "Game ROM manager with a built-in web-based emulator using multiple sources to identify and provide metadata",
        "url": "https://github.com/gaseous-project/gaseous-server",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Docker/.NET",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Lancache",
        "description": "LAN Party game caching made easy",
        "url": "https://lancache.net",
        "sourceUrl": "https://github.com/lancachenet/monolithic",
        "license": "MIT",
        "language": "Docker/Shell",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "LinuxGSM",
        "description": "CLI tool for deployment and management of dedicated game servers on Linux: more than 120 games are supported",
        "url": "https://linuxgsm.com/",
        "sourceUrl": "https://github.com/GameServerManagers/LinuxGSM",
        "license": "MIT",
        "language": "Shell",
        "tags": [
          "shell"
        ]
      },
      {
        "name": "Minus Games",
        "description": "Sync games and save files across multiple devices",
        "url": "https://accessory.github.io/minus_games_user_guide",
        "sourceUrl": "https://github.com/Accessory/minus_games",
        "license": "MIT",
        "language": "Rust",
        "tags": [
          "rust"
        ]
      },
      {
        "name": "Pelican Panel",
        "description": "Web application for easy management of game servers, offering a user-friendly interface for deploying, configuring, and managing servers, server monitoring tools, and extensive customization options (fork of Pterodactyl)",
        "url": "https://pelican.dev/",
        "sourceUrl": "https://github.com/pelican-dev/panel",
        "license": "AGPL-3.0",
        "language": "PHP/Docker",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Pterodactyl",
        "description": "Management panel for game servers, with an intuitive UI for end users",
        "url": "https://pterodactyl.io/",
        "sourceUrl": "https://github.com/pterodactyl/panel",
        "license": "MIT",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "PufferPanel",
        "description": "Game server management panel designed for both small networks and game server providers",
        "url": "https://www.pufferpanel.com/",
        "sourceUrl": "https://github.com/pufferpanel/pufferpanel",
        "license": "Apache-2.0",
        "language": "Go",
        "tags": [
          "go"
        ]
      },
      {
        "name": "RconCli",
        "description": "CLI for executing queries on a remote Valve Source dedicated server using the RCON Protocol",
        "url": "https://github.com/gorcon/rcon-cli",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Go",
        "tags": [
          "go"
        ]
      },
      {
        "name": "Retrom",
        "description": "Private cloud game library distribution server + frontend/launcher",
        "url": "https://github.com/JMBeresford/retrom",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Docker/Rust",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "RomM",
        "description": "ROM manager for organizing, enriching, and playing retro games, with support for 400+ platforms. ([Demo](https://demo.romm.app/), [Source Code](https://github.com/rommapp/romm))",
        "url": "https://romm.app/",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "SourceBans++",
        "description": "Admin, ban, and communication management system for games running on the Source engine",
        "url": "https://sbpp.github.io/",
        "sourceUrl": "https://github.com/sbpp/sourcebans-pp",
        "license": "CC-BY-SA-4.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Sunshine",
        "description": "Remote game stream host for Moonlight with support up to 120 frames per second and 4K resolution",
        "url": "https://app.lizardbyte.dev/Sunshine/",
        "sourceUrl": "https://github.com/LizardByte/Sunshine",
        "license": "GPL-3.0",
        "language": "C++/deb/Docker",
        "tags": [
          "c++"
        ]
      }
    ]
  },
  {
    "id": "genealogy",
    "name": "Genealogy",
    "items": [
      {
        "name": "Genea.app",
        "description": "Genealogy tool designed with privacy in mind that anyone can use to author or edit their family tree. Data is stored in the GEDCOM format and all processing is done in the browser",
        "url": "https://www.genea.app/",
        "sourceUrl": "https://github.com/genea-app/genea-app",
        "license": "MIT",
        "language": "Javascript",
        "tags": [
          "javascript"
        ]
      },
      {
        "name": "Genealogy",
        "description": "Record family members and their relationships and build a family tree. ([Demo](https://genealogy.kreaweb.be/), [Source Code](https://github.com/MGeurts/genealogy))",
        "url": "https://genealogy.kreaweb.be/",
        "sourceUrl": "",
        "license": "MIT",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "GeneWeb",
        "description": "Genealogy software that can be used offline or as a Web service",
        "url": "https://geneweb.tuxfamily.org/wiki/GeneWeb",
        "sourceUrl": "https://github.com/geneweb/geneweb",
        "license": "GPL-2.0",
        "language": "OCaml",
        "tags": [
          "ocaml"
        ]
      },
      {
        "name": "Gramps Web",
        "description": "Web app for collaborative genealogy, based on and interoperable with Gramps, the open source genealogy desktop application. ([Demo](https://gramps-project.github.io/gramps-web-api/), [Source Code](https://github.com/gramps-project/gramps-web-api))",
        "url": "https://www.grampsweb.org/",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "webtrees",
        "description": "Webtrees is the web's leading online collaborative genealogy application. ([Demo](https://dev.webtrees.net/demo-stable/index.php?ctype=gedcom&ged=demo), [Source Code](https://github.com/fisharebest/webtrees))",
        "url": "https://www.webtrees.net",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      }
    ]
  },
  {
    "id": "generative-artificial-intelligence-genai-",
    "name": "Generative Artificial Intelligence (GenAI)",
    "items": [
      {
        "name": "Agenta",
        "description": "LLMOps platform for prompt management, LLM evaluation, and observability. Build, evaluate, and monitor production-grade LLM applications with collaborative prompt engineering",
        "url": "https://agenta.ai/",
        "sourceUrl": "https://github.com/agenta-ai/agenta",
        "license": "MIT",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "AnythingLLM",
        "description": "All-in-one desktop & Docker AI application with built-in RAG, AI agents, No-code agent builder, MCP compatibility, and more",
        "url": "https://anythingllm.com/",
        "sourceUrl": "https://github.com/Mintplex-Labs/anything-llm",
        "license": "MIT",
        "language": "Nodejs/Docker",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Khoj",
        "description": "Your AI second brain. Get answers from the web or your docs. Build custom agents, schedule automations, do deep research. Turn any online or local LLM into your personal, autonomous AI. ([Demo](https://app.khoj.dev/), [Source Code](https://github.com/khoj-ai/khoj))",
        "url": "https://khoj.dev/",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Python/Docker",
        "tags": [
          "python"
        ]
      },
      {
        "name": "LLM Harbor",
        "description": "Containerized LLM toolkit. Run LLM backends, APIs, frontends, and additional services via a concise CLI",
        "url": "https://github.com/av/harbor",
        "sourceUrl": "",
        "license": "Apache-2.0",
        "language": "Docker/Shell",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "LLMKube",
        "description": "Kubernetes operator for llama.cpp-native LLM inference with GPU scheduling, Apple Silicon Metal support, and OpenAI-compatible API",
        "url": "https://llmkube.com",
        "sourceUrl": "https://github.com/defilantech/LLMKube",
        "license": "Apache-2.0",
        "language": "Go/Docker/K8S",
        "tags": [
          "go"
        ]
      },
      {
        "name": "Local Deep Research",
        "description": "AI-powered deep research tool with multi-source search (arXiv, PubMed, web), PDF text extraction, and encrypted local storage",
        "url": "https://github.com/LearningCircuit/local-deep-research",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker/Python",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "LocalAI",
        "description": "Run your AI models locally and generate images and audio (alternative to OpenAI and Claude). ([Source Code](https://github.com/mudler/LocalAI), [Clients](https://localai.io/gallery.html))",
        "url": "https://localai.io/",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker/K8S",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Ollama",
        "description": "Get up and running with Llama 3.3, DeepSeek-R1, Phi-4, Gemma 3, and other large language models",
        "url": "https://ollama.com/",
        "sourceUrl": "https://github.com/ollama/ollama",
        "license": "MIT",
        "language": "Docker/Python",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Onyx Community Edition",
        "description": "Chat UI that works with any LLM. It comes loaded with advanced features like agents, web search, RAG, MCP, deep research, Connectors to 40+ knowledge sources, and more",
        "url": "https://onyx.app",
        "sourceUrl": "https://github.com/onyx-dot-app/onyx",
        "license": "MIT",
        "language": "Docker/K8S",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Open-WebUI",
        "description": "User-friendly AI Interface, supports Ollama, OpenAI API",
        "url": "https://openwebui.com",
        "sourceUrl": "https://github.com/open-webui/open-webui",
        "license": "BSD-3-Clause",
        "language": "Docker/Python",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "TuxSEO",
        "description": "Create automated blog content for your business, using AI",
        "url": "https://tuxseo.com/",
        "sourceUrl": "https://github.com/rasulkireev/TuxSEO",
        "license": "MIT",
        "language": "Python/Docker",
        "tags": [
          "python"
        ]
      },
      {
        "name": "Vane",
        "description": "AI-powered search engine (alternative to Perplexity AI)",
        "url": "https://github.com/ItzCrazyKns/Vane",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      }
    ]
  },
  {
    "id": "groupware",
    "name": "Groupware",
    "items": [
      {
        "name": "Citadel",
        "description": "Groupware including email, calendar/scheduling, address books, forums, mailing lists, IM, wiki and blog engines, RSS aggregation and more",
        "url": "https://www.citadel.org/",
        "sourceUrl": "https://www.citadel.org/source.html",
        "license": "GPL-3.0",
        "language": "C/Docker/Shell",
        "tags": [
          "c"
        ]
      },
      {
        "name": "Colanode",
        "description": "Collaboration suite with real-time messaging, rich text pages, file management, and dynamic databases - built for offline work (alternative to Slack, Notion)",
        "url": "https://colanode.com",
        "sourceUrl": "https://github.com/colanode/colanode",
        "license": "Apache-2.0",
        "language": "K8S/Docker",
        "tags": [
          "k8s"
        ]
      },
      {
        "name": "Cozy Cloud",
        "description": "Personal cloud where you can manage and sync your files, notes, contacts, passwords, and documents. ([Source Code](https://github.com/cozy/), [Clients](https://github.com/cozy/cozy-store))",
        "url": "https://cozy.io/",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Nodejs",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Digipad",
        "description": "An online self-hosted application for creating collaborative digital notepads (Documentation in french)",
        "url": "https://digipad.app/",
        "sourceUrl": "https://codeberg.org/ladigitale/digipad",
        "license": "AGPL-3.0",
        "language": "Nodejs",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Digistorm",
        "description": "Create collaborative surveys, quizzes, brainstorms, and word clouds (documentation in French). ([Demo](https://digistorm.app/), [Source Code](https://codeberg.org/ladigitale/digistorm))",
        "url": "https://digistorm.app/",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Nodejs",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Digiwall",
        "description": "Create multimedia collaborative walls for in-person or remote work (documentation in French)",
        "url": "https://digiwall.app/",
        "sourceUrl": "https://codeberg.org/ladigitale/digiwall",
        "license": "AGPL-3.0",
        "language": "Nodejs",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "egroupware",
        "description": "Software suite including calendars, address books, notepad, project management tools, client relationship management tools (CRM), knowledge management tools, a wiki and a CMS",
        "url": "https://www.egroupware.org/",
        "sourceUrl": "https://github.com/EGroupware/egroupware",
        "license": "GPL-2.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Group Office",
        "description": "Enterprise CRM and groupware tool. Share projects, calendars, files and e-mail online with co-workers and clients",
        "url": "https://www.group-office.com",
        "sourceUrl": "https://github.com/Intermesh/groupoffice/",
        "license": "AGPL-3.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Openmeetings",
        "description": "Video conferencing, instant messaging, whiteboard, collaborative document editing and other groupware tools using API functions of the Red5 Streaming Server for Remoting and Streaming",
        "url": "https://openmeetings.apache.org/index.html",
        "sourceUrl": "https://github.com/apache/openmeetings",
        "license": "Apache-2.0",
        "language": "Java",
        "tags": [
          "java"
        ]
      },
      {
        "name": "SOGo",
        "description": "SOGo offers multiple ways to access the calendaring and messaging data. CalDAV, CardDAV, GroupDAV, as well as ActiveSync, including native Outlook compatibility and Web interface. ([Demo](https://demo.sogo.nu/SOGo/), [Source Code](https://github.com/Alinto/sogo))",
        "url": "https://www.sogo.nu/",
        "sourceUrl": "",
        "license": "LGPL-2.1",
        "language": "Objective-C",
        "tags": [
          "objective-c"
        ]
      },
      {
        "name": "Tine",
        "description": "Software for digital collaboration in companies and organizations. From powerful groupware functionalities to clever add-ons, tine combines everything to make daily team collaboration easier",
        "url": "https://www.tine-groupware.de/",
        "sourceUrl": "https://github.com/tine-groupware/tine",
        "license": "AGPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Tracim",
        "description": "Collaborative Platform for team collaboration: file,threads,notes,agenda,etc",
        "url": "https://github.com/tracim/tracim",
        "sourceUrl": "",
        "license": "AGPL-3.0/LGPL-3.0/MIT",
        "language": "Python",
        "tags": [
          "python"
        ]
      },
      {
        "name": "Zimbra Collaboration",
        "description": "Email, calendar, collaboration server with Web interface and lots of integrations",
        "url": "https://www.zimbra.com/",
        "sourceUrl": "https://github.com/zimbra",
        "license": "GPL-2.0/CPAL-1.0",
        "language": "Java",
        "tags": [
          "java"
        ]
      }
    ]
  },
  {
    "id": "health-and-fitness",
    "name": "Health and Fitness",
    "items": [
      {
        "name": "Endurain",
        "description": "Fitness tracking service designed to give users full control over their data and hosting environment",
        "url": "https://docs.endurain.com/",
        "sourceUrl": "https://github.com/endurain-project/endurain",
        "license": "AGPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Fasten Health",
        "description": "Personal/family electronic medical record aggregator, designed to integrate with hundreds of thousands of insurances/hospitals/clinics in the United States",
        "url": "https://github.com/fastenhealth/fasten-onprem/",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Go/Docker",
        "tags": [
          "go"
        ]
      },
      {
        "name": "FitTrackee",
        "description": "Simple workout/activity tracker",
        "url": "https://docs.fittrackee.org/",
        "sourceUrl": "https://github.com/SamR1/FitTrackee",
        "license": "AGPL-3.0",
        "language": "Python/Docker",
        "tags": [
          "python"
        ]
      },
      {
        "name": "Mere Medical",
        "description": "Manage all of your medical records from Epic MyChart, Cerner, and OnPatient patient portals in one place. Privacy-focused, self-hosted, and offline-first. ([Demo](https://demo.meremedical.co), [Source Code](https://github.com/cfu288/mere-medical))",
        "url": "https://meremedical.co/",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Docker/Nodejs",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "OpenEMR",
        "description": "Electronic health records and medical practice management solution. ([Demo](https://www.open-emr.org/demo/), [Source Code](https://github.com/openemr/openemr))",
        "url": "https://www.open-emr.org/",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "PHP/Docker",
        "tags": [
          "php"
        ]
      },
      {
        "name": "wger",
        "description": "Web-based personal workout, fitness and weight logger/tracker. It can also be used as a simple gym management utility and offers a full REST API as well. ([Demo](https://wger.de/en/dashboard), [Source Code](https://github.com/wger-project/wger))",
        "url": "https://wger.de/",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Python/Docker",
        "tags": [
          "python"
        ]
      },
      {
        "name": "Wingfit",
        "description": "Minimalist fitness app to plan your workouts, track your personal records and leverage smartwatch data. ([Demo](https://wingfit.fr/home), [Source Code](https://github.com/itskovacs/wingfit))",
        "url": "https://wingfit.fr",
        "sourceUrl": "",
        "license": "CC-BY-SA-4.0",
        "language": "Python/Docker",
        "tags": [
          "python"
        ]
      }
    ]
  },
  {
    "id": "human-resources-management-hrm-",
    "name": "Human Resources Management (HRM)",
    "items": [
      {
        "name": "admidio",
        "description": "User management system for websites of organizations and groups. The system has a flexible role model so that it’s possible to reflect the structure and permissions of your organization. ([Demo](https://www.admidio.org/demo/), [Source Code](https://github.com/Admidio/admidio))",
        "url": "https://www.admidio.org/",
        "sourceUrl": "",
        "license": "GPL-2.0",
        "language": "PHP/Docker",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Frappe HR",
        "description": "Complete HRMS solution with over 13 different modules right from employee management, onboarding, leaves, to payroll, taxation, and more",
        "url": "https://frappe.io/hr",
        "sourceUrl": "https://github.com/frappe/hrms",
        "license": "GPL-3.0",
        "language": "Docker/Python/Nodejs",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "MintHCM",
        "description": "Tool for Human Capital Management based on two popular, well-known business applications SugarCRM Community Edition and SuiteCRM",
        "url": "https://minthcm.org/",
        "sourceUrl": "https://github.com/minthcm/minthcm",
        "license": "AGPL-3.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      }
    ]
  },
  {
    "id": "internet-of-things-iot-",
    "name": "Internet of Things (IoT)",
    "items": [
      {
        "name": "Domoticz",
        "description": "Home Automation System that lets you monitor and configure various devices like: Lights, Switches, various sensors/meters like Temperature, Rain, Wind, UV, Electra, Gas, Water and much more. ([Source Code](https://github.com/domoticz/domoticz), [Clients](https://github.com/domoticz/domoticz-android))",
        "url": "https://www.domoticz.com/",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "C/C++/Docker/Shell",
        "tags": [
          "c"
        ]
      },
      {
        "name": "EMQX",
        "description": "Scalable MQTT broker. Connect 100M+ IoT devices in one single cluster, move and process real-time IoT data with 1M msg/s throughput at 1ms latency. ([Demo](https://www.emqx.com/en/mqtt/public-mqtt5-broker), [Source Code](https://github.com/emqx/emqx))",
        "url": "https://www.emqx.io/",
        "sourceUrl": "",
        "license": "Apache-2.0",
        "language": "Docker/Erlang",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "evcc",
        "description": "Extensible Electric Vehicle Charge Controller and home energy management system",
        "url": "https://evcc.io/",
        "sourceUrl": "https://github.com/evcc-io/evcc",
        "license": "MIT",
        "language": "deb/Docker/Go",
        "tags": [
          "deb"
        ]
      },
      {
        "name": "FHEM",
        "description": "Automate common tasks in the household like switching lamps and heating. It can also be used to log events like temperature or power consumption. You can control it via web or smartphone frontends, telnet or TCP/IP directly",
        "url": "https://fhem.de/fhem.html",
        "sourceUrl": "https://svn.fhem.de/trac",
        "license": "GPL-3.0",
        "language": "Perl",
        "tags": [
          "perl"
        ]
      },
      {
        "name": "FlowForge",
        "description": "Deploy Node-RED applications in a reliable, scalable and secure manner. The FlowForge platform provides DevOps capabilities for Node-RED development teams",
        "url": "https://flowforge.com/",
        "sourceUrl": "https://github.com/FlowFuse/flowfuse",
        "license": "Apache-2.0",
        "language": "Nodejs/Docker/K8S",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "FMD Server",
        "description": "A server to communicate with the FMD (Find My Device) Android app, to locate and control your devices. ([Source Code](https://gitlab.com/fmd-foss/fmd-server), [Clients](https://gitlab.com/fmd-foss/fmd-android))",
        "url": "https://fmd-foss.org",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Docker/Go",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Gladys",
        "description": "Privacy-first home assistant",
        "url": "https://gladysassistant.com/",
        "sourceUrl": "https://github.com/GladysAssistant/Gladys",
        "license": "Apache-2.0",
        "language": "Nodejs/Docker",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Home Assistant",
        "description": "Home automation platform. ([Demo](https://home-assistant.io/demo/), [Source Code](https://github.com/home-assistant/core))",
        "url": "https://home-assistant.io/",
        "sourceUrl": "",
        "license": "Apache-2.0",
        "language": "Python/Docker",
        "tags": [
          "python"
        ]
      },
      {
        "name": "ioBroker",
        "description": "Integration platform for the Internet of Things, focused on building automation, smart metering, ambient assisted living, process automation, visualization and data logging",
        "url": "https://www.iobroker.net/",
        "sourceUrl": "https://github.com/ioBroker/ioBroker",
        "license": "MIT",
        "language": "Nodejs",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "LHA",
        "description": "Light Home Automation application that is fully extensible using Blockly, HTML or Lua. It includes extensions such as ConBee, Philips Hue or Z-Wave JS",
        "url": "https://github.com/javalikescript/lha",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Lua",
        "tags": [
          "lua"
        ]
      },
      {
        "name": "Node RED",
        "description": "Browser-based flow editor that helps you wiring hardware devices, APIs and online services to create IoT solutions",
        "url": "https://nodered.org/",
        "sourceUrl": "https://github.com/node-red/node-red",
        "license": "Apache-2.0",
        "language": "Nodejs/Docker",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "openHAB",
        "description": "Vendor and technology agnostic open source software for home automation",
        "url": "https://www.openhab.org",
        "sourceUrl": "https://github.com/openhab/openhab-core",
        "license": "EPL-2.0",
        "language": "Java",
        "tags": [
          "java"
        ]
      },
      {
        "name": "OpenRemote",
        "description": "IoT Asset management, Flow Rules and WHEN-THEN rules, Data visualization, Edge Gateway. ([Demo](https://demo.openremote.io/), [Source Code](https://github.com/openremote/openremote))",
        "url": "https://openremote.io",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Java",
        "tags": [
          "java"
        ]
      },
      {
        "name": "SIP Irrigation Control",
        "description": "Open source software for sprinkler/irrigation control",
        "url": "https://dan-in-ca.github.io/SIP/",
        "sourceUrl": "https://github.com/Dan-in-CA/SIP",
        "license": "GPL-3.0",
        "language": "Python",
        "tags": [
          "python"
        ]
      },
      {
        "name": "SOLECTRUS",
        "description": "Photovoltaic dashboard that displays energy production and consumption with cost and savings calculations. ([Demo](https://demo.solectrus.de), [Source Code](https://github.com/solectrus/solectrus))",
        "url": "https://solectrus.de",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Tasmota",
        "description": "Open source firmware for ESP devices. Total local control with quick setup and updates. Control using MQTT, Web UI, HTTP or serial. Automate using timers, rules or scripts. Integration with home automation solutions",
        "url": "https://tasmota.com",
        "sourceUrl": "https://github.com/arendst/Tasmota",
        "license": "GPL-3.0",
        "language": "C/C++",
        "tags": [
          "c"
        ]
      },
      {
        "name": "Thingsboard",
        "description": "Open-source IoT Platform - Device management, data collection, processing and visualization. ([Demo](https://demo.thingsboard.io/signup), [Source Code](https://github.com/thingsboard/thingsboard))",
        "url": "https://thingsboard.io/",
        "sourceUrl": "",
        "license": "Apache-2.0",
        "language": "Java/Docker/K8S",
        "tags": [
          "java"
        ]
      },
      {
        "name": "WebThings Gateway",
        "description": "WebThings is an open source implementation of the Web of Things, including the WebThings Gateway and the WebThings Framework",
        "url": "https://webthings.io/gateway/",
        "sourceUrl": "https://github.com/WebThingsIO/gateway",
        "license": "MPL-2.0",
        "language": "Nodejs",
        "tags": [
          "nodejs"
        ]
      }
    ]
  },
  {
    "id": "inventory-management",
    "name": "Inventory Management",
    "items": [
      {
        "name": "Cannery",
        "description": "Firearm and ammunition tracker app",
        "url": "https://cannery.app",
        "sourceUrl": "https://codeberg.org/shibao/cannery",
        "license": "AGPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "HomeBox (SysAdminsMedia)",
        "description": "Inventory and organization system built for the home user. ([Demo](https://demo.homebox.software/), [Source Code](https://github.com/sysadminsmedia/homebox))",
        "url": "https://homebox.software/",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Docker/Go",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Inventaire",
        "description": "Collaborative resources mapper project, while yet only focused on exploring books mapping with wikidata and ISBNs",
        "url": "https://inventaire.io/welcome",
        "sourceUrl": "https://codeberg.org/inventaire/inventaire",
        "license": "AGPL-3.0",
        "language": "Nodejs",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Inventree",
        "description": "Inventory management system which provides intuitive parts management and stock control. ([Demo](https://inventree.org/demo), [Source Code](https://github.com/inventree/InvenTree))",
        "url": "https://docs.inventree.org/en/latest/",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Python",
        "tags": [
          "python"
        ]
      },
      {
        "name": "Open QuarterMaster",
        "description": "Powerful inventory management system, designed to be flexible and scalable",
        "url": "https://openquartermaster.com/",
        "sourceUrl": "https://github.com/Epic-Breakfast-Productions/OpenQuarterMaster",
        "license": "GPL-3.0",
        "language": "deb/Docker",
        "tags": [
          "deb"
        ]
      },
      {
        "name": "Part-DB",
        "description": "Inventory management system for your electronic components. ([Demo](https://demo.part-db.de/en/), [Source Code](https://github.com/Part-DB/Part-DB-server))",
        "url": "https://docs.part-db.de/",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Docker/PHP/Nodejs",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Shelf",
        "description": "Asset and equipment tracking software used by teams who value clarity. Shelf is an asset database and QR asset label generator that lets you create, manage and overview your assets across locations. Unlimited assets, free forever",
        "url": "https://www.shelf.nu",
        "sourceUrl": "https://github.com/Shelf-nu/shelf.nu",
        "license": "AGPL-3.0",
        "language": "Nodejs",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Spoolman",
        "description": "Keep track of your inventory of 3D-printer filament spools",
        "url": "https://github.com/Donkie/Spoolman",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker/Python",
        "tags": [
          "docker"
        ]
      }
    ]
  },
  {
    "id": "knowledge-management-tools",
    "name": "Knowledge Management Tools",
    "items": [
      {
        "name": "AFFiNE Community Edition",
        "description": "Next-gen knowledge base that brings planning, sorting and creating all together. Privacy first, customizable and ready to use (alternative to Notion and Miro). ([Demo](https://app.affine.pro/), [Source Code](https://github.com/toeverything/AFFiNE))",
        "url": "https://affine.pro/",
        "sourceUrl": "",
        "license": "MIT/AGPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Atomic Server",
        "description": "Knowledge graph database with documents (similar to Notion), tables, search, and a powerful linked data API. Lightweight, very fast and no runtime dependencies. ([Demo](https://atomicdata.dev/), [Source Code](https://github.com/ontola/atomic-server))",
        "url": "https://atomicserver.eu/",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker/Rust",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Digimindmap",
        "description": "Create simple mindmaps (documentation in French). ([Demo](https://ladigitale.dev/digimindmap/#/), [Source Code](https://codeberg.org/ladigitale/digimindmap))",
        "url": "https://ladigitale.dev/digimindmap/#/",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Nodejs/PHP",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "LibreKB",
        "description": "Web-based knowledge base solution. A simple web app, it runs on pretty much any web server or hosting provider with PHP and MySQL",
        "url": "https://librekb.com/",
        "sourceUrl": "https://github.com/michaelstaake/LibreKB/",
        "license": "GPL-3.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "memEx",
        "description": "Structured personal knowledge base, inspired by zettlekasten and org-mode",
        "url": "https://codeberg.org/shibao/memEx",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "SiYuan",
        "description": "A privacy-first personal knowledge management software, written in typescript and golang",
        "url": "https://b3log.org/siyuan/",
        "sourceUrl": "https://github.com/siyuan-note/siyuan",
        "license": "AGPL-3.0",
        "language": "Docker/Go",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "TeamMapper",
        "description": "Host and create your own mindmaps. Share your mindmap sessions with your team and collaborate live on mindmaps. ([Demo](https://map.kits.blog))",
        "url": "https://github.com/b310-digital/teammapper",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker/Nodejs",
        "tags": [
          "docker"
        ]
      }
    ]
  },
  {
    "id": "learning-and-courses",
    "name": "Learning and Courses",
    "items": [
      {
        "name": "Canvas LMS",
        "description": "Learning management system (LMS) that is revolutionizing the way we educate. ([Demo](https://canvas.instructure.com/register), [Source Code](https://github.com/instructure/canvas-lms))",
        "url": "https://www.instructure.com/canvas/",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Ruby",
        "tags": [
          "ruby"
        ]
      },
      {
        "name": "Chamilo LMS",
        "description": "Create a virtual campus for the provision of online or semi-online training",
        "url": "https://chamilo.org/",
        "sourceUrl": "https://github.com/chamilo/chamilo-lms",
        "license": "GPL-3.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Digiscreen",
        "description": "Interactive whiteboard/wallpaper for the classroom, in person or remotely (documentation in French). ([Demo](https://ladigitale.dev/digiscreen/), [Source Code](https://codeberg.org/ladigitale/digiscreen))",
        "url": "https://ladigitale.dev/digiscreen/",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Nodejs/PHP",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Digitools",
        "description": "A set of simple tools to accompany the animation of courses in person or remotely. (documentation in French). ([Demo](https://ladigitale.dev/digitools/), [Source Code](https://codeberg.org/ladigitale/digitools))",
        "url": "https://ladigitale.dev/digitools",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "edX",
        "description": "The Open edX platform is open-source code that powers edX.org",
        "url": "https://www.edx.org/",
        "sourceUrl": "https://github.com/edx/",
        "license": "AGPL-3.0",
        "language": "Python",
        "tags": [
          "python"
        ]
      },
      {
        "name": "Gibbon",
        "description": "Flexible school management platform designed to make life better for teachers, students, parents and leaders",
        "url": "https://gibbonedu.org/",
        "sourceUrl": "https://github.com/GibbonEdu/core",
        "license": "GPL-3.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "ILIAS",
        "description": "Learning management system that can cope with anything you throw at it. ([Demo](https://demo.ilias.de), [Source Code](https://github.com/ILIAS-eLearning/ILIAS))",
        "url": "https://www.ilias.de",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "INGInious",
        "description": "Intelligent grader that allows secured and automated testing of code made by students. ([Source Code](https://github.com/INGInious/INGInious), [Clients](https://github.com/INGInious/plugins))",
        "url": "https://inginious.org/?lang=en",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Python/Docker",
        "tags": [
          "python"
        ]
      },
      {
        "name": "Moodle",
        "description": "Learning and courses platform with one of the largest open source communities worldwide. ([Demo](https://moodle.org/demo/), [Source Code](https://git.moodle.org/gw))",
        "url": "https://moodle.org/",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Open eClass",
        "description": "Open eClass is an advanced e-learning solution that can enhance the teaching and learning process. ([Demo](https://demo.openeclass.org/), [Source Code](https://github.com/gunet/openeclass))",
        "url": "https://www.openeclass.org/",
        "sourceUrl": "",
        "license": "GPL-2.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "OpenOLAT",
        "description": "Learning management system for teaching, education, assessment and communication. ([Demo](https://learn.olat.com), [Source Code](https://github.com/OpenOLAT/OpenOLAT))",
        "url": "https://www.openolat.com/?lang=en",
        "sourceUrl": "",
        "license": "Apache-2.0",
        "language": "Java",
        "tags": [
          "java"
        ]
      },
      {
        "name": "QST",
        "description": "Online assessment software. From a quick quiz on your phone to large scale, high stakes, proctored desktop testing, easy, secure and economical. ([Demo](https://qstonline.org/free_account.htm), [Source Code](https://sourceforge.net/projects/qstonline/))",
        "url": "https://qstonline.org",
        "sourceUrl": "",
        "license": "GPL-2.0",
        "language": "Perl",
        "tags": [
          "perl"
        ]
      },
      {
        "name": "RELATE",
        "description": "Courseware package that includes features such as: flexible rules, statistics, multi-course support, class calendar",
        "url": "https://documen.tician.de/relate/",
        "sourceUrl": "https://github.com/inducer/relate",
        "license": "MIT",
        "language": "Python",
        "tags": [
          "python"
        ]
      },
      {
        "name": "RosarioSIS",
        "description": "Student Information System for school management. Features students demographics, grades, scheduling, attendance, student billing, discipline & food service modules. ([Demo](https://www.rosariosis.org/demo/), [Source Code](https://gitlab.com/francoisjacquet/rosariosis/))",
        "url": "https://www.rosariosis.org/",
        "sourceUrl": "",
        "license": "GPL-2.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      }
    ]
  },
  {
    "id": "manufacturing",
    "name": "Manufacturing",
    "items": [
      {
        "name": "CNCjs",
        "description": "Web interface for CNC milling controllers running Grbl, Smoothieware, or TinyG",
        "url": "https://cnc.js.org/",
        "sourceUrl": "https://github.com/cncjs/cncjs/",
        "license": "MIT",
        "language": "Nodejs",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Fluidd",
        "description": "Lightweight & responsive user interface for Klipper, the 3D printer firmware",
        "url": "https://docs.fluidd.xyz/",
        "sourceUrl": "https://github.com/fluidd-core/fluidd",
        "license": "GPL-3.0",
        "language": "Docker/Nodejs",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Mainsail",
        "description": "Modern and responsive user interface for the Klipper 3D printer firmware. Control and monitor your printer from everywhere, from any device",
        "url": "https://docs.mainsail.xyz/",
        "sourceUrl": "https://github.com/mainsail-crew/mainsail",
        "license": "GPL-3.0",
        "language": "Docker/Python",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Manyfold",
        "description": "Digital asset manager for 3d print files; STL, OBJ, 3MF and more",
        "url": "https://manyfold.app",
        "sourceUrl": "https://github.com/manyfold3d/manyfold",
        "license": "MIT",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Octoprint",
        "description": "Snappy web interface for controlling consumer 3D printers",
        "url": "https://octoprint.org/",
        "sourceUrl": "https://github.com/OctoPrint/OctoPrint",
        "license": "AGPL-3.0",
        "language": "Docker/Python",
        "tags": [
          "docker"
        ]
      }
    ]
  },
  {
    "id": "maps-and-global-positioning-system-gps-",
    "name": "Maps and Global Positioning System (GPS)",
    "items": [
      {
        "name": "AdventureLog",
        "description": "Travel tracker and trip planner. ([Demo](https://demo.adventurelog.app/signup), [Source Code](https://github.com/seanmorley15/AdventureLog))",
        "url": "https://adventurelog.app",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "AirTrail",
        "description": "Personal flight tracking system",
        "url": "https://airtrail.johan.ohly.dk",
        "sourceUrl": "https://github.com/johanohly/AirTrail",
        "license": "GPL-3.0",
        "language": "Docker/Nodejs",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Bicimon",
        "description": "Bike Speedometer as Progressive Web App. ([Demo](https://knrdl.github.io/bicimon/))",
        "url": "https://github.com/knrdl/bicimon",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Javascript",
        "tags": [
          "javascript"
        ]
      },
      {
        "name": "Dawarich",
        "description": "Visualize your location history, track your movements, and analyze your travel patterns with complete privacy and control (alternative to Google Timeline a.k.a. Google Location History)",
        "url": "https://dawarich.app/",
        "sourceUrl": "https://github.com/Freika/dawarich",
        "license": "AGPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Geo2tz",
        "description": "Get the timezone from geo coordinates (lat, lon)",
        "url": "https://github.com/noandrea/geo2tz",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Go/Docker",
        "tags": [
          "go"
        ]
      },
      {
        "name": "GraphHopper",
        "description": "Fast routing library and server using OpenStreetMap",
        "url": "https://graphhopper.com/",
        "sourceUrl": "https://github.com/graphhopper/graphhopper",
        "license": "Apache-2.0",
        "language": "Java",
        "tags": [
          "java"
        ]
      },
      {
        "name": "Nominatim",
        "description": "Server application for geocoding (address -> coordinates) and reverse geocoding (coordinates -> address) on OpenStreetMap data",
        "url": "https://nominatim.org/",
        "sourceUrl": "https://github.com/osm-search/Nominatim",
        "license": "GPL-2.0",
        "language": "C",
        "tags": [
          "c"
        ]
      },
      {
        "name": "Open Source Routing Machine (OSRM)",
        "description": "High performance routing engine designed to run on OpenStreetMap data and offering an HTTP API, C++ library interface, and Nodejs wrapper. ([Demo](https://map.project-osrm.org/), [Source Code](https://github.com/Project-OSRM/osrm-backend))",
        "url": "http://project-osrm.org/",
        "sourceUrl": "",
        "license": "BSD-2-Clause",
        "language": "C++",
        "tags": [
          "c++"
        ]
      },
      {
        "name": "OpenRouteService",
        "description": "Route service with directions, isochrones, time-distance matrix, route optimization, etc. ([Demo](https://openrouteservice.org/dev/#/api-docs/introduction), [Source Code](https://github.com/GIScience/openrouteservice))",
        "url": "https://openrouteservice.org/",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Docker/Java",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "OpenStreetMap",
        "description": "Collaborative project to create a free editable map of the world. ([Source Code](https://github.com/openstreetmap/openstreetmap-website), [Clients](https://wiki.openstreetmap.org/wiki/Software))",
        "url": "https://www.openstreetmap.org/",
        "sourceUrl": "",
        "license": "GPL-2.0",
        "language": "Ruby",
        "tags": [
          "ruby"
        ]
      },
      {
        "name": "OpenTripPlanner",
        "description": "Multimodal trip planning software based on OpenStreetMap data and consuming published GTFS-formatted data to suggest routes using local public transit systems",
        "url": "https://www.opentripplanner.org/",
        "sourceUrl": "https://github.com/opentripplanner/OpenTripPlanner",
        "license": "LGPL-3.0",
        "language": "Java/Javascript",
        "tags": [
          "java"
        ]
      },
      {
        "name": "OwnTracks Recorder",
        "description": "Store and access data published by [OwnTracks](https://owntracks.org/) location tracking apps",
        "url": "https://github.com/owntracks/recorder",
        "sourceUrl": "",
        "license": "GPL-2.0",
        "language": "C/Lua/deb/Docker",
        "tags": [
          "c"
        ]
      },
      {
        "name": "TileServer GL",
        "description": "Vector and raster maps with GL styles. Server side rendering by Mapbox GL Native. Map tile server for Mapbox GL JS, Android, iOS, Leaflet, OpenLayers, GIS via WMTS, etc",
        "url": "https://tileserver.readthedocs.io/",
        "sourceUrl": "https://github.com/maptiler/tileserver-gl",
        "license": "BSD-2-Clause",
        "language": "Nodejs/Docker",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Traccar",
        "description": "Java application to track GPS positions. Supports loads of tracking devices and protocols, has an Android and iOS App. Has a web interface to view your trips. ([Demo](https://demo.traccar.org/), [Source Code](https://github.com/traccar))",
        "url": "https://www.traccar.org/",
        "sourceUrl": "",
        "license": "Apache-2.0",
        "language": "Java",
        "tags": [
          "java"
        ]
      },
      {
        "name": "TRIP",
        "description": "Minimalist POI Map tracker and Trip planner. ([Demo](https://itskovacs-trip.netlify.app/home), [Source Code](https://github.com/itskovacs/trip))",
        "url": "https://itskovacs-trip.netlify.app/",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "wanderer",
        "description": "Trail database where you can upload your recorded tracks or create new ones and add various metadata to build an easily searchable catalogue. ([Demo](https://demo.wanderer.to))",
        "url": "https://github.com/open-wanderer/wanderer",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Docker/Go/Nodejs",
        "tags": [
          "docker"
        ]
      }
    ]
  },
  {
    "id": "media-management",
    "name": "Media Management",
    "items": [
      {
        "name": "ChannelTube",
        "description": "Download video or audio from YouTube channels on a schedule via yt-dlp",
        "url": "https://github.com/TheWicklowWolf/ChannelTube",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Deleterr",
        "description": "Automated media cleanup tool that removes watched and stale content from Plex, Sonarr, and Radarr based on configurable rules",
        "url": "https://github.com/rfsbraz/deleterr",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Headphones",
        "description": "Automated music downloader for NZB and Torrent, written in Python. It supports SABnzbd, NZBget, Transmission, µTorrent, Deluge and Blackhole",
        "url": "https://github.com/rembo10/headphones",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Python",
        "tags": [
          "python"
        ]
      },
      {
        "name": "Lidarr",
        "description": "Music collection manager for Usenet and BitTorrent users",
        "url": "https://lidarr.audio/",
        "sourceUrl": "https://github.com/Lidarr/Lidarr",
        "license": "GPL-3.0",
        "language": "C#/Docker",
        "tags": [
          "c#"
        ]
      },
      {
        "name": "LidaTube",
        "description": "Finding and fetch missing Lidarr albums via yt-dlp",
        "url": "https://github.com/TheWicklowWolf/LidaTube",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Lidify",
        "description": "Music discovery tool that provides recommendations based on selected Lidarr artists, using Spotify or LastFM",
        "url": "https://github.com/TheWicklowWolf/Lidify",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Medusa",
        "description": "Automatic Video library manager for TV Shows. It watches for new episodes of your favorite shows, and when they are posted it does its magic. ([Clients](https://github.com/medusajs/nextjs-starter-medusa))",
        "url": "https://github.com/pymedusa/Medusa",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Python",
        "tags": [
          "python"
        ]
      },
      {
        "name": "MeTube",
        "description": "Web GUI for youtube-dl, with playlist support. Allows downloading videos from dozens of websites",
        "url": "https://github.com/alexta69/metube",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Python/Nodejs/Docker",
        "tags": [
          "python"
        ]
      },
      {
        "name": "MKVPriority",
        "description": "Selects preferred audio and subtitle tracks using configurable priority scores and sets the appropriate default and forced flags",
        "url": "https://github.com/kennethsible/mkvpriority",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Python/Docker",
        "tags": [
          "python"
        ]
      },
      {
        "name": "nefarious",
        "description": "Automate downloading Movies and TV Shows",
        "url": "https://lardbit.github.io/nefarious/",
        "sourceUrl": "https://github.com/lardbit/nefarious",
        "license": "GPL-3.0",
        "language": "Python",
        "tags": [
          "python"
        ]
      },
      {
        "name": "Ombi",
        "description": "Content request system for Plex/Emby, connects to SickRage, CouchPotato, Sonarr, with a growing feature set. ([Demo](https://app.ombi.io/), [Source Code](https://github.com/Ombi-app/Ombi))",
        "url": "https://ombi.io/",
        "sourceUrl": "",
        "license": "GPL-2.0",
        "language": "C#/deb",
        "tags": [
          "c#"
        ]
      },
      {
        "name": "Pinchflat",
        "description": "Download YouTube content built using yt-dlp",
        "url": "https://github.com/kieraneglin/pinchflat",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "PodFetch",
        "description": "Sleek and efficient podcast downloader",
        "url": "https://samtv12345.github.io/PodFetch",
        "sourceUrl": "https://github.com/SamTV12345/PodFetch",
        "license": "Apache-2.0",
        "language": "Docker/Rust",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Radarr",
        "description": "Automatically download movies via Usenet and BitTorrent (fork of Sonarr)",
        "url": "https://radarr.video/",
        "sourceUrl": "https://github.com/Radarr/Radarr",
        "license": "GPL-3.0",
        "language": "C#/Docker",
        "tags": [
          "c#"
        ]
      },
      {
        "name": "Reaparr",
        "description": "Cross-platform Plex media downloader that seamlessly adds media from other Plex servers to your own",
        "url": "https://www.reaparr.rocks/",
        "sourceUrl": "https://github.com/Reaparr/Reaparr",
        "license": "GPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Seerr",
        "description": "Manage requests for your media library, supports Plex, Jellyfin and Emby media servers (fork of Overseerr)",
        "url": "https://github.com/seerr-team/seerr",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker/Nodejs",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Sonarr",
        "description": "Automatic TV Shows downloader and manager for Usenet and BitTorrent. It can grab, sort and rename new episodes and automatically upgrade the quality of files already downloaded when a better quality format becomes available",
        "url": "https://sonarr.tv/",
        "sourceUrl": "https://github.com/Sonarr/Sonarr",
        "license": "GPL-3.0",
        "language": "C#/Docker",
        "tags": [
          "c#"
        ]
      },
      {
        "name": "Spooty",
        "description": "Download tracks/playlists/albums from Spotify. It can also subscribe to a playlist or author page and download new songs upon release",
        "url": "https://github.com/Raiper34/spooty",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker/Nodejs",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "TrackWatch",
        "description": "Automated music release tracker for Spotify with email notifications, discography generator, and ghost track cleaner (alternative to Release Radar)",
        "url": "https://trackwatch.emlopezr.com",
        "sourceUrl": "https://github.com/emlopezr/trackwatch",
        "license": "MIT",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "tubesync",
        "description": "Syncs YouTube channels and playlists to a locally hosted media server",
        "url": "https://github.com/meeb/tubesync",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Docker/Python",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Watcharr",
        "description": "Add and track all the shows and movies you are watching. Comes with user authentication, modern and clean UI and a very simple setup. ([Demo](https://beta.watcharr.app/))",
        "url": "https://github.com/sbondCo/Watcharr",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "ydl_api_ng",
        "description": "Simple youtube-dl REST API to launch downloads on a distant server",
        "url": "https://github.com/Totonyus/ydl_api_ng",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Python",
        "tags": [
          "python"
        ]
      },
      {
        "name": "YoutubeDL-Server",
        "description": "Web and REST interface to Youtube-DL for downloading videos onto a server",
        "url": "https://github.com/nbr23/youtube-dl-server",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Python/Docker",
        "tags": [
          "python"
        ]
      },
      {
        "name": "yt-dlp Web UI",
        "description": "Web GUI for yt-dlp",
        "url": "https://github.com/marcopiovanello/yt-dlp-web-ui",
        "sourceUrl": "",
        "license": "MPL-2.0",
        "language": "Docker/Go/Nodejs",
        "tags": [
          "docker"
        ]
      }
    ]
  },
  {
    "id": "media-streaming-audio-streaming",
    "name": "Media Streaming - Audio Streaming",
    "items": [
      {
        "name": "Ampache",
        "description": "Web based audio/video streaming application. ([Demo](https://play.dogmazic.net/), [Source Code](https://github.com/ampache/ampache))",
        "url": "https://ampache.org/",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Audiobookshelf",
        "description": "Audiobook and podcast server. It streams all audio formats, keeps and syncs progress across devices. Comes with open-source apps for Android and iOS. ([Source Code](https://github.com/advplyr/audiobookshelf), [Clients](https://github.com/advplyr/audiobookshelf-app))",
        "url": "https://www.audiobookshelf.org/",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Docker/deb/Nodejs",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Audioserve",
        "description": "Simple personal server to serve audio files from directories (audiobooks, music, podcasts...). Focused on simplicity and supports sync of play position between clients",
        "url": "https://github.com/izderadicka/audioserve",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Rust",
        "tags": [
          "rust"
        ]
      },
      {
        "name": "AzuraCast",
        "description": "Modern and accessible web radio management suite",
        "url": "https://www.azuracast.com/",
        "sourceUrl": "https://github.com/AzuraCast/AzuraCast",
        "license": "Apache-2.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Beets",
        "description": "Music library manager and MusicBrainz tagger (command-line and Web interface)",
        "url": "https://beets.io/",
        "sourceUrl": "https://github.com/beetbox/beets",
        "license": "MIT",
        "language": "Python/deb",
        "tags": [
          "python"
        ]
      },
      {
        "name": "Black Candy",
        "description": "Music streaming server",
        "url": "https://github.com/blackcandy-org/blackcandy",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker/Ruby",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Funkwhale",
        "description": "Modern, web-based, convivial, multi-user and free music server",
        "url": "https://dev.funkwhale.audio/funkwhale",
        "sourceUrl": "",
        "license": "BSD-3-Clause",
        "language": "Python",
        "tags": [
          "python"
        ]
      },
      {
        "name": "gonic",
        "description": "Lightweight music streaming server. Subsonic compatible",
        "url": "https://github.com/sentriz/gonic",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Go/Docker",
        "tags": [
          "go"
        ]
      },
      {
        "name": "koel",
        "description": "Personal music streaming server that works. ([Demo](https://demo.koel.dev/), [Source Code](https://github.com/koel/koel))",
        "url": "https://koel.dev/",
        "sourceUrl": "",
        "license": "MIT",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "LibreTime",
        "description": "Broadcast streaming radio on the web (fork of [Airtime](https://github.com/sourcefabric/Airtime))",
        "url": "https://libretime.org",
        "sourceUrl": "https://github.com/LibreTime/libretime",
        "license": "AGPL-3.0",
        "language": "Docker/PHP",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "LMS",
        "description": "Access your self-hosted music using a web interface",
        "url": "https://github.com/epoupon/lms",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Docker/deb/C++",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Lyrion Music Server",
        "description": "Server software which controls a wide range of Squeezebox/Slim Devices audio players and compatible hardware (formerly Logitech Media Server). ([Source Code](https://github.com/lms-community/slimserver), [Clients](https://lyrion.org/extensions/applications/))",
        "url": "https://lyrion.org/",
        "sourceUrl": "",
        "license": "GPL-2.0",
        "language": "deb/Docker/Perl",
        "tags": [
          "deb"
        ]
      },
      {
        "name": "Maloja",
        "description": "Music scrobble database (alternative to Last.fm). ([Demo](https://maloja.krateng.ch/))",
        "url": "https://github.com/krateng/maloja",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Python/Docker",
        "tags": [
          "python"
        ]
      },
      {
        "name": "moOde Audio",
        "description": "Audiophile-quality music playback for the wonderful Raspberry Pi family of single board computers",
        "url": "https://moodeaudio.org/",
        "sourceUrl": "https://github.com/moode-player/moode",
        "license": "GPL-3.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Mopidy",
        "description": "Extensible music server. Offers a superset of the mpd API, as well as integration with 3rd party services like Spotify, SoundCloud etc",
        "url": "https://docs.mopidy.com/",
        "sourceUrl": "https://github.com/mopidy/mopidy",
        "license": "Apache-2.0",
        "language": "Python/deb",
        "tags": [
          "python"
        ]
      },
      {
        "name": "mpd",
        "description": "Daemon to remotely play music, stream music, handle and organize playlists. Many clients available. ([Source Code](https://github.com/MusicPlayerDaemon/MPD), [Clients](https://www.musicpd.org/clients/))",
        "url": "https://www.musicpd.org/",
        "sourceUrl": "",
        "license": "GPL-2.0",
        "language": "C++",
        "tags": [
          "c++"
        ]
      },
      {
        "name": "mStream",
        "description": "Music streaming server with GUI management tools. Runs on Mac, Windows, and Linux",
        "url": "https://mstream.io/",
        "sourceUrl": "https://github.com/IrosTheBeggar/mStream",
        "license": "GPL-3.0",
        "language": "Nodejs",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "multi-scrobbler",
        "description": "Scrobble plays from multiple sources to multiple scrobbling services",
        "url": "https://foxxmd.github.io/multi-scrobbler",
        "sourceUrl": "https://github.com/FoxxMD/multi-scrobbler",
        "license": "MIT",
        "language": "Nodejs/Docker",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "musikcube",
        "description": "Streaming audio server with Linux/macOS/Windows/Android clients",
        "url": "https://musikcube.com/",
        "sourceUrl": "https://github.com/clangen/musikcube",
        "license": "BSD-3-Clause",
        "language": "C++/deb",
        "tags": [
          "c++"
        ]
      },
      {
        "name": "Navidrome Music Server",
        "description": "Modern Music Server and Streamer, compatible with Subsonic/Airsonic. ([Demo](https://www.navidrome.org/demo), [Source Code](https://github.com/navidrome/navidrome), [Clients](https://www.navidrome.org/docs/overview/#apps))",
        "url": "https://www.navidrome.org",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Docker/Go",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Pinepods",
        "description": "Podcast management system with multi-user support. Pinepods utilizes a central database so aspects like listen time and themes follow from device to device. ([Demo](https://try.pinepods.online), [Source Code](https://github.com/madeofpendletonwool/PinePods))",
        "url": "https://www.pinepods.online/",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Polaris",
        "description": "Music browsing and streaming application optimized for large music collections, ease of use and high performance",
        "url": "https://github.com/agersant/polaris",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Rust/Docker",
        "tags": [
          "rust"
        ]
      },
      {
        "name": "Snapcast",
        "description": "Synchronous multiroom audio server",
        "url": "https://github.com/snapcast/snapcast",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "C++/deb",
        "tags": [
          "c++"
        ]
      },
      {
        "name": "Stretto",
        "description": "Music player with Youtube/Soundcloud import and iTunes/Spotify discovery. ([Demo](https://next.kaiserapps.com), [Clients](https://github.com/benkaiser/stretto-mobile-next))",
        "url": "https://github.com/benkaiser/stretto",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Nodejs",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Supysonic",
        "description": "Python implementation of the Subsonic server API",
        "url": "https://github.com/spl0k/supysonic",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Python/deb",
        "tags": [
          "python"
        ]
      },
      {
        "name": "SwingMusic",
        "description": "Swing Music is a beautiful, self-hosted music player and streaming server for your local audio files. Like a cooler Spotify ... but bring your own music",
        "url": "https://swingmusic.vercel.app/",
        "sourceUrl": "https://github.com/swingmx/swingmusic",
        "license": "MIT",
        "language": "Python/Docker",
        "tags": [
          "python"
        ]
      },
      {
        "name": "vod2pod-rss",
        "description": "Convert YouTube and Twitch channels to podcasts, no storage required. Transcodes VoDs to MP3 192k on the fly, generates an RSS feed to use in podcast clients",
        "url": "https://github.com/madiele/vod2pod-rss",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      }
    ]
  },
  {
    "id": "media-streaming-multimedia-streaming",
    "name": "Media Streaming - Multimedia Streaming",
    "items": [
      {
        "name": "ClipBucket",
        "description": "Start your own video sharing website (YouTube/Netflix Clone) in a matter of minutes. ([Demo](https://demo.clipbucket.oxygenz.fr/), [Source Code](https://github.com/MacWarrior/clipbucket-v5))",
        "url": "https://clipbucket.fr/",
        "sourceUrl": "",
        "license": "AAL",
        "language": "Docker/PHP",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "cmyflix",
        "description": "Minimalist Plex/Jellyfin alternative to stream video",
        "url": "https://github.com/farfalleflickan/cmyflix",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "C/deb",
        "tags": [
          "c"
        ]
      },
      {
        "name": "Gerbera",
        "description": "UPnP Media Server, which allows you to stream your digital media throughout your home network and listen to/watch it on a variety of UPnP compatible devices",
        "url": "https://gerbera.io/",
        "sourceUrl": "https://github.com/gerbera/gerbera",
        "license": "GPL-2.0",
        "language": "Docker/deb/C++",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Icecast 2",
        "description": "Streaming audio/video server which can be used to create an Internet radio station or a privately running jukebox and many things in between. ([Source Code](https://gitlab.xiph.org/xiph/icecast-server), [Clients](https://icecast.org/apps/))",
        "url": "https://icecast.org",
        "sourceUrl": "",
        "license": "GPL-2.0",
        "language": "C",
        "tags": [
          "c"
        ]
      },
      {
        "name": "Jellyfin",
        "description": "Media server for audio, video, books, comics, and photos with a sleek interface and robust transcoding capabilities. Almost all modern platforms have clients, including Roku, Android TV, iOS, and Kodi. ([Demo](https://demo.jellyfin.org/stable), [Source Code](https://github.com/jellyfin/jellyfin), [Clients](https://github.com/awesome-jellyfin/awesome-jellyfin))",
        "url": "https://jellyfin.org",
        "sourceUrl": "",
        "license": "GPL-2.0",
        "language": "C#/deb/Docker",
        "tags": [
          "c#"
        ]
      },
      {
        "name": "Karaoke Eternal",
        "description": "Host awesome karaoke parties where everyone can easily find and queue songs from their phone's browser. The player is also fully browser-based with support for MP3+G, MP4 and WebGL visualizations",
        "url": "https://www.karaoke-eternal.com",
        "sourceUrl": "https://github.com/bhj/KaraokeEternal",
        "license": "ISC",
        "language": "Docker/Nodejs",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Kodi",
        "description": "Multimedia/Entertainment center, formerly known as XBMC. Runs on Android, BSD, Linux, macOS, iOS and Windows",
        "url": "https://kodi.tv/",
        "sourceUrl": "https://github.com/xbmc/xbmc",
        "license": "GPL-2.0",
        "language": "C++/deb",
        "tags": [
          "c++"
        ]
      },
      {
        "name": "Kyoo",
        "description": "Innovative media browser designed for seamless streaming of anime, series and movies, offering advanced features like dynamic transcoding, auto watch history and intelligent metadata retrieval. ([Demo](https://kyoo.zoriya.dev))",
        "url": "https://github.com/zoriya/kyoo",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "MediaMTX",
        "description": "Ready-to-use, zero-dependency real-time media server and proxy to publish, read, record, playback and route video/audio streams over SRT, WebRTC, RTSP, RTMP, HLS, MPEG-TS, RTP. ([Source Code](https://github.com/bluenviron/mediamtx), [Clients](https://mediamtx.org/docs/kickoff/introduction))",
        "url": "https://mediamtx.org",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Go/Docker",
        "tags": [
          "go"
        ]
      },
      {
        "name": "Meelo",
        "description": "Personal Music Server, designed for collectors and music maniacs",
        "url": "https://github.com/Arthi-chaud/Meelo",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "MistServer",
        "description": "Public domain streaming media server that works with any device and any format",
        "url": "https://mistserver.org/",
        "sourceUrl": "https://github.com/DDVTECH/mistserver",
        "license": "Unlicense",
        "language": "C++",
        "tags": [
          "c++"
        ]
      },
      {
        "name": "NymphCast",
        "description": "Turn your choice of Linux-capable hardware into an audio and video source for a television or powered speakers (alternative to Chromecast)",
        "url": "http://nyanko.ws/nymphcast.php",
        "sourceUrl": "https://github.com/MayaPosch/NymphCast",
        "license": "BSD-3-Clause",
        "language": "C++",
        "tags": [
          "c++"
        ]
      },
      {
        "name": "Rygel",
        "description": "UPnP AV MediaServer that allows you to easily share audio, video, and pictures. Media player software may use Rygel to become a MediaRenderer that may be controlled remotely by a UPnP or DLNA Controller",
        "url": "https://gnome.pages.gitlab.gnome.org/rygel/",
        "sourceUrl": "https://gitlab.gnome.org/GNOME/rygel/",
        "license": "LGPL-2.1",
        "language": "C",
        "tags": [
          "c"
        ]
      },
      {
        "name": "Stash",
        "description": "A web-based library organizer and player for your adult media stash, with auto-tagging and metadata scraping support",
        "url": "https://stashapp.cc",
        "sourceUrl": "https://github.com/stashapp/stash",
        "license": "AGPL-3.0",
        "language": "Docker/Go",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "µStreamer",
        "description": "Lightweight and very quick server to stream MJPEG video from any V4L2 device to the net",
        "url": "https://github.com/pikvm/ustreamer",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "C/deb",
        "tags": [
          "c"
        ]
      },
      {
        "name": "üWave",
        "description": "Self-hosted collaborative listening platform. Users take turns playing media—songs, talks, gameplay videos, or anything else—from a variety of media sources like YouTube and SoundCloud. ([Demo](https://wlk.yt/), [Source Code](https://github.com/u-wave))",
        "url": "https://u-wave.net/",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Nodejs",
        "tags": [
          "nodejs"
        ]
      }
    ]
  },
  {
    "id": "media-streaming-video-streaming",
    "name": "Media Streaming - Video Streaming",
    "items": [
      {
        "name": "CyTube",
        "description": "Synchronize media, chat, and more for an arbitrary number of channels. ([Demo](https://cytu.be))",
        "url": "https://github.com/calzoneman/sync",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Nodejs",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Invidious",
        "description": "Alternative YouTube front-end. ([Demo](https://docs.invidious.io/instances/))",
        "url": "https://github.com/iv-org/invidious",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Docker/Crystal",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "MediaCMS",
        "description": "Modern, fully featured open source video and media CMS, written in Python/Django/React, featuring a REST API",
        "url": "https://mediacms.io",
        "sourceUrl": "https://github.com/mediacms-io/mediacms",
        "license": "AGPL-3.0",
        "language": "Python/Docker",
        "tags": [
          "python"
        ]
      },
      {
        "name": "OvenMediaEngine",
        "description": "Streaming Server with Sub-Second Latency. ([Demo](https://demo.ovenplayer.com))",
        "url": "https://github.com/OvenMediaLabs/OvenMediaEngine",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "C++/Docker",
        "tags": [
          "c++"
        ]
      },
      {
        "name": "Owncast",
        "description": "Decentralized single-user live video streaming and chat server for running your own live streams similar in style to the large mainstream options",
        "url": "https://owncast.online/",
        "sourceUrl": "https://github.com/owncast/owncast",
        "license": "MIT",
        "language": "Go",
        "tags": [
          "go"
        ]
      },
      {
        "name": "PeerTube",
        "description": "Decentralized video streaming platform using P2P (BitTorrent) directly in the web browser",
        "url": "https://joinpeertube.org/en/",
        "sourceUrl": "https://github.com/Chocobozzz/PeerTube",
        "license": "AGPL-3.0",
        "language": "Nodejs",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Rapidbay",
        "description": "Videostreaming service/torrent client that allows searching and playing videos from torrents in the browser or from a Chromecast/AppleTV/Smart TV",
        "url": "https://github.com/hauxir/rapidbay/",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Python/Docker",
        "tags": [
          "python"
        ]
      },
      {
        "name": "Restreamer",
        "description": "Access H.264 real-time video streaming on your website without a streaming provider",
        "url": "https://datarhei.github.io/restreamer/",
        "sourceUrl": "https://github.com/datarhei/restreamer",
        "license": "Apache-2.0",
        "language": "Nodejs/Docker",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "SRS",
        "description": "A simple, high efficiency and real-time video server, supports RTMP, WebRTC, HLS, HTTP-FLV and SRT",
        "url": "https://ossrs.io/",
        "sourceUrl": "https://github.com/ossrs/srs",
        "license": "MIT",
        "language": "Docker/C++",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "SyncTube",
        "description": "Lightweight and very simple to setup CyTube alternative to watch videos with friends and chat",
        "url": "https://github.com/RblSb/SyncTube",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Nodejs/Haxe",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Tube Archivist",
        "description": "Organize, search, and enjoy your YouTube collection. Subscribe, download, and track viewed content with metadata indexing and a user-friendly interface. ([Source Code](https://github.com/tubearchivist/tubearchivist), [Clients](https://docs.tubearchivist.com/faq/#how-do-i-import-my-videos-to-emby-plex-jellyfin-kodi))",
        "url": "https://tubearchivist.com/",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Tube",
        "description": "Youtube-like (_without censorship and features you don't need!_) video sharing app written in Go which also supports automatic transcoding to MP4 H.265 AAC, multiple collections and RSS feed. ([Demo](https://tube.mills.io))",
        "url": "https://git.mills.io/prologic/tube",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Go",
        "tags": [
          "go"
        ]
      },
      {
        "name": "VideoLAN Client (VLC)",
        "description": "Cross-platform multimedia player client and server supporting most multimedia files as well as DVDs, Audio CDs, VCDs, and various streaming protocols",
        "url": "https://www.videolan.org/",
        "sourceUrl": "https://code.videolan.org/videolan/vlc",
        "license": "GPL-2.0",
        "language": "C/deb",
        "tags": [
          "c"
        ]
      }
    ]
  },
  {
    "id": "miscellaneous",
    "name": "Miscellaneous",
    "items": [
      {
        "name": "2FAuth",
        "description": "Manage your Two-Factor Authentication (2FA) accounts and generate their security codes. ([Demo](https://demo.2fauth.app/))",
        "url": "https://github.com/Bubka/2FAuth",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "PHP/Docker",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Anchr",
        "description": "Toolbox for tiny tasks on the internet, including bookmark collections, URL shortening and (encrypted) image uploads",
        "url": "https://anchr.io",
        "sourceUrl": "https://github.com/muety/anchr",
        "license": "GPL-3.0",
        "language": "Nodejs",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Anubis",
        "description": "Web AI firewall utility which protects upstream resources from scraper bots",
        "url": "https://anubis.techaro.lol/",
        "sourceUrl": "https://github.com/TecharoHQ/anubis",
        "license": "MIT",
        "language": "Docker/deb/Go",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "asciinema",
        "description": "Web app for hosting asciicasts. ([Demo](https://asciinema.org/explore), [Source Code](https://github.com/asciinema/asciinema-server))",
        "url": "https://asciinema.org/",
        "sourceUrl": "",
        "license": "Apache-2.0",
        "language": "Elixir/Docker",
        "tags": [
          "elixir"
        ]
      },
      {
        "name": "Baby Buddy",
        "description": "Helps caregivers track baby sleep, feedings, diaper changes, and tummy time. ([Demo](https://github.com/babybuddy/babybuddy#-demo))",
        "url": "https://github.com/babybuddy/babybuddy",
        "sourceUrl": "",
        "license": "BSD-2-Clause",
        "language": "Python",
        "tags": [
          "python"
        ]
      },
      {
        "name": "ClipCascade",
        "description": "Syncs your clipboard across multiple devices instantly, without any button press. Available on Windows, macOS, Linux, and Android, it provides seamless and secure clipboard sharing with end-to-end data encryption",
        "url": "https://github.com/Sathvik-Rao/ClipCascade",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Java/Docker",
        "tags": [
          "java"
        ]
      },
      {
        "name": "Cloudlog",
        "description": "Log your amateur radio contacts anywhere",
        "url": "https://magicbug.co.uk/cloudlog/",
        "sourceUrl": "https://github.com/magicbug/cloudlog",
        "license": "MIT",
        "language": "PHP/Docker",
        "tags": [
          "php"
        ]
      },
      {
        "name": "ConvertX",
        "description": "Online file converter which supports over a thousand different formats",
        "url": "https://github.com/C4illin/ConvertX",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "CUPS",
        "description": "The Common Unix Print System uses Internet Printing Protocol (IPP) to support printing to local and network printers",
        "url": "https://www.cups.org/",
        "sourceUrl": "https://github.com/OpenPrinting/cups",
        "license": "GPL-2.0",
        "language": "C",
        "tags": [
          "c"
        ]
      },
      {
        "name": "CyberChef",
        "description": "Perform all manner of operations within a web browser such as AES, DES and Blowfish encryption and decryption, creating hexdumps, calculating hashes, and much more. ([Demo](https://gchq.github.io/CyberChef))",
        "url": "https://github.com/gchq/CyberChef",
        "sourceUrl": "",
        "license": "Apache-2.0",
        "language": "Javascript",
        "tags": [
          "javascript"
        ]
      },
      {
        "name": "Digiboard",
        "description": "Create collaborative whiteboards (documentation in French)",
        "url": "https://digiboard.app/",
        "sourceUrl": "https://codeberg.org/ladigitale/digiboard",
        "license": "AGPL-3.0",
        "language": "Nodejs",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Digicard",
        "description": "Create simple graphic compositions (documentation in French). ([Demo](https://ladigitale.dev/digicard/))",
        "url": "https://codeberg.org/ladigitale/digicard",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Nodejs",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Digicut",
        "description": "Cut audio and video files using FFMPEG.wasm (documentation in French)",
        "url": "https://ladigitale.dev/digicut/",
        "sourceUrl": "https://codeberg.org/ladigitale/digicut",
        "license": "AGPL-3.0",
        "language": "Nodejs",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Digiface",
        "description": "Create avatars using the Avataaars library (documentation in French). ([Demo](https://ladigitale.dev/digiface/), [Source Code](https://codeberg.org/ladigitale/digiface))",
        "url": "https://ladigitale.dev/digiface/",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Nodejs",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Digiflashcards",
        "description": "An online application to create flashcards (documentation in French)",
        "url": "https://ladigitale.dev/digiflashcards/",
        "sourceUrl": "https://codeberg.org/ladigitale/digiflashcards",
        "license": "AGPL-3.0",
        "language": "Nodejs/PHP",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Digimerge",
        "description": "Assemble audio and video files directly in your browser (documentation in French). ([Demo](https://ladigitale.dev/digimerge/), [Source Code](https://codeberg.org/ladigitale/Digimerge))",
        "url": "https://ladigitale.dev/digimerge/",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Nodejs",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Digiquiz",
        "description": "An online application to publish content created with H5P (documentation in French)",
        "url": "https://ladigitale.dev/digiquiz/",
        "sourceUrl": "https://codeberg.org/ladigitale/digiquiz",
        "license": "AGPL-3.0",
        "language": "Nodejs",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Digiread",
        "description": "Clean up online pages and articles using Mozilla's Readability (documentation in French)",
        "url": "https://ladigitale.dev/digiread/",
        "sourceUrl": "https://codeberg.org/ladigitale/digiread",
        "license": "AGPL-3.0",
        "language": "Nodejs/PHP",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Digisteps",
        "description": "A simple application for creating online educational paths (documentation in French)",
        "url": "https://ladigitale.dev/digisteps/",
        "sourceUrl": "https://codeberg.org/ladigitale/digisteps",
        "license": "AGPL-3.0",
        "language": "Nodejs/PHP",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Digitranscode",
        "description": "Convert audio files and videos directly in the browser (documentation in French). ([Demo](https://ladigitale.dev/digitranscode), [Source Code](https://codeberg.org/ladigitale/digitranscode))",
        "url": "https://ladigitale.dev/digitranscode",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Nodejs",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Digiview",
        "description": "View YouTube videos in a distraction-free interface (documentation in French). ([Demo](https://ladigitale.dev/digiview/), [Source Code](https://codeberg.org/ladigitale/digiview))",
        "url": "https://ladigitale.dev/digiview/",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Nodejs/PHP",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Digiwords",
        "description": "A simple online application for creating word clouds (documentation in French)",
        "url": "https://ladigitale.dev/digiwords/",
        "sourceUrl": "https://codeberg.org/ladigitale/digiwords",
        "license": "AGPL-3.0",
        "language": "Nodejs/PHP",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "DOCAT",
        "description": "Host your docs. Simple. Versioned. Fancy",
        "url": "https://github.com/docat-org/docat",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Python/Docker",
        "tags": [
          "python"
        ]
      },
      {
        "name": "Domain Locker",
        "description": "Domain name portfolio management and tracker. ([Demo](https://demo.domain-locker.com), [Source Code](https://github.com/lissy93/domain-locker))",
        "url": "https://domain-locker.com",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Deno/Docker",
        "tags": [
          "deno"
        ]
      },
      {
        "name": "DOMJudge",
        "description": "System for running a programming contest, like the ICPC regional and world championship programming contests. ([Demo](https://www.domjudge.org/demo), [Source Code](https://github.com/DOMjudge/domjudge))",
        "url": "https://www.domjudge.org/",
        "sourceUrl": "",
        "license": "GPL-2.0/BSD-3-Clause/MIT",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "ESMira",
        "description": "Run longitudinal studies (ESM, AA, EMA) with data collection and communication with participants being completely anonymous. ([Demo](https://demo-esmira.kl.ac.at/#admin,username:demo,password:demodemodemo), [Source Code](https://github.com/KL-Psychological-Methodology/ESMira))",
        "url": "https://esmira.kl.ac.at",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "F-Droid",
        "description": "Server tools for maintaining an F-Droid repository system",
        "url": "https://f-droid.org",
        "sourceUrl": "https://gitlab.com/fdroid/fdroidserver",
        "license": "AGPL-3.0",
        "language": "Python/Docker/deb",
        "tags": [
          "python"
        ]
      },
      {
        "name": "Flyimg",
        "description": "Resize and crop images on the fly. Get optimised images with MozJPEG, WebP or PNG using ImageMagick, with an efficient caching system. ([Demo](https://demo.flyimg.io), [Source Code](https://github.com/flyimg/flyimg))",
        "url": "https://flyimg.io",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Geeftlist",
        "description": "Collaborative platform for managing, sharing and reserving gifts between friends and family",
        "url": "https://codeberg.org/nanawel/geeftlist",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "google-webfonts-helper",
        "description": "Hassle-Free Way to Self-Host Google Fonts. Get eot, ttf, svg, woff and woff2 files + CSS snippets. ([Demo](https://gwfh.mranftl.com/fonts))",
        "url": "https://github.com/majodev/google-webfonts-helper",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Nodejs",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Habitica",
        "description": "Habit tracker app which treats your goals like a Role Playing Game",
        "url": "https://habitica.com/",
        "sourceUrl": "https://github.com/HabitRPG/habitica",
        "license": "GPL-3.0/CC-BY-SA-3.0",
        "language": "Nodejs/Docker",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "HortusFox",
        "description": "Collaborative plant management and tracking system for plant enthusiasts",
        "url": "https://hortusfox.github.io",
        "sourceUrl": "https://github.com/danielbrendel/hortusfox-web",
        "license": "MIT",
        "language": "PHP/Docker",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Infisical Community Edition",
        "description": "Platform for secrets, certificates, and privileged access management",
        "url": "https://infisical.com/",
        "sourceUrl": "https://github.com/Infisical/infisical",
        "license": "MIT",
        "language": "Docker/K8S/deb",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "iSponsorBlockTV",
        "description": "Block and skip sponsors, while also muting and skipping ads on YouTube",
        "url": "https://github.com/dmunozv04/iSponsorBlockTV",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Docker/Python",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "IT-Tools by sharevb",
        "description": "Collection of handy online tools for developers (fork of [it-tools](https://github.com/CorentinTh/it-tools)). ([Demo](https://sharevb-it-tools.vercel.app/))",
        "url": "https://github.com/sharevb/it-tools",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Jelu",
        "description": "Read and to-read list book tracker",
        "url": "https://bayang.github.io/jelu-web",
        "sourceUrl": "https://github.com/bayang/jelu",
        "license": "MIT",
        "language": "Java/Docker",
        "tags": [
          "java"
        ]
      },
      {
        "name": "jetlog",
        "description": "Personal flight tracker and viewer",
        "url": "https://github.com/pbogre/jetlog",
        "sourceUrl": "",
        "license": "GPL-2.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Kasm Workspaces",
        "description": "Streaming containerized apps and desktops to end-users. Examples include Ubuntu in your browser, or simply single apps such as Chrome, OpenOffice, Gimp, Filezilla etc. ([Demo](https://www.kasmweb.com/#demo), [Source Code](https://github.com/kasmtech))",
        "url": "https://kasmweb.com/",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Koillection",
        "description": "Koillection is a service allowing users to manage any kind of collections",
        "url": "https://koillection.github.io/",
        "sourceUrl": "https://github.com/benjaminjonard/koillection",
        "license": "MIT",
        "language": "Docker/PHP",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "LanguageTool",
        "description": "Proofread more than 20 languages. It finds many errors that a simple spell checker cannot detect. ([Source Code](https://github.com/languagetool-org/languagetool), [Clients](https://languagetool.org/insights/post/product-windows-app/))",
        "url": "https://languagetool.org/",
        "sourceUrl": "",
        "license": "LGPL-2.1",
        "language": "Java/Docker",
        "tags": [
          "java"
        ]
      },
      {
        "name": "Libre Translate",
        "description": "Machine Translation API",
        "url": "https://libretranslate.com/",
        "sourceUrl": "https://github.com/LibreTranslate/LibreTranslate",
        "license": "AGPL-3.0",
        "language": "Docker/Python",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "LubeLogger",
        "description": "Web-based vehicle maintenance and fuel mileage tracker. ([Demo](https://github.com/hargata/lubelog?tab=readme-ov-file#demo), [Source Code](https://github.com/hargata/lubelog))",
        "url": "https://lubelogger.com",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker/K8S/C#",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "mosparo",
        "description": "The modern spam protection tool. It replaces other captcha methods with a simple and easy to use spam protection solution",
        "url": "https://mosparo.io/",
        "sourceUrl": "https://github.com/mosparo/mosparo",
        "license": "MIT",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Movary",
        "description": "Web app to track and rate your watched movies. ([Demo](https://github.com/leepeuker/movary?tab=readme-ov-file#demo))",
        "url": "https://github.com/leepeuker/movary",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker/PHP",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Neko",
        "description": "Virtual browser that runs in docker and uses WebRTC",
        "url": "https://neko.m1k1o.net",
        "sourceUrl": "https://github.com/m1k1o/neko",
        "license": "Apache-2.0",
        "language": "Docker/Go",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "OmniTools",
        "description": "Collection of powerful web-based tools for everyday tasks (coding, manipulating images/videos, PDFs or crunching numbers...)",
        "url": "https://omnitools.app/",
        "sourceUrl": "https://github.com/iib0011/omni-tools",
        "license": "MIT",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Open-Meteo",
        "description": "Weather API with open-data forecasts, historical and climate data from all major national weather services. ([Demo](https://open-meteo.com/en/docs), [Source Code](https://github.com/open-meteo/open-meteo))",
        "url": "https://open-meteo.com/",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "OpenReader",
        "description": "EPUB, PDF, DOCX, MD, and TXT file text to speech document reader. Read documents in realtime with high-quality TTS; or extract audiobooks. ([Demo](https://openreader.richardr.dev/), [Source Code](https://github.com/richardr1126/openreader))",
        "url": "https://openreader.richardr.dev/",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "OpenZiti",
        "description": "Fully-featured, zero trust, full mesh overlay network. Includes a 2FA support out of the box, clients for all major desktop/mobile OS'es",
        "url": "https://openziti.io/",
        "sourceUrl": "https://github.com/openziti/ziti",
        "license": "Apache-2.0",
        "language": "Go",
        "tags": [
          "go"
        ]
      },
      {
        "name": "Operational.co",
        "description": "Receive alerts in a live timeline from your product. ([Demo](https://app.operational.co/?signinas=kevin), [Source Code](https://github.com/operational-co/operational.co))",
        "url": "https://operational.co",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Nodejs/Docker",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "penpot",
        "description": "Web-based design and prototyping platform meant for cross-domain teams",
        "url": "https://penpot.app/",
        "sourceUrl": "https://github.com/penpot/penpot",
        "license": "MPL-2.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "POMjs",
        "description": "Random password generator",
        "url": "https://password.oppetmoln.se/",
        "sourceUrl": "https://github.com/joho1968/POMjs",
        "license": "GPL-2.0",
        "language": "Javascript",
        "tags": [
          "javascript"
        ]
      },
      {
        "name": "Pønskelisten",
        "description": "Sharing wishlists and collaborating on gifts and presents",
        "url": "https://github.com/aunefyren/poenskelisten",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Docker/Go",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Reactive Resume",
        "description": "One-of-a-kind resume builder that keeps your privacy in mind. Completely secure, customizable, portable, open-source and free forever. ([Demo](https://rxresu.me/), [Source Code](https://github.com/AmruthPillai/Reactive-Resume))",
        "url": "https://rxresu.me/",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker/Nodejs",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "revealjs",
        "description": "Framework for easily creating beautiful presentations using HTML. ([Demo](https://revealjs.com/), [Source Code](https://github.com/hakimel/reveal.js))",
        "url": "https://revealjs.com",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Javascript",
        "tags": [
          "javascript"
        ]
      },
      {
        "name": "Revive Adserver",
        "description": "Ad serving system. Formerly known as OpenX Adserver and phpAdsNew",
        "url": "https://www.revive-adserver.com/",
        "sourceUrl": "https://github.com/revive-adserver/revive-adserver",
        "license": "GPL-2.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "SANE Network Scanning",
        "description": "Allow remote clients to access image acquisition devices (scanners) available on the local host",
        "url": "http://sane-project.org/",
        "sourceUrl": "http://www.sane-project.org/cvs.html",
        "license": "GPL-2.0",
        "language": "C",
        "tags": [
          "c"
        ]
      },
      {
        "name": "string.is",
        "description": "An open-source, privacy-friendly online string toolkit for developers",
        "url": "https://string.is/",
        "sourceUrl": "https://github.com/recurser/string-is",
        "license": "AGPL-3.0",
        "language": "Nodejs",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Teleport",
        "description": "Certificate authority and access plane for SSH, Kubernetes, web applications, and databases",
        "url": "https://goteleport.com/",
        "sourceUrl": "https://github.com/gravitational/teleport",
        "license": "Apache-2.0",
        "language": "Go/Docker/K8S",
        "tags": [
          "go"
        ]
      },
      {
        "name": "TeslaMate",
        "description": "A powerful data logger for Tesla vehicles",
        "url": "https://github.com/teslamate-org/teslamate",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Elixir/Docker",
        "tags": [
          "elixir"
        ]
      },
      {
        "name": "URL-to-PNG",
        "description": "URL to PNG utility featuring parallel rendering using Playwright for screenshots and with storage caching via Local, S3, or CouchDB",
        "url": "https://github.com/jasonraimondi/url-to-png",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Nodejs/Docker",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Usertour",
        "description": "User onboarding platform allowing you to create in-app product tours, checklists, and surveys in minutes effortlessly",
        "url": "https://www.usertour.io/",
        "sourceUrl": "https://github.com/usertour/usertour/",
        "license": "AGPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Warracker",
        "description": "Warranty tracker that lets you monitor expiry dates, upload receipts/files, and get alerts before warranties expire",
        "url": "https://warracker.com",
        "sourceUrl": "https://github.com/sassanix/Warracker",
        "license": "AGPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Wavelog",
        "description": "Webbased Logging Software for Radio Amateurs. Enhanced QSO logging, statistics and maps for your browser. ([Demo](https://demo.wavelog.org), [Source Code](https://github.com/wavelog/wavelog))",
        "url": "https://www.wavelog.org",
        "sourceUrl": "",
        "license": "MIT",
        "language": "PHP/Docker",
        "tags": [
          "php"
        ]
      },
      {
        "name": "WeeWX",
        "description": "Open source software for your weather station. ([Demo](https://weewx.com/showcase.html), [Source Code](https://github.com/weewx/weewx))",
        "url": "https://weewx.com/",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Python/deb",
        "tags": [
          "python"
        ]
      },
      {
        "name": "WeTTY",
        "description": "Terminal in browser over http/https",
        "url": "https://butlerx.github.io/wetty/#/",
        "sourceUrl": "https://github.com/butlerx/wetty",
        "license": "MIT",
        "language": "Docker/Nodejs",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Wishlist",
        "description": "Wishlist application that you can share with your friends and family",
        "url": "https://github.com/cmintey/wishlist",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker/K8S",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Yamtrack",
        "description": "Media tracker for movies, tv shows, anime, manga, video games and books. ([Demo](https://github.com/FuzzyGrim/Yamtrack?tab=readme-ov-file#demo))",
        "url": "https://github.com/FuzzyGrim/Yamtrack",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Docker/Python",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Zero-TOTP",
        "description": "Complete, reliable, secure and zero-trust webapp based on zero-knowledge encryption to store your TOTP codes",
        "url": "https://zero-totp.com",
        "sourceUrl": "https://github.com/SeaweedbrainCY/zero-totp",
        "license": "GPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      }
    ]
  },
  {
    "id": "money-budgeting-management",
    "name": "Money, Budgeting & Management",
    "items": [
      {
        "name": "Actual",
        "description": "Local-first personal finance tool based on zero-sum budgeting, supporting synchronization across devices, custom rules, manual transaction importing (from QIF, OFX, and QFX files), and optional automatic synchronization with many banks",
        "url": "https://actualbudget.org",
        "sourceUrl": "https://github.com/actualbudget/actual",
        "license": "MIT",
        "language": "Nodejs/Docker",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Bigcapital",
        "description": "Financial accounting and inventory management software for small to medium businesses",
        "url": "https://bigcapital.app/",
        "sourceUrl": "https://github.com/bigcapitalhq/bigcapital",
        "license": "AGPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Bitcart",
        "description": "Cryptocurrencies payment processor and development platform. ([Demo](https://admin.bitcart.ai), [Source Code](https://github.com/bitcart/bitcart))",
        "url": "https://bitcart.ai",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker/Python/Nodejs",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "BTCPay Server",
        "description": "Bitcoin and other cryptocurrencies payment processor. ([Demo](https://mainnet.demo.btcpayserver.org/), [Source Code](https://github.com/btcpayserver/btcpayserver))",
        "url": "https://btcpayserver.org/",
        "sourceUrl": "",
        "license": "MIT",
        "language": "C#",
        "tags": [
          "c#"
        ]
      },
      {
        "name": "DePay",
        "description": "Accept Web3 Payments directly into your wallet. Peer-to-peer, free, self-hosted & open-source. ([Demo](https://depay.com/products/payments), [Source Code](https://github.com/depayfi/widgets))",
        "url": "https://depay.com",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Nodejs",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Econumo",
        "description": "Budgeting application for managing personal and family finances, supporting multiple currencies, joint accounts, and budgets. ([Demo](https://demo.econumo.com), [Source Code](https://github.com/econumo/econumo))",
        "url": "https://econumo.com",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "ExpenseOwl",
        "description": "Extremely simple expense tracker with a beautiful UI",
        "url": "https://github.com/tanq16/expenseowl",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Go/Docker/K8S",
        "tags": [
          "go"
        ]
      },
      {
        "name": "ezbookkeeping",
        "description": "A lightweight personal bookkeeping app hosted by yourself. ([Demo](https://ezbookkeeping-demo.mayswind.net/), [Source Code](https://github.com/mayswind/ezbookkeeping))",
        "url": "https://ezbookkeeping.mayswind.net/",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Go/Docker",
        "tags": [
          "go"
        ]
      },
      {
        "name": "Family Accounting Tool",
        "description": "Web-based finance management tool for partners with partially shared expenses",
        "url": "https://github.com/nymanjens/facto",
        "sourceUrl": "",
        "license": "Apache-2.0",
        "language": "Scala",
        "tags": [
          "scala"
        ]
      },
      {
        "name": "Fava",
        "description": "Web frontend of Beancount, a text based double-entry accounting system. ([Demo](https://fava.pythonanywhere.com/example-with-budgets/income_statement/), [Source Code](https://github.com/beancount/fava))",
        "url": "https://beancount.github.io/fava/",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Python",
        "tags": [
          "python"
        ]
      },
      {
        "name": "Firefly III",
        "description": "Firefly III is a modern financial manager. It helps you to keep track of your money and make budget forecasts. It supports credit cards, has an advanced rule engine and can import data from many banks. ([Demo](https://demo.firefly-iii.org/), [Source Code](https://github.com/firefly-iii/firefly-iii))",
        "url": "https://firefly-iii.org/",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "PHP/Docker",
        "tags": [
          "php"
        ]
      },
      {
        "name": "FOSSBilling",
        "description": "Hosting and billing automation. Integrates with WHM, CWP, cPanel and HestiaCP. Full API and easily extensible. ([Demo](https://fossbilling.org/demo), [Source Code](https://github.com/FOSSBilling/FOSSBilling))",
        "url": "https://fossbilling.org/",
        "sourceUrl": "",
        "license": "Apache-2.0",
        "language": "PHP/Docker",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Galette",
        "description": "Membership management web application aimed towards non profit organizations",
        "url": "https://galette.eu/",
        "sourceUrl": "https://github.com/galette/galette",
        "license": "GPL-3.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Ghostfolio",
        "description": "Wealth management software to keep track of stocks, ETFs and cryptocurrencies",
        "url": "https://ghostfol.io/",
        "sourceUrl": "https://github.com/ghostfolio/ghostfolio",
        "license": "AGPL-3.0",
        "language": "Docker/Nodejs",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "GRR",
        "description": "Assets management and booking for small/medium companies",
        "url": "https://grr.devome.com/?lang=en",
        "sourceUrl": "https://github.com/JeromeDevome/GRR",
        "license": "GPL-2.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "HyperSwitch",
        "description": "Payment switch to make payments fast, reliable and affordable. Connect with multiple payment processors and route traffic effortlessly, all with a single API integration",
        "url": "https://hyperswitch.io/",
        "sourceUrl": "https://github.com/juspay/hyperswitch",
        "license": "Apache-2.0",
        "language": "Docker/Rust",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "IHateMoney",
        "description": "Manage your shared expenses, easily. ([Demo](https://ihatemoney.org/demo/), [Source Code](https://github.com/spiral-project/ihatemoney))",
        "url": "https://ihatemoney.org/",
        "sourceUrl": "",
        "license": "BSD-3-Clause",
        "language": "Docker/Python",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "InvoicePlane",
        "description": "Manage quotes, invoices, payments and customers for your small business",
        "url": "https://www.invoiceplane.com/",
        "sourceUrl": "https://github.com/InvoicePlane/InvoicePlane",
        "license": "MIT",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "InvoiceShelf",
        "description": "Track expenses, payments & create professional invoices & estimates (fork of Crater)",
        "url": "https://invoiceshelf.com/",
        "sourceUrl": "https://github.com/InvoiceShelf/InvoiceShelf",
        "license": "AGPL-3.0",
        "language": "PHP/Docker",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Kill Bill",
        "description": "Subscription billing & payments platform. Have access to real-time analytics and financial reports",
        "url": "https://killbill.io/",
        "sourceUrl": "https://github.com/killbill/killbill",
        "license": "Apache-2.0",
        "language": "Java/Docker",
        "tags": [
          "java"
        ]
      },
      {
        "name": "Kresus",
        "description": "Personal finance manager. ([Demo](https://kresus.org/en/demo.html), [Source Code](https://github.com/kresusapp/kresus))",
        "url": "https://kresus.org/",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Nodejs/Docker",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Lago",
        "description": "Metering and usage-based billing",
        "url": "https://www.getlago.com/",
        "sourceUrl": "https://github.com/getlago/lago",
        "license": "AGPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "monetr",
        "description": "Budgeting application focused on planning for recurring expenses",
        "url": "https://monetr.app/",
        "sourceUrl": "https://github.com/monetr/monetr",
        "license": "FSL-1.1-MIT",
        "language": "Docker/K8S",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Mybucks.online",
        "description": "Secure, browser-based, password-only self-custodial cryptocurrency wallet. ([Demo](https://app.mybucks.online), [Source Code](https://github.com/mybucks-online/app))",
        "url": "https://mybucks.online",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Nodejs",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "MyFin Budget",
        "description": "Personal finances platform (web + REST API + Android) that'll help you budget, keep track of your income/spending and forecast your financial future. ([Demo](https://github.com/afaneca/myfin?tab=readme-ov-file#demo-account---try-it-for-yourself), [Source Code](https://github.com/afaneca/myfin), [Clients](https://github.com/afaneca/myfin-api))",
        "url": "https://myfinbudget.com",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Nodejs/Docker",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "OctoBot",
        "description": "Cryptocurrency trading bot",
        "url": "https://www.octobot.cloud/",
        "sourceUrl": "https://github.com/Drakkar-Software/OctoBot",
        "license": "GPL-3.0",
        "language": "Python/Docker",
        "tags": [
          "python"
        ]
      },
      {
        "name": "Ocular",
        "description": "Simplistic and straightforward budgeting app to track your budget across months and years. ([Demo](https://simonwep.github.io/ocular/demo/#demo), [Source Code](https://github.com/simonwep/ocular))",
        "url": "https://simonwep.github.io/ocular/",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "OpenBudgeteer",
        "description": "Budgeting app based on the Bucket Budgeting Principle",
        "url": "https://github.com/TheAxelander/OpenBudgeteer",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Docker/C#",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Receipt Wrangler",
        "description": "Easy-to-use receipt manager, powered by AI. Allows users to create receipts effortlessly and quickly, categorize and more. ([Demo](https://demo.receiptwrangler.io), [Source Code](https://github.com/Receipt-Wrangler/receipt-wrangler))",
        "url": "https://receiptwrangler.io",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "REI3",
        "description": "Manage tasks, time, assets and much more within your business. ([Demo](https://rei3.de/demo_en/), [Source Code](https://github.com/r3-team/r3))",
        "url": "https://rei3.de/home_en/",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Go",
        "tags": [
          "go"
        ]
      },
      {
        "name": "SHKeeper",
        "description": "Cryptocurrency payment processor with the unique combination of gateway and merchant allowing you to accept payments in multiple cryptocurrencies without fees and intermediaries. ([Demo](https://github.com/vsys-host/shkeeper.io?tab=readme-ov-file#11-demo), [Source Code](https://github.com/vsys-host/shkeeper.io))",
        "url": "https://shkeeper.io/",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Python",
        "tags": [
          "python"
        ]
      },
      {
        "name": "SolidInvoice",
        "description": "Open source invoicing and quote application",
        "url": "https://solidinvoice.co",
        "sourceUrl": "https://github.com/SolidInvoice/SolidInvoice",
        "license": "MIT",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Sure",
        "description": "Personal finance application for everyone (fork of Maybe)",
        "url": "https://github.com/we-promise/sure",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "VoucherVault",
        "description": "Store and manage vouchers, coupons, loyalty and gift cards digitally. Supports expiry notifications, transaction histories, file uploads and OIDC SSO",
        "url": "https://github.com/l4rm4nd/VoucherVault",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Wallos",
        "description": "Lightweight personal subscription tracker with statistics and optional notifications. ([Demo](https://github.com/ellite/wallos?tab=readme-ov-file#demo), [Source Code](https://github.com/ellite/wallos))",
        "url": "https://wallosapp.com",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "PHP/Docker",
        "tags": [
          "php"
        ]
      },
      {
        "name": "WYGIWYH",
        "description": "Simple and powerful finance tracker. ([Demo](https://wygiwyh-demo.herculino.com/))",
        "url": "https://github.com/eitchtee/WYGIWYH",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Docker/Python",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "YAFFA",
        "description": "Personal finance web application, that can be used to keep track of your money, expenses, budgets, and investments. It also helps with long-term financial planning. ([Demo](https://sandbox.yaffa.cc), [Source Code](https://github.com/kantorge/yaffa))",
        "url": "https://www.yaffa.cc",
        "sourceUrl": "",
        "license": "MIT",
        "language": "PHP",
        "tags": [
          "php"
        ]
      }
    ]
  },
  {
    "id": "network-utilities",
    "name": "Network Utilities",
    "items": [
      {
        "name": "beelzebub",
        "description": "Honeypot framework designed to provide a highly secure environment for detecting and analyzing cyber attacks",
        "url": "https://beelzebub-honeypot.com/",
        "sourceUrl": "https://github.com/beelzebub-labs/beelzebub",
        "license": "MIT",
        "language": "Docker/K8S/Go",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Canary Tokens",
        "description": "Generates lightweight, embedded honeypot triggers called canary tokens for detecting unauthorized access",
        "url": "https://canarytokens.org",
        "sourceUrl": "https://github.com/thinkst/opencanary",
        "license": "BSD-3-Clause",
        "language": "Docker/Python",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "MyIP",
        "description": "All in one IP Toolbox. Easy to check what's your IPs, IP geolocation, check for DNS leaks, examine WebRTC connections, speed test, ping test, MTR test, check website availability and more. ([Demo](https://ipcheck.ing), [Source Code](https://github.com/jason5ng32/MyIP))",
        "url": "https://ipcheck.ing",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Nodejs/Docker",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "MySpeed",
        "description": "Speed test analysis software that shows your internet speed for up to 30 days",
        "url": "https://myspeed.dev/",
        "sourceUrl": "https://github.com/gnmyt/myspeed",
        "license": "MIT",
        "language": "Docker/Nodejs",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "NetAlertX",
        "description": "Network intruder and presence detector. Scans for devices connected to your network and alerts you if new and unknown devices are found",
        "url": "https://netalertx.com/",
        "sourceUrl": "https://github.com/netalertx/NetAlertX",
        "license": "GPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Speed Test by OpenSpeedTest™",
        "description": "Free & Open-Source HTML5 Network Performance Estimation Tool",
        "url": "https://openspeedtest.com/",
        "sourceUrl": "https://github.com/openspeedtest/Speed-Test",
        "license": "MIT",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Speedtest Tracker",
        "description": "Monitor the performance and uptime of your internet connection",
        "url": "https://docs.speedtest-tracker.dev/",
        "sourceUrl": "https://github.com/alexjustesen/speedtest-tracker",
        "license": "MIT",
        "language": "Docker/K8S",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Upsnap",
        "description": "A simple Wake on LAN (WOL) dashboard app. Wake up devices on your network and see current status",
        "url": "https://github.com/seriousm4x/UpSnap",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Go/Docker",
        "tags": [
          "go"
        ]
      },
      {
        "name": "Wakupator",
        "description": "Wake On LAN Machine Manager based on network traffic",
        "url": "https://github.com/Gibus21250/Wakupator",
        "sourceUrl": "",
        "license": "MIT",
        "language": "C",
        "tags": [
          "c"
        ]
      },
      {
        "name": "WatchYourLAN",
        "description": "Lightweight network IP scanner with notifications, history, export to Grafana",
        "url": "https://github.com/aceberg/WatchYourLAN",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker/Go/deb",
        "tags": [
          "docker"
        ]
      }
    ]
  },
  {
    "id": "note-taking-editors",
    "name": "Note-taking & Editors",
    "items": [
      {
        "name": "Blinko",
        "description": "A personal note tool with AI features",
        "url": "https://blinko.space/",
        "sourceUrl": "https://github.com/blinkospace/blinko",
        "license": "AGPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "DailyTxT",
        "description": "Encrypted diary Web application to save your personal memories of each day. Includes a search function and encrypted file upload. ([Demo](https://dailytxt.phitux.de))",
        "url": "https://github.com/PhiTux/DailyTxT",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Docs",
        "description": "Collaborative note taking, wiki and documentation platform that scales",
        "url": "https://docs.numerique.gouv.fr/",
        "sourceUrl": "https://github.com/suitenumerique/docs",
        "license": "MIT",
        "language": "K8S",
        "tags": [
          "k8s"
        ]
      },
      {
        "name": "draw.io",
        "description": "Diagram software for making flowcharts, process diagrams, org charts, UML, ER and network diagrams",
        "url": "https://draw.io",
        "sourceUrl": "https://github.com/jgraph/drawio",
        "license": "Apache-2.0",
        "language": "Javascript/Docker",
        "tags": [
          "javascript"
        ]
      },
      {
        "name": "flatnotes",
        "description": "Database-less note-taking web app that utilises a flat folder of markdown files for storage. ([Demo](https://demo.flatnotes.io))",
        "url": "https://github.com/dullage/flatnotes",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "HedgeDoc",
        "description": "Realtime collaborative markdown notes on all platforms, formerly known as CodiMD and HackMD CE. ([Demo](https://demo.hedgedoc.org/), [Source Code](https://github.com/hedgedoc/hedgedoc))",
        "url": "https://hedgedoc.org/",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Docker/Nodejs",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Joplin",
        "description": "Note taking application with markdown editor and encryption support for mobile and desktop platforms. Runs client-side and syncs through a self hosted Nextcloud instance or similar (alternative to Evernote)",
        "url": "https://joplinapp.org/",
        "sourceUrl": "https://github.com/laurent22/joplin",
        "license": "MIT",
        "language": "Nodejs",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Jotty",
        "description": "Lightweight but powerful alternative for managing your personal, file based, notes and checklists",
        "url": "https://jotty.page",
        "sourceUrl": "https://github.com/fccview/jotty",
        "license": "AGPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Livebook",
        "description": "Realtime collaborative notebook app based on Markdown that supports running Elixir code snippets, TeX and Mermaid Diagrams. Easily deployed using Docker or Elixir",
        "url": "https://livebook.dev",
        "sourceUrl": "https://github.com/livebook-dev/livebook",
        "license": "Apache-2.0",
        "language": "Elixir/Docker",
        "tags": [
          "elixir"
        ]
      },
      {
        "name": "Many Notes",
        "description": "Markdown note-taking web application designed for simplicity",
        "url": "https://github.com/brufdev/many-notes",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Memos",
        "description": "Knowledge base that works with a SQLite db file. ([Demo](https://demo.usememos.com/explore), [Source Code](https://github.com/usememos/memos))",
        "url": "https://usememos.com/",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker/Go",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Note Mark",
        "description": "Minimal web-based Markdown notes app",
        "url": "https://notemark.docs.enchantedcode.co.uk/",
        "sourceUrl": "https://github.com/enchant97/note-mark",
        "license": "AGPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Overleaf",
        "description": "Web-based collaborative LaTeX editor",
        "url": "https://www.overleaf.com/",
        "sourceUrl": "https://github.com/overleaf/overleaf",
        "license": "AGPL-3.0",
        "language": "Ruby",
        "tags": [
          "ruby"
        ]
      },
      {
        "name": "Plainpad",
        "description": "Modern note taking application for the cloud, utilizing the best features of progressive web apps technology. ([Demo](https://alextselegidis.com/try/plainpad/), [Source Code](https://github.com/alextselegidis/plainpad))",
        "url": "https://alextselegidis.com/get/plainpad/",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "SilverBullet",
        "description": "Note-taking application optimized for people with a hacker mindset. ([Demo](https://play.silverbullet.md/), [Source Code](https://github.com/silverbulletmd/silverbullet), [Clients](https://silverbullet.md/Libraries))",
        "url": "https://silverbullet.md/",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker/Deno",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Standard Notes",
        "description": "Simple and private notes app. Protect your privacy while getting more done. That's Standard Notes. ([Demo](https://app.standardnotes.com/), [Source Code](https://github.com/standardnotes/app))",
        "url": "https://docs.standardnotes.com/self-hosting/getting-started",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Ruby",
        "tags": [
          "ruby"
        ]
      },
      {
        "name": "TriliumNext Notes",
        "description": "Cross-platform hierarchical note taking application with focus on building large personal knowledge bases (fork of Trilium Notes)",
        "url": "https://github.com/TriliumNext/Trilium",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Nodejs/Docker/K8S",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Turtl",
        "description": "Totally private personal database and note taking app",
        "url": "https://turtl.it/",
        "sourceUrl": "https://github.com/turtl",
        "license": "GPL-3.0",
        "language": "CommonLisp",
        "tags": [
          "commonlisp"
        ]
      },
      {
        "name": "Writing",
        "description": "Lightweight distraction-free text editor, in the browser (Markdown and LaTeX supported). No lag when writing",
        "url": "https://josephernest.github.io/writing/",
        "sourceUrl": "https://github.com/josephernest/writing",
        "license": "MIT",
        "language": "Javascript",
        "tags": [
          "javascript"
        ]
      }
    ]
  },
  {
    "id": "office-suites",
    "name": "Office Suites",
    "items": [
      {
        "name": "Collabora Online Development Edition",
        "description": "Collabora Online Development Edition (CODE) is a powerful LibreOffice-based online office that supports all major document, spreadsheet and presentation file formats, which you can integrate in your own infrastructure",
        "url": "https://www.collaboraoffice.com/code",
        "sourceUrl": "https://cgit.freedesktop.org/libreoffice/online/",
        "license": "MPL-2.0",
        "language": "C++",
        "tags": [
          "c++"
        ]
      },
      {
        "name": "CryptPad",
        "description": "Collaboration suite built to enable collaboration, synchronizing changes to documents in real time",
        "url": "https://cryptpad.org",
        "sourceUrl": "https://github.com/cryptpad/cryptpad",
        "license": "AGPL-3.0",
        "language": "Nodejs/Docker",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Digislides",
        "description": "Create multimedia presentations in a quick and easy way. (documentation in French). ([Demo](https://ladigitale.dev/digislides/), [Source Code](https://codeberg.org/ladigitale/Digislides))",
        "url": "https://ladigitale.dev/digislides/",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Nodejs/PHP",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Etherpad",
        "description": "Highly customizable online editor providing collaborative editing in real-time. ([Demo](https://demo.sandstorm.io/appdemo/h37dm17aa89yrd8zuqpdn36p6zntumtv08fjpu8a8zrte7q1cn60), [Source Code](https://github.com/ether/etherpad-lite))",
        "url": "https://etherpad.org/",
        "sourceUrl": "",
        "license": "Apache-2.0",
        "language": "Nodejs/Docker",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Grist",
        "description": "Next-generation spreadsheet with relational structure, formula-based access control, and a portable, self-contained format (alternative to Airtable). ([Demo](https://docs.getgrist.com), [Source Code](https://github.com/gristlabs/grist-core))",
        "url": "https://getgrist.com/",
        "sourceUrl": "",
        "license": "Apache-2.0",
        "language": "Nodejs/Python/Docker",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "ONLYOFFICE",
        "description": "Office suite that enables you to manage documents, projects, team and customer relations in one place",
        "url": "https://helpcenter.onlyoffice.com/faq/server-opensource.aspx",
        "sourceUrl": "https://github.com/ONLYOFFICE/DocumentServer",
        "license": "AGPL-3.0",
        "language": "Nodejs/Docker",
        "tags": [
          "nodejs"
        ]
      }
    ]
  },
  {
    "id": "password-managers",
    "name": "Password Managers",
    "items": [
      {
        "name": "AliasVault",
        "description": "End-to-end encrypted password manager with a built-in email alias generator and server",
        "url": "https://www.aliasvault.net",
        "sourceUrl": "https://github.com/aliasvault/aliasvault",
        "license": "MIT",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Bitwarden",
        "description": "Password manager with a webapp, browser extension, and mobile app",
        "url": "https://bitwarden.com/",
        "sourceUrl": "https://github.com/bitwarden/server",
        "license": "AGPL-3.0",
        "language": "Docker/C#",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Passbolt",
        "description": "Collaborative password manager",
        "url": "https://www.passbolt.com/",
        "sourceUrl": "https://github.com/passbolt/passbolt_api",
        "license": "AGPL-3.0",
        "language": "PHP/deb/K8S/Docker",
        "tags": [
          "php"
        ]
      },
      {
        "name": "PassIt",
        "description": "Simple password manage with sharing features by group and user, but no administration interface. ([Demo](https://app.passit.io/), [Source Code](https://gitlab.com/passit))",
        "url": "https://passit.io/",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Docker/Python",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Psono",
        "description": "Password manager for companies. ([Demo](https://www.psono.pw), [Source Code](https://gitlab.com/esaqa/psono/psono-fileserver))",
        "url": "https://psono.com/",
        "sourceUrl": "",
        "license": "Apache-2.0",
        "language": "Python",
        "tags": [
          "python"
        ]
      },
      {
        "name": "Teampass",
        "description": "Password manager dedicated for managing passwords in a collaborative way. One symmetric key is used to encrypt all shared/team passwords and stored server side in a file and the database. works on any server Apache, MySQL and PHP",
        "url": "https://teampass.net/",
        "sourceUrl": "https://github.com/nilsteampassnet/TeamPass",
        "license": "GPL-3.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Vaultwarden",
        "description": "Lightweight Bitwarden server API implementation written in Rust",
        "url": "https://github.com/dani-garcia/vaultwarden",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Rust/Docker",
        "tags": [
          "rust"
        ]
      }
    ]
  },
  {
    "id": "pastebins",
    "name": "Pastebins",
    "items": [
      {
        "name": "bin",
        "description": "A paste bin that's actually minimalist",
        "url": "https://github.com/w4/bin",
        "sourceUrl": "",
        "license": "WTFPL/0BSD",
        "language": "Rust",
        "tags": [
          "rust"
        ]
      },
      {
        "name": "BinPastes",
        "description": "Minimal pastebin supporting client-side encryption, fulltext search, one-time messages. Intended for one to few users looking for a simple pastebin deployment",
        "url": "https://github.com/querwurzel/BinPastes",
        "sourceUrl": "",
        "license": "Apache-2.0",
        "language": "Java",
        "tags": [
          "java"
        ]
      },
      {
        "name": "ByteStash",
        "description": "Pastebin and file storage service with a simple web interface. Supports syntax highlighting, optional user authentication and public sharing. ([Demo](https://github.com/jordan-dalby/ByteStash?tab=readme-ov-file#demo))",
        "url": "https://github.com/jordan-dalby/ByteStash",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Chiyogami",
        "description": "Pastebin with API, client-side encryption, user accounts, syntax highlighting, markdown rendering, and more. ([Demo](https://chiyogami.myaddr.dev/))",
        "url": "https://github.com/rhee876527/chiyogami",
        "sourceUrl": "",
        "license": "BSD-3-Clause",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "dpaste",
        "description": "Simple pastebin with multiple text and code option, with short url result easy to remember",
        "url": "https://dpaste.org/",
        "sourceUrl": "https://github.com/DarrenOfficial/dpaste",
        "license": "MIT",
        "language": "Docker/Python",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Hemmelig",
        "description": "Share encrypted secrets cross organizations, or as private persons",
        "url": "https://hemmelig.app",
        "sourceUrl": "https://github.com/HemmeligOrg/Hemmelig.app",
        "license": "MIT",
        "language": "Docker/Nodejs",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "lesma",
        "description": "Simple paste app friendly with browser and command line. ([Demo](https://lesma.eu), [Source Code](https://gitlab.com/ogarcia/lesma))",
        "url": "https://lesma.eu",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Rust/Docker",
        "tags": [
          "rust"
        ]
      },
      {
        "name": "Local Content Share",
        "description": "Store and share text snippets and files within your local network",
        "url": "https://github.com/Tanq16/local-content-share",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker/Go",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "not-th.re",
        "description": "Simple paste sharing platform, with client side encryption, featuring the monaco browser-based code editor. ([Demo](https://not-th.re), [Source Code](https://github.com/not-three/main))",
        "url": "https://not-th.re",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Nodejs/Docker",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Opengist",
        "description": "Pastebin powered by Git. ([Demo](https://demo.opengist.io), [Source Code](https://github.com/thomiceli/opengist))",
        "url": "https://opengist.io",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Docker/Go/Nodejs",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "paaster",
        "description": "End-to-end encrypted pastebin built with the objective of simplicity",
        "url": "https://paaster.io",
        "sourceUrl": "https://github.com/WardPearce/paaster",
        "license": "AGPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "pacebin",
        "description": "Super-minimal pastebin and file upload service focusing on small executable size, portability, and ease of configuration. ([Demo](https://paste.crueter.xyz))",
        "url": "https://git.crueter.xyz/crueter/pacebin",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "C",
        "tags": [
          "c"
        ]
      },
      {
        "name": "Password Pusher",
        "description": "Dead-simple application to securely communicate passwords (or text) over the web. Passwords automatically expire after a certain number of views and/or time has passed",
        "url": "https://pwpush.com",
        "sourceUrl": "https://github.com/pglombardo/PasswordPusher",
        "license": "Apache-2.0",
        "language": "Docker/K8S/Ruby",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Pastefy",
        "description": "Beautiful, simple and easy to deploy Pastebin with optional client encryption, multitab pastes, an API, a highlighted editor and more. ([Source Code](https://github.com/interaapps/pastefy), [Clients](https://github.com/topics/pastefy-addon))",
        "url": "https://pastefy.app/",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker/K8S/Java",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "PrivateBin",
        "description": "Minimalist pastebin/discussion board where the server has zero knowledge of hosted data. ([Demo](https://privatebin.net/), [Source Code](https://github.com/PrivateBin/PrivateBin))",
        "url": "https://privatebin.info/",
        "sourceUrl": "",
        "license": "Zlib",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "rustypaste",
        "description": "Minimal file upload/pastebin service",
        "url": "https://github.com/orhun/rustypaste",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Rust",
        "tags": [
          "rust"
        ]
      },
      {
        "name": "SnyPy",
        "description": "Open source on-prem code snippet manager. ([Demo](https://app.snypy.com), [Source Code](https://github.com/snypy))",
        "url": "https://snypy.com",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Sup3rS3cretMes5age",
        "description": "Very simple (to deploy and to use) secret message service using Hashicorp Vault as a secrets storage",
        "url": "https://github.com/algolia/sup3rS3cretMes5age",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Go",
        "tags": [
          "go"
        ]
      },
      {
        "name": "Wastebin",
        "description": "Lightweight, minimal and fast pastebin with an SQLite backend. ([Demo](https://bin.bloerg.net))",
        "url": "https://github.com/matze/wastebin",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Rust/Docker",
        "tags": [
          "rust"
        ]
      },
      {
        "name": "Yopass",
        "description": "Secure sharing of secrets, passwords and files. ([Demo](https://yopass.se/))",
        "url": "https://github.com/jhaals/yopass",
        "sourceUrl": "",
        "license": "Apache-2.0",
        "language": "Go/Docker",
        "tags": [
          "go"
        ]
      }
    ]
  },
  {
    "id": "personal-dashboards",
    "name": "Personal Dashboards",
    "items": [
      {
        "name": "Dashy",
        "description": "Feature-rich homepage for your homelab, with easy YAML configuration. ([Demo](https://demo.dashy.to/), [Source Code](https://github.com/lissy93/dashy))",
        "url": "https://dashy.to/",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Nodejs/Docker",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Glance",
        "description": "Highly customizable dashboard that puts all your feeds in one place",
        "url": "https://github.com/glanceapp/glance",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Docker/Go",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "gobookmarks",
        "description": "Landing page to display bookmarks stored in GitHub, GitLab or local Git",
        "url": "https://github.com/arran4/gobookmarks",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Go/Docker",
        "tags": [
          "go"
        ]
      },
      {
        "name": "Heimdall",
        "description": "Elegant solution to organise all your web applications",
        "url": "https://heimdall.site/",
        "sourceUrl": "https://github.com/linuxserver/Heimdall",
        "license": "MIT",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Hiccup",
        "description": "Beautiful static homepage to get to your links and services quickly. It has built-in search, editing, PWA support and localstorage caching to easily organize your start page",
        "url": "https://designedbyashw.in/test/hiccup/",
        "sourceUrl": "https://github.com/ashwin-pc/hiccup",
        "license": "MIT",
        "language": "Javascript/Docker",
        "tags": [
          "javascript"
        ]
      },
      {
        "name": "Homarr",
        "description": "Sleek, modern dashboard with many integrations and web-based config",
        "url": "https://homarr.dev",
        "sourceUrl": "https://github.com/homarr-labs/homarr",
        "license": "MIT",
        "language": "Docker/Nodejs",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Homepage by gethomepage",
        "description": "Highly customizable homepage (or startpage / application dashboard) with Docker and service API integrations",
        "url": "https://github.com/gethomepage/homepage",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Docker/Nodejs",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Homepage by tomershvueli",
        "description": "Simple, standalone, self-hosted PHP page that is your window to your server and the web",
        "url": "https://github.com/tomershvueli/homepage",
        "sourceUrl": "",
        "license": "MIT",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Homer",
        "description": "Dead simple static homepage to expose your server services, with an easy yaml configuration and connectivity check. ([Demo](https://homer-demo.netlify.app))",
        "url": "https://github.com/bastienwirtz/homer",
        "sourceUrl": "",
        "license": "Apache-2.0",
        "language": "Docker/K8S/Nodejs",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Hubleys",
        "description": "Personal dashboards to organize links for multiple users via a central yaml config",
        "url": "https://github.com/knrdl/hubleys-dashboard",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "LinkStack",
        "description": "Link all your social media platforms easily accessible on one page, customizable through an intuitive, easy to use user/admin interface (alternative to Linktree and Manylink). ([Demo](https://linksta.cc/), [Source Code](https://github.com/LinkStackOrg/LinkStack))",
        "url": "https://linkstack.org/",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "PHP/Docker",
        "tags": [
          "php"
        ]
      },
      {
        "name": "LittleLink",
        "description": "Simplistic approach for links in bio with 100+ branded buttons (alternative to Linktree). ([Demo](https://littlelink.io/), [Source Code](https://github.com/sethcottle/littlelink))",
        "url": "https://littlelink.io/",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Javascript",
        "tags": [
          "javascript"
        ]
      },
      {
        "name": "Mafl",
        "description": "Minimalistic flexible homepage",
        "url": "https://mafl.hywax.space/",
        "sourceUrl": "https://github.com/hywax/mafl",
        "license": "MIT",
        "language": "Docker/Nodejs",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Personal Management System",
        "description": "Organize the essentials of everyday life, everything from a simple to-do list, and notes up to payments, and schedules. ([Demo](https://github.com/Volmarg/personal-management-system#documentation--demo), [Source Code](https://github.com/Volmarg/personal-management-system))",
        "url": "https://volmarg.github.io/",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "portkey",
        "description": "Simple web portal that serves as a startup page, displaying a compilation of links and URLs, while also allowing the addition of custom pages, all managed through a single configuration file. ([Demo](https://demo.portkey.page), [Source Code](https://github.com/kodehat/portkey))",
        "url": "https://portkey.page",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Go/Docker",
        "tags": [
          "go"
        ]
      },
      {
        "name": "ryot",
        "description": "Track various facets of your life - media, fitness, etc. ([Demo](https://github.com/IgnisDa/ryot?tab=readme-ov-file#-demo))",
        "url": "https://github.com/ignisda/ryot",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Starbase 80",
        "description": "A simple homepage with an iPad-style application grid, for mobile and desktop. One JSON configuration file",
        "url": "https://github.com/notclickable-jordan/starbase-80",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Your Spotify",
        "description": "Allows you to record your Spotify listening activity and have statistics about them served through a Web application",
        "url": "https://github.com/Yooooomi/your_spotify",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Nodejs/Docker",
        "tags": [
          "nodejs"
        ]
      }
    ]
  },
  {
    "id": "photo-galleries",
    "name": "Photo Galleries",
    "items": [
      {
        "name": "Chevereto",
        "description": "Ultimate image sharing software. Create your very own personal image hosting website in just minutes",
        "url": "https://chevereto.com/",
        "sourceUrl": "https://github.com/chevereto/chevereto",
        "license": "AGPL-3.0",
        "language": "PHP/Docker",
        "tags": [
          "php"
        ]
      },
      {
        "name": "ChronoFrame",
        "description": "Personal gallery application with online photo management, supporting Live/Motion Photos, and explore map. ([Demo](https://lens.bh8.ga/), [Source Code](https://github.com/HoshinoSuzumi/chronoframe))",
        "url": "https://chronoframe.bh8.ga/",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Nodejs/Docker",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Damselfly",
        "description": "Fast server-based photo management system for large collections of images. Includes face detection, face & object recognition, powerful search, and EXIF Keyword tagging. Runs on Linux, MacOS and Windows",
        "url": "https://damselfly.info",
        "sourceUrl": "https://github.com/webreaper/damselfly",
        "license": "GPL-3.0",
        "language": "Docker/C#/.NET",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Ente",
        "description": "An end-to-end encrypted photo-sharing platform (alternative to Google Photos, Apple Photos)",
        "url": "https://ente.io/",
        "sourceUrl": "https://github.com/ente-io/ente",
        "license": "AGPL-3.0",
        "language": "Docker/Nodejs/Go",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "HomeGallery",
        "description": "Browse personal photos and videos featuring tagging, mobile-friendly, and AI powered image discovery. ([Demo](https://demo.home-gallery.org), [Source Code](https://github.com/xemle/home-gallery))",
        "url": "https://home-gallery.org",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Nodejs/Docker",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Immich Kiosk",
        "description": "Lightweight slideshow for running on kiosk devices and browsers that uses Immich as a data source",
        "url": "https://github.com/damongolding/immich-kiosk",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Docker/Go",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Immich",
        "description": "Photo and video backup solution directly from your mobile phone (alternative to Google Photos). ([Demo](https://github.com/immich-app/immich#demo), [Source Code](https://github.com/immich-app/immich))",
        "url": "https://immich.app/",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "LibrePhotos",
        "description": "Photo management service with a slight focus on cool graphs (alternative to Google Photos). ([Clients](https://docs.librephotos.com/docs/user-guide/mobile/))",
        "url": "https://github.com/LibrePhotos/librephotos",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Python/Docker",
        "tags": [
          "python"
        ]
      },
      {
        "name": "Lychee",
        "description": "Grid and album based photo-management-system",
        "url": "https://lycheeorg.github.io/",
        "sourceUrl": "https://github.com/LycheeOrg/Lychee",
        "license": "MIT",
        "language": "PHP/Docker",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Mediagoblin",
        "description": "Media publishing platform that anyone can run (alternative to Flickr, YouTube, SoundCloud)",
        "url": "https://mediagoblin.org",
        "sourceUrl": "https://git.savannah.gnu.org/cgit/mediagoblin.git/tree/",
        "license": "AGPL-3.0",
        "language": "Python",
        "tags": [
          "python"
        ]
      },
      {
        "name": "Mejiro",
        "description": "Easy-to-use instant photo publishing",
        "url": "https://github.com/dmpop/pellicola",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Nextcloud Memories",
        "description": "Fast, modern and advanced photo management suite. Runs as a Nextcloud app. ([Demo](https://demo.memories.gallery/apps/memories/), [Source Code](https://github.com/pulsejet/memories))",
        "url": "https://memories.gallery/",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Photofield",
        "description": "Experimental fast photo viewer",
        "url": "https://github.com/SmilyOrg/photofield",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker/Go",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "PhotoPrism",
        "description": "Personal photo management powered by Go and Google TensorFlow.  Browse, organize, and share your personal photo collection, using the latest technologies to automatically tag and find pictures. ([Demo](https://demo.photoprism.app/library/browse), [Source Code](https://github.com/photoprism/photoprism))",
        "url": "https://photoprism.org",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Go/Docker",
        "tags": [
          "go"
        ]
      },
      {
        "name": "Photoview",
        "description": "Simple and user-friendly photo gallery for personal servers. It is made for photographers and aims to provide an easy and fast way to navigate directories, with thousands of high resolution photos. ([Demo](https://photoview.github.io/), [Source Code](https://github.com/photoview/photoview))",
        "url": "https://photoview.github.io/",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Go/Docker",
        "tags": [
          "go"
        ]
      },
      {
        "name": "PiGallery 2",
        "description": "Directory-first photo gallery website, with a rich UI, optimised for running on low resource servers",
        "url": "https://bpatrik.github.io/pigallery2/",
        "sourceUrl": "https://github.com/bpatrik/pigallery2",
        "license": "MIT",
        "language": "Docker/Nodejs",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Piwigo",
        "description": "Photo gallery software for the web, built by an active community of users and developers",
        "url": "https://piwigo.org/",
        "sourceUrl": "https://github.com/Piwigo/Piwigo",
        "license": "GPL-2.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "sigal",
        "description": "Yet another simple static gallery generator",
        "url": "https://github.com/saimn/sigal",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Python",
        "tags": [
          "python"
        ]
      },
      {
        "name": "SPIS",
        "description": "A simple, lightweight and fast media server with decent mobile support",
        "url": "https://github.com/gbbirkisson/spis",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Docker/Rust",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "This week in past",
        "description": "Aggregates images taken this week, from previous years and presents them on a web page with a simple slideshow",
        "url": "https://github.com/RouHim/this-week-in-past",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker/Rust",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Thumbor",
        "description": "A smart imaging service and enables on-demand cropping, resizing, applying filters and optimizing images",
        "url": "http://thumbor.org/",
        "sourceUrl": "https://github.com/thumbor/thumbor",
        "license": "MIT",
        "language": "Python/Docker",
        "tags": [
          "python"
        ]
      },
      {
        "name": "WeddingShare",
        "description": "Event photo sharing platform and gallery with slideshow that allows guests to view and share memories via a QR code. ([Demo](https://demo.wedding-share.org/), [Source Code](https://github.com/Cirx08/WeddingShare))",
        "url": "https://docs.wedding-share.org/",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "C#/Docker",
        "tags": [
          "c#"
        ]
      },
      {
        "name": "Zenphoto",
        "description": "Open-source gallery and CMS project",
        "url": "https://www.zenphoto.org/",
        "sourceUrl": "https://github.com/zenphoto/zenphoto",
        "license": "GPL-2.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      }
    ]
  },
  {
    "id": "polls-and-events",
    "name": "Polls and Events",
    "items": [
      {
        "name": "Bitpoll",
        "description": "Conduct polls about dates, times or general questions. ([Demo](https://bitpoll.de/))",
        "url": "https://github.com/fsinfuhh/Bitpoll",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Docker/Python",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Bracket",
        "description": "Flexible tournament system to build a tournament setup, add teams, schedule matches, keep track of scores and present ranking live to the public. ([Demo](https://www.bracketapp.nl/demo), [Source Code](https://github.com/evroon/bracket))",
        "url": "https://docs.bracketapp.nl/",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Docker/Nodejs",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Christmas Community",
        "description": "Create a simple place for your entire family to use to find gifts that people want, and to avoid double-gifting",
        "url": "https://github.com/Wingysam/Christmas-Community",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Docker/Nodejs",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Claper",
        "description": "The ultimate tool to interact with your audience (alternative to Slido, AhaSlides and Mentimeter)",
        "url": "https://claper.co/",
        "sourceUrl": "https://github.com/ClaperCo/Claper",
        "license": "GPL-3.0",
        "language": "Elixir/Docker",
        "tags": [
          "elixir"
        ]
      },
      {
        "name": "ClearFlask",
        "description": "Community-feedback tool for managing incoming feedback and prioritizing a public roadmap (alternative to Canny, UserVoice, Upvoty). ([Demo](https://product.clearflask.com), [Source Code](https://github.com/clearflask/clearflask))",
        "url": "https://clearflask.com",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "docassemble",
        "description": "A free, open-source expert system for guided interviews and document assembly, based on Python, YAML, and Markdown. ([Demo](https://demo.docassemble.org/run/legal), [Source Code](https://github.com/jhpyle/docassemble))",
        "url": "https://docassemble.org/",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker/Python",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Fider",
        "description": "Open platform to collect and prioritize feedback (alternative to UserVoice). ([Demo](https://demo.fider.io), [Source Code](https://github.com/getfider/fider))",
        "url": "https://fider.io",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Formbricks",
        "description": "Experience Management Suite built on the largest open source survey stack worldwide. Gracefully gather feedback at every step of the customer journey to know what your customers need. ([Demo](https://app.formbricks.com), [Source Code](https://github.com/formbricks/formbricks))",
        "url": "https://formbricks.com",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Nodejs/Docker",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Framadate",
        "description": "Online service for planning an appointment or make a decision quickly and easily: Make a poll, Define dates or subjects to choose, Send the poll link to your friends or colleagues, Discuss and make a decision. ([Demo](https://framadate.org/aqg259dth55iuhwm), [Source Code](https://framagit.org/framasoft/framadate?))",
        "url": "https://framadate.org/abc/",
        "sourceUrl": "",
        "license": "CECILL-B",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Gancio",
        "description": "Local community event and agenda sharing. ([Demo](https://demo.gancio.org/), [Source Code](https://framagit.org/les/gancio))",
        "url": "https://gancio.org/",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Nodejs",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "gathio",
        "description": "Self-destructing, shareable, no-registration event pages. ([Demo](https://gath.io/), [Source Code](https://github.com/lowercasename/gathio))",
        "url": "https://docs.gath.io/",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Nodejs/Docker",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "HeyForm",
        "description": "Form builder that allows anyone to create engaging conversational forms for surveys, questionnaires, quizzes, and polls",
        "url": "https://heyform.net",
        "sourceUrl": "https://github.com/heyform/heyform",
        "license": "AGPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "hitobito",
        "description": "Manage complex group hierarchies with members, events and a lot more. ([Demo](https://demo.hitobito.com/en/users/sign_in), [Source Code](https://github.com/hitobito/hitobito))",
        "url": "https://hitobito.com",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Ruby",
        "tags": [
          "ruby"
        ]
      },
      {
        "name": "LimeSurvey",
        "description": "Feature-rich web-based polling software. Supports extensive survey logic. ([Demo](https://demo.limesurvey.org), [Source Code](https://github.com/LimeSurvey/LimeSurvey))",
        "url": "https://www.limesurvey.org",
        "sourceUrl": "",
        "license": "GPL-2.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Meetable",
        "description": "Minimal events aggregator",
        "url": "https://events.indieweb.org",
        "sourceUrl": "https://github.com/aaronpk/Meetable",
        "license": "MIT",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Mobilizon",
        "description": "Federated tool that helps you find, create and organise events and groups",
        "url": "https://mobilizon.org",
        "sourceUrl": "https://framagit.org/framasoft/mobilizon/",
        "license": "AGPL-3.0",
        "language": "Elixir/Docker",
        "tags": [
          "elixir"
        ]
      },
      {
        "name": "OpnForm",
        "description": "Beautiful open-source form builder. ([Demo](https://opnform.com/forms/create/guest), [Source Code](https://github.com/OpnForm/OpnForm))",
        "url": "https://opnform.com",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "PHP/Nodejs/Docker",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Revel",
        "description": "Community-focused event management and ticketing platform. ([Demo](https://demo.letsrevel.io), [Source Code](https://github.com/letsrevel/revel-backend), [Clients](https://github.com/letsrevel))",
        "url": "https://www.letsrevel.io",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Python/Docker",
        "tags": [
          "python"
        ]
      }
    ]
  },
  {
    "id": "proxy",
    "name": "Proxy",
    "items": [
      {
        "name": "g3proxy",
        "description": "Forward proxy server supporting proxy chaining, protocol inspection, MITM Interception, ICAP adaptation and transparent proxy",
        "url": "https://g3-project.readthedocs.io/projects/g3proxy/en/latest/",
        "sourceUrl": "https://github.com/bytedance/g3/tree/master/g3proxy",
        "license": "Apache-2.0",
        "language": "Rust/deb",
        "tags": [
          "rust"
        ]
      },
      {
        "name": "imgproxy",
        "description": "Fast and secure standalone server for resizing and converting remote images",
        "url": "https://imgproxy.net/",
        "sourceUrl": "https://github.com/imgproxy/imgproxy",
        "license": "MIT",
        "language": "Go/Docker/K8S",
        "tags": [
          "go"
        ]
      },
      {
        "name": "iodine",
        "description": "IPv4 over DNS tunnel solution, enabling you to start up a socks5 proxy listener",
        "url": "https://code.kryo.se/iodine/",
        "sourceUrl": "https://github.com/yarrick/iodine",
        "license": "ISC",
        "language": "C/deb",
        "tags": [
          "c"
        ]
      },
      {
        "name": "Outline Server",
        "description": "A proxy server that runs a Shadowsocks instance for each access key and a REST API to manage the access keys",
        "url": "https://getoutline.org/",
        "sourceUrl": "https://github.com/OutlineFoundation/outline-server",
        "license": "Apache-2.0",
        "language": "Docker/Nodejs",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Privoxy",
        "description": "Non-caching web proxy with advanced filtering capabilities for enhancing privacy, modifying web page data and HTTP headers, controlling access, and removing ads and other obnoxious Internet junk",
        "url": "https://www.privoxy.org",
        "sourceUrl": "",
        "license": "GPL-2.0",
        "language": "C/deb",
        "tags": [
          "c"
        ]
      },
      {
        "name": "sish",
        "description": "HTTP(S)/WS(S)/TCP tunnels to localhost using only SSH (serveo/ngrok alternative)",
        "url": "https://github.com/antoniomika/sish",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Go/Docker",
        "tags": [
          "go"
        ]
      },
      {
        "name": "socks5-proxy-server",
        "description": "SOCKS5 proxy server with built-in authentication and Telegram-bot for user management and user statistics on data spent (handy when you pay per GB of data). It is dockerised and simple to install",
        "url": "https://github.com/nskondratev/socks5-proxy-server",
        "sourceUrl": "",
        "license": "Apache-2.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Squid",
        "description": "Caching proxy for the Web supporting HTTP, HTTPS, FTP, and more. It reduces bandwidth and improves response times by caching and reusing frequently-requested web pages",
        "url": "http://www.squid-cache.org/",
        "sourceUrl": "https://code.launchpad.net/squid",
        "license": "GPL-2.0",
        "language": "C/deb",
        "tags": [
          "c"
        ]
      },
      {
        "name": "Tinyproxy",
        "description": "Light-weight HTTP/HTTPS proxy daemon",
        "url": "https://tinyproxy.github.io/",
        "sourceUrl": "https://github.com/tinyproxy/tinyproxy",
        "license": "GPL-2.0",
        "language": "C/deb",
        "tags": [
          "c"
        ]
      },
      {
        "name": "txtdot",
        "description": "A HTTP proxy that parses only text, links and pictures from pages reducing internet bandwidth usage, removing ads and heavy scripts. ([Demo](https://txt.dc09.ru), [Source Code](https://github.com/TempoWorks/txtdot))",
        "url": "https://tempoworks.github.io/documentation",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Nodejs/Docker",
        "tags": [
          "nodejs"
        ]
      }
    ]
  },
  {
    "id": "recipe-management",
    "name": "Recipe Management",
    "items": [
      {
        "name": "Bar Assistant",
        "description": "Manage your home bar while adding your ingredients, searching for cocktails and creating custom cocktail recipes. ([Demo](https://demo.barassistant.app/), [Source Code](https://github.com/karlomikus/bar-assistant))",
        "url": "https://barassistant.app/",
        "sourceUrl": "",
        "license": "MIT",
        "language": "PHP/Docker",
        "tags": [
          "php"
        ]
      },
      {
        "name": "CookCLI",
        "description": "Command-line tool for automating meal planning and shopping with Cooklang recipes, scriptable for UNIX workflows, includes web server",
        "url": "https://cooklang.org",
        "sourceUrl": "https://github.com/cooklang/CookCLI",
        "license": "MIT",
        "language": "Rust",
        "tags": [
          "rust"
        ]
      },
      {
        "name": "Fork Recipes",
        "description": "Manage your food recipes with simplicity",
        "url": "https://mikebgrep.github.io/forkapi/latest/clients/",
        "sourceUrl": "https://github.com/mikebgrep/fork.recipes",
        "license": "BSD-3-Clause",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "KitchenOwl",
        "description": "Cross-platform shopping list, recipe storage, expense tracker, and meal planner following the material design language",
        "url": "https://docs.kitchenowl.org/latest/",
        "sourceUrl": "https://github.com/TomBursch/kitchenowl",
        "license": "AGPL-3.0",
        "language": "Docker/deb",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "ManageMeals",
        "description": "Manage recipes, import recipes by URL and organize them without any ads or unnecessary text. ([Demo](https://demo.managemeals.com/), [Source Code](https://github.com/managemeals/manage-meals-web))",
        "url": "https://managemeals.com/",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Mealie",
        "description": "Material design inspired recipe manager with category and tag management, shopping-lists, meal-planner, and site customizations. Mealie is focused on simple user interactions to keep the whole family using the app. ([Demo](https://demo.mealie.io), [Source Code](https://github.com/mealie-recipes/mealie))",
        "url": "https://nightly.mealie.io/",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Python",
        "tags": [
          "python"
        ]
      },
      {
        "name": "RecipeSage",
        "description": "A recipe keeper, meal plan organizer, and shopping list manager that can import recipes directly from any URL. ([Demo](https://recipesage.com))",
        "url": "https://github.com/julianpoy/recipesage",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Nodejs",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Recipya",
        "description": "Clean, simple and powerful recipe manager your whole family will enjoy. ([Demo](https://recipes.musicavis.ca/guide/login), [Source Code](https://github.com/reaper47/recipya))",
        "url": "https://recipes.musicavis.ca",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Docker/Go",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Specifically Clementines",
        "description": "Grocery shopping app (previously Groceries), providing reliable sync with multiple users/devices (web/Android/iOS), recipes and integration with Tandoor",
        "url": "https://davideshay.github.io/groceries/",
        "sourceUrl": "https://github.com/davideshay/groceries",
        "license": "MIT",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Tamari",
        "description": "Recipe manager web app with a built-in collection of recipes. Organize by favorites and categories, create shopping lists, and plan meals. ([Demo](https://app.tamariapp.com), [Source Code](https://github.com/alexbates/Tamari))",
        "url": "https://tamariapp.com",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Docker/Python",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Vanilla Cookbook",
        "description": "Recipe manager designed with complexity under the hood, keeping the user experience as uncluttered, simply vanilla as possible",
        "url": "https://vanilla-cookbook.readthedocs.io/en/",
        "sourceUrl": "https://github.com/jt196/vanilla-cookbook",
        "license": "GPL-3.0",
        "language": "Docker/Nodejs",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "What To Cook?",
        "description": "Get a recipe to cook today, based on the ingredients you have at home",
        "url": "https://github.com/kassner/whattocook",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      }
    ]
  },
  {
    "id": "remote-access",
    "name": "Remote Access",
    "items": [
      {
        "name": "Engity's Bifröst",
        "description": "Highly customizable SSH server with several ways to authorize a user and options where and how to execute a user's session",
        "url": "https://bifroest.engity.org/",
        "sourceUrl": "https://github.com/engity-com/bifroest",
        "license": "Apache-2.0",
        "language": "Go/Docker",
        "tags": [
          "go"
        ]
      },
      {
        "name": "Firezone",
        "description": "Secure remote access gateway that supports the WireGuard protocol. It offers a Web GUI, 1-line install script, multi-factor auth (MFA), and SSO",
        "url": "https://www.firezone.dev/",
        "sourceUrl": "https://github.com/firezone/firezone",
        "license": "Apache-2.0",
        "language": "Elixir/Docker",
        "tags": [
          "elixir"
        ]
      },
      {
        "name": "Guacamole",
        "description": "Clientless remote desktop gateway supporting standard protocols like VNC and RDP",
        "url": "https://guacamole.apache.org",
        "sourceUrl": "https://github.com/apache/guacamole-server",
        "license": "Apache-2.0",
        "language": "Java/C",
        "tags": [
          "java"
        ]
      },
      {
        "name": "MeshCentral",
        "description": "Run your own web server to remotely manage and control computers on a local network or anywhere on the internet",
        "url": "https://meshcentral.com/",
        "sourceUrl": "https://github.com/Ylianst/MeshCentral",
        "license": "Apache-2.0",
        "language": "Nodejs",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "ShellHub",
        "description": "Modern SSH server for remotely accessing linux devices via command line (using any SSH client) or web-based user interface (alternative to sshd)",
        "url": "https://www.shellhub.io",
        "sourceUrl": "https://github.com/shellhub-io/shellhub",
        "license": "Apache-2.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Sshwifty",
        "description": "Sshwifty is a SSH and Telnet connector made for the Web. ([Demo](https://sshwifty-demo.nirui.org))",
        "url": "https://github.com/nirui/sshwifty",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Go/Docker",
        "tags": [
          "go"
        ]
      },
      {
        "name": "Termix",
        "description": "Clientless web-based server management platform with SSH terminal, tunneling, and file editing capabilities",
        "url": "https://docs.termix.site/",
        "sourceUrl": "https://github.com/Termix-SSH/Termix",
        "license": "Apache-2.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Warpgate",
        "description": "Smart SSH and HTTPS bastion that works with any SSH client",
        "url": "https://github.com/warp-tech/warpgate",
        "sourceUrl": "",
        "license": "Apache-2.0",
        "language": "Rust/Docker",
        "tags": [
          "rust"
        ]
      }
    ]
  },
  {
    "id": "resource-planning",
    "name": "Resource Planning",
    "items": [
      {
        "name": "Dolibarr",
        "description": "Modern CRM software package to manage your company or foundation activity (contacts, suppliers, invoices, orders, stocks, agenda, accounting, ...). ([Demo](https://www.dolibarr.org/onlinedemo.php), [Source Code](https://github.com/Dolibarr/dolibarr))",
        "url": "https://www.dolibarr.org/",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "PHP/deb",
        "tags": [
          "php"
        ]
      },
      {
        "name": "ERPNext",
        "description": "ERP system to help you run your business",
        "url": "https://frappe.io/erpnext",
        "sourceUrl": "https://github.com/frappe/erpnext",
        "license": "GPL-3.0",
        "language": "Python/Docker",
        "tags": [
          "python"
        ]
      },
      {
        "name": "farmOS",
        "description": "Web-based farm record keeping application. ([Demo](https://farmos-demo.rootedsolutions.io/), [Source Code](https://github.com/farmOS/farmOS))",
        "url": "https://farmos.org/",
        "sourceUrl": "",
        "license": "GPL-2.0",
        "language": "PHP/Docker",
        "tags": [
          "php"
        ]
      },
      {
        "name": "grocy",
        "description": "ERP beyond your fridge. Groceries & household management solution for your home. ([Demo](https://en.demo.grocy.info/), [Source Code](https://github.com/grocy/grocy))",
        "url": "https://grocy.info/",
        "sourceUrl": "",
        "license": "MIT",
        "language": "PHP/Docker",
        "tags": [
          "php"
        ]
      },
      {
        "name": "LedgerSMB",
        "description": "Integrated accounting and ERP system for small and midsize businesses, with double entry accounting, budgeting, invoicing, quotations, projects, orders and inventory management, shipping and more",
        "url": "https://ledgersmb.org/",
        "sourceUrl": "https://github.com/ledgersmb/LedgerSMB",
        "license": "GPL-2.0",
        "language": "Docker/Perl",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Odoo",
        "description": "Free open source ERP system. ([Demo](https://demo.odoo.com/), [Source Code](https://github.com/odoo/odoo))",
        "url": "https://www.odoo.com",
        "sourceUrl": "",
        "license": "LGPL-3.0",
        "language": "Python/deb/Docker",
        "tags": [
          "python"
        ]
      },
      {
        "name": "OFBiz",
        "description": "Enterprise Resource Planning system with a suite of business applications flexible enough to be used across any industry",
        "url": "https://ofbiz.apache.org/",
        "sourceUrl": "https://github.com/apache/ofbiz-framework",
        "license": "Apache-2.0",
        "language": "Java",
        "tags": [
          "java"
        ]
      },
      {
        "name": "Tryton",
        "description": "Free open source business solution. ([Demo](https://www.tryton.org/demo), [Source Code](https://foss.heptapod.net/tryton/tryton))",
        "url": "https://www.tryton.org/",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Python",
        "tags": [
          "python"
        ]
      }
    ]
  },
  {
    "id": "search-engines",
    "name": "Search Engines",
    "items": [
      {
        "name": "Aleph",
        "description": "Tool for indexing large amounts of both documents (PDF, Word, HTML) and structured (CSV, XLS, SQL) data for easy browsing and search. It is built with investigative reporting as a primary use case. ([Demo](https://aleph.occrp.org/), [Source Code](https://github.com/alephdata/aleph))",
        "url": "https://aleph.occrp.org/",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker/K8S",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Apache Solr",
        "description": "Enterprise search platform featuring full-text search, hit highlighting, faceted search, real-time indexing, dynamic clustering, and rich document (e.g., Word, PDF) handling",
        "url": "https://lucene.apache.org/solr/",
        "sourceUrl": "https://github.com/apache/solr",
        "license": "Apache-2.0",
        "language": "Java/Docker/K8S",
        "tags": [
          "java"
        ]
      },
      {
        "name": "Fess",
        "description": "Powerful and easily deployable Enterprise Search Server. ([Demo](https://search.n2sm.co.jp/), [Source Code](https://github.com/codelibs/fess))",
        "url": "https://fess.codelibs.org/",
        "sourceUrl": "",
        "license": "Apache-2.0",
        "language": "Java/Docker",
        "tags": [
          "java"
        ]
      },
      {
        "name": "Manticore Search",
        "description": "Full-text search and data analytics, with fast response time for small, medium and big data (alternative to Elasticsearch)",
        "url": "https://github.com/manticoresoftware/manticoresearch/",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Docker/deb/C++/K8S",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "MeiliSearch",
        "description": "Ultra relevant, instant and typo-tolerant full-text search API",
        "url": "https://www.meilisearch.com",
        "sourceUrl": "https://github.com/meilisearch/MeiliSearch",
        "license": "MIT",
        "language": "Rust/Docker/deb",
        "tags": [
          "rust"
        ]
      },
      {
        "name": "Meme Search",
        "description": "AI-powered meme search engine. Automatically extracts descriptions from images using vision-language models, then indexes with vector embeddings for semantic and keyword search",
        "url": "https://github.com/neonwatty/meme-search",
        "sourceUrl": "",
        "license": "Apache-2.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "OpenSearch",
        "description": "Distributed and RESTful search engine",
        "url": "https://opensearch.org",
        "sourceUrl": "https://github.com/opensearch-project/OpenSearch",
        "license": "Apache-2.0",
        "language": "Java/Docker/K8S/deb",
        "tags": [
          "java"
        ]
      },
      {
        "name": "SearXNG",
        "description": "Internet metasearch engine which aggregates results from various search services and databases (Fork of Searx)",
        "url": "https://docs.searxng.org/",
        "sourceUrl": "https://github.com/searxng/searxng/",
        "license": "AGPL-3.0",
        "language": "Python/Docker",
        "tags": [
          "python"
        ]
      },
      {
        "name": "sist2",
        "description": "Lightning-fast file system indexer and search tool",
        "url": "https://github.com/sist2app/sist2",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "C/Docker",
        "tags": [
          "c"
        ]
      },
      {
        "name": "Sosse",
        "description": "Selenium based search engine and crawler with offline archiving",
        "url": "https://sosse.readthedocs.io/en/stable/",
        "sourceUrl": "https://gitlab.com/biolds1/sosse",
        "license": "AGPL-3.0",
        "language": "Python/Docker",
        "tags": [
          "python"
        ]
      },
      {
        "name": "Typesense",
        "description": "Blazing fast, typo-tolerant open source search engine optimized for developer happiness and ease of use",
        "url": "https://typesense.org",
        "sourceUrl": "https://github.com/typesense/typesense",
        "license": "GPL-3.0",
        "language": "C++/Docker/K8S/deb",
        "tags": [
          "c++"
        ]
      },
      {
        "name": "Websurfx",
        "description": "Aggregate results from other search engines (metasearch engine) without ads while keeping privacy and security in mind. It is extremely fast and provides a high level of customization (alternative to SearX)",
        "url": "https://github.com/neon-mmd/websurfx",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Rust/Docker",
        "tags": [
          "rust"
        ]
      },
      {
        "name": "Whoogle",
        "description": "A self-hosted, ad-free, privacy-respecting metasearch engine",
        "url": "https://github.com/benbusby/whoogle-search",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Python",
        "tags": [
          "python"
        ]
      },
      {
        "name": "Yacy",
        "description": "Peer based, decentralized search engine server",
        "url": "https://yacy.net/en/index.html",
        "sourceUrl": "https://github.com/yacy/yacy_search_server",
        "license": "GPL-2.0",
        "language": "Java/Docker/K8S",
        "tags": [
          "java"
        ]
      },
      {
        "name": "ZincSearch",
        "description": "Search engine that requires minimal resources (alternative to Elasticsearch). ([Demo](https://github.com/zinclabs/zinc#playground-server), [Source Code](https://github.com/zincsearch/zincsearch))",
        "url": "https://zincsearch.com",
        "sourceUrl": "",
        "license": "Apache-2.0",
        "language": "Go/Docker/K8S",
        "tags": [
          "go"
        ]
      }
    ]
  },
  {
    "id": "self-hosting-solutions",
    "name": "Self-hosting Solutions",
    "items": [
      {
        "name": "Ansible-NAS",
        "description": "Build a full-featured home server with this playbook and an Ubuntu box",
        "url": "https://github.com/DaveStephens/ansible-nas",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Ansible/Docker",
        "tags": [
          "ansible"
        ]
      },
      {
        "name": "CasaOS",
        "description": "Simple, easy-to-use, elegant Home Cloud system",
        "url": "https://casaos.zimaspace.com/",
        "sourceUrl": "https://github.com/IceWhaleTech/CasaOS",
        "license": "Apache-2.0",
        "language": "Go/Docker",
        "tags": [
          "go"
        ]
      },
      {
        "name": "DietPi",
        "description": "Minimal Debian OS optimized for single-board computers, which allows you to easily install and manage several services for selfhosting at home",
        "url": "https://dietpi.com/",
        "sourceUrl": "https://github.com/MichaIng/DietPi",
        "license": "GPL-2.0",
        "language": "Shell",
        "tags": [
          "shell"
        ]
      },
      {
        "name": "DockSTARTer",
        "description": "DockSTARTer helps you get started with home server apps running in Docker",
        "url": "https://dockstarter.com/",
        "sourceUrl": "https://github.com/GhostWriters/DockSTARTer",
        "license": "MIT",
        "language": "Shell",
        "tags": [
          "shell"
        ]
      },
      {
        "name": "Dropserver",
        "description": "An application platform for your personal web services",
        "url": "https://dropserver.org",
        "sourceUrl": "https://github.com/teleclimber/Dropserver/",
        "license": "Apache-2.0",
        "language": "Go/Deno",
        "tags": [
          "go"
        ]
      },
      {
        "name": "FreedomBox",
        "description": "Community project to develop, design and promote personal servers running free software for private, personal, communications",
        "url": "https://freedombox.org/",
        "sourceUrl": "https://salsa.debian.org/freedombox-team/freedombox",
        "license": "AGPL-3.0",
        "language": "Python/deb",
        "tags": [
          "python"
        ]
      },
      {
        "name": "HomelabOS",
        "description": "Offline privacy-centric data-center. Deploy over 100 services with a few commands",
        "url": "https://homelabos.com",
        "sourceUrl": "https://gitlab.com/NickBusey/HomelabOS",
        "license": "MIT",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "HomeServerHQ",
        "description": "All-in-one home server infrastructure and installer. Have a fully configured email server, VPN, and public website(s) set up in less than an hour, even behind CGNAT",
        "url": "https://www.homeserverhq.com/",
        "sourceUrl": "https://github.com/homeserverhq/hshq",
        "license": "GPL-3.0",
        "language": "Shell",
        "tags": [
          "shell"
        ]
      },
      {
        "name": "LibreServer",
        "description": "Home server configuration based on Debian",
        "url": "https://libreserver.org/",
        "sourceUrl": "https://github.com/bashrc2/libreserver",
        "license": "AGPL-3.0",
        "language": "Shell",
        "tags": [
          "shell"
        ]
      },
      {
        "name": "NextCloudPi",
        "description": "Nextcloud preinstalled and preconfigured, with a text and web management interface and all the tools needed to self host private data. With installation images for Raspberry Pi, Odroid, Rock64, Docker, and a curl installer for Armbian/Debian",
        "url": "https://github.com/nextcloud/nextcloudpi",
        "sourceUrl": "",
        "license": "GPL-2.0",
        "language": "Shell/PHP",
        "tags": [
          "shell"
        ]
      },
      {
        "name": "Nirvati",
        "description": "Easily 1-click spin up popular self-hosted apps from a convenient web interface",
        "url": "https://nirvati.org",
        "sourceUrl": "https://gitlab.com/nirvati-ug/nirvati/backend",
        "license": "AGPL-3.0",
        "language": "Rust/K8S",
        "tags": [
          "rust"
        ]
      },
      {
        "name": "OpenMediaVault",
        "description": "Network attached storage (NAS) solution based on Debian Linux. It contains services like SSH, (S)FTP, SMB/CIFS, DAAP media server, RSync, BitTorrent client and many more",
        "url": "https://www.openmediavault.org/",
        "sourceUrl": "https://github.com/openmediavault/openmediavault",
        "license": "GPL-3.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Sandstorm",
        "description": "Personal server for running self-hosted apps easily and securely. ([Demo](https://demo.sandstorm.io/), [Source Code](https://github.com/sandstorm-io/sandstorm))",
        "url": "https://sandstorm.io/",
        "sourceUrl": "",
        "license": "Apache-2.0",
        "language": "C++/Shell",
        "tags": [
          "c++"
        ]
      },
      {
        "name": "Self Host Blocks",
        "description": "Modular server management based on NixOS modules and focused on best practices",
        "url": "https://github.com/ibizaman/selfhostblocks",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Nix",
        "tags": [
          "nix"
        ]
      },
      {
        "name": "StartOS",
        "description": "Browser-based, graphical Operating System (OS) that makes running a personal server as easy as running a personal computer",
        "url": "https://start9.com",
        "sourceUrl": "https://github.com/Start9Labs/start-os",
        "license": "MIT",
        "language": "Rust",
        "tags": [
          "rust"
        ]
      },
      {
        "name": "Syncloud",
        "description": "Your own online file storage, social network or email server",
        "url": "https://syncloud.org/",
        "sourceUrl": "https://github.com/syncloud/platform",
        "license": "GPL-3.0",
        "language": "Go/Shell",
        "tags": [
          "go"
        ]
      },
      {
        "name": "Tipi",
        "description": "Homeserver manager. One command setup, one click installs for your favorites self-hosted apps",
        "url": "https://runtipi.io/",
        "sourceUrl": "https://github.com/runtipi/runtipi",
        "license": "GPL-3.0",
        "language": "Shell",
        "tags": [
          "shell"
        ]
      },
      {
        "name": "UBOS",
        "description": "Linux distro that runs on indie boxes (personal servers and IoT devices). Single-command installation and management of apps - Jenkins, Mediawiki, Owncloud, WordPress, etc., and other features",
        "url": "https://ubos.net/",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Perl",
        "tags": [
          "perl"
        ]
      },
      {
        "name": "Websoft9",
        "description": "GitOps-driven, multi-application hosting for cloud servers and home servers, one-click deployment of 200+ open source apps. ([Demo](https://www.websoft9.com/demo), [Source Code](https://github.com/websoft9/websoft9), [Clients](https://www.websoft9.com/apps))",
        "url": "https://www.websoft9.com",
        "sourceUrl": "",
        "license": "LGPL-3.0",
        "language": "Shell/Python",
        "tags": [
          "shell"
        ]
      },
      {
        "name": "WikiSuite",
        "description": "The most comprehensive and integrated Free / Libre / Open Source enterprise software suite",
        "url": "https://wikisuite.org",
        "sourceUrl": "https://wikisuite.org/Source-Code",
        "license": "GPL-3.0/LGPL-2.1/Apache-2.0/MPL-2.0/MPL-1.1/MIT/AGPL-3.0",
        "language": "Shell/Perl/deb",
        "tags": [
          "shell"
        ]
      },
      {
        "name": "xsrv",
        "description": "Install and manage self-hosted services/applications, on your own server(s)",
        "url": "https://xsrv.readthedocs.io/",
        "sourceUrl": "https://github.com/nodiscc/xsrv",
        "license": "GPL-3.0",
        "language": "Ansible/Shell",
        "tags": [
          "ansible"
        ]
      },
      {
        "name": "YunoHost",
        "description": "Server operating system aiming to make self-hosting accessible to everyone. ([Demo](https://yunohost.org/#/try), [Source Code](https://github.com/YunoHost))",
        "url": "https://yunohost.org/",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Python/Shell",
        "tags": [
          "python"
        ]
      }
    ]
  },
  {
    "id": "software-development-api-management",
    "name": "Software Development - API Management",
    "items": [
      {
        "name": "DreamFactory",
        "description": "Turns any SQL/NoSQL/Structured data into Restful API",
        "url": "https://www.dreamfactory.com/",
        "sourceUrl": "https://github.com/dreamfactorysoftware/dreamfactory",
        "license": "Apache-2.0",
        "language": "PHP/Docker/K8S",
        "tags": [
          "php"
        ]
      },
      {
        "name": "form.io",
        "description": "A REST API building platform that utilizes a drag & drop form builder, and is application framework agnostic. Contains open source and enterprise version. ([Demo](https://portal.form.io), [Source Code](https://github.com/formio))",
        "url": "https://form.io",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Nodejs/Docker",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Fusio",
        "description": "Open-source API management platform which helps to build and manage REST APIs. ([Demo](https://fusio-project.org/demo), [Source Code](https://github.com/apioo/fusio))",
        "url": "https://www.fusio-project.org/",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "PHP/Docker",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Graphweaver",
        "description": "Turn multiple data sources into a single GraphQL API",
        "url": "https://graphweaver.com/",
        "sourceUrl": "https://github.com/exogee-technology/graphweaver",
        "license": "MIT",
        "language": "Nodejs",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Hasura",
        "description": "Fast, instant realtime GraphQL APIs on Postgres with fine grained access control, also trigger webhooks on database events",
        "url": "https://hasura.io",
        "sourceUrl": "https://github.com/hasura/graphql-engine",
        "license": "Apache-2.0",
        "language": "Haskell/Docker/K8S",
        "tags": [
          "haskell"
        ]
      },
      {
        "name": "Hoppscotch Community Edition",
        "description": "Fast and beautiful API request builder",
        "url": "https://hoppscotch.io",
        "sourceUrl": "https://github.com/hoppscotch/hoppscotch",
        "license": "MIT",
        "language": "Nodejs/Docker",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Kong",
        "description": "Microservice API Gateway and Platform",
        "url": "https://konghq.com/kong/",
        "sourceUrl": "https://github.com/Kong/kong",
        "license": "Apache-2.0",
        "language": "Lua/Docker/K8S/deb",
        "tags": [
          "lua"
        ]
      },
      {
        "name": "Lura",
        "description": "High-performance API Gateway",
        "url": "https://luraproject.org/",
        "sourceUrl": "https://github.com/luraproject/lura",
        "license": "Apache-2.0",
        "language": "Go",
        "tags": [
          "go"
        ]
      },
      {
        "name": "Opik",
        "description": "Evaluate, test, and ship LLM applications with a suite of observability tools to calibrate language model outputs across your dev and production lifecycle",
        "url": "https://www.comet.com/site/products/opik/",
        "sourceUrl": "https://github.com/comet-ml/opik",
        "license": "Apache-2.0",
        "language": "Docker/Python",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Para",
        "description": "Flexible and modular backend framework/server for object persistence, API development and authentication",
        "url": "https://paraio.org",
        "sourceUrl": "https://github.com/erudika/para",
        "license": "Apache-2.0",
        "language": "Java/Docker",
        "tags": [
          "java"
        ]
      },
      {
        "name": "Svix",
        "description": "Open-source webhooks as a service that makes it super easy for API providers to send webhooks",
        "url": "https://svix.com",
        "sourceUrl": "https://github.com/svix/svix-webhooks",
        "license": "MIT",
        "language": "Docker/Rust",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Tyk",
        "description": "Fast and scalable open source API Gateway. Out of the box, Tyk offers an API Management Platform with an API Gateway, API Analytics, Developer Portal and API Management Dashboard",
        "url": "https://tyk.io",
        "sourceUrl": "https://github.com/TykTechnologies/tyk",
        "license": "MPL-2.0",
        "language": "Go/Docker/K8S",
        "tags": [
          "go"
        ]
      }
    ]
  },
  {
    "id": "software-development-feature-toggle",
    "name": "Software Development - Feature Toggle",
    "items": [
      {
        "name": "Featbit",
        "description": "Enterprise-grade feature flag platform that you can self-host",
        "url": "https://www.featbit.co/",
        "sourceUrl": "https://github.com/featbit/featbit",
        "license": "MIT",
        "language": "Docker/K8S",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Flagsmith",
        "description": "Dashboard, API and SDKs for adding Feature Flags to your applications (alternative to LaunchDarkly)",
        "url": "https://flagsmith.com",
        "sourceUrl": "https://github.com/flagsmith/flagsmith",
        "license": "BSD-3-Clause",
        "language": "Docker/K8S",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Flipt",
        "description": "Feature flag solution with support for multiple data backends (alternative to LaunchDarkly)",
        "url": "https://flipt.io",
        "sourceUrl": "https://github.com/flipt-io/flipt",
        "license": "GPL-3.0",
        "language": "Docker/K8S/Go",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "GO Feature Flag",
        "description": "Simple, complete, and lightweight feature flag solution (alternative to LaunchDarkly)",
        "url": "https://gofeatureflag.org",
        "sourceUrl": "https://github.com/thomaspoignant/go-feature-flag",
        "license": "MIT",
        "language": "Go",
        "tags": [
          "go"
        ]
      }
    ]
  },
  {
    "id": "software-development-ide-tools",
    "name": "Software Development - IDE & Tools",
    "items": [
      {
        "name": "Atheos",
        "description": "Web-based IDE framework with a small footprint and minimal requirements, continued from Codiad",
        "url": "https://www.atheos.io",
        "sourceUrl": "https://github.com/Atheos/Atheos",
        "license": "MIT",
        "language": "PHP/Docker",
        "tags": [
          "php"
        ]
      },
      {
        "name": "code-server",
        "description": "VS Code in the browser, hosted on a remote server",
        "url": "https://github.com/coder/code-server",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Nodejs/Docker",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Coder",
        "description": "Remote development machines on your own infrastructure",
        "url": "https://coder.com/",
        "sourceUrl": "https://github.com/coder/coder",
        "license": "AGPL-3.0",
        "language": "Go/Docker/K8S/deb",
        "tags": [
          "go"
        ]
      },
      {
        "name": "Eclipse Che",
        "description": "Open source workspace server and cloud IDE",
        "url": "https://www.eclipse.org/che/",
        "sourceUrl": "https://github.com/eclipse-che/che",
        "license": "EPL-1.0",
        "language": "Docker/Java",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Judge0 CE",
        "description": "API to compile and run source code",
        "url": "https://judge0.com",
        "sourceUrl": "https://github.com/judge0/judge0",
        "license": "GPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "JupyterLab",
        "description": "Web-based environment for interactive and reproducible computing. ([Demo](https://mybinder.org/v2/gh/jupyterlab/jupyterlab-demo/try.jupyter.org?urlpath=lab), [Source Code](https://github.com/jupyterlab/jupyterlab/))",
        "url": "https://jupyterlab.readthedocs.io/en/stable/",
        "sourceUrl": "",
        "license": "BSD-3-Clause",
        "language": "Python/Docker",
        "tags": [
          "python"
        ]
      },
      {
        "name": "Langfuse",
        "description": "LLM engineering platform for model tracing, prompt management, and application evaluation. Langfuse helps teams collaboratively debug, analyze, and iterate on their LLM applications such as chatbots or AI agents. ([Demo](https://langfuse.com/docs/demo), [Source Code](https://github.com/langfuse/langfuse), [Clients](https://langfuse.com/docs/integrations/overview))",
        "url": "https://langfuse.com",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "LiveCodes",
        "description": "Feature-rich client-side code playground for React, Vue, Svelte, Solid, Typescript, Python, Go, Ruby, PHP and 90+ other languages. ([Demo](https://livecodes.io), [Source Code](https://github.com/live-codes/livecodes))",
        "url": "https://livecodes.io/docs/features/self-hosting",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Nodejs",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Lowdefy",
        "description": "Build internal tools, BI dashboards, admin panels, CRUD apps and workflows in minutes using YAML / JSON on an self-hosted, open-source platform. Connect to your data sources, host via Serverless, Netlify or Docker",
        "url": "https://www.lowdefy.com/",
        "sourceUrl": "https://github.com/lowdefy/lowdefy",
        "license": "Apache-2.0",
        "language": "Nodejs/Docker",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "RapidForge",
        "description": "Lightweight platform for building webhooks, scheduled tasks and pages. Implement your logic with Bash or Lua",
        "url": "https://rapidforge.io/",
        "sourceUrl": "https://github.com/rapidforge-io/rapidforge",
        "license": "Apache-2.0",
        "language": "Go/Nodejs",
        "tags": [
          "go"
        ]
      },
      {
        "name": "RStudio Server",
        "description": "Web browser based IDE for R",
        "url": "https://www.rstudio.com/products/rstudio/#Server",
        "sourceUrl": "https://github.com/rstudio/rstudio",
        "license": "AGPL-3.0",
        "language": "Java/C++",
        "tags": [
          "java"
        ]
      }
    ]
  },
  {
    "id": "software-development-localization",
    "name": "Software Development - Localization",
    "items": [
      {
        "name": "Accent",
        "description": "Developer-oriented translation tool",
        "url": "https://www.accent.reviews/",
        "sourceUrl": "https://github.com/mirego/accent",
        "license": "BSD-3-Clause",
        "language": "Elixir/Docker",
        "tags": [
          "elixir"
        ]
      },
      {
        "name": "Tolgee",
        "description": "Developer & translator friendly web-based localization platform enabling users to translate directly in the app they develop",
        "url": "https://tolgee.io",
        "sourceUrl": "https://github.com/tolgee/tolgee-platform",
        "license": "Apache-2.0",
        "language": "Docker/Java",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Traduora",
        "description": "Translation management platform for teams",
        "url": "https://traduora.co",
        "sourceUrl": "https://github.com/ever-co/ever-traduora",
        "license": "AGPL-3.0",
        "language": "Docker/K8S/Nodejs",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Weblate",
        "description": "Web-based translation tool with tight version control integration",
        "url": "https://weblate.org",
        "sourceUrl": "https://github.com/WeblateOrg/weblate",
        "license": "GPL-3.0",
        "language": "Python/Docker/K8S",
        "tags": [
          "python"
        ]
      }
    ]
  },
  {
    "id": "software-development-low-code",
    "name": "Software Development - Low Code",
    "items": [
      {
        "name": "Appsmith",
        "description": "Build admin panels, CRUD apps and workflows. Build everything you need, 10x faster",
        "url": "https://www.appsmith.com/",
        "sourceUrl": "https://github.com/appsmithorg/appsmith",
        "license": "Apache-2.0",
        "language": "Java/Docker/K8S",
        "tags": [
          "java"
        ]
      },
      {
        "name": "Appwrite",
        "description": "End to end backend server for web, native, and mobile developers 🚀",
        "url": "https://appwrite.io",
        "sourceUrl": "https://github.com/appwrite/appwrite",
        "license": "BSD-3-Clause",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "autokitteh",
        "description": "Durable workflow automation in just a few lines of code",
        "url": "https://autokitteh.com/",
        "sourceUrl": "https://github.com/autokitteh/autokitteh",
        "license": "Apache-2.0",
        "language": "Go/Docker",
        "tags": [
          "go"
        ]
      },
      {
        "name": "Halo",
        "description": "A powerful and easy-to-use website building tool (documentation in Chinese). ([Demo](https://docs.halo.run/#%E5%9C%A8%E7%BA%BF%E4%BD%93%E9%AA%8C), [Source Code](https://github.com/halo-dev/halo), [Clients](https://github.com/halo-sigs/awesome-halo))",
        "url": "https://www.halo.run",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Java/Docker",
        "tags": [
          "java"
        ]
      },
      {
        "name": "Manifest",
        "description": "Complete backend that fits into 1 YAML file. ([Demo](https://manifest.new), [Source Code](https://github.com/mnfst/manifest))",
        "url": "https://manifest.build",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Nodejs",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "PocketBase",
        "description": "Backend for your next SaaS and Mobile app in one file",
        "url": "https://pocketbase.io/",
        "sourceUrl": "https://github.com/pocketbase/pocketbase",
        "license": "MIT",
        "language": "Go/Docker",
        "tags": [
          "go"
        ]
      },
      {
        "name": "Saltcorn",
        "description": "No-code database application builder for web and mobile applications. One platform for user interface, data backend, durable workflows, email, PDF generation, and AI applications",
        "url": "https://saltcorn.com/",
        "sourceUrl": "https://github.com/saltcorn/saltcorn",
        "license": "MIT",
        "language": "Docker/Nodejs",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "SQLPage",
        "description": "SQL-only dynamic website builder",
        "url": "https://sql-page.com",
        "sourceUrl": "https://github.com/sqlpage/SQLPage",
        "license": "MIT",
        "language": "Rust/Docker",
        "tags": [
          "rust"
        ]
      },
      {
        "name": "ToolJet",
        "description": "Low-code framework to build & deploy internal tools with minimal engineering effort (alternative to Retool and Mendix)",
        "url": "https://tooljet.io/",
        "sourceUrl": "https://github.com/ToolJet/ToolJet",
        "license": "GPL-3.0",
        "language": "Nodejs/Docker/K8S",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "TrailBase",
        "description": "Open, sub-millisecond, single-executable FireBase alternative with type-safe REST & realtime APIs, built-in JS/TS runtime, auth & admin UI. ([Demo](https://demo.trailbase.io), [Source Code](https://github.com/trailbaseio/trailbase))",
        "url": "https://trailbase.io/",
        "sourceUrl": "",
        "license": "OSL-3.0",
        "language": "Rust/Docker",
        "tags": [
          "rust"
        ]
      }
    ]
  },
  {
    "id": "software-development-project-management",
    "name": "Software Development - Project Management",
    "items": [
      {
        "name": "Cgit",
        "description": "Fast lightweight web interface for git repositories",
        "url": "https://git.zx2c4.com/cgit/about/",
        "sourceUrl": "https://git.zx2c4.com/cgit/tree/",
        "license": "GPL-2.0",
        "language": "C",
        "tags": [
          "c"
        ]
      },
      {
        "name": "Forgejo",
        "description": "A lightweight software forge focused on scaling, federation, and privacy (fork of Gitea). ([Demo](https://next.forgejo.org), [Source Code](https://codeberg.org/forgejo/forgejo/), [Clients](https://codeberg.org/forgejo-contrib/delightful-forgejo))",
        "url": "https://forgejo.org",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker/Go",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Fossil",
        "description": "Distributed version control system featuring wiki and bug tracker",
        "url": "https://www.fossil-scm.org/index.html/doc/trunk/www/index.wiki",
        "sourceUrl": "",
        "license": "BSD-2-Clause-FreeBSD",
        "language": "C",
        "tags": [
          "c"
        ]
      },
      {
        "name": "Gerrit",
        "description": "Code review and project management tool for Git-based projects",
        "url": "https://www.gerritcodereview.com/",
        "sourceUrl": "https://github.com/GerritCodeReview/gerrit",
        "license": "Apache-2.0",
        "language": "Java/Docker",
        "tags": [
          "java"
        ]
      },
      {
        "name": "gitbucket",
        "description": "Git platform powered with easy installation, high extensibility & GitHub API compatibility (alternative to GitHub)",
        "url": "https://gitbucket.github.io/",
        "sourceUrl": "https://github.com/gitbucket/gitbucket",
        "license": "Apache-2.0",
        "language": "Scala/Java",
        "tags": [
          "scala"
        ]
      },
      {
        "name": "Gitea",
        "description": "Git with a cup of tea! Painless self-hosted all-in-one software development service, including Git hosting, code review, team collaboration, package registry and CI/CD. ([Demo](https://demo.gitea.com), [Source Code](https://github.com/go-gitea/gitea))",
        "url": "https://gitea.com",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Go/Docker/K8S",
        "tags": [
          "go"
        ]
      },
      {
        "name": "GitLab",
        "description": "Self Hosted Git repository management, code reviews, issue tracking, activity feeds and wikis. ([Demo](https://gitlab.com/), [Source Code](https://gitlab.com/gitlab-org/gitlab-foss))",
        "url": "https://about.gitlab.com",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Ruby/deb/Docker/K8S",
        "tags": [
          "ruby"
        ]
      },
      {
        "name": "Gogs",
        "description": "Painless self-hosted Git Service written in Go",
        "url": "https://gogs.io/",
        "sourceUrl": "https://github.com/gogs/gogs",
        "license": "MIT",
        "language": "Go",
        "tags": [
          "go"
        ]
      },
      {
        "name": "Huly",
        "description": "All-in-one project management platform (alternative to Linear, Jira, Slack, Notion, Motion). ([Demo](https://app.huly.io), [Source Code](https://github.com/hcengineering/platform))",
        "url": "https://huly.io",
        "sourceUrl": "",
        "license": "EPL-2.0",
        "language": "Docker/K8S/Nodejs",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Kaneo",
        "description": "Project management platform focused on simplicity and efficiency. ([Demo](https://demo.kaneo.app/), [Source Code](https://github.com/usekaneo/kaneo))",
        "url": "https://kaneo.app/",
        "sourceUrl": "",
        "license": "MIT",
        "language": "K8S/Docker",
        "tags": [
          "k8s"
        ]
      },
      {
        "name": "Leantime",
        "description": "Lean project management system for small teams and startups helping to manage projects from ideation through delivery",
        "url": "https://leantime.io",
        "sourceUrl": "https://github.com/leantime/leantime",
        "license": "AGPL-3.0",
        "language": "PHP/Docker",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Mergeable",
        "description": "A better inbox for GitHub pull requests. ([Demo](https://app.usemergeable.dev), [Source Code](https://github.com/pvcnt/mergeable))",
        "url": "https://www.usemergeable.dev",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Nodejs/Docker/K8S",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Mindwendel",
        "description": "Brainstorm and upvote ideas and thoughts within your team. ([Demo](https://www.mindwendel.com), [Source Code](https://github.com/b310-digital/mindwendel))",
        "url": "https://www.mindwendel.com/",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Docker/Elixir",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "minimal-git-server",
        "description": "Lightweight git server with a basic CLI to manage repositories, supporting multiple accounts and running in a container",
        "url": "https://github.com/mcarbonne/minimal-git-server",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Octobox",
        "description": "Take back control of your GitHub Notifications",
        "url": "https://octobox.io/",
        "sourceUrl": "https://github.com/octobox/octobox",
        "license": "AGPL-3.0",
        "language": "Ruby/Docker",
        "tags": [
          "ruby"
        ]
      },
      {
        "name": "OneDev",
        "description": "All-In-One DevOps Platform. With Git Management, Issue Tracking, and CI/CD. Simple yet Powerful",
        "url": "https://onedev.io/",
        "sourceUrl": "https://code.onedev.io/projects/160",
        "license": "MIT",
        "language": "Java/Docker/K8S",
        "tags": [
          "java"
        ]
      },
      {
        "name": "OpenProject",
        "description": "Manage your projects, tasks and goals. Collaborate via work packages and link them to your pull requests on Github",
        "url": "https://www.openproject.org",
        "sourceUrl": "https://github.com/opf/openproject",
        "license": "GPL-3.0",
        "language": "Ruby/deb/Docker",
        "tags": [
          "ruby"
        ]
      },
      {
        "name": "Pagure",
        "description": "Lightweight, powerful, and flexible git-centric forge with features laying the foundation for federated and decentralized development. ([Demo](https://pagure.io/))",
        "url": "https://pagure.io/pagure",
        "sourceUrl": "",
        "license": "GPL-2.0",
        "language": "Docker/Python/deb",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Phorge",
        "description": "Community-driven platform for collaborating, managing, organizing and reviewing software development projects",
        "url": "https://we.phorge.it/",
        "sourceUrl": "https://we.phorge.it/source/phorge/",
        "license": "Apache-2.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Plane",
        "description": "Track issues, epics, and product roadmaps in the simplest way possible (alternative to JIRA, Linear and Height). ([Demo](https://app.plane.so), [Source Code](https://github.com/makeplane/plane))",
        "url": "https://plane.so",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "ProjeQtOr",
        "description": "Complete, mature, multi-user project management system with extensive functionality for all phases of a project. ([Demo](https://demo.projeqtor.org/), [Source Code](https://sourceforge.net/p/projectorria/code/HEAD/tree/branches/))",
        "url": "https://www.projeqtor.org/",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Redmine",
        "description": "Flexible project management web application",
        "url": "https://www.redmine.org/",
        "sourceUrl": "https://svn.redmine.org/redmine/",
        "license": "GPL-2.0",
        "language": "Ruby",
        "tags": [
          "ruby"
        ]
      },
      {
        "name": "Review Board",
        "description": "Extensible and friendly code review tool for projects and companies of all sizes. ([Demo](https://demo.reviewboard.org/), [Source Code](https://github.com/reviewboard/reviewboard))",
        "url": "https://www.reviewboard.org/",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Python/Docker",
        "tags": [
          "python"
        ]
      },
      {
        "name": "rgit",
        "description": "Ultra-fast & lightweight cgit clone",
        "url": "https://github.com/w4/rgit",
        "sourceUrl": "",
        "license": "WTFPL",
        "language": "Rust/Docker",
        "tags": [
          "rust"
        ]
      },
      {
        "name": "RhodeCode",
        "description": "Unify and simplify repository management for Git, Subversion, and Mercurial",
        "url": "https://rhodecode.com/",
        "sourceUrl": "https://code.rhodecode.com/",
        "license": "AGPL-3.0",
        "language": "Python",
        "tags": [
          "python"
        ]
      },
      {
        "name": "Rukovoditel",
        "description": "Configurable open source project management, web-based application",
        "url": "https://www.rukovoditel.net/",
        "sourceUrl": "https://www.rukovoditel.net/download.php",
        "license": "GPL-2.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "SCM Manager",
        "description": "The easiest way to share and manage your Git, Mercurial and Subversion repositories over http",
        "url": "https://www.scm-manager.org/",
        "sourceUrl": "https://github.com/scm-manager/scm-manager",
        "license": "BSD-3-Clause",
        "language": "Java/deb/Docker/K8S",
        "tags": [
          "java"
        ]
      },
      {
        "name": "ShipShipShip",
        "description": "Changelog and roadmap platform that bridges project management and customer communication. ([Demo](https://demo.shipshipship.io/admin), [Source Code](https://github.com/GauthierNelkinsky/ShipShipShip))",
        "url": "https://shipshipship.io",
        "sourceUrl": "",
        "license": "Apache-2.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Smederee",
        "description": "A frugal platform which is dedicated to help people build great software together leveraging the power of the Darcs version control system",
        "url": "https://smeder.ee",
        "sourceUrl": "https://smeder.ee/~jan0sch/smederee",
        "license": "AGPL-3.0",
        "language": "Scala",
        "tags": [
          "scala"
        ]
      },
      {
        "name": "Sourcehut",
        "description": "A full web git interface with no javascript. ([Demo](https://sr.ht/), [Source Code](https://git.sr.ht/~sircmpwn/git.sr.ht/tree))",
        "url": "https://sourcehut.org/",
        "sourceUrl": "",
        "license": "GPL-2.0",
        "language": "Go",
        "tags": [
          "go"
        ]
      },
      {
        "name": "Taiga",
        "description": "Agile Project Management Tool based on the Kanban and Scrum methods",
        "url": "https://www.taiga.io/",
        "sourceUrl": "https://github.com/kaleidos-ventures",
        "license": "MPL-2.0",
        "language": "Docker/Python/Nodejs",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Titra",
        "description": "Time-tracking solution for freelancers and small teams",
        "url": "https://titra.io/",
        "sourceUrl": "https://github.com/kromitgmbh/titra",
        "license": "GPL-3.0",
        "language": "Javascript/Docker",
        "tags": [
          "javascript"
        ]
      },
      {
        "name": "Trac",
        "description": "Trac is an enhanced wiki and issue tracking system for software development projects",
        "url": "https://trac.edgewall.org/",
        "sourceUrl": "",
        "license": "BSD-3-Clause",
        "language": "Python/deb",
        "tags": [
          "python"
        ]
      },
      {
        "name": "Traq",
        "description": "Project management and issue tracking system written in PHP",
        "url": "https://traq.io/",
        "sourceUrl": "https://github.com/nirix/traq",
        "license": "GPL-3.0",
        "language": "PHP/Nodejs",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Tuleap",
        "description": "Tuleap is a libre suite to plan, track, code and collaborate on software projects",
        "url": "https://www.tuleap.org/",
        "sourceUrl": "https://tuleap.net/plugins/git/tuleap/tuleap/stable?p=tuleap%2Fstable.git&a=tree",
        "license": "GPL-2.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "UVDesk",
        "description": "UVDesk community is a service oriented, event driven extensible opensource helpdesk system that can be used by your organization to provide efficient support to your clients effortlessly whichever way you imagine. ([Demo](https://demo.uvdesk.com/), [Source Code](https://github.com/uvdesk/community-skeleton))",
        "url": "https://www.uvdesk.com/",
        "sourceUrl": "",
        "license": "MIT",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "ZenTao",
        "description": "An agile(scrum) project management system/tool",
        "url": "https://www.zentao.pm/",
        "sourceUrl": "https://github.com/easysoft/zentaopms",
        "license": "AGPL-3.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      }
    ]
  },
  {
    "id": "software-development-testing",
    "name": "Software Development - Testing",
    "items": [
      {
        "name": "Bencher",
        "description": "Suite of continuous benchmarking tools designed to catch performance regressions in CI",
        "url": "https://bencher.dev/",
        "sourceUrl": "https://github.com/bencherdev/bencher",
        "license": "MIT/Apache-2.0",
        "language": "Rust",
        "tags": [
          "rust"
        ]
      },
      {
        "name": "WebHook Tester",
        "description": "Powerful tool for testing WebHooks and more",
        "url": "https://github.com/tarampampam/webhook-tester",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker/Go/deb/K8S",
        "tags": [
          "docker"
        ]
      }
    ]
  },
  {
    "id": "task-management-to-do-lists",
    "name": "Task Management & To-do Lists",
    "items": [
      {
        "name": "4ga Boards",
        "description": "Straightforward realtime kanban boards management for intuitive task tracking. Featuring an elegant dark mode, collapsible todo lists, and multitasking tools to supercharge your team's productivity. ([Demo](https://demo.4gaboards.com), [Source Code](https://github.com/RARgames/4gaBoards))",
        "url": "https://4gaboards.com",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Nodejs/Docker/K8S",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "AppFlowy",
        "description": "Build detailed lists of to-do’s for different projects while tracking the status of each one. Open Source Notion Alternative",
        "url": "https://appflowy.io/",
        "sourceUrl": "https://github.com/AppFlowy-IO/appflowy",
        "license": "AGPL-3.0",
        "language": "Rust/Dart/Docker",
        "tags": [
          "rust"
        ]
      },
      {
        "name": "Donetick",
        "description": "Task and chore management tool for personal and family use, with advanced scheduling, flexible assignment, and group sharing capabilities, detailed history, automation via API, simple and modern design. ([Demo](https://app.donetick.com/), [Source Code](https://github.com/donetick/donetick))",
        "url": "https://donetick.com",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Go/Docker",
        "tags": [
          "go"
        ]
      },
      {
        "name": "Focalboard",
        "description": "Define, organize, track and manage work across individuals and teams (alternative to Trello, Notion and Asana). ([Source Code](https://github.com/mattermost-community/focalboard), [Clients](https://www.focalboard.com/download/personal-edition/desktop/))",
        "url": "https://www.focalboard.com/",
        "sourceUrl": "",
        "license": "MIT/AGPL-3.0/Apache-2.0",
        "language": "Nodejs/Go/Docker",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Kanboard",
        "description": "Simple visual task board",
        "url": "https://kanboard.org/",
        "sourceUrl": "https://github.com/kanboard/kanboard",
        "license": "MIT",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Listaway",
        "description": "List management app for creating and publicly sharing lists of items. Supports auth, admin tools, item notes and priorities, and opt-in public read-only links with randomized URLs (alternative to Amazon Lists)",
        "url": "https://github.com/jeffrpowell/listaway/",
        "sourceUrl": "https://github.com/jeffrpowell/listaway",
        "license": "MIT",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "myTinyTodo",
        "description": "Simple way to manage your todo list in AJAX style. Uses PHP, jQuery, SQLite/MySQL. GTD compliant. ([Demo](https://www.mytinytodo.net/demo/), [Source Code](https://github.com/maxpozdeev/mytinytodo/))",
        "url": "https://www.mytinytodo.net/",
        "sourceUrl": "",
        "license": "GPL-2.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Nullboard",
        "description": "Single-page minimalist kanban board; compact, highly readable and quick to use. ([Demo](https://nullboard.io/preview))",
        "url": "https://github.com/apankrat/nullboard",
        "sourceUrl": "",
        "license": "BSD-2-Clause",
        "language": "Javascript",
        "tags": [
          "javascript"
        ]
      },
      {
        "name": "OpenHabitTracker",
        "description": "Track habits, tasks and notes with time tracking, calendar view and completion statistics. ([Demo](https://pwa.openhabittracker.net), [Source Code](https://github.com/Jinjinov/OpenHabitTracker))",
        "url": "https://openhabittracker.net",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Our Shopping List",
        "description": "Simple shared list application including shopping lists and any other small todo-list that needs to be used collaboratively. ([Demo](https://osl.lanterne-rouge.info/))",
        "url": "https://github.com/nanawel/our-shopping-list",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Super Productivity",
        "description": "Advanced todo list app with integrated timeboxing and time tracking capabilities. Integrates with Jira, GitHub, GitLab, Redmine and OpenProject",
        "url": "https://super-productivity.com",
        "sourceUrl": "https://github.com/super-productivity/super-productivity",
        "license": "MIT",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Task Keeper",
        "description": "List editor for power users, backed by a self-hosted server",
        "url": "https://github.com/nymanjens/piga",
        "sourceUrl": "",
        "license": "Apache-2.0",
        "language": "Scala",
        "tags": [
          "scala"
        ]
      },
      {
        "name": "Tasks.md",
        "description": "A self-hosted, file based task management board that supports Markdown syntax",
        "url": "https://github.com/BaldissaraMatheus/Tasks.md",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Taskwarrior",
        "description": "Taskwarrior is Free and Open Source Software that manages your TODO list from your command line. It is flexible, fast, efficient, and unobtrusive. It does its job then gets out of your way",
        "url": "https://taskwarrior.org/",
        "sourceUrl": "https://taskwarrior.org/download/#git",
        "license": "MIT",
        "language": "C++",
        "tags": [
          "c++"
        ]
      },
      {
        "name": "Tracks",
        "description": "Web-based application to help you implement David Allen’s [Getting Things Done™](https://en.wikipedia.org/wiki/Getting_Things_Done) methodology",
        "url": "https://www.getontracks.org/",
        "sourceUrl": "https://github.com/TracksApp/tracks",
        "license": "GPL-2.0",
        "language": "Ruby",
        "tags": [
          "ruby"
        ]
      },
      {
        "name": "tududi",
        "description": "Task management tool with hierarchical structure, smart recurring tasks, and seamless Telegram integration",
        "url": "https://tududi.com/",
        "sourceUrl": "https://github.com/chrisvel/tududi",
        "license": "MIT",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Vikunja",
        "description": "The to-do app to organize your life. ([Demo](https://try.vikunja.io/login), [Source Code](https://kolaente.dev/vikunja/))",
        "url": "https://vikunja.io/",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Go",
        "tags": [
          "go"
        ]
      },
      {
        "name": "Wekan",
        "description": "Open-source Trello-like kanban",
        "url": "https://wekan.github.io/",
        "sourceUrl": "https://github.com/wekan/wekan",
        "license": "MIT",
        "language": "Nodejs",
        "tags": [
          "nodejs"
        ]
      }
    ]
  },
  {
    "id": "ticketing",
    "name": "Ticketing",
    "items": [
      {
        "name": "Bugzilla",
        "description": "General-purpose bugtracker and testing tool originally developed and used by the Mozilla project",
        "url": "https://www.bugzilla.org/",
        "sourceUrl": "https://github.com/bugzilla/bugzilla",
        "license": "MPL-2.0",
        "language": "Perl",
        "tags": [
          "perl"
        ]
      },
      {
        "name": "Frappe Helpdesk",
        "description": "Helpdesk software which helps you streamline your company's support, offers an easy setup, clean user interface, and automation tools to resolve customer queries efficiently",
        "url": "https://frappe.io/helpdesk",
        "sourceUrl": "https://github.com/frappe/helpdesk",
        "license": "AGPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "FreeScout",
        "description": "Email-based customer support application, help desk and shared mailbox (alternative to Zendesk and Help Scout). ([Demo](https://demo.freescout.net/login), [Source Code](https://github.com/freescout-help-desk/freescout))",
        "url": "https://freescout.net/",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "PHP/Docker",
        "tags": [
          "php"
        ]
      },
      {
        "name": "GlitchTip",
        "description": "Error tracking app to collect errors reported by your app",
        "url": "https://glitchtip.com",
        "sourceUrl": "https://gitlab.com/glitchtip/glitchtip",
        "license": "MIT",
        "language": "Python/Docker/K8S",
        "tags": [
          "python"
        ]
      },
      {
        "name": "ITFlow",
        "description": "Client IT documentation, ticketing, invoicing and accounting for MSPs (Managed Service Providers). ([Demo](https://demo.itflow.org), [Source Code](https://github.com/itflow-org/itflow))",
        "url": "https://itflow.org",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Libredesk",
        "description": "Modern customer support desk. Single binary app",
        "url": "https://libredesk.io/",
        "sourceUrl": "https://github.com/abhinavxd/libredesk",
        "license": "AGPL-3.0",
        "language": "Docker/Go/Nodejs",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "MantisBT",
        "description": "Bug tracker, fits best for software development. ([Demo](https://www.mantisbt.org/bugs/my_view_page.php), [Source Code](https://github.com/mantisbt/mantisbt))",
        "url": "https://www.mantisbt.org/",
        "sourceUrl": "",
        "license": "GPL-2.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "OTOBO",
        "description": "Flexible web-based ticketing system used for customer service, help desk, IT service management. ([Demo](https://otobo.io/en/service-management-plattform/otobo-demo/), [Source Code](https://github.com/RotherOSS/otobo))",
        "url": "https://otobo.io/en/",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Perl/Docker",
        "tags": [
          "perl"
        ]
      },
      {
        "name": "Request Tracker",
        "description": "Enterprise-grade issue tracking system",
        "url": "https://www.bestpractical.com/rt/",
        "sourceUrl": "https://github.com/bestpractical/rt",
        "license": "GPL-2.0",
        "language": "Perl",
        "tags": [
          "perl"
        ]
      },
      {
        "name": "Roundup Issue Tracker",
        "description": "Simple-to-use and -install issue tracking system with command-line, web, REST, XML-RPC, and e-mail interfaces. Designed with flexibility in mind - not just another bug tracker",
        "url": "https://www.roundup-tracker.org/",
        "sourceUrl": "https://www.roundup-tracker.org/code.html",
        "license": "MIT/ZPL-2.0",
        "language": "Python/Docker",
        "tags": [
          "python"
        ]
      },
      {
        "name": "Zammad",
        "description": "Easy to use but powerful open-source support and ticketing system",
        "url": "https://zammad.org/",
        "sourceUrl": "https://github.com/zammad/zammad",
        "license": "AGPL-3.0",
        "language": "Ruby/deb",
        "tags": [
          "ruby"
        ]
      }
    ]
  },
  {
    "id": "time-tracking",
    "name": "Time Tracking",
    "items": [
      {
        "name": "ActivityWatch",
        "description": "Automatically track how you spend time on your devices",
        "url": "https://activitywatch.net",
        "sourceUrl": "https://github.com/ActivityWatch/activitywatch",
        "license": "MPL-2.0",
        "language": "Python",
        "tags": [
          "python"
        ]
      },
      {
        "name": "Beaver Habit Tracker",
        "description": "Habit tracking app to save your precious moments in your fleeting life. ([Demo](https://beaverhabits.com/demo))",
        "url": "https://github.com/daya0576/beaverhabits",
        "sourceUrl": "",
        "license": "BSD-3-Clause",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Ever Gauzy",
        "description": "Open business management platform for collaborative, on-demand and sharing economies (ERP/CRM/HRM/ATS/PM). ([Demo](https://demo.gauzy.co), [Source Code](https://github.com/ever-co/ever-gauzy))",
        "url": "https://gauzy.co",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Docker/Nodejs",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Kimai",
        "description": "Track work time and print out a summary of your activities on demand. ([Demo](https://www.kimai.org/demo/), [Source Code](https://github.com/kimai/kimai))",
        "url": "https://www.kimai.org/",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "solidtime",
        "description": "Modern time tracking application for freelancers and agencies",
        "url": "https://www.solidtime.io",
        "sourceUrl": "https://github.com/solidtime-io/solidtime",
        "license": "AGPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "TimeTagger",
        "description": "An open source time-tracker based on an interactive timeline and powerful reporting. ([Demo](https://timetagger.app/app/demo), [Source Code](https://github.com/almarklein/timetagger))",
        "url": "https://timetagger.app",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Python",
        "tags": [
          "python"
        ]
      },
      {
        "name": "Traggo",
        "description": "Traggo is a tag-based time tracking tool. In Traggo there are no tasks, only tagged time spans",
        "url": "https://traggo.net/",
        "sourceUrl": "https://github.com/traggo/server",
        "license": "GPL-3.0",
        "language": "Docker/Go",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Wakapi",
        "description": "Tracking tool for coding statistics, compatible with WakaTime",
        "url": "https://wakapi.dev/",
        "sourceUrl": "https://github.com/muety/wakapi",
        "license": "GPL-3.0",
        "language": "Go/Docker",
        "tags": [
          "go"
        ]
      },
      {
        "name": "Ziit",
        "description": "The Swiss army knife of code time tracking (alternative to WakaTime)",
        "url": "https://ziit.app",
        "sourceUrl": "https://github.com/0pandadev/ziit",
        "license": "AGPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      }
    ]
  },
  {
    "id": "url-shorteners",
    "name": "URL Shorteners",
    "items": [
      {
        "name": "bit",
        "description": "Fast, lightweight, resource-efficient, compiled URL shortener",
        "url": "https://github.com/sjdonado/bit",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker/Crystal",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Chhoto URL",
        "description": "Simple, lightning-fast URL shortener with no bloat (fork of simply-shorten). ([Demo](https://github.com/SinTan1729/chhoto-url?tab=readme-ov-file#demo), [Clients](https://github.com/SinTan1729/chhoto-url/blob/main/TOOLS.md))",
        "url": "https://github.com/SinTan1729/chhoto-url",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Rust/Docker",
        "tags": [
          "rust"
        ]
      },
      {
        "name": "clink",
        "description": "A super-minimal link shortening service written in pure C, focusing on small executable size, portability, and ease of configuration. ([Demo](https://short.crueter.xyz))",
        "url": "https://git.crueter.xyz/crueter/clink",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "C",
        "tags": [
          "c"
        ]
      },
      {
        "name": "Flink",
        "description": "Create QR Codes, embeddable link previews for your website and crawls/scrapes metadata. ([Demo](https://flink.is))",
        "url": "https://gitlab.com/rtraceio/web/flink",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Kutt",
        "description": "Modern URL shortener with support for custom domains and custom URLs. ([Demo](https://kutt.to), [Source Code](https://github.com/thedevs-network/kutt))",
        "url": "https://kutt.to",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Nodejs/Docker",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "rs-short",
        "description": "Lightweight link shortener written in Rust, with features such as caching, spambot protection and phishing detection. ([Demo](https://s.42l.fr/))",
        "url": "https://git.42l.fr/42l/rs-short",
        "sourceUrl": "",
        "license": "MPL-2.0",
        "language": "Rust",
        "tags": [
          "rust"
        ]
      },
      {
        "name": "Shlink",
        "description": "URL shortener with REST API and command line interface. Includes official progressive web application and docker images. ([Source Code](https://github.com/shlinkio/shlink), [Clients](https://shlink.io/apps))",
        "url": "https://shlink.io",
        "sourceUrl": "",
        "license": "MIT",
        "language": "PHP/Docker",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Simple-URL-Shortener",
        "description": "KISS URL shortener, public or private (with account). Minimalist and lightweight. No dependencies. ([Demo](https://u.azlux.fr))",
        "url": "https://github.com/azlux/Simple-URL-Shortener",
        "sourceUrl": "",
        "license": "MIT",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "YOURLS",
        "description": "YOURLS is a set of PHP scripts that will allow you to run Your Own URL Shortener. Features include password protection, URL customization, bookmarklets, statistics, API, plugins, jsonp",
        "url": "https://yourls.org/",
        "sourceUrl": "https://github.com/YOURLS/YOURLS",
        "license": "MIT",
        "language": "PHP",
        "tags": [
          "php"
        ]
      }
    ]
  },
  {
    "id": "video-surveillance",
    "name": "Video Surveillance",
    "items": [
      {
        "name": "Bluecherry",
        "description": "Closed-circuit television (CCTV) software application which supports IP and Analog cameras",
        "url": "https://www.bluecherrydvr.com/",
        "sourceUrl": "https://github.com/bluecherrydvr/bluecherry-apps",
        "license": "GPL-2.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Frigate",
        "description": "Monitor your security cameras with locally processed AI",
        "url": "https://frigate.video/",
        "sourceUrl": "https://github.com/blakeblackshear/frigate",
        "license": "MIT",
        "language": "Docker/Python/Nodejs",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "motionEye",
        "description": "Online interface for the software Motion, a video surveillance program with motion detection",
        "url": "https://github.com/motioneye-project/motioneye",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Python/Docker",
        "tags": [
          "python"
        ]
      },
      {
        "name": "SentryShot",
        "description": "Video surveillance management system",
        "url": "https://codeberg.org/SentryShot/sentryshot",
        "sourceUrl": "",
        "license": "GPL-2.0",
        "language": "Docker/Rust",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Viseron",
        "description": "Self-hosted, local-only NVR and AI Computer Vision software. With features such as object detection, motion detection, face recognition and more, it gives you the power to keep an eye on your home, office or any other place you want to monitor",
        "url": "https://viseron.netlify.app/",
        "sourceUrl": "https://github.com/roflcoopter/viseron",
        "license": "MIT",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Zoneminder",
        "description": "Closed-circuit television (CCTV) software application which supports IP, USB and Analog cameras",
        "url": "https://www.zoneminder.com/",
        "sourceUrl": "https://github.com/ZoneMinder/ZoneMinder",
        "license": "GPL-2.0",
        "language": "PHP/deb",
        "tags": [
          "php"
        ]
      }
    ]
  },
  {
    "id": "web-servers",
    "name": "Web Servers",
    "items": [
      {
        "name": "Algernon",
        "description": "Small self-contained pure-Go web server with Lua, Markdown, HTTP/2, QUIC, Redis and PostgreSQL support",
        "url": "https://algernon.roboticoverlords.org/",
        "sourceUrl": "https://github.com/xyproto/algernon",
        "license": "BSD-3-Clause",
        "language": "Go/Docker",
        "tags": [
          "go"
        ]
      },
      {
        "name": "Apache HTTP Server",
        "description": "Secure, efficient and extensible server that provides HTTP services in sync with the current HTTP standards",
        "url": "https://httpd.apache.org/",
        "sourceUrl": "https://svn.apache.org/repos/asf/httpd/httpd/trunk/",
        "license": "Apache-2.0",
        "language": "C/deb/Docker",
        "tags": [
          "c"
        ]
      },
      {
        "name": "BunkerWeb",
        "description": "Next-gen Web Application Firewall (WAF) that will protect your web services. ([Demo](https://demo.bunkerweb.io), [Source Code](https://github.com/bunkerity/bunkerweb), [Clients](https://docs.bunkerweb.io/latest/plugins/))",
        "url": "https://www.bunkerweb.io",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "deb/Docker/K8S/Python",
        "tags": [
          "deb"
        ]
      },
      {
        "name": "Caddy",
        "description": "Powerful, enterprise-ready, open source web server with automatic HTTPS",
        "url": "https://caddyserver.com/",
        "sourceUrl": "https://github.com/caddyserver/caddy",
        "license": "Apache-2.0",
        "language": "Go/deb/Docker",
        "tags": [
          "go"
        ]
      },
      {
        "name": "go-doxy",
        "description": "Lightweight, simple, and  performant reverse proxy with WebUI, Docker integration, automatic shutdown/startup for container based on traffic",
        "url": "https://github.com/yusing/godoxy",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker/Go",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "godoxy",
        "description": "High-performance reverse proxy and container orchestrator for self-hosters. ([Demo](https://demo.godoxy.dev/), [Source Code](https://github.com/yusing/godoxy))",
        "url": "https://docs.godoxy.dev/",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Docker/Go",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "HAProxy",
        "description": "Very fast and reliable reverse-proxy offering high availability, load balancing, and proxying for TCP and HTTP-based applications",
        "url": "https://www.haproxy.org/",
        "sourceUrl": "https://git.haproxy.org/?p=haproxy.git;a=tree",
        "license": "GPL-2.0",
        "language": "C/deb/Docker",
        "tags": [
          "c"
        ]
      },
      {
        "name": "Lighttpd",
        "description": "Secure, fast, compliant, and very flexible web server that has been optimized for high-performance environments",
        "url": "https://www.lighttpd.net/",
        "sourceUrl": "https://git.lighttpd.net/lighttpd/lighttpd1.4",
        "license": "BSD-3-Clause",
        "language": "C/deb/Docker",
        "tags": [
          "c"
        ]
      },
      {
        "name": "Nginx Proxy Manager",
        "description": "Docker container for managing Nginx proxy hosts with a simple, powerful interface",
        "url": "https://nginxproxymanager.com/",
        "sourceUrl": "https://github.com/NginxProxyManager/nginx-proxy-manager",
        "license": "MIT",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "NGINX",
        "description": "HTTP and reverse proxy server, mail proxy server, and generic TCP/UDP proxy server",
        "url": "https://nginx.org/en/",
        "sourceUrl": "https://github.com/nginx/nginx",
        "license": "BSD-2-Clause",
        "language": "C/deb/Docker",
        "tags": [
          "c"
        ]
      },
      {
        "name": "Pangolin",
        "description": "Identity-aware tunneled reverse proxy with dashboard UI, access control, and WireGuard-based tunnels (alternative to Cloudflare Tunnel, Tailscale)",
        "url": "https://digpangolin.com/",
        "sourceUrl": "https://github.com/fosrl/pangolin",
        "license": "AGPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Pomerium",
        "description": "Identity-aware reverse proxy, successor to now obsolete oauth_proxy. It inserts an OAuth step before proxying your request to the backend, so that you can safely expose your self-hosted websites to public Internet",
        "url": "https://www.pomerium.io",
        "sourceUrl": "https://github.com/pomerium/pomerium",
        "license": "Apache-2.0",
        "language": "Go/Docker",
        "tags": [
          "go"
        ]
      },
      {
        "name": "SafeLine",
        "description": "Web application firewall / reverse proxy to protect your web apps from attacks and exploits. ([Demo](https://demo.waf.chaitin.com/), [Source Code](https://github.com/chaitin/SafeLine))",
        "url": "https://waf.chaitin.com/",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Static Web Server",
        "description": "Cross-platform, high-performance, and asynchronous web server for static file serving",
        "url": "https://static-web-server.net/",
        "sourceUrl": "https://github.com/static-web-server/static-web-server",
        "license": "Apache-2.0/MIT",
        "language": "Rust/Docker",
        "tags": [
          "rust"
        ]
      },
      {
        "name": "SWAG (Secure Web Application Gateway)",
        "description": "Nginx webserver and reverse proxy with PHP support, built-in Certbot (Let's Encrypt) client and fail2ban integration",
        "url": "https://github.com/linuxserver/docker-swag",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Traefik",
        "description": "HTTP reverse proxy and load balancer that makes deploying microservices easy",
        "url": "https://traefik.io/",
        "sourceUrl": "https://github.com/traefik/traefik",
        "license": "MIT",
        "language": "Go/Docker",
        "tags": [
          "go"
        ]
      },
      {
        "name": "UUSEC WAF",
        "description": "Industry-leading high-performance, AI and semantic technology web application firewall and API security gateway (fork of nginx)",
        "url": "https://uuwaf.uusec.com",
        "sourceUrl": "https://github.com/Safe3/uusec-waf",
        "license": "GPL-3.0",
        "language": "C/Lua/Docker",
        "tags": [
          "c"
        ]
      },
      {
        "name": "Vinyl Cache",
        "description": "Web application accelerator/caching HTTP reverse proxy (formerly Varnish)",
        "url": "https://vinyl-cache.org/",
        "sourceUrl": "https://code.vinyl-cache.org/vinyl-cache/vinyl-cache",
        "license": "BSD-2-Clause",
        "language": "Go/deb/Docker",
        "tags": [
          "go"
        ]
      },
      {
        "name": "Zoraxy",
        "description": "General purpose HTTP reverse proxy and forwarding tool",
        "url": "https://zoraxy.aroz.org/",
        "sourceUrl": "https://github.com/tobychui/zoraxy",
        "license": "AGPL-3.0",
        "language": "Go/Docker",
        "tags": [
          "go"
        ]
      }
    ]
  },
  {
    "id": "wikis",
    "name": "Wikis",
    "items": [
      {
        "name": "AmuseWiki",
        "description": "Amusewiki is based on the Emacs Muse markup, remaining mostly compatible with the original implementation. It can work as a read-only site, as a moderated wiki, or as a fully open wiki or even as a private site. ([Demo](https://sandbox.amusewiki.org), [Source Code](https://github.com/melmothx/amusewiki))",
        "url": "https://amusewiki.org/",
        "sourceUrl": "",
        "license": "GPL-1.0",
        "language": "Perl/Docker",
        "tags": [
          "perl"
        ]
      },
      {
        "name": "BookStack",
        "description": "Organize and store information. Stores documentation in a book like fashion. ([Demo](https://www.bookstackapp.com/#demo), [Source Code](https://github.com/BookStackApp/BookStack))",
        "url": "https://www.bookstackapp.com/",
        "sourceUrl": "",
        "license": "MIT",
        "language": "PHP/Docker",
        "tags": [
          "php"
        ]
      },
      {
        "name": "django-wiki",
        "description": "Wiki system with complex functionality for simple integration and a superb interface. Store your knowledge with style: Use django models. ([Demo](https://demo.django-wiki.org/))",
        "url": "https://github.com/django-wiki/django-wiki",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Python",
        "tags": [
          "python"
        ]
      },
      {
        "name": "docmost",
        "description": "Collaborative wiki and documentation software (alternative to Confluence, Notion)",
        "url": "https://docmost.com/",
        "sourceUrl": "https://github.com/docmost/docmost",
        "license": "AGPL-3.0",
        "language": "Docker/Nodejs",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "Documize",
        "description": "Modern Docs + Wiki software with built-in workflow, single binary executable, just bring MySQL/Percona",
        "url": "https://documize.com",
        "sourceUrl": "https://github.com/documize/community",
        "license": "AGPL-3.0",
        "language": "Go",
        "tags": [
          "go"
        ]
      },
      {
        "name": "Dokuwiki",
        "description": "Easy to use, lightweight, standards-compliant wiki engine with a simple syntax allowing reading the data outside the wiki. All data is stored in plain text files, therefore no database is required",
        "url": "https://www.dokuwiki.org/DokuWiki",
        "sourceUrl": "https://github.com/dokuwiki/dokuwiki",
        "license": "GPL-2.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Feather Wiki",
        "description": "A lightning fast and infinitely extensible tool for creating personal non-linear notebooks, databases, and wikis that is entirely self-contained, runs in your browser, and is only 58 kilobytes in size. ([Demo](https://feather.wiki/?page=gallery#wikis), [Source Code](https://codeberg.org/Alamantus/FeatherWiki), [Clients](https://feather.wiki/?page=gallery#extensions))",
        "url": "https://feather.wiki",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Javascript",
        "tags": [
          "javascript"
        ]
      },
      {
        "name": "Gitit",
        "description": "Wiki program that stores pages and uploaded files in a git repository, which can then be modified using the VCS command line tools or the wiki's web interface",
        "url": "https://github.com/jgm/gitit",
        "sourceUrl": "",
        "license": "GPL-2.0",
        "language": "Haskell",
        "tags": [
          "haskell"
        ]
      },
      {
        "name": "Gollum",
        "description": "Simple, Git-powered wiki with a sweet API and local frontend",
        "url": "https://github.com/gollum/gollum",
        "sourceUrl": "",
        "license": "MIT",
        "language": "Ruby",
        "tags": [
          "ruby"
        ]
      },
      {
        "name": "Mediawiki",
        "description": "Wiki software package that powers Wikipedia and all other Wikimedia projects, serving hundreds of millions of users each month. ([Demo](https://en.wikipedia.org/wiki/Main_Page), [Source Code](https://phabricator.wikimedia.org/source/mediawiki/))",
        "url": "https://www.mediawiki.org/wiki/MediaWiki",
        "sourceUrl": "",
        "license": "GPL-2.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Mycorrhiza Wiki",
        "description": "Filesystem and git-based wiki engine written in Go using Mycomarkup as its primary markup language",
        "url": "https://mycorrhiza.wiki/",
        "sourceUrl": "https://github.com/bouncepaw/mycorrhiza/",
        "license": "AGPL-3.0",
        "language": "Go",
        "tags": [
          "go"
        ]
      },
      {
        "name": "Oddmuse",
        "description": "Simple wiki engine written in Perl. No database required",
        "url": "https://oddmuse.org/",
        "sourceUrl": "https://github.com/kensanata/oddmuse",
        "license": "GPL-3.0",
        "language": "Perl",
        "tags": [
          "perl"
        ]
      },
      {
        "name": "Otter Wiki",
        "description": "Simple, easy to use wiki software using markdown",
        "url": "https://otterwiki.com/",
        "sourceUrl": "https://github.com/redimp/otterwiki",
        "license": "MIT",
        "language": "Docker",
        "tags": [
          "docker"
        ]
      },
      {
        "name": "PmWiki",
        "description": "Wiki-based system for collaborative creation and maintenance of websites",
        "url": "https://www.pmwiki.org",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Raneto",
        "description": "Knowledgebase platform that uses static Markdown files",
        "url": "https://raneto.com/",
        "sourceUrl": "https://github.com/ryanlelek/Raneto",
        "license": "MIT",
        "language": "Nodejs",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "TiddlyWiki",
        "description": "Reusable non-linear personal web notebook",
        "url": "https://tiddlywiki.com/",
        "sourceUrl": "https://github.com/TiddlyWiki/TiddlyWiki5",
        "license": "BSD-3-Clause",
        "language": "Nodejs",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "Tiki",
        "description": "Wiki CMS Groupware with the most built-in features. ([Demo](https://tiki.org/Try-Tiki), [Source Code](https://gitlab.com/tikiwiki/tiki))",
        "url": "https://tiki.org/HomePage",
        "sourceUrl": "",
        "license": "LGPL-2.1",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "W",
        "description": "Lightweight, mutli-user, flat-file-database Wiki engine. Create pages quickly and edit them in your Web browser using Mardown/HTML/CSS/JS. The main difference with other wiki is that you are encouraged to customize each page style individually",
        "url": "https://w.club1.fr",
        "sourceUrl": "https://github.com/vincent-peugnet/wcms",
        "license": "AGPL-3.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "WackoWiki",
        "description": "WackoWiki is a light and easy to install multilingual Wiki-engine",
        "url": "https://wackowiki.org/",
        "sourceUrl": "https://github.com/WackoWiki/wackowiki",
        "license": "BSD-3-Clause",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "Wiki-Go",
        "description": "A modern, feature-rich, databaseless flat-file wiki platform. ([Demo](https://wikigo.leomoon.com), [Source Code](https://github.com/leomoon-studios/wiki-go))",
        "url": "https://leomoon.com/downloads/web-apps/wiki-go/",
        "sourceUrl": "",
        "license": "GPL-3.0",
        "language": "Go/Docker",
        "tags": [
          "go"
        ]
      },
      {
        "name": "Wiki.js",
        "description": "Modern, lightweight and powerful wiki app using Git and Markdown. ([Demo](https://docs.requarks.io), [Source Code](https://github.com/Requarks/wiki))",
        "url": "https://js.wiki/",
        "sourceUrl": "",
        "license": "AGPL-3.0",
        "language": "Nodejs/Docker/K8S",
        "tags": [
          "nodejs"
        ]
      },
      {
        "name": "WikiDocs",
        "description": "A databaseless markdown flat-file wiki engine",
        "url": "https://www.wikidocs.app/",
        "sourceUrl": "https://github.com/Zavy86/WikiDocs",
        "license": "MIT",
        "language": "PHP/Docker",
        "tags": [
          "php"
        ]
      },
      {
        "name": "WiKiss",
        "description": "Wiki, simple to use and install",
        "url": "https://wikiss.tuxfamily.org/",
        "sourceUrl": "https://svnweb.tuxfamily.org/listing.php?repname=wikiss/svn&path=%2F&sc=0",
        "license": "GPL-2.0",
        "language": "PHP",
        "tags": [
          "php"
        ]
      },
      {
        "name": "XWiki",
        "description": "Second generation wiki that allows the user to extend its functionalities with a powerful extension-based architecture. ([Demo](https://www.xwikiplayground.org/xwiki/bin/view/Main/), [Source Code](https://github.com/xwiki/xwiki-platform))",
        "url": "https://www.xwiki.org",
        "sourceUrl": "",
        "license": "LGPL-2.1",
        "language": "Java/Docker/deb",
        "tags": [
          "java"
        ]
      },
      {
        "name": "Zim",
        "description": "Graphical text editor used to maintain a collection of wiki pages. Each page can contain links to other pages, simple formatting and images",
        "url": "https://zim-wiki.org/",
        "sourceUrl": "https://github.com/zim-desktop-wiki/zim-desktop-wiki",
        "license": "GPL-2.0",
        "language": "Python/deb",
        "tags": [
          "python"
        ]
      }
    ]
  }
];
