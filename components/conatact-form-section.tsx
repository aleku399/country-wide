"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Feel Free to Get in Touch with us</h2>

            <form onSubmit={handleSubmit} className="space-y-6 mt-8">
              <div>
                <Label htmlFor="name" className="text-gray-700 font-medium">
                  Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-gray-700 font-medium">
                  Email <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-gray-700 font-medium">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500 resize-none"
                />
              </div>

              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 h-auto font-medium">
                <Send className="w-4 h-4 mr-2" />
                Submit
              </Button>
            </form>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Details</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Email</p>
                    <a
                      href="mailto:info@nationalprojectsimplementation.org"
                      className="text-gray-900 hover:text-red-600 transition-colors"
                    >
                      info@nationalprojectsimplementation.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Address</p>
                    <p className="text-gray-900">
                      Nakasero Hill Road,
                      <br />
                      Nakasero Kampala
                      <br />
                      P.O Box 762176 Kampala
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Map */}
            <div className="w-full h-80 bg-gray-100 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7520895823!2d32.5825!3d0.3136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb6c4b3b3b3b%3A0x1234567890abcdef!2sOffice%20of%20the%20Prime%20Minister%2C%20Kampala!5e0!3m2!1sen!2sug!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office of the Prime Minister Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
