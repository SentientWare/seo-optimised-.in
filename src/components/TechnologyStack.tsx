"use client";

import React, { useState } from "react";
import Link from "next/link";

type Tab = "Data & AI Engineering" | "Cloud Engineering" | "Platform & Software Engineering";

export default function TechnologyStack() {
  const [activeTab, setActiveTab] = useState<Tab>("Platform & Software Engineering");

  const tabs: Tab[] = ["Data & AI Engineering", "Cloud Engineering", "Platform & Software Engineering"];

  const dataAiLogos = [
    { name: "Python", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "SQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" },
    { name: "TensorFlow", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
    { name: "PyTorch", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" },
    { name: "Scikit-learn", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" },
    { name: "Hugging Face", url: "https://cdn.simpleicons.org/huggingface/FFD21E" },
    { name: "OpenAI", url: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" },
    { name: "Google Gemini", url: "https://cdn.simpleicons.org/googlegemini/8E75B2" },
    { name: "Anthropic", url: "https://cdn.simpleicons.org/anthropic/191919" },
    { name: "LangChain", url: "https://cdn.simpleicons.org/langchain/1C3C3C" },
    { name: "Apache Spark", url: "https://cdn.simpleicons.org/apachespark/E25A1C" },
    { name: "Apache Kafka", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg" },
    { name: "Apache Airflow", url: "https://cdn.simpleicons.org/apacheairflow/017CEE" },
    { name: "Pandas", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
    { name: "NumPy", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" },
    { name: "Pinecone", url: "https://icon.horse/icon/pinecone.io" },
  ];

  const cloudLogos = [
    { name: "AWS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "Microsoft Azure", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" },
    { name: "Google Cloud", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" },
    { name: "Oracle Cloud", url: "https://www.vectorlogo.zone/logos/oracle/oracle-icon.svg" },
    { name: "IBM Cloud", url: "https://www.vectorlogo.zone/logos/ibm/ibm-icon.svg" },
    { name: "DigitalOcean", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/digitalocean/digitalocean-original.svg" },
  ];

  const platformLogos = [
    { name: "Node.JS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "Java", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
    { name: "Angular", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" },
    { name: "React.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Spring Boot", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
    { name: "Docker", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    { name: "Kubernetes", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg" },
    { name: "Jenkins", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg" },
    { name: "Terraform", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg" },
    { name: "PostgreSQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
    { name: "Redis", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
    { name: "Maven", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg" },
    { name: "Flutter", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },
    { name: "Firebase", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg" },
    { name: "Supabase", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
  ];

  return (
    <section className="py-24 bg-white text-slate-800">
      <div className="max-w-container-max-width mx-auto px-6 md:px-margin-desktop">
        
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-3xl md:text-5xl font-bold text-[#0d162a]">Technologies We Master</h2>
        </div>

        {/* Tabs Header */}
        <div className="flex flex-col md:flex-row border-b border-gray-200 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 md:py-4 text-center font-semibold text-base md:text-lg transition-colors border-b-2 ${
                activeTab === tab 
                  ? "border-blue-900 text-blue-900" 
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="py-12 animate-fade-in">
          <div className="flex flex-wrap justify-center gap-12 md:gap-16">
            {(activeTab === "Data & AI Engineering" ? dataAiLogos : activeTab === "Cloud Engineering" ? cloudLogos : platformLogos).map((logo, index) => (
              <div key={index} className="flex flex-col items-center gap-4 group">
                <div className="h-12 w-12 md:h-16 md:w-16 flex items-center justify-center transition-transform group-hover:scale-110">
                  <img src={logo.url} alt={logo.name} className="max-h-full max-w-full object-contain" />
                </div>
                <span className="text-sm md:text-base font-medium text-gray-600">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
