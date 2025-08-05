import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Zap,
  Settings,
  Shield,
  Clock,
  Users,
  Award,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  ArrowRight,
  Menu,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ElectricalSolutionsWebsite() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2">
              <Zap className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">ElectroTech Solutions</span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#home" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link
                href="#services"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                Services
              </Link>
              <Link href="#about" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                About
              </Link>
              <Link
                href="#projects"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                Projects
              </Link>
              <Link href="#contact" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Button className="hidden md:inline-flex bg-blue-600 hover:bg-blue-700">Get Quote</Button>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Professional Electrical Solutions</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Powering Your
                  <span className="text-blue-600"> Future</span> with Expert Solutions
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  From residential installations to industrial automation, we deliver comprehensive electrical and
                  technical solutions with over 15 years of expertise.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  View Our Work
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">24/7</div>
                  <div className="text-sm text-gray-600">Support Available</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Electrical engineer working on control panel"
                width={600}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Shield className="h-8 w-8 text-green-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Certified & Licensed</div>
                    <div className="text-sm text-gray-600">Fully insured professionals</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-800">Our Services</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Comprehensive Electrical & Technical Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide end-to-end electrical services for residential, commercial, and industrial clients with
              cutting-edge technology and expert craftsmanship.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <Zap className="h-6 w-6 text-blue-600 group-hover:text-white" />
                </div>
                <CardTitle>Electrical Installation</CardTitle>
                <CardDescription>
                  Complete electrical system design and installation for new constructions and renovations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Wiring & Panel Installation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Lighting Systems
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Power Distribution
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <Settings className="h-6 w-6 text-blue-600 group-hover:text-white" />
                </div>
                <CardTitle>Industrial Automation</CardTitle>
                <CardDescription>
                  Advanced automation solutions to optimize your industrial processes and increase efficiency.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    PLC Programming
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    SCADA Systems
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Motor Control Centers
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <Shield className="h-6 w-6 text-blue-600 group-hover:text-white" />
                </div>
                <CardTitle>Maintenance & Repair</CardTitle>
                <CardDescription>
                  Preventive maintenance and emergency repair services to keep your systems running smoothly.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    24/7 Emergency Service
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Preventive Maintenance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    System Upgrades
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <Clock className="h-6 w-6 text-blue-600 group-hover:text-white" />
                </div>
                <CardTitle>Energy Solutions</CardTitle>
                <CardDescription>
                  Sustainable energy solutions including solar installations and energy efficiency consulting.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Solar Panel Installation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Energy Audits
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    LED Retrofits
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <Users className="h-6 w-6 text-blue-600 group-hover:text-white" />
                </div>
                <CardTitle>Technical Consulting</CardTitle>
                <CardDescription>
                  Expert technical consulting services for complex electrical and automation projects.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    System Design
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Code Compliance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Project Management
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <Award className="h-6 w-6 text-blue-600 group-hover:text-white" />
                </div>
                <CardTitle>Safety & Compliance</CardTitle>
                <CardDescription>
                  Comprehensive safety inspections and compliance services to meet all regulatory requirements.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Safety Inspections
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Code Updates
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Certification Support
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800">About Us</Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Trusted Electrical Experts Since 2008</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  ElectroTech Solutions has been at the forefront of electrical and technical innovation for over 15
                  years. Our team of certified professionals combines extensive experience with cutting-edge technology
                  to deliver exceptional results.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We pride ourselves on our commitment to safety, quality, and customer satisfaction. From small
                  residential repairs to large-scale industrial installations, we approach every project with the same
                  level of professionalism and attention to detail.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600">Satisfied Clients</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-blue-600">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-gray-600">Team Members</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-blue-600">24/7</div>
                  <div className="text-sm text-gray-600">Emergency Support</div>
                </div>
              </div>

              <Button className="bg-blue-600 hover:bg-blue-700">Learn More About Us</Button>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Professional electrical team"
                width={500}
                height={500}
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <Award className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">Certified</div>
                  <div className="text-xs text-gray-600">Licensed Professionals</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-800">Our Projects</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Recent Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore some of our recent projects that showcase our expertise and commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <div className="relative overflow-hidden">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Commercial Office Complex"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-green-600 text-white">Commercial</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Downtown Office Complex</h3>
                <p className="text-gray-600 mb-4">
                  Complete electrical system installation for a 20-story commercial building including smart lighting
                  and energy management systems.
                </p>
                <div className="flex items-center text-sm text-blue-600">
                  <span>View Project Details</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <div className="relative overflow-hidden">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Manufacturing Plant Automation"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-orange-600 text-white">Industrial</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Manufacturing Plant Automation</h3>
                <p className="text-gray-600 mb-4">
                  Advanced PLC programming and SCADA system implementation for a major automotive parts manufacturer.
                </p>
                <div className="flex items-center text-sm text-blue-600">
                  <span>View Project Details</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <div className="relative overflow-hidden">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Residential Solar Installation"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-600 text-white">Residential</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Home Solar System</h3>
                <p className="text-gray-600 mb-4">
                  Complete solar panel installation with smart home integration and battery backup system for
                  sustainable living.
                </p>
                <div className="flex items-center text-sm text-blue-600">
                  <span>View Project Details</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-800">Contact Us</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Ready to Power Your Next Project?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with our experts for a free consultation and quote. We're here to help bring your electrical
              vision to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="grid gap-6">
                <Card className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                      <p className="text-sm text-gray-500">24/7 Emergency Line</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">info@electrotechsolutions.com</p>
                      <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Address</h3>
                      <p className="text-gray-600">123 Industrial Blvd, Suite 100</p>
                      <p className="text-gray-600">Tech City, TC 12345</p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="bg-blue-600 text-white p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-2">Emergency Services</h3>
                <p className="mb-4">
                  Need immediate electrical assistance? Our emergency team is available 24/7 for urgent repairs and
                  safety issues.
                </p>
                <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                  Call Emergency Line
                </Button>
              </div>
            </div>

            <Card className="p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle>Get a Free Quote</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you with a detailed quote for your project.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">First Name</label>
                      <Input placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Last Name</label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Phone</label>
                    <Input type="tel" placeholder="+1 (555) 123-4567" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Service Type</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Select a service</option>
                      <option>Electrical Installation</option>
                      <option>Industrial Automation</option>
                      <option>Maintenance & Repair</option>
                      <option>Energy Solutions</option>
                      <option>Technical Consulting</option>
                      <option>Safety & Compliance</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Project Details</label>
                    <Textarea placeholder="Please describe your project requirements..." className="min-h-[100px]" />
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Zap className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">ElectroTech Solutions</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Your trusted partner for comprehensive electrical and technical solutions. Powering progress with
                expertise and innovation.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">in</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Electrical Installation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Industrial Automation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Maintenance & Repair
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Energy Solutions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Technical Consulting
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    News & Updates
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact Info</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4" />
                  <span>info@electrotechsolutions.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 mt-1" />
                  <span>
                    123 Industrial Blvd, Suite 100
                    <br />
                    Tech City, TC 12345
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} ElectroTech Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
