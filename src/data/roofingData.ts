import { ServiceItem, GalleryItem } from '../types';
import heroImg from '../assets/images/hero-roof-repair.jpg';
import aboutImg from '../assets/images/about-inspection.jpg';
import shingleRepairImg from '../assets/images/gallery-shingle-repair.jpg';
import stormDamageImg from '../assets/images/gallery-storm-damage.jpg';
import roofMaintenanceImg from '../assets/images/gallery-roof-maintenance.jpg';
import chimneyFlashingImg from '../assets/images/gallery-chimney-flashing.jpg';
import residentialHomeImg from '../assets/images/gallery-residential-home.jpg';

export const ROOFING_IMAGES = {
  hero: heroImg,
  about: aboutImg,
  shingleRepair: shingleRepairImg,
  stormDamage: stormDamageImg,
  roofMaintenance: roofMaintenanceImg,
  chimneyFlashing: chimneyFlashingImg,
  residentialHome: residentialHomeImg,
};

export const BUSINESS_INFO = {
  name: 'Prosper Roofing',
  owner: 'Moses Caballero',
  phone: '512-632-6878',
  phoneRaw: '5126326878',
  serviceArea: 'Central Texas',
  taglines: {
    heroEyebrow: 'PROSPER ROOFING • CENTRAL TEXAS',
    heroHeadline: 'Roof Repairs Done Right.',
    heroSubtext: 'Fast, reliable roof repair services for homeowners across Central Texas.',
    trustPill: 'Local. Honest. Hard Work.',
    coverage: 'Serving All of Central Texas',
    positioning: 'ROOF REPAIRS • FAST. RELIABLE. DONE RIGHT.',
  },
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'leak-repairs',
    number: '01',
    title: 'LEAK REPAIRS',
    description: 'Address roof leaks and damaged areas before they become bigger problems.',
    iconName: 'Droplets',
  },
  {
    id: 'missing-shingles',
    number: '02',
    title: 'MISSING SHINGLES',
    description: 'Repair or replace missing or damaged shingles.',
    iconName: 'Layers',
  },
  {
    id: 'chimney-flashing',
    number: '03',
    title: 'CHIMNEY FLASHING',
    description: 'Repair problem areas around chimney flashing.',
    iconName: 'Flame',
  },
  {
    id: 'skylights',
    number: '04',
    title: 'SKYLIGHTS',
    description: 'Address roofing issues around skylights.',
    iconName: 'Sun',
  },
  {
    id: 'pipe-boots',
    number: '05',
    title: 'PIPE BOOTS',
    description: 'Repair roofing components around pipe penetrations.',
    iconName: 'Pipette',
  },
  {
    id: 'ventilation',
    number: '06',
    title: 'VENTILATION',
    description: 'Roof ventilation services to help maintain a properly functioning roof system.',
    iconName: 'Wind',
  },
  {
    id: 'storm-damage',
    number: '07',
    title: 'STORM DAMAGE',
    description: 'Roof repair for damage caused by severe weather.',
    iconName: 'CloudLightning',
  },
  {
    id: 'roof-repairs',
    number: '08',
    title: 'ROOF REPAIRS',
    description: 'Professional repairs for a range of roofing problems.',
    iconName: 'Hammer',
  },
];

export const PRINCIPLES = [
  {
    number: '01',
    title: 'LOCAL',
    description: 'Serving homeowners across Central Texas.',
  },
  {
    number: '02',
    title: 'HONEST',
    description: 'Straightforward communication and practical roofing solutions.',
  },
  {
    number: '03',
    title: 'RELIABLE',
    description: 'Focused on getting the job done properly.',
  },
];

/**
 * Centralized image data structure for project work demo placeholders.
 * Note: These are high-quality demo placeholders representing typical residential roof repairs.
 * Real Prosper Roofing project photos can be swapped in directly by updating this array.
 */
export const PROJECT_GALLERY: GalleryItem[] = [
  {
    id: 'work-1',
    title: 'Roof Repair',
    category: 'Shingle Restoration',
    imageUrl: ROOFING_IMAGES.hero,
    aspectClass: 'md:col-span-8 md:row-span-2 h-[340px] md:h-[480px]',
    alt: 'Professional roofer repairing shingles on residential roof',
  },
  {
    id: 'work-2',
    title: 'Shingle Repair',
    category: 'Architectural Shingle Fix',
    imageUrl: ROOFING_IMAGES.shingleRepair,
    aspectClass: 'md:col-span-4 h-[230px]',
    alt: 'Close-up detail of repaired shingles on residential property',
  },
  {
    id: 'work-3',
    title: 'Storm Damage',
    category: 'Hail & Wind Repair',
    imageUrl: ROOFING_IMAGES.stormDamage,
    aspectClass: 'md:col-span-4 h-[230px]',
    alt: 'Roof inspection and storm repair work on roof ridge',
  },
  {
    id: 'work-4',
    title: 'Roof Maintenance',
    category: 'Penetration & Pipe Boot Sealing',
    imageUrl: ROOFING_IMAGES.roofMaintenance,
    aspectClass: 'md:col-span-4 h-[260px]',
    alt: 'Roof technician working on residential roof system',
  },
  {
    id: 'work-5',
    title: 'Chimney Flashing',
    category: 'Flashing & Valley Sealing',
    imageUrl: ROOFING_IMAGES.chimneyFlashing,
    aspectClass: 'md:col-span-4 h-[260px]',
    alt: 'Residential roofline with clean flashing and ventilation',
  },
  {
    id: 'work-6',
    title: 'Roof Inspection',
    category: 'Texas Home Roof Assessment',
    imageUrl: ROOFING_IMAGES.residentialHome,
    aspectClass: 'md:col-span-4 h-[260px]',
    alt: 'Texas residential home with sound roof condition',
  },
];

export const SERVICE_OPTIONS = [
  'Leak Repair',
  'Missing Shingles',
  'Chimney Flashing',
  'Skylight',
  'Pipe Boot',
  'Ventilation',
  'Storm Damage',
  'General Roof Repair',
  'Other',
];
