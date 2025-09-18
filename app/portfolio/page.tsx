"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Play, FileText, Headphones } from "lucide-react";
import Link from "next/link";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}

      {/* Hero Section */}
      <section className="bg-[#0A211F] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-balance">Portfolio</h1>
          {/* <p className="text-xl text-gray-300 max-w-3xl mx-auto text-pretty">
            The portfolio is now a single page featuring all resources, some
            highlighted with detail, others listed, allowing visitors to scan
            quickly, stay engaged
          </p> */}
        </div>
      </section>

      {/* Featured Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#0A211F]">
            Featured Works
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-emerald-600 font-semibold mb-2">
                AI Event Storytelling
              </div>
              <div className="text-sm text-gray-600 mb-4">Featured Work</div>
              <h3 className="text-3xl font-bold mb-6 text-[#0A211F]">
                Google Cloud Next25
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                We developed high-impact pre and post event storytelling around
                AI innovation themes, enabling key announcements and driving
                global engagement from founders, developers, and enterprise
                leaders, for Google Cloud Next 25.
              </p>
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
                View page <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-[#0A211F] mb-2">
                  Google Cloud Next25
                </div>
                <div className="text-gray-600">AI Event Storytelling</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reports */}
      <section className="py-20 bg-[#0A211F] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Reports</h2>

          <Card className="bg-slate-800 border-slate-700 text-white max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <FileText className="h-8 w-8 text-emerald-400 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    Future of AI: Perspectives for Startups 2025
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    We authored a flagship Google Cloud report consisting of AI
                    predictions, founder-focused advice, and perspectives from
                    leaders like Amin Vahdat (VP/GM ML, Systems, and Cloud AI,
                    Google Cloud), crafting a resource that informs, inspires,
                    and converts.
                  </p>
                  <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
                    Read report <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Shaping AI Voices - Podcasts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#0A211F]">
            Shaping AI Voices
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Headphones className="h-6 w-6 text-emerald-500 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#0A211F]">
                      Harrison Chase – LangChain
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Developed contextual positioning and promotional copy for
                      a founder discussion on LangChain, exploring its role in
                      powering advanced AI workflows.
                    </p>
                    <Button
                      variant="outline"
                      className="border-emerald-500 text-emerald-600 hover:bg-emerald-50 bg-transparent"
                    >
                      Listen on This Week in Startups{" "}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Headphones className="h-6 w-6 text-emerald-500 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#0A211F]">
                      Amin Vahdat – Google Cloud
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Produced supporting narrative highlighting Amin Vahdat's
                      vision on AI infrastructure scale and innovation in Google
                      Cloud's thought leadership series.
                    </p>
                    <Button
                      variant="outline"
                      className="border-emerald-500 text-emerald-600 hover:bg-emerald-50 bg-transparent"
                    >
                      Watch on YouTube <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4 text-[#0A211F]">
              More Podcasts:
            </h4>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white px-4 py-2 rounded-full shadow-sm text-gray-700">
                Jia Li – LiveX
              </span>
              <span className="bg-white px-4 py-2 rounded-full shadow-sm text-gray-700">
                David Friedberg – Ohalo Genetics
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts & Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#0A211F]">
            Blog Posts & Case Studies
          </h2>
          <h3 className="text-2xl font-semibold text-center mb-12 text-gray-700">
            Featured Stories
          </h3>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-4 text-[#0A211F]">
                  AssemblyAI – Scaling Speech AI with Cloud & Vertex AI
                </h4>
                <p className="text-gray-600 mb-4">
                  Nunu Consulting curated storytelling for a case study
                  showcasing 75% cost savings, 20-min model evaluations (from
                  24h), and 10x capacity gains after migrating to Google Cloud.
                </p>
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
                  View Case Study <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-4 text-[#0A211F]">
                  Efficiency Engine – Vertex AI Enables Rapid Results
                </h4>
                <p className="text-gray-600 mb-4">
                  We structured this article on three startups accelerating
                  outcomes using Vertex AI, making technical benefits tangible
                  for business impact.
                </p>
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
                  Read the Article <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4 text-[#0A211F]">
              More Stories:
            </h4>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-gray-100 px-4 py-2 rounded-full text-gray-700">
                Temporal Technologies
              </span>
              <span className="bg-gray-100 px-4 py-2 rounded-full text-gray-700">
                A Gift of Perspective – Founders' Defining Moments
              </span>
              <span className="bg-gray-100 px-4 py-2 rounded-full text-gray-700">
                Chainguard
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="py-20 bg-[#0A211F] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Videos</h2>
          <h3 className="text-2xl font-semibold text-center mb-12 text-gray-300">
            Featured Videos
          </h3>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-slate-800 border-slate-700 text-white hover:bg-slate-700 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Play className="h-6 w-6 text-emerald-400 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold mb-2">Ron Kimchi – Eon</h4>
                    <p className="text-gray-300 mb-4">
                      Produced narrative for Eon's AI-driven autonomous backup
                      platform, highlighting analytics capabilities and
                      measurable cost and labor savings.
                    </p>
                    <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
                      Watch on YouTube <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 text-white hover:bg-slate-700 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Play className="h-6 w-6 text-emerald-400 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold mb-2">
                      Ryan Cox – Temporal
                    </h4>
                    <p className="text-gray-300 mb-4">
                      Crafted positioning narrative for Temporal's orchestration
                      platform, showcasing developer productivity gains and
                      operational resilience.
                    </p>
                    <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
                      Watch on YouTube <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">More Videos:</h4>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-slate-700 px-4 py-2 rounded-full text-gray-300">
                NoBroker
              </span>
              <span className="bg-slate-700 px-4 py-2 rounded-full text-gray-300">
                Albo
              </span>
              <span className="bg-slate-700 px-4 py-2 rounded-full text-gray-300">
                Wotter
              </span>
              <span className="bg-slate-700 px-4 py-2 rounded-full text-gray-300">
                Inspira
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
}
