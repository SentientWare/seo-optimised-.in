"use client";

import React, { useState, useMemo } from "react";

interface Job {
  id: number;
  title: string;
  location: string;
  dept: string;
  type: string;
}

export default function CareersPage() {
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [selectedDept, setSelectedDept] = useState("All Departments");
  const [applyJob, setApplyJob] = useState<Job | null>(null);
  const [applySuccess, setApplySuccess] = useState(false);
  const [applyForm, setApplyForm] = useState({ name: "", email: "", resumeName: "" });

  const jobs: Job[] = [
    {
      id: 1,
      title: "Senior AI Research Engineer",
      location: "San Francisco, USA",
      dept: "Engineering",
      type: "Full-Time",
    },
    {
      id: 2,
      title: "Cloud Infrastructure Lead",
      location: "Pune, India",
      dept: "Engineering", // mapped to Engineering / Operations
      type: "Full-Time",
    },
    {
      id: 3,
      title: "Principal UX Designer",
      location: "London, UK",
      dept: "Design",
      type: "Hybrid",
    },
  ];

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesLoc =
        selectedLocation === "All Locations" || job.location.includes(selectedLocation.split(",")[0]);
      const matchesDept =
        selectedDept === "All Departments" || job.dept === selectedDept;
      return matchesLoc && matchesDept;
    });
  }, [selectedLocation, selectedDept]);

  const handleApplySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!applyForm.name || !applyForm.email) {
      alert("Please fill out your Name and Email.");
      return;
    }
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: applyForm.name,
          email: applyForm.email,
          message: `Job Application for: ${applyJob?.title}\nResume uploaded: ${applyForm.resumeName || 'None'}`,
          company: 'Job Applicant',
        }),
      });

      if (response.ok) {
        setApplySuccess(true);
      } else {
        const result = await response.json();
        alert(result.error || "Failed to submit application.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-enterprise-blue-dark text-white py-24">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-50"
            alt="Sentientware Careers"
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-enterprise-blue-dark via-enterprise-blue-dark/80 to-transparent"></div>
        </div>
        <div className="relative z-10 px-6 md:px-margin-desktop max-w-container-max-width mx-auto flex flex-col justify-center w-full">
          <div className="space-y-6 max-w-2xl text-left">
            <div className="flex">
              <span className="inline-block px-4 py-1.5 bg-secondary-container/90 text-on-secondary-container text-xs font-bold tracking-[0.2em] uppercase rounded shadow-sm backdrop-blur-sm">
                Join Sentientware
              </span>
            </div>
            <h1 className="font-display-xl text-4xl md:text-5xl text-white leading-tight font-bold">
              Unleash Your Full <br />
              <span className="text-metallic-gold-light">Potential</span>
            </h1>
            <p className="font-body-lg text-base md:text-lg text-white/80 max-w-xl leading-relaxed">
              Join a global team of visionaries engineering the future of enterprise intelligence. Your next breakthrough starts here.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-6">
              <a
                className="px-8 py-4 bg-secondary-container text-on-secondary-container font-label-bold rounded shadow-lg hover:scale-105 transition-all text-center text-sm"
                href="#job-board"
              >
                View Openings
              </a>
              <a
                className="px-8 py-4 border border-white text-white font-label-bold rounded hover:bg-white/10 transition-all text-center text-sm"
                href="#culture"
              >
                Our Culture
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="py-24 bg-white" id="culture">
        <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-3xl md:text-headline-lg text-primary mb-4">
              Engineering Excellence in Culture
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Innovation Card */}
            <div className="p-10 border border-surface-grey bg-surface-bright rounded-xl hover:shadow-xl transition-all group relative overflow-hidden bento-card">
              <div className="absolute top-0 left-0 h-1 bg-secondary w-0 transition-all duration-500 accent-border"></div>
              <span className="material-symbols-outlined text-secondary text-5xl mb-6 block">lightbulb</span>
              <h3 className="font-headline-md text-headline-md text-primary mb-4">Limitless Innovation</h3>
              <p className="text-on-surface-variant leading-relaxed text-sm font-body-md">
                We don&apos;t just solve problems; we redefine what&apos;s possible with AI and enterprise engineering. Every voice has the power to spark the next revolution.
              </p>
            </div>
            {/* Growth Card */}
            <div className="p-10 border border-surface-grey bg-surface-bright rounded-xl hover:shadow-xl transition-all group relative overflow-hidden bento-card">
              <div className="absolute top-0 left-0 h-1 bg-secondary w-0 transition-all duration-500 accent-border"></div>
              <span className="material-symbols-outlined text-secondary text-5xl mb-6 block">trending_up</span>
              <h3 className="font-headline-md text-headline-md text-primary mb-4">Continuous Growth</h3>
              <p className="text-on-surface-variant leading-relaxed text-sm font-body-md">
                Our &apos;University of Excellence&apos; provides tailored pathways for professional development, certifications, and global mobility.
              </p>
            </div>
            {/* Impact Card */}
            <div className="p-10 border border-surface-grey bg-surface-bright rounded-xl hover:shadow-xl transition-all group relative overflow-hidden bento-card">
              <div className="absolute top-0 left-0 h-1 bg-secondary w-0 transition-all duration-500 accent-border"></div>
              <span className="material-symbols-outlined text-secondary text-5xl mb-6 block">public</span>
              <h3 className="font-headline-md text-headline-md text-primary mb-4">Global Impact</h3>
              <p className="text-on-surface-variant leading-relaxed text-sm font-body-md">
                Collaborate with Fortune 500 companies to deliver engineering solutions that impact millions of lives across 20+ countries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filterable Job Board */}
      <section className="py-24 bg-surface-container-low scroll-mt-20" id="job-board">
        <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="font-headline-lg text-3xl md:text-headline-lg text-primary mb-2">
                Open Opportunities
              </h2>
              <p className="text-on-surface-variant font-body-md text-sm">
                Find your place in our global engineering collective.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 w-full md:w-auto">
              <select
                className="px-4 py-2 rounded border border-outline-variant bg-white text-on-surface focus:ring-1 focus:ring-primary focus:border-primary text-sm flex-1 md:flex-none"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                <option>All Locations</option>
                <option>San Francisco, USA</option>
                <option>Pune, India</option>
                <option>London, UK</option>
              </select>
              <select
                className="px-4 py-2 rounded border border-outline-variant bg-white text-on-surface focus:ring-1 focus:ring-primary focus:border-primary text-sm flex-1 md:flex-none"
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
              >
                <option>All Departments</option>
                <option>Engineering</option>
                <option>Design</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            {filteredJobs.length === 0 ? (
              <div className="text-center py-16 bg-white rounded border border-surface-grey shadow-sm">
                <span className="material-symbols-outlined text-6xl text-outline mb-2">work_off</span>
                <h4 className="font-headline-md text-primary">No open roles match your filters</h4>
                <button
                  onClick={() => {
                    setSelectedLocation("All Locations");
                    setSelectedDept("All Departments");
                  }}
                  className="mt-4 px-6 py-2 bg-primary text-white rounded font-label-bold text-sm"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white p-6 md:p-8 rounded-xl border border-surface-grey flex flex-col md:flex-row md:items-center justify-between hover:shadow-md transition-all group hover:-translate-y-1 duration-300"
                >
                  <div>
                    <h4 className="font-headline-md text-xl md:text-headline-md text-primary mb-2 group-hover:text-secondary transition-colors font-semibold">
                      {job.title}
                    </h4>
                    <div className="flex flex-wrap gap-4 text-on-surface-variant text-caption uppercase tracking-wider font-bold text-[10px]">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">location_on</span> {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">work</span> {job.dept}
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">schedule</span> {job.type}
                      </span>
                    </div>
                  </div>
                  <div className="mt-6 md:mt-0">
                    <button
                      onClick={() => {
                        setApplyJob(job);
                        setApplySuccess(false);
                        setApplyForm({ name: "", email: "", resumeName: "" });
                      }}
                      className="w-full md:w-auto px-8 py-3 bg-enterprise-blue-dark text-on-primary font-label-bold rounded hover:bg-primary-container transition-all text-sm cursor-pointer shadow-sm"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-enterprise-blue-dark overflow-hidden relative text-white">
        <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop relative z-10 w-full">
          <h2 className="font-headline-lg text-3xl md:text-headline-lg text-on-primary mb-16 text-center">
            Voices of Innovation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-primary-container p-8 md:p-12 rounded-2xl relative border border-white/5">
              <span className="material-symbols-outlined text-6xl text-secondary opacity-20 absolute top-8 left-8">
                format_quote
              </span>
              <p className="font-body-lg text-body-md md:text-body-lg text-on-primary-container mb-8 italic relative z-10 leading-relaxed text-sm md:text-base">
                &quot;Joining Sentientware wasn&apos;t just a career move; it was an entry into a global lab of thinkers. Here, I&apos;m empowered to lead complex AI migrations for clients who are literally changing the industry landscape.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-secondary shrink-0">
                  <img
                    className="w-full h-full object-cover"
                    alt="Elena Rodriguez"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBK5JIKsf9PWe9jwItC-eEyLUBk1Osujgf1OKrIk07y-OzGziIZFZrGAuSv1We0VnkxFfK363TCu9o-A1Syua8su6_6AIwWDqhHp7cepQtbmD8VHI5twPCLPK7JX8t5wErdhV6khYndEIZj131LlOnzLsBZxFTi2WrBfhPujgOdE7FvY2PIxDuY_TeQUVimlwR3AcTHu1bAXjInp-4ZFhIi0HiLW3PcCCENNpgkekoTspMU7CYtaQ8BVvXiFfYTXG_f_jOyOiNUXQRw"
                  />
                </div>
                <div>
                  <div className="font-label-bold text-on-primary text-base font-bold">Elena Rodriguez</div>
                  <div className="text-on-primary-container text-caption uppercase tracking-wider text-[10px]">
                    Lead AI Engineer, Barcelona
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-primary-container p-8 md:p-12 rounded-2xl relative border border-white/5">
              <span className="material-symbols-outlined text-6xl text-secondary opacity-20 absolute top-8 left-8">
                format_quote
              </span>
              <p className="font-body-lg text-body-md md:text-body-lg text-on-primary-container mb-8 italic relative z-10 leading-relaxed text-sm md:text-base">
                &quot;The culture of &apos;Engineering Excellence&apos; isn&apos;t just a slogan—it&apos;s how we code, how we collaborate, and how we care for our colleagues. The mentorship program here is world-class.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-secondary shrink-0">
                  <img
                    className="w-full h-full object-cover"
                    alt="Arjun Mehta"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_kT1c2mWorQAHgW4oiAvN3ndUVPSSuNtlIHdBFBHLuKMdN0Ey6plAWfuXkYpCCw4d7j7kRew69H5kPoz_PPNQ5u60GitWeV3u885EBc3BxWvhqeZ9yVsgyDydCRf48BsxPkWLfdzOPUlVdT6dh21-vF4k_dqfaaxWtZG70rYsqrVWHRd81V9IpmZ9OBjsTQTQKNd9OQLM-Hxh8lsf5UuxjNpDTUXjMGsqjUn5JepDPPV9cnZAKjHZ3n7eL-bYvv7U1PP8f-DW66Ka"
                  />
                </div>
                <div>
                  <div className="font-label-bold text-on-primary text-base font-bold">Arjun Mehta</div>
                  <div className="text-on-primary-container text-caption uppercase tracking-wider text-[10px]">
                    Solution Architect, Pune
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <h2 className="font-headline-lg text-3xl md:text-headline-lg text-primary mb-8">
                Perks That Fuel Precision
              </h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-surface-container rounded-full flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined">health_and_safety</span>
                  </div>
                  <div>
                    <h5 className="font-label-bold text-lg text-primary mb-1">Global Well-being</h5>
                    <p className="text-on-surface-variant text-sm font-body-md">
                      Comprehensive health, dental, and mental wellness coverage tailored to your local region.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-surface-container rounded-full flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined">school</span>
                  </div>
                  <div>
                    <h5 className="font-label-bold text-lg text-primary mb-1">Tuition & Learning</h5>
                    <p className="text-on-surface-variant text-sm font-body-md">
                      Annual stipend for certifications, degrees, and industry-leading workshops.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-surface-container rounded-full flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined">home_work</span>
                  </div>
                  <div>
                    <h5 className="font-label-bold text-lg text-primary mb-1">Work From Anywhere</h5>
                    <p className="text-on-surface-variant text-sm font-body-md">
                      Hybrid and remote-first policies designed to balance focus with collaboration.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-surface-container rounded-full flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined">payments</span>
                  </div>
                  <div>
                    <h5 className="font-label-bold text-lg text-primary mb-1">Competitive Equity</h5>
                    <p className="text-on-surface-variant text-sm font-body-md">
                      Stock options and performance bonuses that ensure you grow with the company.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img
                  className="rounded-2xl w-full h-64 object-cover shadow-lg"
                  alt="Collaborative workspace"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuncNl3wNBZDQP1tnMhRHVoI8PnMAhARq89EU2pVjgkDc3rFju-dksXodKDfqR7Wh4iwOA_KVg7IpZSk6IQcieBnYY8DqrzfnrCwwrqbCPGhWWJTdps3WDdW5bBLETQ-NmtFUkh-CcGH4opnYXD6ytBxOmoatQX0NAz99OMOwwEH7LhmaPhU_1_5rHndCXFP7Ee6agZllTolmCwf8Gq6D7yw_zC48eRb2zogl5YMX4pK9IJs_uRc7gMhLZLI5ukwnOXnyp_WBl2yVS"
                />
                <img
                  className="rounded-2xl w-full h-48 object-cover shadow-lg"
                  alt="Developer workstation"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_i7yDZQCAuiClGCsmPXNT8Vf7R32Ia8AWybFwiG3fBex-nPlN-_ETqfC6Vx5uvWDk50UYCZTBkLkXhtpQKeyJafhDQIIk33A_3OfRAmtsxBrOONAEQi3xf-i3xScA-gDzydz8yAjR4D8jk3Ov51HvmoxY2A6hbh_q1LRVQJAsku5_Co-1OT30J-TD_ZyqhWo0AhGn40iSOow9KPsH5DMTHLOR-bH7fbhQ5BnllwEab9frLWnsa5sKNibhdPFDEDOnzo-3Jl3qsL-a"
                />
              </div>
              <div className="space-y-4">
                <img
                  className="rounded-2xl w-full h-48 object-cover shadow-lg"
                  alt="Company cafeteria"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCFbjEXnOZ1nINLShBZLQVdCk-Fo3bE02mC_C0Oq_sH-5plu42qHPy7j6fF8Ag790Khjal_TPcjCEZ8e8NtFr_saJBvgtg8nwkkFUU1n6fyk5NNLPfrxkE1goo8C3kkZthejilQi8lUVW0PCu882nWX4tLyQZsG-49VoqF8vpEC9KQPNoxGsczaptTCWb7H9c7lgxrLYyWyM-jS_ou84FWvp956_kkjm-GxArjGwToKmNu6xQecAoDQFfn8uXrtWriIF-2dgDjyTPd"
                />
                <img
                  className="rounded-2xl w-full h-64 object-cover shadow-lg"
                  alt="Office interior"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA57hyipakK4ZJLhBW-l3k0ow2ivdtY0LZOK2L8n6L9cIRUSGP1SiKk53cnIVuAuwhfO1scB1QaedQr90c22a-j7UYXcpiB4H3YfSGaocSaqkrMAVo3tqAcRarTE6i_KYx35Bd0EkbSQL8sWevI5GpuH-kSmvHh7RaaCAWN_6rXThX56zPQlXIFZdvStWHotmYP5yMOnM4WEhVanetSUfawYstfvaLQz36a-m2b_y71XVjpFZHozhf0DMyFA5LpJZ6W3pz6KE4TbOm8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Dialog Modal */}
      {applyJob && (
        <div className="fixed inset-0 z-50 bg-enterprise-blue-dark/90 flex items-center justify-center p-6 text-black">
          <div className="relative w-full max-w-md bg-white p-8 rounded-xl shadow-2xl border border-surface-grey">
            <button
              onClick={() => setApplyJob(null)}
              className="absolute top-4 right-4 text-text-muted hover:text-primary"
              aria-label="Close dialog"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            {applySuccess ? (
              <div className="text-center py-8 space-y-4">
                <span className="material-symbols-outlined text-6xl text-metallic-gold-light animate-bounce">
                  task_alt
                </span>
                <h3 className="font-headline-md text-primary">Application Received!</h3>
                <p className="text-body-md text-sm text-text-muted">
                  Thank you, {applyForm.name}. Your application for <strong>{applyJob.title}</strong> in {applyJob.location} has been successfully submitted. We will email you at {applyForm.email}.
                </p>
                <button
                  onClick={() => setApplyJob(null)}
                  className="w-full py-3 bg-enterprise-blue-dark text-white rounded font-label-bold text-sm mt-4"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="space-y-6">
                <div>
                  <h3 className="font-headline-md text-2xl text-primary font-bold">Apply for Position</h3>
                  <p className="text-caption text-text-muted uppercase tracking-wider font-semibold">
                    {applyJob.title} — {applyJob.location}
                  </p>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-text-muted mb-2">FULL NAME</label>
                    <input
                      required
                      type="text"
                      className="w-full border border-surface-grey focus:ring-1 focus:ring-primary focus:border-primary py-3 px-4 rounded text-sm outline-none"
                      placeholder="Jane Doe"
                      value={applyForm.name}
                      onChange={(e) => setApplyForm((prev) => ({ ...prev, name: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-text-muted mb-2">EMAIL ADDRESS</label>
                    <input
                      required
                      type="email"
                      className="w-full border border-surface-grey focus:ring-1 focus:ring-primary focus:border-primary py-3 px-4 rounded text-sm outline-none"
                      placeholder="jane.doe@example.com"
                      value={applyForm.email}
                      onChange={(e) => setApplyForm((prev) => ({ ...prev, email: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-text-muted mb-2">RESUME UPLOAD</label>
                    <div className="border-2 border-dashed border-outline-variant hover:border-primary transition-colors py-8 rounded text-center cursor-pointer">
                      <span className="material-symbols-outlined text-4xl text-outline mb-2">upload_file</span>
                      <p className="text-caption text-text-muted font-semibold">
                        Drag and drop your PDF or select a file
                      </p>
                      <input
                        type="file"
                        className="hidden"
                        id="resume-file"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            setApplyForm((prev) => ({ ...prev, resumeName: file.name }));
                          }
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => document.getElementById("resume-file")?.click()}
                        className="mt-2 text-xs font-label-bold text-secondary underline"
                      >
                        {applyForm.resumeName ? applyForm.resumeName : "Select File"}
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-enterprise-blue-dark text-white font-bold rounded hover:bg-primary transition-all text-sm"
                >
                  Submit Application
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
