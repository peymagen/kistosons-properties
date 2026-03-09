import { useEffect, useState } from 'react';
import Header from "./components/Header";
import Hero from "./components/hero";
import { PropertyCard } from './components/PropertyCard'; // ✅ works now
import { PropertyFilter } from './components/PropertyFilter';
import Partners from "./components/partner";
import { QueryForm } from './components/QueryForm';
import { supabase, Property } from './lib/supabase';
import { Loader2 } from 'lucide-react';
import Footer from './components/footer';

function App() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [selectedType, setSelectedType] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProperties();
  }, []);

  useEffect(() => {
    if (selectedType === 'All') {
      setFilteredProperties(properties);
    } else {
      setFilteredProperties(properties.filter(p => p.type === selectedType));
    }
  }, [selectedType, properties]);

  async function fetchProperties() {
    try {
      const { data, error } = await supabase
        .from('properties')
        .select('*')
        .order('featured', { ascending: false })
        .order('created_at', { ascending: false });

      if (error) throw error;

      if (!data || data.length === 0) {
        await addSampleProperties();
      } else {
        setProperties(data || []);
        setFilteredProperties(data || []);
      }
    } catch (error) {
      console.error('Error fetching properties:', error);
    } finally {
      setLoading(false);
    }
  }

  async function addSampleProperties() {
    try {
      const sampleProperties = [
        {
          title: 'Luxury Kothi in Mayur Vihar',
          type: 'Kothi',
          location: 'Mayur Vihar, Delhi',
          price: '2.5 Cr - 3 Cr',
          area: '4000 sq ft',
          status: 'For Sale',
          featured: true,
          description: 'Spacious luxury kothi with modern amenities and garden.',
        },
        {
          title: 'Farm House Near Jewar',
          type: 'Farmhouse',
          location: 'Jewar, Noida',
          price: '1.2 Cr - 1.8 Cr',
          area: '2 Acres',
          status: 'For Sale',
          featured: true,
          description: 'Prime farmhouse near Jewar Airport with investment potential.',
        },
        {
          title: 'Premium Flat in Noida',
          type: 'Flat',
          location: 'Noida',
          price: '45 L - 75 L',
          area: '1200 sq ft',
          status: 'For Sale',
          featured: false,
          description: 'Well-designed 2BHK flat with modern amenities.',
        },
        {
          title: 'Commercial Office Space',
          type: 'Office',
          location: 'Delhi',
          price: '35 L - 60 L',
          area: '800 sq ft',
          status: 'For Rent',
          featured: false,
          description: 'Prime commercial office space in business district.',
        },
        {
          title: 'Retail Shop in MIG Complex',
          type: 'Shop',
          location: 'Mayur Vihar, Delhi',
          price: '20 L - 35 L',
          area: '400 sq ft',
          status: 'For Sale',
          featured: false,
          description: 'Retail shop with high foot traffic and good visibility.',
        },
        {
          title: 'Residential Plot',
          type: 'Plot',
          location: 'Ghaziabad',
          price: '15 L - 25 L',
          area: '1000 sq ft',
          status: 'For Sale',
          featured: false,
          description: 'Prime residential plot ready for construction.',
        },
        {
          title: 'Premium Farmland',
          type: 'Farmhouse',
          location: 'Noida',
          price: '50 L - 80 L',
          area: '1 Acre',
          status: 'For Purchase',
          featured: false,
          description: 'Agricultural land suitable for farming and investment.',
        },
        {
          title: '3BHK Apartment',
          type: 'Flat',
          location: 'Ghaziabad',
          price: '60 L - 85 L',
          area: '1500 sq ft',
          status: 'For Rent',
          featured: false,
          description: 'Spacious 3BHK apartment with all modern facilities.',
        },
         {
          title: 'Luxury Kothi in Mayur Vihar',
          type: 'Kothi',
          location: 'Mayur Vihar, Delhi',
          price: '2.5 Cr - 3 Cr',
          area: '4000 sq ft',
          status: 'For Sale',
          featured: true,
          description: 'Spacious luxury kothi with modern amenities and garden.',
        },
        {
          title: 'Farm House Near Jewar',
          type: 'Farmhouse',
          location: 'Jewar, Noida',
          price: '1.2 Cr - 1.8 Cr',
          area: '2 Acres',
          status: 'For Sale',
          featured: true,
          description: 'Prime farmhouse near Jewar Airport with investment potential.',
        },
        {
          title: 'Premium Flat in Noida',
          type: 'Flat',
          location: 'Noida',
          price: '45 L - 75 L',
          area: '1200 sq ft',
          status: 'For Sale',
          featured: false,
          description: 'Well-designed 2BHK flat with modern amenities.',
        },
        {
          title: 'Commercial Office Space',
          type: 'Office',
          location: 'Delhi',
          price: '35 L - 60 L',
          area: '800 sq ft',
          status: 'For Rent',
          featured: false,
          description: 'Prime commercial office space in business district.',
        },
        {
          title: 'Retail Shop in MIG Complex',
          type: 'Shop',
          location: 'Mayur Vihar, Delhi',
          price: '20 L - 35 L',
          area: '400 sq ft',
          status: 'For Sale',
          featured: false,
          description: 'Retail shop with high foot traffic and good visibility.',
        },
        {
          title: 'Residential Plot',
          type: 'Plot',
          location: 'Ghaziabad',
          price: '15 L - 25 L',
          area: '1000 sq ft',
          status: 'For Sale',
          featured: false,
          description: 'Prime residential plot ready for construction.',
        },
        {
          title: 'Premium Farmland',
          type: 'Farmhouse',
          location: 'Noida',
          price: '50 L - 80 L',
          area: '1 Acre',
          status: 'For Purchase',
          featured: false,
          description: 'Agricultural land suitable for farming and investment.',
        },
        {
          title: '3BHK Apartment',
          type: 'Flat',
          location: 'Ghaziabad',
          price: '60 L - 85 L',
          area: '1500 sq ft',
          status: 'For Rent',
          featured: false,
          description: 'Spacious 3BHK apartment with all modern facilities.',
        },
      ];

      const { data, error } = await supabase
        .from('properties')
        .insert(sampleProperties)
        .select();

      if (error) throw error;
      setProperties(data || []);
      setFilteredProperties(data || []);
    } catch (error) {
      console.error('Error adding sample properties:', error);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Home — scrolled to via window.scrollTo(top) in Header */}
      <Hero />

      {/* About Us — scrolled to via id="partners" */}
      <div id="partners">
        <Partners />
      </div>

      {/* Properties — scrolled to via id="properties" */}
      <main id="properties" className="max-w-7xl mx-auto px-4 py-8">
        <PropertyFilter
          selectedType={selectedType}
          onTypeChange={setSelectedType}
        />

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-12 h-12 text-red-600 animate-spin" />
          </div>
        ) : filteredProperties.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-600 text-lg">No properties found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}
      </main>

      {/* Contact — scrolled to via id="contact" */}
      <div id="contact">
        <QueryForm />
      </div>

      <Footer />
    </div>
  );
}

export default App;