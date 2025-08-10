// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Service type definition
export interface Service extends CosmicObject {
  type: 'services';
  metadata: {
    name: string;
    short_description: string;
    description?: string;
    icon?: {
      url: string;
      imgix_url: string;
    };
    features?: string[];
    starting_price?: string;
  };
}

// Team Member type definition
export interface TeamMember extends CosmicObject {
  type: 'team-members';
  metadata: {
    name: string;
    job_title: string;
    bio?: string;
    photo?: {
      url: string;
      imgix_url: string;
    };
    email?: string;
    linkedin?: string;
    skills?: string[];
  };
}

// Testimonial type definition with rating structure
export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    client_name: string;
    company?: string;
    position?: string;
    quote: string;
    rating?: {
      key: string;
      value: string;
    };
    photo?: {
      url: string;
      imgix_url: string;
    };
    company_logo?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Case Study type definition
export interface CaseStudy extends CosmicObject {
  type: 'case-studies';
  metadata: {
    title: string;
    client: string;
    overview: string;
    challenge?: string;
    solution?: string;
    results?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    project_images?: Array<{
      url: string;
      imgix_url: string;
    }>;
    services?: Service[];
    project_date?: string;
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}

// Type guards for runtime validation
export function isService(obj: CosmicObject): obj is Service {
  return obj.type === 'services';
}

export function isTeamMember(obj: CosmicObject): obj is TeamMember {
  return obj.type === 'team-members';
}

export function isTestimonial(obj: CosmicObject): obj is Testimonial {
  return obj.type === 'testimonials';
}

export function isCaseStudy(obj: CosmicObject): obj is CaseStudy {
  return obj.type === 'case-studies';
}