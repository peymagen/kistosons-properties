import { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw0cH4LE_rSDI7V-MtKKBuWkR2yE341VfNMvZdbAQgT2E-RVbq5YbUN5zDzuLvupht_vQ/exec';

export function QueryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    location: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Save to Supabase database
      const { error } = await supabase.from('queries').insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          property_type: formData.propertyType,
          location: formData.location,
          message: formData.message,
        },
      ]);
      if (error) throw error;

      // 2. Send email via Google Apps Script → Gmail
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          property_type: formData.propertyType,
          location: formData.location,
          message: formData.message,
        }),
      });

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        propertyType: '',
        location: '',
        message: '',
      });

      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error('Error submitting query:', error);
      alert('Error submitting query. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8 max-w-2xl mx-auto my-12">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Get in Touch</h2>
        <p className="text-gray-600">
          Have questions about our properties? Fill the form below and we'll get back to you shortly.
        </p>
      </div>

      {submitted && (
        <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800 font-semibold">
            ✅ Thank you! We'll contact you soon.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition"
              placeholder="Your phone number"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Property Type
            </label>
            <select
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition"
            >
              <option value="">Select property type</option>
              <option value="Kothi">Kothi</option>
              <option value="Farmhouse">Farmhouse</option>
              <option value="Flat">Flat</option>
              <option value="Office">Office</option>
              <option value="Shop">Shop</option>
              <option value="Retail">Retail</option>
              <option value="Plot">Plot</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <select
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition"
            >
              <option value="">Select location</option>
              <option value="Delhi">Delhi</option>
              <option value="Noida">Noida</option>
              <option value="Ghaziabad">Ghaziabad</option>
              <option value="Jewar">Jewar</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition resize-none"
            placeholder="Tell us more about what you're looking for..."
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Send Query
            </>
          )}
        </button>
      </form>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-gray-200">
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-1">Call Us</p>
          <p className="font-semibold text-gray-900">7503979555</p>
          <p className="text-sm text-gray-600">9910904323</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-1">Email</p>
          <p className="font-semibold text-gray-900">Kistosons@gmail.com</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-1">Address</p>
          <p className="font-semibold text-gray-900 text-sm">
            3-N, Pocket-4, MIG Complex, Mayur Vihar-3, Delhi-96
          </p>
        </div>
      </div>
    </div>
  );
}