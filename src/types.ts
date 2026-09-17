export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  aspectClass: string;
  alt: string;
}

export interface QuoteFormData {
  name: string;
  phone: string;
  email: string;
  propertyAddress: string;
  serviceRequired: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  propertyAddress?: string;
  serviceRequired?: string;
  message?: string;
}
