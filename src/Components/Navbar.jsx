// src/Components/Navbar.js (Updated with colors and language integration; design and all other things remain the same)
import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { X, ArrowRight, GlobeIcon, Zap, Layers, Building, Settings, Cloud, Briefcase, Stethoscope, HardHat, Store, Wrench } from 'lucide-react';
import {
    Facebook,
    Twitter,
    Linkedin,
} from 'lucide-react';

import { LanguageContext } from '../Context/LanguageContext';
import { Colors } from '../Utils/Colors';

const Navbar = () => {
    const { language, setLanguage, translations } = useContext(LanguageContext);
    const colors = Colors[language];
    const navbarTrans = translations.navbar || {};
    const dropdownTrans = translations.dropdown || {};

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);
    const [mobileDropdownItem, setMobileDropdownItem] = useState(null);
    const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const languages = [
        { code: 'en', name: 'English' },
        { code: 'ar', name: 'العربية' }
    ];
    useEffect(() => {
        document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = language;
    }, [language]);

    const socialIcons = [
        { Icon: Facebook, url: 'https://www.facebook.com/OfficialAIoTis/', label: 'Facebook' },
        { Icon: Twitter, url: 'https://x.com/WEAIOT', label: 'Twitter' },
        { Icon: Linkedin, url: 'https://www.linkedin.com/company/weaiot', label: 'LinkedIn' },
    ];

    const menuItems = [
        { title: navbarTrans.menu?.home || 'HOME', link: '/' },
        { title: navbarTrans.menu?.aboutUs || 'ABOUT US', link: '/About' },
        { title: navbarTrans.menu?.whatWeDo || 'WHAT WE DO', link: '/' },
        { title: navbarTrans.menu?.solutions || 'SOLUTIONS', link: '/' },
        { title: navbarTrans.menu?.resources || 'RESOURCES', link: '/' },
        { title: navbarTrans.menu?.partners || 'PARTNERS', link: '/' },
        { title: navbarTrans.menu?.marketplace || 'MARKETPLACE', link: 'https://www.nizam365.com/Plans' },
    ];

    const partners = [
        {
            name: 'SAP',
            logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA0lBMVEX///8Ycs0Xc80Yc8sLcMxmmtf7/f5lmtkYc8kYcs////4XcsoLccoVdckacc8adc70+f3k8Pkof9Hv9vwAbcxgn+Ph7PepyOkXctPb6ffx9/xhoeAAbcQAbdBBiNQbc8XM3vKXuuNWldOYwOkZdsJwn9u00e4zgNFLlNoAaMiixekfd8i60u3V5fbJ3vInfdRNltuFseIAatJhpOBmneV4quSGteRDjtFFh9SGr+NFitFyoeFbleV0ptlFh9oQdNyYwuKjweyLseEZb9wAYtA1itB42CF8AAAQQUlEQVR4nO2dC1viuhaGmzSW1LaES4WCtgjK/SZ6YJBznH10n/3//9JJ0gulaUtRdGZ88j172EpL07dJ1lpJVlBRpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpGLSlFJSF0yJt2Kv4Rm/seJ3vrtTzKTQoTIPRAJZB44cyzuYe+jY52Iw415bwRirB4IgLoh90QP7935z4UjGU0X5zoQqXldpTzxEEwjpWymEh5h50EeOZR78yLGoCtcN5fsS0vs1nqrK+QhjzVos8YuPQYPeLYH2tQ+ocCZ2JCRUIaQvGMavwSEPry0U9buIAlJCaD/UlRghPxIRshesxj8VEsaYfmtCQ7VHIeB3JDQMFUU1mEII/3RCdv8X1X3cFt1peMMxQnZIBzCV8LcVvWF40VC+I2Fwf2UdlFrKtyWEernsPMRrkBOmnbl3MOw4YTqB8L3P4kPPEFIbA3Xd3VUPAJW80kQVvtFfRQjsn3U6JvyuhPSf7SUBvxEhExpVk4C5hIREHfBPINR1vdQQALMIOQ+DI8ELKUR46rMQP+7fanilkz6nOw+tJJ5AyK7Kgxxk2zZcLmu1JUHIZlMHgL2v61nlsscBwloPJZ4Z+3QCgZpByEvQqcXXgT/eKQhoMCsKy6M0wENC1ZpSWQh516vX2a2vWbP7cuHpjwhj3XHCRpu8cQKQ85frOlTchQI9xDk4FSFg+2e5TplKL+uhnLKKgeOUASUs00GbtZ98OAZo0eEEKXuNNMADQkgoX+e+dzev1iv79qxp7Xq1Ndv0rMfHdEL6EGtP11f/+tcV03Wg3jJZTwDu6PvshKu9/N8eRt5SvRmzEmhtckKKGAzWjxF2Oh0L1OqpgId1SIDt3TU422GH1ThofbZeujZvj4fWBOKbF3o8IWUNQysVnrdsiqdFqtQbi8nzj/sb1y3DEK5AOKXiTmeKa6IVFQghgt5ApPN1Gbw733gE8FDngNBuCZ/SlOYyjTD9SdMCwh/md6UhNLFamJDV948swBghAts7LR0vuml2sDJYb+nDOCA0f6SdXvUSlhXWmjlXj0pQlNbdaIlUlcMdJaTGEffEJywQIrJu5fPttXjbkgNClH7nL4CcSMgp2Uu9WbJMDqdmE1Lj67em0Tz7ctE91rrtYnysOWnP7N73RdXSzdgCBZ401koLqzrZ0abK3FcmoYENhqjvcgADQoinzUrxwpX5DsVdmf2S8eGtSQn5xIGvUwgVbV5inhFCNZOw08GQuok8QCWo7c6gWPv0VXmzD0pCs4wTN7ZFjb7fzE4mVJT2vx/Lek6QxNwEhsv0BhTKJxxPCvZAX3MPxXsDGmWV0bCpp3o/oaL851HPDuAgdRMdw8o2MlxBKzup2PrLDTZiJdndzCJ6vtV/N6Hy000NorhUFs14KcH2gXgdDDPCgQwtOtNOnHB4m3lq8/EvZx+Ov4OwsQQ5QT80qZE50vp4N8r2w2mqj6z7+1gkhfrVzHMby78/RKhpk9RW6r9HwO726CXoeegh+w79Yg5/ndjT+3srKkolk+yPVtZxQlLIHx6q+oBSCHlAToB3e/wC1JqjSWYNph2oE8SC4rCv056QV8xM94cYzK+pRwhTb0NrJusQwmA+ML/kUNRdpZ9XHXTX/X5//fx2N5jHg/GVSx0UG6RyQjrYWuc18cYDIQEhxmmEWqPRqDYa9cyLzHcJwmBIhY1prh8MhQlI60bt1ZaNfdnSOCDL4W49qHNGTZkTPv7zEWkd3t/n1csldZ0wIsQphNWfw+12ONx6pc0iNeRvP9uJOuT1hw1cCFDBKupql8l3GzUEw2cP+A/IumBu/VLpOzFCQKzpj/xevKjlEzYIYlE/Gxyb3iQtNhos0whZDRayjxiL9u1S+Qf50WS03kowvhl7k6pGi+PvsFE5o7+xNvkFVPvI7zhZdUiCUSShD/vxISV2WHjqntDvgJj3wWIOoINrYsjVGAcz3PvlXtWaYsf92e2BOCEE6nSRe/1L5Y61ARVnElrR/BVtGe5IrMVGCYFoIiME3C2KergO9kTCqh2NSyLfo1rYcRw7XNDwCenzTx0ZxrXgo8QcQl7BrCh6SXV8J5xR6ZehmqhDetNFXXhH3aZUwnqM1bIDwpbKV8ExBjQMxsyMwihdgJj/PVZUpa8SdldqBuGUH/QRAVZT4qs3HUSLnH4fTKmVbELDSyFslMbQcXgzjBorf9A4rMNAKj4e8E2mVpDAY6USYisihJgQsXa6UIdqvAat/J6RJBymPY/qs2vzgDBOGM3tRYDYvE588LI9T95ga6vmEtIBVjSApO1ebKZ3JJz58glR4T7ICdMsDdNih5hBBZFJTSOEtvDEWy+C91jnEt7TAInECEXbPAnsd2BnzJMAFWyQLI89uKrB2GRFLDMsGA9RI+klTB+NlMWRxsyyzkaI8fA0QMVQ0VtF8Pjhra12S+aMYRYh2iQLq1yLT0zzjrTSkJAvkYitlBGyDApu7ryZdhKgoqrmRc4sQKv5PCI274lQJITLWyXxdKpL9CwYn82NxWYzMi2NGvp86n1SLM0d0aEBefcwKeBJfIzQyBnAUlXmg+cdMZnBM4JUlIgQXCf6nKY0bbgTFkhaN9NpJ5MwcIfs0gSWf4ouv8u8MZuRgXrtZEBGaHaPTLO1W7MXD3eoQ0wQwqZQ3lUZgFmyYpUf9/fTLEIrdD/MZ5DHV7H8Zz/Cp4j66YCKYRjmLn+yiqndmuxsENjrgDBt3FXRy8B9S5ofZdJhPjGLUA/HfBjbnjgMaPcRwHSYNsXj4pHMXpTQoKOLAh/UBt7YhCBWh+hF6HEDF4DySPAXFIOoGYQ4JMSqEUtH26s14om8nY49eAegwnNn0PE4nT/ZwU7FMcLlQDjtifpQ4Nwm366sH/UMwgZE3OkiAMkudbZhNuTRlGG9pwb9/FJsZq29HYi2n3rXM/aE4qJye8iiBHcjtImZq2e10q3HtSutBul38cr7PFoOTnQTgfx+ZfaOTEZFur1AzCJQ30HIm3B0wE2Gk4wDaE3tzAxCbc7VqmbdPh1gUi+iL0WrVkyBnTYvjswc7wtcITZNQ71HSkD7zEe7jiNUbmVjsif5jrk25XYJsUUBT1lXiSsKyHpF4/X2m00Hcrij9oQy6zvEupTu3gmPa1ajlf4ewsrzIx2apvilogoIaU/2Jlqxamw/P+pAJ3pXODIb+lbRGQmHGiWTEeZMrWZovrRVPH4/YLC6pvJ5oh6bvMqKUWOqXtl0PE7E3I4u8CcGoC3ajO67CDXtBRnmiQtHh+KJHsFMmDleFzM4c8+6v38S3q6WEDdc1tQWb2mxpUHnqbP6NAocG8A+bdUhIT2YUuL5+MDV31oFerR2Z913RDuz2PrecjoFT0JbqPfR6YRKi8YV+uR9biJQNE/ONlUAAlBtszhekfORORVLfWXzV4TQOiQ18RoTQsjyxFba8KYWeX2vFfUVEjIvztycZd3cX0xuj0UAG3uVbDmX9b7tsEQn3aK3JVbWfAtOJWw9QKv2QUAlPsGDg3ke0/TWk0XuhQdEnFKfb4O8L2JZ+lr8TB+dRqjNRhbW7z4IqNCGFeywOJBp7S66OR5yfp0s+FJ7dVm6NNQBpoRbcbzShCcRVrpDFbsfrcHYvqdDQjbgtYa9SVZrrQgzavSOXPvGMPgmo/I4ZVjdXoITCBc9i/pB0eeerHB0nSSkgLQ7YWt9fOwYqT5YXXnD4Xb0lL6MtLYLE857N/Qh22cAzCHEbB6T+o/NaYv8OZq7aYSXvvjPPKusTkfbiLocArMzIE5QQAjY0kmCkrBMT52gp3bRi0V+K+POvDR/WKHStIpWqdSrjdZ89jbSXZsCYnJsdqWYIkILgzghWyVnSyUAT21xfu9d0pQ7LBK2u6HeVv3Srmbb7t/MGuNlt/CTzRWbxTA4IfX3ezzVXz/UGbXjnaUkqsY0ZQQMbDvYiW2apmHQ8v5yqAnQzwToE1LzZww9BIMVFDVK0GeAqjM8T1G0QT6J/bCKw5k2f3kKq7oDLAudp4kqUR2qeFO/sxADiu8+4F3TvjpTWYrW/K/w3gGh6qdaYmMsTKa/WwGhsW3x4TuNjmGUWx7kiDyeuFCQo+pMTBlg6/hxQpaDQGPCs4kT0otuuAGsrrZEZwn05bJT9glN48hC/UlKWcMWCFUAzleDYUxjDPlYQGO5uWtvqbsOCzB1hMByd/qw/CQ1sKmGYxtqDzCzeKtz9UEmP2Kz4/XUmr0+90ulh4eHUv+tmbpL44xihIHKbhlSQ0POF2Mw+de2ksM55nxbrZxMpbOpofrrniwR42+HBh7O6qyAPqGd7GoFJmsKqNBVWqo/x0y9r+OWDQuszuQHQ3HCjET0kyTMNBScemhh9h0InLAMDIzO2geZmAnLyfEtqHnQW9lOGS1i04oknrWCVsrWeKmbeDlT+9mLmbCMLVHFVd09ei+DVpuF0P4Gn0r9dvK0/F+BC8cIaay/OjsgIzQ/XIWDGlGRXa6Nrl82m81qvb7yyNg2sVtgnnNPCAB5PncTVRihmrsfo4i0lb/bkIZBCNl8912ZOnFs2clsmxS1VJN/UwVbXxIzAM4gOtA9qQrT7Me8Z8Eot2ifCQcJGh6vk7lqBvlC5MxuIhAlXBVdWVNYyCOcfKk0rVh6ZCxVmep4SBsRAnFF+Syi/XD6wBJXj1cki1tfxHzZy2qfJ6unEBJwfPAcEBJ7/Ql9kMkfuex4cu5RyMEOXYthznyZujuYE5aOXFFT5v5ijt17L8Ex+YQGAms+PyhmQuy1GLm6+1oRtn523SgfM1mLiA7KsjeN8o2mLbZhEyJxnee8hATSwcRoMq9XeKwVx+Q/a+3GoDemQyrXW/ubfPluX38f77KcRUj/jeJbfvc7f/d64Inbn9VEQ0KV6DoE6GY6eh7ctqoHDVFrV1u3zfUQmVAvsyxh+iy42EZs9rsdJdmKhDScpuf45/MN3PyVi+3kRvQ/tg/e+iQjwxXcDFu7ICp12+7SKz13m4OZr0Gzu+rvlmxXgr9XPtx9zlOigpkOP0c5+C3ZFQnc79Ln1gdjf3WEifjZep8JGO0hhTxNl233d2wXIavmyzLZQw5uO9xGAvcAwXxyNuGBgL+VwE9/4oN6lu4PC67LnouQfQcAJFao4Nkf3vc5CQk1z58JqLDuUBYIo+8eJFDsYEmA9xHy56dSPzj65FH2LyPkiCpBD0U3kP9ZhHwiliXVwuvKJwPyTIU9IWDmndmT8Fs3SMp9iwBq7LejhP6PBifsvAhfCXR2xe7G/3+wKU28N+HMDwjySVprKub1fwmh/kWElvX0BYC/ktDsfa6bSBJ+qZi3uPnxebHorydkmRD/FEwU/NMIg2R/C/c+3U38CsJoXwrGF5nfmPNHE0apO1bePp1vQfiFgF9PyGLB3hcC/gpC85+vcPS/kNCsfY0fDJX3xwvOLv73CnYFv4/qXBL+vsUniv/xif6xb8yRkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKS+lT9H9tXXoCRvkxmAAAAAElFTkSuQmCC',
            desc: dropdownTrans.partners?.sapDesc || 'Partner with us to transform how SMEs operate globally using cutting-edge, cloud-based solutions.',
            url: 'https://www.sap.com',
        },
        {
            name: 'Oracle NetSuite',
            logo: 'data:image/png;base64,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',
            desc: dropdownTrans.partners?.oracleNetsuiteDesc || 'Discover the benefits of partnering with Oracle NetSuite for comprehensive business solutions.',
            url: 'https://www.netsuite.com',
        },
        {
            name: 'Microsoft',
            logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAvVBMVEX////zUSN/uQICpO//uQH///39//r//fLr///tsxD//+Z5qQDxUSX//9wAkdHu///+/+vQjXz/9O1pudHQjXPR+PnTSx1/tAD7+coAo/HhUCXu+dP5//oAm+N4rgCAuAGnwm0Ak9e2QRXESCHBiXv/9fLu+NlvnwBzmgDVUivHiYT/9Pbr+stwqAB4pADAinLCkGfVs6Srv3T9+P/3/+/J+fr+87f7+MoAgbkNjslqqsb+78TqvD7frCJssME4QYTWAAACUElEQVR4nO3dXXPSQBSA4ZV4diEFkqKtDa6iVuoH9atUW9T6/39WN9DYXtSZwslKyLxvh7A3zeyTXTq92cEYIiIiIiIiIiIiIiIiIiIiIqKGJlJetj2LmMntpXKuNWh6d+fZfmFDUz5Lqe6irAbJv2bolK0+gTZPVeXRjOLeHKo6fjsVL3Lybk/V+zzaKrrDvqrx/sh7sc9fdjqTyaTTWb6tPZjspTGFjzQFoQ1rWAo1Idyu0CPceWH7d2n7he3fpQgRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIEOEGwv7yZ+1Bf7w/tV7saWOF4o7Hqj58nDln5PTTM1Wf4wntl6eqvn6biTfm5OyVqjMXbZeKG2nKB84Yn4lLc12NPU8szhqTeTeaWk1iI07x78Nba3DbvGTm4aOoI8Zbw/IY9ebnr8XMZEnzmW4WNWnuvbfi2YffFevDAs7n/ly1hOFe8YgHur4fZOfOzPMfRxt3EV6DeH9Ls8vXNw1vXg8aVG/Dxc+udWJ//e6puor3P013mBRFkRSr64MHSTV48SQzYZMd9R6r6g1iCsNEN6lIdkeoqBJeINx5Yft3KUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRPh/hZxGQBhTuFAJkzp3aZyDpNnlYqhp8WclvKrhdF6krwXOuqqy8nisiEsHqtKIR53rqcHf6UxERERERERERERERERERERERERb7hpQ1W08w53kmAAAAABJRU5ErkJggg==',
            desc: dropdownTrans.partners?.microsoftDesc || 'Our Microsoft Partnership enhances business capabilities with cutting-edge solutions.',
            url: 'https://partner.microsoft.com',
        },
        {
            name: 'Cloudiax',
            logo: 'https://www.cloudiax.com/wp-content/themes/cloud/image/logo_cloudiax.svg',
            desc: dropdownTrans.partners?.cloudiaxDesc || 'Cloudiax enables businesses to enhance SAP capabilities with powerful cloud solutions.',
            url: 'https://www.cloudiax.com',
        },
        {
            name: 'Cloud Solutions',
            logo: 'data:image/png;base64,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',
            desc: dropdownTrans.partners?.cloudSolutionsDesc || 'Our expertise ensures seamless cloud migration and multi-cloud integration.',
            url: 'https://bmp-erp.com',
        },
    ];

    const getDropdownContent = (title) => {
        const content = {
            [navbarTrans.menu?.aboutUs || 'ABOUT US']: {
                cols: [
                    {
                        title: dropdownTrans.aboutUs?.whoWeAre || 'Who We Are',
                        desc: dropdownTrans.aboutUs?.whoWeAreDesc || 'We blend Artificial Intelligence and the Internet of Things to drive innovation and future-ready tech solutions.',
                        url: '/about'
                    },
                    {
                        title: dropdownTrans.aboutUs?.clientWall || 'Client wall',
                        desc: dropdownTrans.aboutUs?.clientWallDesc || 'Proudly serving industry leaders with innovative technology solutions that deliver real results.',
                        url: '/clientwall'
                    },
                    {
                        title: dropdownTrans.aboutUs?.contactUs || 'Contact Us',
                        desc: dropdownTrans.aboutUs?.contactUsDesc || 'Get in touch with AIOT IT Solutions your gateway to smart, innovative, and transformative tech solutions.',
                        url: '/contact'
                    },
                ],
                image: 'https://assets.entrepreneur.com/content/3x2/2000/20190109070104-shutterstock-529299211.jpeg?format=pjeg&auto=webp&crop=1:1',
                imageLabel: 'Technology & Impact'
            },
            [navbarTrans.menu?.whatWeDo || 'WHAT WE DO']: {
                cols: [
                    {
                        title: dropdownTrans.whatWeDo?.technology || 'Technology',
                        desc: dropdownTrans.whatWeDo?.technologyDesc || 'AIOT IT Solutions powers digital transformation',
                        list: [
                            { text: dropdownTrans.whatWeDo?.technologyDrivenInnovation || 'Technology-Driven Innovation Solutions', icon: Zap, url: '/technology-driven' },
                            { text: dropdownTrans.whatWeDo?.nextGenTechnology || 'Next-Gen Technology Solutions', icon: Layers, url: '/next-genration' },
                            { text: dropdownTrans.whatWeDo?.enterpriseSap || 'Enterprise SAP Solutions', icon: Building, url: '/sap-solutions' },
                            { text: dropdownTrans.whatWeDo?.utilityModernization || 'Utility Modernization', icon: Settings, url: '/utility-transformation' },
                            { text: dropdownTrans.whatWeDo?.oracleNetsuite || 'Oracle NetSuite Solutions', icon: Cloud, url: '/oracle-netsuite' },
                        ]
                    },
                    {
                        title: dropdownTrans.whatWeDo?.consulting || 'Consulting',
                        desc: dropdownTrans.whatWeDo?.consultingDesc || 'Strategic technology consulting to optimize operations and drive growth.',
                        list: [
                            { text: dropdownTrans.whatWeDo?.technologySolutionsProvider || 'Technology Solutions Provider', icon: Briefcase, url: '/consulting' },
                        ]
                    },
                    {
                        title: dropdownTrans.whatWeDo?.outSourcing || 'Out Sourcing',
                        desc: dropdownTrans.whatWeDo?.outSourcingDesc || 'Reliable offshore outsourcing services with cost efficiency and expert talent.',
                        list: [
                            { text: dropdownTrans.whatWeDo?.strategicOffshore || 'Strategic Offshore Solutions', icon: GlobeIcon, url: '/outsoursing' },
                        ]
                    },
                ],
                image: 'https://rockwellautomation.scene7.com/is/image/rockwellautomation/business-people-meeting-office-digital-transformation-SHS-2177507065.3840.jpg',
                imageLabel: 'Digital Transformation'
            },
            [navbarTrans.menu?.solutions || 'SOLUTIONS']: {
                cols: [
                    {
                        title: dropdownTrans.solutions?.industries || 'Industries',
                        list: [
                            { text: dropdownTrans.solutions?.healthIndustry || 'Health Industry', icon: Stethoscope, url: '/industries/health' },
                            { text: dropdownTrans.solutions?.engineeringIndustry || 'Engineering Industry', icon: Wrench, url: '/industries/engineering' },
                            { text: dropdownTrans.solutions?.constructionIndustry || 'Construction Industry', icon: HardHat, url: '/industries/construction' },
                            { text: dropdownTrans.solutions?.retail || 'Retail', icon: Store, url: '/industries/retail' },
                        ]
                    },
                    {
                        title: dropdownTrans.solutions?.allInOneSuit || 'All In One Suit',
                        list: [
                            { text: dropdownTrans.solutions?.attendee || 'Attendee', url: '/solutions/attendee' },
                            { text: dropdownTrans.solutions?.hcm || 'HCM', url: '/solutions/hcm' },
                            { text: dropdownTrans.solutions?.pos || 'POS', url: '/solutions/pos' },
                        ]
                    },
                    {
                        title: dropdownTrans.solutions?.solutions || 'Solutions',
                        content: (
                            <div className="space-y-5">
                                <div className="text-sm text-gray-800 cursor-pointer" style={{ '&:hover': { color: colors.logo } }}>{dropdownTrans.solutions?.connector || 'Connector'}</div>
                                <div className="text-sm text-gray-800 cursor-pointer" style={{ '&:hover': { color: colors.logo } }}>{dropdownTrans.solutions?.hireLawyerOnline || 'Hire Lawyer Online'}</div>
                                <div className="text-sm text-gray-800 cursor-pointer" style={{ '&:hover': { color: colors.logo } }}>{dropdownTrans.solutions?.sapBusinessOneUi || 'SAP Business One User Interface'}</div>
                                <div className="text-sm text-gray-800 cursor-pointer" style={{ '&:hover': { color: colors.logo } }}>{dropdownTrans.solutions?.hrManagementSystem || 'HR Management System'}</div>
                            </div>
                        )
                    },
                    {
                        title: navbarTrans.bookADemo || 'Book a Demo',
                        content: (
                            <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-white flex flex-col items-center justify-center text-center h-full shadow-lg">
                                {/* <img
                                    src="/Philosophy.png"
                                    alt="Solution Banner"
                                    className="w-24 h-24 object-contain mb-4"
                                /> */}
                                <h3 className="text-xl font-bold mb-4 leading-tight">
                                    {navbarTrans.demoBannerTitle || 'Your All-in-One Solution for Business Success'}
                                </h3>
                                <button
                                    onClick={() => navigate('/book-demo')}
                                    className="bg-white text-red-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition text-sm"
                                >
                                    {navbarTrans.bookADemo || 'Book a Demo'}
                                </button>
                            </div>
                        )
                    },
                ],
                image: null
            },
            [navbarTrans.menu?.resources || 'RESOURCES']: {
                cols: [
                    {
                        title: dropdownTrans.resources?.news || 'News',
                        desc: dropdownTrans.resources?.newsDesc || 'Stay updated with the latest news and innovations from AIOT IT Solutions.',
                        url: ''
                    },
                    {
                        title: dropdownTrans.resources?.blogs || 'Blogs',
                        desc: dropdownTrans.resources?.blogsDesc || 'Explore insights, trends, and expert opinions on technology and innovation.',
                        url: ''
                    },
                    {
                        title: dropdownTrans.resources?.innovateWithInsights || 'Innovate with Insights',
                        desc: dropdownTrans.resources?.innovateWithInsightsDesc || 'Discover strategies to enhance your business through emerging trends and thought leadership.',
                        url: null
                    },
                ],
                image: 'news.png',
                imageLabel: 'Knowledge Hub'
            },
            [navbarTrans.menu?.partners || 'PARTNERS']: {
                cols: partners.map(partner => ({
                    title: partner.name,
                    desc: partner.desc,
                    logo: partner.logo,
                    url: partner.url
                })),
            },
        };
        return content[title] || content[navbarTrans.menu?.aboutUs || 'ABOUT US'];
    };

    const handleNavClick = (link, title) => {
        if (link && link.startsWith('http')) {
            window.open(link, '_self');
        } else if (link) {
            navigate(link);
        }
        setSidebarOpen(false);
        setMobileDropdownItem(null);
    };

    const toggleMobileDropdown = (index) => {
        setMobileDropdownItem(mobileDropdownItem === index ? null : index);
    };

    return (
        <>
            {/* Top Bar */}
            <div style={{ backgroundColor: colors.logo }} className="text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="py-3 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
                        <div className="flex flex-col gap-2 text-xs font-bold ">
                            <div className="flex items-center gap-5 font-[500]">
                                <span>{navbarTrans.topBar?.phone || '+92 3123456778'}</span>
                                <span>{navbarTrans.topBar?.email || 'info@aiotcons.com'}</span>
                            </div>
                            <span className="hidden lg:block text-xs font-[500]">
                                {navbarTrans.topBar?.address || '15/1C, GECHS, PHASE III, PECO ROAD, LAHORE 54100, PUNJAB, PAKISTAN'}
                            </span>
                        </div>
                        <div className="flex items-center gap-6 justify-center">
                            <div className="flex gap-4">
                                {socialIcons.map(({ Icon, url, label }) => (
                                    <a key={label} href={url} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" aria-label={label}>
                                        <Icon size={18} color="white" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav style={{ backgroundColor: colors.background }} className="shadow-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`flex items-center h-20 ${language === 'ar' ? 'justify-between gap-35' : 'justify-between'}`}>
                        <div className='flex items-center gap-40'>

                        <div onClick={() => handleNavClick('/', 'Home')} className="cursor-pointer">
                            <img src="/NewLogo.png" alt="AIOT Logo" className="h-auto w-13" />
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex items-center gap-10 relative h-[80px]" onMouseLeave={() => setHoveredItem(null)}>
                            {menuItems.map((item, index) => {
                                const hasDropdown = ![navbarTrans.menu?.home || 'HOME', navbarTrans.menu?.marketplace || 'MARKETPLACE'].includes(item.title);
                                return (
                                    <button
                                        key={item.title}
                                        onClick={() => handleNavClick(item.link, item.title)}
                                        onMouseEnter={() => hasDropdown && setHoveredItem(index)}
                                        className={`text-sm tracking-wider transition-all duration-200 font-[450] ${item.title === (navbarTrans.menu?.marketplace || 'MARKETPLACE') ? '' : ''
                                            }`}
                                        style={{
                                            color: item.title === (navbarTrans.menu?.marketplace || 'MARKETPLACE') ? '#000000ff' : '#000000ff',
                                        }}
                                    >
                                        {item.title}
                                    </button>
                                );
                            })}
                            {/* Language Dropdown for Desktop */}
                           
                        </div>
                        </div>

                        <div className="relative">
                                <button
                                    onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                                    className="flex items-center gap-2 text-sm tracking-wider transition-all duration-200 font-[450]"
                                    style={{ color: '#000000ff' }}
                                >
                                    <GlobeIcon size={18} />
                                    {language.toUpperCase()}
                                    <svg className={`w-4 h-4 transition-transform ${languageDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {languageDropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md z-5000">
                                        {languages.map((lang) => (
                                            <button
                                                key={lang.code}
                                                onClick={() => {
                                                    setLanguage(lang.code);
                                                    setLanguageDropdownOpen(false);
                                                }}
                                                className="w-full px-4 py-2 text-left hover:bg-gray-100 text-sm"
                                            >
                                                {lang.name}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        <button onClick={() => setSidebarOpen(true)} className="lg:hidden" style={{ color: colors.logo }}>
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Desktop Mega Dropdown */}
                {hoveredItem !== null && ![navbarTrans.menu?.home || 'HOME', navbarTrans.menu?.marketplace || 'MARKETPLACE'].includes(menuItems[hoveredItem]?.title) && (
                    <div
                        className="absolute top-full left-0 w-full bg-white shadow-2xl border-t-4 z-50"
                        style={{ borderColor: colors.logo }}
                        onMouseEnter={() => setHoveredItem(hoveredItem)}
                        onMouseLeave={() => setHoveredItem(null)}
                    >
                        <div className="h-[55vh] overflow-y-auto">
                            <div
                                className="h-full grid gap-px border-l border-gray-300"
                                style={{
                                    gridTemplateColumns:
                                        menuItems[hoveredItem].title === (navbarTrans.menu?.partners || 'PARTNERS')
                                            ? 'repeat(5, 1fr)'
                                            : menuItems[hoveredItem].title === (navbarTrans.menu?.solutions || 'SOLUTIONS')
                                                ? 'repeat(4, 1fr)'
                                                : 'repeat(3, 1fr) 1fr',
                                }}
                            >
                                {(() => {
                                    const { cols, image, imageLabel } = getDropdownContent(menuItems[hoveredItem].title);
                                    const isPartners = menuItems[hoveredItem].title === (navbarTrans.menu?.partners || 'PARTNERS');
                                    const isSolutions = menuItems[hoveredItem].title === (navbarTrans.menu?.solutions || 'SOLUTIONS');

                                    return (
                                        <>
                                            {cols.map((col, idx) => (
                                                <div
                                                    key={idx}
                                                    className="border-r border-gray-300 p-8 flex flex-col bg-white hover:bg-gray-50 transition-colors"
                                                >
                                                    {isPartners ? (
                                                        <div className="flex flex-col items-center text-center">
                                                            <div className="w-32 h-32 mb-6 rounded-2xl overflow-hidden border-2 border-dashed border-gray-300 flex items-center justify-center">
                                                                <img
                                                                    src={col.logo || 'https://via.placeholder.com/150?text=Logo'}
                                                                    alt={col.title}
                                                                    className="w-full h-full object-contain p-4"
                                                                    onError={(e) => { e.target.src = 'https://via.placeholder.com/150?text=Logo'; }}
                                                                />
                                                            </div>
                                                            <h3 className="text-lg font-bold text-orange-600">{col.title}</h3>
                                                            <p className="text-sm text-gray-600 mt-2">{col.desc}</p>
                                                            <a
                                                                href={col.url}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="mt-6 text-white rounded-full px-6 py-2 text-sm font-medium hover:bg-orange-600 transition inline-block"
                                                                style={{ backgroundColor: colors.logo }}
                                                            >
                                                                {navbarTrans.learnMore || 'Learn More'}
                                                            </a>
                                                        </div>
                                                    ) : col.content ? (
                                                        col.content
                                                    ) : (
                                                        <>
                                                            <h2 className="text-2xl font-[550] mb-6" style={{ color: colors.logo }}>
                                                                {col.title}
                                                            </h2>

                                                            {col.list ? (
                                                                <ul className="space-y-4">
                                                                    {col.list.map((item, i) => (
                                                                        <li
                                                                            key={i}
                                                                            className="flex items-center gap-4 text-gray-700 text-base cursor-pointer transition group"
                                                                            onClick={() => handleNavClick(item.url, item.text)}
                                                                            style={{ '&:hover': { color: colors.logo } }}
                                                                        >
                                                                            {item.icon && <item.icon size={24} className="group-hover:scale-110 transition" style={{ color: colors.logo }} />}
                                                                            <span className="group-hover:translate-x-1 transition">{item.text}</span>
                                                                            <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition ml-auto" />
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            ) : (
                                                                <p className="text-gray-700 text-sm leading-relaxed">{col.desc}</p>
                                                            )}

                                                            {col.url ? (
                                                                <button
                                                                    onClick={() => handleNavClick(col.url, col.title)}
                                                                    className="mt-8 text-white rounded-full px-6 py-2 text-sm font-medium transition w-fit"
                                                                    style={{ backgroundColor: colors.logo, '&:hover': { backgroundColor: '#F65314' } }}
                                                                >
                                                                    {navbarTrans.explore || 'Explore'} {col.title}
                                                                </button>
                                                            ) : !col.list && !isSolutions && (
                                                                <button
                                                                    onClick={() => handleNavClick('/contact', col.title)}
                                                                    className="mt-8 text-white rounded-full px-6 py-2 text-sm font-medium transition w-fit"
                                                                    style={{ backgroundColor: colors.logo, '&:hover': { backgroundColor: 'orange-600' } }}
                                                                >
                                                                    {navbarTrans.explore || 'Explore'} {col.title}
                                                                </button>
                                                            )}
                                                        </>
                                                    )}
                                                </div>
                                            ))}

                                            {/* Image Column */}
                                            {!isPartners && !isSolutions && image && (
                                                <div className="p-6 flex items-center justify-center bg-gray-50">
                                                    <div className="w-full h-full bg-gradient-to-r from-orange-200 via-amber-100 to-gray-300 rounded-lg flex items-center justify-center overflow-hidden">
                                                        <img src={image} alt={imageLabel} className="w-full h-full object-cover" />
                                                    </div>
                                                </div>
                                            )}
                                        </>
                                    );
                                })()}
                            </div>
                        </div>
                    </div>
                )}
            </nav>

            {/* Mobile Sidebar */}
            {sidebarOpen && (
                <>
                    <div className="fixed inset-0 bg-black/10 backdrop-blur-sm z-40" onClick={() => setSidebarOpen(false)} />
                    <div className="fixed left-0 top-0 w-72 h-full bg-white shadow-2xl z-50 overflow-y-auto">
                        <div className="p-6 border-b flex justify-between items-center">
                            <h3 className="text-xl font-bold text-gray-800">{navbarTrans.menuLabel || 'Menu'}</h3>
                            <button onClick={() => setSidebarOpen(false)} style={{ color: colors.logo }}>
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        <div className="py-4">
                            {menuItems.map((item, index) => {
                                const hasDropdown = ![navbarTrans.menu?.home || 'HOME', navbarTrans.menu?.marketplace || 'MARKETPLACE'].includes(item.title);
                                const isOpen = mobileDropdownItem === index;
                                return (
                                    <div key={item.title}>
                                        <button
                                            onClick={() => hasDropdown ? toggleMobileDropdown(index) : handleNavClick(item.link, item.title)}
                                            className={`w-full text-left px-6 py-4 font-semibold hover:bg-gray-50 flex justify-between items-center `}
                                        >
                                            <span style={{ color: item.title === (navbarTrans.menu?.marketplace || 'MARKETPLACE') ? colors.logo : '#000000ff' }}>{item.title}</span>
                                            {hasDropdown && (
                                                <svg className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            )}
                                        </button>
                                        {hasDropdown && isOpen && (
                                            <div className="bg-gray-50 px-6 py-6 border-t border-gray-200 text-sm">
                                                {getDropdownContent(item.title).cols.map((col, i) => (
                                                    <div key={i} className="mb-6 last:mb-0">
                                                        <h4 className="font-bold mb-3" style={{ color: colors.logo }}>{col.title || col.name}</h4>
                                                        {col.list ? (
                                                            <ul className="space-y-3">
                                                                {col.list.map((li, idx) => (
                                                                    <li
                                                                        key={idx}
                                                                        className="flex items-center gap-3 text-gray-600 cursor-pointer"
                                                                        style={{ '&:hover': { color: colors.logo } }}
                                                                        onClick={() => handleNavClick(li.url, li.text)}
                                                                    >
                                                                        {li.icon && <li.icon size={16} style={{ color: colors.logo }} />}
                                                                        <span>{li.text}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        ) : (
                                                            <>
                                                                <p className="text-gray-600 text-xs leading-relaxed mb-3">{col.desc}</p>
                                                                {col.url && (
                                                                    <button
                                                                        onClick={() => handleNavClick(col.url, col.title)}
                                                                        className="text-sm font-medium hover:underline"
                                                                        style={{ color: colors.logo }}
                                                                    >
                                                                        {navbarTrans.exploreArrow || 'Explore →'}
                                                                    </button>
                                                                )}
                                                            </>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                            {/* <a
                                href="https://www.nizam365.com/Plans"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full text-white px-6 py-4 font-bold mt-4 block text-center"
                                style={{ backgroundColor: colors.logo }}
                            >
                                {navbarTrans.viewPlans || 'VIEW PLANS'}
                            </a> */}
                            {/* Language Selector for Mobile */}
                            <div className="px-6 py-4 border-t border-gray-200">
                                <h4 className="font-bold mb-3" style={{ color: colors.logo }}>Language</h4>
                                <div className="flex flex-col gap-2">
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => setLanguage(lang.code)}
                                            className={`text-left text-sm ${language === lang.code ? 'font-bold' : 'text-gray-600'}`}
                                            style={{ color: language === lang.code ? colors.logo : undefined }}
                                        >
                                            {lang.name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>

    );
};

export default Navbar;