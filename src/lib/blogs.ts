export interface BlogSummary {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  href: string;
}

export const blogs: BlogSummary[] = [
  {
    id: "infosys-exam-system-failure-analysis",
    title: "When 10,000 Students Hit Start at the Same Second",
    excerpt:
      "An incident analysis of the Infosys Off Campus Hiring exam outage and what resilient systems need to do differently.",
    date: "May 2026",
    tag: "Distributed Systems Incident Analysis",
    href: "/blogs/Infosys_exam_system_failure_analysis.html",
  },
];
