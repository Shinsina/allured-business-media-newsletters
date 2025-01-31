const { getAsObject } = require('@parameter1/base-cms-object-path');

module.exports = ({ advertiser, campaign, creative }, { sectionName = 'Sponsored' } = {}) => {
  const { updatedAt, name } = campaign.lineItem;
  return {
    id: campaign.id,
    name: creative.title,
    linkText: creative.linkText,
    shortName: creative.title,
    typeTitled: 'Promotion',
    type: 'promotion',
    teaser: creative.teaser,
    published: updatedAt,
    lineItemName: name,
    siteContext: {
      path: creative.href,
      canonicalUrl: creative.href,
      url: creative.href,
    },
    primaryImage: getAsObject(creative, 'image'),
    primarySection: {
      name: sectionName,
      fullName: sectionName,
    },
    company: {
      id: advertiser.id,
      name: advertiser.name,
      website: advertiser.website,
      primaryImage: getAsObject(advertiser, 'image'),
      tasAdvertiserId: advertiser.externalId,
      externalId: advertiser.externalId,
    },
  };
};
