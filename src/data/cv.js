// Content taken from the CV. Edit here, the page reads everything from this file.

export const profile = {
  name: 'Muhammad Zharif Zhafran Bin Ismadi',
  shortName: 'Zharif Zhafran',
  role: 'Junior Cloud Engineer',
  email: 'zharifzhafran7@gmail.com',
  linkedin: 'https://www.linkedin.com/in/zharifzhafran',
  linkedinLabel: 'linkedin.com/in/zharifzhafran',
  firstNames: 'Muhammad Zharif Zhafran',
  surname: 'Bin Ismadi',
  bio: [
    'I’m Zharif, a Junior Cloud Engineer at Stampede Solutions. I studied Computer Science at UiTM, first a diploma and then a bachelor’s degree in Computer Networks.',
    'I started on the physical side of networks, running structured cabling and configuring access points and VLANs. Since then I have racked servers at Exabytes, supported AWS workloads at Kenanga Investment Bank, and now configure Linux servers, Proxmox and web stacks. I’m building deeper expertise in cloud infrastructure, networking and cloud security.',
  ],
  summary: [
    'Aspiring Cloud Engineer with hands-on experience in AWS cloud operations, infrastructure deployment, cloud monitoring and network configuration in enterprise environments. Experienced supporting workloads using Amazon EC2, S3, RDS, VPC and containerized services, with exposure to remediation, cost optimization and day-to-day operations guided by security best practices.',
    'Also experienced with Linux, Proxmox, web servers, MySQL, data center operations and network troubleshooting. Focused on building deeper expertise in cloud infrastructure, networking and cloud security.',
  ],
  focus: ['Cloud infrastructure', 'Networking', 'Cloud security'],
}

export const education = [
  {
    title: 'Bachelor of Computer Science (Hons.) Computer Networks',
    school: 'Universiti Teknologi MARA (UiTM), Arau, Perlis',
    road: { year: '2024', label: 'UiTM Arau, degree' },
    logo: { slug: 'uitm', monogram: 'UiTM' },
    period: '2024 – 2026',
    cgpa: '3.39',
  },
  {
    title: 'Diploma in Computer Science',
    school: 'Universiti Teknologi MARA (UiTM), Merbok, Kedah',
    road: { year: '2021', label: 'UiTM Merbok, diploma' },
    logo: { slug: 'uitm', monogram: 'UiTM' },
    period: '2021 – 2024',
    cgpa: '3.34',
  },
  {
    title: 'Royal Military College (RMC)',
    school: 'Maktab Tentera Diraja, Sungai Besi, Kuala Lumpur',
    road: { year: '2019', label: 'Royal Military College' },
    logo: { slug: 'rmc', monogram: 'RMC' },
    period: '2019 – 2020',
  },
  {
    title: 'SMS Sultan Abdul Halim (Jenan)',
    school: 'Sekolah Menengah Sains Sultan Abdul Halim, Jitra, Kedah',
    road: { year: '2016', label: 'SMS Sultan Abdul Halim' },
    logo: { slug: 'smsah', monogram: 'SMS' },
    period: '2016 – 2018',
  },
]

