import { MapPin, Maximize2, Heart, BedDouble, Bath, Star, ArrowUpRight, Building2, TreePine, Home, Briefcase, ShoppingBag, Layers } from 'lucide-react';
import { useState } from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────
interface Property {
  id: string;
  title: string;
  type: string;
  location: string;
  price: string;
  area: string | null;
  status: string;
  featured?: boolean | null;
  description?: string | null;
  beds?: number | null;
  baths?: number | null;
  rating?: number | null;
  image?: string | null;
}

// ─── Data with unique per-property Pexels images ──────────────────────────────
const sampleProperties: Property[] = [
  {
    id: '1',
    title: 'Luxury Kothi in Mayur Vihar',
    type: 'Kothi',
    location: 'Mayur Vihar, Delhi',
    price: '₹2.5 Cr – 3 Cr',
    area: '4,000 sq ft',
    status: 'For Sale',
    featured: true,
    beds: 5, baths: 4, rating: 4.9,
    description: 'Spacious luxury kothi with modern amenities, landscaped garden & premium finishes.',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '2',
    title: 'Farm House Near Jewar',
    type: 'Farmhouse',
    location: 'Jewar, Noida',
    price: '₹1.2 Cr – 1.8 Cr',
    area: '2 Acres',
    status: 'For Sale',
    featured: true,
    beds: 4, baths: 3, rating: 4.8,
    description: 'Prime farmhouse near Jewar Airport with exceptional investment potential.',
    image: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '3',
    title: 'Premium 2BHK Flat, Sector 62',
    type: 'Flat',
    location: 'Sector 62, Noida',
    price: '₹45 L – 75 L',
    area: '1,200 sq ft',
    status: 'For Sale',
    beds: 2, baths: 2, rating: 4.5,
    description: 'Well-designed 2BHK flat with modern amenities in a gated society.',
    image: 'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '4',
    title: 'Commercial Office Space',
    type: 'Office',
    location: 'Connaught Place, Delhi',
    price: '₹35 L – 60 L',
    area: '800 sq ft',
    status: 'For Rent',
    rating: 4.6,
    description: "Prime commercial office in the heart of Delhi's business district.",
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '5',
    title: 'Retail Shop in MIG Complex',
    type: 'Shop',
    location: 'Mayur Vihar, Delhi',
    price: '₹20 L – 35 L',
    area: '400 sq ft',
    status: 'For Sale',
    rating: 4.3,
    description: 'High-footfall retail shop with excellent street visibility.',
    image: 'https://images.pexels.com/photos/3965557/pexels-photo-3965557.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '6',
    title: 'Residential Corner Plot',
    type: 'Plot',
    location: 'Raj Nagar, Ghaziabad',
    price: '₹15 L – 25 L',
    area: '1,000 sq ft',
    status: 'For Sale',
    rating: 4.4,
    description: 'Prime corner plot in a developing locality, ready for construction.',
    image: 'https://images.pexels.com/photos/1475938/pexels-photo-1475938.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '7',
    title: 'Premium Agricultural Farmland',
    type: 'Farmhouse',
    location: 'Sector 135, Noida',
    price: '₹50 L – 80 L',
    area: '1 Acre',
    status: 'For Purchase',
    beds: 2, baths: 1, rating: 4.7,
    description: 'Fertile agricultural land ideal for organic farming and long-term investment.',
    image: 'https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '8',
    title: 'Spacious 3BHK Apartment',
    type: 'Flat',
    location: 'Vaishali, Ghaziabad',
    price: '₹60 L – 85 L',
    area: '1,500 sq ft',
    status: 'For Rent',
    featured: true,
    beds: 3, baths: 2, rating: 4.8,
    description: 'Fully furnished 3BHK apartment with modular kitchen and club house access.',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '9',
    title: 'Builder Floor in Lajpat Nagar',
    type: 'Kothi',
    location: 'Lajpat Nagar, Delhi',
    price: '₹1.8 Cr – 2.2 Cr',
    area: '2,200 sq ft',
    status: 'For Sale',
    beds: 4, baths: 3, rating: 4.6,
    description: 'Independent builder floor with terrace rights and private parking in prime South Delhi.',
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '10',
    title: 'Studio Office in Cyber Hub',
    type: 'Office',
    location: 'Cyber Hub, Gurugram',
    price: '₹90 L – 1.2 Cr',
    area: '550 sq ft',
    status: 'For Sale',
    rating: 4.9,
    description: "Plug-and-play studio office in Gurugram's premier tech destination.",
    image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '11',
    title: 'Weekend Retreat Villa',
    type: 'Farmhouse',
    location: 'Sohna Road, Gurugram',
    price: '₹3.5 Cr – 4.2 Cr',
    area: '5 Acres',
    status: 'For Sale',
    featured: true,
    beds: 6, baths: 5, rating: 5.0,
    description: 'Luxury weekend villa with private pool, orchards, and breathtaking Aravalli views.',
    image: 'https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '12',
    title: 'Commercial Plot, Noida Ext.',
    type: 'Plot',
    location: 'Greater Noida West',
    price: '₹40 L – 55 L',
    area: '2,000 sq ft',
    status: 'For Sale',
    rating: 4.5,
    description: 'Strategic commercial plot on main road with high development potential.',
    image: 'https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '13',
    title: 'Penthouse, Dwarka Expressway',
    type: 'Flat',
    location: 'Dwarka Expressway, Delhi',
    price: '₹1.5 Cr – 2 Cr',
    area: '2,800 sq ft',
    status: 'For Sale',
    featured: true,
    beds: 4, baths: 4, rating: 5.0,
    description: 'Sky-high penthouse with panoramic city views, private terrace and rooftop jacuzzi.',
    image: 'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '14',
    title: 'Corner Shop, Rohini Market',
    type: 'Shop',
    location: 'Rohini, Delhi',
    price: '₹28 L – 40 L',
    area: '520 sq ft',
    status: 'For Rent',
    rating: 4.2,
    description: "Prime corner shop with two frontages in Rohini's bustling market street.",
    image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: '15',
    title: 'Heritage Kothi, Civil Lines',
    type: 'Kothi',
    location: 'Civil Lines, Delhi',
    price: '₹4.5 Cr – 5.5 Cr',
    area: '6,500 sq ft',
    status: 'For Sale',
    featured: true,
    beds: 7, baths: 6, rating: 4.9,
    description: 'Colonial-era heritage kothi with lush gardens, original flooring and modern upgrades.',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
const TypeIcon: { [key: string]: React.ElementType } = {
  Kothi: Home, Farmhouse: TreePine, Flat: Building2,
  Office: Briefcase, Shop: ShoppingBag, Plot: Layers,
};

const statusStyle: { [key: string]: string } = {
  'For Sale':     'bg-emerald-500 text-white',
  'For Rent':     'bg-blue-500 text-white',
  'For Purchase': 'bg-violet-500 text-white',
};

const types = ['All', 'Kothi', 'Farmhouse', 'Flat', 'Office', 'Shop', 'Plot'];

const fallbackImages: { [key: string]: string } = {
  Kothi:     'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
  Farmhouse: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800',
  Flat:      'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=800',
  Office:    'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800',
  Shop:      'https://images.pexels.com/photos/3965557/pexels-photo-3965557.jpeg?auto=compress&cs=tinysrgb&w=800',
  Plot:      'https://images.pexels.com/photos/1475938/pexels-photo-1475938.jpeg?auto=compress&cs=tinysrgb&w=800',
};

// ─── Card ─────────────────────────────────────────────────────────────────────
export function PropertyCard({ property }: { property: Property }) {
  const [liked, setLiked] = useState(false);
  const Icon = TypeIcon[property.type] || Home;
  const badge = statusStyle[property.status] || 'bg-gray-500 text-white';
  const imageUrl = property.image || fallbackImages[property.type] || fallbackImages['Flat'];

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer">

      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-gray-100">
        <img
          src={imageUrl}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        {/* dark scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />

        {/* Featured badge */}
        {property.featured && (
          <span className="absolute top-3 left-3 flex items-center gap-1 bg-amber-400 text-amber-900 text-[11px] font-black uppercase tracking-wide px-2.5 py-1 rounded-full shadow-md">
            <Star className="w-3 h-3 fill-amber-900" /> Featured
          </span>
        )}

        {/* Wishlist */}
        <button
          onClick={e => { e.stopPropagation(); setLiked(!liked); }}
          className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-1.5 shadow-md hover:scale-110 active:scale-95 transition-transform"
        >
          <Heart className={`w-4 h-4 transition-colors ${liked ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
        </button>

        {/* Bottom-of-image row */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          <span className={`text-[11px] font-bold px-3 py-1 rounded-full ${badge}`}>
            {property.status}
          </span>
          <span className="flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1 shadow text-xs font-semibold text-gray-700">
            <Icon className="w-3.5 h-3.5 text-red-600" />
            {property.type}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-4">
        {/* Title + arrow */}
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <h3 className="text-sm font-bold text-gray-900 leading-snug group-hover:text-red-700 transition-colors line-clamp-2 flex-1">
            {property.title}
          </h3>
          <div className="shrink-0 w-7 h-7 rounded-full bg-red-50 group-hover:bg-red-600 flex items-center justify-center transition-colors duration-300 mt-0.5">
            <ArrowUpRight className="w-3.5 h-3.5 text-red-500 group-hover:text-white transition-colors" />
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-1.5 text-gray-400 mb-3">
          <MapPin className="w-3 h-3 text-red-400 shrink-0" />
          <span className="text-xs truncate">{property.location}</span>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center gap-3 py-2.5 border-y border-gray-100 mb-3 text-gray-500 text-xs">
          <span className="flex items-center gap-1">
            <Maximize2 className="w-3.5 h-3.5 text-red-400" />{property.area}
          </span>
          {property.beds && (
            <span className="flex items-center gap-1">
              <BedDouble className="w-3.5 h-3.5 text-red-400" />{property.beds} Beds
            </span>
          )}
          {property.baths && (
            <span className="flex items-center gap-1">
              <Bath className="w-3.5 h-3.5 text-red-400" />{property.baths} Baths
            </span>
          )}
          {property.rating && (
            <span className="flex items-center gap-1 ml-auto font-semibold text-gray-700">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />{property.rating}
            </span>
          )}
        </div>

        {/* Description */}
        {property.description && (
          <p className="text-xs text-gray-400 leading-relaxed mb-3 line-clamp-2">{property.description}</p>
        )}

        {/* Price + CTA */}
        <div className="flex items-center justify-between gap-2">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">Price</p>
            <p className="text-lg font-black text-red-600 leading-tight">{property.price}</p>
          </div>
          <button
            onClick={e => {
              e.stopPropagation();
              const contact = document.getElementById('contact');
              if (contact) contact.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-red-600 hover:bg-red-700 active:scale-95 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all shadow-md shadow-red-200 whitespace-nowrap"
          >
            Enquire Now
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Section (drop-in replacement for your properties section) ────────────────
export default function PropertiesSection() {

  const [selectedType, setSelectedType] = useState('All');

  const filtered = selectedType === 'All'
    ? sampleProperties
    : sampleProperties.filter(p => p.type === selectedType);

  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&display=swap'); * { font-family: 'Sora', sans-serif; }`}</style>

      <section id="properties" className="max-w-7xl mx-auto px-4 py-12">

        {/* Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8">
          <div>
            <p className="text-red-600 text-xs font-black uppercase tracking-widest mb-1">Explore Listings</p>
            <h2 className="text-3xl font-black text-gray-900 leading-tight">
              Premium Properties
              <span className="block text-base font-normal text-gray-400 mt-0.5">Delhi NCR's finest real estate</span>
            </h2>
          </div>
          <span className="text-sm text-gray-400">{filtered.length} listings</span>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {types.map(type => {
            const Icon = TypeIcon[type];
            const active = selectedType === type;
            return (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold border transition-all duration-200 ${
                  active
                    ? 'bg-red-600 text-white border-red-600 shadow-md shadow-red-200'
                    : 'bg-white text-gray-500 border-gray-200 hover:border-red-300 hover:text-red-600'
                }`}
              >
                {Icon && <Icon className="w-3.5 h-3.5" />}
                {type}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map(p => <PropertyCard key={p.id} property={p} />)}
        </div>
      </section>
    </>
  );
}