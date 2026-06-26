import type { Schema, Struct } from '@strapi/strapi';

export interface BlogPageBlog extends Struct.ComponentSchema {
  collectionName: 'components_blog_page_blogs';
  info: {
    displayName: 'Blogs';
  };
  attributes: {};
}

export interface BlogPagePostPage extends Struct.ComponentSchema {
  collectionName: 'components_blog_page_post_pages';
  info: {
    displayName: 'Post_Page';
  };
  attributes: {};
}

export interface FooterTitle extends Struct.ComponentSchema {
  collectionName: 'components_footer_titles';
  info: {
    displayName: 'Title';
  };
  attributes: {};
}

export interface HomePageCustomers extends Struct.ComponentSchema {
  collectionName: 'components_home_page_customers';
  info: {
    displayName: 'Customers';
  };
  attributes: {};
}

export interface HomePageHero extends Struct.ComponentSchema {
  collectionName: 'components_home_page_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {};
}

export interface HomePageHomeFaq extends Struct.ComponentSchema {
  collectionName: 'components_home_page_home_faqs';
  info: {
    displayName: 'Home FAQ';
  };
  attributes: {};
}

export interface HomePageTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_home_page_testimonials_s';
  info: {
    displayName: 'Testimonials ';
  };
  attributes: {};
}

export interface IntegrationsPageSection extends Struct.ComponentSchema {
  collectionName: 'components_integrations_page_sections';
  info: {
    displayName: 'Section';
  };
  attributes: {};
}

export interface NavBarNavBar extends Struct.ComponentSchema {
  collectionName: 'components_nav_bar_nav_bars';
  info: {
    displayName: 'Nav_Bar';
  };
  attributes: {};
}

export interface OthersFaq extends Struct.ComponentSchema {
  collectionName: 'components_others_faqs';
  info: {
    displayName: 'FAQ';
  };
  attributes: {};
}

export interface OthersMasterCta extends Struct.ComponentSchema {
  collectionName: 'components_others_master_ctas';
  info: {
    displayName: 'Master CTA';
  };
  attributes: {};
}

export interface ParnterPageHeadings extends Struct.ComponentSchema {
  collectionName: 'components_parnter_page_headings';
  info: {
    displayName: 'Headings';
  };
  attributes: {};
}

export interface WhyTrenchPageHeadings extends Struct.ComponentSchema {
  collectionName: 'components_why_trench_page_headings';
  info: {
    displayName: 'Headings';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blog-page.blog': BlogPageBlog;
      'blog-page.post-page': BlogPagePostPage;
      'footer.title': FooterTitle;
      'home-page.customers': HomePageCustomers;
      'home-page.hero': HomePageHero;
      'home-page.home-faq': HomePageHomeFaq;
      'home-page.testimonials': HomePageTestimonials;
      'integrations-page.section': IntegrationsPageSection;
      'nav-bar.nav-bar': NavBarNavBar;
      'others.faq': OthersFaq;
      'others.master-cta': OthersMasterCta;
      'parnter-page.headings': ParnterPageHeadings;
      'why-trench-page.headings': WhyTrenchPageHeadings;
    }
  }
}