export const experience = [
  {
    role: 'Junior Cloud Engineer',
    company: 'Stampede Solutions Sdn. Bhd.',
    logo: { slug: 'stampede', monogram: 'SS' },
    road: { year: '2026', label: 'Stampede Solutions' },
    period: 'Oct 2026 – Present',
    current: true,
    kind: 'Work',
    points: [
      'Supported Linux server and virtual machine configuration in a Proxmox environment',
      'Deployed and configured Apache and PHP for Volare’s internal web server',
      'Assisted with MySQL server installation, configuration and troubleshooting',
      'Deployed and executed hardening scripts on Linux servers to apply security configurations',
      'Troubleshot server, web service and database configuration issues',
    ],
    stack: ['Linux', 'Proxmox', 'Apache', 'PHP', 'MySQL'],
  },
  {
    role: 'Data Center Engineer',
    company: 'Exabytes Sdn. Bhd.',
    logo: { slug: 'exabytes', monogram: 'EX' },
    road: { year: '2026', label: 'Exabytes' },
    note: 'KYOUTH Development Programme',
    kind: 'Work',
    period: 'Sep 2026 – Oct 2026',
    points: [
      'Performed data center operations, including server and network equipment installation',
      'Installed and maintained server racks, structured cabling and network infrastructure',
      'Monitored data center infrastructure and troubleshot hardware and network issues',
      'Supported daily data center operations, infrastructure maintenance and technical documentation',
    ],
    stack: ['Server racks', 'Structured cabling', 'Monitoring'],
  },
  {
    role: 'Cloud Support Intern',
    company: 'Kenanga Investment Bank Berhad',
    logo: { slug: 'kenanga', monogram: 'K', wide: true },
    road: { year: '2026', label: 'Kenanga' },
    kind: 'Internship',
    period: 'Mar 2026 – Jul 2026',
    points: [
      'Assisted in deploying and managing AWS services including Amazon EC2, Amazon S3 and containerized workloads within production environments',
      'Performed remediation activities and incident prioritization in accordance with BNM RMiT guidelines to maintain the stability, security and availability of cloud infrastructure and services',
      'Supported cloud cost management by reviewing service usage, monitoring resource consumption and assisting cost optimization so spending stayed within allocated budget limits',
      'Maintained and monitored alarms and alerts on cloud workload services for operational reliability and timely issue response',
      'Participated in AWS projects including cloud migrations, infrastructure upgrades and new service enablement',
      'Updated and maintained infrastructure documentation including system configurations, asset inventories, operational procedures and deployment records',
    ],
    stack: ['EC2', 'S3', 'Containers', 'CloudWatch', 'BNM RMiT'],
  },
  {
    role: 'Network Technician Intern',
    company: 'Nurkamal Network Sdn. Bhd.',
    logo: { slug: 'nurkamal', monogram: 'NN' },
    road: { year: '2023', label: 'Nurkamal Network' },
    kind: 'Internship',
    period: 'Sep 2023 – Mar 2024',
    points: [
      'Performed structured cabling including UTP/Ethernet installation, trunking, cable tagging and cable management with half-moon holders and Krone blocks',
      'Supported network device deployment by configuring access points, assigning IP addresses and setting VLANs across multiple floors',
      'Conducted site surveys to locate and tag AP positions floor by floor, with accurate documentation for installation teams',
      'Observed fiber optic splicing, 6-core fiber installation and PABX troubleshooting to understand enterprise communication systems',
      'Installed and configured point-to-point wireless devices, including basic IP configuration and alignment readiness',
      'Practiced core technician skills including RJ-45 crimping, faceplate installation, trunking fitting and onsite troubleshooting',
    ],
    stack: ['VLANs', 'Access points', 'Fiber', 'Point-to-point wireless'],
  },
]

export const projects = [
  {
    id: 'aws-wordpress',
    title: 'Cloud-based WordPress architecture on AWS',
    area: 'Cloud infrastructure and architecture',
    summary: 'A WordPress site on AWS with public and private subnets, a load balancer, containers on EC2 and Amazon RDS',
    points: [
      'Designed and deployed a WordPress architecture on AWS using Amazon EC2, Amazon RDS, Amazon S3, VPC, ALB, Route 53 and containerized workloads',
      'Configured public and private subnets, security groups, a NAT Gateway and routing to support a secure and scalable deployment',
      'Deployed and managed WordPress workloads, integrating database connectivity, storage services and networking configuration',
      'Applied practices for high availability, service monitoring, cost awareness and basic security configuration',
    ],
    stack: ['EC2', 'RDS', 'S3', 'VPC', 'ALB', 'Route 53', 'Docker'],
  },
  {
    id: 'cowrie',
    title: 'Clustering analysis of Cowrie honeypot logs',
    area: 'Final year project · Network security and data analysis',
    summary: 'K-Means clustering of honeypot sessions to group attacker behavior',
    points: [
      'Collected and preprocessed Cowrie honeypot attack logs, performing session reconstruction and feature extraction in Python',
      'Applied K-Means clustering with PCA to identify and visualize distinct attacker behavior patterns from network activity features',
    ],
    stack: ['Python', 'K-Means', 'PCA', 'Cowrie'],
  },
  {
    id: 'elk',
    title: 'Cybersecurity investigation using ELK SIEM',
    area: 'Network security and data analysis',
    summary: 'Threat detection and root-cause analysis from SIEM logs',
    points: [
      'Performed SIEM log analysis to detect threats, identify root causes and deliver escalation reports that improved cyber incident response',
    ],
    stack: ['Elasticsearch', 'Logstash', 'Kibana'],
  },
]

