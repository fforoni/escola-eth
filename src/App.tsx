import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Star, Check, Mail, Phone, MapPin, ArrowUp, Zap, Shield, Users, TrendingUp, Globe, BookOpen, Award, Building, Coins, Lock, Network, Target, BarChart3, Rocket, GraduationCap, FileCheck, Briefcase, Home } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const features = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Education Layer",
      description: "NFT-based academic credentials from K-12 through PhD with fraud-proof verification and cross-institutional portability.",
      domains: "escola.eth → faculdade.eth → universidade.eth"
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Identity Layer", 
      description: "Self-sovereign digital identity for 210M Brazilians with government-grade security and user ownership.",
      domains: "nome.eth + bairro.eth + cidade.eth"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Professional Layer",
      description: "Verified career credentials and professional licensing with seamless job market integration.",
      domains: "emprego.eth + trabalho.eth + doutor.eth"
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Economic Layer",
      description: "Decentralized marketplace infrastructure with smart contract-based transactions.",
      domains: "imoveis.eth + livros.eth + aplicativo.eth"
    }
  ];

  const stats = [
    { value: "R$ 50B+", label: "Digital Identity Market", sublabel: "Total Addressable Market" },
    { value: "210M", label: "Citizens", sublabel: "Lacking Digital Credentials" },
    { value: "8M", label: "University Applications", sublabel: "Processed Annually" },
    { value: "R$ 2B+", label: "Fraud Losses", sublabel: "Education Sector Only" }
  ];

  const phases = [
    {
      phase: "Phase 0",
      title: "Proof of Concept",
      duration: "90 Days",
      target: "fatec.app MVP",
      metrics: "500+ students, 5+ campuses",
      revenue: "R$ 25K MRR"
    },
    {
      phase: "Phase 1", 
      title: "Web3 Transition",
      duration: "6 Months",
      target: "fatec.eth migration",
      metrics: "2,000+ .eth identities, 20+ institutions",
      revenue: "R$ 100K MRR"
    },
    {
      phase: "Phase 2",
      title: "Ecosystem Expansion", 
      duration: "12 Months",
      target: "escola.eth activation",
      metrics: "25K+ students, 100+ institutions",
      revenue: "R$ 500K MRR"
    },
    {
      phase: "Phase 3",
      title: "National Infrastructure",
      duration: "24+ Months", 
      target: "Full ecosystem",
      metrics: "1M+ users, government pilots",
      revenue: "R$ 200M+ ARR"
    }
  ];

  const advantages = [
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Unreplicable Asset Moat",
      description: "Exclusive ownership of Brazil's Web3 namespace in Portuguese. Combined domain portfolio valued at $2M+."
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Bridge Strategy",
      description: "Web2 → Web3 migration path eliminates blockchain adoption friction. 67% user retention proven."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Technical Foundation",
      description: "Teias FEA-RP blockchain graduate with formal certification and crypto experience since 2016."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Direct Market Access",
      description: "Current Fatec student with insider access to 300K+ target users and institutional trust."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <div className="ml-3">
                <span className="text-2xl font-bold text-gray-900">EscolaETH</span>
                <div className="text-sm text-gray-600">Brazil's Web3 Education Infrastructure</div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#solution" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Solution</a>
              <a href="#market" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Market</a>
              <a href="#roadmap" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Roadmap</a>
              <a href="#team" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Team</a>
              <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:from-green-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                Join the Revolution
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-4">
                <a href="#solution" className="text-gray-700 hover:text-green-600 font-medium">Solution</a>
                <a href="#market" className="text-gray-700 hover:text-green-600 font-medium">Market</a>
                <a href="#roadmap" className="text-gray-700 hover:text-green-600 font-medium">Roadmap</a>
                <a href="#team" className="text-gray-700 hover:text-green-600 font-medium">Team</a>
                <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-2 rounded-lg font-medium text-left">
                  Join the Revolution
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Rocket className="w-4 h-4 mr-2" />
              Brazil's First Web3 Education Infrastructure
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Transform Brazil's
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> Digital Future</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Creating comprehensive Web3 identity ecosystem for 210 million Brazilians. 
              From fraud-proof education credentials to self-sovereign digital identity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-green-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
                Explore the Vision
                <ChevronRight className="inline ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-green-600 hover:text-green-600 transition-colors">
                View Whitepaper
              </button>
            </div>
            
            {/* Domain Portfolio Showcase */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Strategic ENS Domain Portfolio</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-2 rounded-lg font-medium">escola.eth</div>
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-2 rounded-lg font-medium">universidade.eth</div>
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-3 py-2 rounded-lg font-medium">nome.eth</div>
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-2 rounded-lg font-medium">brazildao.eth</div>
              </div>
              <p className="text-gray-600 mt-3 text-sm">20+ strategic domains valued at $2M+ creating an unreplicable competitive moat</p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Market Opportunity</h2>
            <p className="text-xl text-gray-600">Brazil faces a massive digital infrastructure gap</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg border border-gray-100">
                <div className="text-4xl font-bold text-green-600 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.sublabel}</div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 border border-red-200">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Critical Problem</h3>
              <p className="text-lg text-gray-700 mb-6">
                The education sector alone processes 8 million annual university applications with 
                <span className="font-bold text-red-600"> R$ 2+ billion in fraud losses</span>
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-red-600">R$ 50B</div>
                  <div className="text-sm text-gray-600">TAM - Digital Identity Market</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600">R$ 15B</div>
                  <div className="text-sm text-gray-600">SAM - Education + Verification</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600">R$ 2B</div>
                  <div className="text-sm text-gray-600">SOM - Verifiable Credentials by 2027</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Architecture */}
      <section id="solution" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Digital Infrastructure</h2>
            <p className="text-xl text-gray-600">Four interconnected layers creating Brazil's Web3 identity ecosystem</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{feature.description}</p>
                <div className="bg-gradient-to-r from-green-100 to-blue-100 px-4 py-2 rounded-lg">
                  <code className="text-sm font-mono text-gray-800">{feature.domains}</code>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Competitive Advantages</h2>
            <p className="text-xl text-gray-600">Four pillars of sustainable competitive advantage</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-start p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center text-white flex-shrink-0 mr-4">
                  {advantage.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{advantage.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Go-to-Market Roadmap */}
      <section id="roadmap" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Go-to-Market Strategy</h2>
            <p className="text-xl text-gray-600">Systematic approach from proof of concept to national infrastructure</p>
          </div>

          <div className="space-y-8">
            {phases.map((phase, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold mr-4">
                          {index + 1}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-green-600">{phase.phase}</div>
                          <h3 className="text-xl font-bold text-gray-900">{phase.title}</h3>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-gray-900">Duration:</span>
                          <span className="text-gray-600 ml-2">{phase.duration}</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-900">Target:</span>
                          <span className="text-gray-600 ml-2">{phase.target}</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-900">Metrics:</span>
                          <span className="text-gray-600 ml-2">{phase.metrics}</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-900">Revenue:</span>
                          <span className="text-green-600 font-semibold ml-2">{phase.revenue}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Projections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Revenue Model & Projections</h2>
            <p className="text-xl text-gray-600">Multiple revenue streams with network effects</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border border-green-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Year 1: SaaS Foundation</h3>
              <div className="space-y-3 text-sm">
                <div>• Institutional subscriptions: R$ 10K-50K/month</div>
                <div>• Student premium features: R$ 29/month</div>
                <div>• <strong>Projected ARR: R$ 2M</strong></div>
                <div>• <strong>Gross margins: 65%</strong></div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Year 2: Platform Economics</h3>
              <div className="space-y-3 text-sm">
                <div>• Transaction fees: 2-5%</div>
                <div>• Professional verification: R$ 199/year</div>
                <div>• <strong>Projected ARR: R$ 20M</strong></div>
                <div>• <strong>Gross margins: 70%</strong></div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border border-purple-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Year 3: Infrastructure Scale</h3>
              <div className="space-y-3 text-sm">
                <div>• Government contracts: R$ 100M+</div>
                <div>• Enterprise solutions: R$ 10K+</div>
                <div>• <strong>Projected ARR: R$ 200M+</strong></div>
                <div>• <strong>Gross margins: 75%</strong></div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Unit Economics (Validated)</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-green-600">R$ 150</div>
                <div className="text-sm text-gray-600">Customer Acquisition Cost</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">R$ 2,400+</div>
                <div className="text-sm text-gray-600">Lifetime Value</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">16:1</div>
                <div className="text-sm text-gray-600">LTV/CAC Ratio</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600">6 months</div>
                <div className="text-sm text-gray-600">Payback Period</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Team & Execution</h2>
            <p className="text-xl text-gray-600">Unique positioning for market transformation</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  FF
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Fabricio Foroni</h3>
                <p className="text-lg text-gray-600">Founder & CEO</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Unique Positioning:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Current Fatec student experiencing target market daily</li>
                    <li>• Teias FEA-RP blockchain program graduate</li>
                    <li>• Multi-university experience (USP background)</li>
                    <li>• Early crypto adopter since 2016</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Strategic Assets:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• 20+ ENS domains creating competitive moat</li>
                    <li>• 300K+ student network through Fatec system</li>
                    <li>• Institutional relationships via student status</li>
                    <li>• Technical + Business background</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Investment Opportunity</h2>
            <p className="text-xl text-gray-300">Join Brazil's digital transformation</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-6">Why EscolaETH is Generational</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold mb-2">Market-Defining Potential</h4>
                    <p className="text-gray-300">First-mover in $50B+ Brazilian digital identity market with network effects.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold mb-2">Monopolistic Asset Base</h4>
                    <p className="text-gray-300">ENS domain portfolio creates unbreachable competitive moat worth $5M+.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold mb-2">Proven Execution</h4>
                    <p className="text-gray-300">Direct market access through 300K+ student network with 90-day MVP plan.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Funding Requirements</h3>
              
              <div className="mb-8">
                <div className="text-4xl font-bold text-green-600 mb-2">$100K</div>
                <div className="text-lg text-gray-600">Seed Round</div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between">
                  <span className="text-gray-700">Product Development</span>
                  <span className="font-semibold">40%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Marketing & Acquisition</span>
                  <span className="font-semibold">30%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Legal & Compliance</span>
                  <span className="font-semibold">20%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Operations & Team</span>
                  <span className="font-semibold">10%</span>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                Request Investment Deck
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">The Vision: Brazil as Web3 Pioneer</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto">
            Transform Brazil into the world's first nation with comprehensive Web3 identity infrastructure.
          </p>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="p-6">
              <div className="text-4xl font-bold text-green-600 mb-2">8M</div>
              <div className="text-gray-700">Students with verifiable credentials</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">210M</div>
              <div className="text-gray-700">Brazilians with digital identity</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-purple-600 mb-2">R$ 2B+</div>
              <div className="text-gray-700">Fraud reduction achieved</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-orange-600 mb-2">50+</div>
              <div className="text-gray-700">Nations using our template</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">From a Fatec student's problem to a nation's transformation.</h3>
            <p className="text-lg text-gray-700 mb-6">This isn't just a business opportunity. It's the foundation of Brazil's digital future.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://fatec.app" className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                fatec.app
              </a>
              <a href="https://escola.eth" className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                escola.eth
              </a>
              <a href="https://brazildao.eth" className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                brazildao.eth
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-blue-600 rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <span className="ml-3 text-2xl font-bold">EscolaETH</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Building Brazil's Web3 education and identity infrastructure.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Solution</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Education Layer</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Identity Layer</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Professional Layer</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Economic Layer</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Resources</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Whitepaper</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Roadmap</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Team</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Investors</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Connect</h4>
              <div className="space-y-2">
                <a href="mailto:fabricio@escolaeth.com" className="block text-gray-400 hover:text-white transition-colors">Contact</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Twitter</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Discord</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 EscolaETH. Building Brazil's digital future.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-green-600 to-blue-600 text-white p-3 rounded-full shadow-lg hover:from-green-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-110 z-50"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}

export default App;