/** Lightweight partner logos (no inlined base64) to keep the navbar bundle small. */
export function getNavPartners(dropdownTrans = {}) {
    return [
        {
            name: 'SAP',
            logo: 'https://cdn.simpleicons.org/sap/0FAAFF',
            desc:
                dropdownTrans.partners?.sapDesc ||
                'Partner with us to transform how SMEs operate globally using cutting-edge, cloud-based solutions.',
            url: 'https://www.sap.com',
        },
        {
            name: 'Oracle NetSuite',
            logo: 'https://cdn.simpleicons.org/oracle/F80000',
            desc:
                dropdownTrans.partners?.oracleNetsuiteDesc ||
                'Discover the benefits of partnering with Oracle NetSuite for comprehensive business solutions.',
            url: 'https://www.netsuite.com',
        },
        {
            name: 'Microsoft',
            logo: 'https://cdn.simpleicons.org/microsoft/737373',
            desc:
                dropdownTrans.partners?.microsoftDesc ||
                'Our Microsoft Partnership enhances business capabilities with cutting-edge solutions.',
            url: 'https://partner.microsoft.com',
        },
        {
            name: 'Cloudiax',
            logo: 'https://www.cloudiax.com/wp-content/themes/cloud/image/logo_cloudiax.svg',
            desc:
                dropdownTrans.partners?.cloudiaxDesc ||
                'Cloudiax enables businesses to enhance SAP capabilities with powerful cloud solutions.',
            url: 'https://www.cloudiax.com',
        },
        {
            name: 'Cloud Solutions',
            logo: '/partners/cloud-solutions.png',
            cover: true,
            desc:
                dropdownTrans.partners?.cloudSolutionsDesc ||
                'Our expertise ensures seamless cloud migration and multi-cloud integration.',
            url: 'https://bmp-erp.com',
        },
    ];
}