export const skills = [
  {
    group: 'Cloud and infrastructure',
    items: [
      { label: 'AWS', value: 'EC2, S3, RDS, VPC, Route 53, IAM, CloudWatch, ECS, ECR, Load Balancer' },
      { label: 'Containers', value: 'Docker' },
      { label: 'Cloud networking', value: 'Public and private subnets, NAT Gateway, route tables, security groups' },
      { label: 'Deployment', value: 'WordPress deployment, cloud architecture design, basic cost optimization and monitoring' },
    ],
  },
  {
    group: 'Networking and security',
    items: [
      { label: 'Security testing', value: 'Kali Linux for security testing, basic penetration testing and network reconnaissance' },
      { label: 'Physical network', value: 'Structured cabling, rack setup, patch panels, AP configuration and VLANs' },
    ],
  },
  {
    group: 'Productivity and documentation',
    items: [
      { label: 'Office', value: 'Microsoft Word, Excel, PowerPoint' },
      { label: 'Writing', value: 'Documentation, logbooks and technical reports written clearly' },
    ],
  },
]

export const certifications = [
  {
    title: 'CCNA: Introduction to Networks',
    issuer: 'Cisco',
    points: [
      'Built and configured basic LAN topologies, IPv4 and IPv6 addressing, subnetting and device configuration with Cisco IOS',
    ],
  },
  {
    title: 'CCNA: Switching, Routing and Wireless Essentials',
    issuer: 'Cisco',
    points: [
      'Configured VLANs, inter-VLAN routing, static routing and basic OSPF in simulated enterprise environments',
      'Implemented WLAN configuration and applied network security concepts such as port security and ACLs',
    ],
  },
]

export const accomplishments = [
  {
    title: 'UUM CTF',
    result: '2nd place',
    period: 'Apr 2025',
    text: 'Problem solving across networking, Linux and cybersecurity challenges',
  },
  {
    title: 'Cyber Quest CTF',
    result: 'Completed',
    period: 'Nov 2025',
    text: 'Hands-on problem solving, threat analysis and collaborative cybersecurity challenges',
  },
]

export const languages = [
  { name: 'Malay', level: 'Native' },
  { name: 'English', level: 'Expert' },
  { name: 'Japanese', level: 'Beginner' },
]

export const stats = [
  { value: '4', label: 'roles since 2023' },
  { value: '3', label: 'projects' },
  { value: '2', label: 'Cisco CCNA courses' },
  { value: '3.39', label: 'degree CGPA' },
]

export const focusAreas = [
  {
    title: 'Cloud',
    text: 'AWS operations in a regulated bank: EC2, S3 and containers in production, alarms, remediation under BNM RMiT and cost reviews',
  },
  {
    title: 'Infrastructure',
    text: 'Linux and Proxmox servers, Apache, PHP and MySQL, hardening scripts, and racking servers on a data center floor',
  },
  {
    title: 'Network and security',
    text: 'VLANs, access points and structured cabling, two CCNA courses, SIEM investigations and 2nd place at UUM CTF',
  },
]

export const personal = {
  club: {
    name: 'Manchester United',
    season: 'Season 2026/27',
    ground: 'Old Trafford',
    address: 'Sir Matt Busby Way, Manchester',
    text: 'Outside work I follow Manchester United. Whatever the result, matchdays are for the Reds.',
    chant: 'Glory, glory, Man United',
  },
  ctf: {
    title: 'Capture the flag tourneys',
    figure: '2nd place',
    text: 'At UUM CTF in April 2025, and I competed with a team at Cyber Quest CTF in November 2025',
  },
  japanese: {
    title: 'Learning Japanese',
    phrase: '日本語を勉強中',
    text: 'Studying Japanese at beginner level, alongside native Malay and English',
  },
}

// The stack, top to bottom: from the cloud down to the rack
export const stackLayers = [
  {
    layer: 'L4',
    title: 'Cloud',
    usedAt: 'Kenanga Investment Bank · WordPress on AWS project',
    items: ['AWS', 'EC2', 'S3', 'RDS', 'VPC', 'Route 53', 'IAM', 'CloudWatch', 'ECS', 'Load Balancer'],
  },
  {
    layer: 'L3',
    title: 'Servers and containers',
    usedAt: 'Stampede Solutions · WordPress on AWS project',
    items: ['Docker', 'Linux', 'Proxmox', 'Apache', 'PHP', 'MySQL', 'WordPress'],
  },
  {
    layer: 'L2',
    title: 'Security and data',
    usedAt: 'Final year project · ELK SIEM project · security testing',
    items: ['Kali Linux', 'Elasticsearch', 'Logstash', 'Kibana', 'Python'],
  },
  {
    layer: 'L1',
    title: 'Network and hardware',
    usedAt: 'Nurkamal Network · Exabytes · Cisco CCNA',
    items: ['Cisco', 'VLANs', 'Access points', 'Structured cabling', 'Fiber', 'Server racks'],
  },
]
