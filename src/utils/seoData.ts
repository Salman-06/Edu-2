import { TRUST_CONFIG, ALL_SERVICES, SOCIAL_INITIATIVES } from '../data/trustData';

export interface ViewSEOMetadata {
  title: string;
  description: string;
  keywords: string;
  canonicalPath: string;
  ogType: string;
  jsonLd: Record<string, any>;
}

export const VIEW_SEO_CONFIG: Record<string, ViewSEOMetadata> = {
  home: {
    title: 'Edu Care Academy Trust | Empowering Young Minds & Building Future Leaders',
    description: 'Edu Care Academy Trust, established in 2018 in Coimbatore, focuses on career guidance, skill development, academic support, youth empowerment and community welfare.',
    keywords: 'Edu Care Academy Trust, Coimbatore career guidance, youth empowerment Tamil Nadu, Dr Y Benazir, personality development, Pasiyatral, Kalam Dream',
    canonicalPath: '#home',
    ogType: 'website',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'EducationalOrganization',
      '@id': 'https://educareacademytrust.org/#organization',
      name: 'Edu Care Academy Trust',
      alternateName: 'Edu Care Trust Coimbatore',
      url: 'https://educareacademytrust.org',
      slogan: 'Together We Make Difference',
      foundingDate: '2018',
      description: 'Edu Care Academy Trust works towards educational excellence, career guidance, skill development, leadership and community welfare across Tamil Nadu.',
      founder: {
        '@type': 'Person',
        name: 'Dr. Y. Benazir',
        jobTitle: 'Founder & Chairman',
        honorificPrefix: 'Dr.',
        description: 'Ph.D. in Management, Internationally Certified NLP Practitioner, Certified Career Counselor'
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Coimbatore',
        addressRegion: 'Tamil Nadu',
        addressCountry: 'India'
      },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'Tamil Nadu, India'
      },
      knowsAbout: [
        'Personality Development',
        'Career Counseling',
        'Academic Research Guidance',
        'Scientific Mentorship',
        'Community Welfare'
      ]
    }
  },

  about: {
    title: 'About Us | Edu Care Academy Trust Coimbatore (Est. 2018)',
    description: 'Learn about Edu Care Academy Trust founded in 2018 by Dr. Y. Benazir in Coimbatore. Discover our mission, vision, NLP career guidance, and community initiatives.',
    keywords: 'About Edu Care Academy Trust, Dr Y Benazir Coimbatore, Trust Mission Vision, Tamil Nadu educational NGO, youth leadership origin',
    canonicalPath: '#about',
    ogType: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'AboutPage',
          name: 'About Edu Care Academy Trust',
          description: 'The foundation, leadership, and institutional vision of Edu Care Academy Trust established in 2018 in Coimbatore, Tamil Nadu.',
          url: 'https://educareacademytrust.org/#about',
          mainEntity: {
            '@type': 'EducationalOrganization',
            name: 'Edu Care Academy Trust',
            foundingDate: '2018',
            foundingLocation: {
              '@type': 'Place',
              name: 'Coimbatore, Tamil Nadu, India'
            },
            founder: {
              '@type': 'Person',
              name: 'Dr. Y. Benazir',
              jobTitle: 'Founder & Chairman',
              hasCredential: [
                'Ph.D. in Management',
                'Internationally Certified NLP Practitioner',
                'Certified Career Counselor'
              ]
            },
            slogan: 'Together We Make Difference'
          }
        },
        {
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What is Edu Care Academy Trust and when was it established?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Edu Care Academy Trust is a youth-focused learning, career guidance, skill development, and community welfare organization established in 2018 in Coimbatore, Tamil Nadu.'
              }
            },
            {
              '@type': 'Question',
              name: 'Who leads Edu Care Academy Trust and what are their qualifications?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'The Trust is founded and chaired by Dr. Y. Benazir, who holds a Ph.D. in Management, is an Internationally Certified NLP Practitioner, and is a Certified Career Counselor.'
              }
            },
            {
              '@type': 'Question',
              name: 'What is the Pasiyatral initiative and who does it serve?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Pasiyatral (“Helping the Hunger”) is a dedicated community welfare drive providing nutritious food to roadside individuals, underprivileged citizens, and students facing socio-economic hurdles.'
              }
            },
            {
              '@type': 'Question',
              name: 'What is Kalam’s Dream scientific mentorship initiative?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Inspired by Dr. A.P.J. Abdul Kalam, Kalam’s Dream is a dedicated scientific mentorship program providing specialized guidance and research-oriented development for students in science and technology.'
              }
            }
          ]
        }
      ]
    }
  },

  services: {
    title: 'Programs & Services | Edu Care Academy Trust Coimbatore',
    description: 'Explore youth personality development, NLP communication workshops, student career counseling, academic research support, and Kalam’s Dream scientific mentorship.',
    keywords: 'Career counseling Coimbatore, personality development workshops, NLP student training, academic research support, Kalams Dream science mentorship',
    canonicalPath: '#services',
    ogType: 'website',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Services & Educational Programs by Edu Care Academy Trust',
      description: 'Comprehensive academic, career guidance, and mentorship programs offered to youth across Tamil Nadu.',
      url: 'https://educareacademytrust.org/#services',
      numberOfItems: ALL_SERVICES.length,
      itemListElement: ALL_SERVICES.map((srv, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Service',
          name: srv.title,
          description: srv.shortDesc,
          provider: {
            '@type': 'EducationalOrganization',
            name: 'Edu Care Academy Trust',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Coimbatore',
              addressRegion: 'Tamil Nadu'
            }
          },
          serviceType: srv.category,
          areaServed: 'Tamil Nadu, India'
        }
      }))
    }
  },

  gallery: {
    title: 'Initiatives Gallery | Edu Care Academy Trust Archives',
    description: 'Photo documentation of Edu Care Academy Trust drives: Pasiyatral hunger relief, Puthaga Pasi book donation, Tamil Nadu’s Got Talent, and science sessions.',
    keywords: 'Edu Care Trust photo gallery, Pasiyatral food drive, Puthaga Pasi book donation, Tamil Nadu Got Talent, Kalams dream photos',
    canonicalPath: '#gallery',
    ogType: 'website',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Edu Care Academy Trust Social Impact & Program Gallery',
      description: 'Visual archive documenting student counseling symposiums, book donation drives, and community welfare initiatives.',
      url: 'https://educareacademytrust.org/#gallery',
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: SOCIAL_INITIATIVES.map((init, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: `${init.name} - ${init.tagline}`,
          description: init.description
        }))
      }
    }
  },

  contact: {
    title: 'Contact & Enquiries | Edu Care Academy Trust Coimbatore',
    description: 'Get in touch with Edu Care Academy Trust in Coimbatore, Tamil Nadu. Connect via WhatsApp or phone for student counseling, workshops, and social drives.',
    keywords: 'Contact Edu Care Academy Trust, Coimbatore trust phone number, career guidance appointment, Edu Care WhatsApp, Dr Y Benazir office',
    canonicalPath: '#contact',
    ogType: 'website',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact Edu Care Academy Trust',
      url: 'https://educareacademytrust.org/#contact',
      mainEntity: {
        '@type': 'EducationalOrganization',
        name: 'Edu Care Academy Trust',
        telephone: TRUST_CONFIG.displayPhone,
        email: TRUST_CONFIG.displayEmail,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Coimbatore Central',
          addressLocality: 'Coimbatore',
          addressRegion: 'Tamil Nadu',
          postalCode: '641001',
          addressCountry: 'IN'
        },
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: TRUST_CONFIG.displayPhone,
            contactType: 'Admissions & Career Counseling',
            availableLanguage: ['English', 'Tamil']
          }
        ],
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '09:30',
            closes: '18:00'
          }
        ]
      }
    }
  }
};
