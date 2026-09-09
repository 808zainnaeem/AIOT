import React from 'react';

function SocialSvg({ size, color, children }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={color}
            aria-hidden="true"
        >
            {children}
        </svg>
    );
}

export function FacebookIcon({ size = 18, color = 'currentColor' }) {
    return (
        <SocialSvg size={size} color={color}>
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </SocialSvg>
    );
}

export function XIcon({ size = 18, color = 'currentColor' }) {
    return (
        <SocialSvg size={size} color={color}>
            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
        </SocialSvg>
    );
}

export function LinkedinIcon({ size = 18, color = 'currentColor' }) {
    return (
        <SocialSvg size={size} color={color}>
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </SocialSvg>
    );
}

export function InstagramIcon({ size = 18, color = 'currentColor' }) {
    return (
        <SocialSvg size={size} color={color}>
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </SocialSvg>
    );
}

export function ThreadsIcon({ size = 18, color = 'currentColor' }) {
    return (
        <SocialSvg size={size} color={color}>
            <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.11.66c-.855-3.25-2.733-4.868-6.225-4.887-2.577 0-4.564.934-5.903 2.777-1.203 1.654-1.806 3.945-1.806 6.83 0 2.885.603 5.176 1.806 6.83 1.339 1.843 3.326 2.777 5.903 2.777 2.412 0 4.132-.856 5.158-2.574.92-1.528 1.447-3.66 1.563-6.258h-7.078v-3.02h9.72c.092 2.12-.228 4.74-1.277 6.856-1.41 2.87-3.92 4.324-7.455 4.324z" />
        </SocialSvg>
    );
}

export function YoutubeIcon({ size = 18, color = 'currentColor' }) {
    return (
        <SocialSvg size={size} color={color}>
            <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </SocialSvg>
    );
}

export const AIOT_SOCIAL_LINKS = [
    { Icon: FacebookIcon, url: 'https://www.facebook.com/WEAIOT/', label: 'Facebook' },
    { Icon: XIcon, url: 'https://x.com/WEAIOT', label: 'X' },
    { Icon: LinkedinIcon, url: 'https://www.linkedin.com/company/weaiot', label: 'LinkedIn' },
    { Icon: InstagramIcon, url: 'https://www.instagram.com/weaiot/', label: 'Instagram' },
    { Icon: ThreadsIcon, url: 'https://www.threads.net/@weaiot', label: 'Threads' },
    { Icon: YoutubeIcon, url: 'https://www.youtube.com/@WEAIOT', label: 'YouTube' },
];
